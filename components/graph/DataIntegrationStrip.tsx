import { getDictionary } from "@/lib/i18n";
import type { Integration } from "@/lib/types";

/** 현장 연결성(DB/API) — 연동 대상 칩 나열. 과장 없이 실제 연결을 정직하게. */
export function DataIntegrationStrip({
  integrations,
  titleKey,
}: {
  integrations: Integration[];
  titleKey?: string;
}) {
  const { t } = getDictionary();
  return (
    <div className="flex flex-col gap-3">
      {titleKey && (
        <span className="text-caption font-semibold text-ink-muted">{t(titleKey)}</span>
      )}
      <ul className="flex flex-wrap gap-2">
        {integrations.map((it) => (
          <li key={it.id}>
            <span className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-caption text-ink">
              <span className="size-1.5 rounded-full bg-accent-control" />
              {t(it.labelKey)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
