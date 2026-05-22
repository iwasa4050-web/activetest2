/* eslint-disable */
import React from 'react';
// Shared primitives — placeholder photos drawn in SVG (cool blue, gold accent),
// section labels, scroll-reveal hook, decorative motifs.

// ---- Scroll reveal hook ----------------------------------------------------
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ---- Section label (Japanese bold heading + tiny eyebrow line) -------------
const SectionLabel = ({ en, jp, accent }) =>
<div className="sec-label reveal">
    <div className="sec-jp">{jp}</div>
    <div className="sec-en">
      {accent ?
    <>
          <span>{en.slice(0, en.length - accent.length)}</span>
          <span className="accent">{accent}</span>
        </> :

    en
    }
    </div>
  </div>;


// ---- Drawn photo placeholder ------------------------------------------------
// Renders a stylised "image": gradient field + abstract figure suggesting the
// scene (traffic guard, facility, event crowd). Looks intentional, not broken.
const Photo = ({ scene = 'guard', label, height = 520, width = '100%', radius = 2, imgSrc, imgAlt, imgPosition = 'center' }) => {
  // When a real photo is provided, render it instead of the SVG illustration
  if (imgSrc) {
    return (
      <div className="ph" style={{ width, height, borderRadius: radius, position: 'relative', overflow: 'hidden' }}>
        <img
          src={imgSrc}
          alt={imgAlt || label || ''}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: imgPosition,
            display: 'block',
          }}
        />
        {label && <div className="ph-label">{label}</div>}
      </div>
    );
  }
  const PALETTES = {
    guard: { sky: '#D8E3F2', mid: '#7A99DE', deep: '#0B2552', accent: '#C29A5C' },
    facility: { sky: '#EAF0F9', mid: '#9DAEC9', deep: '#133272', accent: '#C29A5C' },
    traffic: { sky: '#FBF8F2', mid: '#DEBE8A', deep: '#0B2552', accent: '#C29A5C' },
    event: { sky: '#E4ECF7', mid: '#4878D0', deep: '#0B2552', accent: '#C29A5C' },
    portrait: { sky: '#F4F7FC', mid: '#B3C4EA', deep: '#0B2552', accent: '#C29A5C' },
    night: { sky: '#1C4391', mid: '#0B2552', deep: '#061632', accent: '#DEBE8A' }
  };
  const p = PALETTES[scene] || PALETTES.guard;
  const id = React.useId();
  return (
    <div className="ph" style={{ width, height, borderRadius: radius }}>
      <svg className="bg" viewBox="0 0 800 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`g-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={p.sky} />
            <stop offset="60%" stopColor={p.mid} />
            <stop offset="100%" stopColor={p.deep} />
          </linearGradient>
          <linearGradient id={`f-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={p.deep} stopOpacity="0.9" />
            <stop offset="100%" stopColor={p.deep} />
          </linearGradient>
        </defs>
        <rect width="800" height="1000" fill={`url(#g-${id})`} />

        {/* Faint horizon line */}
        <line x1="0" y1="660" x2="800" y2="660" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <line x1="0" y1="740" x2="800" y2="700" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

        {scene === 'guard' &&
        <g>
            {/* baton glow */}
            <line x1="540" y1="100" x2="540" y2="900" stroke={p.accent} strokeWidth="3" opacity="0.55" />
            <circle cx="540" cy="100" r="22" fill={p.accent} opacity="0.85" />
            <circle cx="540" cy="100" r="40" fill={p.accent} opacity="0.18" />
            {/* silhouette guard */}
            <path d="M 250 1000 L 250 720 Q 250 660 290 660 L 360 660 Q 400 660 400 720 L 400 1000 Z" fill={`url(#f-${id})`} />
            <circle cx="325" cy="610" r="46" fill={`url(#f-${id})`} />
            <rect x="280" y="568" width="90" height="22" fill={p.accent} opacity="0.85" />
            {/* arm raised */}
            <path d="M 400 720 L 540 600 L 555 615 L 415 740 Z" fill={`url(#f-${id})`} />
          </g>
        }
        {scene === 'facility' &&
        <g>
            {/* windowed building */}
            <rect x="160" y="240" width="480" height="760" fill={`url(#f-${id})`} />
            {[...Array(10)].map((_, r) => [...Array(6)].map((_, c) =>
          <rect key={r + '-' + c} x={180 + c * 78} y={260 + r * 70} width="60" height="40" fill="#fff" opacity={(r + c) % 3 === 0 ? 0.35 : 0.12} />
          ))}
            <rect x="380" y="900" width="40" height="100" fill={p.accent} opacity="0.85" />
          </g>
        }
        {scene === 'traffic' &&
        <g>
            {/* road perspective */}
            <path d="M 0 1000 L 320 540 L 480 540 L 800 1000 Z" fill={p.deep} opacity="0.45" />
            <line x1="400" y1="540" x2="400" y2="1000" stroke="#fff" strokeWidth="4" strokeDasharray="30 24" opacity="0.7" />
            {/* cone */}
            <path d="M 600 820 L 640 920 L 560 920 Z" fill={p.accent} />
            <rect x="568" y="870" width="64" height="6" fill="#fff" />
            <path d="M 220 820 L 260 920 L 180 920 Z" fill={p.accent} />
            <rect x="188" y="870" width="64" height="6" fill="#fff" />
          </g>
        }
        {scene === 'event' &&
        <g>
            {/* crowd */}
            {[...Array(40)].map((_, i) => {
            const x = 40 + i % 10 * 78 + i % 3 * 12;
            const y = 760 + Math.floor(i / 10) * 60;
            return <circle key={i} cx={x} cy={y} r={18 + i % 3 * 4} fill={`url(#f-${id})`} opacity={0.55 + i % 4 * 0.1} />;
          })}
            {/* gold spotlight */}
            <path d="M 700 80 L 760 60 L 900 980 L 760 990 Z" fill={p.accent} opacity="0.22" />
          </g>
        }
        {scene === 'portrait' &&
        <g>
            {/* head & shoulders */}
            <rect x="0" y="0" width="800" height="1000" fill={p.sky} />
            <path d="M 200 1000 L 200 760 Q 200 680 260 660 L 540 660 Q 600 680 600 760 L 600 1000 Z" fill={`url(#f-${id})`} />
            <circle cx="400" cy="540" r="120" fill={`url(#f-${id})`} />
            <rect x="280" y="720" width="240" height="6" fill={p.accent} opacity="0.85" />
          </g>
        }
        {scene === 'night' &&
        <g>
            {/* night street with lamp */}
            <circle cx="600" cy="220" r="60" fill={p.accent} opacity="0.5" />
            <circle cx="600" cy="220" r="20" fill={p.accent} opacity="0.95" />
            <rect x="595" y="220" width="10" height="440" fill="rgba(255,255,255,0.2)" />
            {/* road */}
            <path d="M 0 1000 L 340 580 L 460 580 L 800 1000 Z" fill="#000" opacity="0.5" />
            <line x1="400" y1="600" x2="400" y2="1000" stroke={p.accent} strokeWidth="3" strokeDasharray="20 18" opacity="0.85" />
          </g>
        }
      </svg>
      {label && <div className="ph-label">{label}</div>}
    </div>);

};

// ---- Brand mark ------------------------------------------------------------
// Real logo image, displayed as a clean square. Falls back to the drawn shield
// if the image fails to load.
const Logo = ({ size = 28, mono = false }) => {
  const [errored, setErrored] = React.useState(false);
  if (errored) {
    const blue = mono ? 'currentColor' : '#0B2552';
    const gold = mono ? 'currentColor' : '#C29A5C';
    return (
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none" aria-hidden="true">
        <path d="M 30 4 L 54 14 L 54 32 Q 54 48 30 56 Q 6 48 6 32 L 6 14 Z" stroke={blue} strokeWidth="2" fill="none" />
        <path d="M 30 18 L 40 42 L 36 42 L 33.5 36 L 26.5 36 L 24 42 L 20 42 Z" fill={blue} />
        <path d="M 28 32 L 32 32 L 30 26 Z" fill={gold} />
      </svg>);

  }
  return (
    <span
      aria-label="株式会社アクティブ"
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        flexShrink: 0,
        lineHeight: 0,
      }}>
      <img
        src="assets/active-logo.png?v=3"
        alt="株式会社アクティブ"
        width={size}
        height={size}
        onError={() => setErrored(true)}
        style={{
          width: '112%',
          height: '112%',
          marginLeft: '-6%',
          marginTop: '-6%',
          objectFit: 'cover',
          display: 'block',
          // mono=true (over dark hero) — gently brighten/invert tonality of
          // the inner blue so it reads on navy
          filter: mono ? 'brightness(1.15) saturate(1.05)' : 'none'
        }} />
    </span>);
};

// ---- Vertical caption (signature device) -----------------------------------
const VCap = ({ children, side = 'left', top = '50%', color, opacity = 0.7 }) =>
<div style={{
  position: 'absolute',
  [side]: 36,
  top,
  transform: 'translateY(-50%)',
  writingMode: 'vertical-rl',
  fontFamily: 'var(--font-en-serif)',
  fontStyle: 'italic',
  fontSize: 12,
  letterSpacing: '0.4em',
  textTransform: 'uppercase',
  color: color || 'var(--brand-blue)',
  opacity,
  pointerEvents: 'none',
  whiteSpace: 'nowrap'
}}>
    {children}
  </div>;


export { useReveal, SectionLabel, Photo, Logo, VCap };