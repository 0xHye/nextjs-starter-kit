import {
  Zap,
  Shield,
  Code2,
  Palette,
  Globe,
  Layers,
  type LucideIcon,
} from "lucide-react";

// 기능 목록 데이터 (any 금지, 명시적 타입)
const features: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Zap,
    title: "번개 같은 성능",
    description: "Next.js 16의 최적화로 초고속 페이지 로딩",
  },
  {
    icon: Shield,
    title: "타입 안전성",
    description: "TypeScript strict 모드로 런타임 에러 사전 방지",
  },
  {
    icon: Code2,
    title: "개발자 경험",
    description: "명확한 파일 구조와 재사용 가능한 컴포넌트",
  },
  {
    icon: Palette,
    title: "디자인 시스템",
    description: "shadcn/ui와 Tailwind CSS로 일관된 UI",
  },
  {
    icon: Globe,
    title: "반응형 디자인",
    description: "모든 디바이스에서 완벽한 사용자 경험",
  },
  {
    icon: Layers,
    title: "확장성",
    description: "스케일 있는 아키텍처로 비즈니스 성장 지원",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        {/* 헤더 */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            주요 기능
          </h2>
          <p className="mt-4 text-muted-foreground">
            프로덕션에 바로 사용할 수 있는 완성도 높은 기능들
          </p>
        </div>

        {/* 기능 그리드 */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-lg border border-border bg-card p-6 transition-all hover:shadow-md hover:border-primary/50"
              >
                <Icon className="mb-4 size-8 text-primary" />
                <h3 className="mb-2 font-semibold text-lg">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
