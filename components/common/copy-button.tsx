"use client";

import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import type { WithClassName } from "@/types";

interface CopyButtonProps extends WithClassName {
  /** 복사할 텍스트 */
  text: string;
  /** 버튼 라벨 */
  label?: string;
  /** 복사 성공 후 표시할 시간 (ms) */
  duration?: number;
}

export function CopyButton({
  text,
  label = "복사",
  duration = 2000,
  className,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), duration);
    } catch (error) {
      console.error("클립보드 복사 실패:", error);
    }
  }, [text, duration]);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className={className}
    >
      {copied ? (
        <>
          <Check className="mr-2 size-4" />
          복사됨
        </>
      ) : (
        <>
          <Copy className="mr-2 size-4" />
          {label}
        </>
      )}
    </Button>
  );
}
