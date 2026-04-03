import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { WithChildren } from "@/types";

interface PageHeaderProps {
  /** 페이지 제목 */
  title: string;
  /** 페이지 설명 */
  description?: string;
  /** 브레드크럼 경로 */
  breadcrumbs?: Array<{
    label: string;
    href: string;
  }>;
  /** 현재 페이지 (브레드크럼 마지막) */
  currentPage?: string;
  /** 우측 액션 영역 */
  action?: React.ReactNode;
  /** 추가 콘텐츠 */
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  breadcrumbs = [],
  currentPage,
  action,
  children,
}: PageHeaderProps) {
  return (
    <div className="space-y-4">
      {/* 브레드크럼 */}
      {breadcrumbs.length > 0 && currentPage && (
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.href} className="flex items-center gap-2">
                <BreadcrumbItem>
                  <BreadcrumbLink href={crumb.href}>
                    {crumb.label}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </div>
            ))}
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{currentPage}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )}

      {/* 제목 및 액션 */}
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
        {action && <div className="flex gap-2">{action}</div>}
      </div>

      {/* 추가 콘텐츠 */}
      {children}
    </div>
  );
}
