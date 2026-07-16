import React from 'react';
import Link from 'next/link';

export interface ProjectCardProps {
  /** Client / project name (row heading). */
  title: string;
  /** Category or industry, e.g. "E-commerce & Dev". */
  category: string;
  /** Headline result, e.g. "+212% sign-ups". */
  metric?: string;
  /** Optional link — makes the whole row clickable. */
  href?: string;
  /** External link (case-study site, live URL). */
  external?: boolean;
  /** Optional thumbnail node (SVG mockup or <img>). */
  thumb?: React.ReactNode;
  /** Row number — supplied by ProjectGrid. */
  index?: number;
  /** Heading level (h3 by default). */
  headingLevel?: 'h3' | 'h4';
}

/** One row of the template's `.proj-list` selected-work list. */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  metric,
  href,
  external,
  thumb,
  index = 1,
  headingLevel = 'h3',
}) => {
  const Heading = headingLevel;
  return (
    <article className="proj r">
      <span className="p-idx">{String(index).padStart(2, '0')}</span>
      {thumb && (
        <span className="proj-thumb" aria-hidden="true">
          {thumb}
        </span>
      )}
      <Heading>
        <span className="bead"></span>
        {title}
      </Heading>
      <span className="p-cat">{category}</span>
      {metric && <span className="p-metric">{metric}</span>}
      {href &&
        (external ? (
          <a
            className="proj-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} — ${category}`}
          />
        ) : (
          <Link className="proj-link" href={href} aria-label={`${title} — ${category}`} />
        ))}
    </article>
  );
};

export interface ProjectGridProps {
  children: React.ReactNode;
}

/** Wrapper that numbers its ProjectCard children and draws the list rules. */
export const ProjectGrid: React.FC<ProjectGridProps> = ({ children }) => (
  <div className="proj-list">
    {React.Children.map(children, (child, i) =>
      React.isValidElement<ProjectCardProps>(child)
        ? React.cloneElement(child, { index: i + 1 })
        : child
    )}
  </div>
);

export default ProjectCard;
