import type { ComponentType } from "react";
import type { Section, SectionType, PropsFor } from "@/lib/types";

// 홈 8단 흐름
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { EngineSection } from "@/components/sections/EngineSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { LineupSection } from "@/components/sections/LineupSection";
import { KnowledgeGraphSection } from "@/components/sections/KnowledgeGraphSection";
import { AxSelfCheckSection } from "@/components/sections/AxSelfCheckSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
// 제품 상세
import { ProductHeroSection } from "@/components/sections/ProductHeroSection";
import { AgentTeamSection } from "@/components/sections/AgentTeamSection";
import { CapabilityListSection } from "@/components/sections/CapabilityListSection";
import { ProductCtaSection } from "@/components/sections/ProductCtaSection";

/**
 * type → 컴포넌트 매핑.
 * 매핑 타입이라 (1) SectionType 키 누락 시, (2) 컴포넌트 props 불일치 시 컴파일 에러.
 * 이 한 곳에서 타입 안전성을 강제하므로 renderSection 의 캐스트가 안전해진다.
 */
type SectionComponentMap = {
  [T in SectionType]: ComponentType<PropsFor<T>>;
};

export const SECTION_REGISTRY: SectionComponentMap = {
  hero: HeroSection,
  trust: TrustSection,
  engine: EngineSection,
  howItWorks: HowItWorksSection,
  lineup: LineupSection,
  knowledgeGraph: KnowledgeGraphSection,
  axSelfCheck: AxSelfCheckSection,
  finalCta: FinalCtaSection,
  productHero: ProductHeroSection,
  agentTeam: AgentTeamSection,
  capabilityList: CapabilityListSection,
  productCta: ProductCtaSection,
};

/**
 * 페이지가 Section[] 을 순회 렌더할 때 사용.
 * enabled === false 면 렌더 생략. 캐스트는 한 군데로 격리(맵이 이미 타입을 보장).
 */
export function renderSection(section: Section) {
  if (section.enabled === false) return null;
  const Component = SECTION_REGISTRY[section.type] as ComponentType<Section>;
  return <Component key={section.id} {...section} />;
}
