import React from 'react';

/** Diagonal "north-east" arrow used across the design system's buttons. */
export const ArrowNE: React.FC<{ size?: number }> = ({ size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
    {...(size ? { width: size, height: size } : {})}
  >
    <path d="M7 17L17 7M17 7H8M17 7V16" />
  </svg>
);

/** Checkmark used in pricing plan feature lists. */
export const Check: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

/** Four-point star decor. */
export const Star: React.FC<{ className?: string }> = ({ className = 'star' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0c.7 6.3 5 10.6 12 12-7 1.4-11.3 5.7-12 12-.7-6.3-5-10.6-12-12C7 10.6 11.3 6.3 12 0z" />
  </svg>
);
