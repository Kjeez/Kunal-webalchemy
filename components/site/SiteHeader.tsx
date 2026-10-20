'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PHONE_DISPLAY, SITE_NAV, TEL_HREF } from '@/lib/site';

/** Logo lockup used by the header and footer. */
export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="WebAlchemy home">
      <span className="logo-mark" aria-hidden="true">W</span>
      WebAlchemy
    </Link>
  );
}

/** Homepage-only offer strip above the sticky header. */
export function Announcement() {
  const pathname = usePathname();
  if (pathname !== '/') return null;
  return (
    <a href="#pricing" className="announce">
      <span style={{ fontWeight: 600 }}>Websites from ₹11,999</span>
      <span className="dim" aria-hidden="true">•</span>
      <span>Free Domain &amp; Hosting</span>
      <span className="dim" aria-hidden="true">•</span>
      <span>7-day delivery</span>
      <span className="go">See plans →</span>
    </a>
  );
}

export default function SiteHeader() {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);

  // close the mobile menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (match: string) =>
    !match.includes('#') && (pathname === match || pathname.startsWith(`${match}/`));

  return (
    <header className="site-header">
      <div className="site-header-in">
        <Logo />
        <nav className="site-nav" aria-label="Main">
          {SITE_NAV.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.match) ? 'page' : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="site-header-actions">
          <a href={TEL_HREF} className="site-phone">{PHONE_DISPLAY}</a>
          <Link href="/contact" className="btn btn-pill">Get Free Estimate</Link>
          <button
            type="button"
            className="menu-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? '×' : '☰'}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
          {SITE_NAV.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.match) ? 'page' : undefined}>
              {l.label}
            </Link>
          ))}
          <a href={TEL_HREF} className="call">Call {PHONE_DISPLAY}</a>
        </nav>
      )}
    </header>
  );
}
