import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "가격",
  description: "가격 계획을 확인하세요.",
};

const plans = [
  {
    name: "무료",
    price: "0",
    description: "스타터를 위한 기본 플랜",
    features: [
      "프로젝트 1개",
      "기본 분석",
      "커뮤니티 지원",
    ],
  },
  {
    name: "프로",
    price: "29",
    description: "팀과 비즈니스를 위한 플랜",
    features: [
      "무제한 프로젝트",
      "고급 분석",
      "우선 지원",
      "통합 API",
      "사용자 관리",
    ],
    highlighted: true,
  },
  {
    name: "엔터프라이즈",
    price: "맞춤",
    description: "대규모 조직을 위한 솔루션",
    features: [
      "모든 프로 기능",
      "전담 계정 관리자",
      "SLA 보장",
      "보안 감시",
      "맞춤 개발",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-24">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">투명한 가격",</h1>
        <p className="text-muted-foreground">
          모든 규모의 팀을 위한 완벽한 플랜
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={
              plan.highlighted
                ? "border-primary shadow-lg md:scale-105"
                : undefined
            }
          >
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold">${plan.price}</span>
                {plan.price !== "맞춤" && (
                  <span className="text-muted-foreground">/월</span>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button
                variant={plan.highlighted ? "default" : "outline"}
                className="w-full"
              >
                {plan.price === "맞춤" ? "문의하기" : "시작하기"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
