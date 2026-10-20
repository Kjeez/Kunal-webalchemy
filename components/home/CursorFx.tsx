'use client';

import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from './motion';
import s from './home.module.css';

const HOT = 'a,button,input,select,textarea,label';

/**
 * Homepage-only pointer flourish: a ring that trails the cursor (grows over
 * interactive elements) and a gentle magnetic pull on [data-magnetic]
 * buttons. Fine pointers only, never under reduced motion. The rAF loop
 * stops once everything settles. Moves via transform / `translate` only.
 */
export default function CursorFx() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (window.matchMedia?.('(pointer: fine)').matches && !prefersReducedMotion()) setOn(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!on || !el) return;
    let mx = -100, my = -100, fx = -100, fy = -100, fs = 1;
    let hot = false, seen = false, running = false, raf = 0;
    let mags: HTMLElement[] = [];
    const pos = new WeakMap<HTMLElement, { x: number; y: number }>();

    const loop = () => {
      const target = hot ? 1.8 : 1;
      fx += (mx - fx) * 0.2;
      fy += (my - fy) * 0.2;
      fs += (target - fs) * 0.2;
      el.style.transform = `translate(${fx.toFixed(1)}px,${fy.toFixed(1)}px) translate(-50%,-50%) scale(${fs.toFixed(3)})`;
      el.style.backgroundColor = hot ? 'rgba(53,87,245,.12)' : 'transparent';
      let moving = Math.abs(mx - fx) > 0.2 || Math.abs(my - fy) > 0.2 || Math.abs(target - fs) > 0.003;

      for (const m of mags) {
        const r = m.getBoundingClientRect();
        const dx = mx - (r.left + r.width / 2);
        const dy = my - (r.top + r.height / 2);
        const pull = Math.hypot(dx, dy) < Math.max(r.width, r.height) * 0.9 ? 0.28 : 0;
        const p = pos.get(m) ?? { x: 0, y: 0 };
        const ddx = (dx * pull - p.x) * 0.2;
        const ddy = (dy * pull - p.y) * 0.2;
        if (Math.abs(ddx) < 0.05 && Math.abs(ddy) < 0.05) {
          if (pull === 0 && (p.x || p.y)) { p.x = 0; p.y = 0; m.style.translate = ''; pos.set(m, p); }
          continue;
        }
        moving = true;
        p.x += ddx;
        p.y += ddy;
        pos.set(m, p);
        m.style.translate = `${p.x.toFixed(1)}px ${p.y.toFixed(1)}px`;
      }

      if (moving) raf = requestAnimationFrame(loop);
      else running = false;
    };

    const kick = () => {
      if (running) return;
      running = true;
      mags = Array.from(document.querySelectorAll<HTMLElement>('[data-magnetic]'));
      raf = requestAnimationFrame(loop);
    };
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!seen) { seen = true; fx = mx; fy = my; el.style.opacity = '1'; }
      hot = !!(e.target instanceof Element && e.target.closest(HOT));
      kick();
    };
    const onLeave = () => { el.style.opacity = '0'; seen = false; };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', kick, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', kick);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      mags.forEach((m) => { m.style.translate = ''; });
    };
  }, [on]);

  return on ? <div ref={ref} className={s.cursor} style={{ opacity: 0 }} aria-hidden="true" /> : null;
}
