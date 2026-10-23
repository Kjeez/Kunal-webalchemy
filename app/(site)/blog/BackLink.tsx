'use client';

import type { MouseEvent, ReactNode } from 'react';

/**
 * "← Back" for article pages. If the reader came from another page on
 * this site it behaves like the browser's back button (keeping their
 * scroll position and filters); otherwise, e.g. arriving from Google,
 * it is a normal link to `href`.
 */
export default function BackLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    try {
      const ref = document.referrer ? new URL(document.referrer) : null;
      if (ref && ref.origin === window.location.origin && window.history.length > 1) {
        e.preventDefault();
        window.history.back();
      }
    } catch {
      /* fall through to the link */
    }
  };
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
