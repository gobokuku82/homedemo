import { getDictionary } from "@/lib/i18n";
import type { PropsFor } from "@/lib/types";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckList, type CheckItem } from "@/components/ui/CheckList";
import { EngineModuleChips } from "@/components/engine/EngineModuleChips";
import { getProductBySlug } from "@/lib/products";

/** 제품 상세 — 핵심 기능(키워/마음 등 capabilities shape 전용). 재고위험은 warning 톤. */
export function CapabilityListSection({ id, productSlug, titleKey }: PropsFor<"capabilityList">) {
  const { t } = getDictionary();
  const product = getProductBySlug(productSlug);
  if (!product || product.offering.kind !== "capabilities") return null;

  const items: CheckItem[] = product.offering.capabilities.map((c) => ({
    id: c.id,
    label: t(c.labelKey),
    tone: c.id === "stockRisk" ? "warning" : "default",
  }));

  return (
    <Section id={id} tone="subtle">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <SectionHeading title={t(titleKey ?? "product.common.capsTitle")} />
          <CheckList items={items} />
        </div>
        <div className="flex flex-col gap-6">
          <EngineModuleChips ids={product.engineModules} titleKey="product.common.engineTitle" />
        </div>
      </div>
    </Section>
  );
}
