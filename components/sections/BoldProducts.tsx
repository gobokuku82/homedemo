"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { agentData } from "@/lib/theme";

interface BoldProductsProps {
  active: number;
  onSelect: (i: number) => void;
}

const tabBase: CSSProperties = {
  padding: "12px 20px",
  borderRadius: 12,
  cursor: "pointer",
  transition: "all .16s",
  borderWidth: 1.5,
  borderStyle: "solid",
};

// 에이전트별 제품 화면 슬라이드 (실제 이미지 경로를 채우면 자동으로 표시).
// 비어 있으면 placeholder 슬라이드를 PLACEHOLDER_SHOTS 개수만큼 보여줌.
const productShots: string[][] = [
  [], // MoA Dream
  [], // MAUM Dream
  [], // Mirror Dream cso
];
const PLACEHOLDER_SHOTS = 3;

// 캔버스 안 중첩 박스 (배경보다 한 톤 더 밝게)
const innerBox: CSSProperties = {
  background: "color-mix(in srgb,var(--ink) 5%,transparent)",
  border: "1px solid color-mix(in srgb,var(--ink) 9%,transparent)",
  borderRadius: 14,
};

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
            marginBottom: 28,
          }}
        >
          PRODUCTS
        </div>

        {/* tabs — clicking switches the agent shown in the canvas below */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 18,
            justifyContent: "center",
          }}
        >
          {agentData.map((a, i) => {
            const isActive = i === active;
            return (
              <button
                key={a.name}
                onClick={() => onSelect(i)}
                aria-pressed={isActive}
                style={{
                  ...tabBase,
                  background: isActive ? "var(--accent)" : "transparent",
                  color: isActive ? "var(--onaccent)" : "var(--subtle)",
                  borderColor: isActive ? "var(--accent)" : "var(--line)",
                  fontWeight: isActive ? 700 : 400,
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

        {/* connected canvas — one panel, slightly brighter than the page */}
        <div
          style={{
            background: "color-mix(in srgb,var(--ink) 7%,var(--prodBg))",
            border: "1px solid color-mix(in srgb,var(--ink) 10%,transparent)",
            borderRadius: 20,
            padding: "clamp(16px,2.2vw,32px)",
          }}
        >
          <div
            data-bprod=""
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.1fr",
              gap: "clamp(16px,2vw,32px)",
              alignItems: "stretch",
            }}
          >
            {/* LEFT: name box + description box */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(14px,1.5vw,20px)",
              }}
            >
              {/* agent name box */}
              <div style={{ ...innerBox, padding: "clamp(20px,2vw,32px)" }}>
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
                    margin: 0,
                  }}
                >
                  {current.name}
                </h3>
              </div>

              {/* agent description box */}
              <div
                style={{
                  ...innerBox,
                  flex: 1,
                  padding: "clamp(20px,2vw,32px)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--prodText)",
                    marginBottom: 18,
                  }}
                >
                  {current.domain} 도메인 특화
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 9, maxWidth: 340 }}>
                  <div style={{ height: 11, borderRadius: 6, background: "var(--prodLine)", width: "90%" }} />
                  <div style={{ height: 11, borderRadius: 6, background: "var(--prodLine)", width: "68%" }} />
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

            {/* RIGHT: nav arrows + 16:9 image */}
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
                  ...innerBox,
                  position: "relative",
                  overflow: "hidden",
                  aspectRatio: "16 / 9",
                  background: "color-mix(in srgb,var(--ink) 8%,transparent)",
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
