'use client';

import { useState } from 'react';
import styles from './portfolio.module.css';

export interface FilterTile {
  /** '' = all */
  key: string;
  label: string;
  count: number;
  color: string;
}

/**
 * Industry tiles + "SHOWING x OF y" line. The cards themselves are
 * server-rendered children; filtering only flips `data-filter` on the
 * grid and CSS hides the cards whose `data-cat` doesn't match.
 */
export default function WorkFilter({
  tiles,
  total,
  children,
}: {
  tiles: FilterTile[];
  total: number;
  children: React.ReactNode;
}) {
  const [active, setActive] = useState('');
  const current = tiles.find((t) => t.key === active) ?? tiles[0];
  const shown = active ? current.count : total;

  return (
    <>
      <section className="wrap" aria-label="Filter by industry">
        <div className={styles.tiles}>
          {tiles.map((t) => (
            <button
              key={t.key || 'all'}
              type="button"
              className={styles.tile}
              aria-pressed={active === t.key}
              onClick={() => setActive(t.key)}
            >
              <span className={styles.tileLabel} style={{ color: t.color }}>{t.label.toUpperCase()}</span>
              <span className={styles.tileCount}>{t.count}</span>
            </button>
          ))}
        </div>
      </section>

      <section className={`wrap ${styles.projects}`} aria-label="Projects">
        <p className={styles.showing} aria-live="polite">
          SHOWING {shown} OF {total}
          {active ? ` · ${current.label.toUpperCase()}` : ''}
        </p>
        <div className={styles.grid} data-filter={active || undefined}>
          {children}
        </div>
      </section>
    </>
  );
}
