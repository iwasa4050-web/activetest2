/* eslint-disable */
// Entry point — company.html（会社概要）
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createIcons, icons } from 'lucide';
import { useReveal } from './components/Shared.jsx';
import { Nav } from './components/Nav.jsx';
import { PageHero } from './components/PageHero.jsx';
import { Philosophy, CompanyInfo, Certification, BusinessBrief, RecruitBanner } from './components/CompanyPage.jsx';
import { Footer } from './components/Footer.jsx';
import { MobileTabBar } from './components/MobileTabBar.jsx';

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
    return () => clearTimeout(t1);
  }, []);
  return (
    <>
      <Nav current="company" />
      <main>
        <PageHero
          en="Company"
          jp="株式会社アクティブのご案内"
          sub="奈良に根ざし、地域の安全と円滑な現場運営を支える警備会社です。会社概要・理念・業務内容をご紹介します。"
          scene="facility"
          imgSrc="assets/company-hero.jpg"
          imgAlt="株式会社アクティブ 事務所外観"
          imgPosition="center"
        />
        <Philosophy />
        <CompanyInfo />
        <Certification />
        <BusinessBrief />
        <RecruitBanner />
      </main>
      <Footer />
      <MobileTabBar current="company" />
    </>
  );
};

createRoot(document.getElementById('root')).render(<App />);
