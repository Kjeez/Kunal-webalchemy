import type { Metadata } from 'next';
import EcommerceDevPage from '@/components/EcommerceDevPage';

export const metadata: Metadata = {
  title: 'E-commerce Website Development Delhi NCR | WebAlchemy',
  description: 'Expert e-commerce website development in Delhi NCR. Shopify, WooCommerce, custom online stores. Boost your online sales with our proven solutions. Free quote!',
  alternates: { canonical: '/ecommerce-website-development' },
};

export default function Page() {
  return <EcommerceDevPage />;
}
