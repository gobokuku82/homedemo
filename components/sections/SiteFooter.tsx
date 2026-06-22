import type { CSSProperties } from "react";
import { DISPLAY, MONO } from "@/lib/tokens";

interface FooterCol {
  title: string;
  links: string[];
}

const cols: FooterCol[] = [
  { title: "Agents", links: ["MoA Dream", "Maum Dream", "Mirror Dream"] },
  { title: "Product", links: ["Features", "Workflow", "Knowledge Base"] },
  { title: "Company", links: ["About", "Blog", "Careers"] },
];

const colHead: CSSProperties = {
  fontFamily: MONO,
  fontSize: 8,
  color: "#333",
  letterSpacing: "2.5px",
  textTransform: "uppercase",
  marginBottom: 18,
};

export function SiteFooter() {
  return (
    <footer style={{ background: "#0a0a0a" }}>
      <div
        className="r-px r-grid-footer"
        style={{ borderBottom: "2px solid #1a1a1a", paddingTop: 60, paddingBottom: 60 }}
      >
        {/* brand */}
        <div style={{ borderRight: "1px solid #1a1a1a", paddingRight: 48 }}>
          <div
            style={{
              fontFamily: DISPLAY,
              fontWeight: 800,
              fontSize: 18,
              letterSpacing: "-0.5px",
              color: "#fff",
              marginBottom: 14,
            }}
          >
            DreamAgent
          </div>
          <p style={{ fontSize: 12, color: "#444", lineHeight: 1.7, maxWidth: 220 }}>
            AI agents that work for you. Built for people who know their industry.
          </p>
        </div>

        {/* link columns */}
        {cols.map((col) => (
          <div key={col.title} style={{ padding: "0 32px", borderRight: "1px solid #1a1a1a" }}>
            <div style={colHead}>{col.title}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {col.links.map((l) => (
                <a key={l} className="foot-link" href="#">
                  {l}
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* access */}
        <div style={{ paddingLeft: 32 }}>
          <div style={colHead}>Access</div>
          <a className="btn btn-foot" href="#cta">
            Request →
          </a>
        </div>
      </div>

      <div
        className="r-px"
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontFamily: MONO, fontSize: 10, color: "#333" }}>
          © 2026 DreamAgent. Seoul.
        </span>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e" }} />
          <span style={{ fontFamily: MONO, fontSize: 10, color: "#333" }}>
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
