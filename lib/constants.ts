// 사이트 기본 설정
export const SITE_CONFIG = {
  name: "StarterKit",
  description: "Next.js 16 모던 웹 스타터킷",
  url: "https://example.com",
} as const;

// 마케팅 페이지 내비게이션
export const NAV_LINKS = [
  { label: "홈", href: "/" },
  { label: "소개", href: "/about" },
  { label: "가격", href: "/pricing" },
] as const;

// 대시보드 사이드바 내비게이션 (lucide-react 아이콘 이름)
export const SIDEBAR_LINKS = [
  { label: "대시보드", href: "/dashboard", icon: "LayoutDashboard" },
  { label: "설정", href: "/dashboard/settings", icon: "Settings" },
] as const;

// 다크모드 localStorage 키
export const THEME_COOKIE_KEY = "theme";
