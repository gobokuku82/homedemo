import type { CSSProperties } from "react";
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

export function BoldProducts({ active, onSelect }: BoldProductsProps) {
  const current = agentData[active];

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

        {/* tabs */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 26,
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

        {/* current product detail */}
        <div
          data-bprod=""
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(20px,3vw,40px)",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: ".08em",
                color: "var(--accent)",
                marginBottom: 12,
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
                margin: "0 0 10px",
              }}
            >
              {current.name}
            </h3>
            <div
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: "color-mix(in srgb,var(--prodText) 55%,transparent)",
                marginBottom: 22,
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

          <div
            style={{
              background: "var(--prodLine)",
              borderRadius: 10,
              aspectRatio: "16/11",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: ".08em",
              color: "color-mix(in srgb,var(--prodText) 50%,transparent)",
            }}
          >
            제품 화면 · PLACEHOLDER
          </div>
        </div>
      </div>
    </section>
  );
}
