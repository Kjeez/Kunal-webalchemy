'use client';

/* Analytics helpers. GA4 (G-FWV5PE4DGS) and the Meta Pixel are loaded in
   app/layout.tsx; GTM (GTM-NXD3F4LP) sees the same events on dataLayer.
   In GA4, mark `generate_lead`, `click_call` and `click_whatsapp` as key
   events (Admin → Events) so every enquiry type is counted. */

type Params = Record<string, string | number | undefined>;

export function track(event: string, params: Params = {}) {
  if (typeof window === 'undefined') return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  try {
    if (typeof w.gtag === 'function') w.gtag('event', event, params);
    else (w.dataLayer = w.dataLayer || []).push({ event, ...params });
  } catch {
    /* analytics must never break the page */
  }
}

/** Meta Pixel standard event (Lead, Contact…). */
export function trackPixel(event: string, params: Params = {}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  try {
    if (typeof w.fbq === 'function') w.fbq('track', event, params);
  } catch {
    /* ignore */
  }
}
