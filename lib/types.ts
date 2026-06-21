// ============================================================================
// DreamAgent — 공유 타입 (단일 출처)
// content/* 데이터는 이 타입에 맞춰 작성하고, components/* 는 이 타입을 props로 받음.
// 모든 카피는 I18nKey(점-경로)로만 표현 — 컴포넌트에 문자열 하드코딩 금지.
// ============================================================================

/** messages/<locale>.json 의 점-경로. 예: "home.hero.head" */
export type I18nKey = string;

export type Locale = "ko" | "en";

/** CTA 참조 — 라벨은 i18n 키, 동작은 href. */
export interface CtaRef {
  labelKey: I18nKey;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}

/** 스크린샷 참조 — 실제 화면이 없으면 src 생략(placeholder 스켈레톤 렌더). */
export interface ScreenshotRef {
  /** /public 기준 경로. 미지정 시 ScreenshotFrame 이 placeholder 스켈레톤을 그림. */
  src?: string;
  altKey: I18nKey;
  /** placeholder 스켈레톤의 형태 힌트 */
  kind?: "dashboard" | "chat" | "report" | "table" | "graph" | "generic";
  ratio?: "16/9" | "4/3" | "1/1" | "3/2";
}

// ---------------------------------------------------------------------------
// 제품 (Product) — "제품 = 데이터 1개" 확장 seam
// ---------------------------------------------------------------------------

/** 두 고객 분기: 결과 트랙(실무자·대표) | 통제 트랙(규제산업 의사결정자) */
export type Track = "result" | "control";

/** 공통 엔진 DNA 모듈 */
export type EngineModuleId =
  | "dashboard" // 대시보드(데이터 정리·지표·분석)
  | "graphRag" // graph RAG 지식층
  | "docgen" // 문서생성(PDF·PPT)
  | "hitlTodo" // HITL + todo workflow
  | "automation"; // 자동화

export type ProductStatus = "available" | "comingSoon";

export interface Agent {
  id: string;
  nameKey: I18nKey;
  roleKey: I18nKey;
}

export interface Capability {
  id: string;
  labelKey: I18nKey;
  descKey?: I18nKey;
}

/** 모아(agents 협업) vs 키워·마음(capabilities) 을 한 모델로 흡수 */
export type Offering =
  | { kind: "agents"; agents: Agent[] }
  | { kind: "capabilities"; capabilities: Capability[] };

/** 민감 영역(마음드림) 노출 정책 — 게이팅을 데이터 한 곳에서 관리 */
export interface Sensitivity {
  level: "standard" | "sensitive";
  /** sensitive 일 때 절제된 고지 카피 */
  disclaimerKey?: I18nKey;
  /** 제품 상세에서 숨길 섹션 타입(예: 임상 "데모" 연출 차단) */
  hideSectionTypes?: SectionType[];
  /** 기본 데모 CTA 대신 사용할 CTA(예: "상담 문의") */
  ctaOverride?: CtaRef;
}

export interface Product {
  slug: string;
  status: ProductStatus;
  order: number;
  track: Track;

  nameKey: I18nKey;
  domainKey: I18nKey;
  taglineKey: I18nKey;
  summaryKey: I18nKey;

  offering: Offering;
  engineModules: EngineModuleId[];
  sensitivity: Sensitivity;

  cardScreenshot: ScreenshotRef;
  screenshots: ScreenshotRef[];

  /** 옵션: 제품별 커스텀 상세 레이아웃. 없으면 buildProductSections 가 shape 로 파생. */
  sections?: Section[];
}

// ---------------------------------------------------------------------------
// 공통 엔진 / 신뢰 / 작동방식 / 지식그래프 / AX — content 데이터 타입
// ---------------------------------------------------------------------------

export interface EngineModule {
  id: EngineModuleId;
  nameKey: I18nKey;
  descKey: I18nKey;
  screenshot: ScreenshotRef;
}

export type PartnerKind = "partner" | "mou" | "pilot";

export interface Partner {
  id: string;
  name: string;
  logoSrc?: string;
  kind: PartnerKind;
}

export interface PartnersData {
  /** 로고가 약하면 false — LogoWall 이 정직한 안내 문구로 전환 */
  hasStrongLogos: boolean;
  items: Partner[];
  honestNoteKey?: I18nKey;
}

export type TraceStepKind = "agent" | "system" | "approval";
export type TraceStepStatus = "proposed" | "approved" | "done";

export interface DemoTraceStep {
  id: string;
  kind: TraceStepKind;
  status: TraceStepStatus;
  titleKey: I18nKey;
  detailKey?: I18nKey;
  /** approval 단계: 사람이 승인하는 순간(권한 이동) 표시 */
  actorKey?: I18nKey;
}

export interface DemoTrace {
  steps: DemoTraceStep[];
}

export interface GraphNode {
  id: string;
  labelKey: I18nKey;
  group?: "doc" | "entity" | "meeting" | "metric";
  /** 0~100 정규화 좌표 (사전 레이아웃 — 물리 시뮬레이션 아님) */
  x: number;
  y: number;
}

export interface GraphEdge {
  from: string;
  to: string;
}

export interface Integration {
  id: string;
  labelKey: I18nKey;
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
  integrations: Integration[];
}

export interface AxQuestion {
  id: string;
  promptKey: I18nKey;
}

export interface AxData {
  questions: AxQuestion[];
  /** 유튜브 video id (없으면 임베드 생략) */
  videoId?: string;
}

export interface NavItem {
  labelKey: I18nKey;
  href: string;
}

export interface SiteConfig {
  nav: NavItem[];
  primaryCta: CtaRef;
  secondaryCta: CtaRef;
  footerLinks: NavItem[];
}

// ---------------------------------------------------------------------------
// 섹션 레지스트리 — 페이지 = Section[] (판별 유니온 on `type`)
// ---------------------------------------------------------------------------

interface SectionBase {
  /** 안정 앵커 / React key */
  id: string;
  /** 데이터 기반 노출 제어 (기본 true). 순서는 배열 순서. */
  enabled?: boolean;
}

export interface HeroProps {
  eyebrowKey?: I18nKey;
  headKey: I18nKey; // 결과 헤드 (슬로건)
  subKey: I18nKey; // 통제 한 스푼
  primaryCta: CtaRef;
  secondaryCta?: CtaRef;
  mockCaptionKey?: I18nKey;
}

export interface TrustProps {
  eyebrowKey?: I18nKey;
  titleKey?: I18nKey;
}

export interface EngineProps {
  eyebrowKey?: I18nKey;
  titleKey: I18nKey;
  introKey?: I18nKey;
  moduleIds: EngineModuleId[];
}

export interface HowItWorksProps {
  eyebrowKey?: I18nKey;
  titleKey: I18nKey;
  introKey?: I18nKey;
}

export interface LineupProps {
  eyebrowKey?: I18nKey;
  titleKey: I18nKey;
  introKey?: I18nKey;
  /** 특정 제품만 노출(미지정 시 전체). */
  productSlugs?: string[];
  /** "+ 확장 예정" 슬롯 표시 */
  showComingSoon?: boolean;
  /** 결과/통제 트랙 분기 UI 표시 */
  showTrackSplit?: boolean;
}

export interface KnowledgeGraphProps {
  eyebrowKey?: I18nKey;
  titleKey: I18nKey;
  introKey?: I18nKey;
}

export interface AxSelfCheckProps {
  eyebrowKey?: I18nKey;
  titleKey: I18nKey;
  introKey?: I18nKey;
  /** 2차 코너임을 표기 */
  secondary?: boolean;
}

export interface FinalCtaProps {
  headKey: I18nKey; // 슬로건 수미상관
  subKey?: I18nKey;
  primaryCta: CtaRef;
  secondaryCta?: CtaRef;
}

// 제품 상세 페이지용 섹션 — productSlug 로 제품 데이터 해석
export interface ProductHeroProps {
  productSlug: string;
}
export interface AgentTeamProps {
  productSlug: string;
  titleKey?: I18nKey;
}
export interface CapabilityListProps {
  productSlug: string;
  titleKey?: I18nKey;
}
export interface ProductCtaProps {
  productSlug: string;
}

/** 모든 섹션 — `type` 으로 판별. 컴포넌트 props = 해당 유니온 멤버. */
export type Section =
  | ({ type: "hero" } & SectionBase & HeroProps)
  | ({ type: "trust" } & SectionBase & TrustProps)
  | ({ type: "engine" } & SectionBase & EngineProps)
  | ({ type: "howItWorks" } & SectionBase & HowItWorksProps)
  | ({ type: "lineup" } & SectionBase & LineupProps)
  | ({ type: "knowledgeGraph" } & SectionBase & KnowledgeGraphProps)
  | ({ type: "axSelfCheck" } & SectionBase & AxSelfCheckProps)
  | ({ type: "finalCta" } & SectionBase & FinalCtaProps)
  | ({ type: "productHero" } & SectionBase & ProductHeroProps)
  | ({ type: "agentTeam" } & SectionBase & AgentTeamProps)
  | ({ type: "capabilityList" } & SectionBase & CapabilityListProps)
  | ({ type: "productCta" } & SectionBase & ProductCtaProps);

export type SectionType = Section["type"];

/** 특정 섹션 타입의 전체 props(= 유니온 멤버) */
export type PropsFor<T extends SectionType> = Extract<Section, { type: T }>;
