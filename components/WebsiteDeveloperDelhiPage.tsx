import React, { useEffect, useState } from 'react';
import {
  ArrowRight, CheckCircle2, MapPin, Phone, MessageCircle,
  Code2, Palette, ShoppingCart, Zap, Clock, Users, Shield,
  Search, Rocket, Headphones, IndianRupee
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { MockupInterface } from './Visuals';
import ClientLogos from './ClientLogos';
import Contact from './Contact';
import ServiceFormPopup from './ServiceFormPopup';
import {
  BreadcrumbNav,
  FaqSection,
  TestimonialStrip,
  CaseStudyCard,
  CaseStudyGrid,
  ServiceAreaBlock,
  CtaBanner,
} from './seo';

// ==========================================================================
// WebsiteDeveloperDelhiPage — comprehensive landing page targeting
// "website developer delhi" / "web developer in delhi"
// ==========================================================================

const WebsiteDeveloperDelhiPage: React.FC = () => {
  const [showFormPopup, setShowFormPopup] = useState(false);

  // ---------- Meta tags + structured data ----------
  useEffect(() => {
    document.title =
      'Website Developer in Delhi | Custom Web Development — WebAlchemy';

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Delhi-based website developer building custom WordPress & React sites that rank and convert. 50+ projects delivered. Get a free quote today.'
      );
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute(
        'content',
        'Delhi-based website developer building custom WordPress & React sites that rank and convert. 50+ projects delivered. Get a free quote today.'
      );
      document.head.appendChild(metaDesc);
    }

    // OpenGraph tags
    const ogTags: Record<string, string> = {
      'og:title':
        'Website Developer in Delhi | Custom Web Development — WebAlchemy',
      'og:description':
        'Delhi-based website developer building custom WordPress & React sites that rank and convert. 50+ projects delivered. Get a free quote today.',
      'og:type': 'website',
      'og:url': 'https://webalchemy.in/website-developer-delhi',
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(
        `meta[property="${property}"]`
      ) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // LocalBusiness schema specific to Delhi page
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'WebAlchemy — Website Developer in Delhi',
      description:
        'Delhi-based web development agency specialising in custom WordPress, React, and Next.js websites for businesses across Delhi NCR.',
      url: 'https://webalchemy.in/website-developer-delhi',
      telephone: '+91-9625429686',
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
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '10:00',
        closes: '19:00',
      },
    };

    let schemaScript = document.getElementById(
      'delhi-page-schema'
    ) as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'delhi-page-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schema);

    return () => {
      const el = document.getElementById('delhi-page-schema');
      if (el) el.remove();
    };
  }, []);

  // ==========================================================================
  // CONTENT DATA
  // ==========================================================================

  const whatsappNumber = '919625429686';
  const phoneNumber = '+91-9625429686';
  const whatsappMessage =
    "Hi! I'm looking for a website developer in Delhi. Can we discuss my project?";
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // -- Services offered (Section 3) -----------------------------------------
  const services = [
    {
      icon: Code2,
      title: 'Business Websites',
      subtitle: 'WordPress & Elementor',
      href: '/wordpress-development',
      desc: `Need a professional website that looks credible from the first visit? We build business websites on WordPress with Elementor — giving you a polished design, easy content management, and pages that load fast. Whether you're a CA firm in Rajouri Garden or a manufacturer in Okhla, we create sites that do justice to the reputation you've earned offline.`,
    },
    {
      icon: Palette,
      title: 'Custom Web Applications',
      subtitle: 'React / Next.js / MERN',
      href: '/services/web-development',
      desc: `When a template won't cut it, we build from scratch. Our development team works with React, Next.js, Node.js, and MongoDB to create web applications that handle complex workflows — customer portals, booking systems, internal dashboards. If your business process is unique, your website should be too.`,
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Development',
      subtitle: 'Shopify, WooCommerce & Custom Stores',
      href: '/ecommerce-website-development',
      desc: `Sell products online with a store built for the Indian market — Razorpay integration, Shiprocket shipping, GST-compliant invoicing. We set up Shopify, WooCommerce, or fully custom storefronts depending on your catalogue size and growth plans. From product photography guidance to payment testing, we handle the details.`,
    },
    {
      icon: Zap,
      title: 'Website Redesign & Speed Optimisation',
      subtitle: 'Performance & Modern UI',
      href: '/services/web-development',
      desc: `Slow websites lose customers. We take over underperforming sites — fix Core Web Vitals, compress images, restructure code, and redesign the interface if it looks dated. Most of our redesign projects see measurably faster load times and better Google rankings within the first month.`,
    },
  ];

  // -- Differentiators (Section 4) ------------------------------------------
  const differentiators = [
    {
      icon: MapPin,
      title: 'A local team you can actually meet',
      desc: "Our office is in Uttam Nagar, West Delhi. Come over for a coffee and a whiteboard session — or we'll come to you anywhere in Delhi NCR.",
    },
    {
      icon: IndianRupee,
      title: 'Transparent pricing — no surprises',
      desc: 'We quote a fixed price before starting. Milestone-based payments so you only pay when work is delivered and approved. No hidden charges, no scope-creep bills.',
    },
    {
      icon: Headphones,
      title: 'Post-launch support that actually works',
      desc: 'Every project includes 60 days of free bug-fix support. Need ongoing maintenance? Our monthly plans cover updates, backups, and on-call troubleshooting.',
    },
    {
      icon: Search,
      title: 'Speed and SEO are built in — not bolt-ons',
      desc: 'Technical SEO, fast hosting, image optimisation, and clean code structure are part of every build. You get a site Google can crawl and index properly from day one.',
    },
    {
      icon: Shield,
      title: "Full ownership — it's your website",
      desc: 'You get the source code, admin access, and all credentials. If you ever want to move hosting or change agencies, there are no lock-ins. The site is yours.',
    },
  ];

  // -- Process steps (Section 7) --------------------------------------------
  const processSteps = [
    {
      num: '01',
      title: 'Discovery call',
      desc: 'We understand your business, target audience, and goals. You walk away with a clear scope document — no jargon.',
    },
    {
      num: '02',
      title: 'Design & wireframe',
      desc: 'You see the layout and colour palette before we write a single line of code. Revisions happen here, not after launch.',
    },
    {
      num: '03',
      title: 'Development',
      desc: 'We build the site on a staging URL you can check anytime. Weekly progress updates — no radio silence.',
    },
    {
      num: '04',
      title: 'Testing & launch',
      desc: 'Cross-browser testing, mobile checks, speed audit, and SEO validation. Then we go live together.',
    },
    {
      num: '05',
      title: 'Post-launch support',
      desc: '60-day free support period. We monitor uptime, fix bugs, and hand over documentation so your team can manage day-to-day content.',
    },
  ];

  // -- Service areas (Section 8) --------------------------------------------
  const serviceAreas = [
    {
      name: 'Uttam Nagar',
      description:
        'Our home base in West Delhi. Walk-in consultations welcome at our Uttam Nagar office — no appointment needed.',
    },
    {
      name: 'Dwarka',
      description:
        'Website development for Dwarka businesses — from Sector 1 to Sector 29 and Dwarka Expressway.',
    },
    {
      name: 'Janakpuri',
      description:
        'Serving retailers, clinics, and service businesses across Janakpuri and Vikaspuri.',
    },
    {
      name: 'Rajouri Garden',
      description:
        'E-commerce and business websites for the thriving market area around Rajouri Garden metro.',
    },
    {
      name: 'Rohini',
      description:
        'Custom web solutions for North Delhi businesses in Rohini, Pitampura, and surrounding sectors.',
    },
    {
      name: 'South Delhi',
      description:
        'Premium website design for businesses in GK, Saket, Hauz Khas, Lajpat Nagar, and Defence Colony.',
    },
    {
      name: 'Noida',
      description:
        "Web development for Noida's tech corridor — Sector 62, 63, Film City, and Greater Noida.",
      href: '/website-developer-noida',
    },
    {
      name: 'Ghaziabad',
      description:
        'Affordable website solutions for manufacturers and traders in Ghaziabad and Indirapuram.',
    },
    {
      name: 'Gurgaon',
      description:
        'High-performance websites for startups and corporates along Cyber City, Golf Course Road, and DLF.',
      href: '/website-developer-gurgaon',
    },
  ];

  // -- Testimonials (Section 9) — TODO placeholders -------------------------
  const testimonials = [
    {
      // TODO: Replace with real testimonial from a Delhi client — ask Kunal
      quote:
        'WebAlchemy redesigned our company website and the difference was night and day. We started getting enquiries from Google within the first month. Highly recommend them to any Delhi business.',
      name: 'Client Name',
      business: 'Business Name',
      location: 'Delhi',
    },
    {
      // TODO: Replace with real testimonial — ask Kunal
      quote:
        'We needed an e-commerce store that could handle our inventory properly. They delivered on time and helped us set up payments and shipping. The site has been rock solid.',
      name: 'Client Name',
      business: 'Business Name',
      location: 'Delhi NCR',
    },
    {
      // TODO: Replace with real testimonial — ask Kunal
      quote:
        'What I liked most is they actually explained things instead of hiding behind tech jargon. Fixed our slow website, improved our Google ranking, and it all stays within budget.',
      name: 'Client Name',
      business: 'Business Name',
      location: 'West Delhi',
    },
  ];

  // -- FAQ items (Section 10) -----------------------------------------------
  const faqItems = [
    {
      question: 'How much does website development cost in Delhi?',
      answer:
        'It depends on what you need. A professional business website on WordPress starts from around ₹15,000–₹25,000. Custom-coded websites with React or Next.js typically range from ₹40,000 to ₹1,50,000 depending on the number of pages and features. E-commerce stores start at ₹30,000 for a basic Shopify or WooCommerce setup and go up based on product count and integrations. We provide a detailed quote after understanding your scope — no ballpark guesses.',
    },
    {
      question: 'How long does it take to build a website?',
      answer:
        'A straightforward 5–8 page business website usually takes 2–3 weeks from approved design to launch. E-commerce stores with product uploads and payment integration take 3–5 weeks. Custom web applications with backend logic, user accounts, or dashboards can take 6–10 weeks depending on complexity. We share a project timeline during our discovery call so you know exactly what to expect each week.',
    },
    {
      question: 'Do you provide website maintenance after launch?',
      answer:
        'Yes. Every project includes 60 days of complimentary support for bug fixes and minor adjustments. After that, we offer monthly maintenance plans starting from ₹3,000/month that cover plugin updates, security patches, daily backups, uptime monitoring, and content changes. You can also reach out on an as-needed basis without a monthly plan — we bill hourly for one-off requests.',
    },
    {
      question: 'WordPress or custom code — which is right for my business?',
      answer:
        "WordPress is excellent if you need a content-heavy site you can update yourself — blogs, landing pages, portfolios, and standard business websites. It's faster to build and more affordable to maintain. Custom development with React or Next.js is better when you need interactive features, user portals, real-time data, or performance at scale. During our discovery call we'll recommend the right approach based on your actual needs, not upsell you on tech you don't require.",
    },
    {
      question: 'Do you help with SEO and Google ranking?',
      answer:
        'We build every website with technical SEO as a foundation — proper heading structure, fast load times, mobile responsiveness, clean URLs, meta tags, and schema markup. This gives Google what it needs to crawl and rank your pages. For ongoing SEO — keyword research, content strategy, link building, and rank tracking — we offer separate monthly packages or can work alongside your existing marketing team.',
    },
    {
      question: 'Can you redesign my existing website?',
      answer:
        "Absolutely. We regularly take over WordPress sites, old HTML sites, and underperforming platforms. We audit the current site for speed, UX, and SEO issues, then redesign with a fresh interface while preserving any existing Google rankings and backlinks. If you're on an outdated platform, we'll migrate your content and set up proper redirects so you don't lose traffic during the switch.",
    },
    {
      question: 'Do you work with businesses outside Delhi?',
      answer:
        "Yes. While our office is in Delhi and most of our clients are in Delhi NCR, we regularly work with businesses across India and internationally. Discovery calls, progress reviews, and handover all happen over video call. The process is identical — the only difference is we can't swing by your office for coffee.",
    },
    {
      question: 'What do you need from me to start?',
      answer:
        "To give you an accurate quote, we need a clear idea of what the website should do — number of pages, key features, reference sites you like, and any brand assets you already have (logo, colour palette, copy). Don't worry if you're not sure about all the details yet. Our discovery call is designed to help you figure that out. Once we agree on scope and pricing, a 50% advance kicks off the project.",
    },
  ];

  // ==========================================================================
  // RENDER
  // ==========================================================================

  return (
    <>
      {/* ================================================================
          BREADCRUMBS
      ================================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28">
        <BreadcrumbNav
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Website Developer in Delhi' },
          ]}
        />
      </div>

      {/* ================================================================
          1. HERO
      ================================================================ */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-12 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="flex flex-col items-start text-left space-y-7 z-10">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-900/20 border border-teal-500/30 backdrop-blur-sm animate-fade-in">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-teal-300 tracking-wide">
                Delhi-based · Available for new projects
              </span>
            </div>

            {/* H1 — only one on the page */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white">
              Website Developer in Delhi
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-glow">
                Custom Websites That Bring&nbsp;You&nbsp;Customers
              </span>
            </h1>

            {/* Sub-line */}
            <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
              50+ projects delivered for businesses across Delhi NCR.
              We build on <strong>WordPress</strong> when you need speed
              and <strong>React / Next.js</strong> when you need power — always
              with SEO baked in so Google actually finds you.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-1">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg shadow-lg shadow-cyan-900/20 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group overflow-hidden flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-2 text-sm font-medium text-gray-400">
              {[
                '50+ Projects Delivered',
                'WordPress & React',
                'Delhi NCR Based',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative z-10 w-full h-full flex items-center justify-center lg:justify-end">
            <MockupInterface />
          </div>
        </div>

        {/* Client logos */}
        <div className="mt-20 lg:mt-28 border-t border-white/5 pt-8">
          <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-widest">
            Trusted by businesses across Delhi NCR
          </p>
          <ClientLogos />
        </div>
      </section>

      {/* ================================================================
          2. INTRO SECTION (~200 words)
      ================================================================ */}
      <section className="py-16 lg:py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            A Delhi web development agency that gets to the point
          </h2>
          <div className="space-y-5 text-gray-400 text-base md:text-lg leading-relaxed">
            <p>
              WebAlchemy is a website development agency based in Uttam Nagar, New Delhi. We design and build websites for small businesses, startups, and established companies across Delhi NCR — the kind of sites that load fast, show up on Google, and make visitors want to pick up the phone.
            </p>
            <p>
              We're not a giant agency with layers of account managers. When you work with us, you talk directly to the people writing the code and designing the pages. That means faster turnarounds, fewer miscommunications, and a final product that actually matches what you asked for.
            </p>
            <p>
              Our stack is practical: <strong>WordPress with Elementor</strong> for businesses that need a clean site they can update themselves, and <strong>React or Next.js</strong> for projects that need custom logic, speed at scale, or something a page builder can't handle. Either way, every site we ship is mobile-responsive, SEO-ready, and built to convert visitors into customers.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          3. SERVICES OFFERED IN DELHI (H2 + H3 sub-sections)
      ================================================================ */}
      <section className="py-16 lg:py-20 bg-navy-800/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Web development services we offer in Delhi
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Every project is different. Here's what we build most often for
              Delhi businesses — and the tech behind each one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <Link
                key={i}
                to={service.href}
                className="group relative flex flex-col p-8 rounded-2xl bg-navy-800/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
              >
                {/* Top row */}
                <div className="flex items-start gap-4 mb-4">
                  <span className="w-12 h-12 rounded-xl bg-cyan-900/30 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <service.icon className="w-6 h-6 text-cyan-400" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-cyan-500/70 text-sm font-medium">
                      {service.subtitle}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {service.desc}
                </p>

                {/* Link indicator */}
                <span
                  aria-hidden="true"
                  className="inline-flex items-center gap-1.5 mt-5 text-sm text-cyan-400 font-semibold group-hover:gap-2.5 transition-all"
                >
                  Learn more <ArrowRight size={15} />
                </span>

                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          4. WHY DELHI BUSINESSES CHOOSE US
      ================================================================ */}
      <section className="py-16 lg:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Delhi businesses choose WebAlchemy
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              We've worked with enough clients to know what matters
              most — here's what we commit to on every project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-gradient-to-br from-navy-800/60 to-navy-900/60 border border-white/5 hover:border-white/10 transition-all"
              >
                <span className="w-10 h-10 rounded-lg bg-cyan-900/30 border border-cyan-500/20 flex items-center justify-center mb-4">
                  <d.icon className="w-5 h-5 text-cyan-400" />
                </span>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {d.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          5. RECENT WORK (CaseStudyCard grid)
      ================================================================ */}
      <CaseStudyGrid
        heading="Recent work for Delhi NCR businesses"
        subheading="Real projects, real scope — no inflated metrics."
      >
        <CaseStudyCard
          title="Full website build — restaurant chain"
          client="Bâton Rouge (Canadian restaurant chain)"
          industry="Restaurant & Hospitality"
          location="Canada (remote project)"
          stack={['WordPress', 'Elementor', 'WPML']}
          results={[
            'Complete homepage system with menu, reservations, and locations',
            'Multilingual-ready architecture (English + French)',
            'Mobile-first responsive design across all pages',
          ]}
          href="/portfolio"
        />

        <CaseStudyCard
          title="Performance optimisation — restaurant website"
          client="Bento Sushi"
          industry="Food & Beverage"
          location="Canada (remote project)"
          stack={['WordPress', 'WP Rocket', 'Core Web Vitals']}
          results={[
            'Reduced page load time significantly after audit',
            'Fixed CLS layout shift issues across mobile and desktop',
            'Image compression and lazy-load implementation',
          ]}
          href="/portfolio"
        />

        <CaseStudyCard
          title="Product catalogue website with enquiry system"
          client="Trudanaz Pharmaceuticals"
          industry="Pharmaceutical"
          location="Delhi NCR"
          stack={['WordPress', 'Custom Theme', 'Contact Form 7']}
          results={[
            'Custom WordPress theme matching brand guidelines',
            'Product catalogue with category filtering',
            'Enquiry form system connected to sales team email',
          ]}
          href="/portfolio"
        />

        <CaseStudyCard
          title="Corporate gifting platform"
          client="Kamlesh Group"
          industry="Corporate Gifting"
          location="Delhi"
          stack={['React', 'Vite', 'Tailwind CSS']}
          results={[
            'Modern React SPA with product showcase',
            'Bulk order enquiry flow with WhatsApp integration',
            'Responsive design optimised for mobile buyers',
          ]}
          href="/portfolio"
        />
      </CaseStudyGrid>

      {/* ================================================================
          6. PRICING GUIDANCE
      ================================================================ */}
      <section className="py-16 lg:py-20 bg-navy-800/20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Website development pricing in Delhi
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Honest starting ranges so you can plan your budget before we talk.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                label: 'Business Website',
                range: '₹15,000 – ₹40,000',
                note: 'WordPress / Elementor, 5–10 pages, contact form, basic SEO setup',
              },
              {
                label: 'Custom Website',
                range: '₹40,000 – ₹1,50,000',
                note: 'React / Next.js, custom UI, backend integrations, admin dashboard',
              },
              {
                label: 'E-commerce Store',
                range: '₹30,000 – ₹1,00,000',
                note: 'Shopify or WooCommerce, product upload, payment gateway, shipping',
              },
            ].map((tier, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-navy-800/40 border border-white/5 text-center"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {tier.label}
                </h3>
                <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-3">
                  {tier.range}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {tier.note}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            These are starting prices. Your final quote depends on the number
            of pages, features, and integrations required. We provide a
            detailed, itemised estimate after our discovery call — no
            obligation.
          </p>
        </div>
      </section>

      {/* ================================================================
          7. OUR PROCESS
      ================================================================ */}
      <section className="py-16 lg:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How we work
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Five steps from first conversation to a live website.
            </p>
          </div>

          <ol className="space-y-5">
            {processSteps.map((step) => (
              <li
                key={step.num}
                className="flex gap-5 items-start p-5 rounded-2xl bg-navy-800/30 border border-white/5"
              >
                <span className="shrink-0 w-10 h-10 rounded-xl bg-cyan-900/30 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================================================================
          8. SERVICE AREA BLOCK
      ================================================================ */}
      <ServiceAreaBlock
        heading="Areas we serve across Delhi NCR"
        subheading="Based in Uttam Nagar, West Delhi — working with businesses across the entire National Capital Region."
        areas={serviceAreas}
      />

      {/* ================================================================
          9. TESTIMONIALS (placeholders — TODO: replace with real quotes)
      ================================================================ */}
      {/* TODO: Kunal — replace these placeholder testimonials with real
          client quotes. Keep the same data shape: { quote, name, business, location }. */}
      <TestimonialStrip
        heading="What our clients say"
        subheading="Real feedback from businesses we've worked with in Delhi NCR."
        testimonials={testimonials}
      />

      {/* ================================================================
          10. FAQ SECTION
      ================================================================ */}
      <FaqSection
        heading="Frequently asked questions about website development in Delhi"
        subheading="Honest answers to the questions we get most often."
        items={faqItems}
      />

      {/* ================================================================
          11. CTA BANNER
      ================================================================ */}
      <CtaBanner
        heading="Ready to build your Delhi business website?"
        sub="Tell us what you need — we'll get back to you within 30 minutes during business hours. No obligation, no hard sell."
        whatsappNumber={whatsappNumber}
        phone={phoneNumber}
        whatsappMessage={whatsappMessage}
      />

      {/* ================================================================
          CONTACT FORM (existing shared component)
      ================================================================ */}
      <Contact />

      {/* Service Form Popup */}
      <ServiceFormPopup
        isOpen={showFormPopup}
        onClose={() => setShowFormPopup(false)}
        serviceName="Website Development — Delhi"
        subServiceName=""
      />
    </>
  );
};

export default WebsiteDeveloperDelhiPage;
