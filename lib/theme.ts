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

// ============================================================================
// 색상 테스트(Theme Lab)용 — 스킴 정의 & CSS 변수 빌더
// 페이지 전체가 아래 토큰(=CSS 변수)으로 그려지므로, 이 세트만 갈아끼우면
// 컴포넌트를 건드리지 않고 색 조합 전체를 교체할 수 있다.
// ============================================================================

export interface ColorScheme {
  accent: string; // 강조(버튼·링크·포인트)
  hlAccent: string; // 강조 텍스트(‘브레인’·‘전문가’)
  onaccent: string; // 강조 버튼 위 글자색
  ink: string; // 본문 텍스트
  subtle: string; // 보조 텍스트(설명·캡션)
  surface: string; // 페이지 배경
  sectionbg: string; // 섹션 배경(파트너)
  prodBg: string; // 제품 섹션 배경
  prodText: string; // 제품 섹션 텍스트
  prodLine: string; // 제품 플레이스홀더 보더
  cardbg: string; // 카드 배경(히어로/카드)
  darkbg: string; // CTA 배경(가장 어두운 영역)
  line: string; // 테두리·구분선
}

/** ColorScheme → 루트에 적용할 CSS 변수 맵 (위치 오프셋 등 고정값은 theme에서 가져옴) */
export function buildCssVars(s: ColorScheme): CSSProperties {
  return {
    "--accent": s.accent,
    "--ink": s.ink,
    "--surface": s.surface,
    "--hlScale": "1",
    "--btnRadius": theme.btnRadius,
    "--hlAccent": s.hlAccent,
    "--prodBg": s.prodBg,
    "--prodText": s.prodText,
    "--prodLine": s.prodLine,
    "--darkbg": s.darkbg,
    "--subtle": s.subtle,
    "--line": s.line,
    "--cardbg": s.cardbg,
    "--sectionbg": s.sectionbg,
    "--onaccent": s.onaccent,
    "--l1x": theme.l1x,
    "--l1y": theme.l1y,
    "--l2x": theme.l2x,
    "--l2y": theme.l2y,
    "--subx": theme.subx,
    "--suby": theme.suby,
  } as CSSProperties;
}

// 안 1 = 현재 사이트 색 (cssVars와 1:1로 동일)
export const defaultScheme: ColorScheme = {
  accent: theme.accent,
  hlAccent: theme.hlAccent,
  onaccent: theme.onAccent,
  ink: theme.ink,
  subtle: theme.subtle,
  surface: theme.surface,
  sectionbg: theme.sectionBg,
  prodBg: theme.sectionBg, // 현재 cssVars의 --prodBg는 sectionBg를 씀
  prodText: theme.ink,
  prodLine: theme.prodLine,
  cardbg: theme.cardBg,
  darkbg: theme.darkBg,
  line: theme.line,
};

export interface NamedScheme {
  id: string;
  label: string;
  note: string;
  scheme: ColorScheme;
}

// 사용자 제안 팔레트 기반 후보안들. 편집 패널에서 자유롭게 수정 가능.
export const colorSchemes: NamedScheme[] = [
  {
    id: "1",
    label: "안 1 · 현재",
    note: "지금 사이트와 동일",
    scheme: defaultScheme,
  },
  {
    id: "2",
    label: "안 2 · 네이비+스카이",
    note: "제안 팔레트에 충실",
    scheme: {
      accent: "#3E9DC1", // sky-300 (하이라이트·링크)
      hlAccent: "#3E9DC1",
      onaccent: "#06192E",
      ink: "#E8EAF2", // text
      subtle: "#8A8D9A", // text-dim
      surface: "#0A1C36", // navy-900
      sectionbg: "#102A4C", // navy-800
      prodBg: "#102A4C", // navy-800
      prodText: "#E8EAF2",
      prodLine: "#234E7A",
      cardbg: "#153358", // navy-700
      darkbg: "#06162B", // 가장 어두운 앵커
      line: "#234E7A", // 브랜드 톤 보더
    },
  },
  {
    id: "3",
    label: "안 3 · 틸 액센트",
    note: "네이비 + 청록 강조",
    scheme: {
      accent: "#21AB9E", // teal
      hlAccent: "#21AB9E",
      onaccent: "#04231F",
      ink: "#E8EAF2",
      subtle: "#8A8D9A",
      surface: "#0A1C36",
      sectionbg: "#102A4C",
      prodBg: "#102A4C",
      prodText: "#E8EAF2",
      prodLine: "#234E7A",
      cardbg: "#153358",
      darkbg: "#06162B",
      line: "#234E7A",
    },
  },
  {
    id: "4",
    label: "안 4 · 니어블랙",
    note: "중성 다크 + 밝은 스카이",
    scheme: {
      accent: "#5AB3D4", // sky-200
      hlAccent: "#5AB3D4",
      onaccent: "#06121F",
      ink: "#E8EAF2",
      subtle: "#8A8D9A",
      surface: "#0E0E13", // bg-base
      sectionbg: "#16161B", // bg-surface
      prodBg: "#16161B",
      prodText: "#E8EAF2",
      prodLine: "#2A2A33",
      cardbg: "#1C1C23",
      darkbg: "#08080C",
      line: "#2E2E37",
    },
  },
  {
    id: "5",
    label: "안 5 · 퍼플 팝",
    note: "네이비 + 보라 강조",
    scheme: {
      accent: "#9F57C5", // purple
      hlAccent: "#9F57C5",
      onaccent: "#1A0A28",
      ink: "#E8EAF2",
      subtle: "#8A8D9A",
      surface: "#0A1C36",
      sectionbg: "#102A4C",
      prodBg: "#102A4C",
      prodText: "#E8EAF2",
      prodLine: "#234E7A",
      cardbg: "#153358",
      darkbg: "#06162B",
      line: "#234E7A",
    },
  },
];

// 편집 패널에 노출할 토큰 목록 (순서 = 화면 표시 순서)
export const schemeFields: { key: keyof ColorScheme; label: string; hint: string }[] = [
  { key: "surface", label: "페이지 배경", hint: "전체 바탕" },
  { key: "sectionbg", label: "섹션 배경", hint: "파트너 섹션" },
  { key: "prodBg", label: "제품 배경", hint: "제품 섹션" },
  { key: "cardbg", label: "카드 배경", hint: "히어로/카드" },
  { key: "darkbg", label: "CTA 배경", hint: "가장 어두운 영역" },
  { key: "line", label: "테두리/구분선", hint: "보더·구분선" },
  { key: "accent", label: "강조색", hint: "버튼·링크·포인트" },
  { key: "hlAccent", label: "강조 텍스트", hint: "‘브레인’·‘전문가’" },
  { key: "onaccent", label: "버튼 위 글자", hint: "강조버튼 텍스트" },
  { key: "ink", label: "본문 텍스트", hint: "기본 글자색" },
  { key: "subtle", label: "보조 텍스트", hint: "설명·캡션" },
  { key: "prodText", label: "제품 텍스트", hint: "제품 섹션 글자" },
  { key: "prodLine", label: "제품 보더", hint: "제품 플레이스홀더" },
];

// CSS 변수 이름 매핑 (코드 복사용)
export const schemeVarName: Record<keyof ColorScheme, string> = {
  accent: "--accent",
  hlAccent: "--hlAccent",
  onaccent: "--onaccent",
  ink: "--ink",
  subtle: "--subtle",
  surface: "--surface",
  sectionbg: "--sectionbg",
  prodBg: "--prodBg",
  prodText: "--prodText",
  prodLine: "--prodLine",
  cardbg: "--cardbg",
  darkbg: "--darkbg",
  line: "--line",
};

// 사용자가 제안한 전체 팔레트 (편집 패널의 참고 스와치)
export const referencePalette: { name: string; hex: string }[] = [
  { name: "bg-base", hex: "#0E0E13" },
  { name: "bg-surface", hex: "#16161B" },
  { name: "navy-900", hex: "#0A1C36" },
  { name: "navy-800", hex: "#102A4C" },
  { name: "navy-700", hex: "#153358" },
  { name: "blue-600", hex: "#1C4B8B" },
  { name: "sky-400", hex: "#338CAC" },
  { name: "sky-300", hex: "#3E9DC1" },
  { name: "sky-200", hex: "#5AB3D4" },
  { name: "teal", hex: "#21AB9E" },
  { name: "purple", hex: "#9F57C5" },
  { name: "coral", hex: "#DD8287" },
  { name: "amber", hex: "#CFA817" },
  { name: "red", hex: "#C21E16" },
  { name: "text", hex: "#E8EAF2" },
  { name: "text-muted", hex: "#C0C8E9" },
  { name: "text-dim", hex: "#8A8D9A" },
];

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
