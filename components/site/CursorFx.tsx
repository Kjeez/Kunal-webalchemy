'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const HOT = 'a,button,input,select,textarea,label,[role="button"]';
/* Magnetic targets: anything opted in, plus the site's main CTAs — but
   never full-width/stretched buttons (they'd visibly slide out of forms). */
const MAGNETS = '[data-magnetic], .btn-primary, .btn-pill, .foot-go, .foot-pill, .chat-btn';
const MAX_W = 360;   // wider than this → no pull
const MAX_PULL = 8;  // px, hard cap on the offset

/**
 * Site-wide pointer flourish: a blue ring that trails the cursor (grows and
 * fills over anything clickable) and a gentle, capped magnetic pull on the
 * main buttons. Mouse/trackpad only — touch devices and reduced-motion
 * users get nothing. The rAF loop sleeps once everything settles.
 */
export default function CursorFx() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const mq = (q: string) => window.matchMedia?.(q).matches;
    if (mq('(hover: hover) and (pointer: fine)') && !mq('(prefers-reduced-motion: reduce)')) setOn(true);
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
      fx += (mx - fx) * 0.22;
      fy += (my - fy) * 0.22;
      fs += (target - fs) * 0.2;
      el.style.transform = `translate(${fx.toFixed(1)}px,${fy.toFixed(1)}px) translate(-50%,-50%) scale(${fs.toFixed(3)})`;
      el.classList.toggle('is-hot', hot);
      let moving = Math.abs(mx - fx) > 0.2 || Math.abs(my - fy) > 0.2 || Math.abs(target - fs) > 0.003;

      for (const m of mags) {
        const r = m.getBoundingClientRect();
        const p = pos.get(m) ?? { x: 0, y: 0 };
        let tx = 0, ty = 0;
        if (r.width > 0 && r.width <= MAX_W) {
          const dx = mx - (r.left + r.width / 2);
          const dy = my - (r.top + r.height / 2);
          if (Math.hypot(dx, dy) < Math.max(r.width, r.height) * 0.75) {
            tx = Math.max(-MAX_PULL, Math.min(MAX_PULL, dx * 0.25));
            ty = Math.max(-MAX_PULL, Math.min(MAX_PULL, dy * 0.25));
          }
        }
        const ddx = (tx - p.x) * 0.2;
        const ddy = (ty - p.y) * 0.2;
        if (Math.abs(ddx) < 0.05 && Math.abs(ddy) < 0.05) {
          if (!tx && !ty && (p.x || p.y)) { p.x = 0; p.y = 0; m.style.translate = ''; pos.set(m, p); }
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
      mags = Array.from(document.querySelectorAll<HTMLElement>(MAGNETS)).filter((m) => !m.closest('.btn-block'));
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
    const onDown = () => el.classList.add('is-down');
    const onUp = () => el.classList.remove('is-down');

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', kick);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      mags.forEach((m) => { m.style.translate = ''; });
    };
  }, [on, pathname]);

  return on ? <div ref={ref} className="cursor-ring" style={{ opacity: 0 }} aria-hidden="true" /> : null;
}
