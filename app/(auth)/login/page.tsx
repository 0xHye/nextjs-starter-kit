import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField } from "@/components/common/form-field";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "로그인",
};

interface LoginPageProps {
  searchParams: Promise<{ error?: string; callbackUrl?: string }>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { error } = await searchParams;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">로그인</CardTitle>
        <CardDescription>
          이메일과 비밀번호를 입력하세요
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 에러 알림 */}
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="size-4" />
            <AlertDescription>
              로그인에 실패했습니다. 이메일과 비밀번호를 확인하세요.
            </AlertDescription>
          </Alert>
        )}

        {/* 로그인 폼 */}
        <form className="space-y-4" method="post">
          <FormField
            label="이메일"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
          <FormField
            label="비밀번호"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />

          <Button type="submit" className="w-full">
            로그인
          </Button>
        </form>

        {/* 회원가입 링크 */}
        <p className="text-center text-sm text-muted-foreground">
          계정이 없으신가요?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary hover:underline"
          >
            회원가입
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
