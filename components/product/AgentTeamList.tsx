import { getDictionary } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import type { Agent } from "@/lib/types";

/**
 * 모아드림 4에이전트 협업 — "대체"가 아니라 "당신이 부리는 팀" 프레임.
 * 번호로 협업 순서를 암시.
 */
export function AgentTeamList({
  agents,
  columns = 2,
}: {
  agents: Agent[];
  columns?: 2 | 4;
}) {
  const { t } = getDictionary();
  return (
    <ul
      className={cn(
        "grid gap-4",
        columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2",
      )}
    >
      {agents.map((a, i) => (
        <li
          key={a.id}
          className="flex h-full flex-col rounded-lg border border-border bg-surface p-5 shadow-card"
        >
          <span className="mb-3 inline-flex size-8 items-center justify-center rounded-md bg-brand-subtle text-caption font-semibold text-brand">
            {i + 1}
          </span>
          <h3 className="text-h3 font-semibold text-ink">{t(a.nameKey)}</h3>
          <p className="mt-1 text-caption text-ink-muted">{t(a.roleKey)}</p>
        </li>
      ))}
    </ul>
  );
}
