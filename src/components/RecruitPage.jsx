/* eslint-disable */
import React from 'react';
import { SectionLabel, Photo } from './Shared.jsx';
// Recruit page sections — 社長の想い, 取り組み, 1日の流れ, キャリア, 給料・待遇

// ── Main message ────────────────────────────────────────────────────────────
const RecruitIntro = () => (
  <section style={{
    position: 'relative',
    padding: '140px 0 100px',
    background: 'var(--brand-cream)',
    overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute',
      right: -50, top: 60,
      fontFamily: 'var(--font-en-serif)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 'clamp(150px, 18vw, 260px)',
      lineHeight: 0.9,
      color: 'rgba(194, 154, 92, 0.13)',
      letterSpacing: '-0.02em',
      pointerEvents: 'none',
      userSelect: 'none',
    }}>
      Join.
    </div>
    <div className="wrap" style={{ position: 'relative' }}>
      <SectionLabel en="採用メッセージ" jp="MESSAGE ／ ごあいさつ" />
      <h2 className="reveal" style={{
        fontFamily: 'var(--font-jp-serif)',
        fontWeight: 500,
        fontSize: 'clamp(32px, 4vw, 56px)',
        lineHeight: 1.55,
        letterSpacing: '0.1em',
        color: 'var(--brand-blue)',
        margin: 0,
        maxWidth: 1000,
      }}>
        <span style={{ color: 'var(--brand-gold-dk)' }}>人材を大切に</span>して、<br />
        やりがいを持って働ける場所。
      </h2>
    </div>
  </section>
);

// ── 社長の想い ──────────────────────────────────────────────────────────────
const PresidentMessage = () => (
  <section style={{
    position: 'relative',
    padding: '120px 0 100px',
    background: '#FFFFFF',
    overflow: 'hidden',
  }}>
    <div className="wrap" style={{ position: 'relative' }}>
      <SectionLabel en="社長の想い" jp="PRESIDENT MESSAGE ／ 代表メッセージ" />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '0.85fr 1.15fr',
        gap: 64,
        alignItems: 'flex-start',
      }}>
        <div className="reveal">
          <Photo scene="portrait" imgSrc="assets/president.jpg" imgAlt="代表取締役 坂本信也" imgPosition="center top" height={520} label="CEO / 坂本信也" />
          <div style={{
            marginTop: 20,
            display: 'flex', flexDirection: 'column', gap: 6,
          }}>
            <span style={{
              fontFamily: 'var(--font-en-serif)',
              fontStyle: 'italic',
              fontSize: 12,
              letterSpacing: '0.32em',
              color: 'var(--brand-gold-dk)',
              whiteSpace: 'nowrap',
            }}>CEO · 代表取締役</span>
            <span style={{
              fontFamily: 'var(--font-jp-serif)',
              fontWeight: 500,
              fontSize: 22,
              letterSpacing: '0.18em',
              color: 'var(--brand-blue)',
              whiteSpace: 'nowrap',
            }}>坂本 信也</span>
          </div>
        </div>

        <div className="reveal delay-1">
          <div className="eyebrow-en" style={{ marginBottom: 18 }}>
            <span>Voice from the CEO</span>
          </div>
          <h3 style={{
            fontFamily: 'var(--font-jp-serif)',
            fontWeight: 500,
            fontSize: 'clamp(22px, 2.4vw, 32px)',
            lineHeight: 1.65,
            letterSpacing: '0.1em',
            color: 'var(--brand-blue)',
            margin: 0,
          }}>
            社会にとって必要な仕事だからこそ、<br />
            <span style={{ color: 'var(--brand-gold-dk)' }}>皆さんが働きやすい場所</span>を作っています。
          </h3>

          <div style={{ marginTop: 28 }}>
            <p className="body-jp-soft" style={{ margin: '0 0 1.4em' }}>
              警備の仕事は、人や街の安全を支える大切な仕事です。しかしその一方で、「大変そう」「厳しそう」というイメージを持たれることも少なくありません。
            </p>
            <p className="body-jp-soft" style={{ margin: '0 0 1.4em' }}>
              だからこそ私たちは、働くスタッフ一人ひとりが安心して長く働ける環境づくりを大切にしています。
            </p>
            <p className="body-jp-soft" style={{ margin: '0 0 1.4em' }}>
              未経験の方でも安心してスタートできる教育体制。<br />
              困った時に相談しやすいチーム環境。<br />
              無理なく働ける現場づくり。
            </p>
            <p className="body-jp-soft" style={{ margin: '0 0 1.4em' }}>
              ただ単に人を増やすのではなく、<span style={{ color: 'var(--brand-blue)', fontWeight: 500 }}>「ここで働いて良かった」</span>と思ってもらえる会社を目指しています。
            </p>
            <p className="body-jp-soft" style={{ margin: 0 }}>
              警備は、決して一人で行う仕事ではありません。仲間と支え合いながら、人の安心を守る仕事です。これからも地域社会に必要とされる企業として、働く人にとっても誇れる環境をつくり続けていきます。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ── 取り組み ────────────────────────────────────────────────────────────────
const SUPPORT = [
  { num: '01', en: 'FLEXIBLE',  jp: '無理なく働ける柔軟な勤務体制', icon: 'calendar-clock',
    body: '希望休や勤務日数の相談にも柔軟に対応し、一人ひとりの生活スタイルに合わせて無理なく働ける環境を整えています。' },
  { num: '02', en: 'CARE',      jp: '身体負担を軽減するサポート', icon: 'heart-pulse',
    body: '空調服や防寒具の支給、こまめな休憩体制など、警備員の身体的負担を少しでも軽減できるようサポートしています。' },
  { num: '03', en: 'REWARD',    jp: '給料・待遇面の充実', icon: 'wallet',
    body: '各種手当や日給保証制度を整え、頑張った分がしっかり還元される安心の待遇環境を用意しています。' },
  { num: '04', en: 'TEAM',      jp: '明るい雰囲気の職場', icon: 'users',
    body: '未経験の方でも安心して働けるよう、スタッフ同士が声を掛け合いながら助け合える明るい職場づくりを大切にしています。' },
];

const SupportPolicy = () => (
  <section style={{
    position: 'relative',
    padding: '120px 0',
    background: 'var(--blue-50)',
    overflow: 'hidden',
  }}>
    <div className="wrap">
      <SectionLabel en="安心して働ける取り組み" jp="SUPPORT ／ 当社の取り組み" />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 1,
        background: 'var(--brand-line)',
        border: '1px solid var(--brand-line)',
      }}>
        {SUPPORT.map((s, i) => (
          <article key={s.num} className={`reveal delay-${(i % 4) + 1} reason-card`} style={{
            background: '#fff',
            padding: '40px 36px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            minHeight: 260,
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{
                  fontFamily: 'var(--font-en-serif)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 52,
                  lineHeight: 1,
                  color: 'var(--brand-blue)',
                }}>{s.num}</span>
                <span style={{
                  fontFamily: 'var(--font-en-serif)',
                  fontStyle: 'italic',
                  fontSize: 11,
                  letterSpacing: '0.32em',
                  color: 'var(--brand-gold-dk)',
                }}>{s.en}</span>
              </div>
              <div style={{
                width: 48, height: 48,
                border: '1px solid var(--brand-gold)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--brand-blue)',
              }}>
                <i data-lucide={s.icon} style={{ width: 22, height: 22 }}></i>
              </div>
            </div>
            <div className="r-line" style={{ height: 1, width: 56, background: 'var(--brand-gold)' }} />
            <h3 style={{
              fontFamily: 'var(--font-jp-serif)',
              fontWeight: 500,
              fontSize: 20,
              letterSpacing: '0.1em',
              color: 'var(--brand-blue)',
              margin: 0,
            }}>{s.jp}</h3>
            <p style={{
              fontFamily: 'var(--font-jp-sans)',
              fontSize: 13,
              lineHeight: 1.95,
              color: 'var(--brand-ink-soft)',
              margin: 0,
            }}>{s.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// ── 1日の流れ (Day) ────────────────────────────────────────────────────────
const DAY_SHIFTS = {
  day: {
    label: '日勤',
    range: '8:00 – 17:00',
    items: [
      { time: '08:00', jp: '現場集合・朝礼・業務開始', desc: '当日の現場確認や注意事項の共有を行い、1日の業務をスタート。' },
      { time: '09:00', jp: '午前の警備業務',       desc: '工事車両や歩行者の誘導を行い、安全に現場が進行できるよう対応。' },
      { time: '12:00', jp: '昼休憩',             desc: 'しっかり休憩を取り、午後の業務に備えます。' },
      { time: '13:00', jp: '午後の警備業務',     desc: '現場状況を確認しながら、引き続き交通誘導や安全確認。' },
      { time: '17:00', jp: '業務終了・解散',     desc: '片付けや報告を行い、その日の業務終了。' },
    ],
  },
  night: {
    label: '夜勤',
    range: '21:00 – 翌6:00',
    items: [
      { time: '21:00', jp: '現場集合・業務開始', desc: '夜間工事の内容や危険箇所を確認し、警備業務を開始。' },
      { time: '22:00', jp: '交通誘導・巡回対応', desc: '工事車両や一般車両の安全確認を行いながら現場周辺を警備。' },
      { time: '02:00', jp: '休憩',               desc: '交代しながら休憩を取り、集中力を維持します。' },
      { time: '03:00', jp: '後半業務開始',       desc: '工事終了まで安全第一で警備業務を継続。' },
      { time: '06:00', jp: '業務終了・解散',     desc: '片付けや最終確認を行い、業務終了。' },
    ],
  },
};

const ADay = () => {
  const [tab, setTab] = React.useState('day');
  const shift = DAY_SHIFTS[tab];
  const timelineRef = React.useRef(null);
  React.useEffect(() => {
    if (!timelineRef.current) return;
    timelineRef.current.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'));
  }, [tab]);
  return (
    <section style={{
      position: 'relative',
      padding: '120px 0',
      background: '#FFFFFF',
      overflow: 'hidden',
    }}>
      <div className="wrap">
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 32,
          marginBottom: 48,
        }}>
          <SectionLabel en="1日の流れ" jp="A DAY ／ 1日のスケジュール" />

          {/* Tabs */}
          <div style={{
            display: 'inline-flex',
            background: 'var(--blue-50)',
            border: '1px solid var(--brand-line)',
            padding: 4,
          }}>
            {Object.entries(DAY_SHIFTS).map(([k, v]) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                style={{
                  background: tab === k ? 'var(--brand-blue)' : 'transparent',
                  color: tab === k ? '#fff' : 'var(--brand-blue)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '12px 28px',
                  fontFamily: 'var(--font-jp-serif)',
                  fontWeight: 500,
                  fontSize: 14,
                  letterSpacing: '0.18em',
                  transition: 'background 240ms var(--ease-default), color 240ms var(--ease-default)',
                }}
              >
                {v.label} <span style={{
                  fontFamily: 'var(--font-en-serif)',
                  fontStyle: 'italic',
                  fontSize: 11,
                  letterSpacing: '0.18em',
                  marginLeft: 8,
                  color: tab === k ? 'var(--brand-gold)' : 'var(--brand-ink-mute)',
                }}>{v.range}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            left: 80, top: 12, bottom: 12,
            width: 1,
            background: 'var(--brand-line)',
          }} />
          {shift.items.map((d, i) => (
            <div key={d.time} className="reveal" style={{
              display: 'grid',
              gridTemplateColumns: '160px 1fr',
              gap: 24,
              alignItems: 'flex-start',
              padding: '28px 0',
              borderBottom: i < shift.items.length - 1 ? '1px solid var(--brand-line)' : 'none',
              position: 'relative',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 24, position: 'relative' }}>
                <span style={{
                  fontFamily: 'var(--font-en-serif)',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  fontSize: 32,
                  lineHeight: 1,
                  color: 'var(--brand-blue)',
                  letterSpacing: '0.02em',
                }}>{d.time}</span>
                <span style={{
                  width: 12, height: 12,
                  background: 'var(--brand-gold)',
                  borderRadius: '50%',
                  marginLeft: 'auto',
                  position: 'relative',
                  zIndex: 1,
                }} />
              </div>
              <div>
                <h4 style={{
                  fontFamily: 'var(--font-jp-serif)',
                  fontWeight: 500,
                  fontSize: 18,
                  letterSpacing: '0.12em',
                  color: 'var(--brand-blue)',
                  margin: '0 0 6px',
                }}>{d.jp}</h4>
                <p style={{
                  fontFamily: 'var(--font-jp-sans)',
                  fontSize: 13,
                  lineHeight: 1.95,
                  color: 'var(--brand-ink-soft)',
                  margin: 0,
                }}>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── キャリア ─────────────────────────────────────────────────────────────────
const CAREER = [
  { en: 'スタートアップ', jp: '入社〜3日間',    body: '法定研修期間。基本的な業務知識、誘導方法、安全確認の手順などを座学・実習を通じて学びます。時給1,100円×20時間＝22,000円を支給。' },
  { en: '実地研修',       jp: '1週間〜1ヶ月',   body: '実際の現場で先輩スタッフと一緒に業務を行いながら、交通誘導や現場対応の流れを覚えていきます。最初は簡単な誘導からスタートするため、未経験の方でも安心です。' },
  { en: '一人前へ',       jp: '1ヶ月以降〜',    body: '実務に慣れてきた段階で、一人で現場を担当していただきます。困った時はすぐに相談できるサポート体制があるため、安心して業務に取り組めます。' },
];

const Career = () => (
  <section style={{
    position: 'relative',
    padding: '120px 0',
    background: 'var(--brand-cream)',
    overflow: 'hidden',
  }}>
    <div className="wrap">
      <SectionLabel en="キャリアパス" jp="CAREER ／ 入社してからの流れ" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
      }}>
        {CAREER.map((c, i) => (
          <div key={c.en} className={`reveal delay-${(i % 4) + 1}`} style={{
            background: '#fff',
            border: '1px solid var(--brand-line)',
            padding: '40px 28px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}>
            {/* Step marker */}
            <div style={{
              position: 'absolute',
              top: -16, left: 28,
              background: 'var(--brand-gold)',
              color: 'var(--brand-blue)',
              padding: '6px 12px',
              fontFamily: 'var(--font-en-serif)',
              fontStyle: 'italic',
              fontSize: 11,
              letterSpacing: '0.28em',
            }}>STEP {String(i + 1).padStart(2, '0')}</div>

            <div style={{ marginTop: 8 }}>
              <span style={{
                fontFamily: 'var(--font-jp-serif)',
                fontWeight: 500,
                fontSize: 30,
                lineHeight: 1.2,
                color: 'var(--brand-blue)',
                letterSpacing: '0.08em',
              }}>{c.en}</span>
            </div>
            <div style={{ width: 40, height: 1, background: 'var(--brand-gold)' }} />
            <h4 style={{
              fontFamily: 'var(--font-jp-serif)',
              fontWeight: 500,
              fontSize: 19,
              letterSpacing: '0.12em',
              color: 'var(--brand-blue)',
              margin: 0,
            }}>{c.jp}</h4>
            <p style={{
              fontFamily: 'var(--font-jp-sans)',
              fontSize: 13,
              lineHeight: 1.95,
              color: 'var(--brand-ink-soft)',
              margin: 0,
            }}>{c.body}</p>
          </div>
        ))}
      </div>

      {/* Salary highlight */}
      <div className="reveal" style={{
        marginTop: 48,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 0,
        background: 'var(--brand-blue)',
        color: '#fff',
      }}>
        {[
          { label: '週2勤務', num: '9',  unit: '万円〜', sub: 'Part-time' },
          { label: '週5勤務', num: '21', unit: '万円〜', sub: 'Full-time' },
        ].map((p, i) => (
          <div key={i} style={{
            padding: '48px 48px',
            borderRight: i === 0 ? '1px solid rgba(255,255,255,0.18)' : 'none',
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            <span style={{
              fontFamily: 'var(--font-en-serif)',
              fontStyle: 'italic',
              fontSize: 14,
              letterSpacing: '0.32em',
              color: 'var(--brand-gold)',
            }}>{p.sub} · 推定月収</span>
            <span style={{
              fontFamily: 'var(--font-jp-serif)',
              fontWeight: 500,
              fontSize: 22,
              letterSpacing: '0.18em',
              color: '#fff',
            }}>{p.label}</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 10 }}>
              <span style={{
                fontFamily: 'var(--font-jp-serif)',
                fontWeight: 500,
                fontSize: 60,
                lineHeight: 1,
                color: '#fff',
                fontVariantNumeric: 'tabular-nums',
                letterSpacing: '0.02em',
              }}>{p.num}</span>
              <span style={{
                fontFamily: 'var(--font-jp-serif)',
                fontWeight: 500,
                fontSize: 18,
                letterSpacing: '0.12em',
                color: 'var(--brand-gold)',
              }}>{p.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── 求めている人材と求めていない人材 ─────────────────────────────────────────
const WANTED = [
  '明るくて誠実な方',
  '分からないことを素直に聞ける方',
  '未経験・ブランクがあっても前向きに学べる方',
  '社会のためにやりがいのある仕事をしたい方',
];

const NOT_WANTED = [
  '指導やアドバイスを受け入れられない方',
  '「とりあえず働ければいい」と考えている方',
];

const WantedProfile = () => (
  <section style={{
    position: 'relative',
    padding: '120px 0',
    background: 'var(--brand-cream)',
    overflow: 'hidden',
  }}>
    <div className="wrap">
      {/* Section header */}
      <div className="reveal" style={{
        textAlign: 'center',
        marginBottom: 56,
      }}>
        <div style={{
          fontFamily: 'var(--font-en-serif)',
          fontStyle: 'italic',
          fontSize: 12,
          letterSpacing: '0.32em',
          color: 'var(--brand-gold-dk)',
          marginBottom: 14,
        }}>
          PROFILE ／ 求める人材像
        </div>
        <h2 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontWeight: 700,
          fontSize: 'clamp(26px, 3.4vw, 40px)',
          lineHeight: 1.45,
          letterSpacing: '0.06em',
          color: 'var(--brand-blue)',
          margin: 0,
        }}>
          求めている人材と求めていない人材
        </h2>
        <p className="body-jp-soft" style={{
          marginTop: 24,
          fontSize: 16,
          lineHeight: 1.95,
          color: 'var(--brand-ink-soft)',
          maxWidth: 760,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          資格や経験よりも<span style={{ color: 'var(--brand-gold-dk)', fontWeight: 500 }}>「真面目に明るく」</span>一緒に働いてくださる方を募集しています。<br />
          未経験・ブランクがあっても問題ありません。
        </p>
      </div>

      {/* Two-column comparison */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 32,
      }}>
        {/* Wanted */}
        <div className="reveal" style={{
          background: '#FFFFFF',
          border: '1.5px solid var(--brand-gold)',
          borderRadius: 16,
          padding: '40px 36px',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            top: -16, left: 32,
            background: 'var(--brand-gold)',
            color: 'var(--brand-blue)',
            padding: '6px 14px',
            fontFamily: 'var(--font-en-serif)',
            fontStyle: 'italic',
            fontSize: 11,
            letterSpacing: '0.32em',
            fontWeight: 500,
          }}>WANTED</div>
          <h3 style={{
            fontFamily: 'var(--font-jp-serif)',
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: '0.1em',
            color: 'var(--brand-blue)',
            margin: '0 0 24px',
          }}>求めている人材</h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {WANTED.map((item, i) => (
              <li key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
                fontFamily: 'var(--font-jp-sans)',
                fontSize: 15,
                lineHeight: 1.85,
                color: 'var(--brand-ink)',
              }}>
                <span style={{
                  flexShrink: 0,
                  width: 24, height: 24,
                  borderRadius: '50%',
                  background: 'var(--brand-gold)',
                  color: '#FFFFFF',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 2,
                }}>
                  <i data-lucide="check" style={{ width: 14, height: 14 }}></i>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not wanted */}
        <div className="reveal delay-1" style={{
          background: '#FFFFFF',
          border: '1.5px solid var(--brand-line)',
          borderRadius: 16,
          padding: '40px 36px',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            top: -16, left: 32,
            background: '#FFFFFF',
            border: '1px solid var(--brand-ink-mute)',
            color: 'var(--brand-ink-soft)',
            padding: '5px 14px',
            fontFamily: 'var(--font-en-serif)',
            fontStyle: 'italic',
            fontSize: 11,
            letterSpacing: '0.32em',
            fontWeight: 500,
          }}>NOT FIT</div>
          <h3 style={{
            fontFamily: 'var(--font-jp-serif)',
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: '0.1em',
            color: 'var(--brand-ink)',
            margin: '0 0 24px',
          }}>求めていない人材</h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {NOT_WANTED.map((item, i) => (
              <li key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
                fontFamily: 'var(--font-jp-sans)',
                fontSize: 15,
                lineHeight: 1.85,
                color: 'var(--brand-ink)',
              }}>
                <span style={{
                  flexShrink: 0,
                  width: 24, height: 24,
                  borderRadius: '50%',
                  background: 'var(--brand-line)',
                  color: 'var(--brand-ink-soft)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 2,
                }}>
                  <i data-lucide="x" style={{ width: 14, height: 14 }}></i>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p style={{
            marginTop: 24,
            paddingTop: 20,
            borderTop: '1px dashed var(--brand-line)',
            fontFamily: 'var(--font-jp-sans)',
            fontSize: 13,
            lineHeight: 1.85,
            color: 'var(--brand-ink-mute)',
            margin: '24px 0 0',
          }}>
            ※お互いのためにも、ミスマッチは避けたいと考えています。
          </p>
        </div>
      </div>
    </div>
  </section>
);

// ── 応募の流れ ───────────────────────────────────────────────────────────────
const APPLY_STEPS = [
  {
    num: '01',
    title: '求人に応募する',
    body: '働きたい求人を選んで応募します。土日だけの現場や、平日のみの現場、奈良県、大阪府、京都府など、現場は複数ありますので、あなたの働きたい条件や勤務地を柔軟に選んでいただけます。',
  },
  {
    num: '02',
    title: '選考',
    body: '面接は基本的に100%行います。※警備業法により、18歳以上の方が必須条件となります。あなたのことや希望する働き方についてを教えてください。',
  },
  {
    num: '03',
    title: '合格連絡',
    body: '合格された方には3営業日以内に電話にてご連絡いたします。※ほとんどの場合、即日中に合否を決定しています。',
  },
  {
    num: '04',
    title: '入社手続き・研修',
    body: '勤務開始前に研修が必要な方については、警備業法に従い研修を受けていただきます。',
  },
  {
    num: '05',
    title: '初出勤',
    body: '勤務地や勤務条件の確認、他のスタッフの紹介を行います。上司や先輩が丁寧に教えますので、少しでも不安な事があれば聞いてくださいね。',
  },
];

const ApplicationFlow = () => (
  <section style={{
    position: 'relative',
    padding: '120px 0',
    background: '#FFFFFF',
    overflow: 'hidden',
  }}>
    <div className="wrap">
      {/* Section header with sparkle motif */}
      <div className="reveal" style={{
        textAlign: 'center',
        marginBottom: 64,
      }}>
        <svg width="80" height="32" viewBox="0 0 80 32" style={{ display: 'block', margin: '0 auto 16px' }} aria-hidden="true">
          <line x1="22" y1="28" x2="14" y2="6" stroke="var(--brand-gold)" strokeWidth="2" strokeLinecap="round" />
          <line x1="40" y1="28" x2="40" y2="4" stroke="var(--brand-gold)" strokeWidth="2" strokeLinecap="round" />
          <line x1="58" y1="28" x2="66" y2="6" stroke="var(--brand-gold)" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <div style={{
          fontFamily: 'var(--font-en-serif)',
          fontStyle: 'italic',
          fontSize: 12,
          letterSpacing: '0.32em',
          color: 'var(--brand-gold-dk)',
          marginBottom: 14,
        }}>
          FLOW ／ 応募から入社まで
        </div>
        <h2 style={{
          fontFamily: 'var(--font-jp-serif)',
          fontWeight: 700,
          fontSize: 'clamp(28px, 3.4vw, 40px)',
          letterSpacing: '0.06em',
          color: 'var(--brand-blue)',
          margin: 0,
        }}>
          応募の流れ
        </h2>
      </div>

      <ol style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 36,
        maxWidth: 920,
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
      }}>
        {APPLY_STEPS.map((s, i) => (
          <li key={s.num} className={`reveal delay-${(i % 4) + 1}`} style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '120px 1fr',
            alignItems: 'center',
            gap: 28,
            padding: '32px 40px',
            border: '1.5px solid var(--brand-gold)',
            borderRadius: 24,
            background: '#FFFFFF',
          }}>
            {/* Speech-bubble tail pointing to the next step */}
            {i < APPLY_STEPS.length - 1 && (
              <span style={{
                position: 'absolute',
                left: 60,
                bottom: -18,
                width: 24,
                height: 24,
                background: '#FFFFFF',
                borderRight: '1.5px solid var(--brand-gold)',
                borderBottom: '1.5px solid var(--brand-gold)',
                transform: 'rotate(45deg)',
              }} aria-hidden="true" />
            )}
            <span style={{
              fontFamily: 'var(--font-en-serif)',
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: 'clamp(48px, 5vw, 64px)',
              lineHeight: 1,
              color: 'var(--brand-gold-dk)',
              textAlign: 'center',
              letterSpacing: '0.02em',
            }}>{s.num}</span>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-jp-serif)',
                fontWeight: 700,
                fontSize: 22,
                letterSpacing: '0.08em',
                color: 'var(--brand-blue)',
                margin: '0 0 14px',
              }}>{s.title}</h3>
              <p style={{
                fontFamily: 'var(--font-jp-sans)',
                fontSize: 15,
                lineHeight: 1.95,
                letterSpacing: '0.04em',
                color: 'var(--brand-ink-soft)',
                margin: 0,
              }}>{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* Apply CTA button */}
      <div className="reveal" style={{
        marginTop: 64,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 16px',
      }}>
        <a href="#apply" className="btn-active btn-blue" style={{
          width: '100%',
          maxWidth: 560,
          height: 88,
          padding: '0 48px',
          fontSize: 22,
          letterSpacing: '0.32em',
          gap: 24,
        }}>
          <span>応募する</span>
          <span className="btn-arrow" style={{ fontSize: 22 }}>→</span>
        </a>
      </div>
    </div>
  </section>
);

export { RecruitIntro, PresidentMessage, SupportPolicy, ADay, Career, WantedProfile, ApplicationFlow };
