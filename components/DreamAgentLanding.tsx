"use client";

import { useEffect, useState } from "react";
import { copy, fontMap, trackingMap, type Lang } from "@/content/copy";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { Agents } from "@/components/sections/Agents";
import { Hitl } from "@/components/sections/Hitl";
import { Capabilities } from "@/components/sections/Capabilities";
import { ProductMockup } from "@/components/sections/ProductMockup";
import { Cta } from "@/components/sections/Cta";
import { SiteFooter } from "@/components/sections/SiteFooter";

export function DreamAgentLanding() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];
  const tracking = trackingMap[lang];

  // Keep the document language in sync for a11y + correct CJK line-breaking.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div style={{ fontFamily: fontMap[lang] }}>
      <Nav lang={lang} setLang={setLang} t={t} tracking={tracking} />
      <Hero lang={lang} t={t} tracking={tracking} />
      <Ticker />
      <Agents lang={lang} t={t} tracking={tracking} />
      <Hitl lang={lang} t={t} tracking={tracking} />
      <Capabilities />
      <ProductMockup />
      <Cta lang={lang} t={t} tracking={tracking} />
      <SiteFooter />
    </div>
  );
}
