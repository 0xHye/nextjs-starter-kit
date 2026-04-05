#!/usr/bin/env bash
# PermissionRequest 이벤트: 권한 요청 시 Slack 알림

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
  const https = require('https');

  const d = JSON.parse(process.env.INPUT || '{}');
  const toolName = d.tool_name || 'unknown';
  const project = path.basename(d.cwd || 'unknown');

  let detail = '';
  if (d.tool_input) {
    if (d.tool_input.command)        detail = d.tool_input.command;
    else if (d.tool_input.path)      detail = d.tool_input.path;
    else if (d.tool_input.file_path) detail = d.tool_input.file_path;
    else detail = JSON.stringify(d.tool_input).slice(0, 150);
  }
  if (detail.length > 150) detail = detail.slice(0, 150) + '...';

  // 위험 명령어면 경고 이모지
  const isDangerous = /rm |delete|drop |truncate|--force|-f /i.test(detail);
  const emoji = isDangerous ? '⚠️' : '🔐';

  const now = new Date();
  const timestamp = now.getFullYear() + '-' +
    String(now.getMonth()+1).padStart(2,'0') + '-' +
    String(now.getDate()).padStart(2,'0') + ' ' +
    String(now.getHours()).padStart(2,'0') + ':' +
    String(now.getMinutes()).padStart(2,'0') + ':' +
    String(now.getSeconds()).padStart(2,'0');

  const payload = {
    blocks: [
      { type: 'header', text: { type: 'plain_text', text: emoji + ' Claude 권한 요청', emoji: true } },
      { type: 'section', fields: [
        { type: 'mrkdwn', text: '*도구*\n\`' + toolName + '\`' },
        { type: 'mrkdwn', text: '*프로젝트*\n\`' + project + '\`' }
      ]},
      { type: 'section', text: { type: 'mrkdwn', text: '*실행 내용:*\n\`\`\`' + detail + '\`\`\`' } },
      { type: 'context', elements: [
        { type: 'mrkdwn', text: '🕐 ' + timestamp + ' | Claude Code가 허가를 기다리고 있습니다.' }
      ]},
      { type: 'divider' }
    ]
  };

  const body = JSON.stringify(payload);
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
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

# 알림만 전송 - Claude 기본 권한 동작 유지
exit 0
