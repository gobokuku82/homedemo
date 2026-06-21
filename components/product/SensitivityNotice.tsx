import { getDictionary } from "@/lib/i18n";
import type { Product } from "@/lib/types";

/**
 * 민감 영역(마음드림) 고지. sensitivity 정책의 단일 노출 지점 —
 * 컴포넌트마다 "if maeumdream" 분기하지 않도록 여기서만 처리.
 */
export function SensitivityNotice({ product }: { product: Product }) {
  const { t } = getDictionary();
  const { sensitivity } = product;
  if (sensitivity.level !== "sensitive" || !sensitivity.disclaimerKey) return null;

  return (
    <div className="flex items-start gap-3 rounded-md border border-info-subtle bg-info-subtle/40 p-4">
      <svg
        viewBox="0 0 20 20"
        className="mt-0.5 size-5 shrink-0 fill-info"
        aria-hidden
      >
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 4a1 1 0 110 2 1 1 0 010-2zm1.25 9h-2.5v-1.5h.75V11h-.75V9.5h1.75V13.5h.75V15z" />
      </svg>
      <p className="text-caption text-ink-muted">{t(sensitivity.disclaimerKey)}</p>
    </div>
  );
}
