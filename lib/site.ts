// Central site config for the new design system components.
// Every href below points at an EXISTING route — the redesign must not
// add, rename, or remove URLs.

export const SITE_URL = 'https://www.webalchemy.in';

export const PHONE = '917838583051';
export const PHONE_DISPLAY = '+91 78385 83051';
export const TEL_HREF = 'tel:+917838583051';

export const whatsappHref = (message?: string) =>
  `https://wa.me/${PHONE}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi! I'm interested in your web development services. Please share more details.";

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

// Header nav, in the design's order. `key` drives the active underline.
export const SITE_NAV: (NavLink & { match: string })[] = [
  { label: 'Work', href: '/portfolio', match: '/portfolio' },
  { label: 'Services', href: '/services', match: '/services' },
  { label: 'Pricing', href: '/#pricing', match: '/#pricing' },
  { label: 'About', href: '/about', match: '/about' },
  { label: 'Blog', href: '/blog', match: '/blog' },
  { label: 'Contact', href: '/contact', match: '/contact' },
];

// Header "Services" menu (desktop dropdown + mobile drawer).
export const SERVICE_MENU: (NavLink & { desc: string; color: string })[] = [
  { label: 'Website Development', href: '/services/web-development', desc: 'Fast websites that turn visitors into customers.', color: '#3557f5' },
  { label: 'Digital Marketing', href: '/services/digital-marketing', desc: 'Google & Meta ads, SEO and reporting.', color: '#2f7a4f' },
  { label: 'Design & Branding', href: '/services/design-branding', desc: 'Logos, brand kits and UI/UX design.', color: '#a8660a' },
  { label: 'Content Strategy', href: '/services/content-strategy', desc: 'Copy and blogs that rank and sell.', color: '#c0532b' },
  { label: 'App Development', href: '/services/app-development', desc: 'iOS and Android apps people use.', color: '#7a4bc2' },
  { label: 'PR & Advertising', href: '/services/pr-advertising', desc: 'Media placements and brand campaigns.', color: '#14161c' },
  { label: 'WordPress Development', href: '/wordpress-development', desc: 'Custom themes, plugins and WooCommerce.', color: '#3557f5' },
  { label: 'E-commerce Development', href: '/ecommerce-website-development', desc: 'Shopify and custom online stores.', color: '#2f7a4f' },
];

export const LOCATION_MENU: NavLink[] = [
  { label: 'Website Developer Delhi', href: '/website-developer-delhi' },
  { label: 'Website Developer Gurgaon', href: '/website-developer-gurgaon' },
  { label: 'Website Developer Noida', href: '/website-developer-noida' },
  { label: 'Web Development Company Delhi NCR', href: '/web-development-company-delhi-ncr' },
];

export const SITE_FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
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
    title: 'Industries',
    links: [
      { label: 'Doctors & Clinics', href: '/website-for-doctors-and-clinics' },
      { label: 'Real Estate', href: '/real-estate-website-design' },
      { label: 'Interior Designers & Architects', href: '/interior-designer-website-design' },
      { label: 'Manufacturers & Exporters', href: '/manufacturing-company-website-design' },
      { label: 'CA & Law Firms', href: '/website-for-ca-and-law-firms' },
      { label: 'Jewellers', href: '/jewellery-website-design' },
      { label: 'Restaurants & Bakeries', href: '/restaurant-bakery-website-design' },
      { label: 'Schools & Coaching', href: '/school-coaching-website-design' },
      { label: 'Gyms, Yoga & Salons', href: '/gym-salon-website-design' },
      { label: 'Website Cost in India', href: '/blog/website-development-cost-india' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Delhi NCR',
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

/** Blog author (every article is written and reviewed by the founder). */
export const AUTHOR = {
  name: 'Kunal',
  bio: 'Founder of WebAlchemy, a web design and growth studio in New Delhi. Has built websites for 500+ businesses, from Karol Bagh jewellers to Noida eye hospitals.',
};
