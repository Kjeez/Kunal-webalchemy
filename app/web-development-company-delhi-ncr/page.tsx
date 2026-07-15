import type { Metadata } from 'next';
import WebDevDelhiNCRPage from '@/components/WebDevDelhiNCRPage';

export const metadata: Metadata = {
  title: 'Best Web Development Company in Delhi NCR | WebAlchemy',
  description: 'Leading web development company in Delhi NCR. Custom websites, e-commerce, digital marketing for businesses in Delhi, Gurgaon, Noida. 100+ clients. Free quote!',
  alternates: { canonical: '/web-development-company-delhi-ncr' },
};

export default function Page() {
  return <WebDevDelhiNCRPage />;
}
