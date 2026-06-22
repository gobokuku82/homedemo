import { MONO } from "@/lib/tokens";

const items = [
  "Human-in-the-Loop",
  "Todo Workflow",
  "Knowledge Base RAG",
  "Natural Language First",
  "MoA Dream",
  "Maum Dream",
  "Mirror Dream",
];

function Run() {
  return (
    <>
      {items.map((label) => (
        <span key={label} style={{ display: "inline-flex", alignItems: "center" }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 11,
              fontWeight: 500,
              color: "#0a0a0a",
              letterSpacing: "1px",
              padding: "0 36px",
            }}
          >
            {label}
          </span>
          <span style={{ fontFamily: MONO, fontSize: 11, color: "#0a0a0a", padding: "0 8px" }}>
            ×
          </span>
        </span>
      ))}
    </>
  );
}

export function Ticker() {
  return (
    <div
      aria-hidden="true"
      style={{
        borderBottom: "2px solid #0a0a0a",
        padding: "14px 0",
        overflow: "hidden",
        background: "#FFE000",
      }}
    >
      <div
        className="ticker-track"
        style={{
          display: "flex",
          gap: 0,
          animation: "ticker 20s linear infinite",
          width: "max-content",
        }}
      >
        {/* duplicated run so the loop is seamless */}
        <Run />
        <Run />
      </div>
    </div>
  );
}
