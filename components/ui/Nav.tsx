'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowNE } from './icons';
import { NAV_LINKS, NAV_CTA, type NavLink } from '@/lib/site';

export interface NavProps {
  links?: NavLink[];
  cta?: NavLink;
  /** Pills shown at the bottom of the mobile drawer. */
  menuFootPills?: string[];
}

/**
 * Floating pill navbar + full-screen mobile drawer.
 * Client component: scroll shadow, drawer state, Escape-to-close,
 * focus trap, aria-expanded/aria-hidden, close-on-link-click,
 * body scroll lock. Links come from lib/site.ts — existing routes only.
 */
const Nav: React.FC<NavProps> = ({
  links = NAV_LINKS,
  cta = NAV_CTA,
  menuFootPills = [],
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  // Close drawer on route change (covers close-on-link-click for Next links).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Body scroll lock + Escape + focus management while open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';

    const menu = menuRef.current;
    const focusables = () =>
      Array.from(
        menu?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []
      );
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab') return;
      // Focus trap: cycle between the toggle button and the drawer's links.
      const items = [toggleRef.current, ...focusables()].filter(
        (el): el is HTMLElement => Boolean(el)
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <Link href="/" className="brand" aria-label="WebAlchemy home">
            <span className="brand-mark" aria-hidden="true">W</span>
            WebAlchemy
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {links.map((l) => (
              <Link key={l.href + l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="nav-right">
            <Link href={cta.href} className="btn btn-dark">
              {cta.label}
              <ArrowNE />
            </Link>
            <button
              ref={toggleRef}
              className={`nav-toggle${open ? ' open' : ''}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobileMenu"
              onClick={() => setOpen((o) => !o)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div
        ref={menuRef}
        className={`mobile-menu${open ? ' open' : ''}`}
        id="mobileMenu"
        aria-hidden={!open}
      >
        {links.map((l) => (
          <Link key={l.href + l.label} href={l.href} onClick={close} tabIndex={open ? 0 : -1}>
            {l.label}
          </Link>
        ))}
        <Link
          href={cta.href}
          onClick={close}
          tabIndex={open ? 0 : -1}
          style={{ color: 'var(--orange)' }}
        >
          {cta.label}
        </Link>
        {menuFootPills.length > 0 && (
          <div className="mm-foot">
            {menuFootPills.map((p) => (
              <span className="pill" key={p}>{p}</span>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
