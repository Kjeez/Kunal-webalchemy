'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  EMAIL,
  PHONE_DISPLAY,
  SITE_FOOTER_COLUMNS,
  whatsappHref,
  WHATSAPP_DEFAULT_MESSAGE,
} from '@/lib/site';
import { Logo } from './SiteHeader';

/* Pages that already end on a contact form skip the dark CTA band. */
const NO_CTA = ['/contact', '/thank-you'];

export default function SiteFooter() {
  const pathname = usePathname() || '/';
  const showCta = !NO_CTA.includes(pathname) && pathname !== '/';

  return (
    <>
      {showCta && (
        <section className="band-dark foot-cta" aria-labelledby="foot-cta-h">
          <div className="wrap foot-cta-in">
            <h2 id="foot-cta-h">
              Ready for a website that <span className="serif">actually sells?</span>
            </h2>
            <div className="stack" style={{ gap: 20 }}>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--dark-muted)' }}>
                Free 30-minute strategy call. Fixed quote, no obligation. Websites from ₹14,999,
                live in as little as 7 days.
              </p>
              <div className="btnrow">
                <Link href="/contact" className="btn btn-primary">Get Free Estimate →</Link>
                <a href={whatsappHref(WHATSAPP_DEFAULT_MESSAGE)} className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
      <footer className="site-footer">
        <div className="wrap foot-in">
          <div className="foot-cols">
            <div className="foot-brand">
              <Logo />
              <p>
                Crafting digital experiences that merge psychology with technology. We build
                websites that don&apos;t just look good—they sell.
              </p>
              <p>
                <a href={`mailto:${EMAIL}`} style={{ color: 'var(--ink)' }}>{EMAIL}</a>
                <br />
                {PHONE_DISPLAY} · New Delhi
              </p>
            </div>
            {SITE_FOOTER_COLUMNS.map((col) => (
              <nav key={col.title} className="foot-col" aria-label={col.title}>
                <div className="title">{col.title}</div>
                {col.links.map((l) => (
                  <Link key={l.href} href={l.href}>{l.label}</Link>
                ))}
              </nav>
            ))}
          </div>
          <div className="foot-base">
            <span>© {new Date().getFullYear()} WebAlchemy Agency. Made in India.</span>
            <nav aria-label="Legal">
              <a href="/sitemap.xml">Sitemap</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
