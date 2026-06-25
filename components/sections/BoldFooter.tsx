export function BoldFooter() {
  return (
    <footer
      style={{
        padding: "26px clamp(20px,5vw,56px)",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 10,
        fontSize: 13,
        color: "var(--subtle)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <span style={{ fontWeight: 900, color: "var(--ink)" }}>DREAM AGENT</span>
      <span>© 2026 Dream Agent</span>
    </footer>
  );
}
