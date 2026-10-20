import type { CSSProperties } from 'react';

const DEFAULT_SEPS = ['#3557f5', '#e3a008', '#2f7a4f', '#ff8a6b'];

/**
 * Infinite text marquee with little shape separators (circle / diamond /
 * square, cycling). Two identical halves translate -50%; the second half
 * is aria-hidden. No CSS mask (Chromium paint trails) — fade edges, if
 * wanted, go on a wrapper as gradient overlays.
 */
export default function Marquee({
  items,
  duration = 40,
  reverse = false,
  seps = DEFAULT_SEPS,
  itemStyle,
}: {
  items: string[];
  duration?: number;
  reverse?: boolean;
  seps?: string[];
  itemStyle?: CSSProperties;
}) {
  const half = (copy: number) => (
    <div className="marquee-half" aria-hidden={copy === 1 ? true : undefined}>
      {items.map((t, i) => (
        <span key={`${copy}-${i}`} style={{ display: 'contents' }}>
          <span className="marquee-item" style={itemStyle}>{t}</span>
          <span
            aria-hidden="true"
            className={`marquee-sep${i % 3 === 0 ? ' round' : i % 3 === 1 ? ' diamond' : ''}`}
            style={{ background: seps[i % seps.length] }}
          />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee">
      <div
        className={`marquee-track${reverse ? ' rev' : ''}`}
        style={{ '--dur': `${duration}s` } as CSSProperties}
      >
        {half(0)}
        {half(1)}
      </div>
    </div>
  );
}
