import type { CSSProperties } from 'react';

/* Decorative "open-peeps" characters (dicebear, same set the landing design
   uses). Purely ornamental: alt="", aria-hidden, lazy-loaded. Motion is CSS
   (app/site.css → "motion: characters & shapes"); it pauses off-screen via
   MotionObserver and stops entirely under prefers-reduced-motion. */

export type Pose = 'wave' | 'bob' | 'jump' | 'sway' | 'float' | 'still';

type Vars = CSSProperties & Record<`--${string}`, string | number>;

export const peepSrc = (seed: string, bg?: string) =>
  `https://api.dicebear.com/9.x/open-peeps/svg?seed=${encodeURIComponent(seed)}${bg ? `&backgroundColor=${bg}` : ''}`;

export interface PeepProps {
  seed: string;
  /** Hex without '#'; gives the character a round tinted backdrop. */
  bg?: string;
  pose?: Pose;
  size?: number;
  /** Little speech bubble that fades in and out on a loop. */
  bubble?: string;
  /** Offsets the loop so neighbours don't move in lockstep (seconds). */
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export default function Peep({ seed, bg, pose = 'bob', size = 96, bubble, delay = 0, className = '', style }: PeepProps) {
  const vars: Vars = { '--size': `${size}px`, '--pd': `${delay}s`, ...style };
  return (
    <span className={`peep peep-${pose}${bg ? ' peep-disc' : ''} ${className}`} style={vars} aria-hidden="true">
      {bubble && <span className="peep-bubble">{bubble}</span>}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={peepSrc(seed, bg)} alt="" width={size} height={size} loading="lazy" decoding="async" />
    </span>
  );
}

/** A row of characters standing together (heroes, footer band, thank-you). */
export function PeepCrew({
  peeps,
  className = '',
  style,
}: {
  peeps: PeepProps[];
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`peep-crew ${className}`} style={style} data-motion aria-hidden="true">
      {peeps.map((p, i) => <Peep key={p.seed + i} delay={i * 0.45} {...p} />)}
    </div>
  );
}

/**
 * A character peeking up over the top edge of its (position: relative)
 * parent card: it rises from behind the edge, looks around, ducks back.
 */
export function PeekOver({
  seed,
  bg,
  size = 104,
  side = 'right',
  bubble,
}: {
  seed: string;
  bg?: string;
  size?: number;
  side?: 'left' | 'right';
  bubble?: string;
}) {
  return (
    <span className={`peek-over peek-${side}`} style={{ '--size': `${size}px` } as Vars} data-motion aria-hidden="true">
      {bubble && <span className="peep-bubble peek-bubble">{bubble}</span>}
      <span className="peek-clip">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={peepSrc(seed, bg)} alt="" width={size} height={size} loading="lazy" decoding="async" />
      </span>
    </span>
  );
}
