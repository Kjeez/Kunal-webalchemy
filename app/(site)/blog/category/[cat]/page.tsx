import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_CATEGORIES, getCategory } from '@/data/blogPosts';
import BlogListing from '../../BlogListing';

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((name) => ({ cat: getCategory(name)!.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ cat: string }> }): Promise<Metadata> {
  const cat = getCategory((await params).cat);
  if (!cat) return {};
  return {
    title: `${cat.title} | WebAlchemy Blog`,
    description: cat.description,
    alternates: { canonical: `/blog/category/${cat.slug}` },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ cat: string }> }) {
  const cat = getCategory((await params).cat);
  if (!cat) notFound();
  return <BlogListing category={cat.name} />;
}
