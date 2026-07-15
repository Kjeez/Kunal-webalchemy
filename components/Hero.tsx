'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import { MockupInterface } from './Visuals';
import ClientLogos from './ClientLogos';
import ServiceFormPopup from './ServiceFormPopup';

const Hero: React.FC = () => {
  const [showServiceForm, setShowServiceForm] = useState(false);

  return (
    <>
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content Column */}
          <div className="flex flex-col items-start text-left space-y-8 z-10">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-900/20 border border-teal-500/30 backdrop-blur-sm animate-fade-in">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-teal-300 tracking-wide">
                Available for New Projects
              </span>
            </div>

            {/* Pricing Highlight Badge */}
            <a
              href="#pricing"
              className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 border border-cyan-400/40 backdrop-blur-sm animate-fade-in hover:border-cyan-400/70 hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] transition-all duration-300 cursor-pointer"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500">🚀</span>
              </span>
              <span className="text-sm sm:text-base font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Websites from ₹11,999</span>
                <span className="text-gray-400 font-normal mx-2">•</span>
                <span className="text-teal-300">Free Domain & Hosting</span>
              </span>
              <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
                Need More <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-glow">
                  Customers?
                </span>
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
                We Build Websites <br />
                That <span className="italic font-serif text-teal-300">Actually Sell</span>.
              </h2>
            </div>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
              Stop losing leads to outdated design. We craft high-performance digital protocols merged with intuitive psychology. Guaranteed to 2x your conversion rate in 90 days.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={() => setShowServiceForm(true)}
                className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg shadow-lg shadow-cyan-900/20 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Book Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => {
                  const portfolioSection = document.getElementById('results');
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 group"
              >
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </span>
                View Ecosystem
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-4 text-sm font-medium text-gray-400">
              {['Conversion Focused', 'Cancel Anytime', 'Results Guaranteed'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Visual Column */}
          <div className="relative z-10 w-full h-full flex items-center justify-center lg:justify-end perspective-1000">
            <MockupInterface />
          </div>
        </div>
      </section>

      {/* Full-Width Client Logos Section */}
      <div className="w-full border-t border-white/5 pt-8 pb-12">
        <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-widest">Trusted by Industry Leaders</p>
        <ClientLogos />
      </div>

      {/* Service Form Popup */}
      <ServiceFormPopup
        isOpen={showServiceForm}
        onClose={() => setShowServiceForm(false)}
        serviceName="Strategy Call"
        subServiceName=""
      />
    </>
  );
};

export default Hero;
