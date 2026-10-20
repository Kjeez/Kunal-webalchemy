import type { CSSProperties } from 'react';

/* Drifting geometric confetti behind a section. Absolutely positioned at
   z-index -1 inside a `.has-decor` parent (position: relative; isolation),
   so it always sits behind the content and never takes clicks. */

type Kind = 'circle' | 'square' | 'pill' | 'ring' | 'half' | 'plus' | 'star' | 'squiggle';
/** [kind, size px, colour, left, top, seconds per loop, rotation°] */
type Shape = [Kind, number, string, string, string, number, number?];

type Vars = CSSProperties & Record<`--${string}`, string | number>;

const PRESETS: Record<string, Shape[]> = {
  /* light heroes — keeps to the right half and the edges, away from headlines */
  hero: [
    ['ring', 64, '#7a4bc2', '89%', '6%', 9],
    ['circle', 20, '#e3a008', '74%', '16%', 6],
    ['square', 26, '#3557f5', '95%', '44%', 7, 14],
    ['plus', 22, '#2f7a4f', '61%', '7%', 6.5],
    ['pill', 72, '#ff8a6b', '80%', '88%', 8, -12],
    ['squiggle', 64, '#c0532b', '92%', '72%', 7.5],
    ['star', 22, '#e3a008', '55%', '94%', 5.5],
    ['circle', 12, '#14161c', '68%', '58%', 4.5],
  ],
  /* lighter version for text-only heroes */
  soft: [
    ['ring', 54, '#7a4bc2', '90%', '10%', 9],
    ['star', 22, '#e3a008', '78%', '24%', 5.5],
    ['square', 22, '#3557f5', '94%', '62%', 7, 14],
    ['plus', 20, '#2f7a4f', '70%', '78%', 6.5],
    ['circle', 14, '#ff8a6b', '84%', '90%', 5],
  ],
  /* dark bands */
  dark: [
    ['ring', 140, '#2a2d36', '84%', '4%', 11],
    ['circle', 22, '#ff8a6b', '93%', '42%', 7],
    ['square', 18, '#9fb0ff', '1.5%', '8%', 8, 45],
    ['square', 26, '#e3a008', '72%', '86%', 9, 12],
    ['pill', 64, '#2f7a4f', '4%', '84%', 10, -15],
    ['star', 20, '#9fb0ff', '46%', '12%', 6],
    ['plus', 18, '#7fd6a0', '58%', '78%', 7],
  ],
  /* celebration (thank-you) */
  party: [
    ['star', 26, '#e3a008', '8%', '12%', 5],
    ['circle', 18, '#3557f5', '22%', '80%', 6],
    ['square', 20, '#ff8a6b', '40%', '6%', 5.5, 20],
    ['plus', 22, '#2f7a4f', '62%', '18%', 6],
    ['ring', 56, '#7a4bc2', '86%', '10%', 8],
    ['pill', 60, '#e3a008', '78%', '84%', 7, -14],
    ['star', 18, '#c0532b', '94%', '52%', 4.5],
    ['circle', 12, '#14161c', '52%', '90%', 4],
  ],
};

function ShapeEl({ kind, size, color }: { kind: Kind; size: number; color: string }) {
  switch (kind) {
    case 'plus':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24"><path d="M12 3v18M3 12h18" stroke={color} strokeWidth="5" strokeLinecap="round" /></svg>
      );
    case 'star':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24"><path d="M12 0c.7 6.3 5 10.6 12 12-7 1.4-11.3 5.7-12 12-.7-6.3-5-10.6-12-12C7 10.6 11.3 6.3 12 0z" fill={color} /></svg>
      );
    case 'squiggle':
      return (
        <svg width={size} height={size * 0.35} viewBox="0 0 64 22"><path d="M3 15c6-10 11-10 15 0s9 10 14 0 10-10 14 0 9 10 15 0" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" /></svg>
      );
    default: {
      const st: CSSProperties = { width: size, height: kind === 'pill' ? size * 0.36 : kind === 'half' ? size / 2 : size, background: color };
      if (kind === 'circle') st.borderRadius = '50%';
      if (kind === 'square') st.borderRadius = 6;
      if (kind === 'pill') st.borderRadius = 999;
      if (kind === 'half') st.borderRadius = `${size}px ${size}px 0 0`;
      if (kind === 'ring') Object.assign(st, { background: 'transparent', border: `3px solid ${color}`, borderRadius: '50%' });
      return <i style={st} />;
    }
  }
}

export default function FloatField({
  preset = 'hero',
  className = '',
}: {
  preset?: keyof typeof PRESETS;
  className?: string;
}) {
  return (
    <div className={`ff ${className}`} data-motion aria-hidden="true">
      {PRESETS[preset].map(([kind, size, color, left, top, dur, rot = 0], i) => (
        <span
          key={i}
          className="ff-s"
          style={{ left, top, '--dur': `${dur}s`, '--delay': `${-i * 0.9}s`, '--r': `${rot}deg` } as Vars}
        >
          <ShapeEl kind={kind} size={size} color={color} />
        </span>
      ))}
    </div>
  );
}
