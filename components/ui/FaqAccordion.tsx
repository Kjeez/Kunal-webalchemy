import React from 'react';
import AccordionGroup from './AccordionGroup';

export interface FaqAccordionItem {
  question: string;
  answer: string;
}

export interface FaqAccordionProps {
  items: FaqAccordionItem[];
  /**
   * Emit FAQPage JSON-LD generated from the same items array
   * (single source of truth — same shape as the legacy FaqSection).
   * Disable only if the page already emits FAQPage schema elsewhere.
   */
  emitJsonLd?: boolean;
}

/**
 * The template's `details.q` FAQ list. Native <details> keeps every
 * answer in the server HTML; AccordionGroup adds the smooth-height
 * enhancement. Server component.
 */
const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  emitJsonLd = true,
}) => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
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
      {emitJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <AccordionGroup className="faq">
        {items.map((item) => (
          <details className="q" key={item.question}>
            <summary>
              {item.question}
              <span className="q-ico" aria-hidden="true"></span>
            </summary>
            <div className="q-body">
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </AccordionGroup>
    </>
  );
};

export default FaqAccordion;
