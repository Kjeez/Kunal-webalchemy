import React from 'react';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import { MockupInterface } from './Visuals';
import ClientLogos from './ClientLogos';
import PainPoints from './PainPoints';
import Stats from './Stats';
import Services from './Services';
import Portfolio from './Portfolio';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Contact from './Contact';
import Blogs from './Blogs';

const WebsiteDeveloperDelhiPage: React.FC = () => {
    return (
        <>
            {/* Customized Hero Section for Delhi */}
            <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 lg:pt-40 lg:pb-20">
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
                                Available for Projects in Delhi
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
                                Best Website <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-glow">
                                    Developer in Delhi
                                </span>
                            </h1>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
                                Transforming Delhi Businesses <br />
                                With <span className="italic font-serif text-teal-300">Premium Solutions</span>.
                            </h2>
                        </div>

                        {/* Subheadline */}
                        <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
                            Your local partner for global digital success. We build websites that rank, convert, and scale for businesses across NCR.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
                            <button className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg shadow-lg shadow-cyan-900/20 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group overflow-hidden">
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
                                <span className="relative flex items-center justify-center gap-2">
                                    Get a Quote in Delhi
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>

                            <button className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 group">
                                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="w-3 h-3 fill-current ml-0.5" />
                                </span>
                                View Delhi Portfolio
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

                {/* Footer / Logos */}
                <div className="mt-20 lg:mt-32 border-t border-white/5 pt-8">
                    <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-widest">Trusted by Delhi's Industry Leaders</p>
                    <ClientLogos />
                </div>
            </section>

            <PainPoints />
            <Services />
            <Portfolio />
            <Stats />
            <WhyChooseUs />
            <Testimonials />
            <Pricing />
            <FAQ />
            <Contact />
            <Blogs />
        </>
    );
};

export default WebsiteDeveloperDelhiPage;
