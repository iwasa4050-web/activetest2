/* eslint-disable */
import React from 'react';
import { SectionLabel } from './Shared.jsx';
// Contact — company info, map placeholder, contact form/CTA

const COMPANY_INFO = [
  { en: 'COMPANY',    jp: '会社名',              val: '株式会社　アクティブ' },
  { en: 'FOUNDED',    jp: '設立',                val: '2026年3月5日' },
  { en: 'ADDRESS',    jp: '本所在地',             val: '〒630-8115\n奈良県奈良市大宮町二丁目2番8号\n中島第一ビル一階' },
  { en: 'CEO',        jp: '代表取締役',           val: '坂本信也' },
  { en: 'BUSINESS',   jp: '業務内容',            val: '交通誘導警備業務 ／ 駐車場警備業務\nイベント警備業務' },
  { en: 'SECURITY',   jp: '警備業務',            val: '2号業務（交通誘導警備・高速道路規制業務）' },
  { en: 'AUTHORITY',  jp: '認定をした公安委員会',  val: '奈良県公安委員会' },
  { en: 'LICENSE',    jp: '認定の番号',           val: '第64000415号' },
];

const Contact = () => (
  <section id="contact" style={{
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
        marginBottom: 64,
      }}>
        <SectionLabel en="お問い合わせ" jp="CONTACT ／ ご相談・お問い合わせ" />
        <p className="reveal delay-1" style={{
          maxWidth: 400,
          fontFamily: 'var(--font-jp-sans)',
          fontSize: 16,
          lineHeight: 2.0,
          color: 'var(--brand-ink-soft)',
        }}>
          警備のご依頼、採用に関するご質問など、<br />
          お気軽にお問い合わせください。
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 0,
        border: '1px solid var(--brand-line)',
      }}>
        {/* LEFT — info */}
        <div className="reveal" style={{ padding: '56px 48px' }}>
          <div className="label-num" style={{ marginBottom: 20 }}>COMPANY · 会社概要</div>
          <h3 style={{
            fontFamily: 'var(--font-jp-serif)',
            fontWeight: 500,
            fontSize: 28,
            letterSpacing: '0.12em',
            color: 'var(--brand-blue)',
            margin: '0 0 36px',
          }}>株式会社アクティブ</h3>

          <dl style={{ margin: 0 }}>
            {COMPANY_INFO.map((r, i) => (
              <div key={r.en} style={{
                display: 'grid',
                gridTemplateColumns: '160px 1fr',
                gap: 24,
                padding: '20px 0',
                borderTop: '1px solid var(--brand-line)',
                borderBottom: i === COMPANY_INFO.length - 1 ? '1px solid var(--brand-line)' : 'none',
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
                    fontSize: 15,
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

        {/* RIGHT — Map + CTA */}
        <div className="reveal delay-1" style={{
          background: 'var(--brand-cream)',
          padding: '56px 48px',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div className="label-num" style={{ marginBottom: 20 }}>ACCESS · 所在地</div>
          {/* Google Maps embed */}
          <div style={{
            position: 'relative',
            height: 280,
            border: '1px solid var(--brand-line)',
            marginBottom: 12,
            overflow: 'hidden',
            background: 'var(--blue-50)',
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4019.9660943036465!2d135.81358647629813!3d34.68228388419995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60013a32355a87f9%3A0x28316627c3823662!2z44CSNjMwLTgxMTUg5aWI6Imv55yM5aWI6Imv5biC5aSn5a6u55S677yS5LiB55uu77yS4oiS77yYIOS4reWztuesrOS4gOODk-ODqyDkuIDpmo4!5e1!3m2!1sja!2sjp!4v1778935629372!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="株式会社アクティブ 本社地図"
            ></iframe>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=%E5%A5%88%E8%89%AF%E7%9C%8C%E5%A5%88%E8%89%AF%E5%B8%82%E5%A4%A7%E5%AE%AE%E7%94%BA2%E4%B8%81%E7%9B%AE2-8"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              marginBottom: 24,
              fontFamily: 'var(--font-en-sans)',
              fontSize: 13,
              letterSpacing: '0.24em',
              color: 'var(--brand-gold-dk)',
              textDecoration: 'none',
            }}
          >
            <i data-lucide="external-link" style={{ width: 12, height: 12 }}></i>
            GOOGLE MAPSで開く
          </a>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}>
            <i data-lucide="map-pin" style={{ width: 22, height: 22, color: 'var(--brand-gold-dk)', flexShrink: 0, marginTop: 2 }}></i>
            <div>
              <div style={{
                fontFamily: 'var(--font-jp-serif)', fontWeight: 500, fontSize: 16,
                letterSpacing: '0.12em', color: 'var(--brand-blue)',
              }}>本社</div>
              <div style={{
                fontFamily: 'var(--font-jp-sans)', fontSize: 15, lineHeight: 1.9,
                color: 'var(--brand-ink-soft)', marginTop: 4,
              }}>
                〒630-8115 奈良県奈良市大宮町二丁目2番8号<br />中島第一ビル一階
              </div>
            </div>
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="recruit.html" className="btn-active btn-gold-outline" style={{ width: '100%' }}>
              <span>求人情報を見る</span>
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { Contact };
