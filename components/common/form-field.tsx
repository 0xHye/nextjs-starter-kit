import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { WithClassName } from "@/types";

interface FormFieldProps extends WithClassName {
  /** 라벨 텍스트 */
  label: string;
  /** 입력 필드 이름 */
  name: string;
  /** 입력 필드 타입 */
  type?: string;
  /** 플레이스홀더 */
  placeholder?: string;
  /** 도움말 텍스트 */
  description?: string;
  /** 에러 메시지 */
  error?: string;
  /** 필수 필드 여부 */
  required?: boolean;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** Input 컴포넌트 ref */
  ref?: React.Ref<HTMLInputElement>;
  /** 추가 attribute */
  [key: string]: unknown;
}

export function FormField({
  label,
  name,
  type = "text",
  placeholder,
  description,
  error,
  required = false,
  disabled = false,
  className,
  ref,
  ...props
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={name}>
        {label}
        {required && <span className="ml-1 text-destructive">*</span>}
      </Label>
      <Input
        ref={ref}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={error ? "border-destructive focus-visible:ring-destructive" : ""}
        {...props}
      />
      {description && !error && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
