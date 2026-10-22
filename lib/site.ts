// Central site config for the new design system components.
// Every href below points at an EXISTING route — the redesign must not
// add, rename, or remove URLs.

export const SITE_URL = 'https://kunalwebdesigner.vercel.app';

export const PHONE = '917838583051';
export const PHONE_DISPLAY = '+91 78385 83051';
export const TEL_HREF = 'tel:+917838583051';

export const whatsappHref = (message?: string) =>
  `https://wa.me/${PHONE}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Kunal! I'm interested in a website / design project. Please share more details.";

export const OWNER = 'Kunal';

export interface NavLink {
  label: string;
  href: string;
}

// Top-level nav — mirrors the legacy Navbar's links.
export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const NAV_CTA: NavLink = { label: 'Get Free Quote', href: '/contact' };

// Footer link columns — every link carried over from the legacy Footer
// (components/Footer.tsx) unchanged, including the pre-existing /about
// link (route has never existed; kept for parity, flagged for review).
export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'UI/UX Design', href: '/services/design-branding' },
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
      { label: 'SEO & Content', href: '/services/content-strategy' },
      { label: 'App Development', href: '/services/app-development' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Blog', href: '/blog' },
      { label: 'All Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Web Development in Delhi NCR',
    links: [
      { label: 'Website Developer Delhi', href: '/website-developer-delhi' },
      { label: 'Website Developer Gurgaon', href: '/website-developer-gurgaon' },
      { label: 'Website Developer Noida', href: '/website-developer-noida' },
      { label: 'Web Dev Company Delhi NCR', href: '/web-development-company-delhi-ncr' },
      { label: 'WordPress Development', href: '/wordpress-development' },
      { label: 'E-commerce Development', href: '/ecommerce-website-development' },
    ],
  },
];

// Carried over from the legacy footer bottom bar (hrefs were "#" there too).
export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Sitemap', href: '#' },
];

// Carried over from the legacy footer social icons (hrefs were "#" there too).
export const FOOTER_SOCIALS: NavLink[] = [
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'GitHub', href: '#' },
];

// ---- 2026 redesign (components/site/*) ----

export const EMAIL = 'contact@webalchemy.in';
export const CALENDLY_URL = 'https://calendly.com/yourtrickster-kg/30min';

// Header nav. "Services" opens the services menu (see SiteHeader).
// `match` drives the active underline; hash links never show as active.
export const SITE_NAV: (NavLink & { match: string })[] = [
  { label: 'Work', href: '/portfolio', match: '/portfolio' },
  { label: 'Services', href: '/services', match: '/services' },
  { label: 'Toolbox', href: '/#toolbox', match: '/#toolbox' },
  { label: 'About', href: '/about', match: '/about' },
  { label: 'Blog', href: '/blog', match: '/blog' },
  { label: 'Contact', href: '/contact', match: '/contact' },
];

// Header "Services" menu (desktop dropdown + mobile drawer).
export const SERVICE_MENU: (NavLink & { desc: string; color: string })[] = [
  { label: 'Web Design & Development', href: '/services/web-development', desc: 'Fast, custom websites that turn visitors into customers.', color: '#3557f5' },
  { label: 'UI/UX & Brand Design', href: '/services/design-branding', desc: 'Figma prototypes, design systems, logos and brand kits.', color: '#7a4bc2' },
  { label: 'WordPress Websites', href: '/wordpress-development', desc: 'Elementor, custom themes and WooCommerce.', color: '#2f7a4f' },
  { label: 'E-commerce Stores', href: '/ecommerce-website-development', desc: 'Shopify and WooCommerce stores that sell.', color: '#a8660a' },
];

export const SITE_FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  {
    title: 'Expertise',
    links: [
      { label: 'Web Design & Development', href: '/services/web-development' },
      { label: 'UI/UX & Brand Design', href: '/services/design-branding' },
      { label: 'WordPress Websites', href: '/wordpress-development' },
      { label: 'E-commerce Stores', href: '/ecommerce-website-development' },
      { label: 'All services', href: '/services' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'All projects', href: '/portfolio' },
      { label: 'About me', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Toolbox', href: '/#toolbox' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Toolbox',
    links: [
      { label: 'Figma · Photoshop · Illustrator', href: '/#toolbox' },
      { label: 'WordPress · WooCommerce', href: '/#toolbox' },
      { label: 'Shopify · Webflow · Wix', href: '/#toolbox' },
      { label: 'React · Next.js', href: '/#toolbox' },
    ],
  },
];

// Category palette shared by work / blog / location cards: [ink, tint].
export const TONES = {
  blue: ['#3557f5', '#eef1ff'],
  green: ['#2f7a4f', '#e8f4ec'],
  amber: ['#a8660a', '#fbf3e2'],
  rust: ['#c0532b', '#fcebe3'],
  violet: ['#7a4bc2', '#f3ecfb'],
  ink: ['#14161c', '#f2f1ec'],
} as const;
export type Tone = keyof typeof TONES;
