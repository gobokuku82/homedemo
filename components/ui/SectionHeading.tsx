import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
}: SectionHeadingProps) {
  const inverse = tone === "inverse";
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "mx-auto max-w-narrow items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow tone={inverse ? "inverse" : "accent"}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "text-h2 font-semibold sm:text-h1",
          inverse ? "text-background" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-narrow text-lead",
            inverse ? "text-background/80" : "text-ink-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
