'use client';

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Type, FileText, Search, BookOpen, ArrowRight, PenTool, BarChart
} from "lucide-react";
import {
  BreadcrumbNav, FaqSection, CaseStudyCard, CaseStudyGrid, CtaBanner,
} from "../seo";

const ContentStrategyPage: React.FC = () => {
  useEffect(() => {
    document.title = "Content Strategy & SEO Writing | WebAlchemy";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute("content", "SEO-optimised blog posts, website copy, and content strategies that rank on Google and convert readers into customers.");
    }
  }, []);

  const faqItems = [
    {
      question: "How do you decide which topics to write about?",
      answer:
        "We start with keyword research using tools like Ahrefs and Google Search Console to find what your target audience is actually searching for. We cross-reference search volume with competition difficulty and buyer intent to prioritise topics that can realistically rank and drive business outcomes. We also audit your existing content for gaps — pages that almost rank but need more depth, or high-traffic pages that fail to convert. The result is a prioritised content calendar, not a random list of blog ideas.",
    },
    {
      question: "Is the content written by humans or AI?",
      answer:
        "All published content is written by our in-house writers. We use AI tools for research acceleration — generating outlines, identifying related subtopics, checking keyword density — but the actual writing is done by humans who understand nuance, brand voice, and the difference between informative content and sales-driven copy. Google can detect and penalise thin AI-generated content, so we invest the time to produce genuinely useful articles that deserve to rank.",
    },
    {
      question: "Can you write content in Hindi or other Indian languages?",
      answer:
        "We primarily write in English, which covers most B2B and professional service content needs. For Hindi content, we work with a network of native Hindi writers who can produce blog posts, social captions, and product descriptions with natural language — not machine-translated text. If you need content in other regional languages, we can typically find a suitable writer within our network. Turnaround for non-English content is slightly longer due to the editorial review process.",
    },
    {
      question: "How long does it take to see SEO results from content?",
      answer:
        "New content typically takes 4-8 weeks to get indexed and start appearing in search results. Ranking on page one for competitive keywords can take 3-6 months of consistent publishing and link building. However, well-targeted long-tail content often starts generating traffic much sooner. We track rankings weekly and provide monthly reports showing which articles are gaining traction, which need updates, and what new opportunities have emerged.",
    },
    {
      question: "Do you handle content publishing and formatting?",
      answer:
        "Yes. We do not just hand over a Word document and walk away. We format content in your CMS (WordPress, Webflow, or whatever you use), add internal links, optimise meta titles and descriptions, insert images with alt text, and configure schema markup where relevant. If you need us to source stock images or create custom graphics for the article, that is included in our content packages. The article goes live looking polished and fully optimised.",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28">
        <BreadcrumbNav
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Content Strategy" },
          ]}
        />
      </div>

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-900/20 border border-emerald-500/30 mb-6">
            <Type className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-medium text-emerald-300 tracking-wide uppercase">Content Strategy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
            Content Strategy & SEO Writing —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Words That Rank and&nbsp;Sell
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mb-8">
            Ranking on Google requires more than a well-built website — it requires content that answers the questions your customers are asking. We create SEO-driven content strategies, write long-form articles that earn organic traffic, and craft website copy that moves visitors toward a decision. No fluff pieces, no keyword-stuffed nonsense — content that is genuinely useful to readers and technically optimised for search engines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/917838583051?text=Hi!%20I%20need%20content%20writing%20and%20SEO%20help.%20Can%20we%20discuss?" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold text-lg shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
              Discuss Your Content Needs <ArrowRight className="w-5 h-5" />
            </a>
            <Link to="/services/digital-marketing" className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              See Full Marketing Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 lg:py-20 bg-navy-800/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Content services we provide</h2>
          <p className="text-gray-400 text-base md:text-lg mb-12 max-w-3xl">
            Three pillars of content work — strategy to figure out what to write, production to create it, and optimisation to make it rank.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-emerald-900/30 border border-emerald-500/20 flex items-center justify-center">
                  <BarChart className="w-5 h-5 text-emerald-400" />
                </span>
                <h3 className="text-xl font-bold text-white">Content Strategy & Planning</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Before writing a single word, we research your market and competitors to build a content roadmap. This includes keyword opportunity analysis, topic clustering around your core services, a publishing calendar with realistic timelines, and content briefs for each piece. The strategy phase ensures every article serves a business goal — whether that is ranking for a high-intent keyword, supporting a{" "}
                <Link to="/services/digital-marketing" className="text-cyan-400 hover:underline">paid marketing campaign</Link>, or nurturing leads through your sales funnel.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-cyan-900/30 border border-cyan-500/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-cyan-400" />
                </span>
                <h3 className="text-xl font-bold text-white">SEO Blog Writing</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Long-form articles (1,500-3,000 words) written to rank for specific keywords while being genuinely useful to readers. Each article is structured with a clear heading hierarchy, internal links to your service pages, and optimised meta titles and descriptions. We research each topic thoroughly — citing sources, including original analysis, and covering the subject more comprehensively than whatever currently ranks on page one. Typical turnaround is 5-7 business days per article.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-purple-900/30 border border-purple-500/20 flex items-center justify-center">
                  <PenTool className="w-5 h-5 text-purple-400" />
                </span>
                <h3 className="text-xl font-bold text-white">Website Copy & Product Descriptions</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Homepage headlines, service page prose, about page narratives, product descriptions for e-commerce — website copy that sounds human and converts visitors into enquiries. We interview you or your team to capture your authentic voice, then write copy that reflects how you actually talk to clients. Every page is optimised for its target keyword without sounding robotic.{" "}
                <Link to="/website-developer-delhi" className="text-cyan-400 hover:underline">See how we write for our own Delhi landing pages →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-16 lg:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">How a content engagement works</h2>
          <p className="text-gray-400 text-base md:text-lg mb-12 text-center">Four phases from keyword research to published content.</p>
          <ol className="space-y-5">
            {[
              { num: "01", title: "Keyword & competitor research", desc: "We identify the topics your audience is searching for and analyse what your competitors have published. The output is a prioritised list of content opportunities ranked by business impact." },
              { num: "02", title: "Content brief & outline", desc: "Each article gets a detailed brief: target keyword, secondary keywords, heading structure, word count target, internal links to include, and key points to cover. You approve the outline before writing starts." },
              { num: "03", title: "Writing & editorial review", desc: "Our writers draft the content, then an editor reviews for accuracy, readability, SEO compliance, and brand voice consistency. You receive the draft for feedback before publication." },
              { num: "04", title: "Publish, promote & track", desc: "We format and publish the content in your CMS, add schema markup, and submit to Google Search Console. Monthly rank tracking shows you which articles are gaining positions and driving traffic." },
            ].map((step) => (
              <li key={step.num} className="flex gap-5 items-start p-5 rounded-2xl bg-navy-800/30 border border-white/5">
                <span className="shrink-0 w-10 h-10 rounded-xl bg-emerald-900/30 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">{step.num}</span>
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
      <CaseStudyGrid heading="Content projects" subheading="Writing and strategy work for real clients.">
        <CaseStudyCard
          title="Ongoing content & social media retainer"
          client="Viabtech (Canon/Epson dealer, Tanzania)"
          industry="Office Equipment & Supplies"
          location="Tanzania (remote)"
          stack={["Content Strategy", "Social Media", "Google Business Profile"]}
          results={[
            "Monthly content calendar with industry-specific posting schedule",
            "Product-focused social media copy for Instagram and Facebook",
            "Google Business Profile posts and review response management",
          ]}
          href="/portfolio"
        />
        <CaseStudyCard
          title="Product catalogue copy"
          client="Trudanaz Pharmaceuticals"
          industry="Pharmaceutical"
          location="Delhi NCR"
          stack={["Website Copy", "Product Descriptions", "WordPress"]}
          results={[
            "Product descriptions for full pharmaceutical catalogue",
            "Service page copy with technical accuracy review",
            "Meta titles and descriptions for all catalogue pages",
          ]}
          href="/portfolio"
        />
      </CaseStudyGrid>

      {/* WHO IT'S FOR + PRICING */}
      <section className="py-16 lg:py-20 bg-navy-800/20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Content pricing</h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            Content is priced per piece for one-off projects or as a monthly retainer for ongoing publishing. Retainers include strategy, writing, editing, and CMS publishing.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { label: "Blog Articles", range: "₹3,000 – ₹8,000/article", note: "1,500-3,000 words, keyword-optimised, published in CMS" },
              { label: "Website Copy", range: "₹15,000 – ₹40,000", note: "Full website copy package — 5-10 pages with SEO optimisation" },
              { label: "Content Retainer", range: "₹20,000 – ₹50,000/mo", note: "4-8 articles/month, strategy, publishing, rank tracking" },
            ].map((tier, i) => (
              <div key={i} className="p-6 rounded-2xl bg-navy-800/40 border border-white/5 text-center">
                <h3 className="text-lg font-bold text-white mb-2">{tier.label}</h3>
                <div className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-3">{tier.range}</div>
                <p className="text-gray-500 text-sm">{tier.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        heading="Content strategy FAQs"
        subheading="Common questions about our content and SEO writing services."
        items={faqItems}
      />

      {/* CTA */}
      <CtaBanner
        heading="Need content that ranks and converts?"
        sub="Let us build a content strategy tailored to your business goals."
        whatsappNumber="917838583051"
        phone="+91-78385-83051"
        whatsappMessage="Hi! I need content writing and SEO help. Can we discuss?"
      />
    </>
  );
};

export default ContentStrategyPage;
