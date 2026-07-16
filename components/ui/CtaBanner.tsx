import React from 'react';
import { ArrowNE, Star } from './icons';
import { TEL_HREF, PHONE_DISPLAY, whatsappHref, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/site';

export interface CtaBannerProps {
  /** Big heading inside the card (rendered as h2 by default). */
  heading: React.ReactNode;
  /** Supporting line under the heading. */
  text?: React.ReactNode;
  /** Social-proof line above the heading, e.g. <><b>100+ clients</b> scaled with us</>. */
  proof?: React.ReactNode;
  /** Defaults to the WhatsApp deep link (wa.me/917838583051). */
  primaryCta?: { label: string; href: string };
  /** Defaults to the tel: link. */
  secondaryCta?: { label: string; href: string };
  headingLevel?: 'h2' | 'h3';
  id?: string;
}

/**
 * The template's creative CTA card — blobs, floating icon tiles,
 * centered heading and dual action buttons. Server component.
 */
const CtaBanner: React.FC<CtaBannerProps> = ({
  heading,
  text,
  proof,
  primaryCta = { label: 'Chat on WhatsApp', href: whatsappHref(WHATSAPP_DEFAULT_MESSAGE) },
  secondaryCta = { label: `Call ${PHONE_DISPLAY}`, href: TEL_HREF },
  headingLevel = 'h2',
  id,
}) => {
  const Heading = headingLevel;
  const isExternal = (href: string) => /^(https?:|tel:|mailto:)/.test(href);

  const renderCta = (cta: { label: string; href: string }, cls: string, arrow = false) =>
    isExternal(cta.href) ? (
      <a
        href={cta.href}
        className={cls}
        {...(cta.href.startsWith('http')
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {cta.label}
        {arrow && <ArrowNE />}
      </a>
    ) : (
      <a href={cta.href} className={cls}>
        {cta.label}
        {arrow && <ArrowNE />}
      </a>
    );

  return (
    <section className="section contact" id={id}>
      <div className="wrap">
        <div className="cta-card">
          <span className="cta-blob b1" aria-hidden="true"></span>
          <span className="cta-blob b2" aria-hidden="true"></span>
          <span className="cta-blob b3" aria-hidden="true"></span>

          <span
            className="cta-icon"
            style={{ top: '20%', left: '7%', ['--rot' as string]: '-8deg', background: 'linear-gradient(150deg,#5d86ff,#2f6bff)', animationDelay: '-.5s' }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2l2.3 6.6L21 10.9l-6.7 2.3L12 20l-2.3-6.8L3 10.9l6.7-2.3z" /></svg>
          </span>
          <span
            className="cta-icon"
            style={{ top: '56%', left: '10%', ['--rot' as string]: '7deg', background: 'linear-gradient(150deg,#37c78d,#1f9e6f)', animationDelay: '-2.3s' }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" fill="#fff"><path d="M12 2C7.5 6 4.5 9 4.5 13.5A7.5 7.5 0 0012 21a7.5 7.5 0 007.5-7.5C19.5 9 16.5 6 12 2z" /></svg>
          </span>
          <span
            className="cta-icon"
            style={{ top: '22%', right: '8%', ['--rot' as string]: '8deg', background: 'linear-gradient(150deg,#ffffff,#e9e6db)', border: '1px solid var(--line)' }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#1B1A17" strokeWidth="2.4" strokeLinecap="round"><path d="M12 3v18M4.5 7.5l15 9M19.5 7.5l-15 9" /></svg>
          </span>
          <span
            className="cta-icon"
            style={{ top: '58%', right: '7%', ['--rot' as string]: '-7deg', background: 'linear-gradient(150deg,#ff8a3d,#ff5fa2)', animationDelay: '-1.4s' }}
            aria-hidden="true"
          >
            <Star className="" />
          </span>

          <div className="contact-inner">
            {proof && (
              <span className="cta-proof">
                <span className="txt">{proof}</span>
              </span>
            )}
            <Heading className="cta-heading">{heading}</Heading>
            {text && <p>{text}</p>}
            <div className="contact-actions">
              {renderCta(primaryCta, 'btn btn-dark btn-lg', true)}
              {secondaryCta && renderCta(secondaryCta, 'btn btn-out btn-lg')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
