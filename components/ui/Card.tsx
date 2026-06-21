import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "surface" | "subtle" | "muted";

const toneClass: Record<Tone, string> = {
  surface: "bg-surface border-border shadow-card",
  subtle: "bg-background-subtle border-border",
  muted: "bg-comingsoon-surface border-comingsoon-border border-dashed",
};

interface CardProps {
  children: ReactNode;
  as?: ElementType;
  tone?: Tone;
  interactive?: boolean;
  className?: string;
}

export function Card({
  children,
  as: Tag = "div",
  tone = "surface",
  interactive,
  className,
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-lg border p-6",
        toneClass[tone],
        interactive && "transition-shadow hover:shadow-raised",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
