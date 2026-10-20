import type { Project } from './projectsData';
import type { Tone } from '@/lib/site';

/* Content for every service page rendered by components/service/ServicePage
   (Claude Design "Service" mock). Copy is carried over from the legacy
   service components — nothing here is new marketing claims; prices are the
   ones each page already stated. */

export type ProjectCategory = Project['category'];

export interface ServiceLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  t: string;
  d: string;
  bullets?: string[];
  link?: ServiceLink;
}

export interface ServiceAudienceRow {
  t: string;
  d: string;
  tone: Tone;
  /** Portfolio categories to count (links to /portfolio). Omit for rows
   *  that aren't backed by portfolio projects (they link to /contact). */
  categories?: ProjectCategory[];
}

export interface ServiceCaseStudy {
  title: string;
  client: string;
  industry: string;
  location: string;
  stack: string[];
  results: string[];
}

export interface ServicePlan {
  name: string;
  price: string;
  unit?: string;
  features: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceData {
  key: string;
  /** Route path (unchanged legacy URL). */
  path: string;
  num: string;
  /** Display name (breadcrumb, cards). */
  name: string;
  /** Short label for "Other services" chips. */
  chip: string;
  /** BreadcrumbList label — kept identical to the legacy schema. */
  crumb: string;
  meta: { title: string; description: string; keywords?: string };
  schema: { name: string; description: string; areaServed?: string[] };
  /** [before, serif accent, after] */
  h1: [string, string, string?];
  lede: string;
  glance: { k: string; v: string }[];
  glanceCta: ServiceLink;
  included: { heading: string; intro?: string; items: ServiceItem[] };
  details?: { eyebrow: string; heading: string; intro?: string; items: ServiceItem[] };
  audience: { heading: string; intro?: string; rows: ServiceAudienceRow[] };
  projects?: { heading: string; intro?: string; items: ServiceCaseStudy[] };
  process: { heading: string; intro?: string; steps: { when: string; t: string; d: string }[] };
  pricing: { heading: string; intro?: string; plans: ServicePlan[]; note?: string; compare?: boolean };
  faq: { heading: string; items: ServiceFaq[] };
}

// ---------------------------------------------------------------------------
// Shared bits
// ---------------------------------------------------------------------------

const AREAS = ['Delhi', 'Gurgaon', 'Noida', 'Delhi NCR'];

/** Web-build process (legacy web-development page), reused by the WordPress
 *  and e-commerce pages, which never had a process section of their own. */
const webSteps = (support: string, buildExtra = '') => [
  {
    when: 'BEFORE DESIGN',
    t: 'Scope & wireframe',
    d: 'We map out every page, feature and integration before writing code. You approve the layout and sitemap before design begins, while changes are still cheap.',
  },
  {
    when: 'FIGMA MOCKUPS',
    t: 'Visual design',
    d: 'Mockups for desktop and mobile, so you see exactly what the finished site will look like and can request revisions before development starts.',
  },
  {
    when: 'STAGING URL',
    t: 'Build & iterate',
    d: `Development on a staging URL you can check anytime, with weekly check-ins.${buildExtra} Content entry, testing and speed optimisation happen here.`,
  },
  {
    when: 'GO LIVE',
    t: 'Launch & support',
    d: `DNS cutover, SSL setup, analytics and Google Search Console submission. Then ${support} while you settle in.`,
  },
];

const PORTFOLIO_ROWS: ServiceAudienceRow[] = [
  { t: 'Schools & education', d: 'Admissions, notices, results, galleries', tone: 'blue', categories: ['Educational'] },
  { t: 'Dental & healthcare', d: 'Appointments, treatments, doctor profiles', tone: 'green', categories: ['Dental'] },
  { t: 'Travel & resorts', d: 'Packages, bookings, enquiries', tone: 'amber', categories: ['Travel'] },
  { t: 'E-commerce', d: 'Catalogues, payments, shipping', tone: 'rust', categories: ['E-commerce'] },
  { t: 'Corporate', d: 'Services, reports, careers', tone: 'violet', categories: ['Corporate'] },
];

const CASE_BATON_ROUGE: ServiceCaseStudy = {
  title: 'Full website build — restaurant chain',
  client: 'Bâton Rouge (Canadian restaurant chain)',
  industry: 'Restaurant & Hospitality',
  location: 'Canada (remote project)',
  stack: ['WordPress', 'Elementor', 'WPML'],
  results: [
    'Complete homepage system with menu, reservations, and locations',
    'Multilingual-ready architecture (English + French)',
    'Mobile-first responsive design across all pages',
  ],
};

const CASE_TRUDANAZ: ServiceCaseStudy = {
  title: 'Product catalogue website with enquiry system',
  client: 'Trudanaz Pharmaceuticals',
  industry: 'Pharmaceutical',
  location: 'Delhi NCR',
  stack: ['WordPress', 'Custom Theme', 'Contact Form 7'],
  results: [
    'Custom WordPress theme matching brand guidelines',
    'Product catalogue with category filtering',
    'Enquiry form system connected to sales team email',
  ],
};

const CASE_KAMLESH: ServiceCaseStudy = {
  title: 'Corporate gifting platform',
  client: 'Kamlesh Group',
  industry: 'Corporate Gifting',
  location: 'Delhi',
  stack: ['React', 'Vite', 'Tailwind CSS'],
  results: [
    'Modern React SPA with product showcase',
    'Bulk order enquiry flow with WhatsApp integration',
    'Responsive design optimised for mobile buyers',
  ],
};

const CASE_BENTO: ServiceCaseStudy = {
  title: 'Performance optimisation — restaurant website',
  client: 'Bento Sushi',
  industry: 'Food & Beverage',
  location: 'Canada (remote)',
  stack: ['WordPress', 'WP Rocket', 'Core Web Vitals'],
  results: [
    'Significant reduction in page load times across all pages',
    'Fixed layout shift issues affecting mobile user experience',
    'Implemented lazy loading and image optimisation pipeline',
  ],
};

const CASE_VIABTECH_MARKETING: ServiceCaseStudy = {
  title: 'Ongoing digital marketing retainer',
  client: 'Viabtech (Canon/Epson dealer, Tanzania)',
  industry: 'Office Equipment & Supplies',
  location: 'Tanzania (remote)',
  stack: ['Meta Ads', 'Instagram', 'SEO', 'Google Business Profile'],
  results: [
    'Meta Ads management — lead generation and catalogue campaigns',
    'Instagram content management with scheduled posting calendar',
    'Google Business Profile optimisation and local SEO',
  ],
};

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

const webDevelopment: ServiceData = {
  key: 'web-development',
  path: '/services/web-development',
  num: '01',
  name: 'Website Development',
  chip: 'Web Development',
  crumb: 'Web Development',
  meta: {
    title: 'Web Development Services Delhi | WebAlchemy',
    description: 'Custom WordPress & React websites for Delhi businesses. Fast, SEO-ready, mobile-first. Get a free quote today.',
  },
  schema: {
    name: 'Web Development Services',
    description: 'Custom WordPress & React websites for Delhi businesses. Fast, SEO-ready, mobile-first.',
    areaServed: AREAS,
  },
  h1: ['Custom websites that convert visitors into ', 'customers'],
  lede: 'Fast, mobile-first websites built around how your customers decide. Fixed prices, a clear timeline and a team you can message directly.',
  glance: [
    { k: 'Starting at', v: '₹14,999' },
    { k: 'Delivery', v: '7 days' },
    { k: 'Domain & hosting', v: 'Free' },
    { k: 'PageSpeed', v: '98+' },
  ],
  glanceCta: { label: 'Build your estimate →', href: '/#estimate' },
  included: {
    heading: 'Everything a website needs to sell',
    intro:
      'We build websites that do more than look good — they load fast, rank on Google, and turn visitors into paying customers. Whether you need a five-page business site on WordPress or a custom React application with user dashboards and API integrations, our Delhi-based team handles the full build from design to deployment. Every project ships with mobile responsiveness, technical SEO and post-launch support included.',
    items: [
      { t: 'Responsive design', d: 'Looks and works right on every phone, tablet and laptop.' },
      { t: 'Fast performance', d: 'Sites that consistently score 98+ on Google PageSpeed.' },
      { t: 'SEO optimized', d: 'Clean structure, metadata and speed so Google can find you.' },
      { t: 'Clear calls-to-action', d: 'Every page leads visitors to call, WhatsApp or enquire.' },
      { t: 'Contact & analytics', d: 'Contact forms and Google Analytics set up from day one.' },
      { t: 'Free domain, SSL & hosting', d: 'Included with Starter and Growth plans.' },
    ],
  },
  details: {
    eyebrow: 'WHAT WE BUILD',
    heading: 'Four ways we build for the web',
    intro: 'Four core web development services — each tailored to different business needs, budgets, and growth stages.',
    items: [
      {
        t: 'Business websites',
        d: 'Professional websites for companies that need a credible online presence without a six-figure budget. We build on WordPress with Elementor, giving you a polished design, fast load times, and an admin panel you can actually use. Most business sites include 5-10 pages — home, about, services, portfolio, contact — with a blog section for SEO content, plus training so your team can manage day-to-day updates.',
        link: { label: 'Our WordPress work', href: '/wordpress-development' },
      },
      {
        t: 'Custom web applications',
        d: 'When templates and page builders hit their limits, we write code from scratch. Our stack is React and Next.js on the frontend, Node.js and MongoDB on the backend. We build customer portals, booking engines, inventory dashboards, multi-vendor marketplaces — anything that needs custom business logic beyond what WordPress can handle. These projects typically run 6-10 weeks and start from ₹40,000.',
        link: { label: 'App development services', href: '/services/app-development' },
      },
      {
        t: 'E-commerce stores',
        d: 'Online stores built for the Indian market — Razorpay and Paytm payment gateways, Shiprocket or Delhivery shipping integration, GST-compliant invoicing. We work with Shopify for quick-launch stores, WooCommerce for WordPress-based catalogues, and fully custom setups for businesses with specific requirements. Product uploads, variant management, discount coupons, and abandoned cart emails are all part of the package.',
        link: { label: 'E-commerce development details', href: '/ecommerce-website-development' },
      },
      {
        t: 'Redesign & speed optimisation',
        d: 'Already have a website that looks outdated or loads slowly? We audit your existing site for Core Web Vitals issues, bloated plugins, unoptimised images, and poor mobile layouts — then fix everything. For sites that need a visual refresh, we redesign the UI while preserving your existing Google rankings and backlinks through proper URL mapping and 301 redirects. Most redesign projects are completed in 3-4 weeks.',
        link: { label: 'Website development in Delhi', href: '/website-developer-delhi' },
      },
    ],
  },
  audience: {
    heading: 'Built for businesses like yours',
    intro:
      'Our web development services are built for small-to-mid-sized businesses that need a website that actually works for them — not just a digital brochure collecting dust. Local service providers, product companies launching online, startups that need to look established, or businesses whose current site is outdated.',
    rows: PORTFOLIO_ROWS,
  },
  projects: {
    heading: 'Real builds for real businesses',
    items: [CASE_BATON_ROUGE, CASE_TRUDANAZ, CASE_KAMLESH],
  },
  process: {
    heading: 'Live in as little as 7 days',
    steps: [
      {
        when: 'DAY 1',
        t: 'Free strategy call',
        d: '30 minutes on your goals and customers. We map out the pages, features and integrations, and you leave with a plan and a fixed quote.',
      },
      {
        when: 'DAYS 2–6',
        t: 'Design & build',
        d: 'We design for desktop and mobile, then build on a staging URL, sharing progress as we go. Unlimited revisions before launch.',
      },
      {
        when: 'DAY 7',
        t: 'Launch & grow',
        d: 'Live on your domain with SSL, analytics, Search Console and SEO basics, plus 1–3 months of support.',
      },
    ],
  },
  pricing: {
    heading: 'Fixed prices. No hidden fees.',
    compare: true,
    plans: [
      { name: 'Starter', price: '₹14,999', features: ['Up to 5 pages', 'Free domain & hosting', '7-day delivery'], cta: 'Get Started' },
      { name: 'Growth', price: '₹29,999', features: ['Up to 10 pages', 'Blog/CMS & e-commerce', '3 months of support'], cta: 'Start Growing', featured: true },
      { name: 'Premium', price: '₹49,999', features: ['Up to 20 pages', 'Complete redesign, custom UI/UX', '6 months of support'], cta: 'Go Premium' },
    ],
    note: 'Custom web applications and larger builds are quoted on scope — we provide a detailed estimate after the discovery call.',
  },
  faq: {
    heading: 'Questions about web development',
    items: [
      {
        q: 'How long does it take to build a website?',
        a: 'A standard high-conversion landing page typically takes 2-3 weeks. A full 5-10 page corporate website usually takes 4-6 weeks. Complex web applications with custom backends can take 2-3 months. We provide a detailed timeline during our initial strategy call.',
      },
      {
        q: 'What platforms do you build websites on?',
        a: 'We work primarily with two stacks. For content-managed business sites, we use WordPress with Elementor or custom themes — it gives you full control over pages, blogs, and media without touching code. For projects that need custom logic, interactive interfaces, or high performance under load, we build with React, Next.js, and Node.js. We also set up Shopify and WooCommerce stores when e-commerce is the priority. The right platform depends on your goals, and we help you choose during the discovery call.',
      },
      {
        q: 'Will my website work well on mobile phones?',
        a: 'Every site we build is designed mobile-first. That means we start with the smallest screen and scale up, rather than squeezing a desktop layout onto a phone. We test across real devices — iPhones, Android phones, tablets — and optimise touch targets, font sizes, and image loading for each. Google also uses mobile-first indexing, so a properly responsive site directly impacts your search rankings.',
      },
      {
        q: 'Will I be able to update the website myself?',
        a: 'Yes. Growth and Enterprise sites include a CMS, so you can edit pages, blog posts and products without touching code. We walk you through it at handover.',
      },
      {
        q: 'How do you handle website hosting and domain setup?',
        a: 'Starter and Growth plans include a free domain, hosting and SSL certificate. For custom React/Next.js apps or sites that need more control, we help you choose the right host — Vercel, managed WordPress hosting or AWS — with the subscription in your name so you own the infrastructure. Either way, we handle DNS configuration, SSL certificates, and initial server setup as part of the project.',
      },
      {
        q: 'Can you migrate my site from another platform?',
        a: 'Yes. We regularly migrate sites from Wix, Squarespace, GoDaddy builders, and older HTML sites to WordPress or React. We preserve your existing content, set up 301 redirects so Google transfers your rankings, and re-optimise images and page speed in the process. Most migrations are completed within the normal project timeline without extra cost.',
      },
      {
        q: 'What happens if I need changes after the site is live?',
        a: 'Every plan includes post-launch support for bug fixes and minor adjustments — 1 month on Starter and 3 months on Growth. If you need ongoing changes — monthly content updates, new landing pages, feature additions — we offer maintenance retainers starting at ₹3,000/month. For one-off changes after the support period, we bill on an hourly basis with a clear estimate upfront.',
      },
    ],
  },
};

const digitalMarketing: ServiceData = {
  key: 'digital-marketing',
  path: '/services/digital-marketing',
  num: '02',
  name: 'Digital Marketing',
  chip: 'Digital Marketing',
  crumb: 'Digital Marketing',
  meta: {
    title: 'Digital Marketing Agency Delhi | WebAlchemy',
    description: 'Google Ads, Meta Ads, SEO & social media marketing. Data-driven campaigns that deliver real ROI for Delhi NCR businesses.',
  },
  schema: {
    name: 'Digital Marketing Services',
    description: 'Google Ads, Meta Ads, SEO & social media marketing. Data-driven campaigns for Delhi NCR businesses.',
    areaServed: AREAS,
  },
  h1: ['Digital marketing campaigns that ', 'grow', ' your business'],
  lede: 'Google Ads, Meta Ads, SEO and social media for Delhi NCR businesses. We manage targeting, creative, landing pages and conversion tracking, so you know what every rupee brings back.',
  glance: [
    { k: 'Ads management', v: 'from ₹10,000/mo' },
    { k: 'SEO retainer', v: 'from ₹15,000/mo' },
    { k: 'Reporting', v: 'Weekly' },
    { k: 'Ad accounts', v: 'Yours' },
  ],
  glanceCta: { label: 'Get a free marketing audit →', href: '/contact' },
  included: {
    heading: 'Marketing channels we manage',
    intro:
      'A website without traffic is a billboard in the desert. We run data-driven marketing campaigns that put your business in front of people who are actively searching for what you sell. From Google Ads and Meta Ads to organic SEO and Instagram content, we manage the full acquisition funnel — targeting, creative, landing pages, and conversion tracking. Every rupee of ad spend is tracked so you know exactly what you are getting back.',
    items: [
      {
        t: 'Google Ads (Search & Shopping)',
        d: 'We set up and manage Google Search campaigns that capture people at the moment they are looking for your product or service. Keyword research, negative keyword lists, ad copy testing, bid management, and conversion tracking — all handled. For e-commerce clients, we also run Google Shopping campaigns with optimised product feeds. Every campaign gets a dedicated landing page designed to convert the traffic we send to it.',
      },
      {
        t: 'Meta Ads (Facebook & Instagram)',
        d: 'Facebook and Instagram ads are ideal for reaching people before they start searching — building awareness, retargeting website visitors, and driving impulse purchases. We build custom audiences, lookalike audiences, and retargeting funnels. Our creative team produces the ad visuals and copy, and we manage the full Meta Business Suite including pixel setup, catalogue sync for e-commerce, and automated rules to pause underperforming ad sets.',
      },
      {
        t: 'SEO & local search',
        d: 'Organic search is the highest-ROI channel for most businesses in the long run. We handle technical SEO audits, on-page optimisation, content strategy, and link building. For local businesses, we optimise your Google Business Profile, build local citations, and target geo-specific keywords like "website developer in Delhi". Monthly rank tracking reports show you exactly which keywords are moving.',
        link: { label: 'Website developer in Delhi', href: '/website-developer-delhi' },
      },
      {
        t: 'Social media management',
        d: 'We manage organic social media presence for businesses that need consistent posting without hiring an in-house team. Content calendars, graphic design, caption writing, hashtag strategy, and community management across Instagram, Facebook, and LinkedIn. We plan and schedule 15-20 posts per month, track engagement analytics, and adjust the content mix based on what your audience responds to.',
        link: { label: 'See our content services', href: '/services/content-strategy' },
      },
    ],
  },
  audience: {
    heading: 'Built for businesses ready to grow',
    intro: 'We work with businesses that are ready to invest in growth — not just dip a toe — and focus on channels that deliver measurable returns, not vanity metrics.',
    rows: [
      { t: 'Local businesses', d: 'Google Business Profile, local SEO, Delhi NCR keywords', tone: 'blue' },
      { t: 'E-commerce stores', d: 'Google Shopping, catalogue ads, retargeting', tone: 'rust' },
      { t: 'Lead-driven services', d: 'Search campaigns with dedicated landing pages', tone: 'green' },
      { t: 'Brands building awareness', d: 'Instagram and Facebook content and ads', tone: 'violet' },
    ],
  },
  projects: {
    heading: 'Real campaigns, real scope',
    intro: 'No inflated ROAS claims — here is the work.',
    items: [
      CASE_VIABTECH_MARKETING,
      {
        ...CASE_BENTO,
        results: [
          'Reduced page load time significantly after audit',
          'Fixed CLS layout shift issues across mobile and desktop',
          'Image compression and lazy-load implementation',
        ],
      },
    ],
  },
  process: {
    heading: 'How a marketing engagement works',
    intro: 'From audit to optimisation — a proven four-step process.',
    steps: [
      { when: 'BEFORE SPEND', t: 'Audit & strategy', d: 'We analyse your current digital presence, competitors, and market opportunity. The output is a clear channel strategy with budget allocation and expected KPIs.' },
      { when: 'BEFORE LAUNCH', t: 'Campaign setup', d: 'Account structure, audience targeting, ad creative production, landing page builds, and conversion tracking. Everything is set up before a single rupee of ad spend goes live.' },
      { when: 'WEEKS 1–4', t: 'Launch & test', d: 'Campaigns go live with multiple ad variants. We monitor daily, pause underperformers, scale winners, and A/B test creatives and landing pages continuously.' },
      { when: 'ONGOING', t: 'Report & optimise', d: 'Weekly snapshots, monthly deep-dive reports, and quarterly strategy reviews. We adjust bids, refresh creatives, and shift budget based on actual performance data.' },
    ],
  },
  pricing: {
    heading: 'Monthly retainers. No lock-ins.',
    intro: 'Digital marketing is an ongoing optimisation process, not a one-time setup — so our marketing services are structured as monthly retainers.',
    plans: [
      { name: 'SEO Retainer', price: '₹15,000 – ₹40,000', unit: '/mo', features: ['Technical SEO', 'Content & link building', 'Rank tracking'], cta: 'Get a Quote' },
      { name: 'Paid Ads Management', price: '₹10,000 – ₹30,000', unit: '/mo', features: ['Google + Meta Ads', 'Creative & landing pages', 'Ad spend billed separately'], cta: 'Get a Quote' },
      { name: 'Full-Stack Marketing', price: '₹35,000 – ₹80,000', unit: '/mo', features: ['SEO + Ads + Social media', 'Monthly reporting', 'Monthly strategy calls'], cta: 'Get a Quote', featured: true },
    ],
    note: 'Ranges, not fixed packages — we quote after a free audit of your current marketing.',
  },
  faq: {
    heading: 'Questions about digital marketing',
    items: [
      {
        q: 'How much should I budget for digital marketing per month?',
        a: 'It depends on your industry and competition. For Google Ads or Meta Ads, we recommend a minimum ad spend of ₹20,000–₹50,000 per month to generate enough data for meaningful optimisation. Our management fee starts at ₹10,000/month on top of that. SEO retainers typically start at ₹15,000/month for local businesses targeting Delhi NCR keywords. We can work within tighter budgets, but smaller spends mean slower data collection and longer timelines to see traction.',
      },
      {
        q: 'How quickly will I see results from paid ads?',
        a: 'Paid campaigns on Google and Meta can start generating clicks and leads within the first week of going live. However, the first 2-4 weeks are a testing phase — we experiment with audiences, ad creatives, and bidding strategies to find what converts best for your specific business. Expect stabilised cost-per-lead numbers by month two. SEO is a longer play: meaningful organic traffic growth typically takes 3-6 months of consistent effort.',
      },
      {
        q: 'Do I keep ownership of my ad accounts and data?',
        a: 'Absolutely. Your Google Ads account, Meta Business Manager, Google Analytics, and Search Console are all set up under your business email. We operate as managers with delegated access. If you ever change agencies or want to run ads in-house, you retain full ownership of your campaigns, historical data, and audience lists. No lock-ins, no hostage situations.',
      },
      {
        q: 'Can you handle both the ads and the landing pages?',
        a: 'Yes — and we strongly recommend it. Running paid traffic to a poorly designed landing page is a waste of ad spend. We build conversion-optimised landing pages as part of our marketing packages, ensuring that the ad message, page design, and call-to-action all align. This usually improves conversion rates by 30-50% compared to sending traffic to a generic homepage.',
      },
      {
        q: 'What reporting do I get and how often?',
        a: 'We send weekly performance snapshots and a detailed monthly report covering impressions, clicks, conversions, cost-per-lead, and return on ad spend. You also get a live dashboard you can check anytime. Monthly strategy calls are included so we can review results together and adjust the plan. If something needs urgent attention — a campaign underperforming or a budget spike — we flag it immediately, not at the next scheduled report.',
      },
    ],
  },
};

const designBranding: ServiceData = {
  key: 'design-branding',
  path: '/services/design-branding',
  num: '03',
  name: 'Design & Branding',
  chip: 'Design & Branding',
  crumb: 'Design & Branding',
  meta: {
    title: 'UI/UX Design & Branding | WebAlchemy',
    description: 'Professional UI/UX design, logo creation, and brand identity systems. Make your business look as good as it performs.',
  },
  schema: {
    name: 'UI/UX Design & Branding',
    description: 'Professional UI/UX design, logo creation, and brand identity systems.',
  },
  h1: ['UI/UX design and branding that ', 'converts'],
  lede: 'Brand identities, website interfaces and marketing collateral that make a strong first impression — and hold up on every touchpoint, from a business card to a mobile screen.',
  glance: [
    { k: 'Logo & identity', v: 'from ₹10,000' },
    { k: 'Logo concepts', v: '3–4' },
    { k: 'Revision rounds', v: '2–3' },
    { k: 'Source files', v: 'Included' },
  ],
  glanceCta: { label: 'Start your brand project →', href: '/contact' },
  included: {
    heading: 'Design services we offer',
    intro:
      'People judge your business in under three seconds based on how it looks online. Our design team creates brand identities, website interfaces, and marketing collateral that make a strong first impression and hold up across every touchpoint — from a business card to a billboard to a mobile screen. We design with intent: every colour choice, layout decision, and typography pairing serves your conversion goals, not just aesthetics.',
    items: [
      {
        t: 'UI/UX design for websites & apps',
        d: 'We design interfaces that people actually enjoy using. Our process starts with user flow mapping and wireframes — figuring out the right structure before making it pretty. Then we move to high-fidelity Figma mockups with responsive variants for mobile, tablet, and desktop. Interactive prototypes let you click through the design before a developer writes a single line of code. We design for websites and mobile apps with equal depth.',
        link: { label: 'Website development', href: '/services/web-development' },
      },
      {
        t: 'Logo design & brand identity',
        d: 'Your logo is the visual cornerstone of your business. We design logos that work at every size — from a 16px favicon to a 10-foot trade show banner. Beyond the logo, we build complete brand identity systems: primary and secondary colour palettes, typography hierarchy, icon styles, photography direction, and a brand guidelines document your team can follow.',
      },
      {
        t: 'Marketing collateral & social graphics',
        d: 'Brochures, pitch decks, social media post templates, email headers, banner ads, product catalogues — all designed to match your brand system. We produce assets optimised for each platform\'s specifications so images are never stretched, cropped, or pixelated. For ongoing needs, we create reusable Canva or Figma templates your marketing team can edit independently.',
        link: { label: 'See our marketing services', href: '/services/digital-marketing' },
      },
      {
        t: 'Motion graphics & video editing',
        d: 'Static designs get scrolled past. We create animated social content, explainer motion graphics, logo animations (Lottie format for web), and short-form video edits for Instagram Reels and YouTube Shorts. Video editing packages include caption overlays, b-roll sourcing, and music selection cleared for commercial use.',
      },
    ],
  },
  audience: {
    heading: 'Built for businesses like yours',
    intro: 'Every website in our portfolio started with design — here is where that work has gone.',
    rows: [
      { t: 'Corporate', d: 'Brand systems, service sites, collateral', tone: 'violet', categories: ['Corporate'] },
      { t: 'Creative & portfolios', d: 'Studios, artists and personal brands', tone: 'rust', categories: ['Creative'] },
      { t: 'Dental & healthcare', d: 'Clinic identities and patient-friendly sites', tone: 'green', categories: ['Dental'] },
      { t: 'Schools & education', d: 'Institutional websites and galleries', tone: 'blue', categories: ['Educational'] },
    ],
  },
  projects: {
    heading: 'Visual systems for real businesses',
    items: [
      {
        title: 'Restaurant chain — complete design system',
        client: 'Bâton Rouge (Canadian restaurant chain)',
        industry: 'Restaurant & Hospitality',
        location: 'Canada (remote)',
        stack: ['Figma', 'WordPress', 'Elementor'],
        results: [
          'Homepage visual system with branded component library',
          'Menu page layouts with photography-first design approach',
          'Consistent brand experience across multilingual pages',
        ],
      },
      {
        title: 'Corporate gifting — modern React interface',
        client: 'Kamlesh Group',
        industry: 'Corporate Gifting',
        location: 'Delhi',
        stack: ['Figma', 'React', 'Tailwind CSS'],
        results: [
          'Product showcase UI with category-based browsing',
          'Mobile-first layout optimised for WhatsApp sharing',
          'Dark-themed premium visual identity',
        ],
      },
    ],
  },
  process: {
    heading: 'Our design process',
    intro: 'Four stages that ensure the final design matches your vision — no surprises.',
    steps: [
      { when: 'BEFORE DESIGN', t: 'Brand discovery & moodboard', d: 'We study your market, competitors, and target audience, then assemble a visual moodboard — colours, textures, reference designs — to align on direction.' },
      { when: '3–4 DIRECTIONS', t: 'Concept exploration', d: 'Distinct design directions presented side by side. You see the range of possibilities and pick the one that resonates, with feedback gathered in a single structured round.' },
      { when: '2–3 ROUNDS', t: 'Refinement & iteration', d: 'The chosen direction is refined: typography dialled in, colours tested in context, and responsive layouts finalised for all screen sizes.' },
      { when: 'ALL FORMATS', t: 'Asset delivery & handoff', d: 'Final files in SVG, PNG, PDF and Figma source, plus brand guidelines. If the design feeds into a build, we hand off directly to our engineering team.' },
    ],
  },
  pricing: {
    heading: 'Budget ranges by scope',
    intro: 'Design pricing varies widely depending on scope. A logo project is very different from a full product UI. Here are starting ranges to help you budget.',
    plans: [
      { name: 'Logo & Brand Identity', price: '₹10,000 – ₹35,000', features: ['Logo', 'Colour palette & typography', 'Brand guidelines PDF'], cta: 'Get a Quote' },
      { name: 'Website UI/UX Design', price: '₹15,000 – ₹60,000', features: ['Figma mockups', 'Responsive variants', 'Interactive prototype'], cta: 'Get a Quote', featured: true },
      { name: 'Monthly Design Retainer', price: '₹20,000 – ₹50,000', unit: '/mo', features: ['Social graphics', 'Marketing collateral & ad creatives', 'Ongoing edits'], cta: 'Get a Quote' },
    ],
    note: 'Ranges, not fixed packages — we confirm the price once we understand the scope.',
  },
  faq: {
    heading: 'Questions about design & branding',
    items: [
      {
        q: 'What is the difference between UI design and UX design?',
        a: 'UX (User Experience) design is about how your website or app works — the flow a user follows to complete a task, where buttons are placed, how information is structured. UI (User Interface) design is about how it looks — typography, colour palette, spacing, visual hierarchy. We handle both together because they are inseparable: a beautiful interface that confuses users is as bad as an ugly one that works. Our design process starts with UX wireframes to nail the flow, then applies UI polish on top.',
      },
      {
        q: 'How many logo concepts will I see before choosing one?',
        a: 'We present 3-4 distinct logo directions in the first round. Each concept explores a different visual approach — typographic, symbol-based, abstract mark, or combination. Once you pick a direction, we refine it through 2-3 rounds of revisions to perfect proportions, colour, and versatility across different sizes and backgrounds. You receive the final logo in all formats: vector (AI, SVG, EPS), raster (PNG with transparent background), and PDF for print.',
      },
      {
        q: 'Can you design for print as well as digital?',
        a: 'Yes. Beyond websites and apps, we design business cards, letterheads, brochures, product packaging, trade show banners, and vehicle wraps. Everything is produced with CMYK colour profiles for print accuracy and includes bleed marks and crop marks for commercial printers. If you need a complete brand identity system — digital and physical — we can deliver the full package.',
      },
      {
        q: 'Do you design social media templates I can reuse?',
        a: 'Absolutely. We create branded Canva or Figma templates for Instagram posts, stories, LinkedIn banners, and Facebook covers. These templates let your team produce on-brand social content without a designer for each post. The templates include editable text areas, image placeholders, and your brand colours locked in so nothing drifts off-brand. A typical template pack includes 10-15 layouts across formats.',
      },
      {
        q: 'What if I already have a logo but need a full brand system?',
        a: 'We work with existing logos regularly. A brand system goes beyond the logo — it includes your colour palette with hex and CMYK codes, typography scale, icon style, image treatment guidelines, voice and tone notes, and application examples (email signatures, social profiles, presentation slides). We compile everything into a brand guidelines PDF that your team and external vendors can follow. If your existing logo needs minor refinement to work better at small sizes or on dark backgrounds, we handle that too.',
      },
    ],
  },
};

const contentStrategy: ServiceData = {
  key: 'content-strategy',
  path: '/services/content-strategy',
  num: '04',
  name: 'Content Strategy',
  chip: 'Content Strategy',
  crumb: 'Content Strategy',
  meta: {
    title: 'Content Strategy & SEO Writing | WebAlchemy',
    description: 'SEO-optimised blog posts, website copy, and content strategies that rank on Google and convert readers into customers.',
  },
  schema: {
    name: 'Content Strategy & SEO Writing',
    description: 'SEO-optimised blog posts, website copy, and content strategies that rank on Google and convert readers into customers.',
  },
  h1: ['Content and SEO writing that ranks and ', 'sells'],
  lede: 'SEO-driven content strategies, long-form articles that earn organic traffic, and website copy that moves visitors toward a decision. No fluff, no keyword stuffing.',
  glance: [
    { k: 'Blog articles', v: 'from ₹3,000' },
    { k: 'Article length', v: '1,500–3,000 words' },
    { k: 'Turnaround', v: '5–7 days' },
    { k: 'Written by', v: 'Humans' },
  ],
  glanceCta: { label: 'Discuss your content needs →', href: '/contact' },
  included: {
    heading: 'Content services we provide',
    intro:
      'Ranking on Google requires more than a well-built website — it requires content that answers the questions your customers are asking. Three pillars of content work: strategy to figure out what to write, production to create it, and optimisation to make it rank. Content that is genuinely useful to readers and technically optimised for search engines.',
    items: [
      {
        t: 'Content strategy & planning',
        d: 'Before writing a single word, we research your market and competitors to build a content roadmap: keyword opportunity analysis, topic clustering around your core services, a publishing calendar with realistic timelines, and content briefs for each piece. Every article serves a business goal — ranking for a high-intent keyword, supporting a paid marketing campaign, or nurturing leads through your sales funnel.',
        link: { label: 'Paid marketing campaigns', href: '/services/digital-marketing' },
      },
      {
        t: 'SEO blog writing',
        d: 'Long-form articles (1,500-3,000 words) written to rank for specific keywords while being genuinely useful to readers. Each article is structured with a clear heading hierarchy, internal links to your service pages, and optimised meta titles and descriptions. We research each topic thoroughly — citing sources, including original analysis, and covering the subject more comprehensively than whatever currently ranks on page one. Typical turnaround is 5-7 business days per article.',
      },
      {
        t: 'Website copy & product descriptions',
        d: 'Homepage headlines, service page prose, about page narratives, product descriptions for e-commerce — website copy that sounds human and converts visitors into enquiries. We interview you or your team to capture your authentic voice, then write copy that reflects how you actually talk to clients. Every page is optimised for its target keyword without sounding robotic.',
        link: { label: 'See how we write for our Delhi pages', href: '/website-developer-delhi' },
      },
    ],
  },
  audience: {
    heading: 'Built for businesses like yours',
    rows: [
      { t: 'Professional & B2B services', d: 'Service pages, long-form articles, case studies', tone: 'blue' },
      { t: 'E-commerce stores', d: 'Product descriptions and catalogue copy', tone: 'rust' },
      { t: 'Local businesses', d: 'Website copy and Google Business Profile posts', tone: 'green' },
      { t: 'Hindi-speaking audiences', d: 'Blog posts, captions and product copy by native writers', tone: 'amber' },
    ],
  },
  projects: {
    heading: 'Writing and strategy for real clients',
    items: [
      {
        title: 'Ongoing content & social media retainer',
        client: 'Viabtech (Canon/Epson dealer, Tanzania)',
        industry: 'Office Equipment & Supplies',
        location: 'Tanzania (remote)',
        stack: ['Content Strategy', 'Social Media', 'Google Business Profile'],
        results: [
          'Monthly content calendar with industry-specific posting schedule',
          'Product-focused social media copy for Instagram and Facebook',
          'Google Business Profile posts and review response management',
        ],
      },
      {
        title: 'Product catalogue copy',
        client: 'Trudanaz Pharmaceuticals',
        industry: 'Pharmaceutical',
        location: 'Delhi NCR',
        stack: ['Website Copy', 'Product Descriptions', 'WordPress'],
        results: [
          'Product descriptions for full pharmaceutical catalogue',
          'Service page copy with technical accuracy review',
          'Meta titles and descriptions for all catalogue pages',
        ],
      },
    ],
  },
  process: {
    heading: 'How a content engagement works',
    intro: 'Four phases from keyword research to published content.',
    steps: [
      { when: 'BEFORE WRITING', t: 'Keyword & competitor research', d: 'We identify the topics your audience is searching for and analyse what your competitors have published, then rank the opportunities by business impact.' },
      { when: 'YOU APPROVE', t: 'Content brief & outline', d: 'Each article gets a brief: target and secondary keywords, heading structure, word count, internal links and key points. You approve the outline before writing starts.' },
      { when: '5–7 DAYS', t: 'Writing & editorial review', d: 'Our writers draft, then an editor reviews for accuracy, readability, SEO and brand voice. You see the draft for feedback before publication.' },
      { when: 'MONTHLY', t: 'Publish, promote & track', d: 'We format and publish in your CMS, add schema markup, and submit to Google Search Console. Monthly rank tracking shows which articles are gaining positions.' },
    ],
  },
  pricing: {
    heading: 'Per piece or monthly retainer',
    intro: 'Content is priced per piece for one-off projects or as a monthly retainer for ongoing publishing. Retainers include strategy, writing, editing, and CMS publishing.',
    plans: [
      { name: 'Blog Articles', price: '₹3,000 – ₹8,000', unit: '/article', features: ['1,500–3,000 words', 'Keyword-optimised', 'Published in your CMS'], cta: 'Get a Quote' },
      { name: 'Website Copy', price: '₹15,000 – ₹40,000', features: ['Full website copy package', '5–10 pages', 'SEO optimisation'], cta: 'Get a Quote' },
      { name: 'Content Retainer', price: '₹20,000 – ₹50,000', unit: '/mo', features: ['4–8 articles a month', 'Strategy & publishing', 'Rank tracking'], cta: 'Get a Quote', featured: true },
    ],
  },
  faq: {
    heading: 'Questions about content strategy',
    items: [
      {
        q: 'How do you decide which topics to write about?',
        a: 'We start with keyword research using tools like Ahrefs and Google Search Console to find what your target audience is actually searching for. We cross-reference search volume with competition difficulty and buyer intent to prioritise topics that can realistically rank and drive business outcomes. We also audit your existing content for gaps — pages that almost rank but need more depth, or high-traffic pages that fail to convert. The result is a prioritised content calendar, not a random list of blog ideas.',
      },
      {
        q: 'Is the content written by humans or AI?',
        a: 'All published content is written by our in-house writers. We use AI tools for research acceleration — generating outlines, identifying related subtopics, checking keyword density — but the actual writing is done by humans who understand nuance, brand voice, and the difference between informative content and sales-driven copy. Google can detect and penalise thin AI-generated content, so we invest the time to produce genuinely useful articles that deserve to rank.',
      },
      {
        q: 'Can you write content in Hindi or other Indian languages?',
        a: 'We primarily write in English, which covers most B2B and professional service content needs. For Hindi content, we work with a network of native Hindi writers who can produce blog posts, social captions, and product descriptions with natural language — not machine-translated text. If you need content in other regional languages, we can typically find a suitable writer within our network. Turnaround for non-English content is slightly longer due to the editorial review process.',
      },
      {
        q: 'How long does it take to see SEO results from content?',
        a: 'New content typically takes 4-8 weeks to get indexed and start appearing in search results. Ranking on page one for competitive keywords can take 3-6 months of consistent publishing and link building. However, well-targeted long-tail content often starts generating traffic much sooner. We track rankings weekly and provide monthly reports showing which articles are gaining traction, which need updates, and what new opportunities have emerged.',
      },
      {
        q: 'Do you handle content publishing and formatting?',
        a: 'Yes. We do not just hand over a Word document and walk away. We format content in your CMS (WordPress, Webflow, or whatever you use), add internal links, optimise meta titles and descriptions, insert images with alt text, and configure schema markup where relevant. If you need us to source stock images or create custom graphics for the article, that is included in our content packages. The article goes live looking polished and fully optimised.',
      },
    ],
  },
};

const appDevelopment: ServiceData = {
  key: 'app-development',
  path: '/services/app-development',
  num: '05',
  name: 'App Development',
  chip: 'App Development',
  crumb: 'App Development',
  meta: {
    title: 'Mobile App Development Delhi | WebAlchemy',
    description: 'iOS, Android & cross-platform app development. React Native and Flutter apps built for performance and user engagement.',
  },
  schema: {
    name: 'Mobile App Development',
    description: 'iOS, Android & cross-platform app development. React Native and Flutter apps built for performance and user engagement.',
    areaServed: AREAS,
  },
  h1: ['Mobile apps for iOS and Android, built to ', 'scale'],
  lede: 'Cross-platform React Native apps, or native Swift and Kotlin when performance is non-negotiable. UX, development, backend, store submission and maintenance — handled end to end.',
  glance: [
    { k: 'Starting at', v: '₹1,00,000' },
    { k: 'Platforms', v: 'iOS & Android' },
    { k: 'Builds', v: 'Every 2 weeks' },
    { k: 'Store submission', v: 'Included' },
  ],
  glanceCta: { label: 'Book a free scoping session →', href: '/contact' },
  included: {
    heading: 'App development capabilities',
    intro:
      'Not every business needs an app — but when you do, it needs to work flawlessly. We build mobile applications for iOS and Android using React Native for cross-platform efficiency and Swift or Kotlin when native performance is non-negotiable. From customer-facing apps to internal business tools, we handle the full cycle: UX design, frontend development, backend API, store submission, and post-launch maintenance. Our apps are built to scale — they handle growing user bases without rewriting the architecture.',
    items: [
      {
        t: 'Cross-platform apps (React Native)',
        d: 'One codebase, two platforms. React Native lets us build apps that run on both iOS and Android with near-native performance, while still accessing native device features — camera, GPS, push notifications, biometric authentication. For most business apps, this approach cuts development time by 30-40% compared to building two separate native apps.',
        link: { label: 'We use React for web apps too', href: '/services/web-development' },
      },
      {
        t: 'Native iOS & Android development',
        d: 'For apps that demand absolute performance — real-time video, complex animations, heavy computation, or deep OS integration — we build native. Swift and SwiftUI for iOS, Kotlin and Jetpack Compose for Android. Native development gives you the latest platform APIs on day one and the smoothest possible user experience.',
      },
      {
        t: 'Backend & API development',
        d: 'Every app needs a brain. We build RESTful APIs and real-time WebSocket servers using Node.js, Express, and MongoDB or PostgreSQL. Authentication (email, social login, OTP), file storage (AWS S3 or Cloudinary), payments (Razorpay, Stripe), and push notifications (Firebase Cloud Messaging) are standard integrations, on an architecture designed to scale horizontally.',
      },
      {
        t: 'App Store submission & maintenance',
        d: 'Getting an app approved is not just clicking "submit". We prepare all store assets, write ASO-optimised listings, handle the review process against Apple\'s and Google\'s guidelines, and manage version updates post-launch. Monthly maintenance keeps your app compatible with the latest iOS and Android versions.',
        link: { label: 'We design app interfaces too', href: '/services/design-branding' },
      },
    ],
  },
  audience: {
    heading: 'Built for businesses that need an app',
    intro: 'From quick MVPs to production-grade applications with complex backend systems.',
    rows: [
      { t: 'Customer-facing apps', d: 'Catalogues, booking systems, customer portals', tone: 'blue' },
      { t: 'Internal business tools', d: 'Dashboards and workflows for your team', tone: 'green' },
      { t: 'Startups & MVPs', d: '5–8 screens, auth and core features to validate an idea', tone: 'amber' },
      { t: 'Real-time products', d: 'Chat, maps, live updates, multi-role systems', tone: 'violet' },
    ],
  },
  projects: {
    heading: 'Interactive applications we have built',
    items: [
      {
        title: 'Corporate gifting platform — React SPA',
        client: 'Kamlesh Group',
        industry: 'Corporate Gifting',
        location: 'Delhi',
        stack: ['React', 'Vite', 'Tailwind CSS', 'WhatsApp API'],
        results: [
          'Interactive product showcase with filtering and search',
          'Bulk order enquiry flow integrated with WhatsApp',
          'Progressive web app capabilities for mobile users',
        ],
      },
      { ...CASE_BENTO, title: 'Performance optimisation — web application' },
    ],
  },
  process: {
    heading: 'How an app project works',
    intro: 'From idea validation to App Store approval.',
    steps: [
      { when: 'BEFORE CODE', t: 'Scope & UX design', d: 'We map out every screen, user flow, and API endpoint. Clickable Figma prototypes let you test the app experience before development begins.' },
      { when: '2-WEEK SPRINTS', t: 'Sprint-based development', d: 'At the end of each sprint you get a working build on your test device. Feedback is incorporated immediately — no waiting until the end.' },
      { when: 'REAL DEVICES', t: 'QA & beta testing', d: 'Multi-device testing on real iPhones, Android phones and tablets via TestFlight and internal testing tracks. Performance profiling and crash monitoring.' },
      { when: 'LAUNCH + 30 DAYS', t: 'Store submission & launch', d: 'We prepare all assets, submit to both stores, handle review feedback, and coordinate the launch — then monitor closely for the first 30 days.' },
    ],
  },
  pricing: {
    heading: 'Priced by complexity',
    intro: 'App costs depend heavily on complexity. A simple informational app is a fraction of a marketplace with real-time messaging. Here are starting ranges.',
    plans: [
      { name: 'MVP / Simple App', price: '₹1,00,000 – ₹2,00,000', features: ['5–8 screens', 'Basic auth & CRUD', 'Single platform'], cta: 'Get a Quote' },
      { name: 'Business App', price: '₹2,00,000 – ₹4,00,000', features: ['Cross-platform', 'Payments & notifications', 'Admin dashboard'], cta: 'Get a Quote', featured: true },
      { name: 'Complex Application', price: '₹4,00,000+', features: ['Real-time features & chat', 'Maps', 'Multi-role system'], cta: 'Get a Quote' },
    ],
    note: 'We provide a detailed quote after the scoping session, broken down by feature so you can prioritise based on budget.',
  },
  faq: {
    heading: 'Questions about app development',
    items: [
      {
        q: 'Should I build a native app or a cross-platform app?',
        a: 'It depends on your requirements and budget. Native apps (Swift for iOS, Kotlin for Android) offer the best performance and access to platform-specific features like ARKit or Android widgets. Cross-platform frameworks like React Native and Flutter let you build for both platforms from a single codebase, cutting development time by 30-40%. For most business apps — catalogues, booking systems, customer portals — cross-platform is the practical choice. We recommend native only when you need hardware-intensive features like real-time video processing or complex animations.',
      },
      {
        q: 'Do you handle App Store and Play Store submission?',
        a: "Yes, end to end. We create your developer accounts (Apple Developer Program and Google Play Console), prepare all required assets — app icons, screenshots, feature graphics, privacy policy — write the store listing copy, and submit for review. Apple's review process can take 1-3 days and occasionally requires adjustments. We handle rejections, respond to reviewer feedback, and resubmit until the app is approved. Post-launch, we manage version updates and release notes.",
      },
      {
        q: 'Can you build the backend and API for my app?',
        a: 'Absolutely. Most apps need a backend to handle user accounts, data storage, push notifications, and business logic. We build APIs with Node.js and Express, use MongoDB or PostgreSQL for databases, and deploy on AWS or Vercel depending on scale requirements. Authentication, file uploads, payment processing, and third-party integrations are all part of our full-stack capability. We also document the API so your team or future developers can extend it.',
      },
      {
        q: 'How much does it cost to develop a mobile app?',
        a: 'Simple apps with 5-8 screens and basic CRUD functionality start around ₹1,00,000 for a single platform. Cross-platform apps with moderate complexity — user authentication, dashboard, notifications, payment integration — typically range from ₹1,50,000 to ₹4,00,000. Complex apps with real-time features, chat, maps, or custom animations can go higher. We provide a detailed quote after the scoping session, broken down by feature so you can prioritise based on budget.',
      },
      {
        q: 'Do you offer app maintenance and updates after launch?',
        a: 'Yes. Mobile apps require ongoing attention — OS updates can break layouts, store policies change, and users expect regular feature improvements. We offer monthly maintenance packages that cover bug fixes, OS compatibility updates, minor feature enhancements, and store listing management. For larger feature additions, we scope and quote separately. The maintenance package ensures your app stays functional and does not accumulate technical debt.',
      },
    ],
  },
};

const prAdvertising: ServiceData = {
  key: 'pr-advertising',
  path: '/services/pr-advertising',
  num: '06',
  name: 'PR & Advertising',
  chip: 'PR & Advertising',
  crumb: 'PR & Advertising',
  meta: {
    title: 'PR & Advertising Services | WebAlchemy',
    description: 'Outdoor, TV, radio, metro, cinema, and transit advertising across Delhi NCR. Strategic media buying for maximum reach.',
  },
  schema: {
    name: 'PR & Advertising Services',
    description: 'Outdoor, TV, radio, metro, cinema, and transit advertising across Delhi NCR. Strategic media buying for maximum reach.',
    areaServed: AREAS,
  },
  h1: ['Outdoor, TV, radio and transit advertising across ', 'Delhi NCR'],
  lede: 'Billboards, metro takeovers, radio spots and cinema pre-roll. We plan the media, produce the creative, negotiate the rates and check your placements go live as contracted.',
  glance: [
    { k: 'Outdoor', v: 'from ₹20,000/mo' },
    { k: 'Radio campaigns', v: 'from ₹50,000' },
    { k: 'Creative', v: 'In-house' },
    { k: 'Coverage', v: 'Delhi NCR' },
  ],
  glanceCta: { label: 'Plan your campaign →', href: '/contact' },
  included: {
    heading: 'Advertising channels we manage',
    intro:
      'Digital marketing is powerful, but some messages need to be physically present in the real world. Billboards along busy highways, metro station takeovers, radio spots during morning commutes, cinema pre-roll ads before blockbusters — traditional media still commands attention in ways a social media post cannot. We handle the entire chain: media planning to identify where your audience is, creative production to make the ad memorable, rate negotiation with media owners, and campaign monitoring to ensure your placements go live as contracted.',
    items: [
      {
        t: 'Outdoor & billboard advertising',
        d: 'Hoardings, unipoles, gantries, bus shelters, and building wraps across Delhi NCR and other Indian cities. We source available inventory, negotiate rates with media owners, and produce print-ready artwork. Location selection is driven by traffic data and proximity to your target market. Campaigns can run from 2 weeks to annual contracts depending on your goals.',
      },
      {
        t: 'Television & OTT advertising',
        d: 'We plan and buy ad spots on local cable networks, regional satellite channels, and national broadcasters. For digital-first brands, we also manage OTT placements on Hotstar, SonyLIV, and YouTube pre-roll — from a 15-second brand sting to a full 30-second TVC, including scripting, production coordination with video partners, and post-production.',
        link: { label: 'We design the creative too', href: '/services/design-branding' },
      },
      {
        t: 'Transit media (metro, bus, auto, rail)',
        d: 'Delhi Metro reaches over 27 lakh riders daily. We place ads inside trains, on station walls, at escalator panels, and on digital screens at key interchange stations. Bus panels cover routes across Delhi, auto-back branding gives street-level visibility in specific neighbourhoods, and railway station advertising targets intercity commuters.',
        link: { label: 'See our Delhi presence', href: '/website-developer-delhi' },
      },
      {
        t: 'Cinema & radio advertising',
        d: 'Cinema pre-roll ads play on the biggest screen your audience will see all week — in PVR, INOX, and Cinepolis halls. Radio advertising on stations like Radio Mirchi, Red FM, and All India Radio remains cost-effective for local reach, especially during morning and evening drive times. We write scripts, produce jingles, and buy slots across your target geography.',
      },
    ],
  },
  audience: {
    heading: 'Built for brands that need reach',
    intro: 'From roadside hoardings to prime-time television — we plan, produce, and buy media across every traditional channel that reaches your audience.',
    rows: [
      { t: 'Clinics & coaching centres', d: 'Local cable TV and neighbourhood outdoor', tone: 'green' },
      { t: 'Real estate projects', d: 'Hoardings, radio and local cable spots', tone: 'amber' },
      { t: 'FMCG & education brands', d: 'Metro, bus and railway station media', tone: 'blue' },
      { t: 'Digital-first brands', d: 'OTT and YouTube pre-roll placements', tone: 'violet' },
    ],
  },
  projects: {
    heading: 'Campaigns that connect offline and online',
    items: [
      {
        title: 'Cross-channel marketing — offline and digital',
        client: 'Viabtech (Canon/Epson dealer, Tanzania)',
        industry: 'Office Equipment & Supplies',
        location: 'Tanzania (remote)',
        stack: ['Meta Ads', 'Instagram', 'Google Business Profile', 'Print'],
        results: [
          'Integrated digital and traditional marketing strategy',
          'Social media presence management alongside offline campaigns',
          'Google Business Profile optimisation for local visibility',
        ],
      },
    ],
  },
  process: {
    heading: 'How an advertising campaign works',
    intro: 'From media planning to campaign measurement.',
    steps: [
      { when: 'MEDIA PLAN', t: 'Media planning & budgeting', d: 'We analyse your audience, geography, and budget to recommend the right channel mix, with reach estimates, frequency targets, and cost breakdowns per channel.' },
      { when: 'IN-HOUSE', t: 'Creative production', d: 'Billboard artwork, radio scripts, TV storyboards, cinema slides. For TV shoots we coordinate specialist production partners while keeping creative control.' },
      { when: 'BOOKED', t: 'Media buying & negotiation', d: 'We negotiate rates with media owners, book placements, and manage printing, shipping and installation. For broadcast, we secure the best slots within your budget.' },
      { when: 'VERIFIED', t: 'Monitoring & reporting', d: 'Physical verification of outdoor placements, broadcast confirmation certificates, and digital tracking where measurable — then a post-campaign report with recommendations.' },
    ],
  },
  pricing: {
    heading: 'Typical ranges for Delhi NCR',
    intro: 'Traditional media pricing varies enormously by channel, geography, and duration. Here are typical ranges for Delhi NCR campaigns.',
    plans: [
      { name: 'Outdoor / Billboard', price: '₹20,000 – ₹2,00,000', unit: '/mo', features: ['Per location', 'Bus shelters to highway unipoles', 'Print-ready artwork'], cta: 'Get a Quote' },
      { name: 'Radio Campaign', price: '₹50,000 – ₹3,00,000', features: ['30-second spots', 'Major FM stations', '2–4 week runs'], cta: 'Get a Quote', featured: true },
      { name: 'TV / Cinema', price: '₹50,000 – ₹10,00,000+', features: ['Local cable to national prime-time', 'Multiplex pre-roll', 'Script & production coordination'], cta: 'Get a Quote' },
    ],
    note: 'Media costs depend on channel, location and duration — tell us your audience, geography and budget and we will recommend the right mix.',
  },
  faq: {
    heading: 'Questions about PR & advertising',
    items: [
      {
        q: 'How do you measure the effectiveness of outdoor advertising?',
        a: 'Outdoor media is harder to track than digital, but not impossible. We use a combination of methods: unique phone numbers or QR codes on each billboard for direct attribution, foot traffic data from location analytics providers, brand recall surveys before and after campaigns, and Google Trends data to measure branded search volume lifts. For transit media, we pair outdoor placements with geo-targeted digital retargeting so that people who pass your hoarding also see your ads online — creating a measurable digital trail for an offline touchpoint.',
      },
      {
        q: 'What is the minimum budget for a TV advertising campaign?',
        a: 'TV advertising ranges widely. Local cable network spots in Delhi NCR can start from ₹50,000 for a week-long run — effective for hyper-local businesses like clinics, coaching centres, or real estate projects. Regional satellite channels cost ₹1-3 lakhs for a meaningful campaign. National prime-time on Star, Zee, or Sony requires budgets of ₹10 lakhs and above to achieve sufficient frequency. We help you pick the right level based on your target geography and available budget.',
      },
      {
        q: 'Can I choose specific billboard or metro station locations?',
        a: 'Yes. We work with inventory networks across Delhi NCR and can show you available locations with photos, dimensions, traffic counts, and pricing. You can hand-pick individual hoardings, metro station panels, bus shelter units, or train wraps based on your target market geography. For example, if your audience is in South Delhi, we can concentrate placements along Mehrauli-Gurgaon Road, Saket metro, and Select Citywalk vicinity. We negotiate rates directly with media owners to get the best possible pricing.',
      },
      {
        q: 'Do you produce the ad creative or just handle media buying?',
        a: 'We handle both. Our creative team produces billboard designs, radio jingles, TV commercial scripts, and cinema pre-roll spots. For TV commercials that require video production, we work with production partners for filming and post-production while managing the creative direction. For simpler formats like hoarding designs and radio scripts, everything is done in-house. Our design team ensures brand consistency across all media formats.',
      },
      {
        q: 'How does outdoor advertising complement digital marketing?',
        a: 'The best campaigns use offline and online together. A billboard creates awareness and brand recognition — when that same person later sees your Google or Instagram ad, they are far more likely to click because the brand is already familiar. We set up geo-fencing campaigns that serve digital ads to people who have been near your outdoor placements, connecting the offline exposure to measurable online actions. This integrated approach typically improves digital ad click-through rates by 20-30%.',
      },
    ],
  },
};

const wordpressDevelopment: ServiceData = {
  key: 'wordpress-development',
  path: '/wordpress-development',
  num: '07',
  name: 'WordPress Development',
  chip: 'WordPress Development',
  crumb: 'WordPress Development',
  meta: {
    title: 'WordPress Developer Delhi NCR | WebAlchemy - Expert WordPress Development',
    description: 'Expert WordPress developer in Delhi NCR. Custom themes, plugins, WooCommerce, speed optimization. 100+ WordPress sites delivered. Free consultation!',
  },
  schema: {
    name: 'WordPress Development Services',
    description: 'Professional WordPress development services including custom themes, plugins, WooCommerce, and website maintenance',
    areaServed: AREAS,
  },
  h1: ['WordPress developer in ', 'Delhi NCR'],
  lede: 'Looking for an expert WordPress developer in Delhi? WebAlchemy specialises in custom WordPress themes, plugins, WooCommerce, and speed optimisation for businesses in Delhi, Gurgaon, and Noida.',
  glance: [
    { k: 'Starting at', v: '₹19,999' },
    { k: 'WooCommerce stores', v: 'from ₹24,999' },
    { k: 'Support', v: '3–6 months' },
    { k: 'Areas', v: 'Delhi · Gurgaon · Noida' },
  ],
  glanceCta: { label: 'Build your estimate →', href: '/#estimate' },
  included: {
    heading: 'Our WordPress development services',
    intro: 'Comprehensive WordPress solutions for Delhi NCR businesses — from a new custom theme to keeping an existing site fast, secure and up to date.',
    items: [
      { t: 'Custom theme development', d: 'Unique, branded themes built from scratch to match your vision.' },
      { t: 'Plugin development', d: 'Custom plugins to add any functionality you need.' },
      { t: 'WooCommerce development', d: 'Full-featured online stores with WordPress.', link: { label: 'E-commerce development', href: '/ecommerce-website-development' } },
      { t: 'Speed optimisation', d: 'Make your WordPress site lightning fast.' },
      { t: 'Security hardening', d: 'Protect your site from hackers and malware.' },
      { t: 'Maintenance & support', d: 'Ongoing updates, backups, and support.' },
    ],
  },
  audience: {
    heading: 'Built for businesses like yours',
    rows: [
      { t: 'Business websites', d: '5–10 pages on a premium theme with contact forms', tone: 'blue' },
      { t: 'Online stores', d: 'WooCommerce with payments, shipping and orders', tone: 'rust' },
      { t: 'Custom builds', d: 'Custom themes and plugins for advanced features', tone: 'violet' },
      { t: 'Existing WordPress sites', d: 'Speed, security, maintenance and support', tone: 'green' },
    ],
  },
  projects: {
    heading: 'WordPress builds for real businesses',
    items: [CASE_BATON_ROUGE, CASE_TRUDANAZ],
  },
  process: {
    heading: 'How a WordPress project works',
    intro: 'Four phases from first conversation to live website.',
    steps: webSteps('3–6 months of support depending on your plan'),
  },
  pricing: {
    heading: 'WordPress development pricing',
    intro: 'Affordable WordPress solutions for every budget.',
    plans: [
      { name: 'Business Website', price: '₹19,999', features: ['5–10 pages', 'Premium theme', 'Contact forms', 'Basic SEO', '3 months support'], cta: 'Get Started' },
      { name: 'WooCommerce Store', price: '₹24,999', features: ['Up to 100 products', 'Payment gateway', 'Shipping setup', 'Order management', '6 months support'], cta: 'Get Started' },
      { name: 'Custom Development', price: '₹49,999', features: ['Custom theme', 'Custom plugins', 'Advanced features', 'Performance optimisation', '6 months support'], cta: 'Get Started', featured: true, badge: 'Most popular' },
    ],
  },
  faq: {
    heading: 'Questions about WordPress development',
    items: [
      {
        q: 'What WordPress development services do you offer?',
        a: 'Custom theme development, custom plugin development, WooCommerce stores, speed optimisation, security hardening, and ongoing maintenance and support — for new WordPress sites and existing ones.',
      },
      {
        q: 'How much does a WordPress website cost?',
        a: 'A business website (5-10 pages, premium theme, contact forms, basic SEO, 3 months support) is ₹19,999. A WooCommerce store with up to 100 products, payment gateway, shipping setup and 6 months support is ₹24,999. Custom development with a custom theme, custom plugins and performance optimisation is ₹49,999.',
      },
      {
        q: 'Can you build an online store on WordPress?',
        a: 'Yes. We build full-featured WooCommerce stores with payment gateways, shipping setup and order management, so you can sell from the same WordPress site you already manage.',
      },
      {
        q: 'Can you migrate my site to WordPress?',
        a: 'Yes. We regularly migrate sites from Wix, Squarespace, GoDaddy builders, and older HTML sites to WordPress. We preserve your existing content, set up 301 redirects so Google transfers your rankings, and re-optimise images and page speed in the process.',
      },
      {
        q: 'Do you offer WordPress maintenance and support?',
        a: 'Yes. Every plan includes 3 to 6 months of support, and we offer ongoing maintenance after that — updates, backups, security hardening and speed optimisation.',
      },
    ],
  },
};

const ecommerceDevelopment: ServiceData = {
  key: 'ecommerce-website-development',
  path: '/ecommerce-website-development',
  num: '08',
  name: 'E-commerce Development',
  chip: 'E-commerce Development',
  crumb: 'E-commerce Website Development',
  meta: {
    title: 'E-commerce Website Development Delhi NCR | WebAlchemy',
    description: 'Expert e-commerce website development in Delhi NCR. Shopify, WooCommerce, custom online stores. Boost your online sales with our proven solutions. Free quote!',
  },
  schema: {
    name: 'E-commerce Website Development',
    description: 'Professional e-commerce website development services including Shopify, WooCommerce, and custom online store solutions',
    areaServed: AREAS,
  },
  h1: ['E-commerce website development in ', 'Delhi NCR'],
  lede: 'We create high-converting Shopify, WooCommerce, and custom e-commerce websites for businesses in Delhi, Gurgaon, and Noida.',
  glance: [
    { k: 'Starting at', v: '₹24,999' },
    { k: 'Platforms', v: 'Shopify · WooCommerce · Custom' },
    { k: 'Payments', v: 'Razorpay · PayU · Stripe' },
    { k: 'Shipping', v: 'Shiprocket · Delhivery' },
  ],
  glanceCta: { label: 'Build your estimate →', href: '/#estimate' },
  included: {
    heading: 'Everything your online store needs',
    intro: 'Complete e-commerce solutions with all essential features — built for the Indian market, from payment gateways to shipping partners.',
    items: [
      { t: 'Product management', d: 'Easy-to-use admin panel for managing products, inventory, and categories.' },
      { t: 'Payment integration', d: 'Razorpay, PayU, Stripe, PayPal and all major payment gateways.' },
      { t: 'Shipping integration', d: 'Shiprocket, Delhivery, and custom shipping solutions.' },
      { t: 'Analytics dashboard', d: 'Track sales, customers, and conversions in real-time.' },
      { t: 'Secure checkout', d: 'SSL, PCI compliance, and fraud protection.' },
      { t: 'Fast performance', d: 'Optimised for speed and mobile conversions.' },
    ],
  },
  details: {
    eyebrow: 'PLATFORMS',
    heading: 'E-commerce platforms we work with',
    intro: 'Choose the right platform for your business. We work across all major e-commerce solutions.',
    items: [
      { t: 'Shopify', d: 'Perfect for quick launch and easy management.', bullets: ['Hosted solution', 'App ecosystem', 'Payment ready'] },
      { t: 'WooCommerce', d: 'Flexible WordPress-based solution.', bullets: ['Full customisation', 'Cost effective', 'SEO friendly'], link: { label: 'WordPress development', href: '/wordpress-development' } },
      { t: 'Custom store', d: 'Built from scratch for unique needs.', bullets: ['100% tailored', 'Scalable', 'Full ownership'] },
    ],
  },
  audience: {
    heading: 'Built for businesses selling online',
    rows: [
      { t: 'E-commerce', d: 'Catalogues, payments, shipping', tone: 'rust', categories: ['E-commerce'] },
      { t: 'Quick-launch stores', d: 'Shopify — hosted and payment-ready', tone: 'green' },
      { t: 'WordPress businesses', d: 'WooCommerce on a site you already manage', tone: 'blue' },
      { t: 'Unique requirements', d: 'Custom stores built from scratch, fully yours', tone: 'violet' },
    ],
  },
  process: {
    heading: 'How an e-commerce project works',
    intro: 'Four phases from first conversation to a live store.',
    steps: webSteps('3–6 months of support depending on your plan', ' Product uploads, payment and shipping integrations are set up and tested here.'),
  },
  pricing: {
    heading: 'E-commerce development pricing',
    intro: 'Transparent pricing for your online store project.',
    plans: [
      { name: 'Starter Store', price: '₹24,999', features: ['Up to 50 products', 'Payment integration', 'Mobile responsive', 'Basic SEO', '3 months support'], cta: 'Get Started' },
      { name: 'Growth Store', price: '₹49,999', features: ['Up to 500 products', 'Multi-payment gateways', 'Shipping integration', 'Advanced SEO', '6 months support'], cta: 'Get Started', featured: true, badge: 'Most popular' },
      { name: 'Enterprise', price: 'Custom', features: ['Unlimited products', 'Custom features', 'Multiple integrations', 'Dedicated support', 'Performance optimisation'], cta: 'Contact Sales' },
    ],
  },
  faq: {
    heading: 'Questions about e-commerce development',
    items: [
      {
        q: 'Which e-commerce platform should I choose?',
        a: 'Shopify is perfect for a quick launch and easy management — it is hosted, payment-ready and has a large app ecosystem. WooCommerce is a flexible, cost-effective WordPress-based option that is SEO friendly and fully customisable. A custom store is built from scratch for unique needs, scalable and fully owned by you. We help you choose during the free consultation.',
      },
      {
        q: 'Which payment gateways can you integrate?',
        a: 'Razorpay, PayU, Stripe, PayPal and all major payment gateways. Our Growth Store plan supports multiple payment gateways on one store.',
      },
      {
        q: 'Can you set up shipping for my store?',
        a: 'Yes. We integrate Shiprocket, Delhivery, and custom shipping solutions so orders flow from checkout to delivery without manual work.',
      },
      {
        q: 'How much does an e-commerce website cost?',
        a: 'Our Starter Store (up to 50 products, payment integration, basic SEO, 3 months support) is ₹24,999. The Growth Store (up to 500 products, multiple payment gateways, shipping integration, advanced SEO, 6 months support) is ₹49,999. Enterprise stores with unlimited products and custom features are quoted on scope.',
      },
      {
        q: 'Is the checkout secure?',
        a: 'Yes. Every store ships with SSL, PCI-compliant payment handling through the gateway, and fraud protection, and is optimised for speed and mobile conversions.',
      },
    ],
  },
};

export const SERVICES: Record<string, ServiceData> = {
  'web-development': webDevelopment,
  'digital-marketing': digitalMarketing,
  'design-branding': designBranding,
  'content-strategy': contentStrategy,
  'app-development': appDevelopment,
  'pr-advertising': prAdvertising,
  'wordpress-development': wordpressDevelopment,
  'ecommerce-website-development': ecommerceDevelopment,
};

/** Display order for listings and "Other services" chips. */
export const SERVICE_ORDER = [
  'web-development',
  'digital-marketing',
  'design-branding',
  'content-strategy',
  'app-development',
  'pr-advertising',
  'wordpress-development',
  'ecommerce-website-development',
] as const;

/** The six core services (the /services index list). */
export const CORE_SERVICES = SERVICE_ORDER.slice(0, 6).map((k) => SERVICES[k]);

export function getService(key: string): ServiceData {
  const s = SERVICES[key];
  if (!s) throw new Error(`Unknown service: ${key}`);
  return s;
}
