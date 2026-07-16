import type { Metadata } from 'next';
import DesignBrandingPage from '@/components/services/DesignBrandingPage';

export const metadata: Metadata = {
  title: 'UI/UX Design & Branding | WebAlchemy',
  description: 'Professional UI/UX design, logo creation, and brand identity systems. Make your business look as good as it performs.',
  alternates: { canonical: '/services/design-branding' },
};

export default function Page() {
  return <DesignBrandingPage />;
}
