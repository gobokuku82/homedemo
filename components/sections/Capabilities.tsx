import { DISPLAY, MONO } from "@/lib/tokens";

interface Capability {
  num: string;
  label: string;
  title: [string, string];
  desc: string;
}

const capabilities: Capability[] = [
  {
    num: "02",
    label: "Todo Workflow",
    title: ["See every step.", "Change any step."],
    desc: "Every task broken into a visible list. Watch the agent work live. Pause, edit, redirect, or save a workflow as reusable automation — at any point.",
  },
  {
    num: "03",
    label: "Knowledge Base",
    title: ["Your data,", "your context."],
    desc: "Obsidian-style internal knowledge management with RAG retrieval. Upload documents, connect databases, visualize structured data — all searchable at runtime.",
  },
  {
    num: "04",
    label: "Natural Language",
    title: ["Just tell it", "what you need."],
    desc: "No prompts to memorize. No complex interfaces. Data analysis, image generation, report writing — everything through plain conversation.",
  },
];

export function Capabilities() {
  return (
    <section style={{ borderBottom: "2px solid #0a0a0a" }}>
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
          004 / Capabilities
        </span>
        <div style={{ flex: 1, height: 1, background: "#e5e5e5" }} />
      </div>

      <div className="r-grid-3">
        {capabilities.map((c, i) => (
          <div
            key={c.label}
            className="r-split"
            style={{
              padding: "48px 44px",
              borderRight: i < capabilities.length - 1 ? "2px solid #0a0a0a" : undefined,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  border: "2px solid #0a0a0a",
                  background: "#FFE000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "2px 2px 0 #0a0a0a",
                }}
              >
                <span style={{ fontFamily: MONO, fontSize: 10, fontWeight: 500 }}>{c.num}</span>
              </div>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: 9,
                  color: "#002FA7",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                {c.label}
              </span>
            </div>
            <h4
              style={{
                fontFamily: DISPLAY,
                fontWeight: 800,
                fontSize: 24,
                letterSpacing: "-0.5px",
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              {c.title[0]}
              <br />
              {c.title[1]}
            </h4>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.75 }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
