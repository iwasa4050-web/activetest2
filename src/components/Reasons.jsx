/* eslint-disable */
import React from 'react';
import { SectionLabel } from './Shared.jsx';
// Reasons — 選ばれる4つの理由
// Editorial 2x2 grid with big serif numerals, gold underline, hover effect

const REASONS = [
  {
    num: '01',
    en: 'TAILORED',
    jp: 'オーダーメイドの対応',
    icon: 'sliders-horizontal',
    body: '現場によって、必要な警備の形は大きく異なります。交通量の多い道路工事、商業施設、イベント会場など、環境や状況が変われば求められる対応も変わります。お客様ごとの課題や現場状況を丁寧に確認し、それぞれに最適な警備体制をご提案します。',
  },
  {
    num: '02',
    en: 'LOCAL',
    jp: '地域密着のサービス',
    icon: 'map-pin',
    body: '私たちは、地域に根ざした警備会社として地元のお客様との信頼関係を大切にしています。地域の道路状況、人の流れ、時間帯ごとの特徴を理解しているからこそ、より安全でスムーズな警備対応が可能になります。急なご依頼やトラブル時にも迅速に対応します。',
  },
  {
    num: '03',
    en: 'TRAINING',
    jp: '実践的な教育プログラム',
    icon: 'graduation-cap',
    body: '「警備の品質は、“人”で決まる」私たちはそう考えています。未経験の方でも安心して現場に立てるよう、実践を重視した教育プログラムを導入しています。基本的な誘導方法から判断力・コミュニケーション・トラブル対応まで、実際の業務を想定した研修を実施しています。',
  },
  {
    num: '04',
    en: 'EQUIPMENT',
    jp: '多種多様な設備',
    icon: 'hard-hat',
    body: '安全で円滑な警備を行うためには、スタッフの対応力だけでなく、設備や環境づくりも重要です。無線機器や誘導灯、安全装備はもちろん、現場状況に応じた柔軟な運用体制を構築。イベント警備・交通誘導・駐車場警備など、幅広いニーズに対応可能です。',
  },
];

const Reasons = () => (
  <section id="reasons" style={{
    position: 'relative',
    padding: '160px 0 140px',
    background: 'var(--blue-50)',
    overflow: 'hidden',
  }}>
    {/* big watermark word */}
    <div style={{
      position: 'absolute',
      right: -60, top: 80,
      fontFamily: 'var(--font-en-serif)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 'clamp(180px, 22vw, 320px)',
      lineHeight: 0.9,
      color: '#fff',
      opacity: 0.65,
      letterSpacing: '-0.03em',
      pointerEvents: 'none',
      userSelect: 'none',
    }}>
      Reasons
    </div>

    <div className="wrap" style={{ position: 'relative' }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 64,
        flexWrap: 'wrap',
        gap: 32,
      }}>
        <div>
          <SectionLabel en="選ばれる理由" jp="REASONS ／ 4つの理由" />
          <p className="reveal delay-1" style={{
            fontFamily: 'var(--font-jp-serif)',
            fontWeight: 500,
            fontSize: 'clamp(24px, 2.6vw, 34px)',
            lineHeight: 1.55,
            letterSpacing: '0.08em',
            color: 'var(--brand-blue)',
            margin: 0,
            maxWidth: 720,
          }}>
            人と街の安心を、<br />
            ひとつひとつ積み上げる。
          </p>
        </div>
        <div className="reveal delay-2" style={{
          maxWidth: 380,
          fontFamily: 'var(--font-jp-sans)',
          fontSize: 16,
          lineHeight: 2.0,
          letterSpacing: '0.04em',
          color: 'var(--brand-ink-soft)',
        }}>
          現場ごとの個別対応、地元への深い理解、丁寧な人材育成、確かな設備。<br />
          四つの柱が、株式会社アクティブの警備を支えています。
        </div>
      </div>

      {/* 2x2 grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 1,
        background: 'var(--brand-line)',
        border: '1px solid var(--brand-line)',
      }}>
        {REASONS.map((r, i) => (
          <article
            key={r.num}
            className={`reason-card reveal delay-${(i % 4) + 1}`}
            style={{
              background: '#fff',
              padding: '48px 44px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              transition: 'background 320ms var(--ease-default)',
              minHeight: 320,
              cursor: 'default',
            }}
          >
            {/* Top row: num + icon */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{
                  fontFamily: 'var(--font-en-serif)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 64,
                  lineHeight: 1,
                  letterSpacing: '0.02em',
                  color: 'var(--brand-blue)',
                }}>{r.num}</span>
                <span style={{
                  fontFamily: 'var(--font-en-serif)',
                  fontStyle: 'italic',
                  fontSize: 14,
                  letterSpacing: '0.36em',
                  color: 'var(--brand-gold-dk)',
                }}>{r.en}</span>
              </div>
              <div style={{
                width: 60, height: 60,
                border: '1px solid var(--brand-gold)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--brand-blue)',
              }}>
                <i data-lucide={r.icon} style={{ width: 26, height: 26 }}></i>
              </div>
            </div>

            <div style={{
              height: 1,
              background: 'var(--brand-gold)',
              width: 56,
              transition: 'width 480ms var(--ease-default)',
            }} className="r-line" />

            <h3 style={{
              fontFamily: 'var(--font-jp-serif)',
              fontWeight: 500,
              fontSize: 24,
              letterSpacing: '0.1em',
              color: 'var(--brand-blue)',
              margin: 0,
            }}>{r.jp}</h3>

            <p style={{
              fontFamily: 'var(--font-jp-sans)',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 2.0,
              letterSpacing: '0.04em',
              color: 'var(--brand-ink-soft)',
              margin: 0,
            }}>{r.body}</p>
          </article>
        ))}
      </div>
    </div>
    <style>{`
      .reason-card:hover { background: var(--gold-50); }
      .reason-card:hover .r-line { width: 120px; }
    `}</style>
  </section>
);

export { Reasons };
