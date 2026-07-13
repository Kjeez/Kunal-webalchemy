import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Radio, Tv, Bus, MapPin, Film, ArrowRight, Globe, Megaphone
} from "lucide-react";
import {
  BreadcrumbNav, FaqSection, CaseStudyCard, CaseStudyGrid, CtaBanner,
} from "../seo";

const PrAdvertisingPage: React.FC = () => {
  useEffect(() => {
    document.title = "PR & Advertising Services | WebAlchemy";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute("content", "Outdoor, TV, radio, metro, cinema, and transit advertising across Delhi NCR. Strategic media buying for maximum reach.");
    }
  }, []);

  const faqItems = [
    {
      question: "How do you measure the effectiveness of outdoor advertising?",
      answer:
        "Outdoor media is harder to track than digital, but not impossible. We use a combination of methods: unique phone numbers or QR codes on each billboard for direct attribution, foot traffic data from location analytics providers, brand recall surveys before and after campaigns, and Google Trends data to measure branded search volume lifts. For transit media, we pair outdoor placements with geo-targeted digital retargeting so that people who pass your hoarding also see your ads online — creating a measurable digital trail for an offline touchpoint.",
    },
    {
      question: "What is the minimum budget for a TV advertising campaign?",
      answer:
        "TV advertising ranges widely. Local cable network spots in Delhi NCR can start from ₹50,000 for a week-long run — effective for hyper-local businesses like clinics, coaching centres, or real estate projects. Regional satellite channels cost ₹1-3 lakhs for a meaningful campaign. National prime-time on Star, Zee, or Sony requires budgets of ₹10 lakhs and above to achieve sufficient frequency. We help you pick the right level based on your target geography and available budget.",
    },
    {
      question: "Can I choose specific billboard or metro station locations?",
      answer:
        "Yes. We work with inventory networks across Delhi NCR and can show you available locations with photos, dimensions, traffic counts, and pricing. You can hand-pick individual hoardings, metro station panels, bus shelter units, or train wraps based on your target market geography. For example, if your audience is in South Delhi, we can concentrate placements along Mehrauli-Gurgaon Road, Saket metro, and Select Citywalk vicinity. We negotiate rates directly with media owners to get the best possible pricing.",
    },
    {
      question: "Do you produce the ad creative or just handle media buying?",
      answer:
        "We handle both. Our creative team produces billboard designs, radio jingles, TV commercial scripts, and cinema pre-roll spots. For TV commercials that require video production, we work with production partners for filming and post-production while managing the creative direction. For simpler formats like hoarding designs and radio scripts, everything is done in-house.{\" \"}Our{\" \"}" +
        "design team ensures brand consistency across all media formats.",
    },
    {
      question: "How does outdoor advertising complement digital marketing?",
      answer:
        "The best campaigns use offline and online together. A billboard creates awareness and brand recognition — when that same person later sees your Google or Instagram ad, they are far more likely to click because the brand is already familiar. We set up geo-fencing campaigns that serve digital ads to people who have been near your outdoor placements, connecting the offline exposure to measurable online actions. This integrated approach typically improves digital ad click-through rates by 20-30%.",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28">
        <BreadcrumbNav
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "PR & Advertising" },
          ]}
        />
      </div>

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-900/20 border border-orange-500/30 mb-6">
            <Radio className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-medium text-orange-300 tracking-wide uppercase">PR & Advertising</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
            PR & Advertising —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Outdoor, TV, Radio & Transit&nbsp;Media
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mb-8">
            Digital marketing is powerful, but some messages need to be physically present in the real world. Billboards along busy highways, metro station takeovers, radio spots during morning commutes, cinema pre-roll ads before blockbusters — traditional media still commands attention in ways a social media post cannot. We handle the entire chain: media planning to identify where your audience is, creative production to make the ad memorable, rate negotiation with media owners, and campaign monitoring to ensure your placements go live as contracted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/917838583051?text=Hi!%20I%20need%20help%20with%20outdoor%20or%20media%20advertising.%20Can%20we%20discuss?" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg shadow-lg hover:shadow-orange-500/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
              Plan Your Campaign <ArrowRight className="w-5 h-5" />
            </a>
            <Link to="/services/digital-marketing" className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              Prefer Digital Marketing?
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 lg:py-20 bg-navy-800/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Advertising channels we manage</h2>
          <p className="text-gray-400 text-base md:text-lg mb-12 max-w-3xl">
            From roadside hoardings to prime-time television — we plan, produce, and buy media across every traditional channel that reaches your audience.
          </p>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-orange-900/30 border border-orange-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-400" />
                </span>
                <h3 className="text-xl font-bold text-white">Outdoor & Billboard Advertising</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Hoardings, unipoles, gantries, bus shelters, and building wraps across Delhi NCR and other Indian cities. We source available inventory, negotiate rates with media owners, and produce print-ready artwork. Location selection is driven by traffic data and proximity to your target market — we do not just pick the biggest billboard, we pick the smartest one for your budget. Campaigns can run from 2 weeks to annual contracts depending on your goals.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-red-900/30 border border-red-500/20 flex items-center justify-center">
                  <Tv className="w-5 h-5 text-red-400" />
                </span>
                <h3 className="text-xl font-bold text-white">Television & OTT Advertising</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                TV remains the most powerful medium for brand building at scale. We plan and buy ad spots on local cable networks, regional satellite channels, and national broadcasters. For digital-first brands, we also manage OTT placements on Hotstar, SonyLIV, and YouTube pre-roll. We handle everything from a 15-second brand sting to a full 30-second TVC — scripting, production coordination with video partners, and post-production editing.{" "}
                <Link to="/services/design-branding" className="text-cyan-400 hover:underline">We design the creative too →</Link>
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-yellow-900/30 border border-yellow-500/20 flex items-center justify-center">
                  <Bus className="w-5 h-5 text-yellow-400" />
                </span>
                <h3 className="text-xl font-bold text-white">Transit Media (Metro, Bus, Auto, Rail)</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Delhi Metro reaches over 27 lakh riders daily. We place ads inside trains, on station walls, at escalator panels, and on digital screens at key interchange stations. Bus panel advertising covers routes across Delhi, while auto-back branding gives you street-level visibility in specific neighbourhoods. Railway station advertising targets intercity commuters and is particularly effective for FMCG, education, and real estate brands.{" "}
                <Link to="/website-developer-delhi" className="text-cyan-400 hover:underline">See our Delhi presence →</Link>
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-purple-900/30 border border-purple-500/20 flex items-center justify-center">
                  <Film className="w-5 h-5 text-purple-400" />
                </span>
                <h3 className="text-xl font-bold text-white">Cinema & Radio Advertising</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Cinema pre-roll ads play on the biggest screen your audience will see all week — in PVR, INOX, and Cinepolis halls. This format is unblockable and commands full attention. Radio advertising on stations like Radio Mirchi, Red FM, and All India Radio remains cost-effective for local reach, especially during morning and evening drive times. We write scripts, produce jingles, and buy slots across your target geography.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-16 lg:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">How an advertising campaign works</h2>
          <p className="text-gray-400 text-base md:text-lg mb-12 text-center">From media planning to campaign measurement.</p>
          <ol className="space-y-5">
            {[
              { num: "01", title: "Media planning & budgeting", desc: "We analyse your target audience, geography, and budget to recommend the right mix of channels. The output is a media plan with reach estimates, frequency targets, and cost breakdowns per channel." },
              { num: "02", title: "Creative production", desc: "Billboard artwork, radio scripts, TV commercial storyboards, cinema slides — all produced by our creative team. For TV production requiring film crews, we coordinate with specialist partners while maintaining creative control." },
              { num: "03", title: "Media buying & negotiation", desc: "We negotiate rates with media owners, book placements, and manage the logistics of getting your artwork printed, shipped, and installed. For broadcast, we secure optimal time slots within your budget." },
              { num: "04", title: "Campaign monitoring & reporting", desc: "Physical verification of outdoor placements, broadcast confirmation certificates, and digital tracking for measurable touchpoints. Post-campaign reports include reach estimates, cost analysis, and recommendations for future campaigns." },
            ].map((step) => (
              <li key={step.num} className="flex gap-5 items-start p-5 rounded-2xl bg-navy-800/30 border border-white/5">
                <span className="shrink-0 w-10 h-10 rounded-xl bg-orange-900/30 border border-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-sm">{step.num}</span>
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
      <CaseStudyGrid heading="Advertising & cross-channel projects" subheading="Campaigns that connect offline and online.">
        <CaseStudyCard
          title="Cross-channel marketing — offline and digital"
          client="Viabtech (Canon/Epson dealer, Tanzania)"
          industry="Office Equipment & Supplies"
          location="Tanzania (remote)"
          stack={["Meta Ads", "Instagram", "Google Business Profile", "Print"]}
          results={[
            "Integrated digital and traditional marketing strategy",
            "Social media presence management alongside offline campaigns",
            "Google Business Profile optimisation for local visibility",
          ]}
          href="/portfolio"
        />
      </CaseStudyGrid>

      {/* WHO IT'S FOR + PRICING */}
      <section className="py-16 lg:py-20 bg-navy-800/20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Advertising pricing</h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            Traditional media pricing varies enormously by channel, geography, and duration. Here are typical ranges for Delhi NCR campaigns.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { label: "Outdoor / Billboard", range: "₹20,000 – ₹2,00,000/mo", note: "Per location. Bus shelters to highway unipoles." },
              { label: "Radio Campaign", range: "₹50,000 – ₹3,00,000", note: "30-second spots, major FM stations, 2-4 week runs" },
              { label: "TV / Cinema", range: "₹50,000 – ₹10,00,000+", note: "Local cable to national prime-time and multiplex pre-roll" },
            ].map((tier, i) => (
              <div key={i} className="p-6 rounded-2xl bg-navy-800/40 border border-white/5 text-center">
                <h3 className="text-lg font-bold text-white mb-2">{tier.label}</h3>
                <div className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-3">{tier.range}</div>
                <p className="text-gray-500 text-sm">{tier.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        heading="PR & advertising FAQs"
        subheading="Questions about traditional media and advertising campaigns."
        items={faqItems}
      />

      {/* CTA */}
      <CtaBanner
        heading="Plan your advertising campaign"
        sub="Tell us your target audience, geography, and budget — we will recommend the right media mix."
        whatsappNumber="917838583051"
        phone="+91-78385-83051"
        whatsappMessage="Hi! I need help with outdoor or media advertising. Can we discuss?"
      />
    </>
  );
};

export default PrAdvertisingPage;
