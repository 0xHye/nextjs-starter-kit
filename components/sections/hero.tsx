import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        {/* 배지 */}
        <div className="mb-6 inline-flex items-center rounded-full border border-border bg-muted px-4 py-1.5 text-sm">
          <span className="text-muted-foreground">
            Next.js 16 모던 스타터킷
          </span>
        </div>

        {/* 제목 */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          빠르게 시작하는
          <br />
          <span className="text-primary">모던 웹 개발</span>
        </h1>

        {/* 설명 */}
        <p className="mb-8 mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
          Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui로 구성된
          <br />
          프로덕션 준비 스타터킷으로 즉시 개발을 시작하세요.
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/register">
              무료로 시작하기
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/about">더 알아보기</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
