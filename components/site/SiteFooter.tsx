import Link from 'next/link';
import {
  EMAIL,
  PHONE_DISPLAY,
  SITE_FOOTER_COLUMNS,
  SITE_NAV,
  TEL_HREF,
  whatsappHref,
  WHATSAPP_DEFAULT_MESSAGE,
} from '@/lib/site';
import Peep from './motion/Peep';

/* Dark rounded footer panel: big contact block → nav + actions → link
   columns → giant wordmark with floating stickers and characters → base. */

const Arrow = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const wa = whatsappHref(WHATSAPP_DEFAULT_MESSAGE);

  return (
    <footer className="site-footer">
      <div className="wrap foot-in">
        {/* ---- contact block ---- */}
        <div className="foot-contact">
          <div className="foot-copy">
            <p className="foot-eyebrow">
              <span className="foot-dot" aria-hidden="true" />
              Available for new projects · Delhi NCR &amp; worldwide
            </p>
            <h2 className="foot-q">Have an ambitious project in mind?</h2>
            <a href={`mailto:${EMAIL}`} className="foot-email">{EMAIL}</a>
            <a href={TEL_HREF} className="foot-phone">
              <span className="foot-dot" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
          </div>
          <Link href="/contact" className="foot-go" aria-label="Start a project — contact us">
            <Arrow size={36} />
          </Link>
        </div>

        <hr className="foot-rule" />

        {/* ---- brand, nav, actions ---- */}
        <div className="foot-bar">
          <Link href="/" className="foot-brand">WebAlchemy</Link>
          <nav className="foot-nav" aria-label="Footer">
            {SITE_NAV.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
          </nav>
          <div className="foot-actions">
            <a href={wa} className="foot-pill" target="_blank" rel="noopener noreferrer">WhatsApp <Arrow size={13} /></a>
            <a href={TEL_HREF} className="foot-pill">Call us <Arrow size={13} /></a>
            <Link href="/contact" className="foot-pill foot-pill-solid">Get Free Estimate <Arrow size={13} /></Link>
          </div>
        </div>

        {/* ---- link columns (services + local pages) ---- */}
        <div className="foot-cols">
          {SITE_FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} className="foot-col" aria-label={col.title}>
              <div className="title">{col.title}</div>
              {col.links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
            </nav>
          ))}
        </div>

        {/* ---- giant wordmark with stickers + characters ---- */}
        <div className="foot-mark" data-motion aria-hidden="true">
          <span className="foot-word">WebAlchemy</span>
          <span className="stk stk-arrow" style={{ left: '6%', top: '-4%' }}><Arrow size={26} /></span>
          <span className="stk stk-pill" style={{ left: '27%', top: '-14%', '--r': '4deg' } as React.CSSProperties}>7-day delivery</span>
          <span className="stk stk-pill stk-blue" style={{ left: '17%', top: '52%', '--r': '-6deg' } as React.CSSProperties}>PageSpeed 98+</span>
          <span className="stk stk-round stk-light" style={{ left: '55%', top: '-6%' }}>✳</span>
          <span className="stk stk-pill stk-dark" style={{ left: '62%', top: '46%', '--r': '-5deg' } as React.CSSProperties}>100+ projects</span>
          <span className="stk stk-round stk-dark" style={{ left: '78%', top: '-10%' }}><span style={{ color: '#ff8a6b' }}>♥</span></span>
          <Peep seed="Rohan" bg="eef1ff" pose="wave" size={84} bubble="Let's talk!" className="foot-peep foot-peep-a" />
          <Peep seed="Asha" bg="e8f4ec" pose="jump" size={68} delay={0.8} className="foot-peep foot-peep-b" />
        </div>

        {/* ---- base ---- */}
        <div className="foot-base">
          <span>© {year} WebAlchemy Agency. Made in India.</span>
          <span className="foot-base-r">
            <a href={TEL_HREF}>{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href="/sitemap.xml">Sitemap</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
