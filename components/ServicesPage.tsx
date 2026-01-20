import React, { useState } from 'react';
import { 
  Monitor, Smartphone, PenTool, Type, Megaphone, Radio, 
  Tv, Bus, Plane, Train, Film, Newspaper, MapPin, 
  Layers, ShoppingCart, Globe, Search, BarChart, 
  Video, Mic, Palette, Code, CheckCircle2
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('web');

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
      ]
    },
    content: {
      title: "Content Services",
      description: "Words that persuade, inform, and rank.",
      items: [
        { name: 'Content Writing', desc: 'Compelling copy for websites and landing pages.' },
        { name: 'Blog Writing', desc: 'SEO-optimized articles to drive organic traffic.' },
        { name: 'Data Entry', desc: 'Accurate data management and organization.' },
      ]
    },
    app: {
      title: "App Development",
      description: "Native and cross-platform mobile solutions.",
      items: [
        { name: 'iOS Development', desc: 'Premium apps optimized for iPhone & iPad.' },
        { name: 'Android Development', desc: 'Scalable apps for the Google Play Store.' },
        { name: 'Native Development', desc: 'High-performance native code for specific platforms.' },
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
      ]
    }
  };

  const currentData = servicesData[activeCategory];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-navy-900">
      
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
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-300 ${
                    activeCategory === cat.id 
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
                    className="group p-6 bg-navy-900 border border-white/5 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-900/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                        <CheckCircle2 size={16} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesPage;