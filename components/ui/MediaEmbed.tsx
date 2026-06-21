"use client";

import { useState } from "react";

/**
 * 유튜브 lazy facade — 썸네일 + 재생 버튼만 먼저, 클릭 시에만 iframe 로드.
 * (자동 로드 금지 → 성능·프라이버시. videoId 없으면 placeholder 자리.)
 */
export function MediaEmbed({
  videoId,
  title,
}: {
  videoId?: string;
  title: string;
}) {
  const [active, setActive] = useState(false);

  if (!videoId) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-frame-border bg-frame text-ink-subtle">
        <span className="text-caption">{title}</span>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-frame-border bg-ink">
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 flex items-center justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <span className="relative flex size-16 items-center justify-center rounded-full bg-background/90 shadow-raised transition group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="ml-1 size-7 fill-brand" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="sr-only">{title}</span>
        </button>
      )}
    </div>
  );
}
