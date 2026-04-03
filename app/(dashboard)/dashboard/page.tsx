import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { StatCard } from "@/components/common/stat-card";
import { Users, TrendingUp, Activity, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "대시보드",
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* 페이지 헤더 */}
      <PageHeader
        title="대시보드"
        description="핵심 지표를 한눈에 확인하세요"
        breadcrumbs={[]}
      />

      {/* 통계 카드 그리드 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="총 사용자"
          value="1,234"
          change="+12.5%"
          period="지난 달 대비"
          icon={Users}
        />
        <StatCard
          title="매출"
          value="$45,231"
          change="+8.2%"
          period="지난 월 대비"
          icon={TrendingUp}
        />
        <StatCard
          title="활성 사용자"
          value="573"
          change="-4.3%"
          period="지난 주 대비"
          icon={Activity}
        />
        <StatCard
          title="성능"
          value="98.5%"
          change="+2.1%"
          period="어제 대비"
          icon={Zap}
        />
      </div>

      {/* 추가 섹션 영역 (확장 가능) */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">최근 활동</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          여기에 차트, 테이블 등 추가 콘텐츠를 구성할 수 있습니다.
        </p>
      </div>
    </div>
  );
}
