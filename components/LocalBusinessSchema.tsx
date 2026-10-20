'use client';

import React from 'react';

/**
 * Renders a ProfessionalService JSON-LD schema for WebAlchemy.
 * Included once in the app layout — outputs a <script type="application/ld+json">.
 */
const LocalBusinessSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "WebAlchemy",
    "url": "https://webalchemy.in",
    "telephone": "+91-7838583051",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Uttam Nagar",
      "addressLocality": "New Delhi",
      "addressRegion": "DL",
      "postalCode": "110059",
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "City", "name": "Delhi" },
      { "@type": "City", "name": "Noida" },
      { "@type": "City", "name": "Ghaziabad" },
      { "@type": "City", "name": "Gurgaon" }
    ],
    "priceRange": "₹₹",
    "sameAs": [
      "https://www.instagram.com/webalchemy.in",
      "https://www.linkedin.com/company/webalchemy"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
