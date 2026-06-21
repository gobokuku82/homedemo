import type { SiteConfig } from "@/lib/types";

/** 전역 사이트 설정 — 내비, 주/보조 CTA, 푸터 링크. 모두 i18n 키. */
export const SITE: SiteConfig = {
  nav: [
    { labelKey: "nav.engine", href: "/#engine" },
    { labelKey: "nav.howItWorks", href: "/#how-it-works" },
    { labelKey: "nav.lineup", href: "/#lineup" },
    { labelKey: "nav.knowledgeGraph", href: "/#knowledge-graph" },
  ],
  primaryCta: { labelKey: "common.cta.demo", href: "/demo", variant: "primary" },
  secondaryCta: { labelKey: "common.cta.explore", href: "/#lineup", variant: "secondary" },
  footerLinks: [
    { labelKey: "footer.links.demo", href: "/demo" },
    { labelKey: "footer.links.contact", href: "/demo" },
    { labelKey: "footer.links.privacy", href: "#" },
  ],
};
