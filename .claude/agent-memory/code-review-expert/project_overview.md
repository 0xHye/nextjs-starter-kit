---
name: 프로젝트 구조 및 아키텍처
description: Next.js 15 + React 19 스타터킷 프로젝트의 전체 구조, 기술 스택, 디렉터리 구성
type: project
---

## 프로젝트 정보
- **프레임워크**: Next.js 16.2.2, React 19.2.4
- **언어**: TypeScript 5
- **상태 관리**: Zustand (아직 미사용 - 계획 단계)
- **폼 검증**: React Hook Form + Zod (아직 미사용 - 계획 단계)
- **스타일링**: Tailwind CSS v4, shadcn/ui
- **테스트**: Playwright MCP 설정됨

## 핵심 기술 스택
- **UI 라이브러리**: radix-ui, shadcn/ui
- **아이콘**: lucide-react
- **토스트**: sonner
- **테마**: next-themes
- **유틸**: clsx, tailwind-merge, class-variance-authority

## 디렉터리 구조
```
├── app/
│   ├── (auth)/          # 인증 관련 페이지
│   ├── (dashboard)/     # 대시보드 영역
│   ├── (marketing)/     # 마케팅 페이지
│   ├── components/      # 커스텀 컴포넌트 (app 컴포넌트)
│   ├── layout.tsx       # 루트 레이아웃
│   ├── globals.css      # 전역 스타일
│   └── not-found.tsx
├── components/          # 재사용 가능한 컴포넌트
│   ├── ui/             # shadcn/ui 컴포넌트
│   ├── common/         # 공용 컴포넌트
│   ├── layout/         # 레이아웃 컴포넌트
│   └── sections/       # 페이지 섹션 컴포넌트
├── hooks/              # React 커스텀 훅
├── lib/                # 유틸리티 함수 및 상수
├── types/              # TypeScript 타입 정의
└── .claude/            # Claude Code 설정
```

## Atomic Design 패턴
프로젝트는 Atomic Design 패턴을 따름:
- **Atoms**: Input, Label, Button 등 기본 UI 요소
- **Molecules**: FormField, SearchInput 등 단순 조합
- **Organisms**: Header, Sidebar, PageHeader 등 복잡한 컴포넌트
- **Templates**: (auth)Layout, (dashboard)Layout 등
- **Pages**: 페이지 컴포넌트

## 현재 상태 (2026-04-05)
- **최신 커밋**: "✨ feat: add-component 커맨드 및 Button 컴포넌트 추가"
- **Playwright MCP**: 설정됨, 테스트 작성 가능 상태
- **컴포넌트 수**: 약 6,200개 파일 (대부분 빌드 산출물 포함)
- **소스 파일**: components/, hooks/, lib/, types/ 등에 핵심 코드 집중
