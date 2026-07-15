'use client';

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BarChart, Search, Target, TrendingUp, Instagram,
  ArrowRight, Globe, Megaphone
} from "lucide-react";
import {
  BreadcrumbNav, FaqSection, CaseStudyCard, CaseStudyGrid, CtaBanner,
} from "../seo";

const DigitalMarketingPage: React.FC = () => {
  useEffect(() => {
    document.title = "Digital Marketing Agency Delhi | WebAlchemy";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute("content", "Google Ads, Meta Ads, SEO & social media marketing. Data-driven campaigns that deliver real ROI for Delhi NCR businesses.");
    }
  }, []);

  const faqItems = [
    {
      question: "How much should I budget for digital marketing per month?",
      answer:
        "It depends on your industry and competition. For Google Ads or Meta Ads, we recommend a minimum ad spend of ₹20,000–₹50,000 per month to generate enough data for meaningful optimisation. Our management fee starts at ₹10,000/month on top of that. SEO retainers typically start at ₹15,000/month for local businesses targeting Delhi NCR keywords. We can work within tighter budgets, but smaller spends mean slower data collection and longer timelines to see traction.",
    },
    {
      question: "How quickly will I see results from paid ads?",
      answer:
        "Paid campaigns on Google and Meta can start generating clicks and leads within the first week of going live. However, the first 2-4 weeks are a testing phase — we experiment with audiences, ad creatives, and bidding strategies to find what converts best for your specific business. Expect stabilised cost-per-lead numbers by month two. SEO is a longer play: meaningful organic traffic growth typically takes 3-6 months of consistent effort.",
    },
    {
      question: "Do I keep ownership of my ad accounts and data?",
      answer:
        "Absolutely. Your Google Ads account, Meta Business Manager, Google Analytics, and Search Console are all set up under your business email. We operate as managers with delegated access. If you ever change agencies or want to run ads in-house, you retain full ownership of your campaigns, historical data, and audience lists. No lock-ins, no hostage situations.",
    },
    {
      question: "Can you handle both the ads and the landing pages?",
      answer:
        "Yes — and we strongly recommend it. Running paid traffic to a poorly designed landing page is a waste of ad spend. We build conversion-optimised landing pages as part of our marketing packages, ensuring that the ad message, page design, and call-to-action all align. This usually improves conversion rates by 30-50% compared to sending traffic to a generic homepage.",
    },
    {
      question: "What reporting do I get and how often?",
      answer:
        "We send weekly performance snapshots and a detailed monthly report covering impressions, clicks, conversions, cost-per-lead, and return on ad spend. You also get a live dashboard you can check anytime. Monthly strategy calls are included so we can review results together and adjust the plan. If something needs urgent attention — a campaign underperforming or a budget spike — we flag it immediately, not at the next scheduled report.",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28">
        <BreadcrumbNav
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Digital Marketing" },
          ]}
        />
      </div>

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-900/20 border border-purple-500/30 mb-6">
            <Target className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-medium text-purple-300 tracking-wide uppercase">Digital Marketing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
            Digital Marketing Services —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              SEO, Google Ads & Social&nbsp;Media
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mb-8">
            A website without traffic is a billboard in the desert. We run data-driven marketing campaigns that put your business in front of people who are actively searching for what you sell. From Google Ads and Meta Ads to organic SEO and Instagram content, we manage the full acquisition funnel — targeting, creative, landing pages, and conversion tracking. Every rupee of ad spend is tracked so you know exactly what you are getting back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/917838583051?text=Hi!%20I%20need%20help%20with%20digital%20marketing.%20Can%20we%20discuss?" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
              Get a Marketing Audit <ArrowRight className="w-5 h-5" />
            </a>
            <Link to="/services/web-development" className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              Need a Website First?
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 lg:py-20 bg-navy-800/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Marketing channels we manage</h2>
          <p className="text-gray-400 text-base md:text-lg mb-12 max-w-3xl">
            We focus on channels that deliver measurable returns — not vanity metrics. Here is where we drive results for our clients.
          </p>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-blue-900/30 border border-blue-500/20 flex items-center justify-center">
                  <Search className="w-5 h-5 text-blue-400" />
                </span>
                <h3 className="text-xl font-bold text-white">Google Ads (Search & Shopping)</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                We set up and manage Google Search campaigns that capture people at the moment they are looking for your product or service. Keyword research, negative keyword lists, ad copy testing, bid management, and conversion tracking — all handled. For e-commerce clients, we also run Google Shopping campaigns with optimised product feeds. Every campaign gets a dedicated landing page designed to convert the traffic we send to it. Typical cost-per-lead improvements of 20-40% within the first 90 days.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-pink-900/30 border border-pink-500/20 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-pink-400" />
                </span>
                <h3 className="text-xl font-bold text-white">Meta Ads (Facebook & Instagram)</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Facebook and Instagram ads are ideal for reaching people before they start searching — building awareness, retargeting website visitors, and driving impulse purchases. We build custom audiences, lookalike audiences, and retargeting funnels. Our creative team produces the ad visuals and copy so you do not need to provide ready-made assets. We manage the full Meta Business Suite including pixel setup, catalogue sync for e-commerce, and automated rules to pause underperforming ad sets.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-emerald-900/30 border border-emerald-500/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </span>
                <h3 className="text-xl font-bold text-white">SEO & Local Search</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Organic search is the highest-ROI channel for most businesses in the long run. We handle technical SEO audits, on-page optimisation, content strategy, and link building. For local businesses, we optimise your Google Business Profile, build local citations, and target geo-specific keywords like{" "}
                <Link to="/website-developer-delhi" className="text-cyan-400 hover:underline">"website developer in Delhi"</Link>.
                {" "}Monthly rank tracking reports show you exactly which keywords are moving and how much organic traffic is growing.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-orange-900/30 border border-orange-500/20 flex items-center justify-center">
                  <Megaphone className="w-5 h-5 text-orange-400" />
                </span>
                <h3 className="text-xl font-bold text-white">Social Media Management</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Beyond paid ads, we manage organic social media presence for businesses that need consistent posting without hiring an in-house team. Content calendars, graphic design, caption writing, hashtag strategy, and community management across Instagram, Facebook, and LinkedIn. We plan and schedule 15-20 posts per month, track engagement analytics, and adjust the content mix based on what your audience actually responds to.{" "}
                <Link to="/services/content-strategy" className="text-cyan-400 hover:underline">See our content services →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-16 lg:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">How a marketing engagement works</h2>
          <p className="text-gray-400 text-base md:text-lg mb-12 text-center">From audit to optimisation — a proven four-step process.</p>
          <ol className="space-y-5">
            {[
              { num: "01", title: "Audit & strategy", desc: "We analyse your current digital presence, competitors, and market opportunity. The output is a clear channel strategy with budget allocation and expected KPIs — no fluff, just numbers." },
              { num: "02", title: "Campaign setup", desc: "Account structure, audience targeting, ad creative production, landing page builds, and conversion tracking. Everything is set up before a single rupee of ad spend goes live." },
              { num: "03", title: "Launch & test", desc: "Campaigns go live with multiple ad variants. We monitor daily, pause underperformers, scale winners, and A/B test creatives and landing pages continuously." },
              { num: "04", title: "Report & optimise", desc: "Weekly snapshots, monthly deep-dive reports, and quarterly strategy reviews. We adjust bids, refresh creatives, and shift budget across channels based on actual performance data." },
            ].map((step) => (
              <li key={step.num} className="flex gap-5 items-start p-5 rounded-2xl bg-navy-800/30 border border-white/5">
                <span className="shrink-0 w-10 h-10 rounded-xl bg-purple-900/30 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm">{step.num}</span>
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
      <CaseStudyGrid heading="Marketing projects" subheading="Real campaigns, real scope — no inflated ROAS claims.">
        <CaseStudyCard
          title="Ongoing digital marketing retainer"
          client="Viabtech (Canon/Epson dealer, Tanzania)"
          industry="Office Equipment & Supplies"
          location="Tanzania (remote)"
          stack={["Meta Ads", "Instagram", "SEO", "Google Business Profile"]}
          results={[
            "Meta Ads management — lead generation and catalogue campaigns",
            "Instagram content management with scheduled posting calendar",
            "Google Business Profile optimisation and local SEO",
          ]}
          href="/portfolio"
        />
        <CaseStudyCard
          title="Performance optimisation — restaurant website"
          client="Bento Sushi"
          industry="Food & Beverage"
          location="Canada (remote)"
          stack={["WordPress", "WP Rocket", "Core Web Vitals"]}
          results={[
            "Reduced page load time significantly after audit",
            "Fixed CLS layout shift issues across mobile and desktop",
            "Image compression and lazy-load implementation",
          ]}
          href="/portfolio"
        />
      </CaseStudyGrid>

      {/* WHO IT'S FOR + PRICING */}
      <section className="py-16 lg:py-20 bg-navy-800/20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pricing & engagement models</h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            We work with businesses that are ready to invest in growth — not just dip a toe. Our marketing services are structured as monthly retainers because digital marketing is an ongoing optimisation process, not a one-time setup.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { label: "SEO Retainer", range: "₹15,000 – ₹40,000/mo", note: "Technical SEO, content, link building, rank tracking" },
              { label: "Paid Ads Management", range: "₹10,000 – ₹30,000/mo", note: "Google + Meta Ads, creative, landing pages (ad spend separate)" },
              { label: "Full-Stack Marketing", range: "₹35,000 – ₹80,000/mo", note: "SEO + Ads + Social media + Monthly reporting" },
            ].map((tier, i) => (
              <div key={i} className="p-6 rounded-2xl bg-navy-800/40 border border-white/5 text-center">
                <h3 className="text-lg font-bold text-white mb-2">{tier.label}</h3>
                <div className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">{tier.range}</div>
                <p className="text-gray-500 text-sm">{tier.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        heading="Digital marketing FAQs"
        subheading="Answers to the questions we hear most from new clients."
        items={faqItems}
      />

      {/* CTA */}
      <CtaBanner
        heading="Ready to grow your business online?"
        sub="Get a free marketing audit — we will tell you where the opportunities are."
        whatsappNumber="917838583051"
        phone="+91-78385-83051"
        whatsappMessage="Hi! I need help with digital marketing. Can we discuss?"
      />
    </>
  );
};

export default DigitalMarketingPage;
