import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField } from "@/components/common/form-field";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "회원가입",
};

export default function RegisterPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">회원가입</CardTitle>
        <CardDescription>
          계정을 생성하여 시작하세요
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 회원가입 폼 */}
        <form className="space-y-4">
          <FormField
            label="이름"
            name="name"
            placeholder="홍길동"
            required
          />

          <FormField
            label="이메일"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <FormField
            label="비밀번호"
            name="password"
            type="password"
            description="최소 8자 이상"
            required
          />

          <FormField
            label="비밀번호 확인"
            name="confirmPassword"
            type="password"
            required
          />

          {/* 약관 동의 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox id="terms" name="terms" required />
              <Label htmlFor="terms" className="text-sm font-normal">
                <Link href="/terms" className="text-primary hover:underline">
                  이용약관
                </Link>
                에 동의합니다.
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="privacy" name="privacy" required />
              <Label htmlFor="privacy" className="text-sm font-normal">
                <Link href="/privacy" className="text-primary hover:underline">
                  개인정보처리방침
                </Link>
                에 동의합니다.
              </Label>
            </div>
          </div>

          <Button type="submit" className="w-full">
            회원가입
          </Button>
        </form>

        {/* 로그인 링크 */}
        <p className="text-center text-sm text-muted-foreground">
          이미 계정이 있으신가요?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary hover:underline"
          >
            로그인
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
