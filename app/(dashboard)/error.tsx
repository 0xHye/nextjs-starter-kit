"use client";

import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <Alert variant="destructive" className="max-w-md">
        <AlertTriangle className="size-4" />
        <AlertDescription>
          <p className="font-semibold">대시보드를 불러올 수 없습니다</p>
          <p className="mt-1 text-sm">{error.message}</p>
        </AlertDescription>
      </Alert>
      <Button onClick={() => reset()} className="mt-4">
        다시 시도
      </Button>
    </div>
  );
}
