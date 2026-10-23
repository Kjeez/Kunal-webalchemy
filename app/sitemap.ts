import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { BLOG_POSTS } from '@/data/blogPosts';
import { CASE_STUDIES } from '@/data/caseStudies';
import { INDUSTRIES } from '@/data/industries';
import { SERVICES } from '@/data/services';
import { LOCATIONS } from '@/data/locations';

/* Generated at build time, so every new blog post, industry page or case
   study is listed automatically. lastModified is only set where we know
   the real date (blog posts); a fake "today" on every URL teaches Google
   to ignore the field. */

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${SITE_URL}${path === '/' ? '/' : path}`;

  const core = ['/', '/services', '/portfolio', '/about', '/contact', '/blog', '/starter-offer'];
  const services = Object.values(SERVICES).map((s) => s.path);
  const locations = Object.values(LOCATIONS).map((l) => l.path);
  const industries = INDUSTRIES.map((i) => i.path);

  const pages = [...new Set([...core, ...services, ...industries, ...locations])].map((path) => ({
    url: url(path),
    changeFrequency: (path === '/' || path === '/blog' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: path === '/' ? 1 : core.includes(path) ? 0.8 : 0.7,
  }));

  const posts = BLOG_POSTS.map((p) => ({
    url: url(`/blog/${p.slug}`),
    lastModified: p.updated?.iso ?? p.isoDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const cases = CASE_STUDIES.map((c) => ({
    url: url(`/portfolio/${c.slug}`),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  return [...pages, ...posts, ...cases];
}
