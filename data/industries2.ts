import type { IndustryData } from './industries';
import { plan, steps } from './industryShared';

/* Second batch of industry pages. Same rules as data/industries.ts:
   real client sites only (counted live from data/projectsData), home-page
   plan prices, no invented results. */

/* ------------------------------------------------------------------ */

const caLaw: IndustryData = {
  slug: 'ca-law',
  path: '/website-for-ca-and-law-firms',
  name: 'CA & law firms',
  meta: {
    title: 'Website Design for CA Firms & Law Firms in India | WebAlchemy',
    description:
      'Professional websites for chartered accountants and law firms: practice-area pages, enquiry forms and local SEO, written to stay within ICAI and Bar Council guidelines. From ₹14,999.',
  },
  h1: ['Websites for ', 'CA & law firms', ' that clients trust'],
  lede:
    'We have built websites for chartered accountant firms in Noida and law firms in Delhi, including Saket. Clear, information-first sites that explain what you handle and make it easy for the right clients to reach you.',
  glance: [
    { k: 'Starting price', v: '₹14,999' },
    { k: 'Typical timeline', v: '7–21 days' },
    { k: 'Tone', v: 'Information-first' },
  ],
  match: (p) => /chartered accountant|law firm/i.test(p.metric ?? ''),
  work: {
    heading: 'CA and law firm websites we have built',
    intro: 'Chartered accountant firms across Noida and law firms in Delhi.',
  },
  problems: {
    heading: 'Why professional firms lose enquiries online',
    intro: 'People look up a CA or advocate before they call, often after a referral. These gaps make them call someone else.',
    items: [
      { t: 'No list of what you handle', d: 'A visitor with a GST notice or a property dispute wants to see that exact matter on your site. A one-line “We offer all services” does not tell them.' },
      { t: 'Partners are faceless', d: 'Clients hire people. Names, qualifications, membership or enrolment details and years of practice build trust before the first call.' },
      { t: 'Hard to make contact', d: 'No phone number on mobile, an email that bounces, or a form nobody checks. Each one loses a client who was ready to engage you.' },
      { t: 'Marketing that breaks the rules', d: 'Testimonials, “best CA in Noida” claims or rankings can conflict with professional conduct guidelines. A good site informs instead of advertising.' },
    ],
  },
  included: {
    heading: 'What every CA or law firm website includes',
    intro: 'A calm, credible site that answers the question a client arrives with, and stays within your profession’s guidelines.',
    items: [
      { t: 'Practice-area pages', d: 'A page for each area you handle (GST, income tax, audit, company incorporation; or civil, criminal, property, family law) explaining scope and process.', bullets: ['Written in plain language', 'Ranks for the matter people search', 'You approve every word'] },
      { t: 'Partner and team profiles', d: 'Qualifications, ICAI membership or Bar enrolment details, and areas of focus for each partner.' },
      { t: 'Simple, private enquiry form', d: 'Name, contact and a short description of the matter, delivered to your inbox and WhatsApp. No documents collected through the site.' },
      { t: 'Knowledge and updates', d: 'An optional section for due-date reminders, budget changes or legal updates, which also helps you rank.' },
      { t: 'Guideline-conscious content', d: 'Information only: no client testimonials, rankings or claims of superiority. We follow your instructions on what your body permits.' },
      { t: 'Local SEO and speed', d: 'Office location, Google Maps, consistent contact details, and 90+ mobile PageSpeed at launch, guaranteed.' },
    ],
  },
  pages: {
    heading: 'A typical firm site map',
    intro: 'Most firms need 6–12 pages, depending on how many practice areas you list.',
    items: [
      { t: 'Home', d: 'Who you are, the areas you handle and how to reach you.' },
      { t: 'Practice areas', d: 'One page per area, with what is involved and typical documents needed.' },
      { t: 'Partners & team', d: 'Profiles, qualifications and registration details.' },
      { t: 'Knowledge / updates', d: 'Due dates, circulars and explainers (optional).' },
      { t: 'About the firm', d: 'History, offices and the industries you serve.' },
      { t: 'Contact', d: 'Office address, map, hours and enquiry form.' },
    ],
  },
  process: { heading: 'From first call to live website', steps: steps('You review every practice-area page for accuracy and compliance before launch.') },
  pricing: {
    heading: 'Fixed prices for CA and law firm websites',
    intro: 'Sole practitioners usually start with Starter. Firms with several partners and practice areas choose Growth.',
    plans: [
      plan('Starter', '₹14,999', ['Up to 5 pages', 'Practice-area overview', 'Enquiry form & WhatsApp', 'Local SEO setup', 'Free domain, hosting & SSL']),
      plan('Growth', '₹29,999', ['Up to 10 pages', 'Page per practice area', 'Updates / blog section', 'Advanced SEO', '3 months support'], true, 'Most firms'),
      plan('Premium', '₹49,999', ['Up to 20 pages', 'Multiple offices', 'Custom design', 'Content migration', '6 months support']),
    ],
    note: 'You are responsible for confirming that your site’s content meets your professional body’s current guidelines; we build to your instructions.',
  },
  faq: {
    heading: 'Questions CAs and lawyers ask us',
    items: [
      { q: 'Can a CA firm or law firm have a website in India?', a: 'Yes. Both CA firms and advocates can have websites, but the content is restricted: it should give information about the firm rather than solicit work. ICAI and the Bar Council of India publish guidelines on what may be included, and you should confirm the current rules before launch. We build information-first sites and follow your instructions on content.' },
      { q: 'How much does a website for a CA firm cost?', a: 'Our CA and law firm websites start at ₹14,999 for up to 5 pages. Firms that want a page per practice area and an updates section usually choose the ₹29,999 Growth plan.' },
      { q: 'Can you show client reviews on the site?', a: 'We generally leave testimonials and ratings off professional-firm websites, because they can conflict with professional conduct guidelines. Your Google Business Profile is a better place for reviews.' },
      { q: 'Do you write the practice-area content?', a: 'We draft it from a short call with you, in plain language, and you review and approve every page so the technical and legal details stay accurate.' },
      { q: 'How quickly can it go live?', a: 'A Starter site goes live in about 7 days once we have your details. A Growth site with separate practice-area pages usually takes 2–3 weeks.' },
    ],
  },
  tone: 'ink',
  whatsappMessage: "Hi! I run a CA / law firm and need a website. Can we discuss?",
};

/* ------------------------------------------------------------------ */

const jewellers: IndustryData = {
  slug: 'jewellers',
  path: '/jewellery-website-design',
  name: 'Jewellers',
  meta: {
    title: 'Jewellery Website Design for Jewellers & Showrooms | WebAlchemy',
    description:
      'Websites for jewellers: collection catalogues, WhatsApp enquiries on every piece, hallmark details and showroom visits. Built for jewellers in Karol Bagh. From ₹14,999.',
  },
  h1: ['Jewellery websites that bring buyers ', 'into the showroom', ''],
  lede:
    'We have built websites for jewellers in Karol Bagh, Delhi. Buyers browse your collections at home, ask about a piece on WhatsApp, and walk in already knowing what they want to see.',
  glance: [
    { k: 'Starting price', v: '₹14,999' },
    { k: 'Typical timeline', v: '7–21 days' },
    { k: 'Enquiries via', v: 'WhatsApp per piece' },
  ],
  match: (p) => /jewel/i.test(p.metric ?? ''),
  work: {
    heading: 'Jeweller websites we have built',
    intro: 'Family jewellers and showrooms in Karol Bagh, Delhi.',
  },
  problems: {
    heading: 'Why jewellery buyers skip a jeweller’s website',
    intro: 'Most jewellery purchases start on a phone, weeks before the showroom visit. These gaps send buyers to the chain brands instead.',
    items: [
      { t: 'No collections online', d: 'Buyers want to see bridal sets, solitaires or daily-wear pieces before they visit. A site with a logo and an address gives them nothing to browse.' },
      { t: 'No way to ask about a piece', d: 'If a buyer can’t tap a piece and ask its weight or price on WhatsApp, the enquiry never happens.' },
      { t: 'Trust isn’t visible', d: 'Hallmarking, purity, exchange and buyback policies, and years in business are what make buyers comfortable with a family jeweller.' },
      { t: 'Photos that don’t do the work justice', d: 'Dark, heavy images load slowly and hide the detail. Good jewellery photos need careful compression to stay sharp and fast.' },
    ],
  },
  included: {
    heading: 'What every jeweller website includes',
    intro: 'A rich, fast catalogue that turns browsing into showroom visits and WhatsApp enquiries.',
    items: [
      { t: 'Collection catalogue', d: 'Gold, diamond, polki, silver or bridal collections, each with photos and details you can update yourself.', bullets: ['Filter by category and occasion', 'Add new pieces from your phone', 'Optional price on request'] },
      { t: 'WhatsApp on every piece', d: 'An “Ask about this piece” button that opens WhatsApp with the product name and photo link pre-filled.' },
      { t: 'Trust and policies', d: 'Hallmarking and purity details, exchange and buyback policy, and your family history, presented clearly.' },
      { t: 'Showroom visit booking', d: 'A short form to book a visit or a video call, with the request sent to your phone.' },
      { t: 'Custom design enquiries', d: 'A form for custom pieces with reference photo upload, so you get the brief before the first meeting.' },
      { t: 'Fast, sharp images', d: 'Modern image formats and zoom on product photos. 90+ mobile PageSpeed at launch, guaranteed.' },
    ],
  },
  pages: {
    heading: 'A typical jeweller site map',
    intro: 'Most jewellers need 6–12 pages plus the catalogue.',
    items: [
      { t: 'Home', d: 'Signature collections, your story and visit/WhatsApp buttons.' },
      { t: 'Collections', d: 'Category pages with a detail page per piece.' },
      { t: 'Bridal', d: 'A dedicated page for wedding buyers and families.' },
      { t: 'Custom design', d: 'How it works and the enquiry form.' },
      { t: 'Policies', d: 'Hallmarking, exchange, buyback and care.' },
      { t: 'Visit us', d: 'Showroom address, map, timings and parking.' },
    ],
  },
  process: { heading: 'From first call to live website', steps: steps('We plan your first collections with you and show you how to add new pieces.') },
  pricing: {
    heading: 'Fixed prices for jeweller websites',
    intro: 'Single showrooms usually start with Growth so they can add pieces themselves. Want to sell online with payments? See our e-commerce plans.',
    plans: [
      plan('Starter', '₹14,999', ['Up to 5 pages', 'Featured collections gallery', 'WhatsApp enquiry buttons', 'Local SEO setup', 'Free domain, hosting & SSL']),
      plan('Growth', '₹29,999', ['Up to 10 pages', 'Catalogue up to 50 pieces', 'Add pieces yourself', 'Visit booking & custom design form', '3 months support'], true, 'Most jewellers'),
      plan('Premium', '₹49,999', ['Up to 20 pages', 'Catalogue up to 200 pieces', 'Custom design', 'Multi-language', '6 months support']),
    ],
    note: 'Online payments and checkout are available on our e-commerce plans.',
  },
  faq: {
    heading: 'Questions jewellers ask us',
    items: [
      { q: 'How much does a jewellery website cost?', a: 'Our jeweller websites start at ₹14,999. Most showrooms choose the ₹29,999 Growth plan, which includes a catalogue of up to 50 pieces that you can update yourself.' },
      { q: 'Should I show prices on the website?', a: 'Many jewellers show “price on request” because gold prices change daily, and use the WhatsApp button for the current price. We can show fixed prices, starting prices, or none, piece by piece.' },
      { q: 'Can I add new designs myself?', a: 'Yes. On Growth and Premium you can add pieces with photos and details from an admin panel, including from your phone.' },
      { q: 'Can customers buy online?', a: 'Yes, if you want to. Our e-commerce plans add a cart, payments and shipping. Many jewellers start with a catalogue and add online payments later.' },
      { q: 'Will my photos look good?', a: 'We compress images carefully and add zoom on product pages so detail stays sharp. If you don’t have good photos yet, we can suggest a simple setup for shooting pieces in the showroom.' },
    ],
  },
  tone: 'amber',
  whatsappMessage: "Hi! I'm a jeweller and need a website for my collections. Can we discuss?",
};

/* ------------------------------------------------------------------ */

const restaurants: IndustryData = {
  slug: 'restaurants',
  path: '/restaurant-bakery-website-design',
  name: 'Restaurants & bakeries',
  meta: {
    title: 'Restaurant, Café & Bakery Website Design | WebAlchemy',
    description:
      'Websites for restaurants, cafés, bakeries and caterers: menus, direct WhatsApp orders, cake enquiries and table bookings. Built for food businesses across Delhi NCR. From ₹14,999.',
  },
  h1: ['Websites for ', 'restaurants & bakeries', ' that take orders directly'],
  lede:
    'We have built websites for bakeries and cake shops in Gurugram, restaurants in Hauz Khas and Sector 29, cafés and caterers. Customers see your menu, order or enquire on WhatsApp, and you keep the full margin.',
  glance: [
    { k: 'Starting price', v: '₹14,999' },
    { k: 'Typical timeline', v: '7–21 days' },
    { k: 'Orders via', v: 'WhatsApp, call, form' },
  ],
  match: (p) => /bakery|cake|restaurant|caf[eé]|caterer|sweets/i.test(p.metric ?? ''),
  work: {
    heading: 'Food business websites we have built',
    intro: 'Bakeries, cake shops, restaurants, cafés, caterers and sweet shops across Delhi NCR.',
  },
  problems: {
    heading: 'Why food businesses depend on aggregator apps',
    intro: 'Delivery apps bring orders but take a large commission on each one. Without your own site, every repeat customer goes through them too.',
    items: [
      { t: 'No menu online', d: 'People decide what to eat by looking at a menu. A PDF that won’t open on mobile, or no menu at all, sends them back to the app.' },
      { t: 'No direct way to order', d: 'Regulars would happily order directly on WhatsApp or call you, but they can’t find your number quickly.' },
      { t: 'Custom orders get lost', d: 'Cakes, catering and party bookings need details: flavours, date, headcount. A missed call loses a high-value order.' },
      { t: 'Hard to find on Google Maps', d: '“Bakery near me” and “café in Gurgaon” are map searches. Your website and Business Profile need to back each other up to show there.' },
    ],
  },
  included: {
    heading: 'What every restaurant or bakery website includes',
    intro: 'A mouth-watering, fast site built for hungry people on phones.',
    items: [
      { t: 'Menu you can update', d: 'Your full menu with photos, prices and dietary tags, easy to change when prices or dishes do.', bullets: ['Veg / non-veg / eggless tags', 'Update from your phone', 'No PDFs'] },
      { t: 'Direct orders on WhatsApp', d: 'An order button that opens WhatsApp with the items pre-filled, so you take orders without commission.' },
      { t: 'Custom cake and catering forms', d: 'Flavour, weight, message, date, headcount and reference photos collected in one enquiry.' },
      { t: 'Table and party bookings', d: 'A booking request form for tables, birthdays and private events.' },
      { t: 'Find-us essentials', d: 'Google Maps, timings, delivery areas, FSSAI licence number and links to your app listings.' },
      { t: 'Fast on mobile', d: 'Food photos compressed for 4G. 90+ mobile PageSpeed at launch, guaranteed.' },
    ],
  },
  pages: {
    heading: 'A typical food business site map',
    intro: 'Most restaurants and bakeries need 5–10 pages.',
    items: [
      { t: 'Home', d: 'Signature dishes, timings and an order button.' },
      { t: 'Menu', d: 'Every item with photos, prices and tags.' },
      { t: 'Custom cakes / catering', d: 'How custom orders work and the enquiry form.' },
      { t: 'Book a table / party', d: 'Booking requests for tables and events.' },
      { t: 'Gallery', d: 'Food, interiors and events.' },
      { t: 'Contact & delivery', d: 'Map, timings, delivery areas and app links.' },
    ],
  },
  process: { heading: 'From first call to live website', steps: steps('We set up your menu with you and show you how to change prices and dishes.') },
  pricing: {
    heading: 'Fixed prices for restaurant and bakery websites',
    intro: 'Single outlets usually start with Starter. Bakeries with large menus or several outlets choose Growth.',
    plans: [
      plan('Starter', '₹14,999', ['Up to 5 pages', 'Menu page', 'WhatsApp ordering button', 'Google Maps & local SEO setup', 'Free domain, hosting & SSL']),
      plan('Growth', '₹29,999', ['Up to 10 pages', 'Menu you update yourself', 'Cake / catering / booking forms', 'Advanced SEO', '3 months support'], true, 'Most outlets'),
      plan('Premium', '₹49,999', ['Up to 20 pages', 'Multiple outlets', 'Custom design', 'Online payments-ready', '6 months support']),
    ],
    note: 'Want a full online ordering system with payments? See our e-commerce plans.',
  },
  faq: {
    heading: 'Questions restaurant and bakery owners ask us',
    items: [
      { q: 'How much does a restaurant website cost?', a: 'Our restaurant and bakery websites start at ₹14,999 for up to 5 pages, including the first year of domain and hosting. Most outlets with custom cakes or catering choose the ₹29,999 Growth plan for the enquiry forms and a menu they can update.' },
      { q: 'Can customers order directly without Swiggy or Zomato?', a: 'Yes. The simplest setup is a WhatsApp order button with the items pre-filled, which costs you no commission. If you want online payment and a cart, our e-commerce plans add that.' },
      { q: 'Can I still keep my Swiggy and Zomato listings?', a: 'Yes. Most food businesses keep their app listings and link them from the website, while regulars order directly.' },
      { q: 'Can I change menu prices myself?', a: 'Yes. On Growth and Premium you can edit dishes, photos and prices from an admin panel.' },
      { q: 'How quickly can it go live?', a: 'A Starter site goes live in about 7 days once we have your menu and photos. Growth sites usually take 2–3 weeks.' },
    ],
  },
  tone: 'rust',
  whatsappMessage: "Hi! I run a restaurant / bakery and need a website. Can we discuss?",
};

/* ------------------------------------------------------------------ */

const education: IndustryData = {
  slug: 'education',
  path: '/school-coaching-website-design',
  name: 'Schools & coaching',
  meta: {
    title: 'Website Design for Schools, Coaching Centres & Academies | WebAlchemy',
    description:
      'Websites for schools, preschools, coaching institutes and music academies: admission enquiries, course and fee pages, mandatory disclosures and demo-class booking. From ₹14,999.',
  },
  h1: ['Websites for ', 'schools & coaching', ' that fill admissions'],
  lede:
    'We have built websites for schools in Dwarka and Vikaspuri, coaching institutes in Laxmi Nagar, a preschool and several music academies. Parents and students find the answers they need and send an admission enquiry in one step.',
  glance: [
    { k: 'Starting price', v: '₹14,999' },
    { k: 'Typical timeline', v: '7–21 days' },
    { k: 'Leads to', v: 'Admission enquiries' },
  ],
  match: (p) => p.category === 'Educational',
  work: {
    heading: 'School and coaching websites we have built',
    intro: 'Schools, a preschool, coaching institutes and music academies across Delhi.',
  },
  problems: {
    heading: 'Why admission enquiries go to other institutes',
    intro: 'Parents compare several schools or coaching centres online before they visit one. These gaps knock you off their shortlist.',
    items: [
      { t: 'Key facts are missing', d: 'Fees, timings, batches, transport, faculty and results are what parents and students look for first. If they can’t find them, they call someone else.' },
      { t: 'Admissions are hard to start', d: 'A downloadable PDF form and an office phone number that rings out is not an admission process.' },
      { t: 'Outdated notices', d: 'Last year’s admission dates or an old calendar make the whole institution look neglected.' },
      { t: 'Compliance pages missing', d: 'CBSE-affiliated schools are expected to publish mandatory disclosures on their website. Missing or broken disclosure pages are a problem with parents and with the board.' },
    ],
  },
  included: {
    heading: 'What every school or coaching website includes',
    intro: 'A clear, up-to-date site that answers parents’ and students’ questions and turns them into enquiries.',
    items: [
      { t: 'Admission enquiry flow', d: 'A short enquiry form (student name, class or course, phone) delivered to your admissions team on email and WhatsApp.', bullets: ['Class / course dropdown', 'Campus visit or demo-class booking', 'Optional online application'] },
      { t: 'Courses, classes and fees', d: 'A page per course or wing with batches, timings, syllabus and fee structure you can update each session.' },
      { t: 'Notices and calendar', d: 'An announcements section and academic calendar your staff can update without calling a developer.' },
      { t: 'Mandatory disclosure section', d: 'For affiliated schools, a structured page for the documents and details the board requires, kept easy to update.' },
      { t: 'Faculty and results', d: 'Teacher profiles and real results or achievements, with permission where students are named.' },
      { t: 'Gallery and campus tour', d: 'Photos and video of facilities and events, compressed to load fast on parents’ phones.' },
    ],
  },
  pages: {
    heading: 'A typical school or coaching site map',
    intro: 'Coaching centres usually need 6–12 pages; schools 10–20, including disclosures.',
    items: [
      { t: 'Home', d: 'Who you are, admissions status and the enquiry button.' },
      { t: 'Admissions', d: 'Process, eligibility, fees and the enquiry form.' },
      { t: 'Courses / classes', d: 'Batches, timings, syllabus and faculty.' },
      { t: 'Results & achievements', d: 'Toppers, competitions and placements, with permission.' },
      { t: 'Notices & calendar', d: 'Announcements, holidays and events.' },
      { t: 'Contact & visit', d: 'Campus address, map, transport routes and timings.' },
    ],
  },
  process: { heading: 'From first call to live website', steps: steps('We set up admissions and notices with your staff so they can keep them current.') },
  pricing: {
    heading: 'Fixed prices for school and coaching websites',
    intro: 'Coaching centres and academies usually start with Starter or Growth. Schools with disclosures and several wings usually need Premium.',
    plans: [
      plan('Starter', '₹14,999', ['Up to 5 pages', 'Admission enquiry form', 'Course / class overview', 'Local SEO setup', 'Free domain, hosting & SSL']),
      plan('Growth', '₹29,999', ['Up to 10 pages', 'Course pages & fee structure', 'Notices you update yourself', 'Advanced SEO', '3 months support'], true, 'Coaching & academies'),
      plan('Premium', '₹49,999', ['Up to 20 pages', 'Mandatory disclosure section', 'Multi-wing / multi-campus', 'Content migration', '6 months support']),
    ],
    note: 'Need a student portal, online fee payment or results login? We quote that separately after a call.',
  },
  faq: {
    heading: 'Questions schools and institutes ask us',
    items: [
      { q: 'How much does a school website cost?', a: 'Our education websites start at ₹14,999 for up to 5 pages. Coaching centres usually choose the ₹29,999 Growth plan; schools with mandatory disclosures and several wings usually choose the ₹49,999 Premium plan.' },
      { q: 'Can you set up the mandatory public disclosure page?', a: 'Yes. We create a structured disclosure section and upload the documents and details you provide. Please confirm the current list your board requires; we keep the page easy for your staff to update.' },
      { q: 'Can staff update notices and fees themselves?', a: 'Yes. On Growth and Premium your staff can post notices, update the calendar and change fee details from an admin panel.' },
      { q: 'Can parents apply or pay fees online?', a: 'Admission enquiries are included. A full online application or fee payment can be added; we scope it after a call because it depends on your process and payment gateway.' },
      { q: 'How quickly can it go live?', a: 'A Starter site goes live in about 7 days. Larger school websites with disclosures usually take 3–5 weeks, mostly depending on how quickly documents are ready.' },
    ],
  },
  tone: 'blue',
  whatsappMessage: "Hi! We're a school / coaching institute and need a website. Can we discuss?",
};

/* ------------------------------------------------------------------ */

const fitness: IndustryData = {
  slug: 'fitness',
  path: '/gym-salon-website-design',
  name: 'Gyms, yoga studios & salons',
  meta: {
    title: 'Website Design for Gyms, Yoga Studios & Salons | WebAlchemy',
    description:
      'Websites for gyms, fitness studios, yoga centres and salons: class schedules, membership and service menus, trial bookings and WhatsApp appointments. From ₹14,999.',
  },
  h1: ['Websites for ', 'gyms, yoga studios & salons', ' that book trials'],
  lede:
    'We have built websites for yoga studios in Gurugram, luxury gyms and fitness studios in Greater Kailash, and salons in Noida and Greater Noida. Visitors see your classes, services and prices, then book a trial or appointment on WhatsApp.',
  glance: [
    { k: 'Starting price', v: '₹14,999' },
    { k: 'Typical timeline', v: '7–21 days' },
    { k: 'Bookings via', v: 'WhatsApp, call, form' },
  ],
  match: (p) => p.category === 'Wellness',
  work: {
    heading: 'Fitness and salon websites we have built',
    intro: 'Yoga studios, gyms, fitness studios and salons across Delhi NCR.',
  },
  problems: {
    heading: 'Why fitness and beauty businesses miss bookings',
    intro: 'People pick a gym, studio or salon close to them, on their phone, often the same day. These gaps send them to the next result.',
    items: [
      { t: 'No schedule or service menu', d: 'Class timings, trainers, services and starting prices are the first things people look for. Instagram posts don’t answer them.' },
      { t: 'Booking takes effort', d: 'If booking a trial or appointment means sending a DM and waiting, most people never do it.' },
      { t: 'Memberships aren’t explained', d: 'Monthly, quarterly and annual plans, what each includes and whether there’s a joining fee should be clear before someone visits.' },
      { t: 'Invisible on “near me” searches', d: '“Gym near me” and “salon in Noida” are map searches. Your site and Business Profile need to match to show up.' },
    ],
  },
  included: {
    heading: 'What every gym, studio or salon website includes',
    intro: 'An energetic, fast site that shows what you offer and gets people booked in.',
    items: [
      { t: 'Trial and appointment booking', d: 'A free-trial, class or appointment request that goes straight to your WhatsApp, with the service and time pre-filled.', bullets: ['Book a free trial class', 'Choose a service and stylist', 'Optional Calendly or booking-app link'] },
      { t: 'Class schedule and services', d: 'Weekly timetable, class types and trainers; or a salon service menu with starting prices.' },
      { t: 'Membership plans', d: 'Plans, what each includes and current offers, all easy for you to update.' },
      { t: 'Trainers and stylists', d: 'Profiles with certifications and specialities, so people book the right person.' },
      { t: 'Transformations and gallery', d: 'Before/after photos and studio images, shown only with your clients’ consent.' },
      { t: 'Local SEO and speed', d: 'Google Maps, timings, parking and 90+ mobile PageSpeed at launch, guaranteed.' },
    ],
  },
  pages: {
    heading: 'A typical gym, studio or salon site map',
    intro: 'Most need 5–10 pages.',
    items: [
      { t: 'Home', d: 'What you offer, a hero offer and the booking button.' },
      { t: 'Classes / services', d: 'Timetable or service menu with starting prices.' },
      { t: 'Memberships / packages', d: 'Plans and what each includes.' },
      { t: 'Trainers / team', d: 'Profiles and specialities.' },
      { t: 'Gallery', d: 'Studio, classes, results and work.' },
      { t: 'Contact', d: 'Address, map, timings and booking form.' },
    ],
  },
  process: { heading: 'From first call to live website', steps: steps('We set up your schedule or service menu with you and show you how to update it.') },
  pricing: {
    heading: 'Fixed prices for gym, studio and salon websites',
    intro: 'Single studios and salons usually start with Starter. Gyms with several programmes or branches choose Growth.',
    plans: [
      plan('Starter', '₹14,999', ['Up to 5 pages', 'Services or class overview', 'WhatsApp booking button', 'Google Maps & local SEO setup', 'Free domain, hosting & SSL']),
      plan('Growth', '₹29,999', ['Up to 10 pages', 'Timetable / service menu you update', 'Membership plans & offers', 'Advanced SEO', '3 months support'], true, 'Most studios'),
      plan('Premium', '₹49,999', ['Up to 20 pages', 'Multiple branches', 'Custom design', 'Online payments-ready', '6 months support']),
    ],
    note: 'Want online membership payments or a booking system with slots? We can integrate one; ask on the call.',
  },
  faq: {
    heading: 'Questions gym, studio and salon owners ask us',
    items: [
      { q: 'How much does a gym or salon website cost?', a: 'Our gym, studio and salon websites start at ₹14,999 for up to 5 pages. Most choose the ₹29,999 Growth plan so they can update the timetable, services and offers themselves.' },
      { q: 'Can clients book appointments online?', a: 'Yes. By default we add WhatsApp, call and form bookings, which most studios prefer. If you use a booking app or Calendly, we can link or embed it.' },
      { q: 'Should I show prices on my website?', a: 'Showing starting prices usually brings better-qualified enquiries. You can show full prices, “from” prices, or none, and change them any time.' },
      { q: 'Can I post offers myself?', a: 'Yes. On Growth and Premium you can update offers, plans and the schedule from an admin panel.' },
      { q: 'How quickly can it go live?', a: 'A Starter site goes live in about 7 days once we have your photos and details. Growth sites usually take 2–3 weeks.' },
    ],
  },
  tone: 'green',
  whatsappMessage: "Hi! I run a gym / studio / salon and need a website. Can we discuss?",
};

export const INDUSTRIES_2: IndustryData[] = [caLaw, jewellers, restaurants, education, fitness];
