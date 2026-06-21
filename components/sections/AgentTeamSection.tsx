import { getDictionary } from "@/lib/i18n";
import type { PropsFor } from "@/lib/types";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AgentTeamList } from "@/components/product/AgentTeamList";
import { EngineModuleChips } from "@/components/engine/EngineModuleChips";
import { getProductBySlug } from "@/lib/products";

/** 제품 상세 — 에이전트 협업(모아드림 등 agents shape 전용). */
export function AgentTeamSection({ id, productSlug, titleKey }: PropsFor<"agentTeam">) {
  const { t } = getDictionary();
  const product = getProductBySlug(productSlug);
  if (!product || product.offering.kind !== "agents") return null;

  return (
    <Section id={id}>
      <div className="flex flex-col gap-8">
        <SectionHeading title={t(titleKey ?? "product.common.agentsTitle")} />
        <AgentTeamList agents={product.offering.agents} columns={4} />
        <EngineModuleChips ids={product.engineModules} titleKey="product.common.engineTitle" />
      </div>
    </Section>
  );
}
