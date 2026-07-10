import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ServiceArea {
  name: string;
  description: string;
  /** Internal path, e.g. "/website-developer-delhi" */
  href?: string;
}

export interface ServiceAreaBlockProps {
  areas: ServiceArea[];
  /** Optional section heading */
  heading?: string;
  /** Optional section sub-heading */
  subheading?: string;
  id?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const ServiceAreaBlock: React.FC<ServiceAreaBlockProps> = ({
  areas,
  heading = 'Areas We Serve',
  subheading,
  id = 'service-areas',
}) => {
  return (
    <section
      id={id}
      className="relative w-full py-20 bg-navy-800/20 border-t border-white/5"
      aria-labelledby={`${id}-heading`}
    >
      {/* Subtle background glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/4 bottom-0 w-[500px] h-[300px] bg-teal-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ----------------------------------------------------------------
            Section header
        ---------------------------------------------------------------- */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-teal-900/20 border border-teal-500/30">
            <MapPin size={14} className="text-teal-400" />
            <span className="text-teal-300 text-xs font-bold uppercase tracking-widest">
              Service Coverage
            </span>
          </div>

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

        {/* ----------------------------------------------------------------
            Area cards — all text in initial DOM, no JS-hidden content
        ---------------------------------------------------------------- */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0 m-0">
          {areas.map((area, index) => {
            const cardContent = (
              <div
                className={`group relative flex flex-col h-full p-6 rounded-2xl bg-navy-800/40 border transition-all duration-300 ${
                  area.href
                    ? 'border-white/5 hover:border-cyan-500/40 hover:bg-navy-800/60 cursor-pointer'
                    : 'border-white/5'
                }`}
              >
                {/* Icon + name row */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span
                    aria-hidden="true"
                    className="w-8 h-8 rounded-lg bg-teal-900/30 border border-teal-500/20 flex items-center justify-center shrink-0"
                  >
                    <MapPin size={15} className="text-teal-400" />
                  </span>
                  <h3
                    className={`font-bold text-base transition-colors leading-tight ${
                      area.href
                        ? 'text-white group-hover:text-cyan-400'
                        : 'text-white'
                    }`}
                  >
                    {area.name}
                  </h3>
                </div>

                {/* Description — always in DOM */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {area.description}
                </p>

                {/* Link indicator */}
                {area.href && (
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center gap-1 mt-4 text-xs text-cyan-500/70 group-hover:text-cyan-400 transition-colors font-medium"
                  >
                    View services <ArrowRight size={12} />
                  </span>
                )}

                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                />
              </div>
            );

            return (
              <li key={index}>
                {area.href ? (
                  <Link to={area.href} className="block h-full" aria-label={`Web development services in ${area.name}`}>
                    {cardContent}
                  </Link>
                ) : (
                  cardContent
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ServiceAreaBlock;
