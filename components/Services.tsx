import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceFormPopup from './ServiceFormPopup';
import {
  Code2,
  Target,
  ShieldCheck,
  Mic,
  Smartphone,
  Palette,
  ArrowRight,
  Sparkles,
  Check,
  Zap,
  MousePointer2,
  X
} from 'lucide-react';

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  popular: boolean;
  color: string;
  categoryId: string;
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showFormPopup, setShowFormPopup] = useState(false);
  const [formService, setFormService] = useState<string>('');
  const navigate = useNavigate();

  const services: Service[] = [
    {
      id: "01",
      icon: Code2,
      title: "Website Development",
      description: "Custom websites that convert visitors into customers.",
      features: ["Responsive Design", "Fast Performance", "SEO Optimized", "7-Day Delivery"],
      popular: true,
      color: "from-cyan-400 to-blue-500",
      categoryId: "web"
    },
    {
      id: "02",
      icon: Target,
      title: "Digital Marketing",
      description: "Data-driven campaigns that grow your business.",
      features: ["Google Ads", "Meta Ads", "SEO Strategy", "Analytics & Reporting"],
      popular: false,
      color: "from-purple-400 to-pink-500",
      categoryId: "marketing"
    },
    {
      id: "03",
      icon: ShieldCheck,
      title: "Website Maintenance",
      description: "Keep your website secure, fast, and up-to-date.",
      features: ["Monthly Updates", "Security Monitoring", "Performance Optimization", "24/7 Support"],
      popular: false,
      color: "from-emerald-400 to-teal-500",
      categoryId: "web"
    },
    {
      id: "04",
      icon: Mic,
      title: "PR & Media",
      description: "Get featured in top publications and build your brand.",
      features: ["Media Placements", "Press Releases", "Brand Positioning", "Reputation Management"],
      popular: false,
      color: "from-orange-400 to-red-500",
      categoryId: "pr"
    },
    {
      id: "05",
      icon: Smartphone,
      title: "Mobile Apps",
      description: "iOS and Android apps that users love.",
      features: ["Native Development", "Cross-Platform", "App Store Launch", "Ongoing Support"],
      popular: false,
      color: "from-blue-400 to-indigo-500",
      categoryId: "app"
    },
    {
      id: "06",
      icon: Palette,
      title: "Branding & Design",
      description: "Visual identity that makes you memorable.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "UI/UX Design"],
      popular: false,
      color: "from-pink-400 to-rose-500",
      categoryId: "design"
    }
  ];

  const handleBookNow = () => {
    if (selectedService) {
      setFormService(selectedService.title);
      setSelectedService(null);
      setShowFormPopup(true);
    }
  };

  return (
    <>
      <section id="services" className="relative w-full py-24 lg:py-32 bg-navy-900 z-20 overflow-hidden">

        {/* Background Elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
            <div className="max-w-2xl">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-cyan-400 font-bold tracking-wider text-sm uppercase">Our Expertise</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Digital Solutions for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Modern Businesses</span>
              </h2>
            </div>

            <p className="text-gray-400 max-w-sm text-base sm:text-lg leading-relaxed">
              We combine design, technology, and strategy to build products that win.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(service)}
                className="group relative flex flex-col h-full bg-navy-800/40 backdrop-blur-sm rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(0,217,255,0.1)] hover:-translate-y-2 overflow-hidden cursor-pointer"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-bl from-cyan-500 to-blue-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl z-20 shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                {/* Card Content */}
                <div className="p-8 flex flex-col h-full z-10">

                  {/* Header: Icon & ID */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="relative group-hover:scale-110 transition-transform duration-500 ease-out">
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} blur-xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                      <div className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                        <service.icon className="w-7 h-7 text-white group-hover:text-cyan-400 transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                    </div>
                    <span className="text-white/10 font-black text-4xl group-hover:text-white/20 transition-colors duration-500 select-none">
                      {service.id}
                    </span>
                  </div>

                  {/* Text */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8 mt-auto">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                        <div
                          className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(0,217,255,0.3)] transition-all duration-300 ease-out"
                          style={{ transitionDelay: `${i * 100}ms` }}
                        >
                          <Check className="w-3 h-3 text-cyan-400" strokeWidth={3} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setFormService(service.title);
                        setShowFormPopup(true);
                      }}
                      className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-300"
                    >
                      <Zap className="w-4 h-4" />
                      Get Started
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                      className="flex-1 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>

                {/* Bottom Highlight Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Bar */}
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-navy-900 bg-gray-700 flex items-center justify-center text-xs text-white font-medium overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold">200+ Happy Clients</span>
                <span className="text-xs">Rated 4.9/5 stars</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
              <span className="flex items-center gap-2 group cursor-help">
                <div className="p-1.5 rounded bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors">
                  <Zap className="w-4 h-4 text-yellow-400" />
                </div>
                <span className="text-xs sm:text-sm">Fast Turnaround</span>
              </span>
              <span className="flex items-center gap-2 group cursor-help">
                <div className="p-1.5 rounded bg-green-400/10 group-hover:bg-green-400/20 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-xs sm:text-sm">100% Secure</span>
              </span>
              <span className="flex items-center gap-2 group cursor-help">
                <div className="p-1.5 rounded bg-purple-400/10 group-hover:bg-purple-400/20 transition-colors">
                  <MousePointer2 className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-xs sm:text-sm">Dedicated Support</span>
              </span>
            </div>
          </div>

          {/* Modal Popup */}
          {selectedService && (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-4 bg-navy-950/60 backdrop-blur-sm animate-fade-in overflow-y-auto cursor-pointer"
              data-modal="service-details"
              onClick={() => setSelectedService(null)}
            >
              <div
                className="relative w-full max-w-2xl bg-navy-800 border border-white/10 rounded-3xl p-1 overflow-hidden shadow-2xl animate-zoom-in"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Animated Border Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${selectedService.color} opacity-20 animate-spin-slow blur-xl`}></div>

                {/* Inner Container */}
                <div className="relative bg-navy-900 rounded-[22px] p-5 sm:p-8 md:p-10 overflow-hidden">
                  {/* Background Blobs */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl ${selectedService.color} opacity-20 rounded-full blur-3xl`}></div>
                  <div className={`absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-bl ${selectedService.color} opacity-10 rounded-full blur-3xl`}></div>

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-3 right-3 p-2 rounded-full text-gray-400 hover:text-white transition-colors z-20"
                  >
                    <X size={20} />
                  </button>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${selectedService.color} p-0.5 mb-4 sm:mb-6`}>
                      <div className="w-full h-full rounded-xl sm:rounded-2xl bg-navy-900 flex items-center justify-center">
                        <selectedService.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">{selectedService.title}</h3>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">{selectedService.description}</p>

                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-3 sm:mb-4">What's Included</h4>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        {selectedService.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-white/5 border border-white/5">
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
                            <span className="text-gray-200 text-xs sm:text-sm">{feature}</span>
                          </div>
                        ))}
                        <div className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-white/5 border border-white/5">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
                          <span className="text-gray-200 text-xs sm:text-sm">Project Manager</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-white/5 border border-white/5">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
                          <span className="text-gray-200 text-xs sm:text-sm">Post-launch Support</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={handleBookNow}
                        className={`flex-1 py-3 sm:py-4 rounded-xl bg-gradient-to-r ${selectedService.color} text-white font-bold text-sm sm:text-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300`}
                      >
                        Book Now
                      </button>
                      <button
                        onClick={() => {
                          setSelectedService(null);
                          const slugMap: Record<string, string> = {web:'web-development',marketing:'digital-marketing',design:'design-branding',content:'content-strategy',app:'app-development',pr:'pr-advertising'};
                          navigate(`/services/${slugMap[selectedService.categoryId]}`);
                        }}
                        className="flex-1 py-3 sm:py-4 rounded-xl border border-white/10 bg-white/5 text-white font-semibold text-sm sm:text-base hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Service Form Popup */}
      <ServiceFormPopup
        isOpen={showFormPopup}
        onClose={() => setShowFormPopup(false)}
        serviceName={formService}
        subServiceName=""
      />
    </>
  );
};

export default Services;