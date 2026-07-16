import type { Metadata } from 'next';
import BlogPostPage from '@/components/BlogPostPage';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    alternates: { canonical: `/blog/${id}` },
  };
}

export default function Page() {
  return <BlogPostPage />;
}
