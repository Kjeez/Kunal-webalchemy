// Static copy for the homepage (Claude Design "WebAlchemy Landing v5").
// Every claim here is either in the design or on the previous homepage.

export { peep } from './motion';

/** [kind, width, height, colour, left, top, parallax depth, float seconds, rotation°, z-index] */
export type ShapeDef = [
  'circle' | 'square' | 'pill' | 'ring' | 'half',
  number, number, string, string, string, number, number, number?, number?,
];

export const HERO_SHAPES: ShapeDef[] = [
  ['circle', 64, 64, '#e3a008', '6%', '2%', 30, 6],
  ['square', 44, 44, '#3557f5', '88%', '60%', 44, 7, 14, 7],
  ['pill', 92, 36, '#ff8a6b', '56%', '90%', 26, 8, -12],
  ['square', 30, 30, '#2f7a4f', '-2%', '72%', 52, 5.5, 45, 7],
  ['ring', 72, 72, '#7a4bc2', '68%', '-4%', 18, 9],
  ['half', 56, 28, '#c0532b', '40%', '-1%', 36, 6.5, -20],
  ['circle', 16, 16, '#14161c', '94%', '44%', 64, 4.5, 0, 7],
];

export const DARK_SHAPES: ShapeDef[] = [
  ['ring', 140, 140, '#2a2d36', '84%', '4%', 0, 11],
  ['circle', 22, 22, '#ff8a6b', '93%', '42%', 0, 7],
  ['square', 18, 18, '#9fb0ff', '1.5%', '3%', 0, 8, 45],
  ['square', 26, 26, '#e3a008', '76%', '90%', 0, 9, 12],
  ['pill', 64, 22, '#2f7a4f', '5%', '88%', 0, 10, -15],
];

export const PROBLEMS: [string, string][] = [
  ['Outdated design', "Visitors leave immediately. If it looks like 2010, they assume you're out of business."],
  ['No mobile optimization', 'Losing 60% of traffic. Mobile users abandon pinch-and-zoom sites instantly.'],
  ['Slow loading speed', '5-second load = 90% bounce rate. Every second of delay kills your conversions.'],
  ['Poor SEO ranking', 'Not found on Google searches. Your competitors are getting the leads you deserve.'],
  ['No clear call-to-action', "Visitors don't know what to do next. Confusion is the enemy of conversion."],
  ['DIY website mistakes', 'Wasting time and money. Templates break, plugins conflict, and you lose sanity.'],
];

const PAL: [string, string][] = [
  ['#3557f5', '#eef1ff'], ['#2f7a4f', '#e8f4ec'], ['#a8660a', '#fbf3e2'],
  ['#c0532b', '#fcebe3'], ['#7a4bc2', '#f3ecfb'], ['#14161c', '#f2f1ec'],
];

export const START_ROWS = [
  ['My website looks outdated', 'Free website audit', 'We review your site and send a written list of fixes within 48 hours. No obligation.', 'Redesign', 'From ₹11,999', 'Website Development'],
  ['I get visitors but no enquiries', 'Conversion review', 'A 30-minute call going through your pages, calls-to-action and forms.', 'Growth plan', '₹24,999', 'Website Development'],
  ["I don't have a website yet", 'Starter website', 'Up to 5 pages, live in 7 days, with free domain and hosting.', 'Starter plan', '₹11,999', 'Website Development'],
  ["I'm not showing up on Google", 'SEO check', 'Where you rank today, who outranks you, and the pages to fix first.', 'Content Strategy & SEO', 'Monthly', 'Content Strategy'],
  ['I want to sell online', 'E-commerce consult', 'We map your catalogue, payments and shipping before quoting.', 'Growth plan · store', '₹24,999', 'Website Development'],
  ['I need an app or custom software', 'Scoping call', 'A fixed-scope estimate with timeline, written up after one call.', 'App Development', 'Custom quote', 'App Development'],
].map(([have, start, detail, leads, price, service], i) => ({
  have, start, detail, leads, price, service, c: PAL[i % PAL.length][0], tint: PAL[i % PAL.length][1],
}));

export const STEPS = [
  { seed: 'Neha', bg: 'eef1ff', n: '01', when: 'DAY 1', t: 'Free strategy call', d: "30 minutes on your goals, your customers and what isn't working on your current site. You leave with a clear plan and a fixed quote.", items: ['30 minutes', 'Fixed quote', 'No obligation'] },
  { seed: 'Arjun', bg: 'fbf3e2', n: '02', when: 'DAYS 2–6', t: 'Design & build', d: 'We design your pages, share progress as we go and refine with your feedback. You talk directly to your designer and developer.', items: ['Unlimited revisions', 'Direct Slack access', 'Mobile-first'] },
  { seed: 'Tara', bg: 'e8f4ec', n: '03', when: 'DAY 7 · STARTER PLAN', t: 'Launch & grow', d: 'We launch on your domain, set up Google Analytics and SEO basics, then support you for 1 to 3 months depending on your plan.', items: ['Free domain & hosting', 'Analytics setup', '1–3 months support'] },
];

export const SERVICES_LIST: { t: string; d: string; tags: string; href: string; popular?: boolean }[] = [
  { t: 'Website Development', d: 'Custom websites that convert visitors into customers.', tags: 'Responsive Design · Fast Performance · SEO Optimized · 7-Day Delivery', href: '/services/web-development', popular: true },
  { t: 'Digital Marketing', d: 'Data-driven campaigns that grow your business.', tags: 'Google Ads · Meta Ads · SEO Strategy · Analytics & Reporting', href: '/services/digital-marketing' },
  { t: 'Design & Branding', d: 'Visual identity that makes you memorable.', tags: 'Logo Design · Brand Guidelines · Marketing Materials · UI/UX Design', href: '/services/design-branding' },
  { t: 'Content Strategy', d: 'Words that rank on Google and sell to humans.', tags: 'SEO Blog Writing · Website Copy · Keyword Strategy · Content Calendar', href: '/services/content-strategy' },
  { t: 'App Development', d: 'iOS and Android apps that users love.', tags: 'Native Development · Cross-Platform · App Store Launch · Ongoing Support', href: '/services/app-development' },
  { t: 'PR & Advertising', d: 'Get featured in top publications and build your brand.', tags: 'Media Placements · Press Releases · Brand Positioning · Reputation Management', href: '/services/pr-advertising' },
];

export const STACK = ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Three.js', 'WordPress', 'Shopify', 'Webflow', 'Framer', 'Wix', 'WooCommerce'];

export const BAND_A = ['Mobile-first', 'PageSpeed 98+', '7-day delivery', 'Free domain & hosting', 'SEO-ready', 'Direct Slack access'];
export const BAND_B = ['Websites that sell', 'Built in New Delhi', '100+ projects', 'Rated 4.9/5', 'Conversion focused', 'Launch-date guarantee'];

/* The three reviews the previous homepage already showed. */
export const REVIEWS = [
  { q: "WebAlchemy didn't just build a website; they built a sales engine. Our lead quality improved overnight, and the design perfectly captures our brand's future vision.", name: 'Sarah Jenkins', co: 'TechFlow Systems' },
  { q: 'The level of technical detail is unmatched. They handled our complex 3D WebGL integrations seamlessly. Truly a partner, not just a vendor.', name: 'Michael Chen', co: 'Nexus AI' },
  { q: 'We were losing customers to mobile usability issues. The new responsive platform WebAlchemy launched helped us recover significant market share in Q4.', name: 'Elena Rodriguez', co: 'Global Logistics' },
];

type Feature = { t: string; on: boolean; b?: boolean };
const on = (t: string, b = false): Feature => ({ t, on: true, b });
const off = (t: string): Feature => ({ t, on: false });

export const TIERS: { name: string; tag: string; price: string; note: string; cta: string; badge?: string; dark?: boolean; best: string; features: Feature[] }[] = [
  { name: 'Starter', tag: 'Perfect for getting started online', price: '₹11,999', note: 'One-time payment', cta: 'Get Started', best: 'Landing pages, portfolios, small business websites',
    features: [on('Up to 5 pages'), on('Mobile-responsive design'), on('SEO-ready structure'), on('Free Domain & SSL Certificate'), on('Contact form integration'), on('Google Analytics setup'), on('1 month of support'), on('Free Hosting'), on('7-day delivery'), off('E-commerce functionality'), off('Blog/CMS'), off('Advanced integrations'), off('Ongoing maintenance')] },
  { name: 'Growth', tag: 'Everything you need to scale', price: '₹24,999', note: 'One-time payment', cta: 'Start Growing', badge: 'Most popular', dark: true, best: 'E-commerce stores, content-driven sites, growing brands',
    features: [on('Everything in Starter', true), on('Up to 10 pages'), on('Blog/CMS integration'), on('E-commerce ready (50 products)'), on('Advanced SEO optimization'), on('Email marketing integration'), on('Social media integration'), on('3 months of support'), on('Priority development'), on('Custom animations'), on('Performance optimization')] },
  { name: 'Enterprise', tag: 'Unlimited possibilities for your business', price: 'Custom', note: 'Tailored to your needs', cta: 'Contact Sales', badge: 'For teams', best: 'Large businesses, agencies, complex requirements',
    features: [on('Everything in Growth', true), on('Unlimited pages'), on('Custom functionality'), on('Dedicated project manager'), on('Priority support (24/7)'), on('Advanced integrations (CRM, ERP)'), on('Multi-language support'), on('Custom training sessions'), on('White-glove service'), on('Ongoing consulting'), on('Performance SLAs')] },
];

export const GUARANTEES = [
  { t: 'On time, or you save', d: "If we miss the launch date agreed in your quote, you get 10% off for every week we're late.", c: '#3557f5', radius: '50%', rot: '0deg' },
  { t: 'Unlimited revisions', d: "We refine the design until you're happy before anything goes live, at no extra charge.", c: '#e3a008', radius: '6px', rot: '45deg' },
  { t: 'Fast, or we fix it free', d: 'Your site scores 90+ on Google PageSpeed for mobile at launch, or we optimise it at no cost.', c: '#2f7a4f', radius: '6px', rot: '12deg' },
];

export const FAQS = [
  { q: 'How long does it take to build a website?', a: 'A standard high-conversion landing page typically takes 2-3 weeks. A full 5-10 page corporate website usually takes 4-6 weeks. Complex web applications with custom backends can take 2-3 months. We provide a detailed timeline during our initial strategy call.' },
  { q: 'Do you offer hosting and maintenance?', a: 'Yes. Starter and Growth plans include a free domain, hosting and SSL certificate, plus 1 to 3 months of support depending on the plan. Ongoing maintenance is available after that.' },
  { q: 'Will I be able to update the website myself?', a: 'Yes. Growth and Enterprise sites include a CMS, so you can edit pages, blog posts and products without touching code. We walk you through it at handover.' },
  { q: 'What is your payment structure?', a: 'We typically require a 50% deposit to secure your slot in our production schedule. The remaining 50% is due upon project completion and launch. For larger enterprise projects, we can discuss milestone-based payments.' },
  { q: 'Do you handle SEO and content writing?', a: 'Yes. Every site ships with an SEO-ready structure, and our Content Strategy service covers SEO blog writing, website copy, keyword strategy and a content calendar.' },
];
