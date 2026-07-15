'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Testimonial {
  quote: string;
  name: string;
  business: string;
  location: string;
  /** Optional 1-5 star rating, defaults to 5 */
  rating?: number;
}

export interface TestimonialStripProps {
  testimonials: Testimonial[];
  /** Optional section heading */
  heading?: string;
  /** Optional section sub-heading */
  subheading?: string;
  id?: string;
}

// ---------------------------------------------------------------------------
// Sub-component: Star rating display
// ---------------------------------------------------------------------------

const StarRating: React.FC<{ count: number }> = ({ count }) => (
  <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={
          i < count ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600 fill-gray-600'
        }
      />
    ))}
  </div>
);

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const TestimonialStrip: React.FC<TestimonialStripProps> = ({
  testimonials,
  heading = 'What Our Clients Say',
  subheading,
  id = 'testimonials',
}) => {
  return (
    <section
      id={id}
      className="relative w-full py-20 border-t border-white/5 overflow-hidden"
      aria-labelledby={`${id}-heading`}
    >
      {/* Decorative blobs — aria-hidden so screen readers skip */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute left-0 bottom-1/3 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ----------------------------------------------------------------
            Section header
        ---------------------------------------------------------------- */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="text-gray-300 text-xs font-bold uppercase tracking-widest border-l border-white/10 pl-2 ml-1">
              Client Reviews
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
            Testimonial cards — static grid, all text in initial DOM
        ---------------------------------------------------------------- */}
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 list-none p-0 m-0"
          aria-label="Client testimonials"
        >
          {testimonials.map((t, index) => (
            <li
              key={index}
              className="group relative flex flex-col bg-navy-800/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
            >
              {/* Decorative large quote icon */}
              <div
                aria-hidden="true"
                className="absolute top-6 right-6 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-500"
              >
                <Quote size={72} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="mb-5 relative z-10">
                <StarRating count={t.rating ?? 5} />
              </div>

              {/* Quote — always in DOM, crawlable */}
              <blockquote className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 flex-grow relative z-10 not-italic">
                <p>"{t.quote}"</p>
              </blockquote>

              {/* Attribution */}
              <footer className="relative z-10 pt-5 border-t border-white/5 mt-auto">
                <cite className="not-italic">
                  <span className="block text-white font-bold text-sm">{t.name}</span>
                  <span className="block text-cyan-400/80 text-xs mt-0.5">
                    {t.business}
                    {t.location ? ` · ${t.location}` : ''}
                  </span>
                </cite>
              </footer>

              {/* Hover glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TestimonialStrip;
