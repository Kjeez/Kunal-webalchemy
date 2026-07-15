'use client';

import React, { useState, useId } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  items: FaqItem[];
  /** Optional section heading. Defaults to "Frequently Asked Questions" */
  heading?: string;
  /** Optional section sub-heading */
  subheading?: string;
  /** HTML id applied to the <section> element */
  id?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const FaqSection: React.FC<FaqSectionProps> = ({
  items,
  heading = 'Frequently Asked Questions',
  subheading,
  id = 'faq',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const uid = useId();

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  // -------------------------------------------------------------------------
  // FAQPage JSON-LD — generated from the same items array (single source of truth)
  // -------------------------------------------------------------------------
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
        id={id}
        className="relative w-full py-20 border-t border-white/5"
        aria-labelledby={`${uid}-heading`}
      >
        {/* Subtle background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* ----------------------------------------------------------------
              Section header
          ---------------------------------------------------------------- */}
          <div className="text-center mb-14">
            <div className="w-12 h-12 mx-auto bg-navy-800 rounded-xl flex items-center justify-center mb-4 border border-white/5 shadow-inner">
              <HelpCircle className="text-cyan-400" size={22} />
            </div>

            <h2
              id={`${uid}-heading`}
              className="text-3xl md:text-4xl font-bold text-white mb-3"
            >
              {heading}
            </h2>

            {subheading && (
              <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                {subheading}
              </p>
            )}
          </div>

          {/* ----------------------------------------------------------------
              Accordion list
          ---------------------------------------------------------------- */}
          <dl className="space-y-4">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `${uid}-panel-${index}`;
              const triggerId = `${uid}-trigger-${index}`;

              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-navy-800/50 border-cyan-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.25)]'
                      : 'bg-navy-800/30 border-white/5 hover:border-white/10'
                  }`}
                >
                  {/* Question — dt > button for semantic + a11y */}
                  <dt>
                    <button
                      id={triggerId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(index)}
                      className="w-full flex items-center justify-between gap-4 p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:ring-inset rounded-2xl"
                    >
                      <span
                        className={`font-semibold text-base md:text-lg transition-colors leading-snug ${
                          isOpen ? 'text-white' : 'text-gray-300'
                        }`}
                      >
                        {item.question}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? 'bg-cyan-500 text-navy-900'
                            : 'bg-white/5 text-gray-400'
                        }`}
                      >
                        {isOpen ? (
                          <Minus size={15} strokeWidth={3} />
                        ) : (
                          <Plus size={15} strokeWidth={3} />
                        )}
                      </span>
                    </button>
                  </dt>

                  {/* Answer — dd, CSS collapse keeps text in DOM for crawlers */}
                  <dd
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {/*
                      Content is ALWAYS present in the DOM — only visually
                      hidden via max-height/opacity. Googlebot can index it.
                    */}
                    <div className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                      {item.answer}
                    </div>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </section>
    </>
  );
};

export default FaqSection;
