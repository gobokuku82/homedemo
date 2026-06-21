import { cn } from "@/lib/cn";
import type { ScreenshotRef } from "@/lib/types";

type Kind = NonNullable<ScreenshotRef["kind"]>;

/**
 * 실제 스크린샷이 없을 때의 "구조화된 제품 스켈레톤".
 * 추상 blob/그라데이션이 아니라 사이드바·툴바·KPI·차트·표·채팅 등
 * 실제 UI 골격으로 렌더 → 제품처럼 읽힌다. 실제 화면 확보 시 그대로 교체.
 */
export function SkeletonContent({ kind = "generic" }: { kind?: Kind }) {
  switch (kind) {
    case "dashboard":
      return <DashboardSkeleton />;
    case "chat":
      return <ChatSkeleton />;
    case "report":
      return <ReportSkeleton />;
    case "table":
      return <TableSkeleton />;
    case "graph":
      return <GraphSkeleton />;
    default:
      return <GenericSkeleton />;
  }
}

function Bar({ className }: { className?: string }) {
  return <span className={cn("block rounded-sm bg-background-subtle", className)} />;
}

export function DashboardSkeleton() {
  return (
    <div className="flex h-full w-full">
      <div className="hidden w-14 flex-col gap-3 border-r border-border bg-surface p-3 sm:flex">
        <span className="size-6 rounded-md bg-brand-subtle" />
        <Bar className="h-2 w-full" />
        <Bar className="h-2 w-3/4" />
        <Bar className="h-2 w-full" />
        <Bar className="h-2 w-2/3" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <Bar className="h-3 w-28" />
          <span className="h-6 w-16 rounded-md bg-brand-subtle" />
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-md border border-border bg-surface p-2 sm:p-3">
              <Bar className="mb-2 h-2 w-10" />
              <Bar className="h-4 w-14" />
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-md border border-border bg-surface p-3">
          <div className="flex h-full items-end gap-1.5 sm:gap-2">
            {[40, 65, 50, 80, 60, 90, 55, 72].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-t-sm bg-brand-subtle"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ChatSkeleton() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="border-b border-border bg-surface px-3 py-2">
        <Bar className="h-3 w-24" />
      </div>
      <div className="flex flex-1 flex-col gap-3 overflow-hidden p-3">
        <div className="max-w-[70%] rounded-lg rounded-tl-sm border border-border bg-surface p-2.5">
          <Bar className="mb-1.5 h-2 w-40" />
          <Bar className="h-2 w-28" />
        </div>
        <div className="ml-auto max-w-[70%] rounded-lg rounded-tr-sm bg-brand-subtle p-2.5">
          <span className="mb-1.5 block h-2 w-32 rounded-sm bg-brand/30" />
          <span className="block h-2 w-20 rounded-sm bg-brand/30" />
        </div>
        {/* 제안 → 승인 affordance (HITL 느낌) */}
        <div className="rounded-lg border border-border bg-surface p-2.5">
          <Bar className="mb-2 h-2 w-36" />
          <div className="flex gap-2">
            <span className="h-6 w-20 rounded-md bg-success-subtle" />
            <span className="h-6 w-16 rounded-md border border-border bg-background" />
          </div>
        </div>
      </div>
      <div className="border-t border-border bg-surface p-2">
        <span className="block h-7 w-full rounded-full border border-border bg-background" />
      </div>
    </div>
  );
}

export function ReportSkeleton() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-background-subtle p-4">
      <div className="flex h-full w-full max-w-[80%] flex-col gap-2 rounded-md border border-border bg-surface p-4 shadow-sm">
        <Bar className="h-4 w-1/2" />
        <Bar className="h-2 w-full" />
        <Bar className="h-2 w-full" />
        <Bar className="h-2 w-4/5" />
        <div className="my-2 h-20 rounded-md border border-border bg-background-subtle" />
        <Bar className="h-2 w-full" />
        <Bar className="h-2 w-3/4" />
      </div>
    </div>
  );
}

export function TableSkeleton() {
  return (
    <div className="flex h-full w-full flex-col p-3 sm:p-4">
      <div className="mb-3 flex items-center justify-between">
        <Bar className="h-3 w-24" />
        <span className="h-6 w-20 rounded-md bg-brand-subtle" />
      </div>
      <div className="overflow-hidden rounded-md border border-border">
        <div className="flex gap-3 border-b border-border bg-background-subtle px-3 py-2">
          {["w-24", "w-16", "w-20", "w-12"].map((w, i) => (
            <Bar key={i} className={cn("h-2", w)} />
          ))}
        </div>
        {[0, 1, 2, 3, 4].map((r) => (
          <div
            key={r}
            className="flex items-center gap-3 border-b border-border px-3 py-2 last:border-0"
          >
            <Bar className="h-2 w-24" />
            <Bar className="h-2 w-16" />
            <Bar className="h-2 w-20" />
            {/* 한 행만 경고색 — 재고위험 경고 힌트 */}
            <span
              className={cn(
                "ml-auto h-4 w-12 rounded-full",
                r === 2 ? "bg-warning-subtle" : "bg-success-subtle",
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function GraphSkeleton() {
  const nodes = [
    { x: 50, y: 22 },
    { x: 26, y: 46 },
    { x: 74, y: 42 },
    { x: 38, y: 74 },
    { x: 66, y: 72 },
    { x: 50, y: 50 },
  ];
  const edges = [
    [0, 5],
    [5, 1],
    [5, 2],
    [1, 3],
    [2, 4],
    [3, 5],
    [5, 4],
  ];
  return (
    <div className="h-full w-full bg-surface p-2">
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="var(--color-border-strong)"
            strokeWidth={0.6}
          />
        ))}
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={i === 5 ? 3.4 : 2.6}
            fill={i === 5 ? "var(--color-brand)" : "var(--color-brand-subtle)"}
            stroke="var(--color-border-strong)"
            strokeWidth={0.5}
          />
        ))}
      </svg>
    </div>
  );
}

export function GenericSkeleton() {
  return (
    <div className="flex h-full w-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <Bar className="h-3 w-28" />
        <span className="h-6 w-16 rounded-md bg-brand-subtle" />
      </div>
      <Bar className="h-2 w-full" />
      <Bar className="h-2 w-5/6" />
      <Bar className="h-2 w-3/4" />
      <div className="mt-2 grid flex-1 grid-cols-2 gap-3">
        <div className="rounded-md border border-border bg-surface" />
        <div className="rounded-md border border-border bg-surface" />
      </div>
    </div>
  );
}
