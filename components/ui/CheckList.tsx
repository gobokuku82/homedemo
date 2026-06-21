import { cn } from "@/lib/cn";

export interface CheckItem {
  id: string;
  label: string;
  /** 강조 톤 — 예: 재고위험 경고 항목을 warning 으로 */
  tone?: "default" | "warning";
}

/** 기능/역량 불릿 목록(키워드림 등 capabilities 표현). */
export function CheckList({
  items,
  className,
}: {
  items: CheckItem[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-col gap-2.5", className)}>
      {items.map((item) => (
        <li key={item.id} className="flex items-start gap-3">
          <span
            aria-hidden
            className={cn(
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              item.tone === "warning"
                ? "bg-warning-subtle text-warning"
                : "bg-brand-subtle text-brand",
            )}
          >
            <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-body text-ink">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
