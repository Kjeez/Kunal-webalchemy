import type { Metadata } from 'next';
import PortfolioPage from '@/components/PortfolioPage';

export const metadata: Metadata = {
  title: 'Our Work — Web Development Portfolio | WebAlchemy',
  description: 'Web development, e-commerce, and marketing projects for businesses in Delhi NCR and internationally. See what we build.',
  alternates: { canonical: '/portfolio' },
};

export default function Page() {
  return <PortfolioPage />;
}
