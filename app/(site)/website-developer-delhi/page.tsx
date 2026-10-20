import type { Metadata } from 'next';
import LocationPage from '@/components/location/LocationPage';
import { LOCATIONS } from '@/data/locations';

export const metadata: Metadata = {
  title: 'Website Developer in Delhi | Custom Web Development — WebAlchemy',
  description: 'Delhi-based website developer building custom WordPress & React sites that rank and convert. 50+ projects delivered. Get a free quote today.',
  alternates: { canonical: '/website-developer-delhi' },
  openGraph: {
    title: 'Website Developer in Delhi | Custom Web Development — WebAlchemy',
    description: 'Delhi-based website developer building custom WordPress & React sites that rank and convert. 50+ projects delivered. Get a free quote today.',
    type: 'website',
    url: 'https://webalchemy.in/website-developer-delhi',
  },
};

export default function Page() {
  return <LocationPage data={LOCATIONS.delhi} />;
}
