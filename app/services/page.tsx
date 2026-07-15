import type { Metadata } from 'next';
import ServicesPage from '@/components/ServicesPage';

export const metadata: Metadata = {
  alternates: { canonical: '/services' },
};

export default function Page() {
  return <ServicesPage />;
}
