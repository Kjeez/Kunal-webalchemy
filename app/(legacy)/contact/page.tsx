import type { Metadata } from 'next';
import ContactPage from '@/components/ContactPage';

export const metadata: Metadata = {
  title: 'Contact WebAlchemy — Get a Free Quote | Delhi NCR',
  description: 'Get in touch with WebAlchemy for web development, design, or marketing. Based in Uttam Nagar, Delhi. Free consultation — reply within 30 minutes.',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return <ContactPage />;
}
