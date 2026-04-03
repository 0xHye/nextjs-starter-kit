import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          지금 바로 시작하세요
        </h2>
        <p className="mb-8 text-primary-foreground/90">
          무료로 시작하고, 성장에 따라 확장하세요.
          <br />
          어떤 웹 프로젝트도 이 스타터킷으로 빠르게 구축할 수 있습니다.
        </p>
        <Button asChild variant="secondary" size="lg">
          <Link href="/register">무료 회원가입</Link>
        </Button>
      </div>
    </section>
  );
}
