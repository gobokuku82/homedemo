import { getDictionary } from "@/lib/i18n";
import type { PropsFor } from "@/lib/types";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LogoWall } from "@/components/ui/LogoWall";
import { PARTNERS } from "@/content/partners";

/** 2. 신뢰 — 파트너·MOU·파일럿. 로고 약하면 정직한 문구로 전환(LogoWall). */
export function TrustSection({ id, eyebrowKey, titleKey }: PropsFor<"trust">) {
  const { t } = getDictionary();
  return (
    <Section id={id} tone="subtle" spacing="sm">
      <div className="flex flex-col gap-6">
        <SectionHeading
          eyebrow={eyebrowKey ? t(eyebrowKey) : undefined}
          title={titleKey ? t(titleKey) : ""}
        />
        <LogoWall data={PARTNERS} />
      </div>
    </Section>
  );
}
