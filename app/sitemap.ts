import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/blogPosts';
import { CASE_STUDIES } from '@/data/caseStudies';
import { SITE_URL } from '@/lib/site';

/* Generated sitemap for the portfolio: home, the kept inner pages, every
   case study and every article. Redirected agency pages are left out. */
const PAGES: [string, number][] = [
  ['/', 1],
  ['/portfolio', 0.9],
  ['/services', 0.8],
  ['/services/web-development', 0.8],
  ['/services/design-branding', 0.8],
  ['/wordpress-development', 0.8],
  ['/ecommerce-website-development', 0.8],
  ['/about', 0.7],
  ['/contact', 0.7],
  ['/blog', 0.6],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...PAGES.map(([path, priority]) => ({ url: `${SITE_URL}${path}`, lastModified: now, priority })),
    ...CASE_STUDIES.map((c) => ({ url: `${SITE_URL}/portfolio/${c.slug}`, lastModified: now, priority: 0.6 })),
    ...BLOG_POSTS.map((p) => ({ url: `${SITE_URL}/blog/${p.id}`, lastModified: now, priority: 0.5 })),
  ];
}
