/* eslint-disable */
import React from 'react';
import { SectionLabel, Photo } from './Shared.jsx';
// Company page — 理念 + 会社情報 + 業務内容

const COMPANY_TABLE = [
  { en: 'COMPANY',   jp: '会社名',              val: '株式会社　アクティブ' },
  { en: 'FOUNDED',   jp: '設立',                val: '2026年3月5日' },
  { en: 'ADDRESS',   jp: '本所在地',             val: '〒630-8115\n奈良県奈良市大宮町二丁目2番8号\n中島第一ビル一階' },
  { en: 'CAPITAL',   jp: '資本金',              val: '300万円' },
  { en: 'CEO',       jp: '代表取締役',           val: '坂本信也' },
  { en: 'STAFF',     jp: '従業員',              val: '15人' },
  { en: 'BUSINESS',  jp: '業務内容',            val: '交通誘導警備業務\n駐車場警備業務\nイベント警備業務' },
  { en: 'SECURITY',  jp: '警備業務',            val: '2号業務（交通誘導警備・高速道路規制業務）' },
  { en: 'AUTHORITY', jp: '認定をした公安委員会',  val: '奈良県公安委員会' },
  { en: 'LICENSE',   jp: '認定の番号',           val: '第64000415号' },
];

const SERVICE_BRIEF = [
  { num: '01', en: 'TRAFFIC',  jp: '交通誘導警備業務',   icon: 'traffic-cone',   body: '建築・土木工事や各種インフラ工事の現場で、安全な誘導を行います。' },
  { num: '02', en: 'PARKING',  jp: '駐車場警備業務',     icon: 'parking-circle', body: '商業施設・公共施設の駐車場で、円滑な誘導と防犯を担います。' },
  { num: '03', en: 'EVENT',    jp: 'イベント警備業務',   icon: 'users',          body: 'イベント会場での雑踏整理・誘導で、安心なひとときをお届けします。' },
];

const Philosophy = () => (
  <section id="philosophy" style={{
    position: 'relative',
    padding: '140px 0 120px',
    background: 'var(--brand-cream)',
    overflow: 'hidden',
  }}>
    {/* watermark */}
    <div style={{
      position: 'absolute',
      right: -30, top: 80,
      fontFamily: 'var(--font-jp-serif)',
      fontWeight: 500,
      fontSize: 'clamp(140px, 18vw, 260px)',
      lineHeight: 0.9,
      color: 'rgba(194, 154, 92, 0.14)',
      letterSpacing: '0.05em',
      pointerEvents: 'none',
      userSelect: 'none',
      whiteSpace: 'nowrap',
    }}>
      理念
    </div>

    <div className="wrap" style={{ position: 'relative' }}>
      <SectionLabel en="理念" jp="PHILOSOPHY ／ 私たちの考え" />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '0.8fr 1.2fr',
        gap: 80,
        alignItems: 'flex-start',
      }}>
        <div className="reveal">
          <div className="eyebrow-en" style={{ marginBottom: 24 }}>
            <span>Our Credo</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-jp-serif)',
            fontWeight: 500,
            fontSize: 'clamp(28px, 3.4vw, 42px)',
            lineHeight: 1.55,
            letterSpacing: '0.1em',
            color: 'var(--brand-blue)',
            margin: 0,
          }}>
            <span style={{ color: 'var(--brand-gold-dk)' }}>安全</span>の情熱を、<br />
            <span style={{ color: 'var(--brand-gold-dk)' }}>未来</span>を拓く働きへ
          </h2>
          <div style={{ marginTop: 32 }}>
            <Photo scene="portrait" imgSrc="assets/president.jpg" imgAlt="代表取締役 坂本信也" imgPosition="center top" height={300} label="ACTIVE / CEO" />
          </div>
        </div>

        <div className="reveal delay-2" style={{ marginTop: 'clamp(40px, 9vw, 140px)' }}>
          <p className="body-jp-soft" style={{ margin: '0 0 1.4em' }}>
            私たちは、警備という仕事を通じて、地域社会に「安心」と「信頼」を届けることを使命としています。
          </p>
          <p className="body-jp-soft" style={{ margin: '0 0 1.4em' }}>
            人々が安心して働けること。<br />
            安全に暮らせること。<br />
            何気ない日常を、当たり前に過ごせること。
          </p>
          <p className="body-jp-soft" style={{ margin: '0 0 1.4em' }}>
            その当たり前を支えているのが、私たちの仕事です。
          </p>
          <p className="body-jp-soft" style={{ margin: '0 0 1.4em' }}>
            一人ひとりの責任ある行動と、誠実な対応を大切にし、お客様・地域・仲間から信頼される存在であり続けます。
          </p>
          <p className="body-jp-soft" style={{ margin: 0 }}>
            <span style={{ color: 'var(--brand-blue)', fontWeight: 500 }}>これからも、警備の枠を超えて、人と街の未来に貢献できる企業を目指してまいります。</span>
          </p>
        </div>
      </div>
    </div>
  </section>
);

const CompanyInfo = () => (
  <section id="info" style={{
    position: 'relative',
    padding: '140px 0 120px',
    background: '#FFFFFF',
    overflow: 'hidden',
  }}>
    <div className="wrap" style={{ position: 'relative' }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 32,
        marginBottom: 56,
      }}>
        <SectionLabel en="会社情報" jp="COMPANY PROFILE ／ 概要" />
      </div>

      <div className="reveal" style={{ border: '1px solid var(--brand-line)' }}>
        <dl style={{ margin: 0 }}>
          {COMPANY_TABLE.map((r, i) => (
            <div key={r.en} style={{
              display: 'grid',
              gridTemplateColumns: '240px 1fr',
              gap: 24,
              padding: '24px 32px',
              borderBottom: i < COMPANY_TABLE.length - 1 ? '1px solid var(--brand-line)' : 'none',
              background: i % 2 === 0 ? '#fff' : 'var(--paper-3, #F5F7FB)',
            }}>
              <dt style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{
                  fontFamily: 'var(--font-en-serif)',
                  fontStyle: 'italic',
                  fontSize: 13,
                  letterSpacing: '0.32em',
                  color: 'var(--brand-gold-dk)',
                }}>{r.en}</span>
                <span style={{
                  fontFamily: 'var(--font-jp-serif)',
                  fontWeight: 500,
                  fontSize: 16,
                  letterSpacing: '0.18em',
                  color: 'var(--brand-blue)',
                }}>{r.jp}</span>
              </dt>
              <dd style={{
                margin: 0,
                fontFamily: 'var(--font-jp-sans)',
                fontSize: 16,
                lineHeight: 1.9,
                letterSpacing: '0.04em',
                color: 'var(--brand-ink)',
                whiteSpace: 'pre-line',
              }}>{r.val}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

const Certification = () => (
  <section id="certification" style={{
    position: 'relative',
    padding: '0 0 140px',
    background: '#FFFFFF',
  }}>
    <div className="wrap">
      <SectionLabel en="認定標章" jp="CERTIFICATION ／ 認定証" />
      <div className="reveal" style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img
          src="assets/certification.jpg"
          alt="株式会社アクティブ 認定標章"
          style={{
            maxWidth: '100%',
            width: 720,
            height: 'auto',
            display: 'block',
          }}
        />
      </div>
    </div>
  </section>
);

const BusinessBrief = () => (
  <section id="business" style={{
    position: 'relative',
    padding: '0 0 140px',
    background: '#FFFFFF',
  }}>
    <div className="wrap">
      <SectionLabel en="業務内容" jp="BUSINESS ／ 事業内容" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 0,
        border: '1px solid var(--brand-line)',
      }}>
        {SERVICE_BRIEF.map((s, i) => (
          <div key={s.num} className="reveal" style={{
            padding: '36px 28px',
            borderRight: i < SERVICE_BRIEF.length - 1 ? '1px solid var(--brand-line)' : 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            minHeight: 280,
            background: '#fff',
          }}>
            <div style={{
              width: 48, height: 48,
              border: '1px solid var(--brand-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--brand-blue)',
            }}>
              <i data-lucide={s.icon} style={{ width: 22, height: 22 }}></i>
            </div>
            <span className="label-num">{s.num} · {s.en}</span>
            <h3 style={{
              fontFamily: 'var(--font-jp-serif)',
              fontWeight: 500,
              fontSize: 19,
              letterSpacing: '0.12em',
              color: 'var(--brand-blue)',
              margin: 0,
            }}>{s.jp}</h3>
            <p style={{
              fontFamily: 'var(--font-jp-sans)',
              fontSize: 15,
              lineHeight: 1.95,
              color: 'var(--brand-ink-soft)',
              margin: 0,
            }}>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Recruit CTA banner for inside other pages
const RecruitBanner = () => (
  <section style={{
    position: 'relative',
    padding: '96px 0',
    background: 'var(--brand-blue)',
    color: '#fff',
    overflow: 'hidden',
  }}>
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} preserveAspectRatio="none">
      <line x1="0" y1="92%" x2="100%" y2="14%" stroke="var(--brand-gold)" strokeWidth="1" opacity="0.35" />
    </svg>
    <div className="wrap" style={{ position: 'relative' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 32,
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-en-serif)',
            fontStyle: 'italic',
            fontSize: 15,
            letterSpacing: '0.32em',
            color: 'var(--brand-gold)',
            marginBottom: 14,
          }}>RECRUIT · 採用情報</div>
          <h3 style={{
            fontFamily: 'var(--font-jp-serif)',
            fontWeight: 500,
            fontSize: 'clamp(24px, 2.8vw, 34px)',
            letterSpacing: '0.1em',
            color: '#fff',
            margin: 0,
          }}>
            やりがいを感じながら、<span style={{ color: 'var(--brand-gold)' }}>長く働ける環境</span>を。
          </h3>
        </div>
        <a href="recruit.html" className="btn-active" style={{
          background: 'var(--brand-gold)',
          color: 'var(--brand-blue)',
        }}>
          <span>求人情報を見る</span>
          <span className="btn-arrow">→</span>
        </a>
      </div>
    </div>
  </section>
);

export { Philosophy, CompanyInfo, Certification, BusinessBrief, RecruitBanner };
