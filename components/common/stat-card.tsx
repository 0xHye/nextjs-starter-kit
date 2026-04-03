import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";
import type { WithClassName } from "@/types";

interface StatCardProps extends WithClassName {
  /** 통계 제목 */
  title: string;
  /** 통계 값 */
  value: string | number;
  /** 증감 텍스트 (예: "+12.5%", "-8.2%") */
  change?: string;
  /** 기간 설명 (예: "지난 달 대비") */
  period?: string;
  /** lucide-react 아이콘 (React.ComponentType) */
  icon?: React.ComponentType<{ className?: string }>;
}

export function StatCard({
  title,
  value,
  change,
  period,
  icon: Icon,
}: StatCardProps) {
  const isPositive = change?.startsWith("+") ?? true;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className="size-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <div className="flex items-center gap-2">
            <Badge
              variant={isPositive ? "default" : "destructive"}
              className="gap-1"
            >
              {isPositive ? (
                <TrendingUp className="size-3" />
              ) : (
                <TrendingDown className="size-3" />
              )}
              {change}
            </Badge>
            {period && <span className="text-xs text-muted-foreground">{period}</span>}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
