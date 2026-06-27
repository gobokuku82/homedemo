import type { CSSProperties } from "react";

// Dark theme tokens for the "Dream Agent — Bold" landing page.
// These mirror the design's DCLogic defaults (sky-blue accent on deep navy).
export const theme = {
  accent: "#38BDF8", // sky blue
  ink: "#F1F5F9", // near-white text
  surface: "#121C30", // page background (lifted navy — one tone brighter)
  darkBg: "#0C1322", // CTA section background (darkest anchor for contrast)
  onAccent: "#06121F", // dark text on sky buttons
  subtle: "#94A2B8", // muted slate text (slightly brighter for the lifted bg)
  line: "#2A3A57", // navy borders
  cardBg: "#1A2740", // elevated cards
  sectionBg: "#18243C", // alt section background (rhythm)
  prodLine: "#2E4063", // product placeholder fill
  hlAccent: "#38BDF8", // highlighted word colour
  btnRadius: "999px", // pill buttons
  // per-line hero position offsets (the design's "Tweaks")
  l1x: "76px",
  l1y: "0px",
  l2x: "0px",
  l2y: "0px",
  subx: "0px",
  suby: "0px",
} as const;

/**
 * CSS custom properties applied to the root wrapper. Variable names match the
 * source design exactly (note the lowercase --darkbg/--cardbg/--sectionbg/--onaccent).
 */
export const cssVars: CSSProperties = {
  "--accent": theme.accent,
  "--ink": theme.ink,
  "--surface": theme.surface,
  "--hlScale": "1",
  "--btnRadius": theme.btnRadius,
  "--hlAccent": theme.hlAccent,
  "--prodBg": theme.sectionBg,
  "--prodText": theme.ink,
  "--prodLine": theme.prodLine,
  "--darkbg": theme.darkBg,
  "--subtle": theme.subtle,
  "--line": theme.line,
  "--cardbg": theme.cardBg,
  "--sectionbg": theme.sectionBg,
  "--onaccent": theme.onAccent,
  "--l1x": theme.l1x,
  "--l1y": theme.l1y,
  "--l2x": theme.l2x,
  "--l2y": theme.l2y,
  "--subx": theme.subx,
  "--suby": theme.suby,
} as CSSProperties;

export interface Agent {
  name: string;
  domain: string;
  tag: string;
}

export const agentData: Agent[] = [
  { name: "MoA Dream", domain: "마케팅", tag: "MARKETING" },
  { name: "M.A.U.M Dream", domain: "관리", tag: "MANAGEMENT" },
  { name: "Mirror Dream", domain: "제약", tag: "PHARMA CSO" },
];

// 히어로 쇼케이스 슬라이드 — 제품 섹션의 agentData와 독립.
// 캔버스는 16/9(영상 비율) 고정. 이미지는 contain(잘림 없이 전부, 안 맞으면 여백).
export interface HeroSlide {
  name: string; // 상단 창 제목 + 하단 제품명
  tag: string; // 하단 태그
  image?: string; // 제품 화면 이미지 (public/ 기준 경로)
  youtubeId?: string; // 유튜브 영상 ID (자동재생·음소거·루프)
}

export const heroSlides: HeroSlide[] = [
  { name: "MoA Dream", tag: "MARKETING", youtubeId: "G6pru5k0Z10" },
  { name: "MAUM Dream", tag: "MANAGEMENT", youtubeId: "YEbejPGOyMA" },
  { name: "Mirror Dream cso", tag: "PHARMA", image: "/hero/hero-1.png" },
];
