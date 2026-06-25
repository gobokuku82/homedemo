import type { CSSProperties } from "react";

interface BoldTechProps {
  open: number;
  onToggle: (i: number) => void;
}

const featData = [
  { title: "사람이 검수합니다", sub: "HITL" },
  { title: "문서가 곧 지식", sub: "RAG" },
  { title: "워크플로우 시각화·수정", sub: "" },
  { title: "자체 개발 플랫폼", sub: "" },
];

export function BoldTech({ open, onToggle }: BoldTechProps) {
  return (
    <section id="tech" style={{ padding: "clamp(48px,7vw,88px) clamp(20px,5vw,56px)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: ".1em",
            color: "var(--subtle)",
            marginBottom: 14,
          }}
        >
          TECHNOLOGY
        </div>
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(28px,4vw,48px)",
            letterSpacing: "-.035em",
            margin: "0 0 30px",
            lineHeight: 1.02,
          }}
        >
          드림 에이전트의 특별함
        </h2>

        <div>
          {featData.map((f, i) => {
            const isOpen = i === open;
            const rowStyle: CSSProperties = {
              borderTop: `${i === 0 ? "2px" : "1px"} solid ${i === 0 ? "var(--accent)" : "var(--line)"}`,
              borderBottom: i === featData.length - 1 ? "1px solid var(--line)" : undefined,
            };
            return (
              <div key={f.title} style={rowStyle}>
                <button
                  onClick={() => onToggle(i)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 18,
                    padding: "20px 2px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "var(--ink)",
                  }}
                >
                  <span
                    style={{
                      flex: 1,
                      fontWeight: 900,
                      fontSize: "clamp(20px,2.6vw,30px)",
                      letterSpacing: "-.025em",
                    }}
                  >
                    {f.title}{" "}
                    {f.sub && (
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "var(--subtle)",
                          letterSpacing: 0,
                        }}
                      >
                        {f.sub}
                      </span>
                    )}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      color: "var(--subtle)",
                      transition: "transform .25s",
                      transform: `rotate(${isOpen ? 180 : 0}deg)`,
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 2px 22px 0",
                      display: "flex",
                      flexDirection: "column",
                      gap: 9,
                      maxWidth: 540,
                    }}
                  >
                    <div style={{ height: 11, borderRadius: 6, background: "var(--line)", width: "94%" }} />
                    <div style={{ height: 11, borderRadius: 6, background: "var(--line)", width: "80%" }} />
                    <div style={{ fontSize: 12, color: "var(--subtle)", marginTop: 4 }}>
                      상세 설명 준비 중
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
