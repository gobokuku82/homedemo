import { getDictionary } from "@/lib/i18n";
import { SITE } from "@/content/site";

/** 주요 섹션 앵커 내비. 데스크톱에서만 노출(모바일 메뉴는 2차). */
export function Nav() {
  const { t } = getDictionary();
  return (
    <nav className="hidden items-center gap-6 md:flex" aria-label="주요 섹션">
      {SITE.nav.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-caption text-ink-muted transition-colors hover:text-ink"
        >
          {t(item.labelKey)}
        </a>
      ))}
    </nav>
  );
}
