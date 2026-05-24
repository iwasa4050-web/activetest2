/* eslint-disable */
import React from 'react';
// Hero — full-bleed image with deep blue overlay, oversized English type, JP headline top-left.

const Hero = () => {
  return (
    <section id="top" style={{
      position: 'relative',
      minHeight: '100vh',
      paddingTop: 88,
      background: 'var(--brand-blue)',
      color: '#fff',
      overflow: 'hidden'
    }}>
      {/* Full-bleed background photo */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(assets/hero-bg.jpg?v=3)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 0,
      }} />
      {/* Blue tint overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(11,37,82,0.82) 0%, rgba(28,67,145,0.62) 55%, rgba(42,88,176,0.48) 100%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
      {/* Vignette for legibility on lower half */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(11,37,82,0.0) 40%, rgba(11,37,82,0.55) 100%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* SCROLL — vertical, bottom-left */}
      <div style={{
        position: 'absolute',
        left: 32, bottom: 140,
        zIndex: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14,
      }}>
        <div style={{
          width: 1, height: 56,
          background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.6))'
        }} />
        <span style={{
          writingMode: 'vertical-rl',
          fontFamily: 'var(--font-en-sans)',
          fontWeight: 500,
          fontSize: 10,
          letterSpacing: '0.42em',
          color: 'rgba(255,255,255,0.92)',
        }}>SCROLL</span>
      </div>

      {/* Angled accent band — bottom right */}
      <div style={{
        position: 'absolute',
        bottom: 0, right: 0,
        width: '62%', height: 160,
        background: 'var(--brand-gold)',
        clipPath: 'polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)',
        zIndex: 2,
      }} />
      {/* thin accent stripe above band */}
      <div style={{
        position: 'absolute',
        bottom: 156, right: 0,
        width: '50%', height: 2,
        background: 'rgba(255,255,255,0.55)',
        transform: 'skewX(-72deg)',
        transformOrigin: 'right bottom',
        zIndex: 2,
        opacity: 0.55,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        maxWidth: 1440,
        margin: '0 auto',
        padding: '88px 88px 200px',
        minHeight: 'calc(100vh - 88px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
        {/* JP headline */}
        <h1 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontWeight: 500,
          fontSize: 'clamp(40px, 6.4vw, 92px)',
          lineHeight: 1.28,
          letterSpacing: '0.04em',
          color: '#FFFFFF',
          margin: 0,
          textShadow: '0 2px 24px rgba(0,0,0,0.18)',
        }}>
          安心できる未来を、<br />
          <span style={{ color: 'var(--brand-gold)' }}>当たり前</span>に。
        </h1>

        {/* Massive English type — fits within viewport */}
        <div className="hero-en-3d" style={{
          marginTop: 'clamp(24px, 3vw, 56px)',
          fontFamily: 'var(--font-en-sans)',
          fontWeight: 900,
          fontSize: 'clamp(44px, 8.4vw, 132px)',
          lineHeight: 0.92,
          letterSpacing: '0.04em',
          color: '#FFFFFF',
          pointerEvents: 'none',
          userSelect: 'none',
        }}>
          ACTIVE SECURITY
        </div>

        {/* Body */}
        <p style={{
          marginTop: 'clamp(24px, 3vw, 40px)',
          maxWidth: 640,
          fontFamily: 'var(--font-jp-sans)',
          fontWeight: 400,
          fontSize: 17,
          lineHeight: 2.05,
          letterSpacing: '0.06em',
          color: 'rgba(255,255,255,0.92)',
          textShadow: '0 1px 12px rgba(0,0,0,0.25)',
        }}>
          交通誘導・駐車場・イベント警備まで対応<br />
          奈良の地域に安心を創造する<br />
          ——そんな警備会社です。
        </p>

        {/* Recruit CTA */}
        <a
          href="recruit.html"
          className="btn-active hero-recruit-cta"
          style={{
            marginTop: 'clamp(32px, 4vw, 56px)',
            background: 'transparent',
            color: '#FFFFFF',
            border: '1.5px solid rgba(255, 255, 255, 0.7)',
            width: 'auto',
            minWidth: 320,
            maxWidth: 480,
            height: 76,
            padding: '0 36px',
            gap: 18,
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            fontWeight: 700,
            lineHeight: 1.35,
          }}
        >
          <span style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 2,
          }}>
            <span style={{ fontSize: 18, letterSpacing: '0.12em' }}>警備スタッフ募集中</span>
            <span style={{ fontSize: 15, letterSpacing: '0.18em', opacity: 0.85 }}>詳しくはコチラ</span>
          </span>
          <span className="btn-arrow" style={{ fontSize: 22 }}>→</span>
        </a>

      </div>

      {/* EST badge — vertical right */}
      <div style={{
        position: 'absolute',
        right: 24, top: 140,
        writingMode: 'vertical-rl',
        fontFamily: 'var(--font-en-serif)',
        fontStyle: 'italic',
        fontSize: 14,
        letterSpacing: '0.4em',
        color: 'rgba(255,255,255,0.78)',
        zIndex: 3,
      }}>
        EST · 2026 · NARA · JAPAN
      </div>
    </section>
  );
};

export { Hero };
