import { DISPLAY, MONO } from "@/lib/tokens";
import type { SectionProps } from "@/lib/types";
import type { Lang } from "@/content/copy";

interface NavProps extends SectionProps {
  setLang: (lang: Lang) => void;
}

const langButtons: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ko", label: "KO" },
  { code: "ja", label: "JA" },
];

export function Nav({ lang, setLang, t }: NavProps) {
  return (
    <nav
      className="r-px"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 56,
        background: "#fff",
        borderBottom: "2px solid #0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          fontFamily: DISPLAY,
          fontWeight: 800,
          fontSize: 16,
          letterSpacing: "-0.4px",
        }}
      >
        DreamAgent
      </span>

      <div
        className="nav-center"
        style={{ display: "flex", gap: 40, alignItems: "center" }}
      >
        <a className="nav-link" href="#agents">
          Agents
        </a>
        <a className="nav-link" href="#features">
          Features
        </a>
        <a className="nav-link" href="#product">
          Product
        </a>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div
          role="group"
          aria-label="Language"
          style={{
            display: "flex",
            border: "2px solid #0a0a0a",
            overflow: "hidden",
          }}
        >
          {langButtons.map((b, i) => {
            const active = lang === b.code;
            return (
              <button
                key={b.code}
                type="button"
                onClick={() => setLang(b.code)}
                aria-pressed={active}
                style={{
                  background: active ? "#002FA7" : "transparent",
                  color: active ? "#fff" : "#aaa",
                  border: "none",
                  borderLeft: i === 0 ? "none" : "2px solid #0a0a0a",
                  padding: "5px 10px",
                  fontFamily: MONO,
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: "1px",
                  cursor: "pointer",
                  transition: "background .15s",
                }}
              >
                {b.label}
              </button>
            );
          })}
        </div>

        <a className="btn btn-nav" href="#cta">
          {t.navAccess}
        </a>
      </div>
    </nav>
  );
}
