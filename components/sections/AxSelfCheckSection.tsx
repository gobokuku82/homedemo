import { getDictionary } from "@/lib/i18n";
import type { PropsFor } from "@/lib/types";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { AxSelfCheckStub } from "@/components/ax/AxSelfCheckStub";
import { MediaEmbed } from "@/components/ui/MediaEmbed";
import { AX } from "@/content/ax";

/** 7. AX 자가진단(2차 코너) + 유튜브 데모. 카피는 서버에서 해석해 클라이언트 stub 에 전달. */
export function AxSelfCheckSection({
  id,
  eyebrowKey,
  titleKey,
  introKey,
  secondary,
}: PropsFor<"axSelfCheck">) {
  const { t } = getDictionary();
  const questions = AX.questions.map((q) => ({ id: q.id, prompt: t(q.promptKey) }));

  return (
    <Section id={id}>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          {secondary && <Badge tone="neutral">{t("home.axSelfCheck.eyebrow")}</Badge>}
          <SectionHeading
            eyebrow={!secondary && eyebrowKey ? t(eyebrowKey) : undefined}
            title={t(titleKey)}
            description={introKey ? t(introKey) : undefined}
          />
        </div>
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <AxSelfCheckStub questions={questions} gateLabel={t("home.axSelfCheck.gate")} />
          <MediaEmbed videoId={AX.videoId} title={t("home.axSelfCheck.videoTitle")} />
        </div>
      </div>
    </Section>
  );
}
