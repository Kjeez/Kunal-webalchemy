'use client';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://www.webalchemy.in';

/**
 * Global hook that sets a self-referencing <link rel="canonical"> tag
 * on every route change. Strips query parameters and trailing slashes
 * so that param-based duplicates (e.g. /services?category=web) always
 * canonicalise to the clean pathname.
 */
const useCanonical = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Normalise: remove trailing slash (except for root "/")
    const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    const canonicalUrl = `${SITE_URL}${cleanPath}`;

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;
  }, [pathname]);
};

export default useCanonical;
