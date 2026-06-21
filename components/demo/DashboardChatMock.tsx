import { getDictionary } from "@/lib/i18n";
import { BrowserChrome } from "@/components/ui/BrowserChrome";
import { DashboardSkeleton, ChatSkeleton } from "@/components/ui/SkeletonContent";

/**
 * 히어로 목업 — 대시보드 + 대화형 어시스턴트 2-패널.
 * 실제 제품 화면이 들어올 자리. 지금은 구조화 스켈레톤(제품처럼 읽힘).
 */
export function DashboardChatMock({ captionKey }: { captionKey?: string }) {
  const { t } = getDictionary();
  return (
    <figure className="overflow-hidden rounded-xl border border-frame-border bg-frame shadow-screenshot">
      <BrowserChrome variant="app" />
      <div className="grid grid-cols-1 sm:grid-cols-[1.6fr_1fr]">
        <div className="h-64 overflow-hidden border-b border-frame-border sm:h-[26rem] sm:border-b-0 sm:border-r">
          <DashboardSkeleton />
        </div>
        <div className="h-56 overflow-hidden sm:h-[26rem]">
          <ChatSkeleton />
        </div>
      </div>
      {captionKey && <figcaption className="sr-only">{t(captionKey)}</figcaption>}
    </figure>
  );
}
