/* eslint-disable */
import React from 'react';
import { Photo, VCap } from './Shared.jsx';
// PageHero — compact hero for sub-pages (company.html, recruit.html).
// Same DNA as the main Hero but shorter, with breadcrumb.

const PageHero = ({ en, jp, sub, accent = '.', scene = 'facility', imgSrc, imgAlt, imgPosition = 'center top' }) => (
  <section style={{
    position: 'relative',
    minHeight: '70vh',
    paddingTop: 88,
    background: '#FFFFFF',
    overflow: 'hidden',
  }}>
    {/* grid hairlines */}
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} preserveAspectRatio="none">
      <line x1="0" y1="24%" x2="100%" y2="24%" stroke="var(--brand-line)" strokeWidth="1" />
      <line x1="0" y1="80%" x2="100%" y2="80%" stroke="var(--brand-line)" strokeWidth="1" />
      <line x1="62%" y1="0" x2="62%" y2="100%" stroke="var(--brand-line)" strokeWidth="1" />
    </svg>

    <VCap side="left" top="50%">
      ACTIVE · SECURITY · NARA
    </VCap>
    <div style={{
      position: 'absolute', right: 36, top: 120,
      writingMode: 'vertical-rl',
      fontFamily: 'var(--font-en-serif)',
      fontStyle: 'italic',
      fontSize: 12,
      letterSpacing: '0.4em',
      color: 'var(--brand-gold-dk)',
    }}>
      EST · 2026 · NARA · JAPAN
    </div>

    <div style={{
      position: 'relative',
      maxWidth: 1320,
      margin: '0 auto',
      padding: '88px 56px 64px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 80,
      alignItems: 'center',
      minHeight: 'calc(70vh - 88px)',
    }}>
      {/* LEFT */}
      <div>
        {/* breadcrumb */}
        <div className="eyebrow-en" style={{ marginBottom: 28 }}>
          <span>HOME · {en.toUpperCase()}</span>
        </div>

        {/* Huge English */}
        <div style={{
          fontFamily: 'var(--font-en-serif)',
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: 'clamp(56px, 7vw, 108px)',
          lineHeight: 0.96,
          letterSpacing: '0.01em',
          color: 'var(--brand-blue)',
          marginBottom: 12,
        }}>
          {en}<span style={{ color: 'var(--brand-gold)' }}>{accent}</span>
        </div>

        {/* JP */}
        <h1 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontWeight: 500,
          fontSize: 'clamp(28px, 3.4vw, 42px)',
          lineHeight: 1.55,
          letterSpacing: '0.1em',
          color: 'var(--brand-blue)',
          margin: 0,
        }}>
          {jp}
        </h1>

        {sub && (
          <p style={{
            marginTop: 28,
            maxWidth: 520,
            fontFamily: 'var(--font-jp-sans)',
            fontSize: 14,
            lineHeight: 2.0,
            letterSpacing: '0.06em',
            color: 'var(--brand-ink-soft)',
          }}>
            {sub}
          </p>
        )}
      </div>

      {/* RIGHT — Photo */}
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: 20, right: -20, bottom: -20, left: 20,
          border: '1px solid var(--brand-gold)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative' }}>
          <Photo scene={scene} imgSrc={imgSrc} imgAlt={imgAlt} imgPosition={imgPosition} height={460} label={`SCENE / ${en.toUpperCase()}`} />
        </div>
      </div>
    </div>
  </section>
);

export { PageHero };
