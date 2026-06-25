import type { Metadata } from "next";
import type { ReactNode } from "react";
// Self-hosted Pretendard (variable) — bundled, no CDN dependency.
import "pretendard/dist/web/variable/pretendardvariable.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dream Agent — 이제, 당신이 전문가입니다",
  description:
    "당신의 일을 학습한 분야 최고의 브레인이, 계획부터 끝까지 함께합니다. Dream Agent는 도메인 전문가와 함께 만드는 AI 에이전트 팀입니다.",
  openGraph: {
    title: "Dream Agent — 이제, 당신이 전문가입니다",
    description:
      "당신의 현장에 최고의 브레인을 더한다면. 도메인 특화 AI 에이전트, Dream Agent.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
