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

/** Soft cloud decor. */
export const Cloud: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

/** Smiley sticker decor. */
export const Smiley: React.FC = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
    <circle cx="12" cy="12" r="10.5" fill="var(--yellow)" stroke="var(--ink)" strokeWidth="1.4" />
    <circle cx="8.6" cy="10" r="1.3" fill="var(--ink)" />
    <circle cx="15.4" cy="10" r="1.3" fill="var(--ink)" />
    <path d="M7.8 14.2c1.3 1.7 2.7 2.5 4.2 2.5s2.9-.8 4.2-2.5" fill="none" stroke="var(--ink)" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

/** Lightning bolt decor. */
export const Bolt: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
    <path d="M13 2 4.5 13.5H11L9.5 22 18 10.5h-6.5L13 2Z" />
  </svg>
);

/** Heart decor. */
export const Heart: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
    <path d="M12 21s-8-5.3-10.3-9.6C-.2 7.7 1.8 3.5 6 3.5c2 0 3.4 1.2 4.5 2.6 1.1-1.4 2.5-2.6 4.5-2.6 4.2 0 6.2 4.2 4.5 7.9C20 15.7 12 21 12 21Z" />
  </svg>
);

/** Squiggle underline decor. */
export const Squiggle: React.FC = () => (
  <svg viewBox="0 0 64 20" fill="none" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
    <path d="M2 14c6-10 10-10 16 0s10 10 16 0 10-10 16 0" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
  </svg>
);
