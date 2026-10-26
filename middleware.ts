import { NextResponse, type NextRequest } from 'next/server';

/* Old /services?category=…&service=… links (from the previous site) are
   still in Google's index. Send each one, permanently, to the clean
   service page that replaced it, with the query string dropped. */

const BY_CATEGORY: Record<string, string> = {
  web: '/services/web-development',
  marketing: '/services/digital-marketing',
  design: '/services/design-branding',
  content: '/services/content-strategy',
  app: '/services/app-development',
  pr: '/services/pr-advertising',
};

function target(category: string | null, service: string | null): string {
  const s = (service ?? '').toLowerCase();
  if (/wordpress|woocommerce/.test(s)) return '/wordpress-development';
  if (/e-?commerce|shopify|online store/.test(s)) return '/ecommerce-website-development';
  return BY_CATEGORY[(category ?? '').toLowerCase()] ?? '/services';
}

export function middleware(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  if (!searchParams.has('category') && !searchParams.has('service')) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = target(searchParams.get('category'), searchParams.get('service'));
  url.search = '';
  return NextResponse.redirect(url, 308);
}

export const config = { matcher: '/services' };
