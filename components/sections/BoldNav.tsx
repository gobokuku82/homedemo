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
            fontSize: 17.5,
            letterSpacing: "-.04em",
            padding: "7px 14px",
            borderRadius: 7,
            whiteSpace: "nowrap",
          }}
        >
          DREAM AGENT
        </span>
      </a>

      {/* nav links pushed to the far right (space-between); each in a subtle chip */}
      <div data-bnav="" style={{ display: "flex", gap: 14, alignItems: "center" }}>
        <a href="#products" className="nav-chip">
          제품
        </a>
        <a href="#tech" className="nav-chip">
          기술
        </a>
        <a href="#people" className="nav-chip">
          파트너 모집
        </a>
      </div>
    </nav>
  );
}
