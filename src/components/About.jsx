/* eslint-disable */
import React from 'react';
import { SectionLabel, Photo } from './Shared.jsx';
// About — 当社について / 会社理念
// Editorial split: vertical Japanese-style label on the left, photo block,
// philosophy copy on the right. Pulls in the credo & a portrait-style block.

const About = () => (
  <section id="about" style={{
    position: 'relative',
    padding: '160px 0 140px',
    background: '#FFFFFF',
    overflow: 'hidden',
  }}>
    {/* Diagonal hairline through the section — signature motif */}
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.4 }} preserveAspectRatio="none">
      <line x1="0" y1="78%" x2="100%" y2="32%" stroke="var(--brand-gold)" strokeWidth="1" />
    </svg>

    <div className="wrap" style={{ position: 'relative' }}>
      <SectionLabel en="当社について" jp="ABOUT US ／ ACTIVEとは" />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: 80,
        alignItems: 'flex-start',
      }}>
        {/* LEFT — photo stack */}
        <div className="reveal" style={{ position: 'relative' }}>
          <Photo scene="facility" height={560} label="ACTIVE / SCENE 02" />
          <div style={{
            position: 'absolute',
            right: -36, bottom: -36,
            width: 220, height: 280,
            border: '1px solid var(--brand-gold)',
            background: '#fff',
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <div className="label-num">PHILOSOPHY · 理念</div>
              <div style={{
                fontFamily: 'var(--font-jp-serif)',
                fontWeight: 500,
                fontSize: 20,
                lineHeight: 1.6,
                letterSpacing: '0.1em',
                color: 'var(--brand-blue)',
                marginTop: 14,
              }}>
                安全の情熱を、<br />未来を拓く働きへ
              </div>
            </div>
            <div style={{
              fontFamily: 'var(--font-en-serif)',
              fontStyle: 'italic',
              fontSize: 13,
              letterSpacing: '0.32em',
              color: 'var(--brand-gold-dk)',
            }}>
              Quiet trust, every day.
            </div>
          </div>
        </div>

        {/* RIGHT — copy */}
        <div>
          <div className="eyebrow-en reveal" style={{ marginBottom: 18 }}>
            <span>Our Mission</span>
          </div>
          <h2 className="reveal delay-1" style={{
            fontFamily: 'var(--font-jp-serif)',
            fontWeight: 500,
            fontSize: 'clamp(28px, 3.2vw, 42px)',
            lineHeight: 1.5,
            letterSpacing: '0.08em',
            color: 'var(--brand-blue)',
            margin: 0,
          }}>
            すべてのお客様に、<br />
            <span style={{ color: 'var(--brand-gold-dk)' }}>安心</span>と
            <span style={{ color: 'var(--brand-gold-dk)' }}>安全</span>を。
          </h2>

          <div className="reveal delay-2" style={{ marginTop: 32 }}>
            <p className="body-jp-soft" style={{ margin: '0 0 1.4em' }}>
              私たちは、交通誘導・駐車場警備・イベント警備などを通じて、地域の安全と円滑な現場運営を支える警備会社です。
            </p>
            <p className="body-jp-soft" style={{ margin: '0 0 1.4em' }}>
              警備は、ただ立って見守る仕事ではありません。現場の状況を正確に判断し、人や車の流れを安全に導くことで、事故やトラブルを未然に防ぐ大切な役割があります。
            </p>
            <p className="body-jp-soft" style={{ margin: '0 0 1.4em' }}>
              だからこそ私たちは、「安心できる対応」と「信頼される警備」を常に心がけています。
            </p>
            <p className="body-jp-soft" style={{ margin: 0 }}>
              お客様・地域・働くスタッフ、関わるすべての人が安心できる環境をつくること。<span style={{ color: 'var(--brand-blue)', fontWeight: 500 }}>それが、私たちの使命です。</span>
            </p>
          </div>

          {/* Inline mini-stats / values */}
          <div className="reveal delay-3" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            marginTop: 48,
            border: '1px solid var(--brand-line)',
          }}>
            {[
              { en: 'TRUST',      jp: '信頼',     desc: '地域に根ざした誠実な対応' },
              { en: 'PRECISION',  jp: '正確',     desc: '現場ごとに最適な判断' },
              { en: 'CARE',       jp: '思いやり', desc: '人を大切にする姿勢' },
            ].map((v, i) => (
              <div key={i} style={{
                padding: '28px 24px',
                borderRight: i < 2 ? '1px solid var(--brand-line)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}>
                <span style={{
                  fontFamily: 'var(--font-en-serif)',
                  fontStyle: 'italic',
                  fontSize: 14,
                  letterSpacing: '0.32em',
                  color: 'var(--brand-gold-dk)',
                }}>0{i+1} · {v.en}</span>
                <span style={{
                  fontFamily: 'var(--font-jp-serif)',
                  fontWeight: 500,
                  fontSize: 22,
                  letterSpacing: '0.12em',
                  color: 'var(--brand-blue)',
                }}>{v.jp}</span>
                <span style={{
                  fontFamily: 'var(--font-jp-sans)',
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: 'var(--brand-ink-soft)',
                }}>{v.desc}</span>
              </div>
            ))}
          </div>

          <div className="reveal delay-4" style={{ marginTop: 40 }}>
            <a href="company.html" className="btn-active btn-ghost-blue" style={{ minWidth: 320 }}>
              <span>会社概要を見る</span>
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { About };
