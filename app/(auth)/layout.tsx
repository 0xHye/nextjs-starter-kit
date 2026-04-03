import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import type { WithChildren } from "@/types";

export default function AuthLayout({ children }: WithChildren) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4">
      {/* 로고 */}
      <Link href="/" className="mb-8 text-xl font-bold">
        {SITE_CONFIG.name}
      </Link>

      {/* 폼 컨테이너 */}
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
