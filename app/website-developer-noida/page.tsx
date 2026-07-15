import type { Metadata } from 'next';
import LocationLandingPage from '@/components/LocationLandingPage';

export const metadata: Metadata = {
  title: 'Best Website Developer in Noida | WebAlchemy - 100+ Clients',
  description: 'Expert website developer in Noida & Greater Noida. Building high-performance websites for IT companies & startups. Free consultation!',
  alternates: { canonical: '/website-developer-noida' },
};

export default function Page() {
  return <LocationLandingPage city="Noida" />;
}
