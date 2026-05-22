/* eslint-disable */
import React from 'react';
import { SectionLabel } from './Shared.jsx';
// FAQ — interactive accordion

const FAQS = [
{
  q: '未経験でも大丈夫ですか？',
  a: 'はい、未経験の方でも安心してスタートしていただけます。入社後は法定研修や実践的なサポート体制を整えており、先輩スタッフが丁寧にフォローいたします。実際に、未経験からスタートして活躍しているスタッフも多数在籍しております。'
},
{
  q: '女性でも働けますか？',
  a: 'もちろん可能です。交通誘導やイベント警備など、女性スタッフが活躍している現場も多数あります。無理なく働ける環境づくりを大切にしておりますので、安心して勤務していただけます。'
},
{
  q: '日払いはできますか？',
  a: 'はい、日払い・週払いにも対応しております。「すぐに収入が必要」「生活スタイルに合わせたい」という方でも安心して働けます。詳細については面接時にご相談ください。'
},
{
  q: 'シフトの変更は可能ですか？',
  a: 'はい、可能です。1週間ごとの自己申告シフト制のため、ご自身の予定に合わせて柔軟に働くことができます。「週2だけ働きたい」「Wワークしたい」などのご相談にも対応しております。'
},
{
  q: '年齢制限はありますか？',
  a: '18歳以上〜70歳まで幅広い年代の方が活躍しています。年齢よりも「真面目に取り組めること」を大切にしているため、未経験・ブランクのある方も歓迎しております。'
}];


const FaqRow = ({ item, i, open, onToggle }) =>
<div className="reveal" style={{
  borderTop: '1px solid var(--brand-line)',
  borderBottom: i === FAQS.length - 1 ? '1px solid var(--brand-line)' : 'none'
}}>
    <button
    onClick={onToggle}
    style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      padding: '32px 8px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      color: 'var(--brand-blue)'
    }}>
    
      <span style={{
      fontFamily: 'var(--font-en-serif)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 36,
      lineHeight: 1,
      letterSpacing: '0.02em',
      color: 'var(--brand-gold-dk)',
      minWidth: 56
    }}>Q{String(i + 1).padStart(2, '0')}</span>
      <span style={{
      flex: 1,
      fontFamily: 'var(--font-jp-serif)',
      fontWeight: 500,
      fontSize: 'clamp(18px, 1.8vw, 22px)',
      letterSpacing: '0.1em',
      color: 'var(--brand-blue)'
    }}>{item.q}</span>
      <span style={{
      width: 44, height: 44,
      border: '1px solid var(--brand-blue)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--brand-blue)',
      background: open ? 'var(--brand-blue)' : 'transparent',
      transition: 'background 320ms var(--ease-default), color 320ms var(--ease-default)',
      flexShrink: 0
    }}>
        <i data-lucide={open ? 'minus' : 'plus'} style={{
        width: 20, height: 20,
        color: open ? 'var(--brand-gold)' : 'var(--brand-blue)'
      }}></i>
      </span>
    </button>

    <div style={{
    maxHeight: open ? 400 : 0,
    overflow: 'hidden',
    transition: 'max-height 480ms var(--ease-default)'
  }}>
      <div style={{
      display: 'flex',
      gap: 28,
      padding: '0 8px 32px 100px'
    }}>
        <span style={{
        fontFamily: 'var(--font-en-serif)',
        fontStyle: 'italic',
        fontSize: 14,
        letterSpacing: '0.32em',
        color: 'var(--brand-gold-dk)',
        minWidth: 32,
        marginRight: -16
      }}>A.</span>
        <p style={{
        fontFamily: 'var(--font-jp-sans)',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 2.0,
        letterSpacing: '0.05em',
        color: 'var(--brand-ink-soft)',
        margin: 0,
        maxWidth: 720
      }}>{item.a}</p>
      </div>
    </div>
  </div>;


const Faq = () => {
  const [open, setOpen] = React.useState(0);
  // Re-render lucide icons whenever toggle state changes
  React.useEffect(() => {if (window.lucide) window.lucide.createIcons();}, [open]);

  return (
    <section id="faq" style={{
      position: 'relative',
      padding: '160px 0 140px',
      background: 'var(--brand-cream)',
      overflow: 'hidden'
    }}>
      {/* watermark */}
      <div style={{
        position: 'absolute',
        right: -40, top: 60,
        fontFamily: 'var(--font-en-serif)',
        fontStyle: 'italic',
        fontWeight: 400,
        fontSize: 'clamp(140px, 18vw, 240px)',
        lineHeight: 0.9,
        color: 'rgba(194, 154, 92, 0.16)',
        letterSpacing: '-0.02em',
        pointerEvents: 'none',
        userSelect: 'none'
      }}>
        FAQ
      </div>

      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.7fr 1.3fr',
          gap: 80,
          alignItems: 'flex-start'
        }}>
          <div>
            <SectionLabel en="よくあるご質問" jp="FAQ ／ Q&A" />
            <p className="reveal delay-1" style={{
              fontFamily: 'var(--font-jp-serif)',
              fontWeight: 500,
              fontSize: 'clamp(22px, 2.4vw, 30px)',
              lineHeight: 1.6,
              letterSpacing: '0.1em',
              color: 'var(--brand-blue)',
              margin: 0,
              maxWidth: 360, width: "330.296875px"
            }}>
              はじめての方も、<br />
              安心してご相談ください。
            </p>
            <p className="reveal delay-2" style={{
              marginTop: 24,
              fontFamily: 'var(--font-jp-sans)',
              fontSize: 13,
              lineHeight: 2.0,
              color: 'var(--brand-ink-soft)',
              maxWidth: 320
            }}>
              よくお寄せいただくご質問をまとめました。<br />
              ご不明な点は、お気軽にお問い合わせください。
            </p>
          </div>

          <div>
            {FAQS.map((f, i) =>
            <FaqRow
              key={i}
              i={i}
              item={f}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)} />

            )}
          </div>
        </div>
      </div>
    </section>);

};

export { Faq };