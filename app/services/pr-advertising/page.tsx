import type { Metadata } from 'next';
import PrAdvertisingPage from '@/components/services/PrAdvertisingPage';

export const metadata: Metadata = {
  title: 'PR & Advertising Services | WebAlchemy',
  description: 'Outdoor, TV, radio, metro, cinema, and transit advertising across Delhi NCR. Strategic media buying for maximum reach.',
  alternates: { canonical: '/services/pr-advertising' },
};

export default function Page() {
  return <PrAdvertisingPage />;
}
