import type { Metadata } from 'next';
import AppDevelopmentPage from '@/components/services/AppDevelopmentPage';

export const metadata: Metadata = {
  title: 'Mobile App Development Delhi | WebAlchemy',
  description: 'iOS, Android & cross-platform app development. React Native and Flutter apps built for performance and user engagement.',
  alternates: { canonical: '/services/app-development' },
};

export default function Page() {
  return <AppDevelopmentPage />;
}
