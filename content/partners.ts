import type { PartnersData } from "@/lib/types";

/**
 * 신뢰 섹션 데이터. 초기엔 로고가 약하므로 hasStrongLogos=false →
 * LogoWall 이 로고 나열 대신 "정직한 안내 문구"로 전환(과장 금지).
 * 실제 파트너/MOU/파일럿이 확보되면 items 에 추가하고 hasStrongLogos=true.
 */
export const PARTNERS: PartnersData = {
  hasStrongLogos: false,
  items: [
    // 예시(로고 확보 시):
    // { id: "p1", name: "파트너 A", kind: "mou", logoSrc: "/logos/partner-a.svg" },
  ],
  honestNoteKey: "home.trust.honestNote",
};
