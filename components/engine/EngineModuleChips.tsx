import { getDictionary } from "@/lib/i18n";
import type { EngineModuleId } from "@/lib/types";
import { getEngineModules } from "@/content/engine";

/** 제품이 탑재한 공통 엔진 모듈 칩 목록. */
export function EngineModuleChips({
  ids,
  titleKey,
}: {
  ids: EngineModuleId[];
  titleKey?: string;
}) {
  const { t } = getDictionary();
  const modules = getEngineModules(ids);
  return (
    <div className="flex flex-col gap-2">
      {titleKey && (
        <span className="text-caption font-semibold text-ink-muted">{t(titleKey)}</span>
      )}
      <ul className="flex flex-wrap gap-2">
        {modules.map((m) => (
          <li key={m.id}>
            <span className="rounded-md border border-border bg-surface px-3 py-1.5 text-caption text-ink">
              {t(m.nameKey)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
