import type { CSSProperties } from "react";

interface BoldPeopleProps {
  showFounder?: boolean;
}

const featuredCard: CSSProperties = {
  padding: "24px 22px",
  borderRadius: 14,
  background: "var(--accent)",
  color: "var(--onaccent)",
};

const plainCard: CSSProperties = {
  padding: "24px 22px",
  borderRadius: 14,
  background: "var(--cardbg)",
  border: "1px solid var(--line)",
};

interface Role {
  featured: boolean;
  kicker: string;
  title: string;
  desc: string;
  cardStyle: CSSProperties;
  kickerColor: string;
  titleColor: string;
  descColor: string;
}

const roles: Role[] = [
  {
    featured: false,
    kicker: "제작 의뢰",
    title: "제작 의뢰",
    desc: "AI 에이전트 공동 설계 및 제작. 당신의 전문성이 곧 제품이 됩니다.",
    cardStyle: featuredCard,
    kickerColor: "rgba(6,18,31,.7)",
    titleColor: "var(--onaccent)",
    descColor: "rgba(6,18,31,.82)",
  },
  {
    featured: false,
    kicker: "투자",
    title: "투자",
    desc: "도메인 AI 시장과 함께 성장할 초기 파트너를 찾습니다.",
    cardStyle: plainCard,
    kickerColor: "var(--accent)",
    titleColor: "var(--ink)",
    descColor: "var(--subtle)",
  },
  {
    featured: false,
    kicker: "파일럿 지원",
    title: "파일럿 지원",
    desc: "실제 업무 적용을 위한 파일럿 기관과 지원 프로그램을 환영합니다.",
    cardStyle: plainCard,
    kickerColor: "var(--accent)",
    titleColor: "var(--ink)",
    descColor: "var(--subtle)",
  },
];

export function BoldPeople({ showFounder = true }: BoldPeopleProps) {
  return (
    <section
      id="people"
      style={{ padding: "clamp(48px,7vw,88px) clamp(20px,5vw,56px)", background: "var(--sectionbg)" }}
    >
      <div style={{ maxWidth: "min(94vw, 2600px)", margin: "0 auto" }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: ".1em",
            color: "var(--subtle)",
            marginBottom: 14,
          }}
        >
          JOIN US
        </div>
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(28px,4vw,48px)",
            letterSpacing: "-.035em",
            margin: "0 0 8px",
            lineHeight: 1.02,
          }}
        >
          함께 만들 사람을 찾습니다
        </h2>
        <p
          style={{
            fontSize: 17,
            color: "var(--subtle)",
            margin: "0 0 30px",
            maxWidth: 540,
            fontWeight: 500,
          }}
        >
          Dream Agent는 파는 회사가 아니라, 도메인 전문가와 함께 만드는 팀입니다.
        </p>

        <div data-broles="" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
          {roles.map((r) => (
            <div key={r.title} style={r.cardStyle}>
              {r.featured && (
                <div style={{ fontSize: 11, fontWeight: 800, opacity: 0.8, marginBottom: 10 }}>
                  공동제작 파트너 · 1순위
                </div>
              )}
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: ".04em",
                  color: r.kickerColor,
                  marginBottom: 8,
                }}
              >
                {r.kicker}
              </div>
              <h3
                style={{
                  fontWeight: 900,
                  fontSize: 25,
                  letterSpacing: "-.025em",
                  margin: "0 0 12px",
                  color: r.titleColor,
                }}
              >
                {r.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.55,
                  margin: 0,
                  color: r.descColor,
                  textWrap: "pretty",
                }}
              >
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        {showFounder && (
          <div style={{ marginTop: 30, display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: "50%",
                background: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                color: "var(--onaccent)",
              }}
            >
              D
            </div>
            <div>
              <div style={{ fontSize: 12, color: "var(--subtle)", fontWeight: 700 }}>창업자 한 줄</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "var(--ink)" }}>
                창업자 메시지 준비 중
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
