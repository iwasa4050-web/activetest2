/* eslint-disable */
import React from 'react';
import { SectionLabel, Photo } from './Shared.jsx';
// ServicesPage — dedicated /services.html content.
// Goes deeper than the homepage Services teaser: each service gets an editorial
// detail panel with photo, feature list, typical scenes, and approach notes.

const SERVICES_FULL = [
  {
    num: '01',
    en: 'TRAFFIC',
    sub: 'Traffic Guidance',
    jp: '交通誘導警備',
    scene: 'traffic',
    img: 'assets/service-traffic.jpg?v=4',
    imgAlt: '交通誘導警備 スタッフ',
    lead: '建築・土木・インフラ工事現場で、歩行者と車両の安全を守る。',
    body: '道路工事や建築現場、インフラ整備の現場では、絶えず人と車が行き交います。私たちは現場ごとに最適な配置と誘導動線を計画し、工事車両と一般通行の双方が安全にすれ違える環境を整えます。早朝・深夜帯の対応や、急な天候変化への対応にも柔軟に対応いたします。',
    features: [
      { label: '道路工事の交通誘導',     desc: '車線規制や片側交互通行時の安全な誘導。' },
      { label: 'インフラ・公共工事',     desc: '電力・水道・通信などの工事現場での歩行者保護。' },
      { label: '夜間・早朝対応',         desc: '視認性確保のための装備と人員配置を徹底。' },
      { label: '緊急時の判断と連絡',     desc: '想定外の事象にも、現場判断と本部連携で即応。' },
    ],
    scenes: ['住宅街の小規模工事', '幹線道路の車線規制', '電線・通信ケーブル敷設'],
  },
  {
    num: '02',
    en: 'PARKING',
    sub: 'Parking Security',
    jp: '駐車場警備',
    scene: 'facility',
    img: 'assets/service-parking.jpg?v=2',
    imgAlt: '駐車場警備 スタッフ',
    lead: '商業施設・オフィス・公共施設の駐車場で、円滑な誘導と防犯を担う。',
    body: '駐車場は、利用者にとって施設との「最初の接点」です。混雑時の入出庫の安全確保、車路での歩行者保護、不審者・不審車両への対応など、警備員一人ひとりの目配りと丁寧な案内が施設全体の印象を左右します。マナーよく、安全に。お客様の最初の出会いを心地よいものに整えます。',
    features: [
      { label: '商業施設の入出庫誘導',   desc: 'ピークタイムの混雑を見越した動線設計。' },
      { label: '満空管理',                desc: '満車・空車表示への連携、適切な案内。' },
      { label: '巡回・不審者対応',       desc: '駐車車両周辺の見回りと不審行動への警戒。' },
      { label: '接客マインド',           desc: '挨拶・身だしなみを徹底し、施設の顔として行動。' },
    ],
    scenes: ['ショッピングモール', 'オフィスビル', '自治体・公共施設'],
  },
  {
    num: '03',
    en: 'EVENT',
    sub: 'Event Security',
    jp: 'イベント警備',
    scene: 'event',
    img: 'assets/service-event.jpg?v=4',
    imgAlt: 'イベント警備 スタッフ',
    lead: '雑踏事故を未然に防ぎ、安心して楽しめる「特別なひととき」を支える。',
    body: '店舗のオープン、ライブ・スポーツイベント、地域の祭事まで、人が集まる場には必ず安全への配慮が欠かせません。事前の動線設計、当日の雑踏整理、緊急時の避難誘導まで、規模・特性に合わせた計画を立案。お客様が「安心して楽しめた」と感じられる時間をつくることが、私たちの目指す警備です。',
    features: [
      { label: '雑踏整理・誘導',         desc: '入退場のピークを想定した分散・誘導。' },
      { label: '会場内警備',             desc: 'ステージ・通路の動線確保と緊急時対応。' },
      { label: '店舗オープン・販促',     desc: '行列整理から開店前後の安全確保まで。' },
      { label: '関係各所との連携',       desc: '主催者・警察・消防との円滑な情報共有。' },
    ],
    scenes: ['ライブ・コンサート', '店舗グランドオープン', '地域の祭事・花火大会'],
  },
];

// ── Intro ──────────────────────────────────────────────────────────────────
const ServicesIntro = () => (
  <section style={{
    position: 'relative',
    padding: '140px 0 80px',
    background: 'var(--brand-cream)',
    overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute',
      right: -40, top: 60,
      fontFamily: 'var(--font-en-serif)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 'clamp(140px, 18vw, 260px)',
      lineHeight: 0.9,
      color: 'rgba(194, 154, 92, 0.12)',
      letterSpacing: '-0.02em',
      pointerEvents: 'none',
      userSelect: 'none',
    }}>
      Service
    </div>
    <div className="wrap" style={{ position: 'relative' }}>
      <SectionLabel en="サービス" jp="SERVICE ／ 私たちの警備業務" />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: 64,
        alignItems: 'flex-end',
      }}>
        <h2 className="reveal" style={{
          fontFamily: 'var(--font-jp-serif)',
          fontWeight: 500,
          fontSize: 'clamp(28px, 3.4vw, 44px)',
          lineHeight: 1.55,
          letterSpacing: '0.1em',
          color: 'var(--brand-blue)',
          margin: 0,
        }}>
          現場ごとに、<br />
          <span style={{ color: 'var(--brand-gold-dk)' }}>最適な警備</span>を。
        </h2>
        <p className="reveal delay-1 body-jp-soft" style={{ margin: 0, maxWidth: 480 }}>
          一口に「警備」といっても、求められる対応は現場ごとに大きく異なります。<br />
          交通誘導・駐車場・イベントの3分野を軸に、状況に応じた最適な体制をご提案いたします。
        </p>
      </div>
    </div>
  </section>
);

// ── Compact index strip ─────────────────────────────────────────────────────
const ServicesIndex = () => (
  <section style={{
    position: 'relative',
    padding: '0 0 100px',
    background: 'var(--brand-cream)',
  }}>
    <div className="wrap">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 1,
        background: 'var(--brand-line)',
        border: '1px solid var(--brand-line)',
      }}>
        {SERVICES_FULL.map((s) => (
          <a
            key={s.num}
            href={`#service-${s.num}`}
            className={`reveal`}
            style={{
              background: '#fff',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              transition: 'background 240ms var(--ease-default)',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-en-serif)',
              fontStyle: 'italic',
              fontSize: 14,
              letterSpacing: '0.32em',
              color: 'var(--brand-gold-dk)',
            }}>{s.num} · {s.en}</span>
            <span style={{
              fontFamily: 'var(--font-jp-serif)',
              fontWeight: 500,
              fontSize: 18,
              letterSpacing: '0.14em',
              color: 'var(--brand-blue)',
            }}>{s.jp}</span>
            <span style={{
              marginTop: 'auto',
              fontFamily: 'var(--font-en-sans)',
              fontSize: 10,
              letterSpacing: '0.28em',
              color: 'var(--brand-blue)',
            }}>READ MORE →</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// ── Per-service detail ─────────────────────────────────────────────────────
const ServiceDetail = ({ s, i }) => {
  const flip = i % 2 === 1;
  return (
    <section
      id={`service-${s.num}`}
      style={{
        position: 'relative',
        padding: '120px 0',
        background: i % 2 === 0 ? '#FFFFFF' : 'var(--blue-50)',
        overflow: 'hidden',
      }}
    >
      <div className="wrap" style={{
        display: 'grid',
        gridTemplateColumns: '0.95fr 1.05fr',
        gap: 80,
        alignItems: 'center',
      }}>
        {/* Photo block */}
        <div className="reveal" style={{ order: flip ? 2 : 1, position: 'relative' }}>
          <Photo scene={s.scene} imgSrc={s.img} imgAlt={s.imgAlt} height={520} />

          {/* Scenes badge */}
          <div style={{
            position: 'absolute',
            bottom: -28, right: flip ? 'auto' : -20, left: flip ? -20 : 'auto',
            background: '#FFFFFF',
            border: '1px solid var(--brand-line)',
            padding: '18px 22px',
            maxWidth: 320,
          }}>
            <div className="label-num" style={{ marginBottom: 10 }}>TYPICAL SCENES · 対応シーン</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {s.scenes.map((sc) => (
                <li key={sc} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  fontFamily: 'var(--font-jp-sans)',
                  fontSize: 15,
                  color: 'var(--brand-ink)',
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--brand-gold)' }} />
                  {sc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copy */}
        <div className="reveal delay-1" style={{ order: flip ? 1 : 2 }}>
          <div className="label-num" style={{ marginBottom: 12 }}>
            SERVICE · {s.sub.toUpperCase()}
          </div>
          <div style={{
            fontFamily: 'var(--font-en-serif)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(52px, 5.4vw, 84px)',
            lineHeight: 1,
            color: 'var(--brand-blue)',
            letterSpacing: '0.01em',
            marginBottom: 8,
          }}>
            {s.en}<span style={{ color: 'var(--brand-gold)' }}>.</span>
          </div>
          <h3 style={{
            fontFamily: 'var(--font-jp-serif)',
            fontWeight: 500,
            fontSize: 28,
            letterSpacing: '0.12em',
            color: 'var(--brand-blue)',
            margin: '0 0 20px',
          }}>{s.jp}</h3>

          <p className="reveal delay-2" style={{
            fontFamily: 'var(--font-jp-serif)',
            fontWeight: 500,
            fontSize: 'clamp(17px, 1.8vw, 22px)',
            lineHeight: 1.7,
            letterSpacing: '0.08em',
            color: 'var(--brand-gold-dk)',
            margin: '0 0 24px',
            maxWidth: 520,
          }}>
            {s.lead}
          </p>

          <p className="body-jp-soft" style={{ margin: '0 0 36px', maxWidth: 520 }}>
            {s.body}
          </p>

          {/* Features */}
          <div className="label-num" style={{ marginBottom: 16 }}>SCOPE · 主な対応</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {s.features.map((f, j) => (
              <li key={j} style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr',
                gap: 20,
                padding: '16px 0',
                borderTop: '1px solid var(--brand-line)',
                borderBottom: j === s.features.length - 1 ? '1px solid var(--brand-line)' : 'none',
                alignItems: 'baseline',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                  <span style={{
                    fontFamily: 'var(--font-en-serif)',
                    fontStyle: 'italic',
                    fontSize: 13,
                    letterSpacing: '0.24em',
                    color: 'var(--brand-gold-dk)',
                  }}>0{j + 1}</span>
                  <span style={{
                    fontFamily: 'var(--font-jp-serif)',
                    fontWeight: 500,
                    fontSize: 16,
                    letterSpacing: '0.1em',
                    color: 'var(--brand-blue)',
                  }}>{f.label}</span>
                </div>
                <span style={{
                  fontFamily: 'var(--font-jp-sans)',
                  fontSize: 15,
                  lineHeight: 1.85,
                  letterSpacing: '0.04em',
                  color: 'var(--brand-ink-soft)',
                }}>{f.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// ── Approach (signature commitments) ────────────────────────────────────────
const APPROACH = [
  { en: 'PLAN',     jp: '事前計画',     body: '現場特性・周辺環境・想定リスクを丁寧に確認し、最適な人員配置と動線計画を立てます。' },
  { en: 'TRAIN',    jp: '隊員教育',     body: '法定研修に加え、現場に応じた実践研修を実施。判断力と接遇マナーを磨き続けます。' },
  { en: 'EQUIP',    jp: '装備・連携',   body: '無線・誘導灯・反射装備など現場に応じた装備を整え、本部とリアルタイムで情報共有。' },
  { en: 'REPORT',   jp: '報告・改善',   body: '業務終了後は所感と発見事項を共有し、次回の警備計画に反映する仕組みを徹底。' },
];

const ServiceApproach = () => (
  <section style={{
    position: 'relative',
    padding: '140px 0',
    background: '#FFFFFF',
    overflow: 'hidden',
  }}>
    <div className="wrap">
      <SectionLabel en="警備の進め方" jp="OUR APPROACH ／ アプローチ" />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 0,
        border: '1px solid var(--brand-line)',
      }}>
        {APPROACH.map((a, i) => (
          <div key={a.en} className={`reveal delay-${(i % 4) + 1}`} style={{
            padding: '36px 28px',
            borderRight: i < 3 ? '1px solid var(--brand-line)' : 'none',
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            minHeight: 240,
          }}>
            <span style={{
              fontFamily: 'var(--font-en-serif)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 44,
              lineHeight: 1,
              color: 'var(--brand-blue)',
              letterSpacing: '0.02em',
            }}>0{i + 1}</span>
            <div style={{ width: 36, height: 1, background: 'var(--brand-gold)' }} />
            <span style={{
              fontFamily: 'var(--font-en-serif)',
              fontStyle: 'italic',
              fontSize: 13,
              letterSpacing: '0.32em',
              color: 'var(--brand-gold-dk)',
            }}>{a.en}</span>
            <h4 style={{
              fontFamily: 'var(--font-jp-serif)',
              fontWeight: 500,
              fontSize: 18,
              letterSpacing: '0.12em',
              color: 'var(--brand-blue)',
              margin: 0,
            }}>{a.jp}</h4>
            <p style={{
              fontFamily: 'var(--font-jp-sans)',
              fontSize: 15,
              lineHeight: 1.95,
              color: 'var(--brand-ink-soft)',
              margin: 0,
            }}>{a.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── Contact CTA banner ──────────────────────────────────────────────────────
const ServiceContactBanner = () => (
  <section style={{
    position: 'relative',
    padding: '96px 0',
    background: 'var(--brand-blue)',
    color: '#fff',
    overflow: 'hidden',
  }}>
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} preserveAspectRatio="none">
      <line x1="0" y1="92%" x2="100%" y2="14%" stroke="var(--brand-gold)" strokeWidth="1" opacity="0.3" />
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
          }}>CONTACT · 警備のご依頼</div>
          <h3 style={{
            fontFamily: 'var(--font-jp-serif)',
            fontWeight: 500,
            fontSize: 'clamp(24px, 2.8vw, 34px)',
            letterSpacing: '0.1em',
            color: '#fff',
            margin: 0,
          }}>
            現場のご相談から、<span style={{ color: 'var(--brand-gold)' }}>お気軽にどうぞ</span>。
          </h3>
        </div>
        <a href="index.html#contact" className="btn-active" style={{
          background: 'var(--brand-gold)',
          color: 'var(--brand-blue)',
        }}>
          <span>お問い合わせ</span>
          <span className="btn-arrow">→</span>
        </a>
      </div>
    </div>
  </section>
);

export {
  ServicesIntro,
  ServicesIndex,
  ServiceDetail,
  ServiceApproach,
  ServiceContactBanner,
  SERVICES_FULL,
};
