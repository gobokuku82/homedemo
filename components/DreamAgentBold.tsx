"use client";

import { useState } from "react";
import { agentData, cssVars } from "@/lib/theme";
import { BoldNav } from "@/components/sections/BoldNav";
import { BoldHero } from "@/components/sections/BoldHero";
import { BoldProducts } from "@/components/sections/BoldProducts";
import { BoldTech } from "@/components/sections/BoldTech";
import { BoldPeople } from "@/components/sections/BoldPeople";
import { BoldCta } from "@/components/sections/BoldCta";
import { BoldFooter } from "@/components/sections/BoldFooter";

const FONT_STACK =
  "'Pretendard Variable','Pretendard',-apple-system,BlinkMacSystemFont,sans-serif";

export function DreamAgentBold() {
  // defaultTab → "Mirror Dream cso" = 0; firstFeatureOpen → 0
  const [activeTab, setActiveTab] = useState(0);
  const [openIdx, setOpenIdx] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);

  const heroAgent = agentData[heroSlide];
  const heroSlideLabel = `${heroSlide + 1} / ${agentData.length}`;
  const heroPrev = () => setHeroSlide((s) => (s + agentData.length - 1) % agentData.length);
  const heroNext = () => setHeroSlide((s) => (s + 1) % agentData.length);

  return (
    <div
      id="top"
      className="da-root"
      style={{
        ...cssVars,
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
