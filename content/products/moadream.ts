import type { Product } from "@/lib/types";

/** 모아드림 — 마케팅. 4에이전트 협업(agents shape). 결과 트랙. */
export const moadream: Product = {
  slug: "moadream",
  status: "available",
  order: 1,
  track: "result",

  nameKey: "product.moadream.name",
  domainKey: "product.moadream.domain",
  taglineKey: "product.moadream.tagline",
  summaryKey: "product.moadream.summary",

  offering: {
    kind: "agents",
    agents: [
      {
        id: "data",
        nameKey: "product.moadream.agent.data.name",
        roleKey: "product.moadream.agent.data.role",
      },
      {
        id: "creative",
        nameKey: "product.moadream.agent.creative.name",
        roleKey: "product.moadream.agent.creative.role",
      },
      {
        id: "media",
        nameKey: "product.moadream.agent.media.name",
        roleKey: "product.moadream.agent.media.role",
      },
      {
        id: "report",
        nameKey: "product.moadream.agent.report.name",
        roleKey: "product.moadream.agent.report.role",
      },
    ],
  },

  engineModules: ["dashboard", "graphRag", "docgen", "hitlTodo", "automation"],
  sensitivity: { level: "standard" },

  cardScreenshot: {
    altKey: "product.moadream.shot.card.alt",
    kind: "dashboard",
    ratio: "16/9",
  },
  screenshots: [
    { altKey: "product.moadream.shot.dashboard.alt", kind: "dashboard", ratio: "16/9" },
    { altKey: "product.moadream.shot.report.alt", kind: "report", ratio: "4/3" },
  ],
};
