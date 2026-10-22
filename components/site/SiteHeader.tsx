'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  PHONE_DISPLAY,
  SERVICE_MENU,
  SITE_NAV,
  TEL_HREF,
  whatsappHref,
  WHATSAPP_DEFAULT_MESSAGE,
} from '@/lib/site';

/** Logo lockup used by the header and footer. */
export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" className="logo" aria-label="Kunal, home" onClick={onClick}>
      <span className="logo-mark" aria-hidden="true">K</span>
      <span>Kunal<span className="logo-dot" aria-hidden="true">.</span></span>
    </Link>
  );
}

/** Homepage-only availability strip above the sticky header. */
export function Announcement() {
  const pathname = usePathname();
  if (pathname !== '/') return null;
  return (
    <a href="#contact" className="announce">
      <span style={{ fontWeight: 600 }}>Freelance website developer &amp; UI/UX designer</span>
      <span className="dim" aria-hidden="true">•</span>
      <span>Figma → live site</span>
      <span className="dim" aria-hidden="true">•</span>
      <span>Booking new projects</span>
      <span className="go">Let&apos;s talk →</span>
    </a>
  );
}

const Chevron = () => (
  <svg className="chev" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
    <path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);

export default function SiteHeader() {
  const pathname = usePathname() || '/';
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [drawerServices, setDrawerServices] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaBtnRef = useRef<HTMLButtonElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const hoverT = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const isActive = (match: string) =>
    !match.includes('#') && (pathname === match || pathname.startsWith(`${match}/`));
  const servicesActive =
    isActive('/services') || SERVICE_MENU.some((l) => isActive(l.href));

  // close everything on navigation
  useEffect(() => {
    setMega(false);
    setDrawer(false);
  }, [pathname]);

  // header shadow once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // desktop dropdown: Esc + outside click
  useEffect(() => {
    if (!mega) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMega(false); megaBtnRef.current?.focus(); }
    };
    const onDown = (e: PointerEvent) => {
      if (!megaRef.current?.contains(e.target as Node)) setMega(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [mega]);

  // mobile drawer: scroll lock, Esc, focus in / back out
  const closeDrawer = useCallback(() => {
    setDrawer(false);
    burgerRef.current?.focus();
  }, []);
  useEffect(() => {
    if (!drawer) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    drawerRef.current?.querySelector<HTMLElement>('a, button')?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDrawer();
      if (e.key === 'Tab' && drawerRef.current) {
        const f = drawerRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [drawer, closeDrawer]);

  // hover intent for fine pointers; click/Enter always works
  const hoverOpen = () => { clearTimeout(hoverT.current); hoverT.current = setTimeout(() => setMega(true), 80); };
  const hoverClose = () => { clearTimeout(hoverT.current); hoverT.current = setTimeout(() => setMega(false), 180); };
  const isFine = () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const wa = whatsappHref(WHATSAPP_DEFAULT_MESSAGE);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${mega ? ' has-mega' : ''}`}>
      <div className="site-header-in">
        <Logo />

        <nav className="site-nav" aria-label="Main">
          {SITE_NAV.map((l) =>
            l.label === 'Services' ? (
              <div
                key={l.href}
                ref={megaRef}
                className="nav-dd"
                onMouseEnter={() => isFine() && hoverOpen()}
                onMouseLeave={() => isFine() && hoverClose()}
              >
                <button
                  ref={megaBtnRef}
                  type="button"
                  className={`nav-link nav-dd-btn${servicesActive ? ' is-active' : ''}`}
                  aria-expanded={mega}
                  aria-controls="mega-menu"
                  onClick={() => setMega((o) => !o)}
                >
                  Services <Chevron />
                </button>
                <div id="mega-menu" className="mega" data-open={mega || undefined}>
                  <div className="mega-in">
                    <div className="mega-services">
                      <div className="mega-label">SERVICES</div>
                      <ul className="mega-grid">
                        {SERVICE_MENU.map((sv) => (
                          <li key={sv.href}>
                            <Link href={sv.href} className="mega-item" onClick={() => setMega(false)} aria-current={isActive(sv.href) ? 'page' : undefined}>
                              <span className="mega-dot" style={{ background: sv.color }} aria-hidden="true" />
                              <span>
                                <span className="mega-t">{sv.label}</span>
                                <span className="mega-d">{sv.desc}</span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link href="/services" className="mega-all" onClick={() => setMega(false)}>All services →</Link>
                    </div>
                    <div className="mega-side">
                      <div className="mega-card">
                        <div className="mega-card-k">FREE · 30 MINUTES</div>
                        <div className="mega-card-t">Not sure what you need? Book a call with me.</div>
                        <Link href="/contact" className="btn btn-primary" onClick={() => setMega(false)}>Start a project →</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={l.href} href={l.href} className="nav-link" aria-current={isActive(l.match) ? 'page' : undefined}>
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="site-header-actions">
          <a href={TEL_HREF} className="site-phone">
            <PhoneIcon />
            {PHONE_DISPLAY}
          </a>
          <Link href="/#contact" className="btn btn-pill">Hire me</Link>
          <button
            ref={burgerRef}
            type="button"
            className={`burger${drawer ? ' is-open' : ''}`}
            aria-label={drawer ? 'Close menu' : 'Open menu'}
            aria-expanded={drawer}
            aria-controls="mobile-drawer"
            onClick={() => (drawer ? closeDrawer() : setDrawer(true))}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* ---------- mobile drawer ---------- */}
      <div className="drawer" data-open={drawer || undefined} aria-hidden={!drawer}>
        <button type="button" className="drawer-scrim" aria-label="Close menu" tabIndex={-1} onClick={closeDrawer} />
        <div
          id="mobile-drawer"
          ref={drawerRef}
          className="drawer-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          inert={!drawer || undefined}
        >
          <div className="drawer-top">
            <Logo onClick={() => setDrawer(false)} />
            <button type="button" className="burger is-open" aria-label="Close menu" onClick={closeDrawer}>
              <span /><span /><span />
            </button>
          </div>

          <nav className="drawer-nav" aria-label="Mobile">
            {SITE_NAV.map((l, i) =>
              l.label === 'Services' ? (
                <div key={l.href} className="drawer-group" style={{ '--i': i } as React.CSSProperties}>
                  <button
                    type="button"
                    className={`drawer-link${servicesActive ? ' is-active' : ''}`}
                    aria-expanded={drawerServices}
                    aria-controls="drawer-services"
                    onClick={() => setDrawerServices((o) => !o)}
                  >
                    Services <span className="drawer-plus" aria-hidden="true">{drawerServices ? '−' : '+'}</span>
                  </button>
                  <div id="drawer-services" className="drawer-sub" hidden={!drawerServices}>
                    {SERVICE_MENU.map((sv) => (
                      <Link key={sv.href} href={sv.href} onClick={() => setDrawer(false)} aria-current={isActive(sv.href) ? 'page' : undefined}>
                        <span className="mega-dot" style={{ background: sv.color }} aria-hidden="true" />
                        {sv.label}
                      </Link>
                    ))}
                    <Link href="/services" className="drawer-sub-all" onClick={() => setDrawer(false)}>All services →</Link>
                  </div>
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className="drawer-link"
                  style={{ '--i': i } as React.CSSProperties}
                  aria-current={isActive(l.match) ? 'page' : undefined}
                  onClick={() => setDrawer(false)}
                >
                  {l.label} <span aria-hidden="true">→</span>
                </Link>
              ),
            )}
          </nav>

          <div className="drawer-foot">
            <div className="drawer-quick">
              <a href={TEL_HREF} className="btn btn-ghost"><PhoneIcon /> Call</a>
              <a href={wa} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
            <Link href="/#contact" className="btn btn-primary btn-lg btn-block" onClick={() => setDrawer(false)}>Start a project with me →</Link>
            <p className="drawer-note">{PHONE_DISPLAY} · New Delhi · I reply within 24 hours</p>
          </div>
        </div>
      </div>
    </header>
  );
}
