/* eslint-disable */
import React from 'react';
// Recruit — compact banner on homepage. Big outlined English word + short JP
// message + single CTA to the full recruit page.

const Recruit = () => (
  <section id="recruit" style={{
    position: 'relative',
    padding: '120px 0',
    background: 'var(--brand-blue)',
    color: '#fff',
    overflow: 'hidden',
  }}>
    {/* Diagonal gold line */}
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} preserveAspectRatio="none">
      <line x1="0" y1="92%" x2="100%" y2="14%" stroke="var(--brand-gold)" strokeWidth="1" opacity="0.28" />
    </svg>

    <div className="wrap" style={{
      position: 'relative',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      {/* Big outlined English word, centered */}
      <div style={{ position: 'relative', display: 'inline-block', lineHeight: 1 }}>
        <span
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-en-serif)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(96px, 13vw, 180px)',
            lineHeight: 1,
            letterSpacing: '0.04em',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(194, 154, 92, 0.6)',
            display: 'block',
          }}
        >
          Recruit<span style={{ WebkitTextStroke: '1px var(--brand-gold)' }}>.</span>
        </span>

        {/* JP label sitting over the outline */}
        <span style={{
          position: 'absolute',
          left: '50%',
          top: '52%',
          transform: 'translate(-50%, -50%)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 16,
          fontFamily: 'var(--font-jp-serif)',
          fontWeight: 500,
          fontSize: 24,
          letterSpacing: '0.32em',
          color: '#FFFFFF',
          whiteSpace: 'nowrap',
        }}>
          <span style={{ width: 40, height: 1, background: 'var(--brand-gold)' }} />
          採用情報
        </span>
      </div>

      {/* Headline */}
      <h2 className="reveal" style={{
        marginTop: 36,
        fontFamily: 'var(--font-jp-serif)',
        fontWeight: 500,
        fontSize: 'clamp(22px, 2.4vw, 30px)',
        lineHeight: 1.75,
        letterSpacing: '0.12em',
        color: '#FFFFFF',
        margin: '36px 0 0',
      }}>
        当社は、<span style={{ color: 'var(--brand-gold)' }}>人材を大切にする</span><br />
        新しい警備会社です。
      </h2>

      <p className="reveal delay-1" style={{
        marginTop: 18,
        fontFamily: 'var(--font-jp-serif)',
        fontWeight: 500,
        fontSize: 'clamp(17px, 1.7vw, 22px)',
        letterSpacing: '0.2em',
        color: 'var(--brand-gold)',
      }}>
        — やりがいを感じながら —<br />
        長く働ける環境
      </p>

      <p className="reveal delay-2" style={{
        marginTop: 18,
        fontFamily: 'var(--font-jp-sans)',
        fontSize: 14,
        letterSpacing: '0.16em',
        color: 'rgba(255,255,255,0.78)',
      }}>
        現在、警備スタッフを募集しております
      </p>

      <a href="recruit.html" className="btn-active reveal delay-3" style={{
        marginTop: 40,
        background: 'var(--brand-gold)',
        color: 'var(--brand-blue)',
      }}>
        <span>求人情報を見る</span>
        <span className="btn-arrow">→</span>
      </a>
    </div>
  </section>
);

export { Recruit };
