/**
 * 언어 토글 — MVP는 한국어 단일. EN 은 "토글 여지"로 자리만(비활성).
 * en.json 콘텐츠와 로케일 전환이 들어오면 인터랙티브 토글로 교체.
 */
export function LangToggle() {
  return (
    <div className="flex items-center gap-1 text-label font-medium" aria-label="언어">
      <span className="rounded-sm bg-background-subtle px-2 py-1 text-ink">KO</span>
      <span
        className="px-2 py-1 text-ink-subtle"
        aria-disabled="true"
        title="영어는 준비 중입니다"
      >
        EN
      </span>
    </div>
  );
}
