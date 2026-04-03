"use client";

import { useEffect, useState } from "react";

/**
 * localStorage를 다루는 훅
 * 초기값과 변경 시 자동 동기화
 * @param key - localStorage 키
 * @param initialValue - 초기값 (localStorage에 없을 경우)
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isMounted, setIsMounted] = useState(false);

  // 마운트 후 localStorage에서 값 읽기
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item) as T);
      }
    } catch (error) {
      console.error(`localStorage getItem 에러 (${key}):`, error);
    }

    setIsMounted(true);
  }, [key]);

  // 값 변경 시 localStorage에 저장
  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(`localStorage setItem 에러 (${key}):`, error);
    }
  };

  // 마운트 전에는 초기값 반환, 마운트 후 저장된 값 반환
  return [isMounted ? storedValue : initialValue, setValue];
}
