import React from 'react';
import Link from 'next/link';
import { ArrowNE, Star } from './icons';

export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroFloat {
  kind: 'star' | 'pill';
  /** Pill text (kind: 'pill'). */
  text?: React.ReactNode;
  /** Position + size, e.g. { top: '15%', left: '5%', width: 32, height: 32 }. */
  style: React.CSSProperties;
  /** Tilt, e.g. '5deg'. */
  rot?: string;
  /** Star color, or the pill's status-dot color (omit for no dot). */
  color?: string;
  /** Dark (ink) pill variant. */
  dark?: boolean;
  /** Bob-animation stagger slot 1–5. */
  d?: 1 | 2 | 3 | 4 | 5;
}

export interface HeroProps {
  /** Mono eyebrow line above the title, e.g. "Creative Digital Studio". */
  eyebrow?: string;
  /**
   * Oversized H1. Pass an array of lines for the masked line-rise effect,
   * or a single node for one line.
   */
  title: React.ReactNode | React.ReactNode[];
  /** Sub-paragraph under the title. */
  sub?: React.ReactNode;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  /**
   * Floating decor in the side margins (hidden <1200px; drifts with the
   * mouse via CursorFx). Defaults to two stars; pass pills for the full
   * template look, or an empty array for none.
   */
  floats?: HeroFloat[];
  /** Extra content rendered inside .hero-foot after the CTAs. */
  children?: React.ReactNode;
}

const DEFAULT_FLOATS: HeroFloat[] = [
  { kind: 'star', style: { top: '15%', left: '5%', width: 32, height: 32 }, color: 'var(--orange)', d: 4 },
  { kind: 'star', style: { top: '78%', right: '6%', width: 24, height: 24 }, color: 'var(--violet)', d: 5 },
];

/**
 * Editorial hero: eyebrow → oversized H1 (line-mask reveal) → sub → dual CTA.
 * Server component; reveal is CSS-only and JS-gated.
 */
const Hero: React.FC<HeroProps> = ({
  eyebrow,
  title,
  sub,
  primaryCta,
  secondaryCta,
  floats = DEFAULT_FLOATS,
  children,
}) => {
  const lines = Array.isArray(title) ? title : [title];

  return (
    <section className="hero">
      {floats.map((f, i) =>
        f.kind === 'star' ? (
          <span
            key={i}
            className={`hero-float d${f.d ?? (i % 5) + 1}`}
            style={{ ...f.style, color: f.color, ...(f.rot ? { ['--rot' as string]: f.rot } : {}) }}
            aria-hidden="true"
          >
            <Star />
          </span>
        ) : (
          <span
            key={i}
            className={`hero-float d${f.d ?? (i % 5) + 1} pill`}
            style={{
              ...f.style,
              ...(f.rot ? { ['--rot' as string]: f.rot } : {}),
              ...(f.dark
                ? { background: 'var(--ink)', color: 'var(--paper)', borderColor: 'var(--ink)' }
                : {}),
            }}
            aria-hidden="true"
          >
            {f.color && !f.dark && <span className="dot" style={{ background: f.color }}></span>}
            {f.text}
          </span>
        )
      )}
      <div className="wrap">
        {eyebrow && (
          <div className="hero-top">
            <span className="mono label">
              <span className="dot"></span>
              {eyebrow}
            </span>
          </div>
        )}

        <h1 className="hero-title">
          {lines.map((line, i) => (
            <span className="line" key={i}>
              <span className="line-inner">{line}</span>
            </span>
          ))}
        </h1>

        <div className="hero-foot">
          {sub && <p className="hero-sub" style={{ marginTop: 'clamp(28px,4vw,44px)' }}>{sub}</p>}
          {(primaryCta || secondaryCta) && (
            <div className="hero-actions">
              {primaryCta && (
                <Link href={primaryCta.href} className="btn btn-dark btn-lg">
                  {primaryCta.label}
                  <ArrowNE />
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn btn-out btn-lg">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default Hero;
