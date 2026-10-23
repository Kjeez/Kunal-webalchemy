import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { BLOG_CATEGORIES, getCategory, postsIn } from '@/data/blogPosts';
import BlogListing, { pageCount } from '../../../../BlogListing';

export const dynamicParams = false;

export function generateStaticParams() {
  const params = BLOG_CATEGORIES.flatMap((name) => {
    const pages = pageCount(postsIn(name).length);
    return Array.from({ length: pages - 1 }, (_, i) => ({ cat: getCategory(name)!.slug, n: String(i + 2) }));
  });
  // The build needs at least one param; a placeholder page 2 404s if empty.
  return params.length ? params : [{ cat: getCategory(BLOG_CATEGORIES[0] ?? 'Pricing')!.slug, n: '2' }];
}

export async function generateMetadata({ params }: { params: Promise<{ cat: string; n: string }> }): Promise<Metadata> {
  const { cat: slug, n } = await params;
  const cat = getCategory(slug);
  if (!cat) return {};
  return {
    title: `${cat.title} · Page ${n} | WebAlchemy Blog`,
    description: cat.description,
    alternates: { canonical: `/blog/category/${cat.slug}/page/${n}` },
  };
}

export default async function CategoryPaged({ params }: { params: Promise<{ cat: string; n: string }> }) {
  const { cat: slug, n: raw } = await params;
  const cat = getCategory(slug);
  const n = Number(raw);
  if (!cat) notFound();
  if (n === 1) permanentRedirect(`/blog/category/${cat.slug}`);
  if (!Number.isInteger(n) || n < 1 || n > pageCount(postsIn(cat.name).length)) notFound();
  return <BlogListing category={cat.name} page={n} />;
}
