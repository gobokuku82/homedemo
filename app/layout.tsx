import type { Metadata } from "next";
import type { ReactNode } from "react";
// Pretendard 자체 호스팅(CDN 아님) — 패키지 번들 폰트. design.md 단계에서 서브셋 최적화.
import "pretendard/dist/web/variable/pretendardvariable.css";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";

export const metadata: Metadata = {
  title: {
    default: "DreamAgent — 이제 전문가는, 당신입니다.",
    template: "%s · DreamAgent",
  },
  description:
    "도메인별 AI 에이전트를 만드는 회사. 전문가가 필요했던 일을, 이제 당신이 직접 합니다.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-background text-ink antialiased">
        <SkipLink />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
