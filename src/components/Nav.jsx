/* eslint-disable */
import React from 'react';
import { Logo } from './Shared.jsx';
// Floating nav — multi-page aware. Highlights current page; section links use
// the index.html anchor when invoked from elsewhere. Switches to a light
// (white-on-transparent) treatment when over the dark hero on index.html.

const NAV_ITEMS = [
{ en: 'TOP', jp: 'トップ', href: 'index.html', page: 'index' },
{ en: 'COMPANY', jp: '会社概要', href: 'company.html', page: 'company' },
{ en: 'SERVICE', jp: 'サービス', href: 'services.html', page: 'services' },
{ en: 'RECRUIT', jp: '採用情報', href: 'recruit.html', page: 'recruit' },
{ en: 'CONTACT', jp: 'お問い合わせ', href: 'index.html#contact', page: 'index' }];


const Nav = ({ current = 'index' }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Dark mode: nav sits transparent over a dark hero. Only index (and sub-page
  // PageHero) are white anyway, so dark mode activates only on index, pre-scroll.
  const dark = current === 'index' && !scrolled;

  // Color tokens used inside the nav
  const enColor = dark ? '#FFFFFF' : 'var(--brand-blue)';
  const enColorActive = dark ? 'var(--brand-gold)' : 'var(--brand-gold-dk)';
  const jpColor = dark ? 'rgba(255,255,255,0.6)' : 'var(--brand-ink-mute)';
  const brandColor = dark ? '#FFFFFF' : 'var(--brand-blue)';
  const subColor = dark ? 'rgba(255,255,255,0.6)' : 'var(--brand-ink-mute)';
  const ctaBg = dark ? 'var(--brand-gold)' : 'var(--brand-blue)';
  const ctaColor = dark ? 'var(--brand-blue)' : '#fff';
  const ctaDot = dark ? 'var(--brand-blue)' : 'var(--brand-gold)';

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      height: scrolled ? 64 : 88,
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.0)',
      backdropFilter: scrolled ? 'blur(16px) saturate(140%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(140%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--brand-line)' : '1px solid transparent',
      transition: 'all 320ms var(--ease-default), color 320ms var(--ease-default)'
    }}>
      <div className="wrap" style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand */}
        <a href="index.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
          <Logo size={48} mono={dark} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{
              fontFamily: 'var(--font-en-serif)',
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: 19,
              letterSpacing: '0.22em',
              color: brandColor,
              lineHeight: 1,
              transition: 'color 320ms var(--ease-default)'
            }}>ACTIVE</span>
            <span style={{
              fontFamily: 'var(--font-jp-serif)',
              fontSize: 9,
              letterSpacing: '0.32em',
              color: subColor,
              transition: 'color 320ms var(--ease-default)'
            }}>株式会社アクティブ</span>
          </div>
        </a>

        {/* Center nav */}
        <nav className="active-nav" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {NAV_ITEMS.map((item) => {
            const isActive = item.page === current && !item.href.includes('#');
            return (
              <a key={item.en} href={item.href} className={`nav-link${isActive ? ' is-active' : ''}`} style={{
                display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 5,
                position: 'relative',
                padding: '8px 0',
                whiteSpace: 'nowrap'
              }}>
                <span style={{
                  fontFamily: 'var(--font-en-serif)',
                  fontStyle: 'italic',
                  fontWeight: 600,
                  fontSize: 17,
                  letterSpacing: '0.16em',
                  color: isActive ? enColorActive : enColor,
                  transition: 'color 320ms var(--ease-default)'
                }}>{item.en}</span>
                <span className="nav-jp" style={{
                  fontFamily: 'var(--font-jp-sans)',
                  fontWeight: 500,
                  fontSize: 13,
                  letterSpacing: '0.18em',
                  color: jpColor,
                  whiteSpace: 'nowrap',
                  transition: 'color 320ms var(--ease-default)'
                }}>{item.jp}</span>
              </a>);

          })}
        </nav>

        {/* CTA */}
        <a href="index.html#contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          height: 44, padding: '0 22px',
          background: ctaBg,
          color: ctaColor,
          borderRadius: 2,
          fontFamily: 'var(--font-en-sans)',
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          transition: 'background 320ms var(--ease-default), color 320ms var(--ease-default)'
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: ctaDot }} />
          Contact
        </a>
      </div>
      <style>{`
        .nav-link::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -4px;
          width: 0;
          height: 2px;
          background: var(--brand-gold);
          transition: width 320ms var(--ease-default), left 320ms var(--ease-default);
        }
        .nav-link:hover::after,
        .nav-link.is-active::after { left: 0; width: 100%; }
        @media (max-width: 1180px) {
          .active-nav { gap: 16px !important; }
          .nav-jp { display: none !important; }
        }
        @media (max-width: 900px) {
          .active-nav { display: none !important; }
        }
      `}</style>
    </header>);

};

export { Nav };