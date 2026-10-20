'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Flags every `[data-motion]` decoration with `data-inview` while it is on
 * screen; site.css pauses the looping animations of anything off-screen so
 * dozens of drifting shapes and characters cost nothing when not visible.
 */
export default function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.wa [data-motion]');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.setAttribute('data-inview', ''));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.setAttribute('data-inview', '');
          else e.target.removeAttribute('data-inview');
        }
      },
      { rootMargin: '120px 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
