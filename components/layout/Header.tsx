import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { SITE } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Nav } from "./Nav";
import { LangToggle } from "./LangToggle";

/** 슬림 sticky 헤더 — 로고 + 내비 + 언어 + 주 CTA. */
export function Header() {
  const { t } = getDictionary();
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="text-lead font-semibold text-ink">
          {t("common.brand.name")}
        </Link>
        <div className="flex items-center gap-6">
          <Nav />
          <div className="flex items-center gap-3">
            <LangToggle />
            <Button href={SITE.primaryCta.href} variant="primary" size="sm">
              {t(SITE.primaryCta.labelKey)}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
