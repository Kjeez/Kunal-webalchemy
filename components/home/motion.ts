/** True when the visitor asked for reduced motion (client only). */
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Decorative dicebear "open-peeps" avatar (always rendered with alt=""). */
export const peep = (seed: string, bg?: string) =>
  `https://api.dicebear.com/9.x/open-peeps/svg?seed=${encodeURIComponent(seed)}${bg ? `&backgroundColor=${bg}` : ''}`;

/** Window event the <Surprise /> overlay listens for (confetti burst at x/y). */
export const CONFETTI_EVENT = 'kunal:confetti';
export const confetti = (x: number, y: number, big = false) =>
  window.dispatchEvent(new CustomEvent(CONFETTI_EVENT, { detail: { x, y, big } }));
