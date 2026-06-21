import { getDictionary } from "@/lib/i18n";
import { Badge } from "@/components/ui/Badge";
import type { Track } from "@/lib/types";

/** 결과 트랙 / 통제 트랙 배지. */
export function TrackBadge({ track }: { track: Track }) {
  const { t } = getDictionary();
  return (
    <Badge tone={track === "result" ? "result" : "control"}>
      {t(`home.lineup.track.${track}.title`)}
    </Badge>
  );
}
