import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Phone, Code2, Palette, Settings, Shield, Zap, Layers, PenTool, Database } from 'lucide-react';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contact from './Contact';
import ServiceFormPopup from './ServiceFormPopup';

const WordpressDevPage: React.FC = () => {
    const [showFormPopup, setShowFormPopup] = useState(false);

    useEffect(() => {
        document.title = 'WordPress Developer Delhi NCR | WebAlchemy - Expert WordPress Development';

        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', 'Expert WordPress developer in Delhi NCR. Custom themes, plugins, WooCommerce, speed optimization. 100+ WordPress sites delivered. Free consultation!');
        }

        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = 'https://webalchemy.in/wordpress-development';

        const schema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "WordPress Development Services",
            "provider": {
                "@type": "Organization",
                "name": "WebAlchemy"
            },
            "areaServed": ["Delhi", "Gurgaon", "Noida", "Delhi NCR"],
            "description": "Professional WordPress development services including custom themes, plugins, WooCommerce, and website maintenance"
        };

        let schemaScript = document.getElementById('wp-service-schema') as HTMLScriptElement | null;
        if (!schemaScript) {
            schemaScript = document.createElement('script');
            schemaScript.id = 'wp-service-schema';
            schemaScript.type = 'application/ld+json';
            document.head.appendChild(schemaScript);
        }
        schemaScript.textContent = JSON.stringify(schema);

        return () => {
            const s = document.getElementById('wp-service-schema');
            if (s) s.remove();
        };
    }, []);

    const services = [
        { icon: PenTool, title: 'Custom Theme Development', desc: 'Unique, branded themes built from scratch to match your vision' },
        { icon: Code2, title: 'Plugin Development', desc: 'Custom plugins to add any functionality you need' },
        { icon: Layers, title: 'WooCommerce Development', desc: 'Full-featured online stores with WordPress' },
        { icon: Zap, title: 'Speed Optimization', desc: 'Make your WordPress site lightning fast' },
        { icon: Shield, title: 'Security Hardening', desc: 'Protect your site from hackers and malware' },
        { icon: Settings, title: 'Maintenance & Support', desc: 'Ongoing updates, backups, and support' },
    ];

    const whyWordpress = [
        { stat: '43%', label: 'of all websites use WordPress' },
        { stat: '60%', label: 'CMS market share' },
        { stat: '500+', label: 'new sites daily on WordPress' },
        { stat: '59K+', label: 'free plugins available' },
    ];

    const pricing = [
        { name: 'Business Website', price: '₹19,999', features: ['5-10 pages', 'Premium theme', 'Contact forms', 'SEO basic', '3 months support'] },
        { name: 'WooCommerce Store', price: '₹24,999', features: ['Up to 100 products', 'Payment gateway', 'Shipping setup', 'Order management', '6 months support'] },
        { name: 'Custom Development', price: '₹49,999', features: ['Custom theme', 'Custom plugins', 'Advanced features', 'Performance optimization', '6 months support'], popular: true },
    ];

    return (
        <>
            {/* Hero */}
            <section className="relative max-w-7xl mx-auto px-4 pt-32 pb-20">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 border border-blue-500/30 mb-8">
                        <Database className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">WordPress Experts in Delhi NCR</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                        WordPress Developer <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            in Delhi NCR
                        </span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                        Looking for an <strong>expert WordPress developer in Delhi</strong>?
                        WebAlchemy specializes in custom WordPress themes, plugins, WooCommerce,
                        and speed optimization for businesses in Delhi, Gurgaon, and Noida.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <button onClick={() => setShowFormPopup(true)} className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold flex items-center gap-2 hover:scale-[1.02] transition-transform">
                            Get Free Quote <ArrowRight className="w-5 h-5" />
                        </button>
                        <a href="tel:+917838583051" className="px-8 py-4 rounded-xl border border-white/20 text-white font-medium flex items-center gap-2 hover:bg-white/5">
                            <Phone className="w-5 h-5" /> Call Now
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                        {['100+ WordPress Sites', '5+ Years Experience', 'WooCommerce Experts'].map(item => (
                            <div key={item} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why WordPress */}
            <section className="py-16 bg-navy-800/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-white text-center mb-8">Why WordPress?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {whyWordpress.map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{item.stat}</div>
                                <div className="text-gray-400 mt-2">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                    Our WordPress Development Services
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                    Comprehensive WordPress solutions for Delhi NCR businesses
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-navy-800/40 border border-white/5 hover:border-blue-500/30 transition-all group">
                            <service.icon className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-400">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pricing */}
            <section className="py-20 bg-navy-800/20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                        WordPress Development Pricing
                    </h2>
                    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                        Affordable WordPress solutions for every budget
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {pricing.map((plan, i) => (
                            <div key={i} className={`p-8 rounded-2xl border ${plan.popular ? 'bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border-blue-500/50' : 'bg-navy-800/40 border-white/5'} relative`}>
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white text-sm font-bold">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="text-3xl font-bold text-white mb-4">{plan.price}</div>
                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-gray-300">
                                            <CheckCircle2 className="w-4 h-4 text-blue-400" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={() => setShowFormPopup(true)} className={`w-full py-3 rounded-xl font-bold ${plan.popular ? 'bg-white text-navy-900' : 'bg-white/10 text-white hover:bg-white/20'} transition-colors`}>
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Portfolio />
            <Testimonials />

            {/* CTA */}
            <section className="py-20 max-w-7xl mx-auto px-4">
                <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-white/10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Build Your WordPress Website?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Get a professional WordPress website that's fast, secure, and easy to manage. Free consultation!
                    </p>
                    <button onClick={() => setShowFormPopup(true)} className="px-8 py-4 rounded-xl bg-white text-navy-900 font-bold text-lg hover:bg-gray-100 transition-colors">
                        Start Your Project
                    </button>
                </div>
            </section>

            <Contact />

            <ServiceFormPopup
                isOpen={showFormPopup}
                onClose={() => setShowFormPopup(false)}
                serviceName="WordPress Development"
                subServiceName=""
            />
        </>
    );
};

export default WordpressDevPage;
