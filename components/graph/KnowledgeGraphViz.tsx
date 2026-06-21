import { getDictionary } from "@/lib/i18n";
import type { GraphData, GraphNode } from "@/lib/types";

/** 그룹별 노드 점 색(시맨틱 토큰). */
const groupColor: Record<NonNullable<GraphNode["group"]>, string> = {
  doc: "var(--color-brand-subtle)",
  entity: "var(--color-accent-control-subtle)",
  meeting: "var(--color-accent-result-subtle)",
  metric: "var(--color-info-subtle)",
};

/**
 * 지식그래프 쇼케이스 — 사전 레이아웃된 노드/엣지(물리 blob 아님).
 * SVG 라인(0~100 좌표) 위에 HTML 라벨 칩을 % 위치로 올려 라벨 가독성 확보.
 */
export function KnowledgeGraphViz({ data }: { data: GraphData }) {
  const { t } = getDictionary();
  const nodeById = new Map(data.nodes.map((n) => [n.id, n]));

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-frame-border bg-surface shadow-screenshot sm:aspect-[16/10]">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        aria-hidden
      >
        {data.edges.map((e, i) => {
          const a = nodeById.get(e.from);
          const b = nodeById.get(e.to);
          if (!a || !b) return null;
          return (
            <line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="var(--color-border-strong)"
              strokeWidth={0.4}
            />
          );
        })}
      </svg>
      {data.nodes.map((n) => (
        <div
          key={n.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <span className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-surface px-2.5 py-1 text-label text-ink shadow-sm">
            <span
              className="size-2 shrink-0 rounded-full"
              style={{ backgroundColor: groupColor[n.group ?? "doc"] }}
            />
            {t(n.labelKey)}
          </span>
        </div>
      ))}
    </div>
  );
}
