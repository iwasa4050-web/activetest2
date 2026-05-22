/* eslint-disable */
import React from 'react';
import { SectionLabel, Photo } from './Shared.jsx';
// Services — large editorial cards, alternating photo placement

const SERVICES = [
  {
    num: '01',
    en: 'TRAFFIC',
    jp: '交通誘導警備',
    sub: 'Traffic Guidance',
    scene: 'traffic',
    img: 'assets/service-traffic.jpg?v=4',
    imgAlt: '交通誘導警備 スタッフ',
    body: '建築・土木工事や各種インフラ工事において、現場付近での歩行者や車両の安全確保、工事車両の誘導を行います。',
    bullets: ['道路工事の交通誘導', 'インフラ工事現場の安全管理', '夜間・早朝対応'],
  },
  {
    num: '02',
    en: 'PARKING',
    jp: '駐車場警備',
    sub: 'Parking Security',
    scene: 'facility',
    img: 'assets/service-parking.jpg?v=2',
    imgAlt: '駐車場警備 スタッフ',
    body: '商業施設、オフィスビル、自治体の公共施設などの駐車場における誘導や防犯サービスを提供します。',
    bullets: ['商業施設の駐車場誘導', '入出庫の安全確保', '不審者対応'],
  },
  {
    num: '03',
    en: 'EVENT',
    jp: 'イベント警備',
    sub: 'Event Security',
    scene: 'event',
    img: 'assets/service-event.jpg?v=4',
    imgAlt: 'イベント警備 スタッフ',
    body: '店舗のオープンや各種イベント会場の警備サービス。雑踏事故などを未然に防ぎ、安心なひとときをお届けします。',
    bullets: ['ライブ・興行イベント', '店舗オープン', '雑踏整理'],
  },
];

const ServiceCard = ({ s, i }) => {
  const flip = i % 2 === 1;
  return (
    <article className="reveal" style={{
      display: 'grid',
      gridTemplateColumns: flip ? '1fr 0.95fr' : '0.95fr 1fr',
      gap: 64,
      alignItems: 'center',
      padding: '64px 0',
      borderBottom: i < SERVICES.length - 1 ? '1px solid var(--brand-line)' : 'none',
    }}>
      {/* Photo */}
      <div style={{ order: flip ? 2 : 1, position: 'relative' }}>
        <Photo scene={s.scene} imgSrc={s.img} imgAlt={s.imgAlt} height={460} />
      </div>

      {/* Copy */}
      <div style={{ order: flip ? 1 : 2 }}>
        <div className="label-num" style={{ marginBottom: 12 }}>SERVICE · {s.sub.toUpperCase()}</div>
        <div style={{
          fontFamily: 'var(--font-en-serif)',
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: 'clamp(48px, 5vw, 76px)',
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
          margin: '0 0 24px',
        }}>{s.jp}</h3>

        <p className="body-jp-soft" style={{ margin: '0 0 28px', maxWidth: 520 }}>
          {s.body}
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {s.bullets.map((b, j) => (
            <li key={j} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: '14px 0',
              borderTop: j === 0 ? '1px solid var(--brand-line)' : 'none',
              borderBottom: '1px solid var(--brand-line)',
              fontFamily: 'var(--font-jp-sans)',
              fontSize: 14,
              letterSpacing: '0.08em',
              color: 'var(--brand-ink)',
            }}>
              <span style={{
                fontFamily: 'var(--font-en-serif)',
                fontStyle: 'italic',
                fontSize: 11,
                letterSpacing: '0.24em',
                color: 'var(--brand-gold-dk)',
                minWidth: 28,
              }}>0{j+1}</span>
              <span style={{ width: 18, height: 1, background: 'var(--brand-gold)' }} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const Services = () => (
  <section id="services" style={{
    position: 'relative',
    padding: '160px 0 120px',
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
        marginBottom: 32,
      }}>
        <SectionLabel en="サービス" jp="SERVICE ／ 業務内容" />
        <div className="reveal delay-2" style={{
          maxWidth: 380,
          fontFamily: 'var(--font-jp-sans)',
          fontSize: 14,
          lineHeight: 2.0,
          color: 'var(--brand-ink-soft)',
        }}>
          交通誘導から駐車場・イベント警備まで。<br />
          現場に応じた最適な警備体制をご提案します。
        </div>
      </div>

      <div>
        {SERVICES.map((s, i) => <ServiceCard key={s.num} s={s} i={i} />)}
      </div>
    </div>
  </section>
);

export { Services };
