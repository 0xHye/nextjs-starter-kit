"use client";

import { useEffect, useState } from "react";

/**
 * 주어진 값을 디바운스하는 훅
 * 검색, 자동 저장 등에 사용
 * @param value - 디바운스할 값
 * @param delay - 디바운스 지연 시간 (ms)
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
