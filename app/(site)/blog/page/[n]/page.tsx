import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import BlogListing, { indexPosts, pageCount } from '../../BlogListing';

export const dynamicParams = false;

export function generateStaticParams() {
  const pages = pageCount(indexPosts().length);
  // Page 1 is /blog itself; always emit at least one param for the build.
  return Array.from({ length: Math.max(1, pages - 1) }, (_, i) => ({ n: String(i + 2) }));
}

export async function generateMetadata({ params }: { params: Promise<{ n: string }> }): Promise<Metadata> {
  const { n } = await params;
  return {
    title: `Blog · Page ${n} | WebAlchemy`,
    description: `Older WebAlchemy guides on websites, pricing, design and local SEO (page ${n}).`,
    alternates: { canonical: `/blog/page/${n}` },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ n: string }> }) {
  const n = Number((await params).n);
  if (n === 1) permanentRedirect('/blog');
  if (!Number.isInteger(n) || n < 1 || n > pageCount(indexPosts().length)) notFound();
  return <BlogListing page={n} />;
}
