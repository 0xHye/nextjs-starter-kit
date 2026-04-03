import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  /** 스피너 크기 */
  size?: "sm" | "md" | "lg";
  /** 추가 클래스명 */
  className?: string;
}

export function LoadingSpinner({
  size = "md",
  className,
}: LoadingSpinnerProps) {
  const sizeMap = {
    sm: "size-4",
    md: "size-6",
    lg: "size-8",
  };

  return (
    <Loader2
      className={cn("animate-spin text-muted-foreground", sizeMap[size], className)}
    />
  );
}
