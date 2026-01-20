import React from 'react';
import { Check, X, ArrowRight, Zap, Crown, Rocket } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      badge: null,
      price: "₹25,000",
      subtext: "One-time payment",
      tagline: "Perfect for getting started online",
      target: "Best for: Landing pages, portfolios, small business websites",
      icon: Rocket,
      highlight: false,
      buttonStyle: "outline",
      features: [
        { text: "Up to 5 pages", included: true },
        { text: "Mobile-responsive design", included: true },
        { text: "SEO-ready structure", included: true },
        { text: "Contact form integration", included: true },
        { text: "Google Analytics setup", included: true },
        { text: "1 month of support", included: true },
        { text: "Basic hosting setup", included: true },
        { text: "7-day delivery", included: true },
        { text: "E-commerce functionality", included: false },
        { text: "Blog/CMS", included: false },
        { text: "Advanced integrations", included: false },
        { text: "Ongoing maintenance", included: false },
      ]
    },
    {
      name: "Growth",
      badge: "Most Popular",
      price: "₹50,000",
      subtext: "One-time payment",
      tagline: "Everything you need to scale",
      target: "Best for: E-commerce stores, content-driven sites, growing brands",
      icon: Zap,
      highlight: true,
      buttonStyle: "solid",
      features: [
        { text: "Everything in Starter", included: true, bold: true },
        { text: "Up to 10 pages", included: true },
        { text: "Blog/CMS integration", included: true },
        { text: "E-commerce ready (50 products)", included: true },
        { text: "Advanced SEO optimization", included: true },
        { text: "Email marketing integration", included: true },
        { text: "Social media integration", included: true },
        { text: "3 months of support", included: true },
        { text: "Priority development", included: true },
        { text: "Custom animations", included: true },
        { text: "Performance optimization", included: true },
      ]
    },
    {
      name: "Enterprise",
      badge: "For Teams",
      price: "Custom",
      subtext: "Tailored to your needs",
      tagline: "Unlimited possibilities for your business",
      target: "Best for: Large businesses, agencies, complex requirements",
      icon: Crown,
      highlight: false,
      buttonStyle: "outline",
      features: [
        { text: "Everything in Growth", included: true, bold: true },
        { text: "Unlimited pages", included: true },
        { text: "Custom functionality", included: true },
        { text: "Dedicated project manager", included: true },
        { text: "Priority support (24/7)", included: true },
        { text: "Advanced integrations (CRM, ERP)", included: true },
        { text: "Multi-language support", included: true },
        { text: "Custom training sessions", included: true },
        { text: "White-glove service", included: true },
        { text: "Ongoing consulting", included: true },
        { text: "Performance SLAs", included: true },
      ]
    }
  ];

  return (
    <section id="pricing" className="relative w-full py-24 bg-navy-900 z-10">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[40rem] bg-cyan-900/10 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">Investment</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Transparent Pricing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              No Hidden Fees
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Choose the package that fits your current stage. We scale with you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 h-full
                ${plan.highlight 
                  ? 'bg-navy-800/90 border-cyan-500/50 shadow-[0_0_50px_rgba(0,217,255,0.15)] transform lg:-translate-y-4 z-20' 
                  : 'bg-navy-900/50 border-white/10 hover:border-white/20 hover:bg-navy-800/50 z-10'
                }
              `}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute top-0 right-0 rounded-bl-xl rounded-tr-2xl px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-lg
                   ${plan.highlight ? 'bg-gradient-to-r from-cyan-500 to-teal-400 text-navy-900' : 'bg-navy-700 text-gray-300 border-l border-b border-white/10'}
                `}>
                  {plan.badge}
                </div>
              )}

              {/* Title & Tagline */}
              <div className="mb-6">
                 <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-cyan-400' : 'text-white'}`}>{plan.name}</h3>
                 <p className="text-sm text-gray-400 h-10">{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="mb-2">
                 <span className="text-4xl md:text-4xl font-black text-white">{plan.price}</span>
              </div>
              <div className="text-sm text-gray-500 font-medium mb-8">{plan.subtext}</div>

              {/* Separator */}
              <div className="w-full h-px bg-white/10 mb-8"></div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                 {plan.features.map((feature, i) => (
                    <li key={i} className={`flex items-start gap-3 text-sm ${feature.included ? 'text-gray-300' : 'text-gray-600'}`}>
                       {feature.included ? (
                          <Check size={16} className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-cyan-400' : 'text-green-400'}`} strokeWidth={3} />
                       ) : (
                          <X size={16} className="mt-0.5 shrink-0 text-gray-700" strokeWidth={3} />
                       )}
                       <span className={feature.bold ? 'font-semibold text-white' : ''}>{feature.text}</span>
                    </li>
                 ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group
                 ${plan.highlight 
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-400 text-navy-900 hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] hover:scale-[1.02]' 
                    : 'bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-cyan-400/50 hover:text-cyan-400'
                 }
              `}>
                 {plan.name === "Enterprise" ? "Contact Sales" : plan.name === "Growth" ? "Start Growing" : "Get Started"}
                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Footer Target Info */}
              <div className="mt-6 pt-6 border-t border-white/5 text-center">
                 <p className="text-xs text-gray-500 italic">
                    {plan.target}
                 </p>
              </div>

            </div>
          ))}
        </div>
        
        {/* Enterprise Context */}
        <div className="mt-16 text-center">
           <p className="text-gray-500 text-sm">
              Not sure which plan is right for you? <a href="#contact" className="text-cyan-400 hover:underline">Schedule a free consultation</a>.
           </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;