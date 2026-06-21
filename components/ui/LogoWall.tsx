import { getDictionary } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import type { PartnersData } from "@/lib/types";

/**
 * 신뢰 로고월. 로고가 약하면(hasStrongLogos=false 또는 비어있음)
 * 과장된 로고 나열 대신 "정직한 안내 문구"로 전환 — 컨셉 정의서 "로고 약하면 정직하게".
 */
export function LogoWall({
  data,
  className,
}: {
  data: PartnersData;
  className?: string;
}) {
  const { t } = getDictionary();
  const showLogos = data.hasStrongLogos && data.items.length > 0;

  if (!showLogos) {
    return (
      <p className={cn("max-w-narrow text-lead text-ink-muted", className)}>
        {data.honestNoteKey ? t(data.honestNoteKey) : ""}
      </p>
    );
  }

  return (
    <ul className={cn("flex flex-wrap items-center gap-x-10 gap-y-6", className)}>
      {data.items.map((p) => (
        <li key={p.id} className="grayscale opacity-70">
          {p.logoSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.logoSrc} alt={p.name} className="h-8 w-auto" />
          ) : (
            <span className="text-lead font-medium text-ink-muted">{p.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
