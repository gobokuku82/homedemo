import type { HeroSlide } from "@/lib/theme";

interface BoldHeroProps {
  heroAgent: HeroSlide;
  heroSlideLabel: string;
  onPrev: () => void;
  onNext: () => void;
  showSecondaryCta?: boolean;
}

export function BoldHero({
  heroAgent,
  heroSlideLabel,
  onPrev,
  onNext,
  showSecondaryCta = true,
}: BoldHeroProps) {
  return (
    <section
      data-bhero-wrap=""
      style={{ padding: "clamp(64px,8vh,112px) clamp(20px,5vw,56px) clamp(72px,9vh,124px)" }}
    >
      <div
        data-bhero=""
        style={{
          width: "100%",
          maxWidth: "min(94vw, 2600px)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "clamp(10px,1vw,18px)",
          alignItems: "center",
        }}
      >
        {/* LEFT: text */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--accent)",
              color: "var(--onaccent)",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: ".04em",
              padding: "7px 14px",
              borderRadius: 6,
              marginBottom: 20,
            }}
          >
            <span
              style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(6,18,31,.45)" }}
            />
            분야 최고의 브레인, 드림
          </div>

          <h1
            data-bhero-h1=""
            style={{
              fontWeight: 900,
              fontSize: "calc(clamp(44px,5vw,110px) * var(--hlScale))",
              lineHeight: 1.1,
              letterSpacing: "-.04em",
              margin: "0 0 20px",
              whiteSpace: "nowrap",
              overflow: "visible",
              position: "relative",
              zIndex: 0,
            }}
          >
            <span
              data-h1l1=""
              style={{
                display: "block",
                fontSize: ".82em",
                transform: "translate(var(--l1x),var(--l1y))",
              }}
            >
              당신의 현장에,
            </span>
            <span style={{ display: "block", transform: "translate(var(--l2x),var(--l2y))" }}>
              최고의 <span style={{ color: "var(--hlAccent)" }}>브레인</span>을 더한다면
            </span>
          </h1>

          <p
            data-bsub=""
            style={{
              fontSize: "clamp(14px,1.2vw,16px)",
              lineHeight: 1.65,
              color: "var(--subtle)",
              margin: "0 0 34px",
              fontWeight: 500,
              transform: "translate(var(--subx),var(--suby))",
            }}
          >
            당신의 일을 학습한 분야 최고의 브레인이, 계획부터 끝까지 함께합니다.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="#people"
              style={{
                background: "var(--accent)",
                color: "var(--onaccent)",
                fontWeight: 800,
                fontSize: 16,
                padding: "17px 34px",
                borderRadius: "var(--btnRadius)",
                textDecoration: "none",
                boxShadow: "0 10px 32px -8px color-mix(in srgb,var(--accent) 55%,transparent)",
              }}
            >
              함께 만들기 →
            </a>
            {showSecondaryCta && (
              <a
                href="#products"
                style={{
                  border: "2px solid var(--ink)",
                  color: "var(--ink)",
                  fontWeight: 700,
                  fontSize: 16,
                  padding: "15px 28px",
                  borderRadius: "var(--btnRadius)",
                  textDecoration: "none",
                }}
              >
                제품 보기
              </a>
            )}
          </div>
        </div>

        {/* RIGHT: product showcase frame */}
        <div data-bhero-img="" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              borderRadius: 18,
              overflow: "hidden",
              background: "var(--cardbg)",
              boxShadow: "0 0 0 1px var(--line),0 40px 80px -32px rgba(0,0,0,.6)",
            }}
          >
            {/* window chrome */}
            <div
              style={{
                background: "color-mix(in srgb,var(--ink) 5%,transparent)",
                padding: "11px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "1px solid color-mix(in srgb,var(--ink) 8%,transparent)",
              }}
            >
              <span
                style={{
                  fontSize: 11.5,
                  fontWeight: 700,
                  color: "color-mix(in srgb,var(--ink) 40%,transparent)",
                  letterSpacing: ".04em",
                }}
              >
                {heroAgent.name}
              </span>
            </div>

            {/* media area — 캔버스 16/9(영상 비율). 영상이면 iframe, 이미지면 contain(여백 허용) */}
            <div
              style={{
                background: "#16181E",
                aspectRatio: "16/9",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {heroAgent.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${heroAgent.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${heroAgent.youtubeId}&controls=0&playsinline=1&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1&fs=0`}
                  title={heroAgent.name}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  // pointerEvents 차단 → 호버/클릭 컨트롤 안 뜸. scale 확대 → 제목·워터마크 크롭(배경 영상 스타일)
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                    display: "block",
                    pointerEvents: "none",
                    transform: "scale(1.2)",
                    transformOrigin: "center",
                  }}
                />
              ) : (
                <img
                  src={heroAgent.image}
                  alt={`${heroAgent.name} 제품 화면`}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              )}
            </div>

            {/* bottom bar: label + arrows */}
            <div
              style={{
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid color-mix(in srgb,var(--ink) 8%,transparent)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    color: "var(--accent)",
                    letterSpacing: ".04em",
                    marginBottom: 2,
                  }}
                >
                  {heroAgent.tag}
                </div>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: "var(--ink)" }}>
                  {heroAgent.name}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <button className="hero-navbtn" onClick={onPrev} aria-label="이전 제품">
                  ‹
                </button>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "color-mix(in srgb,var(--ink) 35%,transparent)",
                  }}
                >
                  {heroSlideLabel}
                </span>
                <button className="hero-navbtn" onClick={onNext} aria-label="다음 제품">
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
