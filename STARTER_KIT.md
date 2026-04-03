# Next.js 16 모던 웹 스타터킷

프로덕션 준비 완료된 웹 애플리케이션 개발용 스타터킷입니다.
Atomic Design 패턴으로 재사용 가능한 컴포넌트 계층을 제공합니다.

---

## 기술 스택

- **Framework**: Next.js 16.2.2 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (radix-nova)
- **Icons**: lucide-react
- **Theme**: next-themes (다크모드 지원)
- **Fonts**: Geist Sans, Geist Mono

---

## 프로젝트 구조

```
app/
  layout.tsx                  # 루트 레이아웃 (Theme, Tooltip, Toaster 제공)
  not-found.tsx               # 404 페이지
  
  (marketing)/                # Route Group: 마케팅 페이지
    layout.tsx                # Header + Footer
    page.tsx                  # 랜딩 페이지 (Hero + Features + CTA)
    about/page.tsx            # 소개 페이지
    pricing/page.tsx          # 가격 페이지
  
  (auth)/                     # Route Group: 인증 페이지
    layout.tsx                # 중앙 정렬 레이아웃
    login/page.tsx
    register/page.tsx
  
  (dashboard)/                # Route Group: 대시보드
    layout.tsx                # Sidebar 레이아웃
    loading.tsx               # 로딩 상태
    error.tsx                 # 에러 경계
    dashboard/page.tsx        # 대시보드 메인 페이지

components/
  ui/                         # shadcn/ui 자동 생성 컴포넌트 (수정 금지)
  
  common/                     # Tier 2 분자 컴포넌트 (조합 컴포넌트)
    loading-spinner.tsx
    theme-toggle.tsx
    form-field.tsx
    stat-card.tsx
    empty-state.tsx
    search-input.tsx
    user-avatar.tsx
    copy-button.tsx
  
  layout/                     # Tier 3 레이아웃 유기체
    header.tsx                # 글로벌 헤더
    footer.tsx                # 글로벌 푸터
    sidebar.tsx               # 대시보드 사이드바
    mobile-nav.tsx            # 모바일 메뉴
    page-header.tsx           # 페이지 섹션 헤더
  
  sections/                   # Tier 3 페이지 섹션
    hero.tsx                  # 랜딩 히어로
    features.tsx              # 기능 소개
    cta.tsx                   # 전환 유도

hooks/
  use-mobile.ts               # 모바일 뷰포트 감지
  use-debounce.ts             # 검색 입력 디바운스
  use-local-storage.ts        # localStorage 훅

lib/
  constants.ts                # 사이트 설정, 네비게이션 상수
  utils.ts                    # cn() 유틸리티 함수

types/
  index.ts                    # 공통 TypeScript 타입
```

---

## 컴포넌트 계층 (Atomic Design)

### Tier 1: Atoms (원자)
`components/ui/` 에 shadcn/ui 자동 생성.
**직접 수정하면 안 됨** - 항상 `npx shadcn@latest add` 로 업데이트.

- Button, Input, Label
- Card, Dialog, Sheet
- Checkbox, Switch, Radio
- Badge, Avatar, Separator 등

### Tier 2: Molecules (분자)
`components/common/` 에서 shadcn 컴포넌트를 조합하여 재사용 가능한 단위.

- `FormField`: Label + Input + 에러 텍스트
- `StatCard`: 대시보드 지표 카드
- `LoadingSpinner`: 회전 로딩 인디케이터
- `ThemeToggle`: 다크모드 토글
- `UserAvatar`: 온라인/오프라인 배지 포함 아바타

### Tier 3: Organisms (유기체)
`components/layout/`, `components/sections/` 에서 페이지의 독립적인 섹션.

**레이아웃**: Header, Footer, Sidebar
**섹션**: Hero, Features, CTA

### Tier 4: Templates
각 Route Group의 `layout.tsx` 파일이 템플릿 역할.

- `(marketing)`: Header + Content + Footer
- `(auth)`: 중앙 정렬 Card
- `(dashboard)`: Sidebar + Content

### Tier 5: Pages
각 `page.tsx` 파일이 실제 라우트.

---

## 빠른 시작

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 열기.

### 프로덕션 빌드

```bash
npm run build
npm run start
```

### TypeScript 타입 검증

```bash
npm run build
```

---

## 주요 특징

### 1. 다크모드 지원 (next-themes)
```tsx
// components/common/theme-toggle.tsx 사용
import { ThemeToggle } from "@/components/common/theme-toggle"

export function Header() {
  return (
    <>
      <ThemeToggle />
    </>
  )
}
```

### 2. Route Group 기반 레이아웃 분리
각 라우트 그룹마다 다른 레이아웃 적용:

- `/` → Header + Footer (marketing)
- `/login`, `/register` → 중앙 정렬 (auth)
- `/dashboard` → Sidebar (dashboard)

### 3. 타입 안전성
- TypeScript strict mode
- `any` 타입 완전 제거
- `as const + keyof typeof` 패턴으로 타입 안전 매핑

예: 아이콘 이름 매핑
```tsx
const iconMap = {
  LayoutDashboard,
  Settings,
} as const

type IconName = keyof typeof iconMap
const Icon = iconMap[link.icon as IconName]
```

### 4. 반응형 디자인
모든 컴포넌트는 모바일 우선 반응형:
- 모바일: 1열
- 태블릿: 2-3열
- 데스크탑: 4열 이상

### 5. 접근성 (Accessibility)
- 시맨틱 HTML 사용
- 스크린 리더 지원 (`sr-only` 클래스)
- 포커스 스타일 정의
- ARIA 속성 활용

---

## 자주 쓰는 패턴

### 새 페이지 추가

```bash
# 마케팅 페이지
mkdir -p app/(marketing)/new-page
echo "export default function NewPage() { return <div>Content</div> }" > app/(marketing)/new-page/page.tsx

# 대시보드 페이지
mkdir -p app/(dashboard)/settings
echo "export default function Settings() { return <div>Settings</div> }" > app/(dashboard)/settings/page.tsx
```

### 새 컴포넌트 추가

```bash
# common 분자 컴포넌트
touch components/common/my-component.tsx

# layout 유기체 컴포넌트
touch components/layout/my-layout.tsx
```

### shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add [component-name]
```

예: 데이터 테이블
```bash
npx shadcn@latest add table
npx shadcn@latest add pagination
```

---

## Next.js 16 주요 변경사항

### params/searchParams는 Promise 타입

```tsx
// page.tsx
export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ page?: string }>
}) {
  const { id } = await params
  const { page = '1' } = await searchParams
  return <div>ID: {id}, Page: {page}</div>
}
```

### suppressHydrationWarning

다크모드 토글로 인한 하이드레이션 불일치 방지:

```tsx
// app/layout.tsx
<html suppressHydrationWarning>
  {/* ... */}
</html>
```

### 다크모드 FOUC 방지 스크립트

```tsx
<script dangerouslySetInnerHTML={{
  __html: `
    (function() {
      var theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    })();
  `
}} />
```

---

## 커스터마이제이션

### 사이트 메타데이터

`lib/constants.ts` 에서 수정:

```tsx
export const SITE_CONFIG = {
  name: "내 앱 이름",
  description: "설명",
  url: "https://example.com",
} as const
```

### 네비게이션 링크

`lib/constants.ts` 에서 수정:

```tsx
export const NAV_LINKS = [
  { label: "홈", href: "/" },
  { label: "블로그", href: "/blog" },
  { label: "연락처", href: "/contact" },
] as const

export const SIDEBAR_LINKS = [
  { label: "대시보드", href: "/dashboard", icon: "LayoutDashboard" },
  { label: "사용자", href: "/dashboard/users", icon: "Users" },
  { label: "설정", href: "/dashboard/settings", icon: "Settings" },
] as const
```

### 색상 테마

`app/globals.css` 에서 CSS 변수 수정:

```css
:root {
  --primary: oklch(...);
  --secondary: oklch(...);
  /* ... */
}

.dark {
  --primary: oklch(...);
  /* ... */
}
```

---

## 개발 팁

### 콘솔 에러 체크

개발 중 TypeScript 에러 확인:

```bash
npm run build
```

### 컴포넌트 스토리북 패턴

컴포넌트 재사용성 테스트:

```tsx
// components/common/my-component.tsx 작성 후
// app/(marketing)/components/page.tsx 에서 데모 페이지 만들기

export default function ComponentsShowcase() {
  return (
    <div className="space-y-8">
      <MyComponent prop1="value1" />
      <MyComponent prop1="value2" />
    </div>
  )
}
```

### 에러 처리 패턴

```tsx
// app/(dashboard)/error.tsx
"use client"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => reset()}>다시 시도</button>
    </div>
  )
}
```

---

## 체크리스트

새 프로젝트를 시작할 때:

- [ ] `lib/constants.ts` 수정 (SITE_CONFIG, NAV_LINKS)
- [ ] `app/globals.css` 색상 커스터마이즈 (선택)
- [ ] `(marketing)/page.tsx` 내용 수정
- [ ] 필요한 shadcn/ui 컴포넌트 추가
- [ ] API 연결 (서버 액션 또는 fetch)
- [ ] 배포 설정 (Vercel, etc.)

---

## 도움말

### 자주 묻는 질문

**Q: 새로운 shadcn/ui 컴포넌트를 추가하려면?**

```bash
npx shadcn@latest add [component-name]
```

**Q: 컴포넌트를 수정하려면?**

A: `components/ui/` 의 shadcn 컴포넌트를 직접 수정하지 말고, `components/common/` 에서 래핑하여 새 컴포넌트 만들기.

**Q: TypeScript 에러가 나면?**

```bash
npm run build  # 정확한 에러 메시지 확인
```

**Q: 다크모드가 작동하지 않으면?**

A: `app/layout.tsx` 에서:
1. `suppressHydrationWarning` 추가
2. `ThemeProvider` 래핑 확인
3. FOUC 방지 스크립트 포함

---

## 리소스

- [Next.js 공식 문서](https://nextjs.org/docs)
- [shadcn/ui 컴포넌트](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

---

**Happy coding! 🚀**
