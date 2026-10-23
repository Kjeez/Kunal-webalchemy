import type { ServicePlan } from './services';

/* Helpers shared by the industry page records. */

export const plan = (name: string, price: string, features: string[], featured = false, badge?: string): ServicePlan => ({
  name,
  price,
  unit: 'one-time',
  features,
  cta: 'Get a fixed quote',
  featured,
  badge,
});

export const steps = (content: string) => [
  { when: 'DAY 1', t: 'Free 30-minute call', d: `We look at your current site (if any), your competitors on Google and what you want enquiries for. You get a fixed quote and launch date in writing.` },
  { when: 'WEEK 1', t: 'Design you approve', d: `Mobile and desktop mockups first. ${content} We revise until you are happy, before any development starts.` },
  { when: 'WEEK 1–3', t: 'Build & connect', d: 'We build the site, connect WhatsApp, call buttons, forms and Google Analytics, and set up your Google Business Profile link and map.' },
  { when: 'LAUNCH', t: 'Go live & hand over', d: 'Speed check (90+ mobile PageSpeed, guaranteed), Search Console submission, and a walkthrough so your team can update it.' },
];

