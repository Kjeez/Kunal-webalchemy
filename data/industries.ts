import { projectsData, type Project } from './projectsData';
import type { Tone } from '@/lib/site';
import type { ServicePlan } from './services';

/* Industry landing pages (components/industry/IndustryPage). Each page is
   backed by REAL client websites from data/projectsData — no invented
   results, quotes or numbers. Prices are the home-page plan prices. */

export interface IndustryData {
  slug: string;
  path: string;
  /** Short name for breadcrumbs, footer and cross-links. */
  name: string;
  meta: { title: string; description: string };
  /** [before, serif accent, after] */
  h1: [string, string, string?];
  lede: string;
  /** "At a glance" rows; the live project count is prepended automatically. */
  glance: { k: string; v: string }[];
  /** Which portfolio projects count as this industry. */
  match: (p: Project) => boolean;
  work: { heading: string; intro: string };
  problems: { heading: string; intro: string; items: { t: string; d: string }[] };
  included: { heading: string; intro: string; items: { t: string; d: string; bullets?: string[] }[] };
  pages: { heading: string; intro: string; items: { t: string; d: string }[] };
  process: { heading: string; steps: { when: string; t: string; d: string }[] };
  pricing: { heading: string; intro: string; plans: ServicePlan[]; note: string };
  faq: { heading: string; items: { q: string; a: string }[] };
  tone: Tone;
  whatsappMessage: string;
}

const plan = (name: string, price: string, features: string[], featured = false, badge?: string): ServicePlan => ({
  name,
  price,
  unit: 'one-time',
  features,
  cta: 'Get a fixed quote',
  featured,
  badge,
});

const steps = (content: string) => [
  { when: 'DAY 1', t: 'Free 30-minute call', d: `We look at your current site (if any), your competitors on Google and what you want enquiries for. You get a fixed quote and launch date in writing.` },
  { when: 'WEEK 1', t: 'Design you approve', d: `Mobile and desktop mockups first. ${content} We revise until you are happy, before any development starts.` },
  { when: 'WEEK 1–3', t: 'Build & connect', d: 'We build the site, connect WhatsApp, call buttons, forms and Google Analytics, and set up your Google Business Profile link and map.' },
  { when: 'LAUNCH', t: 'Go live & hand over', d: 'Speed check (90+ mobile PageSpeed, guaranteed), Search Console submission, and a walkthrough so your team can update it.' },
];

/* ------------------------------------------------------------------ */

const clinics: IndustryData = {
  slug: 'clinics',
  path: '/website-for-doctors-and-clinics',
  name: 'Doctors & clinics',
  meta: {
    title: 'Website Design for Doctors & Clinics in India | WebAlchemy',
    description:
      'Clinic and hospital websites that bring in appointment enquiries: WhatsApp booking, doctor profiles, Google Maps and local SEO. 27+ healthcare sites built. From ₹14,999.',
  },
  h1: ['Websites for ', 'doctors & clinics', ' that fill appointment slots'],
  lede:
    'We have built websites for dental clinics in Gurugram, eye hospitals in Noida, physiotherapists, Ayurveda and homeopathy practices. Patients find you on Google, see who you are, and book on WhatsApp in one tap.',
  glance: [
    { k: 'Starting price', v: '₹14,999' },
    { k: 'Typical timeline', v: '7–21 days' },
    { k: 'Booking', v: 'WhatsApp, call, form' },
  ],
  match: (p) => p.category === 'Dental' || (p.category === 'Healthcare' && !/pet|vet/i.test(p.metric ?? '')),
  work: {
    heading: 'Clinic websites we have built',
    intro: 'Dental, eye care, physiotherapy, skin, Ayurveda and homeopathy practices across Delhi NCR.',
  },
  problems: {
    heading: 'Why most clinic websites don’t bring patients',
    intro: 'Patients decide in seconds, usually on a phone, often while in pain. These are the gaps we see on most clinic sites before a redesign.',
    items: [
      { t: 'No clear way to book', d: 'A contact page with an email address is not a booking system. Patients want a WhatsApp button, a call button and visible timings on every page.' },
      { t: 'Doctors are invisible', d: 'People choose a doctor, not a clinic. Without photos, qualifications and experience, a patient has no reason to pick you over the next result.' },
      { t: 'Treatments aren’t explained', d: 'One “Services” page listing twenty treatments ranks for none of them. Each main treatment needs its own page answering what it is, how long it takes and what it costs.' },
      { t: 'Not showing up nearby', d: 'Most patients search “dentist near me” or “eye hospital in Noida”. If your site and Google Business Profile don’t match, you lose the map pack to clinics that do.' },
    ],
  },
  included: {
    heading: 'What every clinic website includes',
    intro: 'Built for patients on phones first, and for Google to understand exactly what you treat and where.',
    items: [
      { t: 'One-tap appointment requests', d: 'WhatsApp and call buttons fixed on mobile, plus a short appointment form that lands in your inbox and WhatsApp.', bullets: ['Pre-filled WhatsApp message', 'Clinic timings on every page', 'Optional Calendly or Practo link'] },
      { t: 'Doctor profiles that build trust', d: 'Photo, qualifications, registration, years of practice and specialities for each doctor, written in plain language.' },
      { t: 'Treatment pages that rank', d: 'A separate page for each main treatment (implants, root canal, LASIK, cataract, knee rehab…) so you can rank for the searches patients actually make.' },
      { t: 'Local SEO setup', d: 'Clinic schema, Google Maps embed, consistent name, address and phone, and your Google Business Profile linked properly.' },
      { t: 'Patient-friendly content', d: 'Before-you-visit information, FAQs, insurance and payment options, and directions with parking details.' },
      { t: 'Fast and secure', d: 'SSL, 90+ mobile PageSpeed at launch (guaranteed), and forms that do not collect any medical records.' },
    ],
  },
  pages: {
    heading: 'A typical clinic site map',
    intro: 'Most clinics need 6–12 pages. This is the structure we start from and adjust to your practice.',
    items: [
      { t: 'Home', d: 'Who you are, main treatments, doctors, timings and the booking buttons.' },
      { t: 'Treatment pages', d: 'One page per main treatment, with process, recovery time and FAQs.' },
      { t: 'Our doctors', d: 'Profiles, qualifications and specialities.' },
      { t: 'Clinic & facilities', d: 'Photos of the clinic, equipment and hygiene practices.' },
      { t: 'Patient reviews', d: 'Your real Google reviews, embedded.' },
      { t: 'Contact & directions', d: 'Map, timings, parking, and every way to reach you.' },
    ],
  },
  process: { heading: 'From first call to live website', steps: steps('We write treatment pages with you, so the medical details stay accurate.') },
  pricing: {
    heading: 'Fixed prices for clinic websites',
    intro: 'Most single-doctor clinics choose Starter. Multi-speciality clinics and hospitals usually need Growth or Premium for the treatment pages.',
    plans: [
      plan('Starter', '₹14,999', ['Up to 5 pages', 'WhatsApp & call booking', 'Doctor profile', 'Google Maps & local SEO setup', 'Free domain, hosting & SSL']),
      plan('Growth', '₹29,999', ['Up to 10 pages', 'Separate treatment pages', 'Blog for patient education', 'Advanced SEO', '3 months support'], true, 'Most clinics'),
      plan('Premium', '₹49,999', ['Up to 20 pages', 'Multi-doctor, multi-branch', 'Custom design', 'Content migration', '6 months support']),
    ],
    note: 'Prices are one-time. Domain and hosting are free for the first year on Starter and Growth.',
  },
  faq: {
    heading: 'Questions doctors ask us',
    items: [
      { q: 'How much does a website for a clinic cost?', a: 'Our clinic websites start at ₹14,999 for up to 5 pages, including domain, hosting and SSL for the first year. Clinics that want separate treatment pages and a blog usually choose the ₹29,999 Growth plan. You get a fixed quote after a free 30-minute call.' },
      { q: 'Can patients book appointments online?', a: 'Yes. By default we add WhatsApp, call and form booking, which suits most clinics because your front desk confirms the slot. If you already use Practo, Calendly or a clinic management system, we can link or embed it.' },
      { q: 'Will my clinic show up on Google Maps?', a: 'The website is one half of it. We set up clinic schema, a consistent name, address and phone number, and link your Google Business Profile. Ranking in the map pack then depends mostly on your reviews and how close the patient is, so we also give you a simple process for collecting Google reviews.' },
      { q: 'Do you write the content for treatment pages?', a: 'We draft it in plain language from a short call with you, and you review it for medical accuracy before anything goes live. We avoid exaggerated claims and guarantees, which also keeps you within advertising rules for medical practitioners.' },
      { q: 'How long does it take?', a: 'A Starter clinic website goes live in about 7 days once we have your photos and details. A Growth site with treatment pages usually takes 2–3 weeks. Your launch date is written into the quote.' },
      { q: 'Do you work with clinics outside Delhi NCR?', a: 'Yes. Most of our projects run over WhatsApp and video calls, so we work with clinics anywhere in India.' },
    ],
  },
  tone: 'green',
  whatsappMessage: "Hi! I run a clinic and I'm looking for a new website. Can we discuss?",
};

/* ------------------------------------------------------------------ */

const realEstate: IndustryData = {
  slug: 'real-estate',
  path: '/real-estate-website-design',
  name: 'Real estate',
  meta: {
    title: 'Real Estate Website Design for Agents & Builders | WebAlchemy',
    description:
      'Real estate websites that turn property searches into site-visit enquiries: listings, project pages, WhatsApp leads and local SEO. Built for 9 realty firms in Noida. From ₹14,999.',
  },
  h1: ['Real estate websites that turn ', 'searches', ' into site visits'],
  lede:
    'We build websites for property dealers, channel partners and realty firms, including nine in Noida and Greater Noida West. Buyers browse your projects, compare options and send an enquiry on WhatsApp without leaving the page.',
  glance: [
    { k: 'Starting price', v: '₹14,999' },
    { k: 'Typical timeline', v: '7–21 days' },
    { k: 'Leads to', v: 'WhatsApp & email' },
  ],
  match: (p) => /real estate/i.test(p.metric ?? ''),
  work: {
    heading: 'Real estate websites we have built',
    intro: 'Property consultants and realty firms in Noida, Greater Noida West and across NCR.',
  },
  problems: {
    heading: 'Where property leads leak away',
    intro: 'Buyers compare a dozen projects before they call anyone. These are the reasons they skip a dealer’s website.',
    items: [
      { t: 'Listings are out of date', d: 'Sold-out units and old price sheets make buyers doubt everything else on the site. You need listings you can update yourself in minutes.' },
      { t: 'No project detail', d: 'Buyers want floor plans, carpet area, possession date, RERA number and location advantages before they enquire. Without them, they go to the portal.' },
      { t: 'Enquiries go nowhere', d: 'A generic form with no follow-up loses the lead to whoever calls first. Every enquiry should reach WhatsApp instantly, tagged with the project it came from.' },
      { t: 'Totally dependent on portals', d: 'Paid portal leads are shared with other brokers. Your own site, ranking for “3 BHK in Sector 150 Noida”, brings leads that are yours alone.' },
    ],
  },
  included: {
    heading: 'What every real estate website includes',
    intro: 'A site that works as your digital sales office, ready for buyers on mobile and for Google.',
    items: [
      { t: 'Project & listing pages', d: 'One page per project or property with gallery, floor plans, price range, amenities, location map and RERA details.', bullets: ['Filter by budget, BHK and location', 'Update listings yourself', 'Downloadable brochure'] },
      { t: 'Instant WhatsApp leads', d: 'Every “Enquire” button opens WhatsApp with the project name pre-filled, so you know exactly what the buyer wants.' },
      { t: 'Location pages that rank', d: 'Pages for the sectors and micro-markets you sell in, such as Noida Expressway or Greater Noida West, written to rank for local property searches.' },
      { t: 'Site-visit booking', d: 'A short form to schedule a site visit, with the lead sent to your phone and email.' },
      { t: 'Trust signals', d: 'RERA registration, years in business, builder partnerships and real Google reviews.' },
      { t: 'Fast on mobile', d: 'Image-heavy pages compressed properly, so galleries load fast on 4G. 90+ mobile PageSpeed at launch, guaranteed.' },
    ],
  },
  pages: {
    heading: 'A typical real estate site map',
    intro: 'Dealers usually need 6–15 pages; builders with several projects need one page per project.',
    items: [
      { t: 'Home', d: 'Featured projects, the areas you cover and quick enquiry buttons.' },
      { t: 'Projects / listings', d: 'Filterable listings with a detail page for each.' },
      { t: 'Location guides', d: 'Pages for each sector or micro-market you specialise in.' },
      { t: 'Services', d: 'Buying, selling, renting, home loans or NRI assistance.' },
      { t: 'About & RERA', d: 'Your team, registration and track record.' },
      { t: 'Contact & site visits', d: 'Office map, WhatsApp, call and site-visit form.' },
    ],
  },
  process: { heading: 'From first call to live website', steps: steps('We set up your first projects with you, then show you how to add new ones.') },
  pricing: {
    heading: 'Fixed prices for real estate websites',
    intro: 'Individual agents usually start with Starter. Firms with many listings or several projects need Growth or Premium for the listing system.',
    plans: [
      plan('Starter', '₹14,999', ['Up to 5 pages', 'Featured projects', 'WhatsApp enquiry buttons', 'Google Maps & local SEO setup', 'Free domain, hosting & SSL']),
      plan('Growth', '₹29,999', ['Up to 10 pages', 'Listings you can update', 'Project detail pages', 'Location pages & blog', '3 months support'], true, 'Most firms'),
      plan('Premium', '₹49,999', ['Up to 20 pages', 'Search & filters', 'Custom design', 'Content migration', '6 months support']),
    ],
    note: 'Need a full property portal with user accounts? We quote that separately after a call.',
  },
  faq: {
    heading: 'Questions realtors ask us',
    items: [
      { q: 'How much does a real estate website cost?', a: 'Our real estate websites start at ₹14,999 for up to 5 pages. Most firms choose the ₹29,999 Growth plan, which adds listings you can update yourself and a page for each project. You get a fixed quote after a free 30-minute call.' },
      { q: 'Can I add and update properties myself?', a: 'Yes. On Growth and Premium you get a simple admin panel to add projects, photos, prices and floor plans, and mark units as sold, without touching code.' },
      { q: 'Will it show my RERA details?', a: 'Yes. We add your agent or project RERA registration numbers where they apply, on project pages and in the footer, so buyers can verify them.' },
      { q: 'Can it bring leads without paying portals?', a: 'That is the goal. Project and location pages built for searches like “2 BHK in Noida Extension” can rank on Google over time and bring enquiries that are not shared with other brokers. It usually takes a few months of consistent pages and Google reviews to build up.' },
      { q: 'How quickly can it go live?', a: 'A Starter site goes live in about 7 days once we have your project details and photos. A Growth site with listings usually takes 2–3 weeks.' },
    ],
  },
  tone: 'blue',
  whatsappMessage: "Hi! I'm in real estate and need a website for my listings. Can we discuss?",
};

/* ------------------------------------------------------------------ */

const interiors: IndustryData = {
  slug: 'interiors',
  path: '/interior-designer-website-design',
  name: 'Interior designers & architects',
  meta: {
    title: 'Website Design for Interior Designers & Architects | WebAlchemy',
    description:
      'Portfolio websites for interior designers, architects, furniture stores and modular kitchen brands. 23+ built across Gurugram, Noida and Delhi. From ₹14,999.',
  },
  h1: ['Portfolio websites for ', 'interior designers', ' & architects'],
  lede:
    'From architecture studios in Gurugram and Noida to furniture showrooms in Kirti Nagar and modular kitchen brands in Faridabad, we build sites that let your projects sell your work.',
  glance: [
    { k: 'Starting price', v: '₹14,999' },
    { k: 'Typical timeline', v: '7–21 days' },
    { k: 'Built around', v: 'Your project photos' },
  ],
  match: (p) => p.category === 'Interiors',
  work: {
    heading: 'Design studio websites we have built',
    intro: 'Architects, interior studios, furniture stores and modular kitchen companies across Delhi NCR.',
  },
  problems: {
    heading: 'Why beautiful work still gets few enquiries',
    intro: 'Clients hire designers on taste and trust. These issues stop good portfolios from turning into briefs.',
    items: [
      { t: 'Slow, heavy galleries', d: 'Uncompressed project photos make sites crawl on mobile. Visitors leave before they see your best work.' },
      { t: 'Photos with no story', d: 'A grid of images doesn’t say what the brief was, the budget range, the area or the timeline. Case-study pages do, and they rank.' },
      { t: 'No sense of budget', d: 'Clients worry about cost. Without starting prices or typical project sizes, many never send the first message.' },
      { t: 'Instagram-only presence', d: 'Instagram brings followers. Google brings people searching “interior designer in Gurgaon” today, with a project in mind.' },
    ],
  },
  included: {
    heading: 'What every design-studio website includes',
    intro: 'A fast, editorial portfolio that shows your work at its best and makes enquiring easy.',
    items: [
      { t: 'Project case studies', d: 'One page per project: brief, area, style, before/after and a gallery that loads fast on phones.', bullets: ['Filter by residential, commercial, hospitality', 'Full-screen gallery', 'Add new projects yourself'] },
      { t: 'Clear enquiry path', d: 'Consultation form asking for property type, area and budget range, plus WhatsApp and call buttons.' },
      { t: 'Service pages that rank', d: 'Separate pages for full home interiors, modular kitchens, office fit-outs or architecture, so each can rank on its own.' },
      { t: 'Instagram integration', d: 'Your latest posts on the site, and the site linked from your profile.' },
      { t: 'Studio story', d: 'Team, philosophy, process and press, so clients trust you with their home.' },
      { t: 'Image performance', d: 'Modern image formats and lazy loading keep it fast. 90+ mobile PageSpeed at launch, guaranteed.' },
    ],
  },
  pages: {
    heading: 'A typical studio site map',
    intro: 'Most studios need 6–12 pages plus a page per featured project.',
    items: [
      { t: 'Home', d: 'Signature projects, your style and a clear call to book a consultation.' },
      { t: 'Projects', d: 'Filterable portfolio with a case study for each.' },
      { t: 'Services', d: 'Residential, commercial, turnkey, consultancy or product lines.' },
      { t: 'Process & pricing', d: 'How you work and typical budget ranges.' },
      { t: 'Studio', d: 'Team, philosophy, awards and press.' },
      { t: 'Contact', d: 'Studio address, map and consultation form.' },
    ],
  },
  process: { heading: 'From first call to live website', steps: steps('We pick your strongest projects together and plan how each case study is told.') },
  pricing: {
    heading: 'Fixed prices for design-studio websites',
    intro: 'Solo designers usually start with Starter. Studios with many projects choose Growth so they can add case studies themselves.',
    plans: [
      plan('Starter', '₹14,999', ['Up to 5 pages', 'Portfolio gallery', 'Consultation form & WhatsApp', 'Local SEO setup', 'Free domain, hosting & SSL']),
      plan('Growth', '₹29,999', ['Up to 10 pages', 'Project case-study pages', 'Add projects yourself', 'Blog & advanced SEO', '3 months support'], true, 'Most studios'),
      plan('Premium', '₹49,999', ['Up to 20 pages', 'Fully custom design', 'Product catalogue (furniture/kitchens)', 'Content migration', '6 months support']),
    ],
    note: 'Selling furniture or décor online? See our e-commerce plans.',
  },
  faq: {
    heading: 'Questions designers ask us',
    items: [
      { q: 'How much does a website for an interior designer cost?', a: 'Our design-studio websites start at ₹14,999 for up to 5 pages with a portfolio gallery. Most studios choose the ₹29,999 Growth plan to get a case-study page per project that they can add to themselves.' },
      { q: 'Can I add new projects myself?', a: 'Yes. On Growth and Premium you upload photos and write a short description in a simple admin panel. We resize and compress images automatically so the site stays fast.' },
      { q: 'Will my photos be compressed badly?', a: 'No. We use modern formats (WebP/AVIF) at high quality and serve the right size for each screen, so images look sharp on retina displays while still loading quickly.' },
      { q: 'Can you build a catalogue for furniture or modular kitchens?', a: 'Yes. We can add a product catalogue with enquiry buttons, or a full online store if you want to take payments.' },
      { q: 'Do you work with studios outside Delhi NCR?', a: 'Yes. We work with design studios across India over WhatsApp and video calls.' },
    ],
  },
  tone: 'violet',
  whatsappMessage: "Hi! I'm an interior designer / architect looking for a portfolio website. Can we discuss?",
};

/* ------------------------------------------------------------------ */

const manufacturing: IndustryData = {
  slug: 'manufacturing',
  path: '/manufacturing-company-website-design',
  name: 'Manufacturers & exporters',
  meta: {
    title: 'Website Design for Manufacturers, Exporters & B2B | WebAlchemy',
    description:
      'B2B websites for manufacturers, exporters, printers and logistics firms that bring RFQs and dealer enquiries. 26+ industrial sites built. From ₹14,999.',
  },
  h1: ['Websites for ', 'manufacturers', ' that bring in RFQs'],
  lede:
    'Packaging units in Faridabad, auto-component and engineering firms in Manesar, garment exporters and printers in Okhla, logistics and solar companies. We build B2B websites that make buyers and dealers comfortable sending a requirement.',
  glance: [
    { k: 'Starting price', v: '₹14,999' },
    { k: 'Typical timeline', v: '7–21 days' },
    { k: 'Leads to', v: 'RFQ form & WhatsApp' },
  ],
  match: (p) => p.category === 'Manufacturing',
  work: {
    heading: 'Industrial and B2B websites we have built',
    intro: 'Manufacturers, exporters, printers, logistics and solar companies across Delhi NCR.',
  },
  problems: {
    heading: 'Why B2B buyers skip a manufacturer’s website',
    intro: 'Procurement teams shortlist suppliers online before they call. These gaps get you dropped from the list.',
    items: [
      { t: 'Products aren’t listed properly', d: 'Buyers search for a specific product and specification. A single “Products” image with no detail can’t rank or answer their questions.' },
      { t: 'No proof of capability', d: 'Capacity, machinery, certifications (ISO, BIS), and industries served are what make a buyer trust a new supplier.' },
      { t: 'Hard to send a requirement', d: 'Buyers want to send quantity, specs and drawings. Without an RFQ form, they go back to IndiaMART where they found five competitors.' },
      { t: 'Looks outdated', d: 'A site that hasn’t changed since 2012 suggests a business that hasn’t either, especially to export buyers.' },
    ],
  },
  included: {
    heading: 'What every manufacturer website includes',
    intro: 'A credible, fast B2B site built to rank for your products and convert buyers into RFQs.',
    items: [
      { t: 'Product & category pages', d: 'A page per product line with specifications, applications, sizes and images, so each can rank for the exact product buyers search.', bullets: ['Spec tables', 'Downloadable catalogue / datasheets', 'Update products yourself'] },
      { t: 'RFQ / quote request form', d: 'Collects product, quantity, specs and file uploads, and sends it to your sales team on email and WhatsApp.' },
      { t: 'Capability & infrastructure', d: 'Plant, machinery, capacity, quality process and certifications presented clearly.' },
      { t: 'Industries & clients served', d: 'Pages for the industries you supply, with client logos where you have permission.' },
      { t: 'Export-ready', d: 'Clean English copy, international number formats, and optional multi-language pages.' },
      { t: 'Fast and secure', d: 'SSL, spam protection on forms, and 90+ mobile PageSpeed at launch, guaranteed.' },
    ],
  },
  pages: {
    heading: 'A typical manufacturer site map',
    intro: 'Most B2B sites need 8–20 pages depending on the number of product lines.',
    items: [
      { t: 'Home', d: 'What you make, who you supply, capacity and a clear RFQ button.' },
      { t: 'Product categories', d: 'One page per product line with specifications.' },
      { t: 'Infrastructure', d: 'Plant, machinery, quality control and certifications.' },
      { t: 'Industries served', d: 'Who uses your products and how.' },
      { t: 'About', d: 'History, leadership and values.' },
      { t: 'Contact / RFQ', d: 'Factory and office addresses, maps and the quote form.' },
    ],
  },
  process: { heading: 'From first call to live website', steps: steps('We work from your catalogue and spec sheets so product details stay correct.') },
  pricing: {
    heading: 'Fixed prices for manufacturer websites',
    intro: 'Small units start with Starter. Most manufacturers with several product lines choose Growth or Premium.',
    plans: [
      plan('Starter', '₹14,999', ['Up to 5 pages', 'Product overview', 'RFQ form & WhatsApp', 'Local SEO setup', 'Free domain, hosting & SSL']),
      plan('Growth', '₹29,999', ['Up to 10 pages', 'Product category pages', 'Catalogue downloads', 'Advanced SEO', '3 months support'], true, 'Most manufacturers'),
      plan('Premium', '₹49,999', ['Up to 20 pages', 'Full product catalogue', 'Multi-language', 'Content migration', '6 months support']),
    ],
    note: 'Need a dealer portal or ERP integration? We quote that separately after a call.',
  },
  faq: {
    heading: 'Questions manufacturers ask us',
    items: [
      { q: 'How much does a website for a manufacturing company cost?', a: 'Our manufacturer websites start at ₹14,999 for up to 5 pages. Companies with several product lines usually choose the ₹29,999 Growth plan or the ₹49,999 Premium plan for a full catalogue. You get a fixed quote after a free 30-minute call.' },
      { q: 'Can buyers send drawings or specifications?', a: 'Yes. The RFQ form accepts file uploads (PDF, DWG exports, images) and sends them to your sales email along with a WhatsApp alert.' },
      { q: 'Will it help me get leads outside IndiaMART?', a: 'That is the aim. Product pages built for the exact names and specifications buyers search can rank on Google and bring enquiries directly to you. Most companies keep IndiaMART too and link their listing to the website.' },
      { q: 'Can we update products ourselves?', a: 'Yes. On Growth and Premium you can add products, specs and images from an admin panel.' },
      { q: 'Do you build websites for exporters?', a: 'Yes. We have built sites for garment and handicraft exporters. We can add multi-language pages and make the site fast for overseas visitors.' },
    ],
  },
  tone: 'amber',
  whatsappMessage: "Hi! We're a manufacturing company looking for a new website. Can we discuss?",
};

export const INDUSTRIES: IndustryData[] = [clinics, realEstate, interiors, manufacturing];

export const getIndustry = (slug: string) => {
  const i = INDUSTRIES.find((x) => x.slug === slug);
  if (!i) throw new Error(`Unknown industry: ${slug}`);
  return i;
};

export const industryProjects = (i: IndustryData) => projectsData.filter(i.match);
