import type { CSSProperties } from "react";
import { DISPLAY, MONO } from "@/lib/tokens";
import type { SectionProps } from "@/lib/types";

const mono = (size: number, color: string, extra = 3): CSSProperties => ({
  fontFamily: MONO,
  fontSize: size,
  color,
  letterSpacing: `${extra}px`,
  textTransform: "uppercase",
});

function CheckBox() {
  return (
    <div
      style={{
        width: 18,
        height: 18,
        flexShrink: 0,
        border: "2px solid #22c55e",
        background: "#f0fdf4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
        <path
          d="M1.5 4.5L3.5 6.5L7.5 2.5"
          stroke="#16a34a"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

const stats = [
  { value: "03", label: "Domain Agents" },
  { value: "HITL", label: "Every Action" },
  { value: "100%", label: "Transparent" },
];

export function Hero({ t, tracking }: SectionProps) {
  return (
    <section
      className="r-grid-2"
      style={{
        minHeight: "100vh",
        borderBottom: "2px solid #0a0a0a",
        paddingTop: 56,
      }}
    >
      {/* ── Left ── */}
      <div
        className="hero-col-l r-split"
        style={{
          borderRight: "2px solid #0a0a0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ ...mono(9, "#bbb"), marginBottom: 60 }}>
            DreamAgent — 001 / Hero
          </div>
          <h1
            className="r-h1"
            style={{
              fontFamily: DISPLAY,
              fontWeight: 800,
              lineHeight: 0.88,
              letterSpacing: tracking.h1,
              color: "#0a0a0a",
              marginBottom: 28,
            }}
          >
            {t.h1[0]}
            <br />
            {t.h1[1]}
          </h1>
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              marginBottom: 36,
            }}
          >
            <div style={{ width: 40, height: 4, background: "#002FA7" }} />
            <div style={{ width: 8, height: 8, background: "#0a0a0a" }} />
            <div style={{ width: 8, height: 8, border: "2px solid #0a0a0a" }} />
          </div>
          <p
            style={{
              fontSize: 14,
              color: "#666",
              lineHeight: 1.8,
              maxWidth: 380,
              marginBottom: 48,
            }}
          >
            {t.heroSub}
          </p>
          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <a className="btn btn-primary" href="#cta">
              {t.navAccess}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path
                  d="M2 6.5H11M11 6.5L7 2.5M11 6.5L7 10.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a className="btn btn-secondary" href="#product">
              See Product →
            </a>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            borderTop: "2px solid #0a0a0a",
            paddingTop: 28,
            marginTop: 48,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: i === 0 ? "0 24px 0 0" : i === 1 ? "0 24px" : "0 0 0 24px",
                borderRight: i < 2 ? "1px solid #e5e5e5" : undefined,
              }}
            >
              <div
                style={{
                  fontFamily: DISPLAY,
                  fontWeight: 800,
                  fontSize: 36,
                  letterSpacing: "-1.5px",
                  marginBottom: 4,
                }}
              >
                {s.value}
              </div>
              <div style={{ ...mono(9, "#999", 1) }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: live workflow card ── */}
      <div
        className="hero-col-r"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#fafafa",
        }}
      >
        <div style={{ ...mono(9, "#bbb"), marginBottom: 20 }}>
          Live Workflow / MoA Dream
        </div>

        <div
          style={{
            background: "#fff",
            border: "3px solid #0a0a0a",
            boxShadow: "8px 8px 0 #0a0a0a",
          }}
        >
          {/* card header */}
          <div
            style={{
              padding: "14px 20px",
              borderBottom: "2px solid #0a0a0a",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#0a0a0a",
            }}
          >
            <span style={{ fontFamily: MONO, fontSize: 10, color: "#fff", letterSpacing: "1px" }}>
              Campaign Strategy Q3
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
              <span style={{ fontFamily: MONO, fontSize: 9, color: "#22c55e" }}>active</span>
            </div>
          </div>

          {/* card body */}
          <div>
            {["Analyze Q2 campaign performance", "Research competitor campaigns"].map((label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "13px 20px",
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
                <CheckBox />
                <span style={{ fontSize: 12, color: "#999", textDecoration: "line-through" }}>
                  {label}
                </span>
              </div>
            ))}

            {/* HITL review row */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                padding: "14px 20px",
                borderBottom: "2px solid #0a0a0a",
                borderLeft: "4px solid #002FA7",
                background: "#f5f8ff",
              }}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  flexShrink: 0,
                  border: "2px solid #002FA7",
                  background: "#eff3ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 1,
                }}
              >
                <div style={{ width: 6, height: 6, background: "#002FA7" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#0a0a0a" }}>
                    Draft Q3 campaign strategy
                  </span>
                  <div style={{ background: "#FFE000", border: "2px solid #0a0a0a", padding: "1px 7px" }}>
                    <span
                      style={{
                        fontFamily: MONO,
                        fontSize: 8,
                        fontWeight: 700,
                        color: "#0a0a0a",
                        letterSpacing: "1px",
                      }}
                    >
                      REVIEW
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: 11, color: "#666", lineHeight: 1.6, fontStyle: "italic" }}>
                  &ldquo;Based on Q2 data, I recommend a 3-phase campaign targeting the 25–34
                  segment...&rdquo;
                </p>
                <div style={{ display: "flex", gap: 7, marginTop: 10 }}>
                  <div
                    style={{
                      background: "#002FA7",
                      border: "2px solid #002FA7",
                      padding: "5px 12px",
                      cursor: "pointer",
                      boxShadow: "2px 2px 0 #0a0a0a",
                    }}
                  >
                    <span style={{ fontFamily: MONO, fontSize: 9, fontWeight: 500, color: "#fff" }}>
                      Approve
                    </span>
                  </div>
                  <div
                    style={{
                      border: "2px solid #0a0a0a",
                      padding: "5px 12px",
                      cursor: "pointer",
                      boxShadow: "2px 2px 0 #0a0a0a",
                    }}
                  >
                    <span style={{ fontFamily: MONO, fontSize: 9, fontWeight: 500 }}>Edit</span>
                  </div>
                  <div style={{ padding: "5px 12px", cursor: "pointer" }}>
                    <span style={{ fontFamily: MONO, fontSize: 9, color: "#999" }}>Skip</span>
                  </div>
                </div>
              </div>
            </div>

            {/* pending rows */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "13px 20px",
                borderBottom: "1px solid #f0f0f0",
                opacity: 0.3,
              }}
            >
              <div style={{ width: 18, height: 18, flexShrink: 0, border: "2px solid #ddd" }} />
              <span style={{ fontSize: 12 }}>Generate creative brief</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "13px 20px",
                opacity: 0.15,
              }}
            >
              <div style={{ width: 18, height: 18, flexShrink: 0, border: "2px solid #ddd" }} />
              <span style={{ fontSize: 12 }}>Schedule campaign review</span>
            </div>
          </div>

          {/* card footer */}
          <div
            style={{
              padding: "14px 20px",
              borderTop: "2px solid #0a0a0a",
              background: "#0a0a0a",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div style={{ flex: 1, background: "#333", height: 4 }}>
              <div style={{ background: "#FFE000", height: "100%", width: "40%" }} />
            </div>
            <span style={{ fontFamily: MONO, fontSize: 9, color: "#888", whiteSpace: "nowrap" }}>
              2 / 5 complete
            </span>
          </div>
        </div>

        {/* mini agent status cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
          <div
            style={{
              border: "2px solid #e5e5e5",
              padding: "12px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 600 }}>Maum Dream</span>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#f59e0b" }} />
              <span style={{ fontFamily: MONO, fontSize: 9, color: "#999" }}>standby</span>
            </div>
          </div>
          <div
            style={{
              border: "2px solid #e5e5e5",
              padding: "12px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#fff",
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 600, color: "#ccc" }}>Mirror Dream</span>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#ddd" }} />
              <span style={{ fontFamily: MONO, fontSize: 9, color: "#ddd" }}>idle</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
