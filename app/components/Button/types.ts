import { ButtonHTMLAttributes } from 'react'

/**
 * Button 컴포넌트의 Props 인터페이스
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 크기 */
  size?: 'sm' | 'md' | 'lg'
  /** 버튼 스타일 variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  /** 로딩 상태 여부 */
  isLoading?: boolean
  /** 버튼 전체 너비 사용 여부 */
  fullWidth?: boolean
}
