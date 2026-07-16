import React from 'react';
import AccordionGroup from './AccordionGroup';

export interface ServiceAccordionItem {
  title: string;
  /** Body copy — string or richer node; rendered inside the panel. */
  body: React.ReactNode;
  /** Pill tags shown next to the body. */
  tags?: string[];
}

export interface ServiceAccordionProps {
  items: ServiceAccordionItem[];
  /** Index of the item open on load (template opens the first). */
  defaultOpen?: number;
  /** Heading level for item titles (template uses h3). */
  headingLevel?: 'h3' | 'h4';
}

/**
 * The template's `details.skill` capability accordion. Native <details>
 * so every panel is in the server HTML and crawlable; AccordionGroup
 * adds the smooth-height animation as a JS-gated enhancement.
 * Server component — copy comes in via `items`.
 */
const ServiceAccordion: React.FC<ServiceAccordionProps> = ({
  items,
  defaultOpen = 0,
  headingLevel = 'h3',
}) => {
  const Heading = headingLevel;
  return (
    <AccordionGroup className="skills">
      {items.map((item, i) => (
        <details className="skill r" key={item.title} open={i === defaultOpen}>
          <summary>
            <span className="s-idx">{String(i + 1).padStart(2, '0')}</span>
            <Heading>{item.title}</Heading>
            <span className="s-plus" aria-hidden="true"></span>
          </summary>
          <div className="s-body">
            <div className="s-body-inner">
              {typeof item.body === 'string' ? <p>{item.body}</p> : item.body}
              {item.tags && item.tags.length > 0 && (
                <div className="s-tags">
                  {item.tags.map((t) => (
                    <span className="pill" key={t}>{t}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </details>
      ))}
    </AccordionGroup>
  );
};

export default ServiceAccordion;
