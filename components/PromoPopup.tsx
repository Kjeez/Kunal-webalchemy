import React, { useEffect, useState } from 'react';
import { X, Clock, Zap, Phone, Calculator, ArrowRight } from 'lucide-react';

const PromoPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShownFirst, setHasShownFirst] = useState(false);
  const [variant, setVariant] = useState<number>(0);

  const offers = [
    {
      type: "audit",
      icon: Zap,
      badge: "Limited Time Offer",
      title: "Get a Free Website Audit",
      priceDisplay: (
        <div className="text-4xl font-bold text-white mb-4">
           ₹0 <span className="text-lg text-gray-500 font-normal line-through">₹10,000</span>
        </div>
      ),
      description: "Find out exactly why your visitors aren't converting. We'll provide a comprehensive 15-point video analysis of your current site.",
      cta: "Claim Free Audit",
      color: "from-cyan-500 to-purple-500",
      bgGlow: "bg-cyan-500/20"
    },
    {
      type: "call",
      icon: Phone,
      badge: "Expert Consultation",
      title: "Book a Free Strategy Call",
      priceDisplay: (
        <div className="text-4xl font-bold text-white mb-4">
           FREE <span className="text-lg text-gray-500 font-normal">30 Min Session</span>
        </div>
      ),
      description: "Stop guessing. Speak directly with a senior strategist to map out your digital growth roadmap for the next quarter.",
      cta: "Schedule Call Now",
      color: "from-blue-500 to-indigo-500",
      bgGlow: "bg-blue-500/20"
    },
    {
      type: "estimate",
      icon: Calculator,
      badge: "Project Planning",
      title: "Get a Free Estimation",
      priceDisplay: (
         <div className="text-4xl font-bold text-white mb-4">
           Instant <span className="text-lg text-gray-500 font-normal">Quote</span>
        </div>
      ),
      description: "Planning a new project? Get a detailed cost and timeline breakdown within 24 hours. No commitment required.",
      cta: "Get Free Quote",
      color: "from-emerald-400 to-teal-500",
      bgGlow: "bg-emerald-500/20"
    }
  ];

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (!isVisible) {
      // First time delay: 30 seconds (30000ms)
      // Subsequent delay: 5 minutes (300000ms)
      const delay = hasShownFirst ? 300000 : 30000;

      timer = setTimeout(() => {
        // Pick a random offer each time
        setVariant(Math.floor(Math.random() * offers.length));
        setIsVisible(true);
        setHasShownFirst(true);
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [isVisible, hasShownFirst]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCTA = () => {
    setIsVisible(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  const currentOffer = offers[variant];
  const Icon = currentOffer.icon;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-navy-950/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-navy-800 border border-white/10 rounded-3xl p-1 overflow-hidden shadow-2xl animate-zoom-in">
        
        {/* Animated Border Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-r ${currentOffer.color} opacity-20 animate-spin-slow blur-xl`}></div>
        
        <div className="relative bg-navy-900 rounded-[22px] p-8 overflow-hidden">
          {/* Background Blobs */}
          <div className={`absolute -top-10 -right-10 w-32 h-32 ${currentOffer.bgGlow} rounded-full blur-3xl`}></div>
          <div className={`absolute -bottom-10 -left-10 w-32 h-32 ${currentOffer.bgGlow} rounded-full blur-3xl opacity-50`}></div>

          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors z-20"
          >
            <X size={20} />
          </button>

          {/* Content */}
          <div className="relative z-10 text-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6">
               <Icon size={12} className="text-cyan-400" />
               {currentOffer.badge}
            </div>

            <h3 className="text-2xl font-black text-white mb-4 leading-tight">
               {currentOffer.title}
            </h3>
            
            {currentOffer.priceDisplay}

            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
               {currentOffer.description}
            </p>

            <button 
               onClick={handleCTA}
               className={`w-full group relative py-4 rounded-xl bg-gradient-to-r ${currentOffer.color} text-white font-bold shadow-lg hover:scale-[1.02] transition-all duration-300`}
            >
               <span className="flex items-center justify-center gap-2">
                  {currentOffer.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </span>
            </button>

            <p className="mt-4 text-xs text-gray-500">
               No credit card required. Offer ends soon.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;