import type { BlogPost } from './blogPosts';
import { AUTHOR } from '@/lib/site';

/* Weeks 1–4 of the 12-week blog plan. Each post targets a search made by
   someone close to hiring, links to at least two money pages, and uses
   only published prices and real client work — no invented numbers. */

const PUBLISHED = { date: 'Oct 23, 2026', iso: '2026-10-23' };
const unsplash = (photo: string) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&q=80&w=1600`;

const chooseDeveloper: BlogPost = {
  id: 'w1',
  slug: 'how-to-choose-website-developer-india',
  title: 'How to choose a website developer in India: 12 questions to ask',
  seoTitle: 'How to Choose a Website Developer in India: 12 Questions to Ask (2026)',
  excerpt:
    'Freelancer, studio or agency, the right questions separate a website that brings enquiries from one that quietly costs you. Here are the 12 we would ask if we were hiring.',
  category: 'Strategy',
  date: PUBLISHED.date,
  isoDate: PUBLISHED.iso,
  author: AUTHOR.name,
  authorBio: AUTHOR.bio,
  readTime: '8 min read',
  image: unsplash('photo-1519389950473-47ba0277781c'),
  body: [
    { type: 'p', text: 'Short answer: choose the developer whose **past websites load fast on your phone**, who puts **pages, price, timeline and ownership in writing**, and who can explain how the site will bring you enquiries, not just how it will look. The 12 questions below cover everything else.' },
    { type: 'p', text: 'Most bad website projects in India fail for the same few reasons: an unclear scope, a domain registered in the developer’s name, no plan for year two, and a site that looks fine on a laptop but crawls on a phone. Each question below is there to catch one of those early.' },

    { type: 'h2', id: 'work', text: 'Questions about their work' },
    {
      type: 'ol',
      items: [
        { lead: 'Can I see three live sites you built for businesses like mine?', text: 'Live links, not screenshots. Open them on your phone, on mobile data. If they are slow or broken there, yours will be too.' },
        { lead: 'Who exactly will build my site?', text: 'The person you speak to, a team, or a subcontractor? None is wrong, but you should know who to call when something breaks.' },
        { lead: 'Which platform do you recommend for me, and why?', text: 'A good developer picks WordPress, Shopify or custom code based on what you need, and can explain the trade-off in two sentences. See our [WordPress vs Shopify vs custom guide](/blog/wordpress-vs-shopify-vs-custom-website).' },
        { lead: 'How will this site bring me enquiries?', text: 'Listen for specifics: call and WhatsApp buttons on every page, short forms, service pages that rank, Google Business Profile setup, and tracking so you can count enquiries.' },
      ],
    },

    { type: 'h2', id: 'scope', text: 'Questions about price and scope' },
    {
      type: 'ol',
      items: [
        { lead: 'What is included in the price, in writing?', text: 'Number of pages, rounds of revisions, who writes the content, SEO setup, contact forms, speed work, and how many months of free support.' },
        { lead: 'What will I pay in year two?', text: 'Domain, hosting, maintenance and any paid plugins. A cheap build with an expensive yearly renewal is not cheap. Our [website cost guide](/blog/website-development-cost-india) lists typical yearly costs.' },
        { lead: 'What is the payment schedule?', text: 'A deposit to start and the balance at launch is normal. Be careful with 100% upfront. We take 50% to start and 50% when the site goes live.' },
        { lead: 'What is the launch date, and what happens if you miss it?', text: 'A real date, not “2–3 weeks, depending”. We write ours into the quote, with 10% off for every week we are late.' },
      ],
    },

    { type: 'h2', id: 'ownership', text: 'Questions about ownership and after launch' },
    {
      type: 'ol',
      items: [
        { lead: 'Will the domain be registered in my name?', text: 'It should be. The domain is your business address online; if it sits in someone else’s account, you can lose it.' },
        { lead: 'Will I get admin access?', text: 'You should be able to log in, change text and photos, and add pages without depending on the developer for every edit.' },
        { lead: 'How fast will the site be on mobile?', text: 'Ask for a number. We guarantee a 90+ Google PageSpeed score on mobile at launch, or we optimise it for free.' },
        { lead: 'Who fixes things after launch, and how quickly?', text: 'Get the support period and response time in writing, plus the price of help after it ends.' },
      ],
    },

    { type: 'cta', heading: 'Want these answers from us, in writing?', text: 'Book a free 30-minute call. You get a fixed quote with pages, price, launch date and support period spelled out.', label: 'Get a fixed quote', href: '/contact' },

    { type: 'h2', id: 'red-flags', text: 'Red flags to walk away from' },
    {
      type: 'ul',
      items: [
        { text: 'No live examples, or only mock-ups and templates.' },
        { text: 'A price that changes every time you ask what is included.' },
        { text: 'The domain and hosting “managed for you” with no login shared.' },
        { text: 'Guarantees of “page 1 on Google in 30 days”. Nobody can promise rankings.' },
        { text: 'No contract, no invoice, no GST details.' },
      ],
    },

    { type: 'h2', id: 'freelancer-or-agency', text: 'Freelancer or agency?' },
    { type: 'p', text: 'A freelancer is usually cheaper and fine for a simple site, if you check their work and keep ownership of the domain. A studio or agency costs more but brings a process, a team and accountability after launch. Either way, the 12 questions above protect you.' },

    {
      type: 'links',
      heading: 'If you know your industry',
      items: [
        { label: 'Doctors & clinics', href: '/website-for-doctors-and-clinics', text: 'what a clinic site needs' },
        { label: 'Real estate', href: '/real-estate-website-design', text: 'listings and site-visit enquiries' },
        { label: 'CA & law firms', href: '/website-for-ca-and-law-firms', text: 'information-first sites within guidelines' },
        { label: 'Restaurants & bakeries', href: '/restaurant-bakery-website-design', text: 'menus and direct orders' },
      ],
    },

    {
      type: 'faq',
      heading: 'Choosing a website developer: common questions',
      items: [
        { q: 'How do I find a good website developer in India?', a: 'Shortlist two or three from their live work, not their ads. Open sites they built on your phone, ask the 12 questions above, and compare written quotes on inclusions and year-two costs, not only price.' },
        { q: 'How much should a small business website cost?', a: 'A professional small-business website in India usually costs ₹15,000 to ₹50,000 one-time, plus domain and hosting each year. Our Starter plan is ₹14,999 including the first year of domain and hosting.' },
        { q: 'Is it better to hire a local developer?', a: 'Being in the same city helps if you want to meet in person, but most projects today run well over WhatsApp and video calls. Ownership, communication and a written scope matter more than distance.' },
        { q: 'What should be in a website development contract?', a: 'Scope (pages and features), price and payment schedule, launch date, revisions, who owns the domain and code, support period, and the cost of changes after launch.' },
      ],
    },
  ],
};

const platformCompare: BlogPost = {
  id: 'w2',
  slug: 'wordpress-vs-shopify-vs-custom-website',
  title: 'WordPress vs Shopify vs custom website: which should your business choose?',
  seoTitle: 'WordPress vs Shopify vs Custom Website (2026): Which Is Right for Your Business in India?',
  excerpt:
    'Each platform is the right answer for someone. A side-by-side of cost, control, ease of use and speed, and a simple way to decide in five minutes.',
  category: 'Development',
  date: PUBLISHED.date,
  isoDate: PUBLISHED.iso,
  author: AUTHOR.name,
  authorBio: AUTHOR.bio,
  readTime: '7 min read',
  image: unsplash('photo-1587620962725-abab7fe55159'),
  body: [
    { type: 'p', text: 'Short answer: choose **WordPress** for most business websites with a blog or many service pages, **Shopify** if selling products online is the main job and you want the easiest store to run, and a **custom build** when you need something the platforms do badly, like a booking engine, a portal or very high speed at scale.' },

    { type: 'h2', id: 'compare', text: 'Side by side' },
    {
      type: 'table',
      head: ['', 'WordPress', 'Shopify', 'Custom (e.g. Next.js)'],
      rows: [
        ['Best for', 'Business sites, blogs, WooCommerce stores', 'Online stores, D2C brands', 'Unique features, portals, high traffic'],
        ['Upfront cost', 'Low – medium', 'Low – medium', 'Highest'],
        ['Monthly platform fee', 'None (you pay hosting)', 'Yes, plus paid apps', 'None (you pay hosting)'],
        ['Ease of editing', 'Easy once set up', 'Easiest', 'Depends on the admin built'],
        ['Flexibility', 'Very high (plugins)', 'Medium (apps, themes)', 'Unlimited'],
        ['Speed', 'Good with care; plugins can slow it', 'Good', 'Excellent'],
        ['Maintenance', 'Updates & backups needed', 'Handled by Shopify', 'Low, but needs a developer'],
        ['You own', 'Everything', 'Content; platform is rented', 'Everything'],
      ],
      caption: 'General comparison for small and mid-sized businesses in India. Check current Shopify plan prices before you decide.',
    },

    { type: 'h2', id: 'wordpress', text: 'When WordPress is the right choice' },
    { type: 'p', text: 'WordPress runs a large share of the web for a reason: it is flexible, has a plugin for almost everything, and your team can edit pages without a developer. It suits clinics, schools, CA and law firms, manufacturers and service businesses that need many pages and a blog. The cost is upkeep: plugins and the core need regular updates, and a site overloaded with plugins gets slow.' },
    { type: 'p', text: 'With WooCommerce, WordPress also becomes a capable store with no platform fee. See our [WordPress and WooCommerce](/wordpress-development) packages.' },

    { type: 'h2', id: 'shopify', text: 'When Shopify is the right choice' },
    { type: 'p', text: 'Shopify is the fastest way to a reliable online store. Hosting, security and checkout are handled for you, and day-to-day running is simple. You pay a monthly subscription and often for apps, and you are limited to what themes and apps allow. It suits fashion, beauty, food and D2C brands where the store is the business.' },
    { type: 'p', text: 'Compare store costs in our [e-commerce website cost guide](/blog/ecommerce-website-cost-india).' },

    { type: 'h2', id: 'custom', text: 'When a custom build is worth it' },
    { type: 'p', text: 'A custom site (we build these with React and Next.js) costs more upfront but has no plugin bloat and no platform limits. It is worth it when you need custom logic: a booking or quote engine, a client portal, B2B pricing, complex integrations, or top speed at high traffic. For a standard 5–10 page business site, it is usually more than you need.' },

    { type: 'h2', id: 'decide', text: 'Decide in five minutes' },
    {
      type: 'ol',
      items: [
        { lead: 'Is selling products online the main job?', text: 'Yes, and you want the simplest setup: Shopify. Yes, and you also want lots of content or no monthly fee: WooCommerce.' },
        { lead: 'Do you need features no plugin does well?', text: 'Bookings with custom rules, portals, logins, calculators: custom.' },
        { lead: 'Otherwise', text: 'WordPress, built carefully so it stays fast.' },
      ],
    },

    { type: 'cta', heading: 'Not sure which fits?', text: 'Tell us what your site needs to do. We recommend a platform on the call and quote a fixed price.', label: 'Ask us which platform', href: '/contact' },

    {
      type: 'faq',
      heading: 'Platform questions',
      items: [
        { q: 'Is WordPress or Shopify better for a small business in India?', a: 'For a service business with no online store, WordPress is usually better. For a business whose main job is selling products online, Shopify is often the simplest to run, while WooCommerce avoids the monthly platform fee.' },
        { q: 'Is a custom website better for SEO?', a: 'Not automatically. Google ranks useful, fast, well-structured pages. A custom site can be faster, but a well-built WordPress site ranks just as well for most small businesses.' },
        { q: 'Can I move from Wix or another builder to WordPress later?', a: 'Yes. Pages and content can be migrated, and old URLs redirected so you keep your Google rankings. Our Premium plan includes content migration.' },
        { q: 'Which platform is cheapest over three years?', a: 'For most business sites, WordPress on reasonable hosting has the lowest running cost. Shopify adds monthly fees and apps; custom sites cost more upfront but have low running costs.' },
      ],
    },
  ],
};

const googleMaps: BlogPost = {
  id: 'w3',
  slug: 'google-business-profile-setup-guide',
  title: 'How to get your business on Google Maps: a Google Business Profile guide',
  seoTitle: 'How to Add Your Business on Google Maps (2026): Google Business Profile Setup Guide',
  excerpt:
    'A step-by-step guide to creating and verifying your Google Business Profile, the details that help you show up in “near me” searches, and the mistakes that hold most businesses back.',
  category: 'Marketing',
  date: PUBLISHED.date,
  isoDate: PUBLISHED.iso,
  author: AUTHOR.name,
  authorBio: AUTHOR.bio,
  readTime: '8 min read',
  image: unsplash('photo-1460925895917-afdab827c52f'),
  body: [
    { type: 'p', text: 'Short answer: create a free **Google Business Profile** at business.google.com, choose the right category, add your address or service area, verify it, then keep it complete and active with photos, posts and reviews. Google says local results are based on three things: **relevance, distance and prominence**.' },
    { type: 'p', text: 'For many local businesses, the Maps listing brings more calls than the website. The two work best together: the profile gets you found, and the website convinces people to contact you.' },

    { type: 'h2', id: 'setup', text: 'Step by step: create your profile' },
    {
      type: 'ol',
      items: [
        { lead: 'Search for your business first.', text: 'On Google Maps, search your business name. If a listing already exists, claim it instead of creating a duplicate. Two listings for one business hurt both.' },
        { lead: 'Go to business.google.com and add your business.', text: 'Use a Google account you will keep long term, ideally your business email.' },
        { lead: 'Pick your primary category carefully.', text: 'It is one of the strongest relevance signals. Choose what you are (“Website designer”, “Dentist”, “Bakery”), not a keyword list. Add a few secondary categories.' },
        { lead: 'Add your location or service area.', text: 'If customers visit you, add the exact address. If you go to them, hide the address and list the areas you serve.' },
        { lead: 'Add one phone number and your website.', text: 'Use the same number and business name as on your website. Consistency matters.' },
        { lead: 'Verify.', text: 'Google chooses the method for your business: commonly a short video of your premises and signage, sometimes phone, email or a postcard. Follow its instructions exactly.' },
      ],
    },

    { type: 'h2', id: 'rank', text: 'What helps you show up in “near me” searches' },
    {
      type: 'table',
      head: ['Factor', 'What Google looks at', 'What you can do'],
      rows: [
        ['Relevance', 'How well your profile matches the search', 'Right categories, full services list, clear description'],
        ['Distance', 'How close you are to the searcher', 'Accurate address or service areas (you can’t fake this)'],
        ['Prominence', 'How well known and trusted you are', 'Reviews, photos, a strong website, mentions on other sites'],
      ],
      caption: 'Based on Google’s published explanation of how local results are ranked.',
    },

    { type: 'h2', id: 'complete', text: 'Fill in everything' },
    {
      type: 'ul',
      items: [
        { lead: 'Services:', text: 'list each service with a one-line description.' },
        { lead: 'Hours:', text: 'regular and holiday hours. Wrong hours lose calls and trust.' },
        { lead: 'Photos:', text: 'storefront, interior, team and work, added regularly.' },
        { lead: 'Description:', text: 'what you do, for whom and where, in plain words. No phone numbers or links.' },
        { lead: 'Posts:', text: 'an offer, project or update every week or two keeps the profile active.' },
        { lead: 'WhatsApp / chat:', text: 'add your WhatsApp link so people can message you from the listing.' },
      ],
    },

    { type: 'h2', id: 'reviews', text: 'Reviews: the part you control most' },
    { type: 'p', text: 'Ask every happy customer, right after the job, with your direct review link (Profile → Ask for reviews). Reply to every review, good or bad, within a few days. Never buy reviews or offer rewards for them: it breaks Google’s rules and can get reviews removed or the profile suspended.' },

    { type: 'h2', id: 'mistakes', text: 'Common mistakes' },
    {
      type: 'ul',
      items: [
        { text: 'Keywords stuffed into the business name (“WebAlchemy Best Web Designer Delhi”). It is against the guidelines and risks suspension.' },
        { text: 'Different phone numbers on the profile and the website.' },
        { text: 'Duplicate listings for the same business.' },
        { text: 'A website link that goes to a slow or broken page.' },
        { text: 'Setting it up once and never touching it again.' },
      ],
    },

    { type: 'cta', heading: 'Want your website and profile working together?', text: 'Every site we build includes local SEO setup and a properly linked Google Business Profile.', label: 'Talk to us', href: '/contact' },

    {
      type: 'links',
      heading: 'Local pages',
      items: [
        { label: 'Website developer in Delhi', href: '/website-developer-delhi', text: 'local work in Delhi' },
        { label: 'Website developer in Noida', href: '/website-developer-noida', text: 'local work in Noida' },
        { label: 'Website developer in Gurgaon', href: '/website-developer-gurgaon', text: 'local work in Gurugram' },
        { label: 'Digital marketing & SEO', href: '/services/digital-marketing', text: 'ongoing local SEO' },
      ],
    },

    {
      type: 'faq',
      heading: 'Google Maps listing: common questions',
      items: [
        { q: 'Is a Google Business Profile free?', a: 'Yes. Creating and managing a Google Business Profile is free. Google Ads are a separate, paid product.' },
        { q: 'How long does verification take?', a: 'It depends on the method Google chooses. Video and phone verification can be reviewed within days; a postcard can take a couple of weeks. Edits after verification are usually reviewed within minutes to a few days.' },
        { q: 'Can I list my business without a shop or office?', a: 'Yes. Service-area businesses can hide their address and list the areas they serve instead.' },
        { q: 'Why is my business not showing on Google Maps?', a: 'Common reasons are an unverified or suspended profile, a category that doesn’t match the search, being far from the searcher, or few reviews compared with competitors nearby.' },
        { q: 'Do I need a website if I have a Google Business Profile?', a: 'The profile gets you found; the website convinces people. A fast website with clear services and prices also strengthens your profile’s prominence.' },
      ],
    },
  ],
};

const redesignSigns: BlogPost = {
  id: 'w4',
  slug: 'website-redesign-signs',
  title: 'Website redesign: 12 signs your site is costing you customers',
  seoTitle: 'Website Redesign: 12 Signs Your Website Is Costing You Customers (2026)',
  excerpt:
    'An outdated website rarely fails loudly. It just stops bringing enquiries. Twelve signs it is time for a redesign, how to check each one in minutes, and what a redesign should fix.',
  category: 'Design',
  date: PUBLISHED.date,
  isoDate: PUBLISHED.iso,
  author: AUTHOR.name,
  authorBio: AUTHOR.bio,
  readTime: '7 min read',
  image: unsplash('photo-1550684848-fac1c5b4e853'),
  body: [
    { type: 'p', text: 'Short answer: redesign when your site is **slow or awkward on a phone**, **doesn’t make it easy to contact you**, or **no longer matches what you sell**. If three or more of the signs below apply, a redesign will usually pay for itself in enquiries.' },

    { type: 'h2', id: 'check', text: 'Check your site in 10 minutes' },
    { type: 'p', text: 'Open your website on your phone, on mobile data, and run it through Google’s free PageSpeed Insights. Then go through the list below honestly. Each sign has a quick test.' },

    { type: 'h2', id: 'mobile', text: 'Signs 1–4: it fails on mobile' },
    {
      type: 'ol',
      items: [
        { lead: 'It takes more than 3 seconds to load on your phone.', text: 'Many visitors leave before a slow page finishes loading. Test: PageSpeed Insights, mobile tab.' },
        { lead: 'You have to pinch and zoom.', text: 'Text too small, buttons too close together, or tables that run off the screen.' },
        { lead: 'Your phone number isn’t one tap away.', text: 'On mobile, calling and WhatsApp should be visible on every page.' },
        { lead: 'Pop-ups cover the page.', text: 'Intrusive pop-ups on mobile annoy visitors and can hurt how Google sees the page.' },
      ],
    },

    { type: 'h2', id: 'enquiries', text: 'Signs 5–8: it doesn’t bring enquiries' },
    {
      type: 'ol',
      items: [
        { lead: 'Your forms are long, or nobody checks them.', text: 'Test: submit your own form today and see where it goes.' },
        { lead: 'Visitors can’t tell what you do in 5 seconds.', text: 'Ask someone who doesn’t know your business to look at the homepage and say what you offer.' },
        { lead: 'There are no prices, process or proof.', text: 'Starting prices, how you work, and real examples are what move people to contact you.' },
        { lead: 'You can’t say how many enquiries it brings.', text: 'If there is no tracking for calls, WhatsApp and forms, you are guessing.' },
      ],
    },

    { type: 'h2', id: 'outdated', text: 'Signs 9–12: it’s out of date' },
    {
      type: 'ol',
      items: [
        { lead: 'It no longer matches what you sell.', text: 'New services, old ones you stopped, wrong prices or a team that has changed.' },
        { lead: 'You can’t update it yourself.', text: 'Every small change needs a developer, so nothing gets changed.' },
        { lead: 'The browser shows “Not secure”.', text: 'No SSL certificate. Visitors and Google both notice.' },
        { lead: 'It looks older than your competitors’ sites.', text: 'Open the top three competitors on Google next to yours. Be honest.' },
      ],
    },

    { type: 'cta', heading: 'Want a second opinion on your site?', text: 'We will review your current website for speed, mobile usability and enquiry flow, free, and tell you whether a redesign is worth it.', label: 'Get a free website audit', href: '/contact' },

    { type: 'h2', id: 'fix', text: 'What a redesign should fix' },
    {
      type: 'ul',
      items: [
        { lead: 'Speed:', text: 'a fast, mobile-first build. We guarantee 90+ mobile PageSpeed at launch.' },
        { lead: 'Structure:', text: 'a page per service, so each can rank for what people search.' },
        { lead: 'Enquiry flow:', text: 'call, WhatsApp and short forms on every page, with tracking.' },
        { lead: 'SEO continuity:', text: 'old URLs redirected to the new ones so you keep your rankings.' },
        { lead: 'Control:', text: 'an admin panel so your team can update text, photos and prices.' },
      ],
    },

    { type: 'h2', id: 'cost', text: 'What a redesign costs' },
    { type: 'p', text: 'Our Premium plan, ₹49,999 one-time, is built for redesigns: up to 20 pages, custom UI/UX, content migration from your old site and 6 months of support. Smaller sites can often be redesigned on the ₹29,999 Growth plan. See the full breakdown in our [website cost guide](/blog/website-development-cost-india).' },

    {
      type: 'faq',
      heading: 'Website redesign: common questions',
      items: [
        { q: 'How often should a business website be redesigned?', a: 'There is no fixed rule. Many businesses need a redesign every 3 to 5 years, or sooner when the site is slow on mobile, can’t be updated, or no longer matches what the business sells.' },
        { q: 'Will a redesign hurt my Google rankings?', a: 'Not if it is done carefully. Keep or redirect old URLs, carry over content that ranks, and keep page titles and headings relevant. Rankings often improve when speed and structure get better.' },
        { q: 'Should I redesign or start a new website?', a: 'If your domain has history and some rankings, keep the domain and redesign the site on it, redirecting old pages. A brand-new domain starts from zero.' },
        { q: 'How long does a website redesign take?', a: 'Most redesigns take 3 to 5 weeks, depending on the number of pages and how quickly content and feedback come back.' },
      ],
    },
  ],
};

export const PLAN_POSTS: BlogPost[] = [chooseDeveloper, platformCompare, googleMaps, redesignSigns];
