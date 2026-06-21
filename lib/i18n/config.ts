import type { Locale } from "@/lib/types";

/** 현재 활성 로케일. 한국어 우선. en 은 "토글 여지"(2차) — 콘텐츠 채워지면 추가. */
export const LOCALES: Locale[] = ["ko"];

export const DEFAULT_LOCALE: Locale = "ko";

export function isLocale(value: string): value is Locale {
  return (LOCALES as string[]).includes(value);
}
