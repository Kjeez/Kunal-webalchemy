import type { Metadata } from 'next';
import LocationPage from '@/components/location/LocationPage';
import { LOCATIONS } from '@/data/locations';

export const metadata: Metadata = {
  title: 'Best Website Developer in Noida | WebAlchemy - 100+ Clients',
  description: 'Expert website developer in Noida & Greater Noida. Building high-performance websites for IT companies & startups. Free consultation!',
  alternates: { canonical: '/website-developer-noida' },
};

export default function Page() {
  return <LocationPage data={LOCATIONS.noida} />;
}
