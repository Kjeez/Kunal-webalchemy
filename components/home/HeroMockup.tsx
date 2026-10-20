'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { prefersReducedMotion } from './motion';
import s from './home.module.css';

type Vars = CSSProperties & Record<`--${string}`, string>;

/** Absolutely-positioned block inside the mock page; `d` = animation delay (s). */
function P({ cls, st, d = 0, dur, children }: { cls: string; st: CSSProperties; d?: number; dur?: number; children?: ReactNode }) {
  const style: Vars = { ...st, '--d': `${d}s` };
  if (dur) style['--dur'] = `${dur}s`;
  return <div className={`${s.p} ${cls}`} style={style}>{children}</div>;
}

const bar = (left: string, top: string, width: string, height: string, background: string, d: number) => (
  <P cls={s.aGrow} st={{ left, top, width, height, background, borderRadius: 6 }} d={d} />
);

const card = (left: string, background: string, dot: string, d: number) => (
  <P cls={`${s.aPop} ${s.mCard}`} st={{ left, background }} d={d}>
    <i className={s.mCardDot} style={{ background: dot }} />
    <i className={s.mCardL1} />
    <i className={s.mCardL2} />
  </P>
);

/**
 * The hero's browser mockup: the URL types itself, page blocks pop in,
 * a cursor clicks "Book now" and an enquiry toast lands. Replays every
 * ~9s while on screen (re-keying restarts the CSS animations).
 */
export default function HeroMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const [loop, setLoop] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !('IntersectionObserver' in window)) return;
    let visible = true;
    let wasHidden = false;
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (!visible) wasHidden = true;
      else if (wasHidden) { wasHidden = false; setLoop((n) => n + 1); }
    }, { threshold: 0.25 });
    io.observe(el);
    const t = setInterval(() => {
      if (visible && document.visibilityState === 'visible') setLoop((n) => n + 1);
    }, 9000);
    return () => { clearInterval(t); io.disconnect(); };
  }, []);

  return (
    <div ref={ref} className={s.mockWrap} aria-hidden="true">
      <div key={loop} className={s.mock}>
        <div className={s.mockBar}>
          <span className={s.mockDot} style={{ background: '#ff8a6b' }} />
          <span className={s.mockDot} style={{ background: '#e3a008' }} />
          <span className={s.mockDot} style={{ background: '#7fd6a0' }} />
          <div className={s.mockUrl}><span className={s.mockType}>yourbusiness.in/</span></div>
        </div>
        <div className={s.mockCanvas}>
          <P cls={s.aPop} st={{ left: '5%', top: '5%', width: '11%', height: '5%', background: '#3557f5', borderRadius: 6 }} d={0.8} />
          <P cls={s.aFade} st={{ left: '46%', top: '6.5%', width: '8%', height: '2.2%', background: '#e4e2db', borderRadius: 99 }} d={0.95} />
          <P cls={s.aFade} st={{ left: '57%', top: '6.5%', width: '8%', height: '2.2%', background: '#e4e2db', borderRadius: 99 }} d={1.05} />
          <P cls={s.aFade} st={{ left: '68%', top: '6.5%', width: '8%', height: '2.2%', background: '#e4e2db', borderRadius: 99 }} d={1.15} />
          <P cls={s.aPop} st={{ left: '81%', top: '4.5%', width: '14%', height: '6.5%', background: '#14161c', borderRadius: 99 }} d={1.25} />
          {bar('5%', '19%', '47%', '7.5%', '#14161c', 1.5)}
          {bar('5%', '29.5%', '36%', '7.5%', '#3557f5', 1.7)}
          {bar('5%', '41%', '44%', '2.6%', '#d9d6cd', 1.95)}
          {bar('5%', '46%', '32%', '2.6%', '#d9d6cd', 2.05)}
          <P cls={`${s.aPop} ${s.mockImg}`} st={{ left: '57%', top: '17%', width: '38%', height: '47%' }} d={2.0} dur={0.6} />
          <div className={`${s.p} ${s.mockCta}`} style={{ left: '5%', top: '53%', width: '22%', height: '9%' }}>Book now</div>
          {card('5%', '#fbf3e2', '#a8660a', 2.7)}
          {card('36.2%', '#e8f4ec', '#2f7a4f', 2.85)}
          {card('67.5%', '#fcebe3', '#c0532b', 3.0)}
          <div className={`${s.p} ${s.ring}`} />
          <div className={`${s.p} ${s.cur}`} />
        </div>
        <div className={s.toast}>
          <span className={s.toastDot} />
          <div>
            <div className={s.toastT}>New enquiry received</div>
            <div className={s.toastS}>via Book now · just now</div>
          </div>
        </div>
      </div>
    </div>
  );
}
