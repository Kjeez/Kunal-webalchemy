import React from 'react';

export interface Stat {
  /** Numeric target for the count-up animation. */
  value: number;
  /** Suffix after the number, e.g. "+", "%". */
  suffix?: string;
  label: string;
}

export interface StatsStripProps {
  stats: Stat[];
}

/**
 * Full-width bordered stats band (`.strip`). Numbers are server-rendered
 * at their final value; Effects animates them from 0 when JS is enabled.
 */
const StatsStrip: React.FC<StatsStripProps> = ({ stats }) => (
  <div className="strip">
    <div className="wrap">
      <div className="strip-inner">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="val">
              <span data-count={s.value}>{s.value}</span>
              {s.suffix && <span className="suf">{s.suffix}</span>}
            </div>
            <div className="lbl">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default StatsStrip;
