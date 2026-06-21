import type { Locale } from "@/lib/types";
import { DEFAULT_LOCALE } from "./config";
import ko from "./messages/ko.json";

// 한국어 우선. 영어는 messages/en.json 이 채워지면 여기에 등록.
// (전부 빌드타임/서버에서 정적 import — 런타임 fetch 없음, SSG 친화.)
const dictionaries: Record<string, unknown> = { ko };

function resolve(dict: unknown, key: string): unknown {
  return key.split(".").reduce<unknown>((node, part) => {
    if (node && typeof node === "object") {
      return (node as Record<string, unknown>)[part];
    }
    return undefined;
  }, dict);
}

export interface Dictionary {
  locale: Locale;
  /**
   * 점-경로 키로 카피 조회. {name} 형태 변수 치환 지원.
   * 키 미스 시 키 문자열을 그대로 반환 — 누락이 화면에서 눈에 띄도록(조용히 빈칸 X).
   */
  t: (key: string, vars?: Record<string, string | number>) => string;
}

export function getDictionary(locale: Locale = DEFAULT_LOCALE): Dictionary {
  const dict = dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
  return {
    locale,
    t(key, vars) {
      const raw = resolve(dict, key);
      if (typeof raw !== "string") return key;
      if (!vars) return raw;
      return raw.replace(/\{(\w+)\}/g, (_, name: string) =>
        name in vars ? String(vars[name]) : `{${name}}`,
      );
    },
  };
}
