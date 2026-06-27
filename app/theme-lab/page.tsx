"use client";

import { useMemo, useState } from "react";
import { DreamAgentBold } from "@/components/DreamAgentBold";
import {
  buildCssVars,
  colorSchemes,
  defaultScheme,
  referencePalette,
  schemeFields,
  schemeVarName,
  type ColorScheme,
} from "@/lib/theme";

const HEX_RE = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;

// 톤 그룹 헤더 라벨 (현재는 헤더 없이 단독 표시)
const TONE_LABEL: Record<string, string> = {
  dark: "어두운 톤",
  mid: "기본 톤",
  bright: "밝은 톤",
};

// 3자리 hex(#abc)를 컬러피커가 받는 6자리(#aabbcc)로 정규화
function toFullHex(v: string): string {
  if (/^#[0-9a-fA-F]{3}$/.test(v)) {
    return "#" + v.slice(1).split("").map((c) => c + c).join("");
  }
  return v;
}

function schemeToCss(s: ColorScheme): string {
  const lines = (Object.keys(schemeVarName) as (keyof ColorScheme)[])
    .map((k) => `  ${schemeVarName[k]}: ${s[k]};`)
    .join("\n");
  return `:root {\n${lines}\n}`;
}

export default function ThemeLabPage() {
  const [vars, setVars] = useState<ColorScheme>(defaultScheme);
  const [drafts, setDrafts] = useState<Record<string, string>>({ ...defaultScheme });
  const [activeId, setActiveId] = useState<string>("1");
  const [staticMode, setStaticMode] = useState(true);
  const [editorOpen, setEditorOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const themeVars = useMemo(() => buildCssVars(vars), [vars]);

  function applyScheme(id: string, scheme: ColorScheme) {
    setActiveId(id);
    setVars(scheme);
    setDrafts({ ...scheme });
  }

  function setToken(key: keyof ColorScheme, value: string) {
    setVars((p) => ({ ...p, [key]: value }));
    setActiveId("custom");
  }

  function onHexInput(key: keyof ColorScheme, raw: string) {
    setDrafts((p) => ({ ...p, [key]: raw }));
    const v = raw.startsWith("#") ? raw : "#" + raw;
    if (HEX_RE.test(v)) setToken(key, v);
  }

  function onPickerInput(key: keyof ColorScheme, raw: string) {
    setDrafts((p) => ({ ...p, [key]: raw }));
    setToken(key, raw);
  }

  function flash(msg: string) {
    setToast(msg);
    window.setTimeout(() => setToast(null), 1400);
  }

  async function copyText(text: string, msg: string) {
    try {
      await navigator.clipboard.writeText(text);
      flash(msg);
    } catch {
      flash("복사 실패 — 직접 선택해 주세요");
    }
  }

  return (
    <div className={`lab-shell${staticMode ? " lab-static" : ""}`}>
      {/* 라이브 컬러 테스트용 스타일 (이 페이지에만 적용) */}
      <style>{`
        .lab-shell nav { position: static !important; }
        .lab-static *, .lab-static *::before, .lab-static *::after {
          transition: none !important;
          animation: none !important;
          scroll-behavior: auto !important;
        }
        .lab-static .role-card:hover,
        .lab-static .role-card:active {
          transform: none !important;
          box-shadow: 0 10px 30px -16px rgba(0,0,0,.6) !important;
          background: var(--cardbg) !important;
        }
        .lab-static .nav-chip:hover {
          background: color-mix(in srgb, var(--ink) 5%, transparent) !important;
          border-color: color-mix(in srgb, var(--ink) 8%, transparent) !important;
        }
        .lab-static .hero-navbtn:hover { background: transparent !important; }
      `}</style>

      {/* ── 상단 컨트롤 바 ───────────────────────────────────────── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 4000,
          display: "flex",
          alignItems: "center",
          gap: 14,
          flexWrap: "wrap",
          padding: "10px 16px",
          background: "#101014",
          borderBottom: "1px solid #2a2a31",
          color: "#fff",
          fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
        }}
      >
        <strong style={{ fontSize: 14, letterSpacing: "-.01em" }}>🎨 색상 테스트</strong>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
          {colorSchemes.map((s, i) => {
            const on = activeId === s.id;
            const prevTone = i > 0 ? colorSchemes[i - 1].tone : null;
            const showHeader = s.tone !== "현재" && s.tone !== prevTone;
            return (
              <span key={s.id} style={{ display: "contents" }}>
                {showHeader && (
                  <span
                    style={{
                      alignSelf: "center",
                      fontSize: 11,
                      fontWeight: 800,
                      color: "#6f7787",
                      letterSpacing: ".02em",
                      padding: "0 2px 0 10px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {TONE_LABEL[s.tone]}
                  </span>
                )}
                <button
                  onClick={() => applyScheme(s.id, s.scheme)}
                  title={s.note}
                  style={{
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 700,
                    padding: "7px 13px",
                    borderRadius: 8,
                    border: on ? "1px solid #5AB3D4" : "1px solid #34343d",
                    background: on ? "#1c3a4a" : "#18181d",
                    color: on ? "#cfeefb" : "#cdcdd5",
                  }}
                >
                  {s.label}
                </button>
              </span>
            );
          })}
          {activeId === "custom" && (
            <span
              style={{
                alignSelf: "center",
                fontSize: 12,
                color: "#9aa",
                padding: "0 4px",
              }}
            >
              · 직접 수정됨
            </span>
          )}
        </div>

        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button
            onClick={() => setStaticMode((v) => !v)}
            style={{
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 700,
              padding: "7px 13px",
              borderRadius: 8,
              border: "1px solid #34343d",
              background: staticMode ? "#26321c" : "#18181d",
              color: staticMode ? "#cde9b0" : "#cdcdd5",
            }}
          >
            {staticMode ? "효과 꺼짐 ✓" : "효과 켜짐"}
          </button>
          <button
            onClick={() => setEditorOpen((v) => !v)}
            style={{
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 700,
              padding: "7px 13px",
              borderRadius: 8,
              border: "1px solid #34343d",
              background: editorOpen ? "#2a2440" : "#18181d",
              color: "#e3def7",
            }}
          >
            색상 편집 {editorOpen ? "▾" : "▸"}
          </button>
        </div>
      </header>

      {/* ── 사이트 본문 (선택된 색 세트 적용) ──────────────────────── */}
      <DreamAgentBold themeVars={themeVars} staticMode={staticMode} />

      {/* ── 편집 드로어 ─────────────────────────────────────────── */}
      {editorOpen && (
        <aside
          style={{
            position: "fixed",
            top: 53,
            right: 0,
            bottom: 0,
            width: "min(340px, 92vw)",
            zIndex: 4000,
            overflowY: "auto",
            background: "#101014",
            borderLeft: "1px solid #2a2a31",
            color: "#e7e7ee",
            fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
            padding: "16px 16px 40px",
            boxShadow: "-20px 0 50px -30px rgba(0,0,0,.8)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <strong style={{ fontSize: 14 }}>색상 직접 편집</strong>
            <button
              onClick={() => setEditorOpen(false)}
              style={{ cursor: "pointer", background: "none", border: "none", color: "#8a8a93", fontSize: 18 }}
              aria-label="닫기"
            >
              ×
            </button>
          </div>
          <p style={{ fontSize: 12, color: "#8a8a93", margin: "0 0 14px", lineHeight: 1.5 }}>
            컬러칩을 클릭하거나 <code>#코드</code>를 입력하면 즉시 반영됩니다.
          </p>

          {/* 토큰 편집 행 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {schemeFields.map((f) => {
              const cur = vars[f.key];
              const draft = drafts[f.key] ?? cur;
              return (
                <div key={f.key} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <input
                    type="color"
                    value={toFullHex(HEX_RE.test(cur) ? cur : "#000000")}
                    onChange={(e) => onPickerInput(f.key, e.target.value)}
                    style={{
                      width: 34,
                      height: 34,
                      flex: "0 0 auto",
                      padding: 0,
                      border: "1px solid #34343d",
                      borderRadius: 8,
                      background: "none",
                      cursor: "pointer",
                    }}
                    aria-label={f.label}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12.5, fontWeight: 700, lineHeight: 1.2 }}>{f.label}</div>
                    <div style={{ fontSize: 10.5, color: "#7f7f88" }}>{f.hint}</div>
                  </div>
                  <input
                    type="text"
                    value={draft}
                    spellCheck={false}
                    onChange={(e) => onHexInput(f.key, e.target.value)}
                    style={{
                      width: 86,
                      flex: "0 0 auto",
                      fontFamily: "ui-monospace, Menlo, Consolas, monospace",
                      fontSize: 12,
                      padding: "6px 8px",
                      borderRadius: 7,
                      border: HEX_RE.test(draft.startsWith("#") ? draft : "#" + draft)
                        ? "1px solid #34343d"
                        : "1px solid #7a3b3b",
                      background: "#18181d",
                      color: "#e7e7ee",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* 동작 버튼 */}
          <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
            <button
              onClick={() => copyText(schemeToCss(vars), "CSS 코드 복사됨")}
              style={btnStyle("#1c3a4a", "#cfeefb")}
            >
              CSS 코드 복사
            </button>
            <button
              onClick={() => copyText(JSON.stringify(vars, null, 2), "JSON 복사됨")}
              style={btnStyle("#18181d", "#cdcdd5")}
            >
              JSON 복사
            </button>
            <button
              onClick={() => applyScheme("1", defaultScheme)}
              style={btnStyle("#18181d", "#cdcdd5")}
            >
              초기화
            </button>
          </div>

          {/* 제안 팔레트 참고 스와치 */}
          <div style={{ marginTop: 22 }}>
            <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 8, color: "#bdbdc6" }}>
              제안 팔레트 (클릭 → 코드 복사)
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 6 }}>
              {referencePalette.map((p) => (
                <button
                  key={p.name}
                  onClick={() => copyText(p.hex, `${p.name} ${p.hex} 복사됨`)}
                  title={`${p.name} ${p.hex}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "5px 7px",
                    borderRadius: 7,
                    border: "1px solid #26262d",
                    background: "#161619",
                    color: "#d6d6de",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: 4,
                      flex: "0 0 auto",
                      background: p.hex,
                      border: "1px solid rgba(255,255,255,.15)",
                    }}
                  />
                  <span style={{ fontSize: 10.5, lineHeight: 1.1, overflow: "hidden" }}>
                    <span style={{ fontWeight: 700 }}>{p.name}</span>
                    <br />
                    <span style={{ fontFamily: "ui-monospace, monospace", color: "#8a8a93" }}>{p.hex}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </aside>
      )}

      {/* 복사 토스트 */}
      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: 22,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 5000,
            background: "#1f1f26",
            color: "#fff",
            border: "1px solid #34343d",
            borderRadius: 10,
            padding: "10px 16px",
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
            boxShadow: "0 12px 40px -16px rgba(0,0,0,.7)",
          }}
        >
          {toast}
        </div>
      )}
    </div>
  );
}

function btnStyle(bg: string, color: string) {
  return {
    flex: 1,
    cursor: "pointer",
    fontSize: 12.5,
    fontWeight: 700,
    padding: "9px 8px",
    borderRadius: 8,
    border: "1px solid #34343d",
    background: bg,
    color,
  } as const;
}
