import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MapPin, Layers, Building2, ArrowRight } from 'lucide-react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface CaseStudyCardProps {
  title: string;
  client: string;
  industry: string;
  location: string;
  /** Tech stack labels, e.g. ["Next.js", "Shopify", "Tailwind"] */
  stack: string[];
  /** Measurable results, e.g. ["+320% organic traffic in 3 months"] */
  results: string[];
  /** Internal path ("/portfolio/acme") or external URL */
  href?: string;
}

export interface CaseStudyGridProps {
  children: React.ReactNode;
  /** Optional section heading */
  heading?: string;
  /** Optional section sub-heading */
  subheading?: string;
  id?: string;
}

// ---------------------------------------------------------------------------
// CaseStudyCard
// ---------------------------------------------------------------------------

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  client,
  industry,
  location,
  stack,
  results,
  href,
}) => {
  const isExternal = href?.startsWith('http');

  const inner = (
    <article className="group relative flex flex-col h-full bg-navy-800/40 border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.5)]">
      {/* Top accent line */}
      <div
        aria-hidden="true"
        className="h-0.5 w-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/60 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className="flex flex-col flex-1 p-7">
        {/* Meta row — industry + location */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium">
            <Building2 size={11} />
            {industry}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium">
            <MapPin size={11} />
            {location}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors leading-snug">
          {title}
        </h3>

        {/* Client */}
        <p className="text-gray-500 text-sm mb-5">{client}</p>

        {/* Results — always in DOM */}
        <ul className="space-y-2 mb-6 flex-1" aria-label="Key results">
          {results.map((result, i) => (
            <li key={i} className="flex items-start gap-2.5 text-gray-300 text-sm">
              <CheckCircle2
                size={15}
                className="text-teal-400 shrink-0 mt-0.5"
              />
              <span>{result}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack tags */}
        {stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5" aria-label="Technologies used">
            <span className="sr-only">Stack:</span>
            {stack.map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-navy-900/60 border border-white/10 text-gray-400 text-xs"
              >
                <Layers size={10} />
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* CTA row */}
        {href && (
          <div className="flex items-center gap-1.5 text-cyan-400 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200 mt-auto pt-4 border-t border-white/5">
            View case study
            <ArrowRight size={15} />
          </div>
        )}
      </div>

      {/* Hover overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
      />
    </article>
  );

  if (!href) return inner;

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {inner}
      </a>
    );
  }

  return (
    <Link to={href} className="block h-full">
      {inner}
    </Link>
  );
};

// ---------------------------------------------------------------------------
// CaseStudyGrid — layout wrapper
// ---------------------------------------------------------------------------

export const CaseStudyGrid: React.FC<CaseStudyGridProps> = ({
  children,
  heading,
  subheading,
  id = 'case-studies',
}) => (
  <section
    id={id}
    className="relative w-full py-20 border-t border-white/5"
    aria-labelledby={heading ? `${id}-heading` : undefined}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {heading && (
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            id={`${id}-heading`}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {heading}
          </h2>
          {subheading && (
            <p className="text-gray-400 text-base md:text-lg">{subheading}</p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {children}
      </div>
    </div>
  </section>
);

export default CaseStudyCard;
