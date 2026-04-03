import { Button } from "@/components/ui/button";
import { InboxIcon } from "lucide-react";
import type { WithClassName } from "@/types";

interface EmptyStateProps extends WithClassName {
  /** 표시할 아이콘 (React.ComponentType) */
  icon?: React.ComponentType<{ className?: string }>;
  /** 제목 */
  title: string;
  /** 설명 */
  description?: string;
  /** 액션 버튼 텍스트 */
  actionLabel?: string;
  /** 액션 버튼 클릭 핸들러 */
  onAction?: () => void;
}

export function EmptyState({
  icon: Icon = InboxIcon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
      <Icon className="size-12 text-muted-foreground" />
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {actionLabel && onAction && (
        <Button onClick={onAction} size="sm">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
