'use client';

import { useRef } from 'react';
import { prefersReducedMotion } from './motion';
import s from './home.module.css';

/**
 * Hero visual wrapper: feeds the pointer position (-1…1) into --mx/--my
 * so the shapes and mockup parallax at their own depths (pure CSS).
 */
export default function HeroStage({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const move = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (((e.clientX - r.left) / r.width - 0.5) * 2).toFixed(3));
    el.style.setProperty('--my', (((e.clientY - r.top) / r.height - 0.5) * 2).toFixed(3));
  };
  const leave = () => {
    ref.current?.style.setProperty('--mx', '0');
    ref.current?.style.setProperty('--my', '0');
  };

  return (
    <div ref={ref} className={s.stage} onMouseMove={move} onMouseLeave={leave}>
      {children}
    </div>
  );
}
