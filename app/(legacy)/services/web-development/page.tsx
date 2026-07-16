import type { Metadata } from 'next';
import WebDevelopmentPage from '@/components/services/WebDevelopmentPage';

export const metadata: Metadata = {
  title: 'Web Development Services Delhi | WebAlchemy',
  description: 'Custom WordPress & React websites for Delhi businesses. Fast, SEO-ready, mobile-first. Get a free quote today.',
  alternates: { canonical: '/services/web-development' },
};

export default function Page() {
  return <WebDevelopmentPage />;
}
