'use client';

// Client helpers for every lead form on the redesigned site. All forms
// post to /api/contact and land on /thank-you (the GTM/Ads conversion
// URL), handing the visitor's first name + service to that page through
// sessionStorage — never the URL.

export interface Lead {
  name: string;
  phone?: string;
  email?: string;
  service?: string;
  /** Extra labelled lines for the email body, e.g. { Budget: '₹10–25k' }. */
  fields?: Record<string, string | undefined>;
  details?: string;
  /** Which form sent it, e.g. "Home · hero". */
  source: string;
}

export const SERVICES = [
  'Website Development',
  'Digital Marketing',
  'Design & Branding',
  'Content Strategy',
  'App Development',
  'PR & Advertising',
  'Not sure yet',
] as const;

import { whatsappHref } from '@/lib/site';

const LEAD_KEY = 'wa-lead';

/** Fallback when email delivery fails: the same enquiry, pre-written for WhatsApp. */
export function whatsappLead(lead: Lead): string {
  const lines = [
    'Hi WebAlchemy! I tried your website form but it did not go through.',
    lead.name && lead.name !== 'Website visitor' ? `Name: ${lead.name}` : '',
    lead.phone ? `Mobile: +91 ${lead.phone}` : '',
    lead.email ? `Email: ${lead.email}` : '',
    lead.service ? `Service: ${lead.service}` : '',
    ...Object.entries(lead.fields ?? {}).map(([k, v]) => (v ? `${k}: ${v}` : '')),
    lead.details ? `\n${lead.details}` : '',
  ].filter(Boolean);
  return whatsappHref(lines.join('\n'));
}

/** Strips formatting; returns the 10-digit Indian mobile or null. */
export function normalisePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, '').replace(/^(91|0)(?=\d{10}$)/, '');
  return /^\d{10}$/.test(digits) ? digits : null;
}

export async function sendLead(lead: Lead): Promise<{ ok: boolean; message?: string }> {
  const lines = [
    `Source: ${lead.source}`,
    lead.service && `Service: ${lead.service}`,
    ...Object.entries(lead.fields ?? {}).map(([k, v]) => v && `${k}: ${v}`),
    lead.details && `\n${lead.details}`,
  ].filter(Boolean);

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: lead.name,
        email: lead.email || '',
        phone: lead.phone ? `+91 ${lead.phone}` : '',
        message: lines.join('\n'),
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.success) return { ok: true };
    return { ok: false, message: data.message || 'Something went wrong. Please try again.' };
  } catch {
    return { ok: false, message: 'Could not send. Please try again or WhatsApp us.' };
  }
}

/** Remember who wrote in, then go to the conversion page. */
export function goToThankYou(name: string, service?: string) {
  try {
    sessionStorage.setItem(LEAD_KEY, JSON.stringify({ firstName: name.trim().split(/\s+/)[0] || '', service }));
  } catch { /* storage blocked — thank-you page falls back to generic copy */ }
  window.location.href = '/thank-you';
}

export function readLead(): { firstName?: string; service?: string } {
  try {
    return JSON.parse(sessionStorage.getItem(LEAD_KEY) || '{}');
  } catch {
    return {};
  }
}

/* ---- cross-component prefill (home: "Get quote", estimator → contact form) ---- */

export const PREFILL_EVENT = 'wa:prefill';
export interface PrefillDetail { service?: string; details?: string }

/** Prefills the on-page LeadForm and scrolls to #contact. */
export function prefillLead(detail: PrefillDetail, targetId = 'contact') {
  window.dispatchEvent(new CustomEvent<PrefillDetail>(PREFILL_EVENT, { detail }));
  const el = document.getElementById(targetId);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
}
