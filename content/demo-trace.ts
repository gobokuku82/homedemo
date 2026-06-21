import type { DemoTrace } from "@/lib/types";

/**
 * 작동 방식 데모용 스크립트.
 * 핵심: 에이전트가 제안(propose)하고 → 사람이 승인(approve)한 뒤에야 실행(execute).
 * "권한 이동"을 말로 설명하지 않고, 승인 단계를 화면으로 보여준다(Devin 트레이스 차용).
 */
export const DEMO_TRACE: DemoTrace = {
  steps: [
    {
      id: "ingest",
      kind: "system",
      status: "done",
      titleKey: "demo.trace.steps.ingest.title",
      detailKey: "demo.trace.steps.ingest.detail",
    },
    {
      id: "analyze",
      kind: "agent",
      status: "done",
      titleKey: "demo.trace.steps.analyze.title",
      detailKey: "demo.trace.steps.analyze.detail",
    },
    {
      id: "propose",
      kind: "agent",
      status: "proposed",
      titleKey: "demo.trace.steps.propose.title",
      detailKey: "demo.trace.steps.propose.detail",
    },
    {
      id: "approve",
      kind: "approval",
      status: "proposed",
      titleKey: "demo.trace.steps.approve.title",
      detailKey: "demo.trace.steps.approve.detail",
      actorKey: "demo.trace.steps.approve.actor",
    },
    {
      id: "execute",
      kind: "system",
      status: "proposed",
      titleKey: "demo.trace.steps.execute.title",
      detailKey: "demo.trace.steps.execute.detail",
    },
    {
      id: "report",
      kind: "agent",
      status: "proposed",
      titleKey: "demo.trace.steps.report.title",
      detailKey: "demo.trace.steps.report.detail",
    },
  ],
};
