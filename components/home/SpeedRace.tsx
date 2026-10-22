'use client';
/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useRef, useState } from 'react';
import { peep, prefersReducedMotion } from './motion';
import s from './home.module.css';

const LANES = [
  { label: 'Typical template site', dur: 5.2, c: '#ff8a6b', k: 1.6, seed: 'Ravi' },
  { label: 'Built by Kunal', dur: 1.1, c: '#7fd6a0', k: 1, seed: 'Asha' },
];
const END = 6;

/** Two-lane "speed test" race; starts when half visible, replayable. */
export default function SpeedRace() {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);
  const [T, setT] = useState(0);

  const start = useCallback(() => {
    cancelAnimationFrame(raf.current);
    if (prefersReducedMotion()) { setT(END); return; }
    const t0 = performance.now();
    const step = (now: number) => {
      const t = (now - t0) / 1000;
      setT(Math.min(t, END));
      if (t < END) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { setT(END); return; }
    const io = new IntersectionObserver((es) => {
      if (es.some((x) => x.isIntersecting)) { io.disconnect(); start(); }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf.current); };
  }, [start]);

  return (
    <div ref={ref} className={s.race}>
      <div className={s.raceHead}>
        <div className="stack" style={{ gap: 4 }}>
          <div className={s.raceK}>SPEED TEST</div>
          <h3 className={s.raceT}>Every second of delay costs you customers.</h3>
        </div>
        <button type="button" className={s.raceBtn} onClick={start}>Run again ↻</button>
      </div>
      {LANES.map((l) => {
        const t = Math.min(T, l.dur);
        const done = T >= l.dur;
        const w = `${(Math.pow(t / l.dur, l.k) * 100).toFixed(1)}%`;
        return (
          <div key={l.label} className={s.lane}>
            <div className={s.laneLabel}>{l.label}</div>
            <div className={s.track}>
              <div className={s.fill} style={{ width: w, background: l.c }} />
              <img
                src={peep(l.seed)}
                alt=""
                width={46}
                height={46}
                loading="lazy"
                className={`${s.runner}${T > 0 && !done ? ` ${s.running}` : ''}`}
                style={{ left: w, background: l.c }}
              />
            </div>
            <div className={s.laneTime} style={{ color: done ? l.c : 'var(--dark-muted)' }}>
              {done ? `${l.dur.toFixed(1)}s ✓` : `${t.toFixed(1)}s`}
            </div>
          </div>
        );
      })}
      <p className={s.raceNote}>Illustrative mobile load times. A 5-second load means a 90% bounce rate.</p>
    </div>
  );
}
