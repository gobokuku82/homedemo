import type { GraphData } from "@/lib/types";

/**
 * 지식그래프 쇼케이스 데이터.
 * 좌표(x,y)는 0~100 정규화 — 사전 레이아웃(물리 시뮬레이션 blob 아님).
 * 실제 회의록·문서·데이터가 연결되는 모습을 정적으로 보여준다.
 */
export const GRAPH: GraphData = {
  nodes: [
    { id: "meeting", labelKey: "graph.nodes.meeting", group: "meeting", x: 50, y: 16 },
    { id: "kpi", labelKey: "graph.nodes.kpi", group: "metric", x: 58, y: 48 },
    { id: "campaign", labelKey: "graph.nodes.campaign", group: "doc", x: 24, y: 36 },
    { id: "sales", labelKey: "graph.nodes.sales", group: "metric", x: 80, y: 34 },
    { id: "inventory", labelKey: "graph.nodes.inventory", group: "metric", x: 84, y: 66 },
    { id: "customer", labelKey: "graph.nodes.customer", group: "entity", x: 30, y: 68 },
    { id: "report", labelKey: "graph.nodes.report", group: "doc", x: 56, y: 84 },
    { id: "policy", labelKey: "graph.nodes.policy", group: "doc", x: 14, y: 54 },
  ],
  edges: [
    { from: "meeting", to: "kpi" },
    { from: "meeting", to: "campaign" },
    { from: "campaign", to: "customer" },
    { from: "customer", to: "policy" },
    { from: "sales", to: "kpi" },
    { from: "sales", to: "inventory" },
    { from: "inventory", to: "report" },
    { from: "kpi", to: "report" },
    { from: "kpi", to: "sales" },
    { from: "customer", to: "campaign" },
  ],
  integrations: [
    { id: "db", labelKey: "graph.integrations.db" },
    { id: "erp", labelKey: "graph.integrations.erp" },
    { id: "crm", labelKey: "graph.integrations.crm" },
    { id: "sheets", labelKey: "graph.integrations.sheets" },
    { id: "api", labelKey: "graph.integrations.api" },
  ],
};
