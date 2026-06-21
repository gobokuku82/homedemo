import { getDictionary } from "@/lib/i18n";
import { Badge } from "@/components/ui/Badge";

/** "+ 확장 예정" 슬롯 — 제품 데이터가 아니라 라인업의 렌더 플래그로 노출. */
export function ComingSoonCard() {
  const { t } = getDictionary();
  return (
    <div className="flex h-full min-h-64 flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-comingsoon-border bg-comingsoon-surface p-6 text-center">
      <span className="flex size-10 items-center justify-center rounded-full border border-dashed border-comingsoon-border text-h3 text-comingsoon-ink">
        +
      </span>
      <Badge tone="comingSoon">{t("common.comingSoon")}</Badge>
      <p className="max-w-[16rem] text-caption text-comingsoon-ink">
        {t("home.lineup.comingSoon.desc")}
      </p>
    </div>
  );
}
