"use client";

import { useEffect, useState } from "react";
import { agentData } from "@/lib/theme";

interface BoldProductsProps {
  active: number;
  onSelect: (i: number) => void;
}

// 에이전트별 제품 화면 슬라이드 (실제 이미지 경로를 채우면 자동으로 표시).
// 비어 있으면 placeholder 슬라이드를 PLACEHOLDER_SHOTS 개수만큼 보여줌.
const productShots: string[][] = [
  [], // MoA Dream
  [], // MAUM Dream
  [], // Mirror Dream cso
];
const PLACEHOLDER_SHOTS = 3;

// 단일 캔버스 — 채움은 배경과 거의 같게(살짝 더 어둡게), 구분은 외곽선/글로우가 담당
const CANVAS_BG = "color-mix(in srgb,#000 12%,var(--prodBg))";
const CANVAS_BORDER = "color-mix(in srgb,var(--ink) 16%,transparent)";
// 외곽 강조: 얇은 accent 링 + accent 글로우 + 깊이감 그림자
const CANVAS_SHADOW =
  "0 0 0 1px color-mix(in srgb,var(--accent) 14%,transparent), 0 0 40px -10px color-mix(in srgb,var(--accent) 16%,transparent), 0 24px 56px -30px rgba(0,0,0,.55)";

export function BoldProducts({ active, onSelect }: BoldProductsProps) {
  const current = agentData[active];
  const shots = productShots[active] ?? [];
  const shotCount = shots.length || PLACEHOLDER_SHOTS;

  const [shot, setShot] = useState(0);
  // 탭(에이전트) 전환 시 슬라이드를 처음으로 되돌림
  useEffect(() => {
    setShot(0);
  }, [active]);

  const shotPrev = () => setShot((s) => (s + shotCount - 1) % shotCount);
  const shotNext = () => setShot((s) => (s + 1) % shotCount);
  const shotSrc = shots[shot];

  return (
    <section
      id="products"
      style={{
        background: "var(--prodBg)",
        color: "var(--prodText)",
        padding: "clamp(48px,7vw,88px) clamp(20px,5vw,56px)",
      }}
    >
      <div style={{ maxWidth: "min(94vw, 2600px)", margin: "0 auto" }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: ".1em",
            color: "color-mix(in srgb,var(--prodText) 55%,transparent)",
            marginBottom: 24,
          }}
        >
          PRODUCTS
        </div>

        {/* folder tabs — active tab fuses into the canvas top edge (pure CSS) */}
        <div
          role="tablist"
          style={{
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "flex-end",
            position: "relative",
            zIndex: 2,
            marginBottom: -1,
          }}
        >
          {agentData.map((a, i) => {
            const isActive = i === active;
            return (
              <button
                key={a.name}
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelect(i)}
                style={{
                  cursor: "pointer",
                  transition: "all .16s",
                  padding: "11px 22px 13px",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  borderLeft: `1px solid ${isActive ? CANVAS_BORDER : "var(--line)"}`,
                  borderRight: `1px solid ${isActive ? CANVAS_BORDER : "var(--line)"}`,
                  borderTop: isActive ? "2px solid var(--accent)" : "1px solid var(--line)",
                  borderBottom: isActive ? "none" : "1px solid var(--line)",
                  background: isActive ? CANVAS_BG : "var(--surface)",
                  color: isActive ? "var(--ink)" : "var(--subtle)",
                }}
              >
                <span style={{ fontWeight: 900, fontSize: 16, letterSpacing: "-.02em" }}>
                  {a.name}
                </span>{" "}
                <span style={{ fontWeight: 700, fontSize: 12, opacity: 0.6, marginLeft: 6 }}>
                  {a.domain}
                </span>
              </button>
            );
          })}
        </div>

        {/* unified canvas — content sits directly on it; only the image is framed */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            background: CANVAS_BG,
            border: `1px solid ${CANVAS_BORDER}`,
            borderRadius: 20,
            boxShadow: CANVAS_SHADOW,
            padding: "clamp(28px,3.2vw,56px)",
          }}
        >
          <div
            data-bprod=""
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.1fr",
              gap: "clamp(24px,3vw,56px)",
              alignItems: "center",
            }}
          >
            {/* LEFT: text directly on the canvas (name / divider / description) */}
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: ".08em",
                  color: "var(--accent)",
                  marginBottom: 10,
                }}
              >
                {current.tag}
              </div>
              <h3
                style={{
                  fontWeight: 900,
                  fontSize: "clamp(34px,4.5vw,56px)",
                  letterSpacing: "-.04em",
                  lineHeight: 1,
                  margin: "0 0 22px",
                  color: "var(--ink)",
                }}
              >
                {current.name}
              </h3>

              <div style={{ borderTop: `1px solid ${CANVAS_BORDER}`, paddingTop: 22 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ink)", marginBottom: 16 }}>
                  {current.domain} 도메인 특화
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 9, maxWidth: 340 }}>
                  <div
                    style={{
                      height: 11,
                      borderRadius: 6,
                      background: "color-mix(in srgb,var(--ink) 10%,transparent)",
                      width: "90%",
                    }}
                  />
                  <div
                    style={{
                      height: 11,
                      borderRadius: 6,
                      background: "color-mix(in srgb,var(--ink) 10%,transparent)",
                      width: "68%",
                    }}
                  />
                  <div
                    style={{
                      fontSize: 12,
                      color: "color-mix(in srgb,var(--prodText) 50%,transparent)",
                      marginTop: 4,
                    }}
                  >
                    한 줄 설명 준비 중
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: nav arrows + framed 16:9 image */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8 }}>
                <button className="hero-navbtn" onClick={shotPrev} aria-label="이전 화면">
                  ‹
                </button>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "color-mix(in srgb,var(--prodText) 45%,transparent)",
                    minWidth: 38,
                    textAlign: "center",
                  }}
                >
                  {shot + 1} / {shotCount}
                </span>
                <button className="hero-navbtn" onClick={shotNext} aria-label="다음 화면">
                  ›
                </button>
              </div>

              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  aspectRatio: "16 / 9",
                  background: "var(--darkbg)",
                  border: `1px solid ${CANVAS_BORDER}`,
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {shotSrc ? (
                  <img
                    src={shotSrc}
                    alt={`${current.name} 제품 화면 ${shot + 1}`}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                ) : (
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: ".08em",
                      color: "color-mix(in srgb,var(--prodText) 45%,transparent)",
                    }}
                  >
                    제품 화면 {shot + 1} · 준비 중
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
