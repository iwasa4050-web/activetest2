/* eslint-disable */
// Entry point — services.html（サービス）
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createIcons, icons } from 'lucide';
import { Nav } from './components/Nav.jsx';
import { PageHero } from './components/PageHero.jsx';
import {
  ServicesIntro,
  ServicesIndex,
  ServiceDetail,
  ServiceApproach,
  ServiceContactBanner,
  SERVICES_FULL,
} from './components/ServicesPage.jsx';
import { Footer } from './components/Footer.jsx';
import { MobileTabBar } from './components/MobileTabBar.jsx';

window.lucide = {
  createIcons: () => {
    try { createIcons({ icons }); } catch (e) { /* noop */ }
  },
};

const App = () => {
  React.useEffect(() => {
    const tick = () => { if (window.lucide) window.lucide.createIcons(); };
    tick();
    const t1 = setTimeout(tick, 400);
    const t2 = setTimeout(tick, 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  return (
    <>
      <Nav current="services" />
      <main>
        <PageHero
          en="Service"
          jp="現場に応える、確かな警備"
          sub="交通誘導から駐車場・イベント警備まで。現場ごとに最適な警備体制をご提案します。"
          scene="guard"
          imgSrc="assets/service-hero.jpg"
          imgAlt="株式会社アクティブ 警備車両"
          imgPosition="center"
        />
        <ServicesIntro />
        <ServicesIndex />
        {SERVICES_FULL.map((s, i) => <ServiceDetail key={s.num} s={s} i={i} />)}
        <ServiceApproach />
        <ServiceContactBanner />
      </main>
      <Footer />
      <MobileTabBar current="services" />
    </>
  );
};

createRoot(document.getElementById('root')).render(<App />);
