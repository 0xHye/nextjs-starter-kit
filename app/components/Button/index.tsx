import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import type { ButtonProps } from './types'

/**
 * Button 컴포넌트
 * 다양한 스타일과 크기를 지원하는 재사용 가능한 버튼 컴포넌트
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'md',
      variant = 'primary',
      isLoading = false,
      fullWidth = false,
      className,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    // 크기별 클래스
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    }

    // 버튼 스타일별 클래스
    const variantClasses = {
      primary:
        'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-gray-400',
      secondary:
        'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-300',
      outline:
        'border border-gray-300 text-gray-900 hover:bg-gray-50 active:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400',
      ghost:
        'text-gray-900 hover:bg-gray-100 active:bg-gray-200 disabled:text-gray-400',
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          // 기본 스타일
          'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
          // 크기
          sizeClasses[size],
          // 스타일
          variantClasses[variant],
          // 전체 너비
          fullWidth && 'w-full',
          // 로딩 상태
          isLoading && 'opacity-70 cursor-not-allowed',
          // 추가 클래스
          className,
        )}
        {...props}
      >
        {/* 로딩 인디케이터 */}
        {isLoading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
