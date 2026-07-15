'use client';

import React, { useState } from 'react';
import {
  Monitor, Smartphone, PenTool, Type, Megaphone, Radio,
  Tv, Bus, Plane, Train, Film, Newspaper, MapPin,
  Layers, ShoppingCart, Globe, Search, BarChart,
  Video, Mic, Palette, Code, CheckCircle2, Rocket, Zap, ChevronDown
} from 'lucide-react';
import ServiceFormPopup from './ServiceFormPopup';

interface ServicesPageProps {
  category?: string;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ category: propCategory }) => {
  const [activeCategory, setActiveCategory] = useState(propCategory || 'web');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedSubService, setSelectedSubService] = useState('');

  const handleStartClick = (serviceName: string, subServiceName: string) => {
    setSelectedService(serviceName);
    setSelectedSubService(subServiceName);
    setIsPopupOpen(true);
  };

  const categories = [
    { id: 'web', label: 'Web Development', icon: Monitor, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
    { id: 'marketing', label: 'Marketing', icon: Megaphone, color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { id: 'design', label: 'Design', icon: Palette, color: 'text-pink-400', bg: 'bg-pink-400/10' },
    { id: 'content', label: 'Content', icon: Type, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    { id: 'app', label: 'App Dev', icon: Smartphone, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { id: 'pr', label: 'PR & Ads', icon: Radio, color: 'text-orange-400', bg: 'bg-orange-400/10' },
  ];

  const servicesData: any = {
    web: {
      title: "Web Development",
      description: "Custom digital experiences engineered for performance and conversion.",
      items: [
        { name: 'One Page Website', desc: 'High-impact single page sites perfect for portfolios or specific campaigns.' },
        { name: 'Landing Page', desc: 'Conversion-optimized pages designed to turn visitors into leads.' },
        { name: 'Business Website', desc: 'Professional corporate presence to establish authority and trust.' },
        { name: 'Product Showcase', desc: 'Interactive displays to highlight product features and benefits.' },
        { name: 'E-commerce', desc: 'Full-featured online stores with secure payment gateways.' },
        { name: 'Agency Website', desc: 'Creative portfolio showcases for creative agencies.' },
        { name: 'WordPress', desc: 'Flexible and scalable content management system.' },
        { name: 'Shopify', desc: 'Robust e-commerce platform for online sales.' },
        { name: 'Webflow', desc: 'Visual development for pixel-perfect sites.' },
        { name: 'Wix', desc: 'Rapid website creation with drag-and-drop ease.' },
        { name: 'Framer', desc: 'Interactive and high-fidelity site design.' },
        { name: 'WooCommerce', desc: 'Powerful e-commerce plugin for WordPress.' },
      ],
      benefits: [
        { title: "Scalable Architecture", desc: "Built to grow with your business, handling millions of request without hiccups.", icon: Layers },
        { title: "SEO-Ready Code", desc: "Clean, semantic structure that search engines love right out of the box.", icon: Search },
        { title: "Blazing Fast Speed", desc: "Optimized for Core Web Vitals to ensure sub-second load times.", icon: Zap }
      ],
      process: [
        { step: "01", title: "Discovery", desc: "We map out your user flows and technical requirements." },
        { step: "02", title: "Wireframing", desc: "Skeletal blueprints to define structure and UX." },
        { step: "03", title: "Development", desc: "Writing clean, modular code with modern best practices." },
        { step: "04", title: "Launch", desc: "Rigorous testing and seamless deployment to production." }
      ],
      faq: [
        { q: "What tech stack do you use?", a: "We specialize in React, Next.js, Node.js, and Tailwind CSS for modern, fast web applications." },
        { q: "Is hosting included?", a: "We can set up hosting on platforms like Vercel or AWS, but the subscription is typically direct to you." },
        { q: "Do you offer maintenance?", a: "Yes, we have monthly packages for updates, security patches, and content changes." },
        { q: "Will it be mobile responsive?", a: "100%. We design mobile-first to ensure perfect rendering on smartphones and tablets." }
      ]
    },
    marketing: {
      title: "Digital Marketing",
      description: "Data-driven campaigns that drive real growth and ROI.",
      items: [
        { name: 'Google Ads', desc: 'PPC campaigns that capture high-intent traffic.' },
        { name: 'SEO', desc: 'Search Engine Optimization to rank higher organically.' },
        { name: 'Google Shopping Ads', desc: 'Direct product listings on Google Search.' },
        { name: 'Facebook Ads', desc: 'Targeted social campaigns based on user demographics.' },
        { name: 'Instagram Ads', desc: 'Visual storytelling ads to build brand awareness.' },
        { name: 'Display Advertising', desc: 'Visual banner networks across the web.' },
        { name: 'Google Mobile Ads', desc: 'App and mobile-first advertising strategies.' },
        { name: 'Influencer Marketing', desc: 'Leverage authority figures to reach new audiences.' },
        { name: 'Remarketing Ads', desc: 'Re-engage visitors who left without converting.' },
      ],
      benefits: [
        { title: "High ROI Focus", desc: "We track every dollar spent to maximize your return on ad spend.", icon: BarChart },
        { title: "Targeted Reach", desc: "Precision capability to reach your exact ideal customer profile.", icon: Search },
        { title: "Real-time Reporting", desc: "Live dashboards so you always know how your campaigns are performing.", icon: Monitor }
      ],
      process: [
        { step: "01", title: "Audit", desc: "Deep dive into your current presence and competitors." },
        { step: "02", title: "Strategy", desc: "Identifying the most profitable channels and messaging." },
        { step: "03", title: "Campaign Setup", desc: "Creating ads, landing pages, and tracking pixels." },
        { step: "04", title: "Optimization", desc: "Daily A/B testing and budget adjustments." }
      ],
      faq: [
        { q: "What is the minimum budget?", a: "It varies, but we recommend a minimum ad spend of $1000/mo to see significant data-driven results." },
        { q: "How long until I see results?", a: "PPC can show results in days. SEO typically takes 3-6 months for substantial traction." },
        { q: "Do I own my ad accounts?", a: "Absolutely. You maintain full ownership and transparency of all accounts and data." },
        { q: "Do you handle the creative?", a: "Yes, our team designs all ad visuals and writes the copy." }
      ]
    },
    design: {
      title: "Design & Creative",
      description: "Visual identity that makes your brand memorable.",
      items: [
        { name: 'UI/UX Design', desc: 'Intuitive user interfaces and seamless experiences.' },
        { name: 'Branding', desc: 'Complete identity systems including voice and tone.' },
        { name: 'Catalogue', desc: 'Digital and print brochures for your products.' },
        { name: 'Logos', desc: 'Memorable brand marks that stand out.' },
        { name: 'Banners', desc: 'High-CTR ad creatives for all platforms.' },
        { name: 'Social Media Posts', desc: 'Engaging social content for daily feeds.' },
        { name: 'Video Editing', desc: 'Professional post-production for reels and ads.' },
        { name: 'Animations', desc: 'Motion graphics and Lottie animations.' },
        { name: '3D Modeling', desc: 'Immersive 3D assets for web and print.' },
      ],
      benefits: [
        { title: "User-Centric", desc: "Designs based on psychology and user behavior patterns.", icon: Globe },
        { title: "Brand Consistency", desc: "Uniform visual language across all your touchpoints.", icon: Palette },
        { title: "Conversion Design", desc: "Aesthetics that don't just look good, but sell.", icon: ShoppingCart }
      ],
      process: [
        { step: "01", title: "Moodboard", desc: "Visual exploration to align on style and vibe." },
        { step: "02", title: "Concepts", desc: "Drafting initial design directions for feedback." },
        { step: "03", title: "Refinement", desc: "Iterating based on your input to perfect the details." },
        { step: "04", title: "Handoff", desc: "Delivering production-ready assets in all formats." }
      ],
      faq: [
        { q: "How many revisions do I get?", a: "We typically include 3 rounds of major revisions to ensure you're happy." },
        { q: "What file formats do you deliver?", a: "Everything you need: AI, PSD, FIG, PNG, SVG, and PDF." },
        { q: "Do you do print design?", a: "Yes, we handle everything from business cards to billboards." },
        { q: "Can you refresh an existing logo?", a: "Yes, we can modernize your brand while keeping its core heritage." }
      ]
    },
    content: {
      title: "Content Services",
      description: "Words that persuade, inform, and rank.",
      items: [
        { name: 'Content Writing', desc: 'Compelling copy for websites and landing pages.' },
        { name: 'Blog Writing', desc: 'SEO-optimized articles to drive organic traffic.' },
        { name: 'Data Entry', desc: 'Accurate data management and organization.' },
      ],
      benefits: [
        { title: "SEO Optimized", desc: "Content written to rank on Google for your target keywords.", icon: Search },
        { title: "Brand Voice", desc: "We adapt to your unique tone, whether professional or playful.", icon: Mic },
        { title: "Research Backed", desc: "Deep research ensures authority and accuracy.", icon: Layers }
      ],
      process: [
        { step: "01", title: "Research", desc: "Keyword analysis and competitor content audit." },
        { step: "02", title: "Drafting", desc: "Writing compelling copy structured for readability." },
        { step: "03", title: "Review", desc: "Editing for flow, grammar, and conversion impact." },
        { step: "04", title: "Publish", desc: "Formatting and uploading to your CMS." }
      ],
      faq: [
        { q: "Do you check for plagiarism?", a: "Yes, all content is run through premium tools to ensure 100% originality." },
        { q: "Can you upload to WordPress?", a: "Yes, we can format and publish directly to your blog." },
        { q: "Do you use AI?", a: "We use AI for research assistance, but all final writing is human-crafted for nuance." },
        { q: "What industries do you cover?", a: "We have experience in Tech, Finance, Health, Retail, and more." }
      ]
    },
    app: {
      title: "App Development",
      description: "Native and cross-platform mobile solutions.",
      items: [
        { name: 'iOS Development', desc: 'Premium apps optimized for iPhone & iPad.' },
        { name: 'Android Development', desc: 'Scalable apps for the Google Play Store.' },
        { name: 'Native Development', desc: 'High-performance native code for specific platforms.' },
      ],
      benefits: [
        { title: "Native Performance", desc: "Silky smooth 60fps performance on all devices.", icon: Smartphone },
        { title: "Cross-Platform", desc: "Build once with React Native/Flutter to deploy everywhere.", icon: Code },
        { title: "Secure", desc: "Enterprise-grade encryption and data protection.", icon: CheckCircle2 }
      ],
      process: [
        { step: "01", title: "UX/UI", desc: "Mapping screen flows and designing the interface." },
        { step: "02", title: "Development", desc: "Coding the frontend and backend logic." },
        { step: "03", title: "Testing", desc: "QA on multiple real devices to squash bugs." },
        { step: "04", title: "Submission", desc: "Handling the App Store/Play Store review process." }
      ],
      faq: [
        { q: "Native vs Cross-platform?", a: "Native is best for heavy performance needs; Cross-platform is faster/cheaper to build." },
        { q: "Do you handle App Store rejection?", a: "Yes, we know the guidelines inside out and handle all compliance." },
        { q: "Can you update my existing app?", a: "Yes, we can take over legacy codebases for maintenance and features." },
        { q: "Does it include a backend?", a: "We build full-stack solutions, including the API and database." }
      ]
    },
    pr: {
      title: "PR & Advertising",
      description: "Mass media reach for maximum brand awareness.",
      items: [
        { name: 'Radio Advertising', desc: 'Reach listeners on air locally or nationally.' },
        { name: 'TV Advertising', desc: 'Prime time commercials for mass visibility.' },
        { name: 'Outdoor Advertising', desc: 'Billboards and hoardings in high-traffic areas.' },
        { name: 'Metro Advertising', desc: 'In-train and station branding.' },
        { name: 'Auto & Bus Ads', desc: 'Transit media moving your brand across the city.' },
        { name: 'Bus Shelter Ads', desc: 'High-visibility street level advertising.' },
        { name: 'Newspaper Ads', desc: 'Print media circulation for established trust.' },
        { name: 'Airlines Ads', desc: 'In-flight and boarding pass placement.' },
        { name: 'Cinema Ads', desc: 'Big screen pre-roll ads before movies.' },
        { name: 'OTT Advertising', desc: 'Ads on streaming platforms like Hotstar/Netflix.' },
        { name: 'Railway Ads', desc: 'Train station visibility for mass commuters.' },
        { name: 'Airport Ads', desc: 'Premium targeting for frequent travelers.' },
      ],
      benefits: [
        { title: "Mass Reach", desc: "Get your brand in front of millions of eyes instantly.", icon: Globe },
        { title: "Brand Authority", desc: "Being on TV or Billboards establishes market dominance.", icon: CheckCircle2 },
        { title: "Strategic Placement", desc: "We buy media where your audience actually spends time.", icon: MapPin }
      ],
      process: [
        { step: "01", title: "Media Planning", desc: "Selecting the right mix of channels for your budget." },
        { step: "02", title: "Creative", desc: "Producing TVCs, jingles, or billboard designs." },
        { step: "03", title: "Buying", desc: "Negotiating the best slots and rates with networks." },
        { step: "04", title: "Measurement", desc: "Tracking reach, frequency, and brand lift." }
      ],
      faq: [
        { q: "Is TV advertising expensive?", a: "It can be tailored. We have packages ranging from local cable to national prime time." },
        { q: "How do you track billboards?", a: "We use traffic data, surveys, and unique call-to-actions to estimate impact." },
        { q: "Can I choose the locations?", a: "Yes, you can cherry-pick specific hoardings or metro lines." },
        { q: "Do you facilitate cinema ads?", a: "Yes, we can place ads in PVR, INOX, and detailed regional networks." }
      ]
    }
  };

  const currentData = servicesData[activeCategory];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-navy-900">

      {/* Hero Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Comprehensive <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Digital Solutions
          </span>
        </h1>
        <p className="relative z-10 text-xl text-gray-400 max-w-2xl mx-auto">
          From pixel-perfect designs to mass media advertising, we cover every aspect of your brand's growth journey.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-32 space-y-2 bg-navy-800/50 p-4 rounded-2xl border border-white/5 backdrop-blur-xl">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-300 ${activeCategory === cat.id
                    ? `${cat.bg} ${cat.color} font-bold shadow-lg`
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  <cat.icon size={20} />
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <div className="bg-navy-800/30 border border-white/5 rounded-3xl p-8 min-h-[600px] animate-fade-in">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">{currentData.title}</h2>
                <p className="text-gray-400 text-lg">{currentData.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentData.items.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="group p-6 pb-4 bg-navy-900 border border-white/5 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-900/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                        <CheckCircle2 size={16} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    {/* Hover CTA Button */}
                    <div className="mt-4 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300 ease-out">
                      <button
                        onClick={() => handleStartClick(currentData.title, item.name)}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-navy-900 font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                      >
                        <Rocket size={16} />
                        Let's Start
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-24 space-y-24">

        {/* Dynamic Benefits Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us for {currentData.title}?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We don't just deliver services; we deliver measurable business outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentData.benefits.map((benefit: any, i: number) => (
              <div key={i} className="bg-navy-800/30 border border-white/5 p-8 rounded-2xl hover:bg-white/5 transition-all text-center group">
                <div className="w-14 h-14 mx-auto bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="text-cyan-400 w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Process Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our {currentData.title} Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A proven roadmap to digital success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 w-3/4 mx-auto z-0"></div>

            {currentData.process.map((phase: any, i: number) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto bg-navy-900 border-2 border-cyan-500/30 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-cyan-900/20 group hover:border-cyan-400 transition-colors">
                  <span className="text-2xl font-bold text-cyan-400">{phase.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed px-4">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic FAQ Section */}
        <div className="max-w-3xl mx-auto pb-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {currentData.faq.map((item: any, i: number) => (
              <div key={i} className="bg-navy-800/30 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-colors">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-medium text-white text-lg">{item.q}</span>
                    <span className="transition-transform group-open:rotate-180">
                      <ChevronDown className="text-cyan-400" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm animate-fade-in">
                    {item.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center pb-10">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-navy-900 font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition-all"
          >
            Ready to Scale? Let's Talk
            <Rocket className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* Service Form Popup */}
      <ServiceFormPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        serviceName={selectedService}
        subServiceName={selectedSubService}
      />
    </div>
  );
};

export default ServicesPage;