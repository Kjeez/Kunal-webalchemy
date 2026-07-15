import type { Metadata } from 'next';
import ContentStrategyPage from '@/components/services/ContentStrategyPage';

export const metadata: Metadata = {
  title: 'Content Strategy & SEO Writing | WebAlchemy',
  description: 'SEO-optimised blog posts, website copy, and content strategies that rank on Google and convert readers into customers.',
  alternates: { canonical: '/services/content-strategy' },
};

export default function Page() {
  return <ContentStrategyPage />;
}
