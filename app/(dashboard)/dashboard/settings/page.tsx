import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "설정",
};

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="설정"
        description="계정 및 애플리케이션 설정을 관리하세요"
        breadcrumbs={[{ label: "대시보드", href: "/dashboard" }, { label: "설정" }]}
      />

      <Card>
        <CardHeader>
          <CardTitle>일반 설정</CardTitle>
          <CardDescription>기본 설정을 관리합니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            설정 항목을 여기에 추가하세요.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
