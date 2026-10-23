// Blog types and category metadata. Safe to import from client
// components (no file-system access); posts are loaded in data/blogPosts.ts.

import { TONES } from '@/lib/site';

export type Tone = 'green' | 'blue' | 'amber' | 'violet' | 'orange';

export interface ListItem {
  /** Bold lead-in rendered before the text. */
  lead?: string;
  text: string;
}

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; id: string; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul' | 'ol'; items: ListItem[] }
  | { type: 'quote'; text: string }
  | { type: 'metrics'; items: { label: string; value: string; text: string; tone: Tone }[] }
  | { type: 'cta'; heading: string; text: string; label: string; href: string }
  /** Comparison / price table. Cells support inline `code`. */
  | { type: 'table'; caption?: string; head: string[]; rows: string[][] }
  /** FAQ accordion + FAQPage JSON-LD. */
  | { type: 'faq'; heading: string; items: { q: string; a: string }[] }
  /** Internal links with a one-line description each. */
  | { type: 'links'; heading: string; items: { label: string; href: string; text: string }[] };

export interface BlogPost {
  /** Legacy numeric id (old /blog/<id> URLs redirect to /blog/<slug>). */
  id: string;
  /** URL segment: /blog/<slug>. */
  slug: string;
  title: string;
  /** Longer keyword title (the legacy page's H1), used for <title>. */
  seoTitle: string;
  excerpt: string;
  category: string;
  date: string;
  /** Optional "Updated …" date (display + ISO), for refreshed guides. */
  updated?: { date: string; iso: string };
  /** ISO date for metadata / JSON-LD. */
  isoDate: string;
  author: string;
  /** Author role + one-line bio (shown under the byline). */
  authorBio?: string;
  readTime: string;
  image: string;
  body: Block[];
}

export interface BlogCategory {
  /** Name stored in each post's `category` front matter. */
  name: string;
  /** URL segment: /blog/category/<slug>. */
  slug: string;
  /** <title> and H1 of the category page. */
  title: string;
  description: string;
  tone: Tone;
}

/** Every category a post can use, in the order the chips show them. */
export const CATEGORIES: BlogCategory[] = [
  { name: 'Pricing', slug: 'pricing', title: 'Website cost & pricing guides', description: 'What websites, online stores and maintenance really cost in India, with published prices and typical market ranges.', tone: 'amber' },
  { name: 'Strategy', slug: 'strategy', title: 'Website planning & strategy', description: 'Choosing a developer, planning your website and turning it into a steady source of enquiries.', tone: 'blue' },
  { name: 'Marketing', slug: 'marketing', title: 'Marketing & local SEO', description: 'Google Business Profile, local SEO, content and conversion: getting found and getting contacted.', tone: 'orange' },
  { name: 'Design', slug: 'design', title: 'Web design', description: 'Design decisions that build trust and bring enquiries: layout, colour, redesigns and mobile.', tone: 'violet' },
  { name: 'Development', slug: 'development', title: 'Platforms & development', description: 'WordPress, Shopify, custom builds and the technology behind fast business websites.', tone: 'green' },
  { name: 'Technical', slug: 'technical', title: 'Speed & technical SEO', description: 'Core Web Vitals, page speed and the technical basics that help a site rank.', tone: 'green' },
];

export const getCategory = (nameOrSlug: string) =>
  CATEGORIES.find((c) => c.slug === nameOrSlug || c.name === nameOrSlug);

export const categoryHref = (name: string) => `/blog/category/${getCategory(name)?.slug ?? 'strategy'}`;

export const CATEGORY_TONE: Record<string, Tone> = Object.fromEntries(CATEGORIES.map((c) => [c.name, c.tone]));

/** [ink, tint] per tone, from the 2026 design palette (lib/site TONES). */
export const TONE_COLORS: Record<Tone, readonly [string, string]> = {
  green: TONES.green,
  blue: TONES.blue,
  amber: TONES.amber,
  violet: TONES.violet,
  orange: TONES.rust,
};

export const categoryColors = (category: string) =>
  TONE_COLORS[CATEGORY_TONE[category] ?? 'blue'];

/** Card-sized variant of a post image (Unsplash URLs are resized server-side). */
export const thumb = (image: string) => image.replace('w=1600', 'w=800');

