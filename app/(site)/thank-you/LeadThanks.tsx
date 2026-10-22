'use client';

import { useEffect, useState } from 'react';
import { readLead } from '@/lib/leads';

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

/** "website development", "UI/UX design", or "your project". */
export function LeadService() {
  const { service } = useLead();
  if (!service || service === 'Not sure yet') return <>your project</>;
  return <>{service.toLowerCase().replace(/^ui\/ux\b/, 'UI/UX').replace(/\bcms\b/, 'CMS')}</>;
}

/** Google Ads conversion ping — carried over unchanged from the legacy ThankYouPage. */
export function ConversionPing() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL', // Replace with your actual conversion ID
      });
    }
  }, []);
  return null;
}
