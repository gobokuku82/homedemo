import type { CSSProperties } from "react";
import { DISPLAY, MONO } from "@/lib/tokens";

const uppercaseLabel: CSSProperties = {
  fontFamily: MONO,
  fontSize: 8,
  color: "#ccc",
  letterSpacing: "2.5px",
  textTransform: "uppercase",
};

function MiniCheck() {
  return (
    <div
      style={{
        width: 16,
        height: 16,
        flexShrink: 0,
        border: "2px solid #22c55e",
        background: "#f0fdf4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 1,
      }}
    >
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
        <path
          d="M1 4L3 6.5L7 1.5"
          stroke="#16a34a"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

const chip: CSSProperties = {
  fontFamily: MONO,
  fontSize: 9,
  color: "#555",
  padding: "5px 8px",
  border: "1.5px solid #e5e5e5",
  background: "#fafafa",
};

export function ProductMockup() {
  return (
    <section id="product" style={{ borderBottom: "2px solid #0a0a0a" }}>
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
          005 / Interface
        </span>
        <div style={{ flex: 1, height: 1, background: "#e5e5e5" }} />
      </div>

      <div className="r-px" style={{ paddingTop: 72 }}>
        <h2
          className="r-display-lg"
          style={{
            fontFamily: DISPLAY,
            fontWeight: 800,
            letterSpacing: "-3px",
            lineHeight: 0.88,
            color: "#0a0a0a",
            marginBottom: 12,
          }}
        >
          Every action
          <br />
          is visible.
        </h2>
        <p style={{ fontFamily: MONO, fontSize: 12, color: "#999", marginBottom: 48, letterSpacing: "0.5px" }}>
          Every decision is yours.
        </p>
      </div>

      {/* app frame */}
      <div style={{ background: "#fafafa", borderTop: "2px solid #0a0a0a" }}>
        {/* browser chrome */}
        <div style={{ background: "#0a0a0a", padding: "10px 20px", display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", gap: 5 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
          </div>
          <span style={{ fontFamily: MONO, fontSize: 10, color: "#555", margin: "0 auto" }}>
            DreamAgent — MoA Dream / Campaign Strategy Q3
          </span>
        </div>

        <div className="r-grid-app" style={{ borderBottom: "2px solid #0a0a0a" }}>
          {/* sidebar */}
          <div
            className="r-split"
            style={{
              background: "#fff",
              borderRight: "2px solid #0a0a0a",
              padding: "18px 0",
              minHeight: 460,
            }}
          >
            <div style={{ padding: "0 14px", marginBottom: 16 }}>
              <div style={{ ...uppercaseLabel, marginBottom: 10 }}>Agents</div>
              <div style={{ borderLeft: "3px solid #002FA7", padding: "8px 10px", marginBottom: 2, background: "#f5f8ff" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#0a0a0a", marginBottom: 1 }}>MoA Dream</div>
                <div style={{ fontFamily: MONO, fontSize: 8, color: "#002FA7" }}>active</div>
              </div>
              <div style={{ padding: "8px 10px", marginBottom: 2, opacity: 0.4 }}>
                <div style={{ fontSize: 11, color: "#666", marginBottom: 1 }}>Maum Dream</div>
                <div style={{ fontFamily: MONO, fontSize: 8, color: "#ccc" }}>standby</div>
              </div>
              <div style={{ padding: "8px 10px", opacity: 0.2 }}>
                <div style={{ fontSize: 11, color: "#666", marginBottom: 1 }}>Mirror Dream</div>
                <div style={{ fontFamily: MONO, fontSize: 8, color: "#ccc" }}>idle</div>
              </div>
            </div>
            <div style={{ height: 2, background: "#e5e5e5", margin: "0 0 14px" }} />
            <div style={{ padding: "0 14px" }}>
              <div style={{ ...uppercaseLabel, marginBottom: 8 }}>Workspace</div>
              <div style={{ padding: "7px 10px", background: "#f5f5f5", border: "1px solid #e5e5e5", marginBottom: 2 }}>
                <span style={{ fontSize: 11, color: "#0a0a0a", fontWeight: 600 }}>Workflow</span>
              </div>
              {["Knowledge Base", "Analytics", "Automations"].map((w) => (
                <div key={w} style={{ padding: "7px 10px", marginBottom: 2 }}>
                  <span style={{ fontSize: 11, color: "#aaa" }}>{w}</span>
                </div>
              ))}
            </div>
          </div>

          {/* main content */}
          <div className="r-split" style={{ background: "#fafafa", padding: 24, borderRight: "2px solid #0a0a0a" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
              <div>
                <div style={{ fontFamily: DISPLAY, fontSize: 16, fontWeight: 800, letterSpacing: "-0.3px", marginBottom: 3 }}>
                  Campaign Strategy Q3
                </div>
                <div style={{ fontFamily: MONO, fontSize: 9, color: "#aaa" }}>14 min ago · 2 of 5 steps complete</div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {["Pause", "History"].map((b) => (
                  <div key={b} style={{ border: "2px solid #e5e5e5", padding: "4px 10px", cursor: "pointer", background: "#fff" }}>
                    <span style={{ fontFamily: MONO, fontSize: 9, color: "#888" }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "#e5e5e5", height: 3, marginBottom: 20 }}>
              <div style={{ background: "#0a0a0a", height: "100%", width: "40%" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { label: "Analyze Q2 campaign performance data", meta: "43 data points · insights generated" },
                { label: "Research top competitor campaigns", meta: "12 assets · saved to knowledge base" },
              ].map((step) => (
                <div
                  key={step.label}
                  style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "11px 0", borderBottom: "1px solid #ebebeb" }}
                >
                  <MiniCheck />
                  <div>
                    <div style={{ fontSize: 11.5, color: "#aaa", textDecoration: "line-through" }}>{step.label}</div>
                    <div style={{ fontFamily: MONO, fontSize: 9, color: "#ddd", marginTop: 2 }}>{step.meta}</div>
                  </div>
                </div>
              ))}

              {/* HITL review row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "13px 14px",
                  borderLeft: "3px solid #002FA7",
                  background: "#f5f8ff",
                  margin: "4px 0",
                  borderTop: "1px solid #dde8ff",
                  borderBottom: "1px solid #dde8ff",
                  borderRight: "1px solid #dde8ff",
                }}
              >
                <div
                  style={{
                    width: 16,
                    height: 16,
                    flexShrink: 0,
                    border: "2px solid #002FA7",
                    background: "#eff3ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 1,
                  }}
                >
                  <div style={{ width: 5, height: 5, background: "#002FA7" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
                    <span style={{ fontSize: 11.5, fontWeight: 700 }}>Draft Q3 campaign strategy</span>
                    <div style={{ background: "#FFE000", border: "1.5px solid #0a0a0a", padding: "1px 6px" }}>
                      <span style={{ fontFamily: MONO, fontSize: 7.5, fontWeight: 700, color: "#0a0a0a", letterSpacing: "0.8px" }}>
                        REVIEW
                      </span>
                    </div>
                  </div>
                  <p style={{ fontSize: 11, color: "#666", fontStyle: "italic", lineHeight: 1.6, marginBottom: 8 }}>
                    &ldquo;Based on Q2 data, recommend a 3-phase campaign targeting 25–34 segment...&rdquo;
                  </p>
                  <div style={{ display: "flex", gap: 6 }}>
                    <div style={{ background: "#002FA7", border: "1.5px solid #002FA7", padding: "4px 10px", cursor: "pointer" }}>
                      <span style={{ fontFamily: MONO, fontSize: 9, color: "#fff" }}>Approve</span>
                    </div>
                    <div style={{ border: "1.5px solid #0a0a0a", padding: "4px 10px", cursor: "pointer", background: "#fff" }}>
                      <span style={{ fontFamily: MONO, fontSize: 9 }}>Edit</span>
                    </div>
                    <div style={{ padding: "4px 10px", cursor: "pointer" }}>
                      <span style={{ fontFamily: MONO, fontSize: 9, color: "#ccc" }}>Skip</span>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 0", borderBottom: "1px solid #ebebeb", opacity: 0.3 }}>
                <div style={{ width: 16, height: 16, flexShrink: 0, border: "2px solid #ddd" }} />
                <span style={{ fontSize: 11.5 }}>Generate creative brief &amp; assets</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 0", opacity: 0.15 }}>
                <div style={{ width: 16, height: 16, flexShrink: 0, border: "2px solid #ddd" }} />
                <span style={{ fontSize: 11.5 }}>Schedule campaign review meeting</span>
              </div>
            </div>
          </div>

          {/* context panel */}
          <div style={{ background: "#fff", padding: "18px 16px" }}>
            <div style={{ ...uppercaseLabel, marginBottom: 14 }}>Context</div>
            <div style={{ marginBottom: 18 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#0a0a0a", marginBottom: 8 }}>Tools</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {["web_search", "knowledge_base", "report_writer", "image_gen"].map((tool) => (
                  <div key={tool} style={chip}>
                    {tool}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#0a0a0a", marginBottom: 8 }}>Sources</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {["Q2_report.pdf", "brand_guidelines.md", "competitor_data/"].map((src) => (
                  <div key={src} style={chip}>
                    {src}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* input bar */}
        <div style={{ borderTop: "2px solid #0a0a0a", background: "#fff", padding: "12px 20px", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ flex: 1, fontFamily: MONO, fontSize: 11, color: "#ccc" }}>
            Tell MoA Dream what to do next...
          </span>
          <div style={{ background: "#0a0a0a", padding: "7px 16px", cursor: "pointer", border: "2px solid #0a0a0a", boxShadow: "2px 2px 0 #002FA7" }}>
            <span style={{ fontFamily: MONO, fontSize: 10, color: "#fff", fontWeight: 500 }}>Send</span>
          </div>
        </div>
      </div>

      <div className="r-px" style={{ paddingTop: 16, paddingBottom: 16 }}>
        <span style={{ fontFamily: MONO, fontSize: 9, color: "#ccc" }}>
          Concept interface — product in development
        </span>
      </div>
    </section>
  );
}
