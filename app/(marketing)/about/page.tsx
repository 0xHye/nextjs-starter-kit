import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개",
  description: "프로젝트 소개 페이지입니다.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-24">
      <h1 className="mb-6 text-4xl font-bold">소개</h1>
      <div className="prose prose-sm dark:prose-invert max-w-none space-y-4 text-muted-foreground">
        <p>
          Next.js 16 모던 웹 스타터킷은 빠르고 확장 가능한 웹 애플리케이션을
          구축하기 위해 최적화된 완벽한 시작점입니다.
        </p>
        <p>
          이 스타터킷은 다음과 같은 최신 기술을 포함합니다:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Next.js 16 (App Router)</li>
          <li>TypeScript (strict mode)</li>
          <li>Tailwind CSS v4</li>
          <li>shadcn/ui 컴포넌트 라이브러리</li>
          <li>lucide-react 아이콘</li>
          <li>next-themes 다크모드 지원</li>
        </ul>
        <p>
          프로덕션 준비 상태로 즉시 사용 가능하며, 팀이 fork하여 개발을 시작할 수
          있습니다.
        </p>
      </div>
    </div>
  );
}
