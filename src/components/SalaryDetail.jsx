/* eslint-disable */
import React from 'react';
import { SectionLabel } from './Shared.jsx';
// Recruit page (continued) — 給料・待遇 詳細

const SALARY_DETAILS = [
  {
    section: '基本給与',
    en: 'WAGE',
    rows: [
      ['法定研修', '時給 1,100円 × 20h ＝ 22,000円（3日間 / 実働20時間）'],
      ['日給',      '日勤 10,000円〜 ／ 夜勤 12,500円〜'],
      ['勤務時間',  '日勤 8:00 〜 17:00\n夜勤 21:00 〜 翌6:00\n※現場により前後'],
      ['シフト',    '1週間ごとの自己申告制／週2回〜OK'],
    ],
  },
];

const PERKS_FULL = [
  { cat: 'BONUS',    icon: 'gift',          jp: '新人応援金',         desc: '5日勤務ごとに5,000円支給（最大10回／50,000円）※現金 or QUOカード選択可' },
  { cat: 'LICENCE',  icon: 'graduation-cap',jp: '資格取得支援',       desc: '警備関連資格は会社負担。eラーニング導入で自宅学習も可能。' },
  { cat: 'HOUSING',  icon: 'home',          jp: '寮完備',             desc: '大和郡山市・2K・リフォーム済。3ヶ月寮費無料／洗濯機・冷蔵庫支給／駐車場付き／家族・同棲OK。' },
  { cat: 'WAGE',     icon: 'wallet',        jp: '昇給・社会保険',     desc: '昇給制度／社会保険完備／健康診断（会社負担）／日払い・週払いOK。' },
  { cat: 'STYLE',    icon: 'scissors',      jp: '自由なスタイル',     desc: '髪型・ネイル・ピアス自由／マスク支給／防寒着貸与。' },
  { cat: 'COMMUTE',  icon: 'car-front',     jp: '通勤サポート',       desc: '事務所〜現場：交通費全額／自宅〜会社：一部支給。通勤車・自転車の無料貸与あり。' },
  { cat: 'GROW',     icon: 'arrow-up-right',jp: 'キャリア',           desc: '正社員登用制度／友達紹介制度／Wワーク・扶養内OK。' },
  { cat: 'GIFT',     icon: 'wheat',         jp: 'お米プレゼント',     desc: '採用者にお米2㎏プレゼント。在籍中は社員割引で格安購入可能。' },
];

const SalaryDetail = () => (
  <section style={{
    position: 'relative',
    padding: '120px 0',
    background: '#FFFFFF',
    overflow: 'hidden',
  }}>
    <div className="wrap">
      <SectionLabel en="給料・待遇" jp="WAGE & BENEFITS ／ 給与情報" />

      {SALARY_DETAILS.map((sec) => (
        <div key={sec.section} className="reveal" style={{
          marginBottom: 56,
          border: '1px solid var(--brand-line)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 16,
            padding: '24px 32px',
            background: 'var(--blue-50)',
            borderBottom: '1px solid var(--brand-line)',
          }}>
            <span style={{
              fontFamily: 'var(--font-en-serif)',
              fontStyle: 'italic',
              fontSize: 12,
              letterSpacing: '0.32em',
              color: 'var(--brand-gold-dk)',
            }}>{sec.en}</span>
            <span style={{
              fontFamily: 'var(--font-jp-serif)',
              fontWeight: 500,
              fontSize: 17,
              letterSpacing: '0.16em',
              color: 'var(--brand-blue)',
            }}>{sec.section}</span>
          </div>
          <dl style={{ margin: 0 }}>
            {sec.rows.map(([k, v], i) => (
              <div key={k} style={{
                display: 'grid',
                gridTemplateColumns: '220px 1fr',
                gap: 24,
                padding: '20px 32px',
                borderBottom: i < sec.rows.length - 1 ? '1px solid var(--brand-line)' : 'none',
              }}>
                <dt style={{
                  fontFamily: 'var(--font-jp-serif)',
                  fontWeight: 500,
                  fontSize: 14,
                  letterSpacing: '0.16em',
                  color: 'var(--brand-blue)',
                }}>{k}</dt>
                <dd style={{
                  margin: 0,
                  fontFamily: 'var(--font-jp-sans)',
                  fontSize: 14,
                  lineHeight: 1.9,
                  color: 'var(--brand-ink-soft)',
                  whiteSpace: 'pre-line',
                }}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}

      {/* Perks grid */}
      <div className="reveal" style={{ marginTop: 32 }}>
        <div className="label-num" style={{ marginBottom: 20 }}>BENEFITS · 福利厚生</div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 1,
          background: 'var(--brand-line)',
          border: '1px solid var(--brand-line)',
        }}>
          {PERKS_FULL.map((p, i) => (
            <div key={i} style={{
              background: '#fff',
              padding: '28px 28px',
              display: 'flex', gap: 20, alignItems: 'flex-start',
            }}>
              <div style={{
                width: 48, height: 48,
                border: '1px solid var(--brand-gold)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--brand-blue)',
                flexShrink: 0,
              }}>
                <i data-lucide={p.icon} style={{ width: 22, height: 22 }}></i>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: 'var(--font-en-serif)',
                  fontStyle: 'italic',
                  fontSize: 11,
                  letterSpacing: '0.32em',
                  color: 'var(--brand-gold-dk)',
                  marginBottom: 4,
                }}>{p.cat}</div>
                <div style={{
                  fontFamily: 'var(--font-jp-serif)',
                  fontWeight: 500,
                  fontSize: 15,
                  letterSpacing: '0.12em',
                  color: 'var(--brand-blue)',
                  marginBottom: 8,
                }}>{p.jp}</div>
                <div style={{
                  fontFamily: 'var(--font-jp-sans)',
                  fontSize: 12,
                  lineHeight: 1.85,
                  color: 'var(--brand-ink-soft)',
                }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="reveal" style={{
        marginTop: 32,
        textAlign: 'center',
        fontFamily: 'var(--font-jp-serif)',
        fontWeight: 500,
        fontSize: 'clamp(18px, 2vw, 22px)',
        letterSpacing: '0.18em',
        color: 'var(--brand-blue)',
      }}>
        ※安定勤務で<span style={{ color: 'var(--brand-gold-dk)' }}>月収 20〜40 万円</span>　／　週5・週6勤務の相談可
      </p>
    </div>
  </section>
);

// ── 応募CTA バナー ───────────────────────────────────────────────────────────
const ApplyCTA = () => (
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
            fontSize: 13,
            letterSpacing: '0.32em',
            color: 'var(--brand-gold)',
            marginBottom: 14,
          }}>ENTRY · 採用エントリー</div>
          <h3 style={{
            fontFamily: 'var(--font-jp-serif)',
            fontWeight: 500,
            fontSize: 'clamp(24px, 2.8vw, 34px)',
            letterSpacing: '0.1em',
            color: '#fff',
            margin: 0,
          }}>
            まずはお気軽に、<span style={{ color: 'var(--brand-gold)' }}>ご応募ください</span>。
          </h3>
        </div>
        <a href="#" className="btn-active" style={{
          background: 'var(--brand-gold)',
          color: 'var(--brand-blue)',
        }}>
          <span>応募はこちらから</span>
          <span className="btn-arrow">→</span>
        </a>
      </div>
    </div>
  </section>
);

export { SalaryDetail, ApplyCTA };
