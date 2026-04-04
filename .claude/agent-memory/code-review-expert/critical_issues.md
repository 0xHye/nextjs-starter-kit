---
name: 반드시 수정할 중요 문제점
description: 프로젝트 진행 전 우선 해결해야 할 Critical 이슈 5가지
type: project
---

## Critical 이슈 목록

### 1. FormField 컴포넌트 미완성
**심각도**: 🔴 Critical  
**파일**: `/components/common/form-field.tsx`  
**상태**: React Hook Form 미통합

**문제**: 폼 검증 시스템 없이 단순 Input 래퍼만 존재.  
**해결**: forwardRef로 변경하고, React Hook Form `register()` 지원 추가.  
**영향**: registerSchema 구현 불가능.

---

### 2. 회원가입 페이지 미완성
**심각도**: 🔴 Critical  
**파일**: `/app/(auth)/register/page.tsx`  
**상태**: 폼 제출, 검증, 에러 처리 모두 미구현

**문제**: 
- `method="post"` 선언하나 action 없음
- Zod 검증 스키마 없음
- 서버 액션 미구현
- /terms, /privacy 페이지 존재하지 않음

**해결**: React Hook Form + Zod 통합, 서버 액션 구현  
**영향**: 사용자 등록 기능 완전히 비활성화.

---

### 3. 로그인 페이지 삭제됨
**심각도**: 🔴 Critical  
**파일**: 없음 (삭제됨)  
**커밋**: `07d78ea` - "Playwright MCP 설정 추가 및 로그인 페이지 제거"

**문제**: 
- Header에서 "로그인" 버튼이 /login으로 링크
- /login 페이지 존재하지 않음
- 인증 플로우 불완전

**해결**: (auth)/login/page.tsx 복원 또는 신규 작성  
**영향**: 인증 플로우 완전히 비활성화.

---

### 4. 인증 라우트 보호 미구현
**심각도**: 🔴 Critical  
**파일**: 없음 (middleware.ts 미존재)  
**상태**: /dashboard 공개 라우트

**문제**: 
- 인증 없이 /dashboard 접근 가능
- 미들웨어 보호 없음
- Sidebar 렌더링 제어 없음

**해결**: 
1. `middleware.ts` 생성
2. /dashboard/* 라우트 보호
3. 로그인 페이지로 리다이렉트

**영향**: 보안 문제, 공개되면 안 되는 정보 노출.

---

### 5. Button 컴포넌트 타입 안정성
**심각도**: 🔴 Critical  
**파일**: `/app/components/Button/index.tsx`, `/app/components/Button/types.ts`  
**상태**: 타입 객체가 `as const`로 강화되지 않음

**문제**:
```tsx
const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}
// sizeClasses[size]에서 타입 안전성 부족
```

**해결**: `as const` 추가, `keyof typeof` 패턴 사용  
**영향**: 타입 체킹 약화, 런타임 에러 가능성.

---

## 우선순위 해결 순서

1. **FormField** → React Hook Form 호환 (다른 작업의 기초)
2. **회원가입 페이지** → Zod 스키마 + 서버 액션
3. **로그인 페이지** → 기본 폼 (회원가입과 유사)
4. **Middleware** → 라우트 보호 (보안)
5. **Button 타입** → as const 추가 (유지보수성)

**예상 해결 시간**: 각 항목 1-2시간 (총 5-10시간)
