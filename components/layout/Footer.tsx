import { getDictionary } from "@/lib/i18n";
import { SITE } from "@/content/site";
import { Container } from "@/components/ui/Container";

/** 슬림 푸터 — 홈 8단계 마무리. 메가풋터 아님. */
export function Footer() {
  const { t } = getDictionary();
  return (
    <footer className="border-t border-border bg-background-subtle py-12">
      <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-lead font-semibold text-ink">
            {t("common.brand.name")}
          </span>
          <p className="max-w-xs text-caption text-ink-muted">
            {t("footer.tagline")}
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-2" aria-label="푸터">
          {SITE.footerLinks.map((link) => (
            <a
              key={link.labelKey}
              href={link.href}
              className="text-caption text-ink-muted transition-colors hover:text-ink"
            >
              {t(link.labelKey)}
            </a>
          ))}
        </nav>
      </Container>
      <Container className="mt-8">
        <p className="text-label text-ink-subtle">{t("footer.rights")}</p>
      </Container>
    </footer>
  );
}
