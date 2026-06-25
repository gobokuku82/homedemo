import type { CSSProperties } from "react";

// Dark theme tokens for the "Dream Agent — Bold" landing page.
// These mirror the design's DCLogic defaults (sky-blue accent on deep navy).
export const theme = {
  accent: "#38BDF8", // sky blue
  ink: "#F1F5F9", // near-white text
  surface: "#0B1220", // page background (navy)
  darkBg: "#080E18", // CTA section background
  onAccent: "#06121F", // dark text on sky buttons
  subtle: "#8B98AD", // muted slate text
  line: "#1B2638", // navy borders
  cardBg: "#0F1828", // elevated cards
  sectionBg: "#0E1626", // alt section background (rhythm)
  prodLine: "#1C2942", // product placeholder fill
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
  { name: "Mirror Dream cso", domain: "제약", tag: "PHARMA" },
  { name: "MAUM Dream", domain: "관리", tag: "MANAGEMENT" },
  { name: "MoA Dream", domain: "마케팅", tag: "MARKETING" },
];
