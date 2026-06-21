import { HOME_SECTIONS } from "@/content/home";
import { renderSection } from "@/lib/section-registry";

/** 홈 = 섹션 레지스트리 배열을 순회 렌더. 페이지는 dumb iterator. */
export default function HomePage() {
  return <>{HOME_SECTIONS.map(renderSection)}</>;
}
