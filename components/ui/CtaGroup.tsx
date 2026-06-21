import { getDictionary } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import type { CtaRef } from "@/lib/types";
import { Button } from "./Button";

/** Hero / FinalCTA 가 공유하는 CTA 묶음(수미상관 시 동일하게). */
export function CtaGroup({
  primary,
  secondary,
  align = "left",
  tone = "default",
}: {
  primary: CtaRef;
  secondary?: CtaRef;
  align?: "left" | "center";
  tone?: "default" | "inverse";
}) {
  const { t } = getDictionary();
  const secondaryVariant =
    tone === "inverse" ? "secondaryInverse" : secondary?.variant ?? "secondary";

  return (
    <div className={cn("flex flex-wrap gap-3", align === "center" && "justify-center")}>
      <Button href={primary.href} variant={primary.variant ?? "primary"} size="lg">
        {t(primary.labelKey)}
      </Button>
      {secondary && (
        <Button href={secondary.href} variant={secondaryVariant} size="lg">
          {t(secondary.labelKey)}
        </Button>
      )}
    </div>
  );
}
