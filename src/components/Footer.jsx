/* eslint-disable */
import React from 'react';
import { Logo } from './Shared.jsx';
const PageTop = () => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{
      position: 'fixed',
      right: 28,
      bottom: 28,
      width: 52, height: 52,
      background: 'var(--brand-gold)',
      color: 'var(--brand-blue)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 2,
      zIndex: 900,
      opacity: show ? 1 : 0,
      pointerEvents: show ? 'auto' : 'none',
      transform: show ? 'translateY(0)' : 'translateY(12px)',
      transition: 'transform 320ms var(--ease-default), opacity 320ms var(--ease-default)',
    }}
    aria-label="Page top">
      <i data-lucide="arrow-up" style={{ width: 22, height: 22 }}></i>
    </a>
  );
};

const Footer = () => (
  <footer style={{
    position: 'relative',
    background: 'var(--brand-blue)',
    color: '#fff',
    padding: '96px 0 36px',
    overflow: 'hidden',
  }}>
    <div className="wrap" style={{ position: 'relative' }}>
      {/* Top — big mark */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: 64,
        alignItems: 'flex-start',
        paddingBottom: 64,
        borderBottom: '1px solid rgba(255,255,255,0.18)',
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-en-serif)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(64px, 9vw, 132px)',
            lineHeight: 0.95,
            color: '#fff',
            letterSpacing: '0.01em',
          }}>
            Active<span style={{ color: 'var(--brand-gold)' }}>.</span>
          </div>
          <div style={{
            marginTop: 16,
            fontFamily: 'var(--font-jp-serif)',
            fontWeight: 500,
            fontSize: 22,
            letterSpacing: '0.12em',
            color: 'var(--brand-gold)',
          }}>
            安全の情熱を、未来を拓く働きへ
          </div>
          <p style={{
            marginTop: 24,
            maxWidth: 460,
            fontFamily: 'var(--font-jp-sans)',
            fontSize: 15,
            lineHeight: 2.0,
            color: 'rgba(255,255,255,0.7)',
          }}>
            奈良に根ざし、交通誘導・駐車場・イベント警備まで対応する地域密着型警備会社です。
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-en-serif)',
              fontStyle: 'italic',
              fontSize: 13,
              letterSpacing: '0.32em',
              color: 'var(--brand-gold)',
              marginBottom: 16,
            }}>SITEMAP</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                ['index.html', 'TOP', 'トップ'],
                ['company.html', 'COMPANY', '会社概要'],
                ['services.html', 'SERVICE', 'サービス'],
                ['recruit.html', 'RECRUIT', '採用情報'],
                ['recruit.html#faq', 'FAQ', 'よくある質問'],
                ['index.html#contact', 'CONTACT', 'お問い合わせ'],
              ].map(([href, en, jp]) => (
                <li key={en}>
                  <a href={href} style={{
                    display: 'flex', alignItems: 'baseline', gap: 12,
                    color: 'rgba(255,255,255,0.8)',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-en-serif)',
                      fontStyle: 'italic',
                      fontSize: 14,
                      letterSpacing: '0.22em',
                      color: 'var(--brand-gold)',
                      minWidth: 76,
                    }}>{en}</span>
                    <span style={{
                      fontFamily: 'var(--font-jp-sans)',
                      fontSize: 15,
                      letterSpacing: '0.1em',
                    }}>{jp}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-en-serif)',
              fontStyle: 'italic',
              fontSize: 13,
              letterSpacing: '0.32em',
              color: 'var(--brand-gold)',
              marginBottom: 16,
            }}>CONTACT</div>
            <div style={{
              fontFamily: 'var(--font-jp-sans)',
              fontSize: 15,
              lineHeight: 2.0,
              color: 'rgba(255,255,255,0.8)',
            }}>
              〒630-8115<br />
              奈良県奈良市大宮町二丁目2番8号<br />
              中島第一ビル一階<br /><br />
              <span style={{ color: 'var(--brand-gold)' }}>採用に関するお問い合わせ</span><br />
              <a href="tel:07050178069" style={{ color: 'inherit', textDecoration: 'none' }}>070-5017-8069</a><br />
              <a href="mailto:saiyo@activenara.com" style={{ color: 'inherit', textDecoration: 'none' }}>saiyo@activenara.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 36,
        flexWrap: 'wrap',
        gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Logo size={40} mono={false} />
          <span style={{
            fontFamily: 'var(--font-en-sans)',
            fontSize: 13,
            letterSpacing: '0.22em',
            color: 'rgba(255,255,255,0.5)',
          }}>© 2026 ACTIVE CO., LTD. ALL RIGHTS RESERVED.</span>
        </div>
        <div style={{
          fontFamily: 'var(--font-en-serif)',
          fontStyle: 'italic',
          fontSize: 13,
          letterSpacing: '0.32em',
          color: 'var(--brand-gold)',
        }}>
          QUIET · DILIGENT · ACTIVE
        </div>
      </div>
    </div>

    {/* Page top */}
    <PageTop />
  </footer>
);

export { Footer };
