'use client';

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Code2, ShoppingCart, Zap, Layers, Search, Palette,
  ArrowRight, CheckCircle2, Globe, Monitor
} from "lucide-react";
import {
  BreadcrumbNav, FaqSection, CaseStudyCard, CaseStudyGrid, CtaBanner,
} from "../seo";

const WebDevelopmentPage: React.FC = () => {
  useEffect(() => {
    document.title = "Web Development Services Delhi | WebAlchemy";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute("content", "Custom WordPress & React websites for Delhi businesses. Fast, SEO-ready, mobile-first. Get a free quote today.");
    }
  }, []);

  const faqItems = [
    {
      question: "What platforms do you build websites on?",
      answer:
        "We work primarily with two stacks. For content-managed business sites, we use WordPress with Elementor or custom themes — it gives you full control over pages, blogs, and media without touching code. For projects that need custom logic, interactive interfaces, or high performance under load, we build with React, Next.js, and Node.js. We also set up Shopify and WooCommerce stores when e-commerce is the priority. The right platform depends on your goals, and we help you choose during the discovery call.",
    },
    {
      question: "Will my website work well on mobile phones?",
      answer:
        "Every site we build is designed mobile-first. That means we start with the smallest screen and scale up, rather than squeezing a desktop layout onto a phone. We test across real devices — iPhones, Android phones, tablets — and optimise touch targets, font sizes, and image loading for each. Google also uses mobile-first indexing, so a properly responsive site directly impacts your search rankings.",
    },
    {
      question: "How do you handle website hosting and domain setup?",
      answer:
        "We help you choose a hosting provider that matches your traffic and budget — Vercel for React/Next.js apps, managed WordPress hosting like Starter for content sites, or AWS if you need more control. The hosting subscription is in your name so you own the infrastructure. We handle DNS configuration, SSL certificates, and initial server setup as part of the project.",
    },
    {
      question: "Can you migrate my site from another platform?",
      answer:
        "Yes. We regularly migrate sites from Wix, Squarespace, GoDaddy builders, and older HTML sites to WordPress or React. We preserve your existing content, set up 301 redirects so Google transfers your rankings, and re-optimise images and page speed in the process. Most migrations are completed within the normal project timeline without extra cost.",
    },
    {
      question: "What happens if I need changes after the site is live?",
      answer:
        "Every project includes 60 days of free support for bug fixes and minor adjustments. If you need ongoing changes — monthly content updates, new landing pages, feature additions — we offer maintenance retainers starting at ₹3,000/month. For one-off changes after the support period, we bill on an hourly basis with a clear estimate upfront.",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28">
        <BreadcrumbNav
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Web Development" },
          ]}
        />
      </div>

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/20 border border-cyan-500/30 mb-6">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-medium text-cyan-300 tracking-wide uppercase">Web Development</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
            Web Development Services —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              WordPress, React & Custom&nbsp;Websites
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mb-8">
            We build websites that do more than look good — they load fast, rank on Google, and turn visitors into paying customers. Whether you need a five-page business site on WordPress or a custom React application with user dashboards and API integrations, our Delhi-based team handles the full build from design to deployment. Every project ships with mobile responsiveness, technical SEO, and 60 days of post-launch support included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/917838583051?text=Hi!%20I%20need%20a%20website%20built.%20Can%20we%20discuss?" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </a>
            <Link to="/portfolio" className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 lg:py-20 bg-navy-800/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What we build</h2>
          <p className="text-gray-400 text-base md:text-lg mb-12 max-w-3xl">
            Four core web development services — each tailored to different business needs, budgets, and growth stages.
          </p>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Business Websites */}
            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-cyan-900/30 border border-cyan-500/20 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-cyan-400" />
                </span>
                <h3 className="text-xl font-bold text-white">Business Websites</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Professional websites for companies that need a credible online presence without a six-figure budget. We build on WordPress with Elementor, giving you a polished design, fast load times, and an admin panel you can actually use. Most business sites include 5-10 pages — home, about, services, portfolio, contact — with a blog section for SEO content. Delivered in 2-3 weeks with training so your team can manage day-to-day updates. Starting from <strong className="text-white">₹15,000</strong>.{" "}
                <Link to="/wordpress-development" className="text-cyan-400 hover:underline">Learn more about our WordPress work →</Link>
              </p>
            </div>

            {/* Custom Web Apps */}
            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-purple-900/30 border border-purple-500/20 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-purple-400" />
                </span>
                <h3 className="text-xl font-bold text-white">Custom Web Applications</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                When templates and page builders hit their limits, we write code from scratch. Our stack is React and Next.js on the frontend, Node.js and MongoDB on the backend. We build customer portals, booking engines, inventory dashboards, multi-vendor marketplaces — anything that needs custom business logic beyond what WordPress can handle. These projects typically run 6-10 weeks and start from <strong className="text-white">₹40,000</strong>.{" "}
                <Link to="/services/app-development" className="text-cyan-400 hover:underline">See our app development services →</Link>
              </p>
            </div>

            {/* E-commerce */}
            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-emerald-900/30 border border-emerald-500/20 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-emerald-400" />
                </span>
                <h3 className="text-xl font-bold text-white">E-commerce Stores</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Online stores built for the Indian market — Razorpay and Paytm payment gateways, Shiprocket or Delhivery shipping integration, GST-compliant invoicing. We work with Shopify for quick-launch stores, WooCommerce for WordPress-based catalogues, and fully custom setups for businesses with specific requirements. Product uploads, variant management, discount coupons, and abandoned cart emails are all part of the package. Starting from <strong className="text-white">₹30,000</strong>.{" "}
                <Link to="/ecommerce-website-development" className="text-cyan-400 hover:underline">E-commerce development details →</Link>
              </p>
            </div>

            {/* Redesign */}
            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-orange-900/30 border border-orange-500/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-orange-400" />
                </span>
                <h3 className="text-xl font-bold text-white">Redesign & Speed Optimisation</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Already have a website that looks outdated or loads slowly? We audit your existing site for Core Web Vitals issues, bloated plugins, unoptimised images, and poor mobile layouts — then fix everything. For sites that need a visual refresh, we redesign the UI while preserving your existing Google rankings and backlinks through proper URL mapping and 301 redirects. Most redesign projects are completed in 3-4 weeks.{" "}
                <Link to="/website-developer-delhi" className="text-cyan-400 hover:underline">Website development in Delhi →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-16 lg:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">How a web development project works</h2>
          <p className="text-gray-400 text-base md:text-lg mb-12 text-center">Four phases from first conversation to live website.</p>
          <ol className="space-y-5">
            {[
              { num: "01", title: "Scope & wireframe", desc: "We map out every page, feature, and integration on paper before writing code. You approve the layout and sitemap before design begins — changes are cheap at this stage." },
              { num: "02", title: "Visual design", desc: "Pixel-perfect mockups in Figma for desktop and mobile. You see exactly what the finished site will look like and can request revisions before development starts." },
              { num: "03", title: "Build & iterate", desc: "Development on a staging URL you can access anytime. Weekly check-ins so nothing drifts from the approved design. Content entry, testing, and speed optimisation happen here." },
              { num: "04", title: "Launch & support", desc: "DNS cutover, SSL setup, analytics configuration, and Google Search Console submission. Then 60 days of free bug-fix support while you settle in." },
            ].map((step) => (
              <li key={step.num} className="flex gap-5 items-start p-5 rounded-2xl bg-navy-800/30 border border-white/5">
                <span className="shrink-0 w-10 h-10 rounded-xl bg-cyan-900/30 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm">{step.num}</span>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CASE STUDIES */}
      <CaseStudyGrid heading="Web development projects" subheading="Real builds for real businesses.">
        <CaseStudyCard
          title="Full website build — restaurant chain"
          client="Bâton Rouge (Canadian restaurant chain)"
          industry="Restaurant & Hospitality"
          location="Canada (remote project)"
          stack={["WordPress", "Elementor", "WPML"]}
          results={[
            "Complete homepage system with menu, reservations, and locations",
            "Multilingual-ready architecture (English + French)",
            "Mobile-first responsive design across all pages",
          ]}
          href="/portfolio"
        />
        <CaseStudyCard
          title="Product catalogue website with enquiry system"
          client="Trudanaz Pharmaceuticals"
          industry="Pharmaceutical"
          location="Delhi NCR"
          stack={["WordPress", "Custom Theme", "Contact Form 7"]}
          results={[
            "Custom WordPress theme matching brand guidelines",
            "Product catalogue with category filtering",
            "Enquiry form system connected to sales team email",
          ]}
          href="/portfolio"
        />
        <CaseStudyCard
          title="Corporate gifting platform"
          client="Kamlesh Group"
          industry="Corporate Gifting"
          location="Delhi"
          stack={["React", "Vite", "Tailwind CSS"]}
          results={[
            "Modern React SPA with product showcase",
            "Bulk order enquiry flow with WhatsApp integration",
            "Responsive design optimised for mobile buyers",
          ]}
          href="/portfolio"
        />
      </CaseStudyGrid>

      {/* WHO IT'S FOR + PRICING */}
      <section className="py-16 lg:py-20 bg-navy-800/20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Who this is for</h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            Our web development services are built for small-to-mid-sized businesses that need a website that actually works for them — not just a digital brochure collecting dust. If you are a local service provider, a product company launching online, a startup that needs to look established, or a business whose current site is embarrassingly outdated, we can help.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { label: "Business Website", range: "₹15,000 – ₹40,000", note: "WordPress/Elementor, 5-10 pages, SEO setup" },
              { label: "Custom Web App", range: "₹40,000 – ₹1,50,000", note: "React/Next.js, custom UI, backend, admin panel" },
              { label: "E-commerce Store", range: "₹30,000 – ₹1,00,000", note: "Shopify/WooCommerce, products, payments, shipping" },
            ].map((tier, i) => (
              <div key={i} className="p-6 rounded-2xl bg-navy-800/40 border border-white/5 text-center">
                <h3 className="text-lg font-bold text-white mb-2">{tier.label}</h3>
                <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-3">{tier.range}</div>
                <p className="text-gray-500 text-sm">{tier.note}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">Final pricing depends on scope. We provide a detailed estimate after the discovery call.</p>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        heading="Web development FAQs"
        subheading="Common questions about our website development services."
        items={faqItems}
      />

      {/* CTA */}
      <CtaBanner
        heading="Ready to build your website?"
        sub="Tell us what you need — free consultation, no obligation."
        whatsappNumber="917838583051"
        phone="+91-78385-83051"
        whatsappMessage="Hi! I need a website built. Can we discuss?"
      />
    </>
  );
};

export default WebDevelopmentPage;
