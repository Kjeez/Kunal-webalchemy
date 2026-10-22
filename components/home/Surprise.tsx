'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import Peep from '@/components/site/motion/Peep';
import { CONFETTI_EVENT, confetti, prefersReducedMotion } from './motion';
import s from './home.module.css';

type Vars = CSSProperties & Record<`--${string}`, string>;
type Piece = { dx: number; dy: number; fall: number; r: number; c: string; w: number; h: number; round: boolean; d: number };
type Burst = { id: number; x: number; y: number; big: boolean; pieces: Piece[] };

const COLORS = ['#3557f5', '#e3a008', '#2f7a4f', '#ff8a6b', '#7a4bc2', '#9fb0ff', '#7fd6a0', '#c0532b'];
const SECRET = 'kunal';
let nextId = 0;

function makePieces(n: number, big: boolean): Piece[] {
  const reach = big ? 520 : 200;
  return Array.from({ length: n }, () => {
    // mostly upward fan, a few sideways strays
    const a = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.3;
    const dist = reach * (0.35 + Math.random() * 0.65);
    const w = 6 + Math.random() * 8;
    return {
      dx: Math.cos(a) * dist,
      dy: Math.sin(a) * dist,
      fall: (big ? 420 : 200) + Math.random() * 200,
      r: (Math.random() - 0.5) * 1080,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
      w,
      h: Math.random() < 0.5 ? w : w * 0.45,
      round: Math.random() < 0.3,
      d: Math.random() * (big ? 0.35 : 0.08),
    };
  });
}

/**
 * Page-wide confetti layer. Anything can fire it with `confetti(x, y)`;
 * the big version (hero "surprise me" button, or typing "kunal" anywhere
 * outside a form field) also pops up a jumping character. Off entirely
 * under prefers-reduced-motion.
 */
export default function Surprise() {
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const timers = new Set<ReturnType<typeof setTimeout>>();

    const onBurst = (e: Event) => {
      const { x, y, big } = (e as CustomEvent<{ x: number; y: number; big: boolean }>).detail;
      const id = nextId++;
      setBursts((b) => [...b, { id, x, y, big, pieces: makePieces(big ? 130 : 46, big) }]);
      const t = setTimeout(() => {
        timers.delete(t);
        setBursts((b) => b.filter((z) => z.id !== id));
      }, big ? 3400 : 1700);
      timers.add(t);
    };

    let typed = '';
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement | null)?.closest?.('input, textarea, select, [contenteditable]')) return;
      if (e.key.length !== 1) return;
      typed = (typed + e.key.toLowerCase()).slice(-SECRET.length);
      if (typed === SECRET) confetti(window.innerWidth / 2, window.innerHeight * 0.6, true);
    };

    window.addEventListener(CONFETTI_EVENT, onBurst);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener(CONFETTI_EVENT, onBurst);
      window.removeEventListener('keydown', onKey);
      timers.forEach(clearTimeout);
    };
  }, []);

  if (!bursts.length) return null;
  const big = bursts.some((b) => b.big);

  return (
    <div className={s.confetti} aria-hidden="true">
      {bursts.map((b) =>
        b.pieces.map((p, i) => (
          <i
            key={`${b.id}-${i}`}
            style={{
              left: b.x,
              top: b.y,
              width: p.w,
              height: p.h,
              background: p.c,
              borderRadius: p.round ? '50%' : 2,
              animationDelay: `${p.d}s`,
              animationDuration: b.big ? '2.8s' : '1.5s',
              '--dx': `${p.dx.toFixed(0)}px`,
              '--dy': `${p.dy.toFixed(0)}px`,
              '--fall': `${p.fall.toFixed(0)}px`,
              '--r': `${p.r.toFixed(0)}deg`,
            } as Vars}
          />
        )),
      )}
      {big && (
        <div className={s.surprisePeep}>
          <span className={s.surpriseSay}>Surprise! Thanks for dropping by 🎉</span>
          <Peep seed="Kunal" bg="eef1ff" pose="jump" size={128} />
        </div>
      )}
    </div>
  );
}

/** Small "🎁 surprise me" text button for the hero. */
export function SurpriseButton() {
  return (
    <button
      type="button"
      className={s.surpriseBtn}
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        confetti(r.left + r.width / 2, r.top + r.height / 2, true);
      }}
    >
      <span className={s.gift} aria-hidden="true">🎁</span> surprise me
    </button>
  );
}
