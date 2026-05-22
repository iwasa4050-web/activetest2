/* eslint-disable */
import React from 'react';
// ContactBanner — navy-blue CTA block with city silhouette, placed between
// Recruit and Contact sections on the index page.

const ContactBanner = () => (
  <section style={{
    position: 'relative',
    padding: 'clamp(72px, 10vw, 140px) 0',
    background: 'var(--brand-blue)',
    color: '#fff',
    overflow: 'hidden',
  }}>
    {/* Full-bleed background photo */}
    <div style={{
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(assets/contact-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      zIndex: 0,
    }} />
    {/* Navy tint overlay — same treatment as the top hero */}
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

    {/* Decorative gold diagonal — brand signature motif */}
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="0" y1="94%" x2="100%" y2="8%" stroke="var(--brand-gold)" strokeWidth="1" opacity="0.3" />
    </svg>

    <div className="wrap" style={{
      position: 'relative',
      zIndex: 2,
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 clamp(22px, 5vw, 56px)',
      textAlign: 'left',
    }}>
      <h2 className="reveal" style={{
        fontFamily: 'var(--font-jp-serif)',
        fontWeight: 600,
        fontSize: 'clamp(26px, 3.4vw, 44px)',
        lineHeight: 1.55,
        letterSpacing: '0.06em',
        color: '#FFFFFF',
        margin: 0,
        maxWidth: 1100,
      }}>
        <span style={{ color: 'var(--brand-gold)' }}>安心・安全の警備サービス</span>をお探しなら、<br />
        まずはお気軽にご相談ください。
      </h2>

      <p className="reveal delay-1" style={{
        marginTop: 'clamp(20px, 2.4vw, 32px)',
        fontFamily: 'var(--font-jp-sans)',
        fontSize: 16,
        lineHeight: 1.95,
        letterSpacing: '0.06em',
        color: 'rgba(255,255,255,0.88)',
        maxWidth: 880,
      }}>
        当社では、交通誘導・駐車場・イベント警備など、幅広いニーズに対応したサービスを提供しています。<br />
        現場ごとに最適な警備体制をご提案いたしますので、まずはお気軽にお問い合わせください。
      </p>

    </div>
  </section>
);

export { ContactBanner };
