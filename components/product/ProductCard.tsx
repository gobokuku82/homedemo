import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import type { Product } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { ScreenshotFrame } from "@/components/ui/ScreenshotFrame";
import { TrackBadge } from "./TrackBadge";

/** 라인업 카드 — 제품 데이터로 자동 구성. offering.kind 에 따라 미리보기 분기. */
export function ProductCard({ product }: { product: Product }) {
  const { t } = getDictionary();
  const sensitive = product.sensitivity.level === "sensitive";
  const href = `/products/${product.slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-card transition-shadow hover:shadow-raised">
      <ScreenshotFrame
        shot={product.cardScreenshot}
        chrome="browser"
        bare
        className="border-b border-frame-border"
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="neutral">{t(product.domainKey)}</Badge>
          <TrackBadge track={product.track} />
          {sensitive && <Badge tone="sensitive">민감 영역</Badge>}
        </div>

        <h3 className="text-h3 font-semibold text-ink">{t(product.nameKey)}</h3>
        <p className="text-caption font-medium text-brand">{t(product.taglineKey)}</p>
        <p className="line-clamp-3 text-body text-ink-muted">{t(product.summaryKey)}</p>

        {product.offering.kind === "agents" ? (
          <ul className="flex flex-wrap gap-1.5">
            {product.offering.agents.map((a) => (
              <li key={a.id}>
                <span className="rounded-sm bg-background-subtle px-2 py-0.5 text-label text-ink-muted">
                  {t(a.nameKey)}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="flex flex-wrap gap-1.5">
            {product.offering.capabilities.map((c) => (
              <li key={c.id}>
                <span
                  className={cn(
                    "rounded-sm px-2 py-0.5 text-label",
                    c.id === "stockRisk"
                      ? "bg-warning-subtle text-warning"
                      : "bg-background-subtle text-ink-muted",
                  )}
                >
                  {t(c.labelKey)}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-2">
          <Link
            href={href}
            className="text-caption font-semibold text-brand transition-colors group-hover:text-brand-hover"
          >
            {t("common.cta.viewProduct")} →
          </Link>
        </div>
      </div>
    </article>
  );
}
