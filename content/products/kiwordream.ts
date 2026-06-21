import type { Product } from "@/lib/types";

/** 키워드림 — 제약 영업. 기능 나열(capabilities shape). 통제 트랙(규제산업). */
export const kiwordream: Product = {
  slug: "kiwordream",
  status: "available",
  order: 2,
  track: "control",

  nameKey: "product.kiwordream.name",
  domainKey: "product.kiwordream.domain",
  taglineKey: "product.kiwordream.tagline",
  summaryKey: "product.kiwordream.summary",

  offering: {
    kind: "capabilities",
    capabilities: [
      { id: "perf", labelKey: "product.kiwordream.cap.perf" },
      { id: "schedule", labelKey: "product.kiwordream.cap.schedule" },
      { id: "statsAuto", labelKey: "product.kiwordream.cap.statsAuto" },
      { id: "stockRisk", labelKey: "product.kiwordream.cap.stockRisk" },
      { id: "swap", labelKey: "product.kiwordream.cap.swap" },
    ],
  },

  engineModules: ["dashboard", "hitlTodo", "automation", "graphRag"],
  sensitivity: { level: "standard" },

  cardScreenshot: {
    altKey: "product.kiwordream.shot.card.alt",
    kind: "table",
    ratio: "16/9",
  },
  screenshots: [
    { altKey: "product.kiwordream.shot.dashboard.alt", kind: "dashboard", ratio: "16/9" },
  ],
};
