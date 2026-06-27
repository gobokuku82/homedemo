"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { heroSlides, cssVars, type HeroSlide } from "@/lib/theme";
import { BoldNav } from "@/components/sections/BoldNav";
import { BoldHero } from "@/components/sections/BoldHero";
import { BoldProducts } from "@/components/sections/BoldProducts";
import { BoldTech } from "@/components/sections/BoldTech";
import { BoldPeople } from "@/components/sections/BoldPeople";
import { BoldCta } from "@/components/sections/BoldCta";
import { BoldFooter } from "@/components/sections/BoldFooter";

const FONT_STACK =
  "'Pretendard Variable','Pretendard',-apple-system,BlinkMacSystemFont,sans-serif";

interface DreamAgentBoldProps {
  /** 루트에 적용할 색상 변수 세트 (미지정 시 현재 사이트 색) */
  themeVars?: CSSProperties;
  /** 효과·애니메이션 끄기 + 히어로 영상은 정지 이미지로 표시 */
  staticMode?: boolean;
}

export function DreamAgentBold({ themeVars = cssVars, staticMode = false }: DreamAgentBoldProps = {}) {
  // defaultTab → "Mirror Dream cso" = 0; firstFeatureOpen → 0
  const [activeTab, setActiveTab] = useState(0);
  const [openIdx, setOpenIdx] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);

  // 효과 끄기 모드: 자동재생 유튜브 영상을 정지 썸네일 이미지로 대체
  const slides: HeroSlide[] = staticMode
    ? heroSlides.map((s) =>
        s.youtubeId
          ? { ...s, youtubeId: undefined, image: `https://img.youtube.com/vi/${s.youtubeId}/hqdefault.jpg` }
          : s,
      )
    : heroSlides;

  const heroAgent = slides[heroSlide];
  const heroSlideLabel = `${heroSlide + 1} / ${slides.length}`;
  const heroPrev = () => setHeroSlide((s) => (s + slides.length - 1) % slides.length);
  const heroNext = () => setHeroSlide((s) => (s + 1) % slides.length);

  return (
    <div
      id="top"
      style={{
        ...themeVars,
        fontFamily: FONT_STACK,
        background: "var(--surface)",
        color: "var(--ink)",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <BoldNav />
      <BoldHero
        heroAgent={heroAgent}
        heroSlideLabel={heroSlideLabel}
        onPrev={heroPrev}
        onNext={heroNext}
        showSecondaryCta
      />
      <BoldProducts active={activeTab} onSelect={setActiveTab} />
      <BoldTech open={openIdx} onToggle={(i) => setOpenIdx((cur) => (cur === i ? -1 : i))} />
      <BoldPeople showFounder />
      <BoldCta />
      <BoldFooter />
    </div>
  );
}
