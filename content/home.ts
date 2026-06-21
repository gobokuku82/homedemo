import type { Section } from "@/lib/types";

/**
 * 홈 = 섹션 배열. 컨셉 정의서 "홈 8단 흐름"을 데이터로 표현.
 * 순서 = 배열 순서. 노출 토글 = enabled. id = 앵커(헤더 내비와 일치).
 * 섹션 추가/재배치/숨김은 이 파일만 수정 — 컴포넌트 변경 0.
 */
export const HOME_SECTIONS: Section[] = [
  // 1. 히어로 — 슬로건 + 대시보드+챗 목업 + 단일 CTA
  {
    type: "hero",
    id: "hero",
    eyebrowKey: "home.hero.eyebrow",
    headKey: "home.hero.head",
    subKey: "home.hero.sub",
    primaryCta: { labelKey: "common.cta.demo", href: "/demo", variant: "primary" },
    secondaryCta: { labelKey: "common.cta.explore", href: "#lineup", variant: "secondary" },
    mockCaptionKey: "home.hero.mockCaption",
  },
  // 2. 신뢰 — 파트너·MOU·파일럿 (로고 약하면 정직하게)
  {
    type: "trust",
    id: "trust",
    eyebrowKey: "home.trust.eyebrow",
    titleKey: "home.trust.title",
  },
  // 3. 공통 엔진 — 대시보드·graph RAG·HITL+todo 를 실제 화면과 스택
  {
    type: "engine",
    id: "engine",
    eyebrowKey: "home.engine.eyebrow",
    titleKey: "home.engine.title",
    introKey: "home.engine.intro",
    moduleIds: ["dashboard", "graphRag", "hitlTodo"],
  },
  // 4. 작동 방식 데모 — todo 펼침 → 제안→승인(HITL)
  {
    type: "howItWorks",
    id: "how-it-works",
    eyebrowKey: "home.howItWorks.eyebrow",
    titleKey: "home.howItWorks.title",
    introKey: "home.howItWorks.intro",
  },
  // 5. 라인업 3종 + 두 고객 분기
  {
    type: "lineup",
    id: "lineup",
    eyebrowKey: "home.lineup.eyebrow",
    titleKey: "home.lineup.title",
    introKey: "home.lineup.intro",
    showComingSoon: true,
    showTrackSplit: true,
  },
  // 6. 지식그래프 쇼케이스 + 데이터 연동
  {
    type: "knowledgeGraph",
    id: "knowledge-graph",
    eyebrowKey: "home.knowledgeGraph.eyebrow",
    titleKey: "home.knowledgeGraph.title",
    introKey: "home.knowledgeGraph.intro",
  },
  // 7. AX 자가진단(2차) + 유튜브 데모
  {
    type: "axSelfCheck",
    id: "ax",
    eyebrowKey: "home.axSelfCheck.eyebrow",
    titleKey: "home.axSelfCheck.title",
    introKey: "home.axSelfCheck.intro",
    secondary: true,
  },
  // 8. 최종 CTA (슬로건 수미상관) — 푸터는 전역 레이아웃
  {
    type: "finalCta",
    id: "final-cta",
    headKey: "home.finalCta.head",
    subKey: "home.finalCta.sub",
    primaryCta: { labelKey: "common.cta.demo", href: "/demo", variant: "primary" },
    secondaryCta: { labelKey: "common.cta.explore", href: "#lineup", variant: "secondary" },
  },
];
