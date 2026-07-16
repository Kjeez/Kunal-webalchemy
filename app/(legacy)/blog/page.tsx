import type { Metadata } from 'next';
import BlogPage from '@/components/BlogPage';

export const metadata: Metadata = {
  alternates: { canonical: '/blog' },
};

export default function Page() {
  return <BlogPage />;
}
