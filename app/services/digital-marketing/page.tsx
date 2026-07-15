import type { Metadata } from 'next';
import DigitalMarketingPage from '@/components/services/DigitalMarketingPage';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency Delhi | WebAlchemy',
  description: 'Google Ads, Meta Ads, SEO & social media marketing. Data-driven campaigns that deliver real ROI for Delhi NCR businesses.',
  alternates: { canonical: '/services/digital-marketing' },
};

export default function Page() {
  return <DigitalMarketingPage />;
}
