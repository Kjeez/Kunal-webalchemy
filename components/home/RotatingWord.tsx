'use client';

import { useEffect, useState } from 'react';
import { prefersReducedMotion } from './motion';
import s from './home.module.css';

const WORDS = ['actually sell.', 'get found.', 'win trust.', 'bring leads.'];

/**
 * Serif accent word that cycles every 2.4s (static under reduced motion).
 * Home hero uses the default block word on its own line; pass `inline` to
 * keep it in the flow of a sentence (e.g. the About heading).
 */
export default function RotatingWord({ words = WORDS, inline = false }: { words?: string[]; inline?: boolean }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const t = setInterval(() => {
      if (document.visibilityState === 'visible') setI((n) => (n + 1) % words.length);
    }, 2400);
    return () => clearInterval(t);
  }, [words.length]);

  return (
    <span key={i} className={`${s.word}${inline ? ` ${s.wordInline}` : ''}`} aria-live="off">
      {words[i]}
    </span>
  );
}
