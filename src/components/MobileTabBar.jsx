/* eslint-disable */
import React from 'react';
// MobileTabBar — fixed bottom navigation, mobile only (<=760px).
// 4 tabs: 会社概要 / サービス / 求人情報 / お問い合わせ

const MOBILE_TABS = [
  { jp: '会社概要',    en: 'COMPANY', icon: 'building-2',  href: 'company.html',          page: 'company' },
  { jp: 'サービス',    en: 'SERVICE', icon: 'shield-check', href: 'services.html',         page: 'services' },
  { jp: '求人情報',    en: 'RECRUIT', icon: 'user-plus',   href: 'recruit.html',          page: 'recruit' },
  { jp: 'お問い合わせ', en: 'CONTACT', icon: 'mail',        href: 'index.html#contact',    page: 'contact' },
];

const MobileTabBar = ({ current = '' }) => {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);

  return (
    <nav className="mobile-tabbar" aria-label="モバイルナビゲーション">
      {MOBILE_TABS.map((t) => {
        const isActive = t.page === current;
        return (
          <a
            key={t.en}
            href={t.href}
            className={`mtab${isActive ? ' is-active' : ''}`}
            aria-current={isActive ? 'page' : undefined}
          >
            <i data-lucide={t.icon} className="mtab-icon"></i>
            <span className="mtab-jp">{t.jp}</span>
          </a>
        );
      })}
      <style>{`
        .mobile-tabbar { display: none; }
        @media (max-width: 760px) {
          .mobile-tabbar {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            position: fixed;
            left: 0; right: 0; bottom: 0;
            z-index: 950;
            background: var(--brand-gold);
            border-top: 2px solid var(--brand-blue);
            padding-bottom: env(safe-area-inset-bottom, 0);
            box-shadow: 0 -8px 28px rgba(11, 37, 82, 0.28);
            /* Belt and braces: ensure the bar receives taps */
            pointer-events: auto;
          }
          .mtab {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 6px;
            padding: 14px 4px 12px;
            min-height: 64px;
            color: var(--brand-blue);
            text-decoration: none;
            position: relative;
            cursor: pointer;
            user-select: none;
            -webkit-user-select: none;
            -webkit-tap-highlight-color: rgba(11, 37, 82, 0.15);
            touch-action: manipulation;
            transition: color 240ms var(--ease-default), background 180ms var(--ease-default);
          }
          /* Children must not intercept the tap on the parent <a>. */
          .mtab > * { pointer-events: none; }
          .mtab:active { background: rgba(11, 37, 82, 0.12); }
          .mtab.is-active {
            color: #FFFFFF;
            background: var(--brand-blue);
          }
          .mtab.is-active:active { background: var(--blue-1000, #061632); }
          .mtab.is-active::before {
            content: "";
            position: absolute;
            top: 0; left: 16%; right: 16%;
            height: 3px;
            background: var(--brand-gold);
          }
          .mtab-icon { width: 26px; height: 26px; stroke-width: 2.2; }
          .mtab-jp {
            font-family: var(--font-jp-sans);
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.06em;
            line-height: 1;
            white-space: nowrap;
          }
          /* Lift the floating "scroll to top" arrow above the tab bar */
          a[aria-label="Page top"] {
            bottom: calc(96px + env(safe-area-inset-bottom, 0)) !important;
            right: 16px !important;
          }
          /* Hide the top-right "CONTACT" CTA on mobile — replaced by tab bar */
          header a[href="index.html#contact"][style*="height: 44px"] {
            display: none !important;
          }
          /* Body bottom padding so content isn't hidden behind the bar */
          body { padding-bottom: calc(96px + env(safe-area-inset-bottom, 0)); }
        }
      `}</style>
    </nav>
  );
};

export { MobileTabBar };
