import { getDictionary } from "@/lib/i18n";
import type { PropsFor } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { CtaGroup } from "@/components/ui/CtaGroup";

/** 8. 최종 CTA — 슬로건 수미상관(Hero 와 동일 CTA). inverse 톤. 푸터는 전역 레이아웃. */
export function FinalCtaSection({
  id,
  headKey,
  subKey,
  primaryCta,
  secondaryCta,
}: PropsFor<"finalCta">) {
  const { t } = getDictionary();
  return (
    <section id={id} className="scroll-mt-20 bg-ink py-section-y text-background">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-h1 font-bold text-background sm:text-display">
          {t(headKey)}
        </h2>
        {subKey && <p className="max-w-xl text-lead text-background/80">{t(subKey)}</p>}
        <CtaGroup primary={primaryCta} secondary={secondaryCta} align="center" tone="inverse" />
      </Container>
    </section>
  );
}
