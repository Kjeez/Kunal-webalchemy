import { TONES, type Tone } from '@/lib/site';
import type { Project } from '@/data/projectsData';

/* Shared helpers for /portfolio and /portfolio/[slug]: projectsData
   categories mapped onto the design's industry labels and tones. */

export const INDUSTRIES = ['Education', 'Healthcare', 'Travel', 'E-commerce', 'Corporate', 'Creative'] as const;
export type Industry = (typeof INDUSTRIES)[number];

const CATEGORY_INDUSTRY: Record<Project['category'], Industry> = {
  Educational: 'Education',
  Dental: 'Healthcare',
  Travel: 'Travel',
  'E-commerce': 'E-commerce',
  Corporate: 'Corporate',
  Creative: 'Creative',
};

const INDUSTRY_TONE: Record<Industry, Tone> = {
  Education: 'blue',
  Healthcare: 'green',
  Travel: 'amber',
  'E-commerce': 'rust',
  Corporate: 'violet',
  Creative: 'ink',
};

export const industryOf = (p: Project): Industry => CATEGORY_INDUSTRY[p.category];

/** [ink, tint] for an industry. */
export const industryTone = (i: Industry) => TONES[INDUSTRY_TONE[i]];

/** URL-safe key used for the filter data attributes. */
export const industryKey = (i: Industry) => i.toLowerCase().replace(/[^a-z]/g, '');

export function hostname(link: string) {
  try {
    return new URL(link).hostname.replace(/^www\./, '');
  } catch {
    return link;
  }
}
