import { getDictionary } from "@/lib/i18n";
import type { PropsFor } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { DashboardChatMock } from "@/components/demo/DashboardChatMock";

/**
 * 1. 히어로 — Linear 벤치마크(제품을 히어로로).
 * 헤드 = 결과(슬로건), 서브 = 통제 한 스푼. 단일 주 CTA + 보조.
 * 카피 가드레일: AI를 주어로 두지 않음 / "쉽다·편하다" 금지(결과로 말함).
 */
export function HeroSection({
  id,
  eyebrowKey,
  headKey,
  subKey,
  primaryCta,
  secondaryCta,
  mockCaptionKey,
}: PropsFor<"hero">) {
  const { t } = getDictionary();
  return (
    <section id={id} className="scroll-mt-20 border-b border-border bg-background py-section-y">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          {eyebrowKey && <Eyebrow>{t(eyebrowKey)}</Eyebrow>}
          <h1 className="text-display font-bold text-ink">{t(headKey)}</h1>
          <p className="max-w-xl text-lead text-ink-muted">{t(subKey)}</p>
          <CtaGroup primary={primaryCta} secondary={secondaryCta} />
        </div>
        <DashboardChatMock captionKey={mockCaptionKey} />
      </Container>
    </section>
  );
}
