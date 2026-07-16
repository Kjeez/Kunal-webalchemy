import React from 'react';
import Link from 'next/link';
import { ArrowNE, Star } from './icons';

export interface HeroCta {
  label: string;
  href: string;
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
  /** Floating decorative stars/pills in the side margins (hidden <1200px). */
  decor?: boolean;
  /** Extra content rendered inside .hero-foot after the CTAs (e.g. proof pills). */
  children?: React.ReactNode;
}

/**
 * Editorial hero: eyebrow → oversized H1 (line-mask reveal) → sub → dual CTA.
 * Server component; the reveal animation is CSS-only and JS-gated.
 */
const Hero: React.FC<HeroProps> = ({
  eyebrow,
  title,
  sub,
  primaryCta,
  secondaryCta,
  decor = true,
  children,
}) => {
  const lines = Array.isArray(title) ? title : [title];

  return (
    <section className="hero">
      {decor && (
        <>
          <span
            className="hero-float d4"
            style={{ top: '15%', left: '5%', width: 32, height: 32, color: 'var(--orange)' }}
            aria-hidden="true"
          >
            <Star />
          </span>
          <span
            className="hero-float d5"
            style={{ top: '78%', right: '6%', width: 24, height: 24, color: 'var(--violet)' }}
            aria-hidden="true"
          >
            <Star />
          </span>
        </>
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
