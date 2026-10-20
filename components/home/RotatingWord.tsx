'use client';

import { useEffect, useState } from 'react';
import { prefersReducedMotion } from './motion';
import s from './home.module.css';

const WORDS = ['actually sell.', 'get found.', 'win trust.', 'bring leads.'];

/** Serif accent word in the hero H1; cycles every 2.4s (static under reduced motion). */
export default function RotatingWord() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const t = setInterval(() => {
      if (document.visibilityState === 'visible') setI((n) => (n + 1) % WORDS.length);
    }, 2400);
    return () => clearInterval(t);
  }, []);

  return <span key={i} className={s.word}>{WORDS[i]}</span>;
}
