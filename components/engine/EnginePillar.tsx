import { getDictionary } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import type { EngineModule } from "@/lib/types";
import { ScreenshotFrame } from "@/components/ui/ScreenshotFrame";

/** 공통 엔진 모듈 1개 — 텍스트 ↔ 실제 제품 화면을 교차 배치. */
export function EnginePillar({
  module,
  reverse,
}: {
  module: EngineModule;
  reverse?: boolean;
}) {
  const { t } = getDictionary();
  return (
    <div
      className={cn(
        "grid items-center gap-8 md:grid-cols-2",
        reverse && "md:[&>*:first-child]:order-2",
      )}
    >
      <div className="flex flex-col gap-3">
        <h3 className="text-h2 font-semibold text-ink">{t(module.nameKey)}</h3>
        <p className="text-lead text-ink-muted">{t(module.descKey)}</p>
      </div>
      <ScreenshotFrame shot={module.screenshot} chrome="app" />
    </div>
  );
}
