import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // /thank-you stays crawlable so Google sees its noindex tag, and old
        // /services?category=… URLs stay crawlable so Google sees their
        // redirects (middleware.ts) and drops them.
        disallow: ['/api/'],
      },
      // Named explicitly so AI assistants know they may read and cite the
      // site (AEO/GEO). Same rules as everyone else.
      {
        userAgent: [
          'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User',
          'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'CCBot', 'Bingbot',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
