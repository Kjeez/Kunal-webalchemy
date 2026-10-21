// Location landing pages (Claude Design "Location"). One record per route;
// the design's city switcher becomes links between these routes.
//
// Copy is merged from the design and the pre-redesign pages
// (components/WebsiteDeveloperDelhiPage.tsx, LocationLandingPage.tsx,
// WebDevDelhiNCRPage.tsx). JSON-LD blocks are carried over verbatim.

import type { FaqItem } from '@/components/site/Faq';

export type LocationSlug = 'delhi' | 'gurgaon' | 'noida' | 'ncr';

export interface MapPin {
  name: string;
  /** percentage strings, e.g. '28%' */
  x: string;
  y: string;
  color: string;
}

export interface LocalWork {
  name: string;
  area: string;
  image: string;
  tint: string;
  color: string;
}

export interface AreaNote {
  name: string;
  description: string;
  href?: string;
}

export interface LocationData {
  slug: LocationSlug;
  path: string;
  /** Pill label in the city switcher */
  pill: string;
  /** Words before the serif city in the H1 */
  h1Lead: string;
  /** Serif accent in the H1, also used in headings ("What we build in …") */
  city: string;
  intro: string;
  whatsappMessage: string;
  map: {
    label: string;
    river?: 'east' | 'west' | 'centre';
    ridge?: boolean;
    pins: MapPin[];
  };
  localHeading: string;
  areas: { name: string; href?: string }[];
  areasLede: string;
  areaNotes?: AreaNote[];
  nearby?: { name: string; href?: string }[];
  about?: { eyebrow: string; heading: string; paras: string[] };
  cityCards?: { name: string; href: string; areas: string; color: string }[];
  offerings?: {
    heading: string;
    lede: string;
    items: { title: string; subtitle: string; desc: string; href: string }[];
  };
  reasons?: { heading: string; lede: string; items: { t: string; d: string }[] };
  pricing?: {
    heading: string;
    lede: string;
    tiers: { label: string; price: string; note: string }[];
    note: string;
  };
  process?: { heading: string; lede: string; steps: { t: string; d: string }[] };
  faqHeading: string;
  faqs: FaqItem[];
  /** Emit FAQPage JSON-LD (only where the old page did) */
  faqJsonLd: boolean;
  breadcrumbs?: { label: string; href?: string }[];
  jsonLd: Record<string, unknown>[];
}

/* ---------- shared bits ---------- */

const BLUE = '#3557f5';
const GREEN = '#2f7a4f';
const VIOLET = '#7a4bc2';
const RUST = '#c0532b';

export const LOCATION_LINKS: { slug: LocationSlug; label: string; href: string }[] = [
  { slug: 'delhi', label: 'Delhi', href: '/website-developer-delhi' },
  { slug: 'gurgaon', label: 'Gurgaon', href: '/website-developer-gurgaon' },
  { slug: 'noida', label: 'Noida', href: '/website-developer-noida' },
  { slug: 'ncr', label: 'All of Delhi NCR', href: '/web-development-company-delhi-ncr' },
];

export const LOCAL_SERVICES = [
  { t: 'Website Development', d: 'Custom websites that convert visitors into customers.', href: '/services/web-development' },
  { t: 'Digital Marketing', d: 'Data-driven campaigns that grow your business.', href: '/services/digital-marketing' },
  { t: 'Design & Branding', d: 'Visual identity that makes you memorable.', href: '/services/design-branding' },
  { t: 'Content Strategy', d: 'Words that rank on Google and sell to humans.', href: '/services/content-strategy' },
  { t: 'App Development', d: 'iOS and Android apps that users love.', href: '/services/app-development' },
  { t: 'PR & Advertising', d: 'Get featured in top publications and build your brand.', href: '/services/pr-advertising' },
];

/** Real local clients (named in the design) with portfolio screenshots. */
const LOCAL_WORK: LocalWork[] = [
  { name: 'BBPS Dwarka', area: 'DWARKA · EDUCATION', image: '/portfolio-screenshots/balbharti.jpg', tint: '#eef1ff', color: BLUE },
  { name: 'KR Mangalam Vikaspuri', area: 'VIKASPURI · EDUCATION', image: '/portfolio-screenshots/krmangalam.jpg', tint: '#eef1ff', color: BLUE },
  { name: 'Hardik Dental Clinic', area: 'UTTAM NAGAR · HEALTHCARE', image: '/portfolio-screenshots/hardikdentalclinic.jpg', tint: '#e8f4ec', color: GREEN },
  { name: 'St. Thomas Dwarka', area: 'DWARKA · EDUCATION', image: '/portfolio-screenshots/stthomas.jpg', tint: '#eef1ff', color: BLUE },
];
export const localWork = LOCAL_WORK;

const designFaqs = (city: string): FaqItem[] => [
  {
    q: `Do you meet clients in ${city}?`,
    a: 'Yes. We can meet in person for the strategy call or work fully online over WhatsApp and video calls, whichever suits you.',
  },
  {
    q: `How much does a website cost in ${city}?`,
    a: 'Every project gets a fixed quote after a free 30-minute strategy call, based on the pages, features and integrations you need. No hidden fees and no surprise invoices.',
  },
  {
    q: 'Can you help my business rank on Google locally?',
    a: 'Yes. Every site ships with an SEO-ready structure, and we can set up your Google Business Profile and local landing pages as part of our SEO service.',
  },
];

/* Gurgaon / Noida share the old LocationLandingPage FAQ set, merged with
   the design's. Fixed plan prices are left off these pages; claims
   of a physical office in the city are reworded to "Delhi NCR". */
const cityFaqs = (city: string, meetAt: string): FaqItem[] => [
  {
    q: `Do you meet clients in ${city}?`,
    a: `Yes. We offer free 30-minute strategy consultations for ${city} businesses. We can meet in person at your office in ${meetAt} or any convenient location, or work fully online over WhatsApp and video calls, whichever suits you.`,
  },
  {
    q: `What is the cost of website development in ${city}?`,
    a: `Every project gets a fixed quote after a free 30-minute strategy call, based on the pages, features and integrations you need. Contact us for a free quote tailored to your ${city} business needs.`,
  },
  {
    q: `How long does it take to build a website in ${city}?`,
    a: 'A starter website can go live in as little as 7 days. A standard business website typically takes 2-3 weeks, e-commerce websites take 4-6 weeks, and complex web applications can take 2-3 months. As a Delhi NCR agency, we keep communication quick and delivery on schedule.',
  },
  {
    q: `Do you provide website maintenance services in ${city}?`,
    a: `Yes! We offer comprehensive website maintenance packages for ${city} businesses including daily backups, security updates, content updates, and 24/7 support. Being based in Delhi NCR means faster response times.`,
  },
  {
    q: `Can you help my ${city} business rank on Google?`,
    a: `Absolutely! We specialize in local SEO for ${city} businesses. We optimize your website for location-based keywords like "best web designer in ${city}" to help you dominate local search results, and we can set up your Google Business Profile and local landing pages as part of our SEO service.`,
  },
  {
    q: 'What technologies do you use for website development?',
    a: 'We use modern technologies including React, Next.js, Node.js, WordPress, and Shopify. Our team stays updated with the latest trends to deliver cutting-edge solutions.',
  },
  {
    q: `Can you redesign my existing ${city} business website?`,
    a: `Yes! We specialize in website redesigns. We'll analyze your current site, understand your ${city} target audience, and create a modern, high-converting design that outperforms your competition.`,
  },
  {
    q: `Do you work with startups and small businesses in ${city}?`,
    a: `Absolutely! We love working with ${city} startups and SMEs. We offer flexible packages and payment plans to help growing businesses establish a strong online presence without breaking the bank.`,
  },
];

/** LocalBusiness schema from the old LocationLandingPage (verbatim shape). */
const cityLocalBusiness = (city: string, description: string, lat: number, lng: number) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: `WebAlchemy - Website Developer in ${city}`,
  description,
  url: `https://webalchemy.in/website-developer-${city.toLowerCase()}`,
  telephone: '+91-7838583051',
  address: {
    '@type': 'PostalAddress',
    addressLocality: city,
    addressRegion: 'Delhi NCR',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: lat, longitude: lng },
  openingHours: 'Mo-Sa 09:00-18:00',
  priceRange: '₹₹₹',
});

const cityReasons = (city: string) => ({
  heading: `Why choose WebAlchemy in ${city}?`,
  lede: `A Delhi NCR web development agency that understands ${city} businesses and delivers results that matter.`,
  items: [
    { t: 'Local expertise', d: `Deep understanding of the ${city} market and customer behaviour.` },
    { t: 'Fast turnaround', d: 'Average 7-day delivery with local support.' },
    { t: 'Fixed prices', d: 'A clear quote and timeline from day one. No surprise bills.' },
    { t: 'Modern technology', d: 'React, Next.js, WordPress and more, chosen for what your business needs.' },
  ],
});

/* ---------- records ---------- */

const delhi: LocationData = {
  slug: 'delhi',
  path: '/website-developer-delhi',
  pill: 'Delhi',
  h1Lead: 'Website developer in',
  city: 'Delhi',
  intro: 'Fast, mobile-first websites for schools, clinics and local businesses across Delhi. Fixed quotes, live in as little as 7 days.',
  whatsappMessage: "Hi! I'm looking for a website developer in Delhi. Can we discuss my project?",
  map: {
    label: 'Delhi & nearby areas',
    river: 'east',
    pins: [
      { name: 'BBPS Dwarka', x: '28%', y: '62%', color: BLUE },
      { name: 'St. Thomas Dwarka', x: '20%', y: '74%', color: BLUE },
      { name: 'KR Mangalam Vikaspuri', x: '38%', y: '40%', color: BLUE },
      { name: 'Hardik Dental, Uttam Nagar', x: '52%', y: '54%', color: GREEN },
      { name: 'BBIS Dwarka', x: '68%', y: '30%', color: BLUE },
    ],
  },
  localHeading: 'Trusted by businesses near you',
  areas: [
    'Dwarka', 'Vikaspuri', 'Uttam Nagar', 'Janakpuri', 'Rajouri Garden', 'Punjabi Bagh', 'Karol Bagh',
    'Connaught Place', 'Lajpat Nagar', 'Saket', 'Rohini', 'Pitampura', 'South Delhi',
  ].map((name) => ({ name })),
  areasLede: "We're based in Uttam Nagar, New Delhi. Most projects run over WhatsApp and video calls, and we're happy to meet in person across Delhi.",
  areaNotes: [
    { name: 'Uttam Nagar', description: 'Our home base in West Delhi. Walk-in consultations welcome at our Uttam Nagar office — no appointment needed.' },
    { name: 'Dwarka', description: 'Website development for Dwarka businesses — from Sector 1 to Sector 29 and Dwarka Expressway.' },
    { name: 'Janakpuri', description: 'Serving retailers, clinics, and service businesses across Janakpuri and Vikaspuri.' },
    { name: 'Rajouri Garden', description: 'E-commerce and business websites for the thriving market area around Rajouri Garden metro.' },
    { name: 'Rohini', description: 'Custom web solutions for North Delhi businesses in Rohini, Pitampura, and surrounding sectors.' },
    { name: 'South Delhi', description: 'Premium website design for businesses in GK, Saket, Hauz Khas, Lajpat Nagar, and Defence Colony.' },
    { name: 'Noida', description: "Web development for Noida's tech corridor — Sector 62, 63, Film City, and Greater Noida.", href: '/website-developer-noida' },
    { name: 'Ghaziabad', description: 'Affordable website solutions for manufacturers and traders in Ghaziabad and Indirapuram.' },
    { name: 'Gurgaon', description: 'High-performance websites for startups and corporates along Cyber City, Golf Course Road, and DLF.', href: '/website-developer-gurgaon' },
  ],
  about: {
    eyebrow: 'ABOUT US',
    heading: 'A Delhi web development agency that gets to the point',
    paras: [
      'WebAlchemy is a website development agency based in Uttam Nagar, New Delhi. We design and build websites for small businesses, startups, and established companies across Delhi NCR — the kind of sites that load fast, show up on Google, and make visitors want to pick up the phone.',
      "We're not a giant agency with layers of account managers. When you work with us, you talk directly to the people writing the code and designing the pages. That means faster turnarounds, fewer miscommunications, and a final product that actually matches what you asked for.",
      "Our stack is practical: WordPress with Elementor for businesses that need a clean site they can update themselves, and React or Next.js for projects that need custom logic, speed at scale, or something a page builder can't handle. Either way, every site we ship is mobile-responsive, SEO-ready, and built to convert visitors into customers.",
    ],
  },
  offerings: {
    heading: 'Web development services we offer in Delhi',
    lede: "Every project is different. Here's what we build most often for Delhi businesses — and the tech behind each one.",
    items: [
      {
        title: 'Business Websites',
        subtitle: 'WordPress & Elementor',
        href: '/wordpress-development',
        desc: "Need a professional website that looks credible from the first visit? We build business websites on WordPress with Elementor — giving you a polished design, easy content management, and pages that load fast. Whether you're a CA firm in Rajouri Garden or a manufacturer in Okhla, we create sites that do justice to the reputation you've earned offline.",
      },
      {
        title: 'Custom Web Applications',
        subtitle: 'React / Next.js / MERN',
        href: '/services/web-development',
        desc: "When a template won't cut it, we build from scratch. Our development team works with React, Next.js, Node.js, and MongoDB to create web applications that handle complex workflows — customer portals, booking systems, internal dashboards. If your business process is unique, your website should be too.",
      },
      {
        title: 'E-commerce Development',
        subtitle: 'Shopify, WooCommerce & Custom Stores',
        href: '/ecommerce-website-development',
        desc: 'Sell products online with a store built for the Indian market — Razorpay integration, Shiprocket shipping, GST-compliant invoicing. We set up Shopify, WooCommerce, or fully custom storefronts depending on your catalogue size and growth plans. From product photography guidance to payment testing, we handle the details.',
      },
      {
        title: 'Website Redesign & Speed Optimisation',
        subtitle: 'Performance & Modern UI',
        href: '/services/web-development',
        desc: 'Slow websites lose customers. We take over underperforming sites — fix Core Web Vitals, compress images, restructure code, and redesign the interface if it looks dated. Most of our redesign projects see measurably faster load times and better Google rankings within the first month.',
      },
    ],
  },
  reasons: {
    heading: 'Why Delhi businesses choose WebAlchemy',
    lede: "We've worked with enough clients to know what matters most — here's what we commit to on every project.",
    items: [
      { t: 'A local team you can actually meet', d: "Our office is in Uttam Nagar, West Delhi. Come over for a coffee and a whiteboard session — or we'll come to you anywhere in Delhi NCR." },
      { t: 'Transparent pricing — no surprises', d: 'We quote a fixed price before starting. Milestone-based payments so you only pay when work is delivered and approved. No hidden charges, no scope-creep bills.' },
      { t: 'Post-launch support that actually works', d: 'Every project includes 60 days of free bug-fix support. Need ongoing maintenance? Our monthly plans cover updates, backups, and on-call troubleshooting.' },
      { t: 'Speed and SEO are built in — not bolt-ons', d: 'Technical SEO, fast hosting, image optimisation, and clean code structure are part of every build. You get a site Google can crawl and index properly from day one.' },
      { t: "Full ownership — it's your website", d: 'You get the source code, admin access, and all credentials. If you ever want to move hosting or change agencies, there are no lock-ins. The site is yours.' },
    ],
  },
  process: {
    heading: 'How we work',
    lede: 'Five steps from first conversation to a live website.',
    steps: [
      { t: 'Discovery call', d: 'We understand your business, target audience, and goals. You walk away with a clear scope document — no jargon.' },
      { t: 'Design & wireframe', d: 'You see the layout and colour palette before we write a single line of code. Revisions happen here, not after launch.' },
      { t: 'Development', d: 'We build the site on a staging URL you can check anytime. Weekly progress updates — no radio silence.' },
      { t: 'Testing & launch', d: 'Cross-browser testing, mobile checks, speed audit, and SEO validation. Then we go live together.' },
      { t: 'Post-launch support', d: '60-day free support period. We monitor uptime, fix bugs, and hand over documentation so your team can manage day-to-day content.' },
    ],
  },
  faqHeading: 'Questions from Delhi businesses',
  faqs: [
    designFaqs('Delhi')[0],
    {
      q: 'How much does website development cost in Delhi?',
      a: 'Custom-coded websites with React or Next.js typically range from ₹40,000 to ₹1,50,000 depending on the number of pages and features. We provide a detailed quote after understanding your scope — no ballpark guesses.',
    },
    {
      q: 'How long does it take to build a website?',
      a: 'A starter website can go live in as little as 7 days. A straightforward 5–8 page business website usually takes 2–3 weeks from approved design to launch. E-commerce stores with product uploads and payment integration take 3–5 weeks. Custom web applications with backend logic, user accounts, or dashboards can take 6–10 weeks depending on complexity. We share a project timeline during our discovery call so you know exactly what to expect each week.',
    },
    {
      q: 'Do you provide website maintenance after launch?',
      a: 'Yes. Every project includes 60 days of complimentary support for bug fixes and minor adjustments. After that, we offer monthly maintenance plans starting from ₹3,000/month that cover plugin updates, security patches, daily backups, uptime monitoring, and content changes. You can also reach out on an as-needed basis without a monthly plan — we bill hourly for one-off requests.',
    },
    {
      q: 'WordPress or custom code — which is right for my business?',
      a: "WordPress is excellent if you need a content-heavy site you can update yourself — blogs, landing pages, portfolios, and standard business websites. It's faster to build and more affordable to maintain. Custom development with React or Next.js is better when you need interactive features, user portals, real-time data, or performance at scale. During our discovery call we'll recommend the right approach based on your actual needs, not upsell you on tech you don't require.",
    },
    {
      q: 'Do you help with SEO and Google ranking?',
      a: 'We build every website with technical SEO as a foundation — proper heading structure, fast load times, mobile responsiveness, clean URLs, meta tags, and schema markup. This gives Google what it needs to crawl and rank your pages. We can also set up your Google Business Profile and local landing pages. For ongoing SEO — keyword research, content strategy, link building, and rank tracking — we offer separate monthly packages or can work alongside your existing marketing team.',
    },
    {
      q: 'Can you redesign my existing website?',
      a: "Absolutely. We regularly take over WordPress sites, old HTML sites, and underperforming platforms. We audit the current site for speed, UX, and SEO issues, then redesign with a fresh interface while preserving any existing Google rankings and backlinks. If you're on an outdated platform, we'll migrate your content and set up proper redirects so you don't lose traffic during the switch.",
    },
    {
      q: 'Do you work with businesses outside Delhi?',
      a: "Yes. While our office is in Delhi and most of our clients are in Delhi NCR, we regularly work with businesses across India and internationally. Discovery calls, progress reviews, and handover all happen over video call. The process is identical — the only difference is we can't swing by your office for coffee.",
    },
    {
      q: 'What do you need from me to start?',
      a: "To give you an accurate quote, we need a clear idea of what the website should do — number of pages, key features, reference sites you like, and any brand assets you already have (logo, colour palette, copy). Don't worry if you're not sure about all the details yet. Our discovery call is designed to help you figure that out. Once we agree on scope and pricing, a 50% advance kicks off the project.",
    },
  ],
  faqJsonLd: true,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Website Developer in Delhi' },
  ],
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'WebAlchemy — Website Developer in Delhi',
      description:
        'Delhi-based web development agency specialising in custom WordPress, React, and Next.js websites for businesses across Delhi NCR.',
      url: 'https://webalchemy.in/website-developer-delhi',
      telephone: '+91-7838583051',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Uttam Nagar',
        addressLocality: 'New Delhi',
        addressRegion: 'DL',
        postalCode: '110059',
        addressCountry: 'IN',
      },
      areaServed: [
        { '@type': 'City', name: 'Delhi' },
        { '@type': 'City', name: 'Noida' },
        { '@type': 'City', name: 'Ghaziabad' },
        { '@type': 'City', name: 'Gurgaon' },
      ],
      priceRange: '₹₹',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '19:00',
      },
    },
  ],
};

const gurgaon: LocationData = {
  slug: 'gurgaon',
  path: '/website-developer-gurgaon',
  pill: 'Gurgaon',
  h1Lead: 'Website developer in',
  city: 'Gurgaon',
  intro: 'Websites for Gurgaon businesses that need to look established and turn visitors into enquiries. Fixed prices and a clear timeline from day one.',
  whatsappMessage: "Hi! I'm looking for a website developer in Gurgaon. Can we discuss my project?",
  map: {
    label: 'Gurgaon & nearby areas',
    ridge: true,
    pins: [
      { name: 'Cyber City', x: '40%', y: '35%', color: VIOLET },
      { name: 'Golf Course Road', x: '60%', y: '55%', color: VIOLET },
      { name: 'Sohna Road', x: '45%', y: '75%', color: VIOLET },
    ],
  },
  localHeading: 'Trusted by businesses across Delhi NCR',
  areas: [
    'DLF Phase 1–5', 'Sohna Road', 'Golf Course Road', 'MG Road', 'Udyog Vihar', 'Sector 29', 'Cyber City',
    'Palam Vihar', 'Sector 14', 'Old Gurgaon', 'Manesar',
  ].map((name) => ({ name })),
  areasLede: "We're based in New Delhi. Most projects run over WhatsApp and video calls, and we're happy to meet in person across Gurgaon.",
  nearby: [
    { name: 'Delhi', href: '/website-developer-delhi' },
    { name: 'Noida', href: '/website-developer-noida' },
    { name: 'Faridabad' },
    { name: 'Manesar' },
    { name: 'Sohna' },
  ],
  about: {
    eyebrow: 'GURGAON',
    heading: 'Empowering Gurgaon startups & corporates with digital excellence',
    paras: [
      'Looking for a professional website developer in Gurgaon? WebAlchemy is a web development company serving Gurgaon, specializing in custom websites, e-commerce solutions, and digital marketing. We have delivered 500+ projects for businesses across Delhi NCR.',
      'As a website development company for Gurgaon, we offer comprehensive digital solutions tailored for local businesses: custom websites for Gurgaon businesses, beautiful conversion-focused UI/UX design, digital marketing that helps you dominate Gurgaon search results, and website maintenance with ongoing support and updates.',
    ],
  },
  reasons: cityReasons('Gurgaon'),
  faqHeading: 'Questions from Gurgaon businesses',
  // design FAQs (meet / cost / local ranking) are folded into these answers
  faqs: cityFaqs('Gurgaon', 'Cyber City'),
  faqJsonLd: true,
  jsonLd: [
    cityLocalBusiness(
      'Gurgaon',
      'Leading website developer in Gurgaon. We create stunning websites for Gurgaon startups & corporates. Premium quality. Fast delivery. Get quote!',
      28.4595,
      77.0266,
    ),
  ],
};

const noida: LocationData = {
  slug: 'noida',
  path: '/website-developer-noida',
  pill: 'Noida',
  h1Lead: 'Website developer in',
  city: 'Noida',
  intro: 'Websites for Noida startups, clinics and schools. Mobile-first, SEO-ready and built to bring in leads, with free domain and hosting.',
  whatsappMessage: "Hi! I'm looking for a website developer in Noida. Can we discuss my project?",
  map: {
    label: 'Noida & nearby areas',
    river: 'west',
    pins: [
      { name: 'Sector 18', x: '35%', y: '35%', color: RUST },
      { name: 'Sector 62', x: '62%', y: '45%', color: RUST },
      { name: 'Noida Extension', x: '50%', y: '72%', color: RUST },
    ],
  },
  localHeading: 'Trusted by businesses across Delhi NCR',
  areas: [
    'Sector 18', 'Sector 62', 'Sector 63', 'Noida Extension', 'Sector 50', 'Sector 137', 'Greater Noida',
    'Sector 125', 'Noida Expressway', 'Film City', 'Sector 16', 'Knowledge Park', 'Tech Zone',
  ].map((name) => ({ name })),
  areasLede: "We're based in New Delhi. Most projects run over WhatsApp and video calls, and we're happy to meet in person across Noida.",
  nearby: [
    { name: 'Delhi', href: '/website-developer-delhi' },
    { name: 'Gurgaon', href: '/website-developer-gurgaon' },
    { name: 'Greater Noida' },
    { name: 'Ghaziabad' },
    { name: 'Faridabad' },
  ],
  about: {
    eyebrow: 'NOIDA',
    heading: "Building digital solutions for Noida's tech ecosystem",
    paras: [
      'Looking for a professional website developer in Noida? WebAlchemy is a web development company serving Noida and Greater Noida, specializing in custom websites, e-commerce solutions, and digital marketing. We have delivered 500+ projects for businesses across Delhi NCR.',
      'As a website development company for Noida, we offer comprehensive digital solutions tailored for local businesses: custom websites for Noida businesses, beautiful conversion-focused UI/UX design, digital marketing that helps you dominate Noida search results, and website maintenance with ongoing support and updates.',
    ],
  },
  reasons: cityReasons('Noida'),
  faqHeading: 'Questions from Noida businesses',
  faqs: cityFaqs('Noida', 'Sector 62'),
  faqJsonLd: true,
  jsonLd: [
    cityLocalBusiness(
      'Noida',
      'Expert website developer in Noida & Greater Noida. Building high-performance websites for IT companies & startups. Free consultation!',
      28.5355,
      77.391,
    ),
  ],
};

const ncr: LocationData = {
  slug: 'ncr',
  path: '/web-development-company-delhi-ncr',
  pill: 'All of Delhi NCR',
  h1Lead: 'Web development company in',
  city: 'Delhi NCR',
  intro: 'Premium website development, e-commerce solutions and digital marketing for businesses across Delhi, Gurgaon, Noida, Faridabad and Ghaziabad.',
  whatsappMessage: "Hi! I'm looking for a web development company in Delhi NCR. Can we discuss my project?",
  map: {
    label: 'Delhi NCR',
    river: 'centre',
    pins: [
      { name: 'KR Mangalam Vikaspuri', x: '30%', y: '24%', color: BLUE },
      { name: 'BBPS Dwarka', x: '22%', y: '40%', color: BLUE },
      { name: 'Hardik Dental, Uttam Nagar', x: '40%', y: '33%', color: GREEN },
      { name: 'Cyber City', x: '26%', y: '62%', color: VIOLET },
      { name: 'Golf Course Road', x: '36%', y: '76%', color: VIOLET },
      { name: 'Sector 18', x: '72%', y: '52%', color: RUST },
      { name: 'Sector 62', x: '80%', y: '38%', color: RUST },
    ],
  },
  localHeading: 'Trusted by businesses across Delhi NCR',
  areas: [
    { name: 'Delhi', href: '/website-developer-delhi' },
    { name: 'Gurgaon', href: '/website-developer-gurgaon' },
    { name: 'Noida', href: '/website-developer-noida' },
    { name: 'Faridabad' },
    { name: 'Ghaziabad' },
    { name: 'Greater Noida' },
    { name: 'Connaught Place' },
    { name: 'Nehru Place' },
    { name: 'Saket' },
    { name: 'Dwarka' },
    { name: 'Cyber City' },
    { name: 'DLF' },
    { name: 'Golf Course Road' },
    { name: 'Udyog Vihar' },
    { name: 'Sector 62' },
    { name: 'Sector 18' },
    { name: 'Film City' },
  ],
  areasLede: "We're based in New Delhi. Most projects run over WhatsApp and video calls, and we're happy to meet in person anywhere in the National Capital Region.",
  about: {
    eyebrow: 'DELHI NCR',
    heading: 'One web team for the whole National Capital Region',
    paras: [
      'WebAlchemy is a web development company in Delhi NCR, providing premium website development, e-commerce solutions, and digital marketing services across Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad.',
      'Our web development services cover the full journey: custom web development tailored to Delhi NCR businesses, beautiful conversion-focused UI/UX design, digital marketing (SEO, PPC and social media), iOS and Android app development, e-commerce stores on Shopify, WooCommerce or fully custom, and website maintenance with support and security updates.',
    ],
  },
  cityCards: [
    { name: 'Delhi', href: '/website-developer-delhi', areas: 'Connaught Place, Nehru Place, Saket, Dwarka', color: BLUE },
    { name: 'Gurgaon', href: '/website-developer-gurgaon', areas: 'Cyber City, DLF, Golf Course Road, Udyog Vihar', color: VIOLET },
    { name: 'Noida', href: '/website-developer-noida', areas: 'Sector 62, Sector 18, Film City, Greater Noida', color: RUST },
  ],
  faqHeading: 'Questions from Delhi NCR businesses',
  faqs: [
    ...designFaqs('Delhi NCR'),
    {
      q: 'Which parts of Delhi NCR do you cover?',
      a: 'All of it. We work with businesses in Delhi, Gurgaon, Noida, Faridabad, Ghaziabad and Greater Noida, in person or fully online.',
    },
  ],
  faqJsonLd: false,
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'WebAlchemy - Web Development Company Delhi NCR',
      url: 'https://webalchemy.in',
      logo: 'https://webalchemy.in/logo.png',
      description:
        'Best web development company in Delhi NCR providing custom websites, e-commerce, and digital marketing services',
      areaServed: ['Delhi', 'Gurgaon', 'Noida', 'Faridabad', 'Ghaziabad', 'Greater Noida'],
      address: { '@type': 'PostalAddress', addressRegion: 'Delhi NCR', addressCountry: 'IN' },
    },
  ],
};

export const LOCATIONS: Record<LocationSlug, LocationData> = { delhi, gurgaon, noida, ncr };
