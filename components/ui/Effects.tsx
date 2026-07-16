'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Progressive-enhancement bootstrap for new-design pages. Include once
 * inside the `.na` shell. Holds NO content — it only:
 *  1. adds `js` to <html> (gates reveal/accordion CSS so no-JS users
 *     see everything at full height),
 *  2. reveals `.r` elements on scroll (IntersectionObserver → .in),
 *  3. animates `[data-count]` numbers when they enter the viewport,
 *  4. grows `.chart` bars on view.
 * Respects prefers-reduced-motion (observers still fire; CSS disables
 * the transitions, and count-ups jump straight to the target).
 */
export default function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add('js');

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observers: IntersectionObserver[] = [];

    // reveal-on-scroll — elements already in the viewport reveal
    // synchronously (no first-frame flash, works even if IO is throttled);
    // the rest reveal via IntersectionObserver as they scroll in.
    const revealed = document.querySelectorAll<HTMLElement>('.na .r');
    if (revealed.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              io.unobserve(e.target);
            }
          });
        },
        { rootMargin: '0px 0px -12% 0px' }
      );
      revealed.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.95 && r.bottom > 0) {
          el.classList.add('in');
        } else {
          io.observe(el);
        }
      });
      observers.push(io);
    }

    // count-ups
    const counters = document.querySelectorAll<HTMLElement>('.na [data-count]');
    if (counters.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            io.unobserve(el);
            const target = Number(el.getAttribute('data-count') || '0');
            if (reduced || !Number.isFinite(target)) {
              el.textContent = String(target);
              return;
            }
            const dur = 1500;
            const t0 = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - t0) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              el.textContent = String(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          });
        },
        { rootMargin: '0px 0px -8% 0px' }
      );
      counters.forEach((el) => io.observe(el));
      observers.push(io);
    }

    // chart bars
    const charts = document.querySelectorAll<HTMLElement>('.na .chart');
    if (charts.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              io.unobserve(e.target);
            }
          });
        },
        { rootMargin: '0px 0px -15% 0px' }
      );
      charts.forEach((el) => io.observe(el));
      observers.push(io);
    }

    return () => observers.forEach((io) => io.disconnect());
  }, [pathname]);

  return null;
}
