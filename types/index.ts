import type { SIDEBAR_LINKS, NAV_LINKS } from "@/lib/constants";

// 네비게이션 링크 타입 (constants에서 파생)
export type NavLink = (typeof NAV_LINKS)[number];
export type SidebarLink = (typeof SIDEBAR_LINKS)[number];

// 자식 컴포넌트를 포함하는 기본 Props 타입
export interface WithChildren {
  children: React.ReactNode;
}

// 클래스명을 받는 기본 Props 타입
export interface WithClassName {
  className?: string;
}

// 테마 타입
export type Theme = "light" | "dark" | "system";

// API 응답 공통 타입 (서버 액션용)
export type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string };
