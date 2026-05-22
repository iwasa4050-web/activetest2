/* eslint-disable */
import React from 'react';
// Tagline marquee — runs between sections to add motion / pop

const Marquee = ({ items, accent = 'gold' }) => {
  const row = (
    <>
      {items.map((it, i) => (
        <span key={i} className="marquee-item">
          {it}
          <span className="dot" />
        </span>
      ))}
    </>
  );
  return (
    <div className="marquee" style={{
      padding: '40px 0',
      borderTop: '1px solid var(--brand-line)',
      borderBottom: '1px solid var(--brand-line)',
      background: 'var(--brand-paper)',
    }}>
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
};

export { Marquee };
