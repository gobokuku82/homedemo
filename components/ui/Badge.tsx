import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone =
  | "neutral"
  | "accent"
  | "result"
  | "control"
  | "warning"
  | "comingSoon"
  | "sensitive";

const toneClass: Record<Tone, string> = {
  neutral: "bg-background-subtle text-ink-muted border-border",
  accent: "bg-brand-subtle text-brand border-transparent",
  result: "bg-accent-result-subtle text-accent-result border-transparent",
  control: "bg-accent-control-subtle text-accent-control border-transparent",
  warning: "bg-warning-subtle text-warning border-transparent",
  comingSoon: "bg-comingsoon-surface text-comingsoon-ink border-comingsoon-border",
  sensitive: "bg-info-subtle text-info border-transparent",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-sm border px-2 py-0.5 text-label font-medium",
        toneClass[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
