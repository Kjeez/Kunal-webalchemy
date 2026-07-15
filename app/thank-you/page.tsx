import type { Metadata } from 'next';
import ThankYouPage from '@/components/ThankYouPage';

export const metadata: Metadata = {
  alternates: { canonical: '/thank-you' },
};

export default function Page() {
  return <ThankYouPage />;
}
