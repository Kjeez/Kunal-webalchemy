// Static copy for Kunal's portfolio homepage (built on the WebAlchemy
// "Landing v5" design system). Claims mirror the WebAlchemy homepage,
// re-voiced in the first person.

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

export const STEPS = [
  { seed: 'Neha', bg: 'eef1ff', n: '01', when: 'DAY 1', t: 'Free discovery call', d: "30 minutes on your goals, your customers and what isn't working on your current site. You leave with a clear plan and a fixed quote.", items: ['30 minutes', 'Fixed quote', 'No obligation'] },
  { seed: 'Arjun', bg: 'fbf3e2', n: '02', when: 'DAYS 2–6', t: 'Design in Figma, build in code', d: 'I design your pages in Figma, share clickable previews as I go and refine with your feedback, then build them on the platform that fits.', items: ['Unlimited revisions', 'Direct WhatsApp access', 'Mobile-first'] },
  { seed: 'Tara', bg: 'e8f4ec', n: '03', when: 'DAY 7 · STARTER SITES', t: 'Launch & grow', d: 'I launch on your domain, set up Google Analytics and SEO basics, then stay on hand for fixes and updates after go-live.', items: ['Domain & hosting setup', 'Analytics setup', 'Post-launch support'] },
];

export const SERVICES_LIST: { t: string; d: string; tags: string; service: string; c: string; popular?: boolean }[] = [
  { t: 'Web Design & Development', d: 'Custom, fast websites that turn visitors into customers.', tags: 'Responsive · Mobile-first · PageSpeed 90+ · 7-day delivery', service: 'Website Development', c: '#3557f5', popular: true },
  { t: 'UI/UX Design', d: 'Research-led interfaces people actually enjoy using.', tags: 'User flows · Wireframes · Figma prototypes · Design systems', service: 'UI/UX Design', c: '#7a4bc2' },
  { t: 'Graphic & Brand Design', d: 'Visuals that make your brand memorable.', tags: 'Logos · Brand kits · Social creatives · Photoshop & Illustrator', service: 'Graphic & Brand Design', c: '#c0532b' },
  { t: 'CMS Websites', d: 'Sites you can update yourself, on the platform that fits.', tags: 'WordPress · Elementor · Shopify · Webflow · Wix · Framer', service: 'CMS Website', c: '#2f7a4f' },
  { t: 'E-commerce Stores', d: 'Online stores that make buying feel easy.', tags: 'Shopify · WooCommerce · Payments · Product setup', service: 'E-commerce Store', c: '#a8660a' },
  { t: 'Landing Pages & Redesigns', d: 'Turn an outdated site into a lead machine.', tags: 'Conversion-focused layouts · Speed & SEO fixes · Clear CTAs', service: 'Landing Page / Redesign', c: '#14161c' },
];

/** [name, short label on the badge, ink, background] */
export type Tool = [string, string, string, string];
export const DESIGN_TOOLS: Tool[] = [
  ['Figma', 'Fg', '#ffffff', '#1e1e1e'],
  ['Adobe Photoshop', 'Ps', '#31a8ff', '#001e36'],
  ['Adobe Illustrator', 'Ai', '#ff9a00', '#330000'],
  ['Adobe XD', 'Xd', '#ff61f6', '#470137'],
  ['Canva', 'Ca', '#ffffff', '#7d2ae8'],
];
export const CMS_TOOLS: Tool[] = [
  ['WordPress', 'WP', '#ffffff', '#21759b'],
  ['Elementor', 'El', '#ffffff', '#92003b'],
  ['WooCommerce', 'Woo', '#ffffff', '#7f54b3'],
  ['Shopify', 'Sh', '#ffffff', '#5e8e3e'],
  ['Webflow', 'Wf', '#ffffff', '#4353ff'],
  ['Wix', 'Wix', '#ffffff', '#0c0c0c'],
  ['Framer', 'Fr', '#ffffff', '#0055ff'],
  ['Squarespace', 'Sq', '#ffffff', '#222222'],
];
export const CODE_TOOLS: Tool[] = [
  ['HTML5', 'H5', '#ffffff', '#e34f26'],
  ['CSS3', 'C3', '#ffffff', '#1572b6'],
  ['JavaScript', 'JS', '#1e1e1e', '#f7df1e'],
  ['TypeScript', 'TS', '#ffffff', '#3178c6'],
  ['React', 'Re', '#61dafb', '#20232a'],
  ['Next.js', 'N', '#ffffff', '#000000'],
  ['Tailwind CSS', 'Tw', '#ffffff', '#0ea5e9'],
  ['Node.js', 'No', '#ffffff', '#3c873a'],
];

/** Skill meters in the Toolbox section: [skill, level 0–100, colour]. */
export const SKILLS: [string, number, string][] = [
  ['UI/UX design', 95, '#7a4bc2'],
  ['Website development', 96, '#3557f5'],
  ['Visual & graphic design', 90, '#c0532b'],
  ['CMS (WordPress, Shopify, Webflow, Wix)', 95, '#2f7a4f'],
  ['Speed & on-page SEO', 90, '#a8660a'],
];

export const STACK = ['Figma', 'Photoshop', 'Illustrator', 'WordPress', 'Shopify', 'Webflow', 'Wix', 'Framer', 'WooCommerce', 'React', 'Next.js', 'Tailwind'];

export const BAND_A = ['Mobile-first', 'PageSpeed 90+', 'Figma → Code', 'UI/UX Design', 'SEO-ready', 'Direct line to me'];
export const BAND_B = ['Websites that sell', 'Built in New Delhi', '200+ projects', 'Rated 4.9/5', 'WordPress · Shopify · Webflow', 'Photoshop & Illustrator'];

/* The three reviews the previous homepage already showed. */
/* Real client reviews of projects Kunal led at his studio, WebAlchemy
   (quoted verbatim). `shot` = their site's homepage capture. */
export const REVIEWS: { q: string; name: string; co: string; shot?: string }[] = [
  { q: 'WebAlchemy understood our technical business and translated it into a professional digital presence. The website design looks clean, communicates our solutions effectively, and gives our brand a much stronger identity.', name: 'Ashish', co: 'Tenbel', shot: '/portfolio-screenshots/clients/tenbel-in.jpg' },
  { q: 'From presenting our products to communicating our brand story, WebAlchemy helped us create a website that feels premium and authentic. Their attention to detail made the entire experience smooth.', name: 'Pankaj', co: 'Vistaaram' },
  { q: 'We needed a digital presence that reflected the strength and professionalism of our business. The team approached the project thoughtfully and focused on clear communication, design quality, and usability.', name: 'Ajay', co: 'Magic Holidays India' },
  { q: 'WebAlchemy brought our vision to life with a polished design and a thoughtful user experience. The website feels aligned with our brand, works smoothly across devices, and makes it easier for customers to explore our offerings.', name: 'Ankita', co: 'Nandtara' },
];

export const FAQS = [
  { q: 'How long does it take to build a website?', a: 'A focused landing page or starter site can go live in about 7 days. A full 5–10 page website usually takes 3–5 weeks, and larger stores or custom builds get a fixed timeline on our first call.' },
  { q: 'Do you design the site before building it?', a: 'Yes. I design every key page in Figma first (with visuals prepared in Photoshop or Illustrator where needed), share a clickable preview, and only start building once you are happy with it.' },
  { q: 'Which platform will you build my site on?', a: 'Whatever fits your business: WordPress (with Elementor or WooCommerce), Shopify, Webflow, Wix, Framer, or a custom React / Next.js build when you need something bespoke. I will recommend one and explain why.' },
  { q: 'Will I be able to update the website myself?', a: 'Yes. CMS sites let you edit pages, blog posts and products without touching code, and I walk you through everything at handover.' },
  { q: 'What is your payment structure?', a: 'Usually 50% upfront to book the slot and 50% at launch. For larger projects we can split it into milestones.' },
  { q: 'Do you also handle SEO, speed and hosting?', a: 'Every site ships with an SEO-ready structure, fast load times (PageSpeed 90+ on mobile is the target) and help setting up your domain, hosting and Google Analytics.' },
];
