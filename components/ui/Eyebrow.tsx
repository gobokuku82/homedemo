import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "accent" | "neutral" | "inverse";

const toneClass: Record<Tone, string> = {
  accent: "text-brand",
  neutral: "text-ink-muted",
  inverse: "text-background/70",
};

/** 섹션 상단 소제목(eyebrow). 감정 위 / 논리 아래 흐름의 라벨. */
export function Eyebrow({
  children,
  tone = "accent",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <span className={cn("text-caption font-semibold tracking-wide", toneClass[tone])}>
      {children}
    </span>
  );
}
