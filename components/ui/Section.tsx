import React from 'react';

export type SectionAccent =
  | 'orange' | 'blue' | 'green' | 'violet' | 'pink' | 'yellow';

export interface SectionProps {
  /** Mono index label, e.g. "01" → rendered as "(01)". */
  index?: string;
  /** Short mono kicker after the index, e.g. "Selected work". */
  kicker?: string;
  /** Section heading (rendered as `headingLevel`, h2 by default). */
  heading?: React.ReactNode;
  /** Right-aligned aside paragraph next to the heading. */
  aside?: React.ReactNode;
  /** 'paper' (default) or 'dark' — the --night band treatment. */
  variant?: 'paper' | 'dark';
  accent?: SectionAccent;
  headingLevel?: 'h1' | 'h2' | 'h3';
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Standard page section: `.section > .wrap > .shead + children`,
 * with the template's `(0X)` mono index label and paper/dark variants.
 * Server component — all content arrives via props/children.
 */
const Section: React.FC<SectionProps> = ({
  index,
  kicker,
  heading,
  aside,
  variant = 'paper',
  accent = 'orange',
  headingLevel = 'h2',
  id,
  className = '',
  children,
}) => {
  const Heading = headingLevel;
  const hasHead = Boolean(index || kicker || heading || aside);

  return (
    <section
      id={id}
      className={`section${variant === 'dark' ? ' on-dark' : ''}${className ? ` ${className}` : ''}`}
    >
      <div className="wrap">
        {hasHead && (
          <div className="shead">
            <div>
              {(index || kicker) && (
                <span
                  className="mono label"
                  style={{ ['--accent' as string]: `var(--${accent})` }}
                >
                  {index && <span className="idx">({index})</span>}
                  {kicker}
                </span>
              )}
              {heading && (
                <Heading style={{ marginTop: index || kicker ? 18 : 0 }} className="r">
                  {heading}
                </Heading>
              )}
            </div>
            {aside && <p className="aside r">{aside}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
