import type { Product } from "@/lib/types";

/**
 * 마음드림 — 상담. 정신건강 민감 영역.
 * sensitivity.level="sensitive" 로 카피·CTA 노출 수위를 데이터 한 곳에서 게이팅.
 * - disclaimerKey: 보조 도구임을 명시(대체 아님).
 * - ctaOverride: 기본 "데모 요청" 대신 "상담 도입 문의".
 * - hideSectionTypes: 임상 맥락에서 부적절한 연출형 섹션을 상세에서 제외.
 */
export const maeumdream: Product = {
  slug: "maeumdream",
  status: "available",
  order: 3,
  track: "control",

  nameKey: "product.maeumdream.name",
  domainKey: "product.maeumdream.domain",
  taglineKey: "product.maeumdream.tagline",
  summaryKey: "product.maeumdream.summary",

  offering: {
    kind: "capabilities",
    capabilities: [
      { id: "records", labelKey: "product.maeumdream.cap.records" },
      { id: "flow", labelKey: "product.maeumdream.cap.flow" },
      { id: "followup", labelKey: "product.maeumdream.cap.followup" },
    ],
  },

  engineModules: ["dashboard", "graphRag", "hitlTodo"],
  sensitivity: {
    level: "sensitive",
    disclaimerKey: "product.maeumdream.disclaimer",
    hideSectionTypes: ["howItWorks"],
    ctaOverride: {
      labelKey: "product.maeumdream.cta",
      href: "/demo?product=maeumdream",
      variant: "primary",
    },
  },

  cardScreenshot: {
    altKey: "product.maeumdream.shot.card.alt",
    kind: "generic",
    ratio: "16/9",
  },
  screenshots: [],
};
