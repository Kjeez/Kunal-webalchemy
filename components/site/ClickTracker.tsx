'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track, trackPixel } from '@/lib/track';

/**
 * Counts the enquiries that never touch a form: taps on call, WhatsApp
 * and email links anywhere on the site. One delegated listener, so new
 * buttons are tracked automatically. Each event carries the page path,
 * which tells you which pages produce enquiries.
 */
export default function ClickTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const params = { page_path: pathname, link_text: (a.textContent || '').trim().slice(0, 60) };
      if (href.startsWith('tel:')) {
        track('click_call', params);
        trackPixel('Contact', { method: 'call' });
      } else if (/(^https?:\/\/)?(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)/.test(href)) {
        track('click_whatsapp', params);
        trackPixel('Contact', { method: 'whatsapp' });
      } else if (href.startsWith('mailto:')) {
        track('click_email', params);
      } else if (/calendly\.com/.test(href)) {
        track('click_book_call', params);
        trackPixel('Schedule');
      }
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, [pathname]);

  return null;
}
