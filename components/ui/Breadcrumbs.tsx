import React from 'react';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export interface BreadcrumbItem {
  label: string;
  /** If omitted, the item is the current page (no link rendered). */
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** Base site URL used in JSON-LD; defaults to https://www.webalchemy.in */
  siteUrl?: string;
  className?: string;
}

/**
 * Restyled breadcrumbs for the new design. Emits the exact same
 * BreadcrumbList JSON-LD as the legacy seo/BreadcrumbNav — only the
 * visual markup changed (mono editorial trail). Server component.
 */
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  siteUrl = SITE_URL,
  className = '',
}) => {
  if (!items || items.length === 0) return null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href
        ? { item: `${siteUrl}${item.href.startsWith('/') ? item.href : `/${item.href}`}` }
        : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className={`crumbs${className ? ` ${className}` : ''}`}>
        <ol>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index}>
                {isLast || !item.href ? (
                  <span aria-current="page">{item.label}</span>
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
