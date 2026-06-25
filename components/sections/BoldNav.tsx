export function BoldNav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px clamp(20px,5vw,56px)",
        background: "color-mix(in srgb,var(--surface) 90%,transparent)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid color-mix(in srgb,var(--ink) 10%,transparent)",
      }}
    >
      <a href="#top" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
        <span
          style={{
            background: "var(--ink)",
            color: "var(--surface)",
            fontWeight: 900,
            fontSize: 14.5,
            letterSpacing: "-.04em",
            padding: "6px 12px",
            borderRadius: 6,
            whiteSpace: "nowrap",
          }}
        >
          DREAM AGENT
        </span>
      </a>

      <div
        data-bnav=""
        style={{ display: "flex", gap: 30, fontSize: 14, fontWeight: 600, color: "var(--ink)" }}
      >
        <a href="#products" style={{ color: "inherit", textDecoration: "none" }}>
          제품
        </a>
        <a href="#tech" style={{ color: "inherit", textDecoration: "none" }}>
          기술
        </a>
        <a href="#people" style={{ color: "inherit", textDecoration: "none" }}>
          함께할 사람
        </a>
      </div>

      <a
        href="#cta"
        style={{
          background: "var(--accent)",
          color: "var(--onaccent)",
          fontSize: 13,
          fontWeight: 700,
          padding: "10px 18px",
          borderRadius: "var(--btnRadius)",
          textDecoration: "none",
        }}
      >
        함께 만들기
      </a>
    </nav>
  );
}
