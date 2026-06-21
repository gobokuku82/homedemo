import { getDictionary } from "@/lib/i18n";
import type { PropsFor } from "@/lib/types";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/product/ProductCard";
import { ComingSoonCard } from "@/components/product/ComingSoonCard";
import { CustomerTrackSplit } from "@/components/product/CustomerTrackSplit";
import { getAllProducts } from "@/lib/products";

/** 5. 라인업 3종 + 두 고객 분기. 제품 데이터에서 카드 자동 생성. */
export function LineupSection({
  id,
  eyebrowKey,
  titleKey,
  introKey,
  productSlugs,
  showComingSoon,
  showTrackSplit,
}: PropsFor<"lineup">) {
  const { t } = getDictionary();
  const all = getAllProducts();
  const products = productSlugs
    ? all.filter((p) => productSlugs.includes(p.slug))
    : all;

  return (
    <Section id={id}>
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow={eyebrowKey ? t(eyebrowKey) : undefined}
          title={t(titleKey)}
          description={introKey ? t(introKey) : undefined}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
          {showComingSoon && <ComingSoonCard />}
        </div>
        {showTrackSplit && <CustomerTrackSplit />}
      </div>
    </Section>
  );
}
