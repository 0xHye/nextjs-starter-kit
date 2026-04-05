#!/usr/bin/env bash
# Stop 이벤트: Claude 작업 완료 시 Slack 알림

set -euo pipefail

# stdin에서 hook 이벤트 JSON 읽기 (한 번만 읽을 수 있으므로 먼저 읽어두기)
INPUT=$(cat)

# 프로젝트 루트에서 .env 파일 로드
CWD=$(INPUT="$INPUT" node -e "
  const d=JSON.parse(process.env.INPUT||'{}');
  process.stdout.write(d.cwd||'');
" 2>/dev/null || echo "")

if [ -z "${SLACK_WEBHOOK_URL:-}" ] && [ -n "$CWD" ] && [ -f "$CWD/.env" ]; then
  export SLACK_WEBHOOK_URL=$(grep -E '^SLACK_WEBHOOK_URL=' "$CWD/.env" | cut -d '=' -f2-)
fi

if [ -z "${SLACK_WEBHOOK_URL:-}" ]; then
  exit 0
fi

# 모든 데이터 추출, 페이로드 생성, 전송을 단일 node 프로세스에서 처리 (bash 경유 인코딩 손상 방지)
INPUT="$INPUT" SLACK_WEBHOOK_URL="$SLACK_WEBHOOK_URL" node -e "
  const path = require('path');
  const fs = require('fs');

  const d = JSON.parse(process.env.INPUT || '{}');
  const project = path.basename(d.cwd || 'unknown');
  const transcriptPath = d.transcript_path || '';

  const now = new Date();
  const timestamp = now.getFullYear() + '-' +
    String(now.getMonth()+1).padStart(2,'0') + '-' +
    String(now.getDate()).padStart(2,'0') + ' ' +
    String(now.getHours()).padStart(2,'0') + ':' +
    String(now.getMinutes()).padStart(2,'0') + ':' +
    String(now.getSeconds()).padStart(2,'0');

  // transcript_path가 없으면 cwd + sessionId로 파일 경로 추론
  let resolvedPath = transcriptPath;
  if (!resolvedPath && d.session_id && d.cwd) {
    const os = require('os');
    const slug = d.cwd.replace(/[:\\/]/g, '-').replace(/^-+/, '');
    resolvedPath = path.join(os.homedir(), '.claude', 'projects', slug, d.session_id + '.jsonl');
  }

  let lastMsg = '(내용 없음)';
  if (resolvedPath && fs.existsSync(resolvedPath)) {
    try {
      const lines = fs.readFileSync(resolvedPath, 'utf8')
        .trim().split('\n').filter(Boolean)
        .map(l => { try { return JSON.parse(l); } catch(e) { return null; } })
        .filter(Boolean);
      for (let i = lines.length - 1; i >= 0; i--) {
        const e = lines[i];
        // jsonl 구조: e.message.role, e.message.content
        const msg = e.message;
        if (msg && msg.role === 'assistant' && Array.isArray(msg.content)) {
          const t = msg.content.find(c => c.type === 'text');
          if (t && t.text) {
            lastMsg = t.text.slice(0, 200);
            if (t.text.length > 200) lastMsg += '...';
            break;
          }
        }
      }
    } catch(e) { lastMsg = '(파싱 실패)'; }
  }

  const payload = {
    blocks: [
      { type: 'header', text: { type: 'plain_text', text: '✅ Claude 작업 완료', emoji: true } },
      { type: 'section', fields: [
        { type: 'mrkdwn', text: '*프로젝트*\n\`' + project + '\`' },
        { type: 'mrkdwn', text: '*완료 시각*\n' + timestamp }
      ]},
      { type: 'section', text: { type: 'mrkdwn', text: '*마지막 응답:*\n' + lastMsg } },
      { type: 'divider' }
    ]
  };
  // curl 대신 node https로 직접 전송 (bash 경유 시 인코딩 손상 방지)
  const https = require('https');
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  const body = JSON.stringify(payload);
  const url = new URL(webhookUrl);
  const options = {
    hostname: url.hostname,
    path: url.pathname,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(body, 'utf8')
    }
  };
  const req = https.request(options);
  req.write(body, 'utf8');
  req.end();
" 2>/dev/null || true
