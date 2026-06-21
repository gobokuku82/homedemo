import { getDictionary } from "@/lib/i18n";
import type { PropsFor } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { ScreenshotFrame } from "@/components/ui/ScreenshotFrame";
import { TrackBadge } from "@/components/product/TrackBadge";
import { SensitivityNotice } from "@/components/product/SensitivityNotice";
import { getProductBySlug, getProductCta } from "@/lib/products";

/** 제품 상세 히어로 — 제품 데이터로 구성. 민감 제품은 ctaOverride + 고지 반영. */
export function ProductHeroSection({ id, productSlug }: PropsFor<"productHero">) {
  const { t } = getDictionary();
  const product = getProductBySlug(productSlug);
  if (!product) return null;

  const cta = getProductCta(product);
  const sensitive = product.sensitivity.level === "sensitive";
  const heroShot = product.screenshots[0] ?? product.cardScreenshot;

  return (
    <section id={id} className="scroll-mt-20 border-b border-border bg-background py-section-y">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="neutral">{t(product.domainKey)}</Badge>
            <TrackBadge track={product.track} />
            {sensitive && <Badge tone="sensitive">민감 영역</Badge>}
          </div>
          <h1 className="text-h1 font-bold text-ink sm:text-display">{t(product.nameKey)}</h1>
          <p className="text-lead font-medium text-brand">{t(product.taglineKey)}</p>
          <p className="max-w-xl text-body text-ink-muted">{t(product.summaryKey)}</p>
          <CtaGroup primary={cta} />
          <SensitivityNotice product={product} />
        </div>
        <ScreenshotFrame shot={heroShot} chrome="app" />
      </Container>
    </section>
  );
}
