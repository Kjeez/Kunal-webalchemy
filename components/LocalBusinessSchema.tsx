'use client';

import React from 'react';

/**
 * Renders a Person JSON-LD schema for Kunal (portfolio owner).
 * Included once in the app layout — outputs a <script type="application/ld+json">.
 */
const LocalBusinessSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kunal",
    "jobTitle": "Website Developer & UI/UX Designer",
    "url": "https://kunalwebdesigner.vercel.app",
    "telephone": "+91-7838583051",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressRegion": "DL",
      "addressCountry": "IN"
    },
    "knowsAbout": [
      "Web design", "Web development", "UI/UX design", "Figma", "Adobe Photoshop",
      "Adobe Illustrator", "WordPress", "Shopify", "Webflow", "Wix", "Next.js", "React"
    ],
    "worksFor": { "@type": "Organization", "name": "WebAlchemy", "url": "https://webalchemy.in" }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
