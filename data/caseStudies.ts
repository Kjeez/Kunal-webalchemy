import type { Tone } from '@/lib/site';

/**
 * Case studies for /portfolio/[slug] (Claude Design "Case Study" template).
 *
 * EMPTY ON PURPOSE: no verified case-study content exists yet, and this
 * site never ships invented results, quotes or timelines. Until an entry
 * is added, `generateStaticParams` returns nothing and (with
 * `dynamicParams = false`) every /portfolio/<slug> URL is a 404.
 *
 * To publish one, add an object like this (only `slug`, `projectId` and
 * `summary` are required — every other section renders only when its
 * data is present):
 *
 *   {
 *     slug: 'bbps-dwarka',                 // URL: /portfolio/bbps-dwarka
 *     projectId: 'edu-2',                  // id in data/projectsData.ts (title, link, screenshot, industry)
 *     summary: 'One or two sentences under the H1.',
 *     meta: [                              // 2×N grid beside the H1
 *       { label: 'Services', value: 'Website Development, UI/UX' },
 *       { label: 'Platform', value: 'WordPress' },
 *     ],
 *     results: [                           // verified numbers only
 *       { label: 'Enquiries', value: '+40%', note: 'Admission enquiries vs. old site', tone: 'blue' },
 *     ],
 *     story: [                             // numbered 01, 02, 03…
 *       { title: 'The challenge', body: '…', tags: ['Slow on mobile'] },
 *     ],
 *     gallery: [                           // first 'wide' image spans the row
 *       { src: '/case-studies/bbps-admissions.jpg', alt: 'Admissions page', width: 1898, height: 965, layout: 'wide' },
 *       { src: '/portfolio-mobile/balbharti-mobile.jpg', alt: 'Homepage on a phone', width: 780, height: 1688, layout: 'mobile' },
 *     ],
 *     quote: { text: '…', name: 'Full name', role: 'Principal', rating: 5 },
 *     nextSlug: 'hamta-orchard-resort',    // must be another slug in this file
 *   }
 */

export interface CaseStudyMeta {
  label: string;
  value: string;
}

export interface CaseStudyResult {
  /** Small mono label, e.g. "Enquiries". */
  label: string;
  /** The big number, e.g. "+40%". Must be verified. */
  value: string;
  /** One line explaining the number. */
  note: string;
  /** Defaults cycle blue → green → amber. */
  tone?: Tone;
}

export interface CaseStudyChapter {
  title: string;
  body: string;
  tags?: string[];
}

export interface CaseStudyImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** 'wide' spans the full row (21:9), 'mobile' is a tall phone shot (9:16), default 4:3. */
  layout?: 'wide' | 'standard' | 'mobile';
}

export interface CaseStudyQuote {
  text: string;
  name: string;
  role: string;
  photo?: string;
  /** 1–5; stars render only when set. */
  rating?: number;
}

export interface CaseStudy {
  slug: string;
  /** `id` in data/projectsData.ts. */
  projectId: string;
  summary: string;
  meta?: CaseStudyMeta[];
  /** Hero screenshot; defaults to the project's desktop screenshot. */
  heroImage?: { src: string; width: number; height: number };
  results?: CaseStudyResult[];
  story?: CaseStudyChapter[];
  gallery?: CaseStudyImage[];
  quote?: CaseStudyQuote;
  nextSlug?: string;
}

export const CASE_STUDIES: CaseStudy[] = [];

export const getCaseStudy = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);
