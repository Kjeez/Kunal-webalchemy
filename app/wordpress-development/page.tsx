import type { Metadata } from 'next';
import WordpressDevPage from '@/components/WordpressDevPage';

export const metadata: Metadata = {
  title: 'WordPress Developer Delhi NCR | WebAlchemy - Expert WordPress Development',
  description: 'Expert WordPress developer in Delhi NCR. Custom themes, plugins, WooCommerce, speed optimization. 100+ WordPress sites delivered. Free consultation!',
  alternates: { canonical: '/wordpress-development' },
};

export default function Page() {
  return <WordpressDevPage />;
}
