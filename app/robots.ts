import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // /thank-you stays crawlable so Google sees its noindex tag, and old
      // /services?category=… URLs stay crawlable so Google sees their
      // redirects (middleware.ts) and drops them.
      disallow: ['/api/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
