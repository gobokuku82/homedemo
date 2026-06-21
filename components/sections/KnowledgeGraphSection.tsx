import { getDictionary } from "@/lib/i18n";
import type { PropsFor } from "@/lib/types";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { KnowledgeGraphViz } from "@/components/graph/KnowledgeGraphViz";
import { DataIntegrationStrip } from "@/components/graph/DataIntegrationStrip";
import { GRAPH } from "@/content/graph";

/** 6. 지식그래프 쇼케이스 + 데이터 연동 — 차별 비주얼(현장 연결성 축). */
export function KnowledgeGraphSection({
  id,
  eyebrowKey,
  titleKey,
  introKey,
}: PropsFor<"knowledgeGraph">) {
  const { t } = getDictionary();
  return (
    <Section id={id} tone="subtle">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow={eyebrowKey ? t(eyebrowKey) : undefined}
            title={t(titleKey)}
            description={introKey ? t(introKey) : undefined}
          />
          <DataIntegrationStrip
            integrations={GRAPH.integrations}
            titleKey="home.knowledgeGraph.integrationsTitle"
          />
        </div>
        <KnowledgeGraphViz data={GRAPH} />
      </div>
    </Section>
  );
}
