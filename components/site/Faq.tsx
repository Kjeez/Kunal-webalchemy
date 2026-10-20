'use client';

import { useId, useState } from 'react';

export interface FaqItem {
  q: string;
  a: string;
}

/**
 * One-open-at-a-time accordion (first item open, like the design).
 * Set `jsonLd` to also emit FAQPage structured data.
 */
export default function Faq({ items, jsonLd = false }: { items: FaqItem[]; jsonLd?: boolean }) {
  const [open, setOpen] = useState(0);
  const id = useId();

  return (
    <div className="faq">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: items.map((it) => ({
                '@type': 'Question',
                name: it.q,
                acceptedAnswer: { '@type': 'Answer', text: it.a },
              })),
            }),
          }}
        />
      )}
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className={`faq-item${isOpen ? ' open' : ''}`}>
            <h3 style={{ fontSize: 'inherit' }}>
              <button
                type="button"
                className="faq-q"
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{it.q}</span>
                <span className="faq-sign" aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
            </h3>
            <div id={`${id}-${i}`} hidden={!isOpen}>
              <p className="faq-a">{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
