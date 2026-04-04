---
name: 코드 패턴 및 컨벤션
description: 이 프로젝트에서 자주 사용되는 코드 패턴, 타입 정의 패턴, 스타일 규칙
type: project
---

## 타입 정의 패턴
1. **WithChildren / WithClassName**: 기본 Props 인터페이스
   - 파일 위치: `/types/index.ts`
   - extends WithClassName으로 className 옵션 추가

2. **Props 확장 패턴**:
   - `ButtonHTMLAttributes<HTMLButtonElement>` 확장하여 표준 HTML 속성 포함
   - interface 파일 분리: Button은 types.ts에 정의, 구현은 index.tsx

## 컴포넌트 패턴
1. **forwardRef 사용**: Button 컴포넌트에서 ref 지원
2. **displayName 설정**: 디버깅 용이성 위해 항상 설정
3. **CSS 클래스 결합**: `cn()` 함수 (tailwind-merge + clsx 조합)

## 스타일 패턴
1. **Tailwind CSS 사용**: 모든 스타일링은 className으로 처리
2. **클래스 객체**: size/variant별 객체로 관리 (Button 컴포넌트)
3. **조건부 클래스**: `isLoading && 'opacity-70'` 패턴

## 폼 처리
현재 상태:
- FormField 컴포넌트: React Hook Form 통합 준비됨
- 입력값: HTML attribute 패턴 사용 ([key: string]: unknown)
- 에러 표시: error prop으로 border-destructive 적용

## 훅 패턴
1. **마운트 안전성**: 모든 클라이언트 훅에서 useEffect로 마운트 확인
2. **에러 처리**: useLocalStorage에서 try-catch로 JSON 파싱
3. **타입 제네릭**: useDebounce<T>, useLocalStorage<T> 제네릭 사용

## 상수 및 설정
- SITE_CONFIG: as const로 타입 추론
- NAV_LINKS, SIDEBAR_LINKS: as const로 배열 타입 강화
- 타입 파생: `type NavLink = (typeof NAV_LINKS)[number]` 패턴

## 아이콘 맵핑 (타입 안전성)
```typescript
const iconMap = { LayoutDashboard, Settings } as const;
type IconName = keyof typeof iconMap;
// 사용: iconMap[link.icon as IconName]
```
이 패턴으로 문자열 아이콘 이름을 실제 컴포넌트로 타입 안전하게 매핑
