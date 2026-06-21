import Image from "next/image";
import { getDictionary } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import type { ScreenshotRef } from "@/lib/types";
import { BrowserChrome } from "./BrowserChrome";
import { SkeletonContent } from "./SkeletonContent";

const ratioClass: Record<NonNullable<ScreenshotRef["ratio"]>, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/2": "aspect-[3/2]",
};

/**
 * "실제 제품 화면이 주인공" — 스크린샷 래퍼.
 * shot.src 가 있으면 실제 이미지, 없으면 구조화된 스켈레톤(SkeletonContent).
 * 프레임 토큰은 중립색 — 안의 화면과 색 경쟁하지 않음.
 */
export function ScreenshotFrame({
  shot,
  chrome = "browser",
  bare = false,
  className,
}: {
  shot: ScreenshotRef;
  chrome?: "browser" | "app" | "none";
  /** 카드 내부 등에 flush 로 박을 때: 바깥 모서리/테두리/그림자 제거. */
  bare?: boolean;
  className?: string;
}) {
  const { t } = getDictionary();
  const alt = t(shot.altKey);

  return (
    <figure
      className={cn(
        "overflow-hidden bg-frame",
        !bare && "rounded-lg border border-frame-border shadow-screenshot",
        className,
      )}
    >
      {chrome !== "none" && <BrowserChrome variant={chrome} />}
      <div className={cn("relative w-full bg-surface", ratioClass[shot.ratio ?? "16/9"])}>
        {shot.src ? (
          <Image
            src={shot.src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
        ) : (
          // 스켈레톤은 장식 — 실제 alt 텍스트는 스크린리더용으로 따로 노출
          <>
            <SkeletonContent kind={shot.kind} />
            <span className="sr-only">{alt}</span>
          </>
        )}
      </div>
    </figure>
  );
}
