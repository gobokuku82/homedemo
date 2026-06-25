export function BoldCta() {
  return (
    <section
      id="cta"
      style={{
        padding: "clamp(64px,8vw,120px) clamp(20px,5vw,56px)",
        background: "var(--darkbg)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "min(94vw, 1040px)", margin: "0 auto" }}>
        <h2
          style={{
            fontWeight: 900,
            fontSize: "calc(clamp(36px,6vw,68px) * var(--hlScale))",
            lineHeight: 1.05,
            letterSpacing: "-.045em",
            color: "#fff",
            margin: "0 0 30px",
          }}
        >
          이제, 당신이 <span style={{ color: "var(--accent)" }}>전문가</span> 입니다
        </h2>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#people"
            style={{
              background: "var(--accent)",
              color: "var(--onaccent)",
              fontWeight: 800,
              fontSize: 16,
              padding: "16px 28px",
              borderRadius: "var(--btnRadius)",
              textDecoration: "none",
            }}
          >
            함께 만들기 →
          </a>
          <a
            href="#"
            style={{
              border: "1.5px solid var(--line)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 16,
              padding: "16px 26px",
              borderRadius: "var(--btnRadius)",
              textDecoration: "none",
            }}
          >
            피치덱 다운로드
          </a>
        </div>
      </div>
    </section>
  );
}
