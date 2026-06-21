import { getDictionary } from "@/lib/i18n";
import type { PropsFor } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { getProductBySlug, getProductCta } from "@/lib/products";

/** 제품 상세 최종 CTA — 민감 제품의 ctaOverride 반영. inverse 톤. */
export function ProductCtaSection({ id, productSlug }: PropsFor<"productCta">) {
  const { t } = getDictionary();
  const product = getProductBySlug(productSlug);
  if (!product) return null;
  const cta = getProductCta(product);

  return (
    <section id={id} className="scroll-mt-20 bg-ink py-section-y text-background">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-h1 font-bold text-background">{t(product.taglineKey)}</h2>
        <CtaGroup primary={cta} align="center" tone="inverse" />
      </Container>
    </section>
  );
}
