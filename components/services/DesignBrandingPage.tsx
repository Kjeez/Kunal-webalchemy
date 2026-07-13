import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Palette, PenTool, Layers, Image, Sparkles, ArrowRight, Eye
} from "lucide-react";
import {
  BreadcrumbNav, FaqSection, CaseStudyCard, CaseStudyGrid, CtaBanner,
} from "../seo";

const DesignBrandingPage: React.FC = () => {
  useEffect(() => {
    document.title = "UI/UX Design & Branding | WebAlchemy";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute("content", "Professional UI/UX design, logo creation, and brand identity systems. Make your business look as good as it performs.");
    }
  }, []);

  const faqItems = [
    {
      question: "What is the difference between UI design and UX design?",
      answer:
        "UX (User Experience) design is about how your website or app works — the flow a user follows to complete a task, where buttons are placed, how information is structured. UI (User Interface) design is about how it looks — typography, colour palette, spacing, visual hierarchy. We handle both together because they are inseparable: a beautiful interface that confuses users is as bad as an ugly one that works. Our design process starts with UX wireframes to nail the flow, then applies UI polish on top.",
    },
    {
      question: "How many logo concepts will I see before choosing one?",
      answer:
        "We present 3-4 distinct logo directions in the first round. Each concept explores a different visual approach — typographic, symbol-based, abstract mark, or combination. Once you pick a direction, we refine it through 2-3 rounds of revisions to perfect proportions, colour, and versatility across different sizes and backgrounds. You receive the final logo in all formats: vector (AI, SVG, EPS), raster (PNG with transparent background), and PDF for print.",
    },
    {
      question: "Can you design for print as well as digital?",
      answer:
        "Yes. Beyond websites and apps, we design business cards, letterheads, brochures, product packaging, trade show banners, and vehicle wraps. Everything is produced with CMYK colour profiles for print accuracy and includes bleed marks and crop marks for commercial printers. If you need a complete brand identity system — digital and physical — we can deliver the full package.",
    },
    {
      question: "Do you design social media templates I can reuse?",
      answer:
        "Absolutely. We create branded Canva or Figma templates for Instagram posts, stories, LinkedIn banners, and Facebook covers. These templates let your team produce on-brand social content without a designer for each post. The templates include editable text areas, image placeholders, and your brand colours locked in so nothing drifts off-brand. A typical template pack includes 10-15 layouts across formats.",
    },
    {
      question: "What if I already have a logo but need a full brand system?",
      answer:
        "We work with existing logos regularly. A brand system goes beyond the logo — it includes your colour palette with hex and CMYK codes, typography scale, icon style, image treatment guidelines, voice and tone notes, and application examples (email signatures, social profiles, presentation slides). We compile everything into a brand guidelines PDF that your team and external vendors can follow. If your existing logo needs minor refinement to work better at small sizes or on dark backgrounds, we handle that too.",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28">
        <BreadcrumbNav
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Design & Branding" },
          ]}
        />
      </div>

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-900/20 border border-pink-500/30 mb-6">
            <Palette className="w-4 h-4 text-pink-400" />
            <span className="text-xs font-medium text-pink-300 tracking-wide uppercase">Design & Branding</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
            UI/UX Design & Branding —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
              Visual Identity That&nbsp;Converts
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mb-8">
            People judge your business in under three seconds based on how it looks online. Our design team creates brand identities, website interfaces, and marketing collateral that make a strong first impression and hold up across every touchpoint — from a business card to a billboard to a mobile screen. We design with intent: every colour choice, layout decision, and typography pairing serves your conversion goals, not just aesthetics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/917838583051?text=Hi!%20I%20need%20design%20and%20branding%20help.%20Can%20we%20discuss?" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-gradient-to-r from-pink-600 to-orange-600 text-white font-bold text-lg shadow-lg hover:shadow-pink-500/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
              Start Your Brand Project <ArrowRight className="w-5 h-5" />
            </a>
            <Link to="/portfolio" className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              View Design Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 lg:py-20 bg-navy-800/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Design services we offer</h2>
          <p className="text-gray-400 text-base md:text-lg mb-12 max-w-3xl">
            From logo creation to full-scale product interfaces — design services structured around what businesses actually need.
          </p>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-pink-900/30 border border-pink-500/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-pink-400" />
                </span>
                <h3 className="text-xl font-bold text-white">UI/UX Design for Websites & Apps</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                We design interfaces that people actually enjoy using. Our process starts with user flow mapping and wireframes — figuring out the right structure before making it pretty. Then we move to high-fidelity Figma mockups with responsive variants for mobile, tablet, and desktop. Interactive prototypes let you click through the design before a developer writes a single line of code. We design for{" "}
                <Link to="/services/web-development" className="text-cyan-400 hover:underline">websites</Link>{" "}
                and <Link to="/services/app-development" className="text-cyan-400 hover:underline">mobile apps</Link> with equal depth.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-orange-900/30 border border-orange-500/20 flex items-center justify-center">
                  <PenTool className="w-5 h-5 text-orange-400" />
                </span>
                <h3 className="text-xl font-bold text-white">Logo Design & Brand Identity</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your logo is the visual cornerstone of your business. We design logos that work at every size — from a 16px favicon to a 10-foot trade show banner. Beyond the logo, we build complete brand identity systems: primary and secondary colour palettes, typography hierarchy, icon styles, photography direction, and a brand guidelines document your team can follow. The result is a cohesive look across your website, social media, packaging, and print materials.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-purple-900/30 border border-purple-500/20 flex items-center justify-center">
                  <Image className="w-5 h-5 text-purple-400" />
                </span>
                <h3 className="text-xl font-bold text-white">Marketing Collateral & Social Graphics</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Brochures, pitch decks, social media post templates, email headers, banner ads, product catalogues — all designed to match your brand system. We produce assets optimised for each platform's specifications so images are never stretched, cropped, or pixelated. For ongoing needs, we create reusable Canva or Figma templates your marketing team can edit independently.{" "}
                <Link to="/services/digital-marketing" className="text-cyan-400 hover:underline">See our marketing services →</Link>
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-cyan-900/30 border border-cyan-500/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                </span>
                <h3 className="text-xl font-bold text-white">Motion Graphics & Video Editing</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Static designs get scrolled past. We create animated social content, explainer motion graphics, logo animations (Lottie format for web), and short-form video edits for Instagram Reels and YouTube Shorts. Our motion work is designed to stop the scroll — punchy, branded, and optimised for mobile-first consumption. Video editing packages include caption overlays, b-roll sourcing, and music selection cleared for commercial use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-16 lg:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Our design process</h2>
          <p className="text-gray-400 text-base md:text-lg mb-12 text-center">Four stages that ensure the final design matches your vision — no surprises.</p>
          <ol className="space-y-5">
            {[
              { num: "01", title: "Brand discovery & moodboard", desc: "We study your market, competitors, and target audience. Then we assemble a visual moodboard — colours, textures, reference designs — to align on direction before any design work begins." },
              { num: "02", title: "Concept exploration", desc: "3-4 distinct design directions presented side by side. You see the range of possibilities and pick the direction that resonates most. Feedback is gathered in a single structured round." },
              { num: "03", title: "Refinement & iteration", desc: "The chosen direction is refined through 2-3 rounds of revision. Typography is dialled in, colours are tested in context, and responsive layouts are finalised for all screen sizes." },
              { num: "04", title: "Asset delivery & handoff", desc: "Final files delivered in all required formats — SVG, PNG, PDF, Figma source files. Brand guidelines compiled into a shareable document. If the design feeds into a development project, we hand off directly to our engineering team." },
            ].map((step) => (
              <li key={step.num} className="flex gap-5 items-start p-5 rounded-2xl bg-navy-800/30 border border-white/5">
                <span className="shrink-0 w-10 h-10 rounded-xl bg-pink-900/30 border border-pink-500/20 flex items-center justify-center text-pink-400 font-bold text-sm">{step.num}</span>
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
      <CaseStudyGrid heading="Design projects" subheading="Visual systems built for real businesses.">
        <CaseStudyCard
          title="Restaurant chain — complete design system"
          client="Bâton Rouge (Canadian restaurant chain)"
          industry="Restaurant & Hospitality"
          location="Canada (remote)"
          stack={["Figma", "WordPress", "Elementor"]}
          results={[
            "Homepage visual system with branded component library",
            "Menu page layouts with photography-first design approach",
            "Consistent brand experience across multilingual pages",
          ]}
          href="/portfolio"
        />
        <CaseStudyCard
          title="Corporate gifting — modern React interface"
          client="Kamlesh Group"
          industry="Corporate Gifting"
          location="Delhi"
          stack={["Figma", "React", "Tailwind CSS"]}
          results={[
            "Product showcase UI with category-based browsing",
            "Mobile-first layout optimised for WhatsApp sharing",
            "Dark-themed premium visual identity",
          ]}
          href="/portfolio"
        />
      </CaseStudyGrid>

      {/* WHO IT'S FOR + PRICING */}
      <section className="py-16 lg:py-20 bg-navy-800/20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pricing</h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            Design pricing varies widely depending on scope. A logo project is very different from a full product UI. Here are starting ranges to help you budget.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { label: "Logo & Brand Identity", range: "₹10,000 – ₹35,000", note: "Logo, colour palette, typography, brand guidelines PDF" },
              { label: "Website UI/UX Design", range: "₹15,000 – ₹60,000", note: "Figma mockups, responsive variants, interactive prototype" },
              { label: "Monthly Design Retainer", range: "₹20,000 – ₹50,000/mo", note: "Social graphics, marketing collateral, ad creatives, ongoing edits" },
            ].map((tier, i) => (
              <div key={i} className="p-6 rounded-2xl bg-navy-800/40 border border-white/5 text-center">
                <h3 className="text-lg font-bold text-white mb-2">{tier.label}</h3>
                <div className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 mb-3">{tier.range}</div>
                <p className="text-gray-500 text-sm">{tier.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        heading="Design & branding FAQs"
        subheading="Questions we get asked about our design services."
        items={faqItems}
      />

      {/* CTA */}
      <CtaBanner
        heading="Ready to elevate your brand?"
        sub="Let us create a visual identity your customers remember."
        whatsappNumber="917838583051"
        phone="+91-78385-83051"
        whatsappMessage="Hi! I need design and branding help. Can we discuss?"
      />
    </>
  );
};

export default DesignBrandingPage;
