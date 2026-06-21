import { getDictionary } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import type { DemoTrace, DemoTraceStep } from "@/lib/types";

/**
 * 작동 방식 트레이스 — 할 일이 단계로 펼쳐지고, 승인 단계에서 멈춰 사람을 기다린다.
 * "권한 이동"을 설명하지 않고, 승인 카드를 화면으로 보여줌(Devin 트레이스 차용).
 */
export function TodoTrace({ trace }: { trace: DemoTrace }) {
  return (
    <ol className="flex flex-col">
      {trace.steps.map((step, i) => (
        <li key={step.id} className="flex gap-4">
          <StepMarker step={step} last={i === trace.steps.length - 1} />
          <div className="flex-1 pb-6">
            {step.kind === "approval" ? (
              <HitlApprovalCard step={step} />
            ) : (
              <TraceStepBody step={step} />
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

function StepMarker({ step, last }: { step: DemoTraceStep; last: boolean }) {
  const done = step.status === "done";
  const isApproval = step.kind === "approval";
  return (
    <div className="flex flex-col items-center">
      <span
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-full border-2",
          done && "border-success bg-success-subtle text-success",
          !done && isApproval && "border-brand bg-brand-subtle text-brand",
          !done && !isApproval && "border-border bg-surface text-ink-subtle",
        )}
      >
        {done ? (
          <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
            <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <span className="size-2 rounded-full bg-current" />
        )}
      </span>
      {!last && <span className="w-0.5 flex-1 bg-border" />}
    </div>
  );
}

function TraceStepBody({ step }: { step: DemoTraceStep }) {
  const { t } = getDictionary();
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <KindTag kind={step.kind} />
        <h3 className="text-body font-semibold text-ink">{t(step.titleKey)}</h3>
      </div>
      {step.detailKey && <p className="text-caption text-ink-muted">{t(step.detailKey)}</p>}
    </div>
  );
}

function HitlApprovalCard({ step }: { step: DemoTraceStep }) {
  const { t } = getDictionary();
  return (
    <div className="rounded-lg border border-brand/40 bg-brand-subtle/50 p-4">
      <div className="flex items-center gap-2">
        <KindTag kind="approval" />
        <h3 className="text-body font-semibold text-ink">{t(step.titleKey)}</h3>
      </div>
      {step.detailKey && <p className="mt-1 text-caption text-ink-muted">{t(step.detailKey)}</p>}
      <div className="mt-3 flex items-center gap-2">
        {/* 시각적 affordance(데모 연출) — 사람이 승인하는 순간 = 권한 이동 */}
        <span className="inline-flex h-9 items-center rounded-md bg-success px-4 text-caption font-medium text-on-brand">
          승인
        </span>
        <span className="inline-flex h-9 items-center rounded-md border border-border bg-surface px-4 text-caption font-medium text-ink-muted">
          보류
        </span>
        {step.actorKey && (
          <span className="ml-auto text-label text-ink-subtle">{t(step.actorKey)}</span>
        )}
      </div>
    </div>
  );
}

function KindTag({ kind }: { kind: DemoTraceStep["kind"] }) {
  const label = kind === "agent" ? "에이전트" : kind === "approval" ? "승인" : "시스템";
  return (
    <span
      className={cn(
        "rounded-sm px-1.5 py-0.5 text-label font-medium",
        kind === "approval" ? "bg-brand text-on-brand" : "bg-background-subtle text-ink-muted",
      )}
    >
      {label}
    </span>
  );
}
