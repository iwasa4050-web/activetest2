/* eslint-disable */
import React from 'react';
import { useReveal } from './Shared.jsx';
import { Nav } from './Nav.jsx';
import { Hero } from './Hero.jsx';
import { Marquee } from './Marquee.jsx';
import { About } from './About.jsx';
import { Reasons } from './Reasons.jsx';
import { Services } from './Services.jsx';
import { Recruit } from './Recruit.jsx';
import { ContactBanner } from './ContactBanner.jsx';
import { Contact } from './Contact.jsx';
import { Footer } from './Footer.jsx';
import { MobileTabBar } from './MobileTabBar.jsx';
// App — mounts everything, wires reveal observer, tweaks panel, lucide icons.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "navyGold",
  "headlineSize": 60,
  "showMarquee": false,
  "showWatermarks": true
}/*EDITMODE-END*/;

const PALETTES = {
  navyGold: {
    label: 'Navy × Yellow',
    blue: '#0B2552', blue2: '#2A58B0',
    gold: '#FFCD00', goldDk: '#7A6200',
    cream: '#FBF8F2', blue50: '#F4F7FC', blue100: '#E8EEF8',
  },
  royalSand: {
    label: 'Royal × Sand',
    blue: '#0F2A6D', blue2: '#345AD0',
    gold: '#D4B176', goldDk: '#9C7C3C',
    cream: '#FAF4E8', blue50: '#F2F5FC', blue100: '#E4E9F7',
  },
  oceanLight: {
    label: 'Ocean × Cream',
    blue: '#173B66', blue2: '#3E78B4',
    gold: '#CAB07A', goldDk: '#8E7338',
    cream: '#F8F4EB', blue50: '#EFF4F9', blue100: '#DEE7F0',
  },
  midnightBrass: {
    label: 'Midnight × Brass',
    blue: '#091A3D', blue2: '#1F4595',
    gold: '#B58A4C', goldDk: '#6E5021',
    cream: '#F4EFE3', blue50: '#F0F3FA', blue100: '#DCE4F2',
  },
};

// Local palette/tweak state. Replaces the dev-only useTweaks hook from
// tweaks-panel.jsx so this site can ship without that file.
const useLocalTweaks = (defaults) => {
  const [values, setValues] = React.useState(defaults);
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null
      ? keyOrEdits : { [keyOrEdits]: val };
    setValues((prev) => ({ ...prev, ...edits }));
  }, []);
  return [values, setTweak];
};

const App = () => {
  const [t, setTweak] = useLocalTweaks(TWEAK_DEFAULTS);
  useReveal();

  // Re-render lucide icons after mount + on any tweak change
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
    // Re-run after a brief delay in case React re-renders something
    const t1 = setTimeout(() => { if (window.lucide) window.lucide.createIcons(); }, 400);
    return () => clearTimeout(t1);
  }, [t]);

  // Handle hash anchor scroll after React has mounted all sections.
  // The browser tries to jump to #contact before our components render,
  // and images loading mid-flight keep moving the target. We override
  // the browser's scroll attempts (during settle), retarget every 120ms
  // until the position is stable, then do a final smooth scroll.
  React.useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;
    const id = hash.slice(1);
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';

    let lastTarget = -1;
    let stableCount = 0;
    let attempts = 0;
    let timerId = null;
    const navHeight = 88;
    const startedAt = Date.now();

    const settle = () => {
      const el = document.getElementById(id);
      attempts += 1;
      if (!el) {
        if (attempts < 80) timerId = setTimeout(settle, 100);
        return;
      }
      const top = Math.max(
        0,
        Math.round(el.getBoundingClientRect().top + window.scrollY - navHeight + 4)
      );
      // Snap instantly while we're still settling — avoids hash-jump
      // showing the user the wrong section mid-load.
      if (Math.abs(window.scrollY - top) > 8) {
        window.scrollTo(0, top);
      }
      if (top === lastTarget) {
        stableCount += 1;
      } else {
        lastTarget = top;
        stableCount = 0;
      }
      const elapsed = Date.now() - startedAt;
      // 4 stable readings (~480ms) OR 6 seconds elapsed → final smooth scroll
      if (stableCount >= 4 || elapsed > 6000) {
        window.scrollTo({ top, behavior: 'smooth' });
        return;
      }
      timerId = setTimeout(settle, 120);
    };

    timerId = setTimeout(settle, 80);
    // Also re-run once all images are loaded (most reliable layout state)
    const onLoad = () => { stableCount = 0; lastTarget = -1; if (!timerId) timerId = setTimeout(settle, 80); };
    window.addEventListener('load', onLoad);
    return () => {
      if (timerId) clearTimeout(timerId);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  // Apply palette to CSS variables
  React.useEffect(() => {
    const p = PALETTES[t.palette] || PALETTES.navyGold;
    const root = document.documentElement;
    root.style.setProperty('--brand-blue', p.blue);
    root.style.setProperty('--brand-blue-2', p.blue2);
    root.style.setProperty('--brand-gold', p.gold);
    root.style.setProperty('--brand-gold-dk', p.goldDk);
    root.style.setProperty('--brand-cream', p.cream);
    root.style.setProperty('--blue-50', p.blue50);
    root.style.setProperty('--blue-100', p.blue100);
  }, [t.palette]);

  return (
    <>
      <Nav current="index" />
      <main>
        <Hero />
        {t.showMarquee && (
          <Marquee items={[
            '安心できる未来を、当たり前に',
            'Quiet Strength. Active Trust.',
            '交通誘導・駐車場・イベント警備',
            'Active Security · Nara · 2026',
          ]} />
        )}
        <About />
        <Reasons />
        <Services />
        <Recruit />
        <ContactBanner />
        <Contact />
      </main>
      <Footer />
      <MobileTabBar current="" />
    </>
  );
};

export { App };
