import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface BreadcrumbItem {
  label: string;
  /** If omitted, the item is treated as the current page (no link rendered) */
  href?: string;
}

export interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  /** Base site URL used in the JSON-LD schema, defaults to https://webalchemy.in */
  siteUrl?: string;
  /** Show a home icon on the first item */
  showHomeIcon?: boolean;
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({
  items,
  siteUrl = 'https://webalchemy.in',
  showHomeIcon = true,
  className = '',
}) => {
  if (!items || items.length === 0) return null;

  // -------------------------------------------------------------------------
  // BreadcrumbList JSON-LD schema
  // -------------------------------------------------------------------------
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      // Only include item if it has a URL; last item (current page) may not
      ...(item.href
        ? { item: `${siteUrl}${item.href.startsWith('/') ? item.href : `/${item.href}`}` }
        : {}),
    })),
  };

  return (
    <>
      {/* BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav
        aria-label="Breadcrumb"
        className={`w-full ${className}`}
      >
        <ol
          className="flex flex-wrap items-center gap-1 text-sm"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isFirst = index === 0;

            return (
              <li
                key={index}
                className="flex items-center gap-1"
                itemScope
                itemType="https://schema.org/ListItem"
                itemProp="itemListElement"
              >
                {/* Separator (not shown before first item) */}
                {!isFirst && (
                  <ChevronRight
                    size={14}
                    className="text-gray-600 shrink-0"
                    aria-hidden="true"
                  />
                )}

                {/* Breadcrumb label */}
                {isLast || !item.href ? (
                  // Current page — not a link
                  <span
                    className="text-gray-300 font-medium flex items-center gap-1"
                    aria-current="page"
                    itemProp="name"
                  >
                    {isFirst && showHomeIcon && (
                      <Home size={13} className="text-gray-400" aria-hidden="true" />
                    )}
                    {item.label}
                  </span>
                ) : (
                  // Ancestor — linked
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 rounded"
                    itemProp="item"
                  >
                    {isFirst && showHomeIcon && (
                      <Home size={13} aria-hidden="true" />
                    )}
                    <span itemProp="name">{item.label}</span>
                  </Link>
                )}

                {/* Hidden position meta for schema */}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default BreadcrumbNav;
