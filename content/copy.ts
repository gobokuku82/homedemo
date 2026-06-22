// Trilingual copy for DreamAgent.
//
// Only the strings the source design templates ({{ ... }}) switch per language:
// the hero, the AGENTS heading + description, the HITL heading + description,
// the CTA block, and the nav "Request Access" label. All other body copy
// (agent cards, capabilities, the product mock-up, footer) is authored in
// English in every language, exactly as the source design does.

export type Lang = "en" | "ko" | "ja";

export interface Copy {
  /** Hero headline, two lines. */
  h1: [string, string];
  heroSub: string;
  /** AGENTS section headline, four lines. */
  agentsH: [string, string, string, string];
  agentsDesc: string;
  /** HITL section headline, up to four lines (4th may be empty). */
  hitlH: [string, string, string, string];
  hitlDesc: string;
  /** CTA section headline, four lines. */
  ctaH: [string, string, string, string];
  ctaDesc: string;
  ctaBtn: string;
  navAccess: string;
}

/** Body font per language (headings always use DISPLAY). */
export const fontMap: Record<Lang, string> = {
  en: "'Bricolage Grotesque', Arial, Helvetica, sans-serif",
  ko: "'IBM Plex Sans KR', 'Bricolage Grotesque', sans-serif",
  ja: "'Zen Kaku Gothic New', sans-serif",
};

/** Headline letter-spacing per language (Latin tightens, CJK relaxes). */
export const trackingMap: Record<Lang, { h1: string; h2: string }> = {
  en: { h1: "-4px", h2: "-3px" },
  ko: { h1: "-1px", h2: "-1px" },
  ja: { h1: "0px", h2: "0px" },
};

export const copy: Record<Lang, Copy> = {
  en: {
    h1: ["The expert", "is you."],
    heroSub:
      "DreamAgent deploys specialized AI agents built for your industry — with human-in-the-loop control at every step. You see every action, approve every decision.",
    agentsH: ["Three", "experts.", "One", "platform."],
    agentsDesc:
      "Each agent is purpose-built for its domain — trained on industry-specific knowledge, operating with full transparency. You see every step, approve every decision, and can redirect at any moment.",
    hitlH: ["AI that", "asks", "before", "it acts."],
    hitlDesc:
      "Most AI agents run on autopilot — and you find out what happened after the fact. DreamAgent pauses at every meaningful decision, shows you what it's about to do, and waits for your approval. Every time.",
    ctaH: ["Ready", "to meet", "your", "expert?"],
    ctaDesc:
      "DreamAgent is in closed beta. Request access and we'll reach out to find the right agent for your team.",
    ctaBtn: "Request Early Access",
    navAccess: "Request Access",
  },
  ko: {
    h1: ["이제 전문가는,", "당신입니다."],
    heroSub:
      "DreamAgent는 마케팅, 상담, 의약품 영업에 특화된 AI 에이전트를 제공합니다. 모든 단계에서 당신이 확인하고 결정합니다.",
    agentsH: ["세 명의", "전문가.", "하나의", "플랫폼."],
    agentsDesc:
      "각 에이전트는 업종별 전문 지식으로 특화 설계되어 완전한 투명성으로 작동합니다. 모든 단계를 확인하고, 모든 결정을 승인하며, 언제든지 방향을 바꿀 수 있습니다.",
    hitlH: ["먼저 묻고,", "그 다음에", "행동합니다.", ""],
    hitlDesc:
      "대부분의 AI 에이전트는 먼저 실행하고 나중에 알려줍니다. DreamAgent는 중요한 결정마다 멈추고, 무엇을 하려는지 보여주며, 당신의 승인을 기다립니다. 항상.",
    ctaH: ["당신의", "전문가를", "지금 만나", "보세요."],
    ctaDesc:
      "현재 클로즈드 베타 운영 중입니다. 액세스를 요청하시면 팀에 맞는 에이전트를 함께 찾아드립니다.",
    ctaBtn: "얼리 액세스 신청",
    navAccess: "액세스 신청",
  },
  ja: {
    h1: ["あなたが、", "プロになる。"],
    heroSub:
      "DreamAgentは、マーケティング・カウンセリング・医薬品営業に特化したAIエージェントを提供します。すべてのステップで、あなたが確認し、決定します。",
    agentsH: ["3つの", "専門家。", "1つの", "プラットフォーム。"],
    agentsDesc:
      "各エージェントは業界固有の知識で設計され、完全な透明性で動作します。すべてのステップを確認し、すべての決定を承認し、いつでも方向を変えることができます。",
    hitlH: ["行動する前に、", "必ず", "確認します。", ""],
    hitlDesc:
      "ほとんどのAIエージェントは自動で実行されます。DreamAgentは重要な決定ごとに停止し、何をしようとしているかを示し、あなたの承認を待ちます。常に。",
    ctaH: ["あなたの", "専門家に", "会う準備は", "できましたか？"],
    ctaDesc:
      "現在クローズドベータを実施中です。アクセスをリクエストいただければ、最適なエージェントをご提案します。",
    ctaBtn: "アーリーアクセスを申請",
    navAccess: "アクセス申請",
  },
};
