import { EMAIL, SITE_URL } from '@/lib/site';

/**
 * Site-wide Organization / ProfessionalService JSON-LD, rendered once in
 * the root layout. Name, address and phone here must match the Google
 * Business Profile exactly — that consistency is a local ranking signal.
 * No aggregateRating: self-published review markup isn't eligible for
 * stars and can trigger a manual action.
 */
export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: 'WebAlchemy',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    image: `${SITE_URL}/founder.jpg`,
    description:
      'Web design and development studio in New Delhi. Fixed-price business websites, e-commerce and SEO for businesses across India.',
    telephone: '+91-7838583051',
    email: EMAIL,
    founder: { '@type': 'Person', name: 'Kunal' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Uttam Nagar',
      addressLocality: 'New Delhi',
      addressRegion: 'DL',
      postalCode: '110059',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Gurugram' },
      { '@type': 'City', name: 'Ghaziabad' },
      { '@type': 'City', name: 'Faridabad' },
    ],
    priceRange: '₹14,999 – ₹49,999+',
    knowsAbout: ['Website development', 'WordPress', 'E-commerce websites', 'SEO', 'UI/UX design'],
    sameAs: ['https://www.instagram.com/webalchemy.in', 'https://www.linkedin.com/company/webalchemy'],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
