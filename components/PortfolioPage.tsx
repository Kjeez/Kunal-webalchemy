'use client';

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Zap, ExternalLink } from "lucide-react";
import { projectsData, Project } from "../data/projectsData";
import {
  BreadcrumbNav, CaseStudyCard, CaseStudyGrid, CtaBanner,
} from "./seo";

const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    document.title = "Our Work — Web Development Portfolio | WebAlchemy";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute("content", "Web development, e-commerce, and marketing projects for businesses in Delhi NCR and internationally. See what we build.");
    }
  }, []);

  const categories = [
    "All", "Educational", "E-commerce", "Dental", "Corporate", "Travel", "Creative",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section className="relative w-full min-h-screen pt-24 pb-24 bg-navy-900 z-10 overflow-hidden text-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <BreadcrumbNav
          items={[
            { label: "Home", href: "/" },
            { label: "Portfolio" },
          ]}
        />

        {/* Header + Intro */}
        <div className="mt-8 mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Our Work —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Web Development & Marketing Projects
            </span>
          </h1>
          <div className="space-y-4 text-gray-400 text-base md:text-lg leading-relaxed">
            <p>
              Every project below is real work delivered to a real client. We do not show concept designs or spec work — everything here is live, functioning, and generating results for the business behind it. Our portfolio spans business websites, e-commerce stores, custom web applications, and ongoing digital marketing retainers across industries and geographies.
            </p>
            <p>
              We work primarily with small-to-mid-sized businesses that need quality work without the overhead of a large agency. Each project is scoped, designed, built, and supported by the same core team — from the first discovery call to post-launch maintenance. If a project below matches what you need, <a href="https://wa.me/917838583051?text=Hi!%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">reach out and we can walk you through the details</a>.
            </p>
          </div>
        </div>

        {/* ============================================================
            CASE STUDY CARDS — featured projects with detail
        ============================================================ */}
        <CaseStudyGrid
          heading="Featured projects"
          subheading="Detailed scope and deliverables for our key engagements."
        >
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
            href="#"
          />

          <CaseStudyCard
            title="Performance optimisation — restaurant website"
            client="Bento Sushi"
            industry="Food & Beverage"
            location="Canada (remote project)"
            stack={["WordPress", "WP Rocket", "Core Web Vitals"]}
            results={[
              "Reduced page load time significantly after speed audit",
              "Fixed CLS layout shift issues across mobile and desktop",
              "Image compression and lazy-load implementation",
            ]}
            href="#"
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
            href="#"
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
            href="#"
          />

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
            href="#"
          />
        </CaseStudyGrid>

        {/* ============================================================
            SCREENSHOT GALLERY — existing project cards
        ============================================================ */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              Browse our complete project gallery filtered by industry.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-cyan-500 text-navy-900 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    : "bg-navy-800/50 text-gray-400 border-white/5 hover:border-cyan-500/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20">
          <CtaBanner
            heading="Like what you see? Let us build yours."
            sub="Tell us about your project — free consultation, no obligation."
            whatsappNumber="917838583051"
            phone="+91-78385-83051"
            whatsappMessage="Hi! I saw your portfolio and want to discuss a project."
          />
        </div>
      </div>
    </section>
  );
};

// --- Helper Components ---
const PortfolioCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-navy-800/30 block"
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex justify-between items-center mb-2">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <ExternalLink className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          {project.metric && (
            <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-semibold text-gray-300">
                {project.metric}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/30 rounded-2xl pointer-events-none transition-colors" />
    </a>
  );
};

export default PortfolioPage;
