import { getDictionary } from "@/lib/i18n";

/** 접근성: 키보드 사용자가 본문으로 바로 건너뛰기. */
export function SkipLink() {
  const { t } = getDictionary();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-ink focus:shadow-raised"
    >
      {t("a11y.skipToContent")}
    </a>
  );
}
