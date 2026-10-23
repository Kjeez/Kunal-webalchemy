'use client';

import { useEffect, useState } from 'react';
import { readLead } from '@/lib/leads';
import { track, trackPixel } from '@/lib/track';

/* Tiny client islands for /thank-you. The server renders the generic
   copy ("Thanks." / "your project"); after mount these swap in the
   first name + service the lead form stored in sessionStorage. */

function useLead() {
  const [lead, setLead] = useState<{ firstName?: string; service?: string }>({});
  useEffect(() => setLead(readLead()), []);
  return lead;
}

/** Renders ", Asha" after "Thanks" (nothing when no name is stored). */
export function LeadFirstName() {
  const { firstName } = useLead();
  return firstName ? <>, {firstName}</> : null;
}

/** "website development", "PR & advertising", or "your project". */
export function LeadService() {
  const { service } = useLead();
  if (!service || service === 'Not sure yet') return <>your project</>;
  return <>{service.toLowerCase().replace(/^pr\b/, 'PR')}</>;
}

/**
 * Counts a completed form enquiry: GA4 `generate_lead`, Meta Pixel `Lead`,
 * and (when NEXT_PUBLIC_ADS_CONVERSION is set, e.g. "AW-123/AbC") a Google
 * Ads conversion. Only fires when a form actually sent the visitor here,
 * and only once per lead, so reloads and direct visits don't inflate it.
 */
export function ConversionPing() {
  useEffect(() => {
    const lead = readLead();
    if (!lead.firstName && !lead.service) return;
    try {
      if (sessionStorage.getItem('wa-lead-tracked')) return;
      sessionStorage.setItem('wa-lead-tracked', '1');
    } catch { /* storage blocked: still count it */ }
    const service = lead.service || 'Not specified';
    track('generate_lead', { currency: 'INR', value: 1, lead_service: service });
    trackPixel('Lead', { content_name: service });
    const ads = process.env.NEXT_PUBLIC_ADS_CONVERSION;
    if (ads) track('conversion', { send_to: ads });
  }, []);
  return null;
}
