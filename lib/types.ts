import type { Copy, Lang } from "@/content/copy";

/** Props shared by every language-aware section. */
export interface SectionProps {
  lang: Lang;
  /** Resolved copy for the active language. */
  t: Copy;
  /** Headline letter-spacing for the active language. */
  tracking: { h1: string; h2: string };
}
