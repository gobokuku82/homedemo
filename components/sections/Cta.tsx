import { DISPLAY, MONO } from "@/lib/tokens";
import type { SectionProps } from "@/lib/types";

export function Cta({ t, tracking }: SectionProps) {
  return (
    <section id="cta" style={{ background: "#FFE000", borderBottom: "2px solid #0a0a0a" }}>
      {/* section index bar */}
      <div
        className="r-px"
        style={{
          paddingTop: 28,
          paddingBottom: 28,
          borderBottom: "2px solid #0a0a0a",
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <span
          style={{
            fontFamily: MONO,
            fontSize: 9,
            color: "rgba(0,0,0,0.35)",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          006 / Early Access
        </span>
        <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.15)" }} />
      </div>

      <div
        className="r-px r-grid-2"
        style={{ paddingTop: 80, paddingBottom: 80, gap: 80, alignItems: "center" }}
      >
        <h2
          className="r-cta"
          style={{
            fontFamily: DISPLAY,
            fontWeight: 800,
            lineHeight: 0.88,
            letterSpacing: tracking.h2,
            color: "#0a0a0a",
          }}
        >
          {t.ctaH[0]}
          <br />
          {t.ctaH[1]}
          <br />
          {t.ctaH[2]}
          <br />
          {t.ctaH[3]}
        </h2>
        <div>
          <p style={{ fontSize: 15, color: "#5a4a00", lineHeight: 1.8, maxWidth: 380, marginBottom: 40 }}>
            {t.ctaDesc}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
            <a className="btn btn-early" href="#">
              {t.ctaBtn}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M2 7H12M12 7L8 3M12 7L8 11"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <span style={{ fontFamily: MONO, fontSize: 10, color: "#8a7a00" }}>
              No pricing commitments. No timeline pressure.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
