import Link from 'next/link';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import s from './not-found.module.css';

// Unknown URLs get a real 404 status. This file sits outside the (site)
// route group, so it brings its own `.wa` shell (header + footer).
const LINKS = [
  { href: '/', k: '01', t: 'Home', d: 'Start from the top.' },
  { href: '/portfolio', k: '02', t: 'Work', d: 'Websites we have shipped.' },
  { href: '/contact', k: '03', t: 'Contact', d: 'Tell us what you were looking for.' },
];

export default function NotFound() {
  return (
    <div className="wa">
      <a href="#main" className="skip">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section className={`wrap ${s.hero}`} aria-labelledby="nf-h1">
          <p className={s.big} aria-hidden="true">
            4<span className="serif">0</span>4
          </p>
          <div className={s.copy}>
            <div className="eyebrow">ERROR 404 · PAGE NOT FOUND</div>
            <h1 id="nf-h1" className="h2">
              This page <span className="serif">doesn&apos;t exist.</span>
            </h1>
            <p className="lede">
              The link may be broken, or the page may have moved. Here are a few good places to pick things up again.
            </p>
            <nav aria-label="Helpful links" className={s.links}>
              {LINKS.map((l) => (
                <Link key={l.href} href={l.href} className={s.link}>
                  <span className={s.k}>{l.k}</span>
                  <span className={s.t}>{l.t} <span className={s.arrow} aria-hidden="true">→</span></span>
                  <span className={s.d}>{l.d}</span>
                </Link>
              ))}
            </nav>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
