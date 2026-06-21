import { getDictionary } from "@/lib/i18n";
import type { PropsFor } from "@/lib/types";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnginePillar } from "@/components/engine/EnginePillar";
import { getEngineModules } from "@/content/engine";

/** 3. 공통 엔진 — 대시보드·graph RAG·HITL+todo 를 실제 화면과 함께 스택(교차 배치). */
export function EngineSection({ id, eyebrowKey, titleKey, introKey, moduleIds }: PropsFor<"engine">) {
  const { t } = getDictionary();
  const modules = getEngineModules(moduleIds);

  return (
    <Section id={id}>
      <div className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={eyebrowKey ? t(eyebrowKey) : undefined}
          title={t(titleKey)}
          description={introKey ? t(introKey) : undefined}
        />
        <div className="flex flex-col gap-16">
          {modules.map((m, i) => (
            <EnginePillar key={m.id} module={m} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </Section>
  );
}
