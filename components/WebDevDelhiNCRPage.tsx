import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin, Phone, Code2, Palette, Target, ShieldCheck, Smartphone, Zap } from 'lucide-react';
import { MockupInterface } from './Visuals';
import ClientLogos from './ClientLogos';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contact from './Contact';
import ServiceFormPopup from './ServiceFormPopup';
import { Link } from 'react-router-dom';

const WebDevDelhiNCRPage: React.FC = () => {
    const [showFormPopup, setShowFormPopup] = useState(false);

    useEffect(() => {
        document.title = 'Best Web Development Company in Delhi NCR | WebAlchemy';

        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', 'Leading web development company in Delhi NCR. Custom websites, e-commerce, digital marketing for businesses in Delhi, Gurgaon, Noida. 100+ clients. Free quote!');
        }

        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = 'https://webalchemy.in/web-development-company-delhi-ncr';

        const schema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "WebAlchemy - Web Development Company Delhi NCR",
            "url": "https://webalchemy.in",
            "logo": "https://webalchemy.in/logo.png",
            "description": "Best web development company in Delhi NCR providing custom websites, e-commerce, and digital marketing services",
            "areaServed": ["Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad", "Greater Noida"],
            "address": {
                "@type": "PostalAddress",
                "addressRegion": "Delhi NCR",
                "addressCountry": "IN"
            }
        };

        let schemaScript = document.getElementById('org-schema') as HTMLScriptElement | null;
        if (!schemaScript) {
            schemaScript = document.createElement('script');
            schemaScript.id = 'org-schema';
            schemaScript.type = 'application/ld+json';
            document.head.appendChild(schemaScript);
        }
        schemaScript.textContent = JSON.stringify(schema);

        return () => {
            const s = document.getElementById('org-schema');
            if (s) s.remove();
        };
    }, []);

    const cities = [
        { name: 'Delhi', url: '/website-developer-delhi', areas: 'Connaught Place, Nehru Place, Saket, Dwarka' },
        { name: 'Gurgaon', url: '/website-developer-gurgaon', areas: 'Cyber City, DLF, Golf Course Road, Udyog Vihar' },
        { name: 'Noida', url: '/website-developer-noida', areas: 'Sector 62, Sector 18, Film City, Greater Noida' },
    ];

    const services = [
        { icon: Code2, title: 'Custom Web Development', desc: 'Tailored solutions for Delhi NCR businesses' },
        { icon: Palette, title: 'UI/UX Design', desc: 'Beautiful, conversion-focused designs' },
        { icon: Target, title: 'Digital Marketing', desc: 'SEO, PPC, Social Media Marketing' },
        { icon: Smartphone, title: 'Mobile App Development', desc: 'iOS & Android apps' },
        { icon: ShieldCheck, title: 'Website Maintenance', desc: '24/7 support and security updates' },
        { icon: Zap, title: 'E-commerce Development', desc: 'Shopify, WooCommerce, Custom stores' },
    ];

    return (
        <>
            {/* Hero */}
            <section className="relative max-w-7xl mx-auto px-4 pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-900/20 border border-cyan-500/30">
                            <MapPin className="w-4 h-4 text-cyan-400" />
                            <span className="text-sm text-cyan-300">Serving Delhi, Gurgaon, Noida & NCR</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                            Best Web Development <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                Company in Delhi NCR
                            </span>
                        </h1>

                        <p className="text-lg text-gray-400 max-w-xl">
                            WebAlchemy is the <strong>leading web development company in Delhi NCR</strong>,
                            providing premium website development, e-commerce solutions, and digital marketing
                            services across Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button onClick={() => setShowFormPopup(true)} className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold flex items-center gap-2 hover:scale-[1.02] transition-transform">
                                Get Free Quote <ArrowRight className="w-5 h-5" />
                            </button>
                            <a href="tel:+917838583051" className="px-8 py-4 rounded-xl border border-white/20 text-white font-medium flex items-center gap-2 hover:bg-white/5">
                                <Phone className="w-5 h-5" /> Call Now
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                            {['100+ NCR Clients', '4.9★ Rating', 'Free Consultation'].map(item => (
                                <div key={item} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <MockupInterface />
                    </div>
                </div>
            </section>

            {/* Clients */}
            <div className="border-y border-white/5 py-8">
                <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-widest">Trusted by Delhi NCR's Leading Businesses</p>
                <ClientLogos />
            </div>

            {/* Services */}
            <section className="py-20 max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                    Our Web Development Services in Delhi NCR
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                    Comprehensive digital solutions for businesses across the National Capital Region
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-navy-800/40 border border-white/5 hover:border-cyan-500/30 transition-all group">
                            <service.icon className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-400">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Cities */}
            <section className="py-20 bg-navy-800/20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                        We Serve All Major Cities in Delhi NCR
                    </h2>
                    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                        Local expertise across the entire National Capital Region
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {cities.map((city, i) => (
                            <Link key={i} to={city.url} className="p-8 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/5 hover:border-cyan-500/30 transition-all group">
                                <div className="flex items-center gap-3 mb-4">
                                    <MapPin className="w-6 h-6 text-cyan-400" />
                                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{city.name}</h3>
                                </div>
                                <p className="text-gray-400 mb-4">{city.areas}</p>
                                <span className="text-cyan-400 flex items-center gap-2 group-hover:gap-3 transition-all">
                                    View {city.name} Services <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <Portfolio />

            {/* Testimonials */}
            <Testimonials />

            {/* CTA */}
            <section className="py-20 max-w-7xl mx-auto px-4">
                <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-white/10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Build Your Delhi NCR Business Website?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join 100+ successful businesses across Delhi NCR who trust WebAlchemy. Get a free consultation today!
                    </p>
                    <button onClick={() => setShowFormPopup(true)} className="px-8 py-4 rounded-xl bg-white text-navy-900 font-bold text-lg hover:bg-gray-100 transition-colors">
                        Get Free Quote
                    </button>
                </div>
            </section>

            <Contact />

            <ServiceFormPopup
                isOpen={showFormPopup}
                onClose={() => setShowFormPopup(false)}
                serviceName="Web Development - Delhi NCR"
                subServiceName=""
            />
        </>
    );
};

export default WebDevDelhiNCRPage;
