import type { BlogPost } from './blogPosts';
import { AUTHOR } from '@/lib/site';

/* Pricing guides: the searches people make right before they hire someone
   ("website cost in India", "ecommerce website price"…). Market ranges are
   labelled as ranges; WebAlchemy prices are the ones published on the site
   (home pricing, /ecommerce-website-development, /starter-offer). */

const PUBLISHED = { date: 'Oct 23, 2026', iso: '2026-10-23' };

const INDUSTRY_LINKS: Extract<BlogPost['body'][number], { type: 'links' }> = {
  type: 'links',
  heading: 'Website cost by industry',
  items: [
    { label: 'Doctors & clinics', href: '/website-for-doctors-and-clinics', text: 'treatment pages, doctor profiles, WhatsApp booking' },
    { label: 'Real estate', href: '/real-estate-website-design', text: 'listings, project pages, site-visit enquiries' },
    { label: 'Interior designers & architects', href: '/interior-designer-website-design', text: 'portfolio and project case studies' },
    { label: 'Manufacturers & exporters', href: '/manufacturing-company-website-design', text: 'product catalogue and RFQ forms' },
  ],
};

const websiteCost: BlogPost = {
  id: 'cost-1',
  slug: 'website-development-cost-india',
  title: 'How much does a website cost in India? (2026 price guide)',
  seoTitle: 'Website Development Cost in India (2026): Real Prices by Type',
  excerpt:
    'From ₹5,000 template sites to ₹1 lakh+ custom builds: what a website costs in India in 2026, what drives the price, and the yearly costs most quotes leave out.',
  category: 'Pricing',
  date: PUBLISHED.date,
  isoDate: PUBLISHED.iso,
  author: AUTHOR.name,
  authorBio: AUTHOR.bio,
  readTime: '9 min read',
  image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600',
  body: [
    { type: 'p', text: 'Short answer: a professional small-business website in India usually costs **₹15,000 to ₹50,000** as a one-time build, plus roughly ₹3,000 to ₹8,000 a year for the domain and hosting. A basic template site from a freelancer can cost under ₹10,000. Custom-built sites with bookings, logins or integrations start around ₹1 lakh.' },
    { type: 'p', text: 'The range is wide because "a website" can mean a one-page profile or a full sales system. Below is what each type typically costs, what pushes the price up, the yearly costs nobody quotes upfront, and exactly what we charge.' },

    { type: 'h2', id: 'by-type', text: 'Website cost in India by type' },
    {
      type: 'table',
      head: ['Type of website', 'Typical one-time cost', 'Pages', 'Timeline'],
      rows: [
        ['Basic template site (freelancer)', '₹5,000 – ₹15,000', '1–5', '3–10 days'],
        ['Small business website', '₹15,000 – ₹35,000', '5–10', '1–3 weeks'],
        ['Larger business / corporate site', '₹35,000 – ₹1,00,000', '10–30', '3–6 weeks'],
        ['E-commerce store', '₹25,000 – ₹1,50,000+', 'Depends on catalogue', '3–8 weeks'],
        ['Custom web application', '₹1,00,000 – ₹10,00,000+', '—', '6 weeks +'],
      ],
      caption: 'Rough market ranges in India, 2026. Quotes vary a lot by who builds the site and what is included, so compare the inclusions, not just the headline price.',
    },

    { type: 'h2', id: 'drivers', text: 'What actually drives the price' },
    {
      type: 'ul',
      items: [
        { lead: 'Number of unique page designs.', text: 'Ten pages that share one layout cost far less than ten pages that each need their own design.' },
        { lead: 'Template or custom design.', text: 'A customised theme is cheaper and faster. A design made from scratch for your brand takes longer and costs more, but looks like no one else.' },
        { lead: 'Who writes the content.', text: 'If you supply text and photos, the price stays low. Professional copywriting typically adds ₹15,000 to ₹40,000 for a full site.' },
        { lead: 'Features.', text: 'Online booking, payments, multiple languages, CRM or WhatsApp API integrations, member logins and calculators all add development time.' },
        { lead: 'Platform.', text: 'WordPress and Shopify are quicker to build on. Custom code (React, Next.js) costs more upfront but gives you full control and speed.' },
        { lead: 'Who builds it.', text: 'Freelancers are cheapest, large agencies the most expensive. Small studios sit in between with a process and support.' },
        { lead: 'SEO and speed work.', text: 'A site built to rank (structure, schema, fast loading, local SEO setup) takes more effort than one that only looks good.' },
      ],
    },

    { type: 'h2', id: 'yearly', text: 'The yearly costs most quotes leave out' },
    { type: 'p', text: 'The build is a one-time cost, but every website has running costs. Before you sign, ask: "What will I pay in year two?"' },
    {
      type: 'table',
      head: ['Item', 'Typical yearly cost', 'Notes'],
      rows: [
        ['Domain (.in or .com)', '₹600 – ₹1,500', 'First-year offers are often cheap; check the renewal price.'],
        ['Hosting', '₹2,000 – ₹8,000', 'Shared hosting is fine for most small sites; stores need more.'],
        ['SSL certificate', 'Free – ₹5,000', 'Free SSL is perfectly fine for most businesses.'],
        ['Business email', '₹0 – ₹2,000 per user', 'Google Workspace or Zoho; some hosts include basic mail.'],
        ['Maintenance & updates', '₹0 – ₹36,000', 'Updates, backups and small content changes.'],
        ['Paid plugins / themes', '₹0 – ₹10,000', 'Renewals for premium WordPress plugins, if used.'],
      ],
    },
    { type: 'p', text: 'We break these down further in our guide to [website maintenance costs](/blog/website-maintenance-cost-india).' },

    { type: 'h2', id: 'our-prices', text: 'What we charge at WebAlchemy' },
    { type: 'p', text: 'Our prices are published and fixed. Every plan is a one-time payment, and Starter and Growth include the domain, hosting and SSL for the first year.' },
    {
      type: 'table',
      head: ['Plan', 'Price (one-time)', 'Pages', 'Best for'],
      rows: [
        ['Starter', '₹14,999', 'Up to 5', 'Small businesses, portfolios and landing pages. Live in 7 days.'],
        ['Growth', '₹29,999', 'Up to 10', 'Blog/CMS, e-commerce ready (50 products), advanced SEO.'],
        ['Premium', '₹49,999', 'Up to 20', 'Redesigns, custom UI/UX, 200 products, multi-language.'],
        ['Enterprise', 'Custom quote', 'Unlimited', 'CRM/ERP integrations, dedicated project manager.'],
      ],
      caption: 'Hosting renewal on the Starter plan after year one: ₹2,999/year.',
    },
    { type: 'p', text: 'Two promises are written into every quote: your launch date, with **10% off for every week we are late**, and a **90+ Google PageSpeed score on mobile** at launch, or we optimise it free.' },
    { type: 'cta', heading: 'Want an exact number for your website?', text: 'Tell us what you need on a free 30-minute call and get a fixed quote and launch date in writing.', label: 'Get a fixed quote', href: '/contact' },

    { type: 'h2', id: 'who-builds', text: 'Freelancer, agency or DIY website builder?' },
    {
      type: 'ul',
      items: [
        { lead: 'DIY builders (Wix, Shopify, Squarespace, etc.).', text: 'Low upfront cost, but monthly subscriptions add up over the years and the time cost is yours. Good if you enjoy doing it yourself.' },
        { lead: 'Freelancer.', text: 'Usually the cheapest custom option. Check live sites they have built, and make sure the domain and hosting are registered in your name in case they become unavailable later.' },
        { lead: 'Studio or agency.', text: 'Costs more than a freelancer, but you get a team, a process, a written timeline and someone accountable for support after launch.' },
      ],
    },

    { type: 'h2', id: 'avoid', text: 'How to avoid overpaying (or underpaying)' },
    {
      type: 'ol',
      items: [
        { lead: 'Own your domain.', text: 'It should be registered in your name, with the login shared with you.' },
        { lead: 'Get inclusions in writing.', text: 'Number of pages, rounds of revisions, who writes content, SEO setup, and months of free support.' },
        { lead: 'Ask for year-two costs.', text: 'A ₹4,999 website with a ₹9,999 yearly renewal is not cheap.' },
        { lead: 'Open their past work on your phone.', text: 'Most of your visitors will be on mobile. If their sites are slow there, yours will be too.' },
        { lead: 'Insist on admin access.', text: 'You should be able to log in, edit text and add pages without depending on the developer.' },
        { lead: 'Pay in stages.', text: 'A deposit to start and the balance at launch is standard. We take 50% upfront and 50% when the site goes live.' },
      ],
    },

    INDUSTRY_LINKS,

    {
      type: 'faq',
      heading: 'Website cost: common questions',
      items: [
        { q: 'What is the minimum cost of a website in India?', a: 'A basic one-page or template site can be built for ₹5,000 to ₹10,000. For a professional small-business site with your own domain, about 5 pages, mobile design and basic SEO, budget around ₹15,000 to ₹30,000. Our Starter plan is ₹14,999 including the first year of domain and hosting.' },
        { q: 'Is ₹15,000 enough for a business website?', a: 'For most small businesses, such as a clinic, shop or consultant, yes, as long as the site is around 5 pages and you provide the photos and basic text. Online payments, bookings or many service pages need a larger budget.' },
        { q: 'Why do quotes for the same website vary so much?', a: 'Quotes differ in what is included: custom design versus a template, content writing, SEO setup, number of revisions, support period and who hosts the site. Ask every provider for a written list of inclusions and year-two costs, then compare like for like.' },
        { q: 'Do I have to pay for a website every year?', a: 'The build is a one-time cost. The domain and hosting renew every year, typically ₹3,000 to ₹8,000 for a small site, and maintenance is optional. On our Starter plan, the first year is included and hosting renewal is ₹2,999 a year after that.' },
        { q: 'How long does it take to build a website?', a: 'A Starter website goes live in about 7 days once your content is ready. A 10-page site usually takes 2 to 3 weeks, and an e-commerce store or redesign 3 to 5 weeks.' },
        { q: 'Is WordPress cheaper than a custom website?', a: 'Usually, yes. WordPress has ready-made themes and plugins, so standard business sites are faster to build. Custom-coded sites cost more upfront but can be faster and more flexible. We recommend the platform based on what your business needs, not a default.' },
      ],
    },
  ],
};

const ecommerceCost: BlogPost = {
  id: 'cost-2',
  slug: 'ecommerce-website-cost-india',
  title: 'E-commerce website cost in India (2026): Shopify vs WooCommerce vs custom',
  seoTitle: 'E-commerce Website Cost in India (2026): Shopify vs WooCommerce vs Custom',
  excerpt:
    'What an online store really costs in India: the build, platform fees, payment gateway charges and shipping, plus a side-by-side of Shopify, WooCommerce and custom.',
  category: 'Pricing',
  date: PUBLISHED.date,
  isoDate: PUBLISHED.iso,
  author: AUTHOR.name,
  authorBio: AUTHOR.bio,
  readTime: '8 min read',
  image: '/portfolio-screenshots/clients/vistaaram-vercel-app.jpg',
  body: [
    { type: 'p', text: 'Short answer: a small online store in India (up to about 50 products) usually costs **₹25,000 to ₹60,000** to build. Larger catalogues and custom features run from ₹60,000 to ₹2 lakh and more. On top of that come running costs: hosting or a platform subscription, payment gateway fees on every order, and shipping.' },
    { type: 'p', text: 'This guide covers what the build costs, how Shopify, WooCommerce and custom stores compare, and the monthly costs that decide whether your store is actually profitable.' },

    { type: 'h2', id: 'build', text: 'E-commerce build cost by store size' },
    {
      type: 'table',
      head: ['Store size', 'Products', 'Typical build cost', 'Timeline'],
      rows: [
        ['Starter store', 'Up to 50', '₹25,000 – ₹40,000', '2–4 weeks'],
        ['Growing brand', '50 – 500', '₹40,000 – ₹1,00,000', '3–6 weeks'],
        ['Large catalogue or custom flows', '500 +', '₹1,00,000 +', '6 weeks +'],
      ],
      caption: 'Rough market ranges in India, 2026. Product data entry and photography are often quoted separately.',
    },

    { type: 'h2', id: 'platforms', text: 'Shopify vs WooCommerce vs custom' },
    {
      type: 'table',
      head: ['', 'Shopify', 'WooCommerce (WordPress)', 'Custom (e.g. Next.js)'],
      rows: [
        ['Upfront build cost', 'Low – medium', 'Low – medium', 'Highest'],
        ['Monthly platform fee', 'Yes, plus paid apps', 'No; you pay for hosting', 'No; hosting only'],
        ['Transaction fees', 'Gateway fees; check whether Shopify adds its own', 'Gateway fees only', 'Gateway fees only'],
        ['Ease of running', 'Easiest', 'Easy once set up', 'Depends on the admin built'],
        ['Flexibility', 'Limited by themes and apps', 'Very flexible', 'Unlimited'],
        ['Best for', 'D2C brands that want to launch fast', 'Most Indian SMEs; content + store', 'Unique checkout flows, very high traffic'],
      ],
      caption: 'Platform pricing changes often. Check Shopify’s and your hosting provider’s current India pricing before you decide.',
    },
    { type: 'p', text: 'For most small and mid-sized Indian businesses we recommend WooCommerce or Shopify. Custom stores make sense when you need something the platforms can’t do well, such as B2B pricing tiers, complex product configurators or deep ERP integration.' },

    { type: 'h2', id: 'running', text: 'Running costs most people forget' },
    {
      type: 'ul',
      items: [
        { lead: 'Payment gateway fees.', text: 'Razorpay, PayU, Cashfree and CCAvenue typically charge around 2% per transaction on standard domestic plans, more for international cards. Check each provider’s current rates and settlement times.' },
        { lead: 'Shipping and COD.', text: 'Shipping aggregators charge per shipment, plus a COD fee. Returns (RTO) on COD orders can quietly eat your margin.' },
        { lead: 'Hosting.', text: 'A WooCommerce store needs better hosting than a brochure site, typically ₹5,000 to ₹15,000 a year for a small store.' },
        { lead: 'Apps and plugins.', text: 'Reviews, WhatsApp notifications, invoicing and abandoned-cart tools are often paid monthly.' },
        { lead: 'Product photography and data entry.', text: 'Good photos sell. Budget for them, or for someone to upload and describe your catalogue.' },
        { lead: 'Marketing.', text: 'A store with no traffic makes no sales. Plan for SEO, social media or ads from day one.' },
      ],
    },

    { type: 'h2', id: 'drivers', text: 'What pushes the build cost up' },
    {
      type: 'ul',
      items: [
        { text: 'Number of products and variants (sizes, colours, materials).' },
        { text: 'COD, multiple payment gateways and EMI options.' },
        { text: 'Shipping integration with automatic rates and tracking.' },
        { text: 'GST-compliant invoices and B2B (wholesale) pricing.' },
        { text: 'Inventory sync with a physical store, POS or ERP.' },
        { text: 'Subscriptions, gift cards, loyalty points or custom product builders.' },
      ],
    },

    { type: 'h2', id: 'our-prices', text: 'What we charge for online stores' },
    {
      type: 'table',
      head: ['Plan', 'Price (one-time)', 'Products', 'Includes'],
      rows: [
        ['Starter Store', '₹24,999', 'Up to 50', 'Payment integration, mobile design, basic SEO, 3 months support'],
        ['Growth Store', '₹49,999', 'Up to 500', 'Multiple gateways, shipping integration, advanced SEO, 6 months support'],
        ['Enterprise', 'Custom quote', 'Unlimited', 'Custom features, integrations, dedicated support'],
      ],
    },
    { type: 'p', text: 'See everything that is included on our [e-commerce website development](/ecommerce-website-development) page, or our [WordPress and WooCommerce](/wordpress-development) options.' },
    { type: 'cta', heading: 'Planning an online store?', text: 'Share your product count and how you want to take payments. We will suggest a platform and send a fixed quote.', label: 'Get a store quote', href: '/contact' },

    { type: 'h2', id: 'checklist', text: 'Before you build: a quick checklist' },
    {
      type: 'ol',
      items: [
        { text: 'GST registration and a current account for gateway settlements.' },
        { text: 'Return, refund, shipping and privacy policies (payment gateways ask for these).' },
        { text: 'Product photos, names, prices and descriptions in a spreadsheet.' },
        { text: 'A decision on COD and which pin codes you ship to.' },
        { text: 'A plan for your first 100 orders: who you will market to, and how.' },
      ],
    },

    {
      type: 'faq',
      heading: 'E-commerce cost: common questions',
      items: [
        { q: 'How much does an e-commerce website cost in India?', a: 'A small store with up to about 50 products usually costs ₹25,000 to ₹60,000 to build. Stores with hundreds of products or custom features cost ₹60,000 to ₹2 lakh or more. Our Starter Store is ₹24,999 and our Growth Store (up to 500 products) is ₹49,999.' },
        { q: 'Is Shopify or WooCommerce cheaper in India?', a: 'WooCommerce has no platform fee, so it is often cheaper to run long term; you pay for hosting and any premium plugins. Shopify has a monthly subscription and paid apps, but is easier to manage yourself. The right choice depends on your product count, how hands-on you want to be and the features you need.' },
        { q: 'What are payment gateway charges in India?', a: 'Most major gateways charge around 2% per successful transaction on standard domestic plans, with higher rates for international cards and some payment methods. Rates change and can be negotiated at higher volumes, so check current pricing with each provider.' },
        { q: 'Can you add COD and shipping integration?', a: 'Yes. We can enable cash on delivery and connect a shipping aggregator so rates, labels and tracking update automatically.' },
        { q: 'How long does it take to build an online store?', a: 'A Starter Store typically takes 2 to 4 weeks, depending mostly on how quickly product data and photos are ready. Larger stores take 3 to 6 weeks.' },
      ],
    },
  ],
};

const maintenanceCost: BlogPost = {
  id: 'cost-3',
  slug: 'website-maintenance-cost-india',
  title: 'Website maintenance cost in India: what you should pay every year',
  seoTitle: 'Website Maintenance Cost in India (2026): Hosting, Domain & AMC Charges',
  excerpt:
    'Domain, hosting, SSL, backups, updates and AMC plans: a clear breakdown of what it costs to keep a website running in India, and what you can skip.',
  category: 'Pricing',
  date: PUBLISHED.date,
  isoDate: PUBLISHED.iso,
  author: AUTHOR.name,
  authorBio: AUTHOR.bio,
  readTime: '6 min read',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
  body: [
    { type: 'p', text: 'Short answer: keeping a small business website online in India costs about **₹3,000 to ₹8,000 a year** for the domain and hosting. If you add a maintenance plan (updates, backups, security and small edits), expect roughly **₹12,000 to ₹40,000 a year** in total. E-commerce stores and busy sites cost more.' },

    { type: 'h2', id: 'breakdown', text: 'The yearly cost of running a website' },
    {
      type: 'table',
      head: ['Item', 'Typical yearly cost', 'Do you need it?'],
      rows: [
        ['Domain renewal', '₹600 – ₹1,500', 'Yes. Never let it lapse.'],
        ['Hosting', '₹2,000 – ₹8,000 (₹5,000 – ₹15,000 for stores)', 'Yes.'],
        ['SSL certificate', 'Free – ₹5,000', 'Yes, but free SSL is fine for most sites.'],
        ['Business email', '₹0 – ₹2,000 per user', 'Recommended.'],
        ['Backups & security monitoring', '₹0 – ₹6,000', 'Yes for WordPress and stores.'],
        ['Plugin / theme renewals', '₹0 – ₹10,000', 'Only if you use paid plugins.'],
        ['Maintenance / AMC plan', '₹12,000 – ₹36,000', 'Depends how often you change things.'],
      ],
      caption: 'Rough market ranges in India, 2026.',
    },

    { type: 'h2', id: 'includes', text: 'What website maintenance should include' },
    {
      type: 'ul',
      items: [
        { lead: 'Updates.', text: 'WordPress core, theme and plugin updates, tested so nothing breaks.' },
        { lead: 'Backups.', text: 'Automatic daily or weekly backups stored off the server, with a tested restore.' },
        { lead: 'Security.', text: 'Malware scanning, firewall, spam protection on forms, and quick clean-up if something goes wrong.' },
        { lead: 'Uptime and speed checks.', text: 'Alerts if the site goes down, and periodic speed tuning.' },
        { lead: 'Small content changes.', text: 'New photos, prices, team members, offers or a new page each month.' },
        { lead: 'Form and lead checks.', text: 'Making sure contact forms and WhatsApp buttons still deliver enquiries. A broken form costs more than any maintenance plan.' },
      ],
    },

    { type: 'h2', id: 'need-amc', text: 'Do you need an AMC (annual maintenance contract)?' },
    { type: 'p', text: 'You probably need one if your site runs on WordPress with several plugins, takes payments, or you update it every month and don’t want to do it yourself. You can probably skip it if your site is small, rarely changes, and your developer offers pay-per-change edits.' },

    { type: 'h2', id: 'signs', text: 'Signs your website isn’t being maintained' },
    {
      type: 'ul',
      items: [
        { text: 'The footer still shows a copyright year from years ago.' },
        { text: 'Your browser shows a “Not secure” warning.' },
        { text: 'Pages load slowly on mobile, or images are broken.' },
        { text: 'You stopped getting form enquiries and nobody noticed.' },
        { text: 'You don’t know who has the hosting and domain logins.' },
      ],
    },

    { type: 'h2', id: 'our-prices', text: 'What maintenance costs with WebAlchemy' },
    {
      type: 'ul',
      items: [
        { lead: 'Included support.', text: 'Every new site comes with free support: 1 month on Starter, 3 months on Growth and 6 months on Premium.' },
        { lead: 'Hosting renewal.', text: 'On the Starter plan, domain and hosting are free for the first year; hosting renews at ₹2,999 a year after that.' },
        { lead: 'Maintenance plans.', text: 'Basic upkeep plans start at ₹999 a month. Retainers that include regular content changes and new landing pages start at ₹3,000 a month.' },
        { lead: 'One-off changes.', text: 'Billed with a clear estimate upfront, so you only pay when you need something.' },
      ],
    },
    { type: 'cta', heading: 'Already have a website that needs looking after?', text: 'We take over existing WordPress and custom sites too. Get a free audit of speed, security and broken forms first.', label: 'Get a free website audit', href: '/contact' },

    { type: 'h2', id: 'save', text: 'Five ways to cut your yearly website costs' },
    {
      type: 'ol',
      items: [
        { text: 'Register the domain for several years at once, in your own name.' },
        { text: 'Use free SSL instead of paying for a certificate.' },
        { text: 'Remove plugins you don’t use; each one is a cost and a security risk.' },
        { text: 'Pick hosting sized for your traffic, not the most expensive plan.' },
        { text: 'Batch small edits into one monthly request instead of paying per change.' },
      ],
    },

    {
      type: 'faq',
      heading: 'Website maintenance: common questions',
      items: [
        { q: 'What is the yearly cost of maintaining a website in India?', a: 'For a small business site, about ₹3,000 to ₹8,000 a year covers the domain and hosting. With a maintenance plan for updates, backups and small edits, the total is usually ₹12,000 to ₹40,000 a year.' },
        { q: 'What happens if I don’t renew my domain?', a: 'Your website and email stop working, and after a grace period the domain can be bought by someone else. Turn on auto-renew and keep the domain registered in your own name.' },
        { q: 'Is hosting included in the website price?', a: 'It depends on the provider. On our Starter and Growth plans, domain, hosting and SSL are included for the first year.' },
        { q: 'Can you maintain a website you didn’t build?', a: 'Yes. We start with an audit of speed, security, backups and forms, then quote a maintenance plan based on what we find.' },
      ],
    },
  ],
};

export const COST_GUIDES: BlogPost[] = [websiteCost, ecommerceCost, maintenanceCost];
