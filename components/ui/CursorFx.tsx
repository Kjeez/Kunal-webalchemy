'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Pointer micro-interactions from the template, rebuilt without GSAP:
 *  - trailing custom cursor: a snappy dot + a lagging ring
 *    (mix-blend-mode: difference, so it stays visible on paper and night),
 *  - the ring grows over interactive elements (a/button/summary/inputs),
 *  - mouse parallax: floating decor (.hero-float, .cta-icon, .sticker,
 *    .foot-sticker) drifts toward the pointer at staggered depths.
 *
 * Fine-pointer devices only; fully disabled for prefers-reduced-motion
 * and touch. Holds no content — pure enhancement.
 */
export default function CursorFx() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.append(ring, dot);

    // parallax targets with staggered depths (matches template's 9 + (i%4)*7)
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.na .hero-float, .na .cta-icon, .na .sticker, .na .foot-sticker'
      )
    ).map((el, i) => ({ el, d: 9 + (i % 4) * 7, x: 0, y: 0, tx: 0, ty: 0 }));

    let mx = -100, my = -100;      // mouse
    let rx = -100, ry = -100;      // ring (lags)
    let dx = -100, dy = -100;      // dot (snappy)
    let raf = 0;
    let idle = false;

    const tick = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      dx += (mx - dx) * 0.5;
      dy += (my - dy) * 0.5;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
      dot.style.transform = `translate3d(${dx}px,${dy}px,0) translate(-50%,-50%)`;

      let settled = Math.abs(mx - rx) < 0.2 && Math.abs(my - ry) < 0.2;
      for (const t of targets) {
        t.x += (t.tx - t.x) * 0.06;
        t.y += (t.ty - t.y) * 0.06;
        // transform composes with the CSS `translate` bob + `rotate` tilt
        t.el.style.transform = `translate(${t.x}px, ${t.y}px)`;
        if (Math.abs(t.tx - t.x) > 0.2 || Math.abs(t.ty - t.y) > 0.2) settled = false;
      }

      if (settled) {
        idle = true;
        return; // stop the loop until the mouse moves again
      }
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      for (const t of targets) {
        t.tx = nx * t.d;
        t.ty = ny * t.d;
      }
      if (idle) {
        idle = false;
        raf = requestAnimationFrame(tick);
      }
    };

    const isInteractive = (el: EventTarget | null) =>
      el instanceof Element &&
      Boolean(el.closest('a, button, summary, input, textarea, select, [role="button"]'));

    const onOver = (e: MouseEvent) => {
      ring.classList.toggle('is-active', isInteractive(e.target));
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      targets.forEach((t) => { t.el.style.transform = ''; });
      ring.remove();
      dot.remove();
    };
    // re-collect parallax targets after client-side navigation
  }, [pathname]);

  return null;
}
