/* eslint-disable */
// Entry point — recruit.html（採用情報）
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createIcons, icons } from 'lucide';
import { Nav } from './components/Nav.jsx';
import { PageHero } from './components/PageHero.jsx';
import {
  RecruitIntro,
  PresidentMessage,
  SupportPolicy,
  ADay,
  Career,
  WantedProfile,
  ApplicationFlow,
} from './components/RecruitPage.jsx';
import { SalaryDetail, ApplyCTA } from './components/SalaryDetail.jsx';
import { Faq } from './components/Faq.jsx';
import { Footer } from './components/Footer.jsx';
import { MobileTabBar } from './components/MobileTabBar.jsx';
import { useReveal } from './components/Shared.jsx';

window.lucide = {
  createIcons: () => {
    try { createIcons({ icons }); } catch (e) { /* noop */ }
  },
};

const App = () => {
  useReveal();
  React.useEffect(() => {
    const tick = () => { if (window.lucide) window.lucide.createIcons(); };
    tick();
    const t1 = setTimeout(tick, 400);
    const t2 = setTimeout(tick, 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  return (
    <>
      <Nav current="recruit" />
      <main>
        <PageHero
          en="Recruit"
          jp={<>人材を大切にする<br /><span style={{ color: 'var(--brand-gold-dk)' }}>新しい警備会社</span></>}
          sub="やりがいを感じながら、長く働ける環境。未経験の方も安心してスタートいただけます。現在、警備スタッフを募集中。"
          scene="night"
          imgSrc="assets/recruit-hero.jpg?v=3"
          imgAlt="株式会社アクティブ 警備スタッフ"
        />
        <RecruitIntro />
        <PresidentMessage />
        <SupportPolicy />
        <ADay />
        <Career />
        <WantedProfile />
        <ApplicationFlow />
        <SalaryDetail />
        <ApplyCTA />
        <Faq />
      </main>
      <Footer />
      <MobileTabBar current="recruit" />
    </>
  );
};

createRoot(document.getElementById('root')).render(<App />);
