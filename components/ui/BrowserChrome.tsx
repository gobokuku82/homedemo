import { cn } from "@/lib/cn";

/**
 * 스크린샷 프레임 상단의 가짜 크롬(브라우저/앱 바).
 * placeholder 가 "추상 blob"이 아니라 "실제 제품 화면"처럼 읽히게 하는 장치.
 */
export function BrowserChrome({
  variant = "browser",
}: {
  variant?: "browser" | "app";
}) {
  return (
    <div className="flex items-center gap-2 border-b border-frame-border bg-background-subtle px-4 py-2.5">
      <span className="flex gap-1.5" aria-hidden>
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
      </span>
      {variant === "browser" ? (
        <span className="ml-3 h-5 w-full max-w-xs rounded-full border border-border bg-surface" aria-hidden />
      ) : (
        <span className={cn("ml-3 flex gap-2")} aria-hidden>
          <span className="h-5 w-16 rounded-sm bg-surface" />
          <span className="h-5 w-12 rounded-sm bg-background" />
        </span>
      )}
    </div>
  );
}
