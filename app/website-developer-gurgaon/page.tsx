import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Best Website Developer in Gurgaon | WebAlchemy - 100+ Clients',
  description: 'Leading website developer in Gurgaon. We create stunning websites for Gurgaon startups & corporates. Premium quality. Fast delivery. Get quote!',
  alternates: { canonical: '/website-developer-gurgaon' },
};

export default function Page() {
  return <LocationLandingPage city="Gurgaon" />;
}
