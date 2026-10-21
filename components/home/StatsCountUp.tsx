'use client';

import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from './motion';
import s from './home.module.css';

const STATS = [
  { k: 'YEARS', n: 5, suf: '+', l: 'In operation', c: 'var(--ink)' },
  { k: 'PROJECTS', n: 500, suf: '+', l: 'Websites & apps delivered', c: 'var(--blue)' },
  { k: 'TEAM', n: 12, suf: '', l: 'Designers & developers', c: 'var(--green)' },
  { k: 'SATISFACTION', n: 98, suf: '%', l: 'Clients who would refer us', c: 'var(--rust)' },
];

/** Stat tiles that count up once when scrolled into view. SSR shows final values. */
export default function StatsCountUp() {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !('IntersectionObserver' in window)) return;
    let raf = 0;
    setT(0);
    const io = new IntersectionObserver((es) => {
      if (!es.some((x) => x.isIntersecting)) return;
      io.disconnect();
      const t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / 1400);
        setT(p);
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.35 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  const e = 1 - Math.pow(1 - t, 3);
  return (
    <div ref={ref} className={`gridlines ${s.stats}`}>
      {STATS.map((x) => (
        <div key={x.k} className={s.stat}>
          <div className={s.statK} style={{ color: x.c }}>{x.k}</div>
          <div className={s.statV} style={{ color: x.c }}>
            <span className={s.srOnly}>{x.n}{x.suf}</span>
            <span aria-hidden="true">{Math.round(x.n * e)}{x.suf}</span>
          </div>
          <div className={s.statL}>{x.l}</div>
        </div>
      ))}
    </div>
  );
}
