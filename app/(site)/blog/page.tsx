import type { Metadata } from 'next';
import BlogListing from './BlogListing';

/* Blog index — Claude Design "Blog" (Blog.dc.html). Listing layout lives
   in ./BlogListing (shared with /blog/page/<n> and category pages). */

export const metadata: Metadata = {
  title: 'Blog | Website Cost, Design & Local SEO Guides | WebAlchemy',
  description:
    'Practical guides for business owners in India: website costs, choosing a developer, WordPress vs Shopify, Google Business Profile and local SEO. From the WebAlchemy team in New Delhi.',
  alternates: { canonical: '/blog', types: { 'application/rss+xml': '/blog/rss.xml' } },
};

export default function BlogIndexPage() {
  return <BlogListing />;
}
