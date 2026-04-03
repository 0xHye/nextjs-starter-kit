import { LoadingSpinner } from "@/components/common/loading-spinner";

export default function DashboardLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mx-auto mb-4" />
        <p className="text-muted-foreground">대시보드를 불러오는 중...</p>
      </div>
    </div>
  );
}
