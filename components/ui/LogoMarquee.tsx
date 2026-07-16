import React from 'react';

export interface LogoMarqueeProps {
  /** Names shown as pills (client names, tech names…). */
  items: string[];
  /** Optional centered mono label above the strip. */
  label?: string;
  /** Heading element for the label ('p' for a plain line, 'h3' to preserve legacy hierarchy). */
  labelAs?: 'p' | 'h3';
  /** Seconds for one loop. */
  duration?: number;
}

/**
 * Infinite pill marquee (CSS-only; wraps statically under
 * prefers-reduced-motion). Server component — items come via props.
 */
const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  items,
  label,
  labelAs = 'p',
  duration = 60,
}) => {
  const Label = labelAs;
  return (
    <div>
      {label && (
        <Label className="mono center" style={{ color: 'var(--ink-soft)', marginBottom: 18 }}>
          {label}
        </Label>
      )}
      <div className="marquee">
        <div className="marquee-track" style={{ animationDuration: `${duration}s` }}>
          {/* duplicated track = seamless loop; second copy is aria-hidden */}
          {items.map((item) => (
            <span className="pill" key={item}>{item}</span>
          ))}
          <span aria-hidden="true" style={{ display: 'contents' }}>
            {items.map((item) => (
              <span className="pill" key={`dup-${item}`}>{item}</span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
