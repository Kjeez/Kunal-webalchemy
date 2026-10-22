import type { Project } from './projectsData';
import type { Tone } from '@/lib/site';

/* Content for every service page rendered by components/service/ServicePage
   (Claude Design "Service" mock). The four services in SERVICE_ORDER are
   Kunal's, in the first person and without price lists. The other entries
   are the old agency pages: their routes redirect away, and they are kept
   only so their page files still compile. */

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
  /** "Working with me" block shown instead of a price list. */
  quote?: { heading: string; intro: string; points: string[] };
  /** Legacy agency price lists (only on the redirected services). */
  pricing?: { heading: string; intro?: string; plans: ServicePlan[]; note?: string; compare?: boolean };
  faq: { heading: string; items: ServiceFaq[] };
}

// ---------------------------------------------------------------------------
// Shared bits
// ---------------------------------------------------------------------------

const AREAS = ['Delhi', 'Gurgaon', 'Noida', 'Delhi NCR'];

/** Web-build process shared by the WordPress and e-commerce pages. */
const webSteps = (support: string, buildExtra = '') => [
  {
    when: 'BEFORE DESIGN',
    t: 'Scope & wireframe',
    d: 'I map out every page, feature and integration before anything is designed. You approve the layout and sitemap while changes are still cheap.',
  },
  {
    when: 'FIGMA MOCKUPS',
    t: 'Visual design',
    d: 'Figma mockups for desktop and mobile, so you see exactly what the finished site will look like and can ask for changes before I build it.',
  },
  {
    when: 'STAGING URL',
    t: 'Build & iterate',
    d: `I build on a staging link you can check anytime, with regular updates on WhatsApp.${buildExtra} Content entry, testing and speed optimisation happen here.`,
  },
  {
    when: 'GO LIVE',
    t: 'Launch & support',
    d: `Domain, SSL, analytics and Google Search Console set up. Then ${support} while you settle in.`,
  },
];

const PORTFOLIO_ROWS: ServiceAudienceRow[] = [
  { t: 'Schools & education', d: 'Admissions, notices, results, galleries', tone: 'blue', categories: ['Educational'] },
  { t: 'Dental & healthcare', d: 'Appointments, treatments, doctor profiles', tone: 'green', categories: ['Dental', 'Healthcare'] },
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
  name: 'Web Design & Development',
  chip: 'Web Design & Development',
  crumb: 'Web Design & Development',
  meta: {
    title: 'Web Design & Development | Kunal — Website Developer & UI/UX Designer',
    description: 'I design websites in Figma and build them fast and mobile-first on WordPress, Shopify, Webflow, Wix or Next.js. 200+ projects, 5+ years. Talk to me directly.',
  },
  schema: {
    name: 'Web Design & Development',
    description: 'Custom websites designed in Figma and built mobile-first on WordPress, Shopify, Webflow, Wix or Next.js by Kunal, a website developer and UI/UX designer in New Delhi.',
  },
  h1: ['Websites that turn visitors into ', 'customers'],
  lede: 'I design every page in Figma first, then build it fast and mobile-first on the platform that fits your business. One person from first sketch to launch day, and a direct line to me the whole way.',
  glance: [
    { k: 'Starter sites live in', v: '~7 days' },
    { k: 'Design', v: 'Figma first' },
    { k: 'PageSpeed target', v: '90+ mobile' },
    { k: 'You talk to', v: 'Me, directly' },
  ],
  glanceCta: { label: 'Tell me about your project →', href: '/contact' },
  included: {
    heading: 'Everything a website needs to sell',
    intro:
      'A good website does more than look nice: it loads fast, shows up on Google and makes it obvious what a visitor should do next. I handle the whole thing myself, from layout and visual design to the build, content entry, speed tuning and launch, so nothing gets lost in a hand-off.',
    items: [
      { t: 'Figma design first', d: 'You see and approve every key page as a clickable preview before I build it.' },
      { t: 'Mobile-first build', d: 'Designed for the phone first, then scaled up to tablet and desktop.' },
      { t: 'Fast performance', d: 'I build for a 90+ Google PageSpeed score on mobile.' },
      { t: 'SEO-ready structure', d: 'Clean headings, metadata, sitemaps and speed so Google can find you.' },
      { t: 'Clear calls-to-action', d: 'Every page leads visitors to call, WhatsApp or enquire.' },
      { t: 'Analytics & handover', d: 'Google Analytics and Search Console set up, plus a walkthrough so you can edit content.' },
    ],
  },
  details: {
    eyebrow: 'WHAT I BUILD',
    heading: 'Four kinds of web projects',
    intro: 'Most projects fall into one of these. Not sure which is yours? Message me and I will tell you honestly.',
    items: [
      {
        t: 'Business websites',
        d: 'A credible, fast site for your company: home, about, services, work and contact, with a blog if you want to grow on Google. Usually built on WordPress with Elementor, or on Webflow, Wix or Framer if that suits you better, with an admin panel you can actually use.',
        link: { label: 'WordPress & CMS sites', href: '/wordpress-development' },
      },
      {
        t: 'Landing pages',
        d: 'One focused page for an ad campaign, a launch or a single offer, designed around one action. These are the quickest projects and the easiest way to start working together.',
      },
      {
        t: 'E-commerce stores',
        d: 'Online stores on Shopify or WooCommerce with payments, shipping and product setup handled, designed so buying feels easy on a phone.',
        link: { label: 'Shopify & WooCommerce stores', href: '/ecommerce-website-development' },
      },
      {
        t: 'Redesigns & custom builds',
        d: 'An outdated or slow site rebuilt with a fresh design, keeping your Google rankings through proper redirects. When a page builder is not enough, I build custom front-ends in React and Next.js.',
        link: { label: 'UI/UX & brand design', href: '/services/design-branding' },
      },
    ],
  },
  audience: {
    heading: 'Built for businesses like yours',
    intro:
      'Schools, clinics, resorts, stores and companies who need a website that brings in enquiries, not a digital brochure. Here is where my past projects sit.',
    rows: PORTFOLIO_ROWS,
  },
  projects: {
    heading: 'Real builds for real businesses',
    intro: 'A few projects I designed and built at my studio, WebAlchemy.',
    items: [CASE_BATON_ROUGE, CASE_TRUDANAZ, CASE_KAMLESH],
  },
  process: {
    heading: 'Live in as little as 7 days',
    steps: [
      {
        when: 'DAY 1',
        t: 'Free discovery call',
        d: '30 minutes on your goals and customers. I map out the pages and features, and you leave with a clear plan and a fixed quote.',
      },
      {
        when: 'DAYS 2–6',
        t: 'Design in Figma, build in code',
        d: 'I design for desktop and mobile, share a clickable preview, then build on a staging link you can check anytime. Unlimited revisions before launch.',
      },
      {
        when: 'DAY 7 · STARTER SITES',
        t: 'Launch & grow',
        d: 'Live on your domain with SSL, analytics, Search Console and SEO basics, and I stay on hand for fixes and updates after go-live.',
      },
    ],
  },
  quote: {
    heading: 'A fixed quote after one call',
    intro: 'Every project is different, so I quote on scope rather than sell packages. You get one clear number before any work starts.',
    points: ['Fixed price, agreed upfront', 'Usually 50% to start, 50% at launch', 'Milestones for larger builds', 'No account managers, no surprise invoices'],
  },
  faq: {
    heading: 'Questions about web design & development',
    items: [
      {
        q: 'How long does it take to build a website?',
        a: 'A focused landing page or starter site can go live in about 7 days. A full 5–10 page website usually takes 3–5 weeks, and larger stores or custom builds get a fixed timeline on our first call.',
      },
      {
        q: 'Which platform will you build my site on?',
        a: 'Whatever fits your business: WordPress (with Elementor or WooCommerce), Shopify, Webflow, Wix, Framer, Squarespace, or a custom React / Next.js build when you need something bespoke. I will recommend one on our call and explain why.',
      },
      {
        q: 'Do you design the site before building it?',
        a: 'Yes. I design every key page in Figma first, with visuals prepared in Photoshop or Illustrator where needed, share a clickable preview, and only start building once you are happy with it.',
      },
      {
        q: 'Will my website work well on mobile phones?',
        a: 'Every site I build is designed mobile-first: I start with the smallest screen and scale up, test on real phones, and tune font sizes, tap targets and image loading. Google indexes the mobile version first, so this directly helps your rankings too.',
      },
      {
        q: 'Will I be able to update the website myself?',
        a: 'Yes. CMS sites let you edit pages, blog posts and products without touching code, and I walk you through everything at handover.',
      },
      {
        q: 'Can you move my site from another platform?',
        a: 'Yes. I migrate sites from Wix, Squarespace, old HTML builds and other platforms, keep your content, and set up 301 redirects so Google carries your rankings across.',
      },
      {
        q: 'What happens if I need changes after launch?',
        a: 'Fixes and small adjustments right after launch are part of the project. For ongoing work, such as new pages or regular updates, we agree a simple arrangement that suits how often you need me.',
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
  num: '02',
  name: 'UI/UX & Brand Design',
  chip: 'UI/UX & Brand Design',
  crumb: 'UI/UX & Brand Design',
  meta: {
    title: 'UI/UX & Brand Design | Kunal — Website Developer & UI/UX Designer',
    description: 'User flows, wireframes and Figma prototypes, plus logos, brand kits and visuals in Photoshop & Illustrator. Design by Kunal, a UI/UX designer who also builds what he designs.',
  },
  schema: {
    name: 'UI/UX & Brand Design',
    description: 'UI/UX design in Figma (user flows, wireframes, prototypes, design systems) and brand design (logos, brand kits, visuals in Photoshop and Illustrator) by Kunal.',
  },
  h1: ['Interfaces and brands people ', 'remember'],
  lede: 'I map how people use your site, design it in Figma, and give your brand a look that holds up everywhere, from a favicon to a hoarding. And because I also build websites, my designs are made to actually ship.',
  glance: [
    { k: 'Design tool', v: 'Figma' },
    { k: 'Visuals', v: 'Photoshop & Illustrator' },
    { k: 'Prototypes', v: 'Clickable' },
    { k: 'Source files', v: 'Yours to keep' },
  ],
  glanceCta: { label: 'Start a design project →', href: '/contact' },
  included: {
    heading: 'Design work I do',
    intro:
      'People judge a business in a few seconds by how it looks. I design with intent: every layout, colour and type choice should make it easier for your visitor to trust you and take the next step, not just look pretty.',
    items: [
      {
        t: 'UI/UX for websites & apps',
        d: 'I start with user flows and wireframes to get the structure right, then move to high-fidelity Figma screens for mobile, tablet and desktop. Clickable prototypes let you try the design before a line of code is written.',
        link: { label: 'Web design & development', href: '/services/web-development' },
      },
      {
        t: 'Design systems',
        d: 'Reusable components, colour and type scales and spacing rules in Figma, so every new page stays consistent and building it is faster.',
      },
      {
        t: 'Logo & brand identity',
        d: 'Logos that work at every size, plus colour palettes, typography and a short brand guide your team and printers can follow.',
      },
      {
        t: 'Visuals & marketing graphics',
        d: 'Banners, social posts, brochures, catalogues and ad creatives, retouched and composed in Photoshop and Illustrator. I can also set up editable Canva or Figma templates so your team can make on-brand posts themselves.',
      },
    ],
  },
  audience: {
    heading: 'Built for businesses like yours',
    intro: 'Every website in my portfolio started as a design. Here is where that work has gone.',
    rows: [
      { t: 'Corporate', d: 'Brand systems, service sites, collateral', tone: 'violet', categories: ['Corporate'] },
      { t: 'Creative & portfolios', d: 'Studios, artists and personal brands', tone: 'rust', categories: ['Creative'] },
      { t: 'Dental & healthcare', d: 'Clinic identities and patient-friendly sites', tone: 'green', categories: ['Dental', 'Healthcare'] },
      { t: 'Schools & education', d: 'Institutional websites and galleries', tone: 'blue', categories: ['Educational'] },
    ],
  },
  projects: {
    heading: 'Visual systems for real businesses',
    intro: 'Design projects I led at my studio, WebAlchemy.',
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
    heading: 'How I design',
    intro: 'Four stages, so the final design matches what you had in mind, with no surprises.',
    steps: [
      { when: 'BEFORE DESIGN', t: 'Discovery & moodboard', d: 'I look at your market, competitors and customers, then put together a moodboard of colours, type and references so we agree on a direction.' },
      { when: 'WIREFRAMES', t: 'Structure & flows', d: 'Low-detail layouts and user flows that get the content and journey right before any visual polish.' },
      { when: 'FIGMA', t: 'Visual design & prototype', d: 'High-fidelity screens for every size, refined with your feedback and shared as a clickable prototype.' },
      { when: 'HANDOFF', t: 'Files & build', d: 'Final files in Figma, SVG, PNG and PDF with a short guide. If you want the site built too, I build it myself, so nothing gets lost.' },
    ],
  },
  quote: {
    heading: 'Quoted on scope',
    intro: 'A logo is a very different job from a full product UI, so I quote each project after a short call. You get one fixed price before I start.',
    points: ['Fixed price, agreed upfront', 'Revisions included until you are happy', 'All source files handed over', 'Direct contact with me throughout'],
  },
  faq: {
    heading: 'Questions about UI/UX & brand design',
    items: [
      {
        q: 'What is the difference between UI and UX design?',
        a: 'UX is how something works: the flow a visitor follows, where buttons sit, how information is structured. UI is how it looks: type, colour, spacing and hierarchy. I do both together, starting with wireframes to get the flow right and then adding the visual layer.',
      },
      {
        q: 'Which tools do you design in?',
        a: 'Figma for interfaces, prototypes and design systems; Adobe Photoshop and Illustrator for photo work, illustrations, logos and print; and Canva or Figma templates when your team needs to make graphics themselves. I also know Adobe XD if your files live there.',
      },
      {
        q: 'Can you design for print as well as digital?',
        a: 'Yes: business cards, brochures, catalogues, banners and packaging, delivered as print-ready files with the right colour profiles and bleed.',
      },
      {
        q: 'Can you work with my existing logo?',
        a: 'Of course. I can build a full brand system around it (colours, typography, icon style, examples) and tidy the logo up if it struggles at small sizes or on dark backgrounds.',
      },
      {
        q: 'Do I get the source files?',
        a: 'Yes. You get the Figma files and final exports in every format you need, and they are yours to keep.',
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
  num: '03',
  name: 'WordPress & CMS Websites',
  chip: 'WordPress & CMS',
  crumb: 'WordPress & CMS Websites',
  meta: {
    title: 'WordPress Developer | Kunal — Website Developer & UI/UX Designer',
    description: 'Custom WordPress websites with Elementor, WooCommerce and custom themes, plus Webflow, Wix, Framer and Squarespace builds. Sites you can update yourself, by Kunal.',
  },
  schema: {
    name: 'WordPress & CMS Website Development',
    description: 'WordPress development (Elementor, WooCommerce, custom themes, speed and security) and CMS builds on Webflow, Wix, Framer and Squarespace by Kunal.',
  },
  h1: ['WordPress sites you can ', 'run yourself'],
  lede: 'WordPress powers a huge share of the web for a reason: you can edit everything without a developer. I design your site in Figma, build it on WordPress with Elementor or a custom theme, and hand it over with a walkthrough. Prefer Webflow, Wix, Framer or Squarespace? I build on those too.',
  glance: [
    { k: 'Builder', v: 'Elementor · custom themes' },
    { k: 'Stores', v: 'WooCommerce' },
    { k: 'Also build on', v: 'Webflow · Wix · Framer' },
    { k: 'Handover', v: 'Walkthrough included' },
  ],
  glanceCta: { label: 'Tell me about your site →', href: '/contact' },
  included: {
    heading: 'WordPress work I do',
    intro: 'From a brand-new site to keeping an existing one fast, secure and up to date.',
    items: [
      { t: 'Custom WordPress sites', d: 'Designed in Figma, built with Elementor or a custom theme, matched to your brand.' },
      { t: 'Custom theme & plugin work', d: 'Bespoke templates and small plugins when a feature needs more than a page builder.' },
      { t: 'WooCommerce stores', d: 'Online stores on the WordPress site you already manage.', link: { label: 'E-commerce stores', href: '/ecommerce-website-development' } },
      { t: 'Speed optimisation', d: 'Lighter pages, optimised images and caching, aiming for 90+ PageSpeed on mobile.' },
      { t: 'Security & updates', d: 'Hardening, backups and safe updates so the site stays healthy.' },
      { t: 'Fixes & redesigns', d: 'Broken layouts, plugin conflicts or a tired design, sorted without losing your rankings.' },
    ],
  },
  details: {
    eyebrow: 'OTHER CMS PLATFORMS',
    heading: 'Not set on WordPress?',
    intro: 'I pick the platform that fits how you work, not the one I happen to like.',
    items: [
      { t: 'Webflow', d: 'Design-led sites with smooth interactions and a clean visual editor.', bullets: ['Pixel-perfect layouts', 'Built-in CMS', 'Hosted & fast'] },
      { t: 'Wix & Squarespace', d: 'Simple, all-in-one platforms that are easy to edit and maintain.', bullets: ['Drag-and-drop editing', 'Hosting included', 'Quick to launch'] },
      { t: 'Framer', d: 'Modern marketing sites and landing pages with rich motion.', bullets: ['Animation-friendly', 'Figma-like editor', 'Great for launches'] },
    ],
  },
  audience: {
    heading: 'Built for businesses like yours',
    rows: [
      { t: 'Business websites', d: '5–10 pages you can edit yourself', tone: 'blue' },
      { t: 'Online stores', d: 'WooCommerce with payments, shipping and orders', tone: 'rust' },
      { t: 'Custom builds', d: 'Custom themes and plugins for advanced features', tone: 'violet' },
      { t: 'Existing WordPress sites', d: 'Speed, security, fixes and redesigns', tone: 'green' },
    ],
  },
  projects: {
    heading: 'WordPress builds for real businesses',
    intro: 'WordPress projects I led at my studio, WebAlchemy.',
    items: [CASE_BATON_ROUGE, CASE_TRUDANAZ],
  },
  process: {
    heading: 'How a WordPress project works',
    intro: 'Four phases from first conversation to live website.',
    steps: webSteps('I stay on hand for fixes and updates'),
  },
  quote: {
    heading: 'One fixed quote',
    intro: 'Tell me what the site needs to do and I will come back with one clear price and timeline, no packages to decode.',
    points: ['Fixed price, agreed upfront', 'You own the site, domain and hosting', 'Walkthrough so you can edit it yourself', 'Direct WhatsApp line to me'],
  },
  faq: {
    heading: 'Questions about WordPress & CMS sites',
    items: [
      {
        q: 'Should I use WordPress or something like Webflow or Wix?',
        a: 'WordPress is the most flexible and has the biggest ecosystem, great for content-heavy sites and WooCommerce stores. Webflow and Framer suit design-led marketing sites; Wix and Squarespace are the simplest to run yourself. I will recommend one on our call based on how you want to work.',
      },
      {
        q: 'Will I be able to edit the site myself?',
        a: 'Yes. I set up the editor so text, images, pages and blog posts are easy to change, and walk you through it at handover.',
      },
      {
        q: 'Can you build an online store on WordPress?',
        a: 'Yes, with WooCommerce: products, payment gateways, shipping and order management on the same WordPress site you manage.',
      },
      {
        q: 'Can you fix or speed up my existing WordPress site?',
        a: 'Yes. I clean up heavy plugins, optimise images, add caching and fix layout issues, aiming for 90+ on Google PageSpeed for mobile.',
      },
      {
        q: 'Can you move my site to WordPress?',
        a: 'Yes. I migrate from Wix, Squarespace, old HTML sites and other builders, keep your content and set up 301 redirects so Google carries your rankings across.',
      },
    ],
  },
};

const ecommerceDevelopment: ServiceData = {
  key: 'ecommerce-website-development',
  path: '/ecommerce-website-development',
  num: '04',
  name: 'E-commerce Stores',
  chip: 'E-commerce Stores',
  crumb: 'E-commerce Stores',
  meta: {
    title: 'Shopify & WooCommerce Stores | Kunal — Website Developer & UI/UX Designer',
    description: 'Online stores on Shopify or WooCommerce, designed so buying feels easy on a phone. Payments, shipping and product setup handled by Kunal.',
  },
  schema: {
    name: 'E-commerce Website Development',
    description: 'Shopify and WooCommerce online stores designed and built by Kunal, with payment gateways, shipping and product setup.',
  },
  h1: ['Online stores that make buying ', 'easy'],
  lede: 'I design and build stores on Shopify or WooCommerce with payments, shipping and products set up, so you can start selling, and so customers can check out on a phone without thinking twice.',
  glance: [
    { k: 'Platforms', v: 'Shopify · WooCommerce' },
    { k: 'Payments', v: 'Razorpay · PayU · Stripe' },
    { k: 'Shipping', v: 'Shiprocket · Delhivery' },
    { k: 'Design', v: 'Mobile-first' },
  ],
  glanceCta: { label: 'Tell me about your store →', href: '/contact' },
  included: {
    heading: 'Everything your online store needs',
    intro: 'A complete store, set up for selling in India and beyond, from payment gateways to shipping partners.',
    items: [
      { t: 'Store design', d: 'Product, collection and checkout pages designed in Figma around how your customers shop.' },
      { t: 'Product setup', d: 'Categories, variants and product uploads, plus an admin you can manage yourself.' },
      { t: 'Payment integration', d: 'Razorpay, PayU, Stripe, PayPal and other major gateways.' },
      { t: 'Shipping integration', d: 'Shiprocket, Delhivery or your own shipping rules.' },
      { t: 'Secure checkout', d: 'SSL and gateway-handled payments, tested end to end before launch.' },
      { t: 'Fast & mobile-first', d: 'Optimised for speed and for thumbs, where most orders happen.' },
    ],
  },
  details: {
    eyebrow: 'PLATFORMS',
    heading: 'Shopify or WooCommerce?',
    intro: 'Both are great; the right one depends on how you want to run the store.',
    items: [
      { t: 'Shopify', d: 'Quick to launch and easy to manage.', bullets: ['Hosted for you', 'Huge app ecosystem', 'Payment-ready'] },
      { t: 'WooCommerce', d: 'Flexible and WordPress-based.', bullets: ['Full customisation', 'Cost-effective', 'SEO-friendly'], link: { label: 'WordPress & CMS sites', href: '/wordpress-development' } },
      { t: 'Custom front-end', d: 'For unusual requirements, a custom React / Next.js storefront.', bullets: ['Fully tailored', 'Very fast', 'Built to scale'] },
    ],
  },
  audience: {
    heading: 'Built for businesses selling online',
    rows: [
      { t: 'E-commerce', d: 'Catalogues, payments, shipping', tone: 'rust', categories: ['E-commerce'] },
      { t: 'Quick-launch stores', d: 'Shopify, hosted and payment-ready', tone: 'green' },
      { t: 'WordPress businesses', d: 'WooCommerce on a site you already manage', tone: 'blue' },
      { t: 'Unique requirements', d: 'Custom storefronts, fully yours', tone: 'violet' },
    ],
  },
  process: {
    heading: 'How a store project works',
    intro: 'Four phases from first conversation to a live store.',
    steps: webSteps('I stay on hand for fixes and updates', ' Product uploads, payment and shipping integrations are set up and tested here.'),
  },
  quote: {
    heading: 'One fixed quote',
    intro: 'Stores vary a lot (ten products or ten thousand), so I quote after a short call about your catalogue, payments and shipping.',
    points: ['Fixed price, agreed upfront', 'You own the store and its data', 'Walkthrough for managing orders & products', 'Direct WhatsApp line to me'],
  },
  faq: {
    heading: 'Questions about e-commerce stores',
    items: [
      {
        q: 'Which platform should I choose?',
        a: 'Shopify is the quickest to launch and the easiest to manage: hosted, payment-ready and full of apps. WooCommerce is more flexible and cost-effective if you want your store on WordPress. For very specific needs I can build a custom storefront. We decide together on our first call.',
      },
      {
        q: 'Which payment gateways can you integrate?',
        a: 'Razorpay, PayU, Stripe, PayPal and other major gateways, set up and tested before launch.',
      },
      {
        q: 'Can you set up shipping?',
        a: 'Yes. I integrate Shiprocket, Delhivery or custom shipping rules so orders flow from checkout to delivery without manual work.',
      },
      {
        q: 'Can I add and edit products myself?',
        a: 'Yes. I set up the products and categories with you, then show you how to add new ones, run discounts and manage orders.',
      },
      {
        q: 'Is the checkout secure?',
        a: 'Yes. Every store runs on SSL with payments handled by the gateway, and I test the full purchase flow on real devices before going live.',
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

/** Kunal's services, in display order (listings and "Other services" chips). */
export const SERVICE_ORDER = [
  'web-development',
  'design-branding',
  'wordpress-development',
  'ecommerce-website-development',
] as const;

export const CORE_SERVICES = SERVICE_ORDER.map((k) => SERVICES[k]);

export function getService(key: string): ServiceData {
  const s = SERVICES[key];
  if (!s) throw new Error(`Unknown service: ${key}`);
  return s;
}
