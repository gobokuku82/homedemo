import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "base" | "subtle" | "inverse";
type Spacing = "default" | "sm";

const toneClass: Record<Tone, string> = {
  base: "bg-background text-ink",
  subtle: "bg-background-subtle text-ink",
  inverse: "bg-ink text-background",
};

interface SectionProps {
  id?: string;
  children: ReactNode;
  tone?: Tone;
  spacing?: Spacing;
  className?: string;
  containerWidth?: "default" | "narrow" | "wide";
}

/** 섹션 수직 리듬 + 배경 톤 + 앵커. 모든 홈/제품 섹션의 바깥 래퍼. */
export function Section({
  id,
  children,
  tone = "base",
  spacing = "default",
  className,
  containerWidth = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        toneClass[tone],
        spacing === "sm" ? "py-section-y-sm" : "py-section-y",
        "scroll-mt-20",
        className,
      )}
    >
      <Container width={containerWidth}>{children}</Container>
    </section>
  );
}
