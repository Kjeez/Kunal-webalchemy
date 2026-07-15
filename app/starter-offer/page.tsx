import type { Metadata } from 'next';
import StarterOfferPage from '@/components/StarterOfferPage';

export const metadata: Metadata = {
  alternates: { canonical: '/starter-offer' },
};

export default function Page() {
  return <StarterOfferPage />;
}
