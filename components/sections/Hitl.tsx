import { DISPLAY, MONO } from "@/lib/tokens";
import type { SectionProps } from "@/lib/types";

export function Hitl({ t, tracking }: SectionProps) {
  return (
    <section id="features" style={{ background: "#0a0a0a", borderBottom: "2px solid #0a0a0a" }}>
      {/* section index bar */}
      <div
        className="r-px"
        style={{
          paddingTop: 28,
          paddingBottom: 28,
          borderBottom: "2px solid #222",
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <span
          style={{
            fontFamily: MONO,
            fontSize: 9,
            color: "#444",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          003 / Core Principle
        </span>
        <div style={{ flex: 1, height: 1, background: "#222" }} />
      </div>

      <div
        className="r-px r-grid-2"
        style={{ paddingTop: 80, paddingBottom: 80, gap: 80, alignItems: "center" }}
      >
        {/* left: heading */}
        <div>
          <h2
            className="r-display-lg"
            style={{
              fontFamily: DISPLAY,
              fontWeight: 800,
              lineHeight: 0.88,
              letterSpacing: tracking.h2,
              color: "#fff",
              marginBottom: 32,
            }}
          >
            {t.hitlH[0]}
            <br />
            {t.hitlH[1]}
            <br />
            {t.hitlH[2]}
            {t.hitlH[3] ? (
              <>
                <br />
                {t.hitlH[3]}
              </>
            ) : null}
          </h2>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8, maxWidth: 400, marginBottom: 40 }}>
            {t.hitlDesc}
          </p>
          <a className="btn btn-hitl" href="#cta">
            {t.navAccess} →
          </a>
        </div>

        {/* right: approval card */}
        <div style={{ background: "#fff", border: "3px solid #444", boxShadow: "8px 8px 0 #FFE000" }}>
          <div
            style={{
              padding: "14px 20px",
              borderBottom: "3px solid #0a0a0a",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontFamily: MONO, fontSize: 10, color: "#0a0a0a", letterSpacing: "1px" }}>
              Agent proposes action
            </span>
            <div style={{ background: "#FFE000", border: "2px solid #0a0a0a", padding: "2px 8px" }}>
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

          <div style={{ padding: 20, borderBottom: "2px solid #f0f0f0" }}>
            <div
              style={{
                background: "#f5f8ff",
                borderLeft: "4px solid #002FA7",
                padding: "14px 16px",
                marginBottom: 14,
              }}
            >
              <p style={{ fontSize: 12, color: "#333", lineHeight: 1.7, fontStyle: "italic", marginBottom: 8 }}>
                &ldquo;Send the Q3 campaign brief to all 340 client contacts with the attached
                proposal deck.&rdquo;
              </p>
              <div style={{ fontFamily: MONO, fontSize: 9, color: "#aaa" }}>
                340 recipients · campaign_brief_Q3.pdf · 2.4 MB
              </div>
            </div>
            <div style={{ fontFamily: MONO, fontSize: 9, color: "#888", marginBottom: 10 }}>
              What would you like to do?
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <div
                style={{
                  background: "#002FA7",
                  border: "2px solid #002FA7",
                  padding: "7px 14px",
                  cursor: "pointer",
                  boxShadow: "2px 2px 0 #0a0a0a",
                }}
              >
                <span style={{ fontFamily: MONO, fontSize: 10, color: "#fff", fontWeight: 500 }}>
                  Approve
                </span>
              </div>
              <div
                style={{
                  border: "2px solid #0a0a0a",
                  padding: "7px 14px",
                  cursor: "pointer",
                  boxShadow: "2px 2px 0 #0a0a0a",
                }}
              >
                <span style={{ fontFamily: MONO, fontSize: 10, fontWeight: 500 }}>Edit first</span>
              </div>
              <div style={{ padding: "7px 14px", cursor: "pointer" }}>
                <span style={{ fontFamily: MONO, fontSize: 10, color: "#aaa" }}>Cancel</span>
              </div>
            </div>
          </div>

          <div style={{ padding: "12px 20px", background: "#fafafa" }}>
            <span style={{ fontFamily: MONO, fontSize: 9, color: "#ccc" }}>
              You remain in control. Always.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
