import { getDictionary } from "@/lib/i18n";
import type { PropsFor } from "@/lib/types";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TodoTrace } from "@/components/demo/TodoTrace";
import { DEMO_TRACE } from "@/content/demo-trace";

/** 4. 작동 방식 데모 — 제안→승인(HITL)을 트레이스로 보여줌(권한 이동을 말하지 않고 보여줌). */
export function HowItWorksSection({ id, eyebrowKey, titleKey, introKey }: PropsFor<"howItWorks">) {
  const { t } = getDictionary();
  return (
    <Section id={id} tone="subtle">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow={eyebrowKey ? t(eyebrowKey) : undefined}
          title={t(titleKey)}
          description={introKey ? t(introKey) : undefined}
          align="center"
        />
        <div className="mx-auto w-full max-w-2xl">
          <TodoTrace trace={DEMO_TRACE} />
        </div>
      </div>
    </Section>
  );
}
