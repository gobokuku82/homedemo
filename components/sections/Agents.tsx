import { DISPLAY, MONO } from "@/lib/tokens";
import type { SectionProps } from "@/lib/types";

interface Agent {
  num: string;
  name: string;
  category: string;
  desc: string;
  features: string[];
}

const agents: Agent[] = [
  {
    num: "01",
    name: "MoA Dream",
    category: "Marketing Intelligence",
    desc: "Campaign strategy, competitor analysis, copy generation, and performance reporting. From brief to launch, fully guided with HITL checkpoints.",
    features: [
      "Campaign strategy & planning",
      "Competitor monitoring",
      "Copy & creative generation",
      "Performance reports",
    ],
  },
  {
    num: "02",
    name: "Maum Dream",
    category: "Counseling & Support",
    desc: "Session documentation, care plan suggestions, and resource matching. Built with practitioner oversight at every decision point. Compliance first.",
    features: [
      "Session notes & summaries",
      "Care plan suggestions",
      "Resource & referral matching",
      "Progress tracking",
    ],
  },
  {
    num: "03",
    name: "Mirror Dream",
    category: "Pharmaceutical CSO",
    desc: "Regulatory research, territory analysis, and detailing support for pharma CSOs. Designed for regulated environments, compliance by default.",
    features: [
      "Regulatory research",
      "Territory & sales analysis",
      "Detailing support materials",
      "Compliance documentation",
    ],
  },
];

export function Agents({ t, tracking }: SectionProps) {
  return (
    <section id="agents" style={{ borderBottom: "2px solid #0a0a0a" }}>
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
            color: "#bbb",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          002 / Agents
        </span>
        <div style={{ flex: 1, height: 1, background: "#e5e5e5" }} />
        <span
          style={{
            fontFamily: DISPLAY,
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "-0.3px",
          }}
        >
          03 Specialists
        </span>
      </div>

      {/* heading + description */}
      <div
        className="r-px r-grid-2"
        style={{
          paddingTop: 60,
          paddingBottom: 60,
          borderBottom: "2px solid #0a0a0a",
          gap: 60,
          alignItems: "end",
        }}
      >
        <h2
          className="r-display-lg"
          style={{
            fontFamily: DISPLAY,
            fontWeight: 800,
            lineHeight: 0.88,
            letterSpacing: tracking.h2,
            color: "#0a0a0a",
          }}
        >
          {t.agentsH[0]}
          <br />
          {t.agentsH[1]}
          <br />
          {t.agentsH[2]}
          <br />
          {t.agentsH[3]}
        </h2>
        <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, maxWidth: 440, paddingBottom: 8 }}>
          {t.agentsDesc}
        </p>
      </div>

      {/* agent columns */}
      <div className="r-grid-3">
        {agents.map((a, i) => (
          <div
            key={a.name}
            className="agent-card r-split"
            style={{
              padding: "48px 44px",
              borderRight: i < agents.length - 1 ? "2px solid #0a0a0a" : undefined,
            }}
          >
            <div
              style={{
                fontFamily: MONO,
                fontSize: 11,
                color: "#e5e5e5",
                letterSpacing: "1px",
                marginBottom: 44,
              }}
            >
              {a.num}
            </div>
            <h3
              className="r-h3"
              style={{
                fontFamily: DISPLAY,
                fontWeight: 800,
                letterSpacing: "-0.5px",
                marginBottom: 6,
              }}
            >
              {a.name}
            </h3>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 9,
                color: "#002FA7",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              {a.category}
            </div>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.75, marginBottom: 32 }}>
              {a.desc}
            </p>
            <div
              style={{
                borderTop: "2px solid #0a0a0a",
                paddingTop: 24,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {a.features.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 16, height: 2, background: "#0a0a0a", flexShrink: 0 }} />
                  <span style={{ fontSize: 12.5, color: "#444" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
