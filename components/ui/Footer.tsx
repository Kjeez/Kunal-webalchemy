import React from 'react';
import Link from 'next/link';
import { ArrowNE, Star } from './icons';
import {
  FOOTER_COLUMNS,
  FOOTER_LEGAL_LINKS,
  FOOTER_SOCIALS,
  TEL_HREF,
  PHONE_DISPLAY,
  whatsappHref,
  WHATSAPP_DEFAULT_MESSAGE,
  type NavLink,
} from '@/lib/site';

export interface FooterProps {
  /** Lead heading in the first column. */
  lead?: React.ReactNode;
  columns?: { title: string; links: NavLink[] }[];
  legalLinks?: NavLink[];
  socials?: NavLink[];
  /** Giant wordmark at the bottom. */
  wordmark?: string;
  bottomLeft?: React.ReactNode;
  bottomRight?: React.ReactNode;
}

/**
 * New-design footer: lead + link columns + contact rows + giant wordmark.
 * Carries over EVERY link from the legacy footer (see lib/site.ts).
 * Server component.
 */
const Footer: React.FC<FooterProps> = ({
  lead = (
    <>
      Websites that don&apos;t just look good <span className="amp">—</span> they sell.
    </>
  ),
  columns = FOOTER_COLUMNS,
  legalLinks = FOOTER_LEGAL_LINKS,
  socials = FOOTER_SOCIALS,
  wordmark = 'WebAlchemy',
  bottomLeft,
  bottomRight = <span>Made with ♥ in India</span>,
}) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-lead">
            <h3>{lead}</h3>
            {/* Newsletter — carried over from the legacy footer (was static
                there too). TODO: wire to a real subscription backend. */}
            <form className="news" aria-label="Newsletter signup">
              <label htmlFor="footer-news-email" className="sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
                Email address
              </label>
              <input id="footer-news-email" type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          {columns.map((col) => (
            <div className="foot-col" key={col.title}>
              <h5>{col.title}</h5>
              {col.links.map((l) => (
                <Link key={l.href + l.label} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          ))}

          <div className="foot-contact">
            <a className="cta-row accent" href={whatsappHref(WHATSAPP_DEFAULT_MESSAGE)} target="_blank" rel="noopener noreferrer">
              <span className="big">
                Chat on WhatsApp{' '}
                <span className="arr"><ArrowNE size={14} /></span>
              </span>
              <span className="sub">{PHONE_DISPLAY}</span>
            </a>
            <a className="cta-row" href={TEL_HREF}>
              <span className="big">
                Call us{' '}
                <span className="arr"><ArrowNE size={14} /></span>
              </span>
              <span className="sub">{PHONE_DISPLAY}</span>
            </a>
            {socials.length > 0 && (
              <div className="foot-socials">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} className="pill">
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="foot-word">
        <span
          className="foot-sticker"
          style={{ top: '6%', left: '12%', ['--rot' as string]: '-12deg', width: 44, height: 44, color: 'var(--orange)' }}
          aria-hidden="true"
        >
          <Star className="sk" />
        </span>
        <span
          className="foot-sticker pill"
          style={{ top: '10%', left: '70%', ['--rot' as string]: '-7deg', background: 'var(--blue)', color: '#fff', borderColor: 'var(--ink)' }}
          aria-hidden="true"
        >
          say hi ♥
        </span>
        <span className="word" aria-hidden="true">
          {wordmark}
        </span>
      </div>

      <div className="wrap">
        <div className="foot-bottom">
          <span>{bottomLeft ?? <>© {year} WebAlchemy Agency. All rights reserved.</>}</span>
          <span style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </span>
          <span>{bottomRight}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
