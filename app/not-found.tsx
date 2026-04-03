import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <AlertCircle className="size-12 text-muted-foreground" />
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">페이지를 찾을 수 없습니다</h3>
          <p className="text-sm text-muted-foreground">
            요청하신 페이지가 존재하지 않거나 삭제되었습니다.
          </p>
        </div>
        <Button asChild>
          <Link href="/">홈으로 돌아가기</Link>
        </Button>
      </div>
    </div>
  );
}
