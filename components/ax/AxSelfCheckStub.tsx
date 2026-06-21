"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

interface AxQuestionView {
  id: string;
  prompt: string;
}

/**
 * AX 자가진단 2차 티저(stub) — 문항 몇 개만 예/아니오로 응답.
 * 전체 진단은 게이트("곧 공개"). 실제 진단 흐름이 들어오면 교체.
 * (클라이언트 컴포넌트 — 카피는 서버에서 해석된 문자열로 전달받음.)
 */
export function AxSelfCheckStub({
  questions,
  gateLabel,
}: {
  questions: AxQuestionView[];
  gateLabel: string;
}) {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const answered = Object.keys(answers).length;

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 shadow-card">
      <ul className="flex flex-col gap-3">
        {questions.map((q) => (
          <li key={q.id} className="flex items-center justify-between gap-4">
            <span className="text-body text-ink">{q.prompt}</span>
            <span className="flex shrink-0 gap-1">
              {[
                { label: "예", val: true },
                { label: "아니오", val: false },
              ].map((opt) => {
                const active = answers[q.id] === opt.val;
                return (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => setAnswers((a) => ({ ...a, [q.id]: opt.val }))}
                    aria-pressed={active}
                    className={cn(
                      "rounded-md border px-3 py-1 text-caption transition-colors",
                      active
                        ? "border-brand bg-brand-subtle text-brand"
                        : "border-border text-ink-muted hover:bg-background-subtle",
                    )}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
        <span className="text-caption text-ink-muted">
          {answered} / {questions.length}
        </span>
        <span className="rounded-md bg-background-subtle px-3 py-1.5 text-caption font-medium text-ink-subtle">
          {gateLabel}
        </span>
      </div>
    </div>
  );
}
