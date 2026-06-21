import { getDictionary } from "@/lib/i18n";
import { cn } from "@/lib/cn";

/** 두 고객 분기 — 슬로건은 하나, 고객은 구조로 나눈다(결과 트랙 / 통제 트랙). */
export function CustomerTrackSplit() {
  const { t } = getDictionary();
  const tracks = [
    {
      key: "result",
      accent: "border-l-accent-result",
      title: "home.lineup.track.result.title",
      desc: "home.lineup.track.result.desc",
    },
    {
      key: "control",
      accent: "border-l-accent-control",
      title: "home.lineup.track.control.title",
      desc: "home.lineup.track.control.desc",
    },
  ] as const;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {tracks.map((tr) => (
        <div
          key={tr.key}
          className={cn(
            "rounded-lg border border-l-4 border-border bg-surface p-6",
            tr.accent,
          )}
        >
          <h3 className="text-h3 font-semibold text-ink">{t(tr.title)}</h3>
          <p className="mt-2 text-body text-ink-muted">{t(tr.desc)}</p>
        </div>
      ))}
    </div>
  );
}
