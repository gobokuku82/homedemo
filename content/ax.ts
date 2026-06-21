import type { AxData } from "@/lib/types";

/**
 * AX 자가진단(2차 코너) 티저 + 데모 영상.
 * MVP는 stub — 문항 몇 개만 노출하고 전체 진단은 "곧 공개".
 * videoId 가 채워지면 MediaEmbed 가 유튜브 facade 를 렌더(없으면 placeholder 자리).
 */
export const AX: AxData = {
  questions: [
    { id: "q1", promptKey: "ax.questions.q1" },
    { id: "q2", promptKey: "ax.questions.q2" },
    { id: "q3", promptKey: "ax.questions.q3" },
    { id: "q4", promptKey: "ax.questions.q4" },
  ],
  // videoId: "xxxxxxxxxxx", // 유튜브 영상 ID 확보 시 채움
};
