'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, ShoppingCart, Phone, CreditCard, Package, Truck, BarChart3, Shield, Zap, Star } from 'lucide-react';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contact from './Contact';
import ServiceFormPopup from './ServiceFormPopup';

const EcommerceDevPage: React.FC = () => {
    const [showFormPopup, setShowFormPopup] = useState(false);

    useEffect(() => {
        document.title = 'E-commerce Website Development Delhi NCR | WebAlchemy';

        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', 'Expert e-commerce website development in Delhi NCR. Shopify, WooCommerce, custom online stores. Boost your online sales with our proven solutions. Free quote!');
        }

        const schema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "E-commerce Website Development",
            "provider": {
                "@type": "Organization",
                "name": "WebAlchemy"
            },
            "areaServed": ["Delhi", "Gurgaon", "Noida", "Delhi NCR"],
            "description": "Professional e-commerce website development services including Shopify, WooCommerce, and custom online store solutions"
        };

        let schemaScript = document.getElementById('service-schema') as HTMLScriptElement | null;
        if (!schemaScript) {
            schemaScript = document.createElement('script');
            schemaScript.id = 'service-schema';
            schemaScript.type = 'application/ld+json';
            document.head.appendChild(schemaScript);
        }
        schemaScript.textContent = JSON.stringify(schema);

        return () => {
            const s = document.getElementById('service-schema');
            if (s) s.remove();
        };
    }, []);

    const platforms = [
        { name: 'Shopify', desc: 'Perfect for quick launch and easy management', features: ['Hosted solution', 'App ecosystem', 'Payment ready'] },
        { name: 'WooCommerce', desc: 'Flexible WordPress-based solution', features: ['Full customization', 'Cost effective', 'SEO friendly'] },
        { name: 'Custom Store', desc: 'Built from scratch for unique needs', features: ['100% tailored', 'Scalable', 'Full ownership'] },
    ];

    const features = [
        { icon: ShoppingCart, title: 'Product Management', desc: 'Easy-to-use admin panel for managing products, inventory, and categories' },
        { icon: CreditCard, title: 'Payment Integration', desc: 'Razorpay, PayU, Stripe, PayPal and all major payment gateways' },
        { icon: Truck, title: 'Shipping Integration', desc: 'Shiprocket, Delhivery, and custom shipping solutions' },
        { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Track sales, customers, and conversions in real-time' },
        { icon: Shield, title: 'Secure Checkout', desc: 'SSL, PCI compliance, and fraud protection' },
        { icon: Zap, title: 'Fast Performance', desc: 'Optimized for speed and mobile conversions' },
    ];

    const pricing = [
        { name: 'Starter Store', price: '₹24,999', features: ['Up to 50 products', 'Payment integration', 'Mobile responsive', 'Basic SEO', '3 months support'] },
        { name: 'Growth Store', price: '₹49,999', features: ['Up to 500 products', 'Multi-payment gateways', 'Shipping integration', 'Advanced SEO', '6 months support'], popular: true },
        { name: 'Enterprise', price: 'Custom', features: ['Unlimited products', 'Custom features', 'Multiple integrations', 'Dedicated support', 'Performance optimization'] },
    ];

    return (
        <>
            {/* Hero */}
            <section className="relative max-w-7xl mx-auto px-4 pt-32 pb-20">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/20 border border-purple-500/30 mb-8">
                        <ShoppingCart className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-300">E-commerce Specialists in Delhi NCR</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                        E-commerce Website <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            Development in Delhi NCR
                        </span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                        Build your <strong>online store with India's leading e-commerce developers</strong>.
                        We create high-converting Shopify, WooCommerce, and custom e-commerce websites
                        for businesses in Delhi, Gurgaon, and Noida.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <button onClick={() => setShowFormPopup(true)} className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold flex items-center gap-2 hover:scale-[1.02] transition-transform">
                            Get Free Quote <ArrowRight className="w-5 h-5" />
                        </button>
                        <a href="tel:+917838583051" className="px-8 py-4 rounded-xl border border-white/20 text-white font-medium flex items-center gap-2 hover:bg-white/5">
                            <Phone className="w-5 h-5" /> Call Now
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                        {['50+ Stores Launched', 'Shopify Partners', '₹10Cr+ GMV Generated'].map(item => (
                            <div key={item} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms */}
            <section className="py-20 bg-navy-800/20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                        E-commerce Platforms We Work With
                    </h2>
                    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                        Choose the right platform for your business. We're experts in all major e-commerce solutions.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {platforms.map((platform, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/5 hover:border-purple-500/30 transition-all">
                                <h3 className="text-2xl font-bold text-white mb-2">{platform.name}</h3>
                                <p className="text-gray-400 mb-4">{platform.desc}</p>
                                <ul className="space-y-2">
                                    {platform.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-gray-300">
                                            <CheckCircle2 className="w-4 h-4 text-purple-400" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                    Everything Your Online Store Needs
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                    Complete e-commerce solutions with all essential features
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-navy-800/40 border border-white/5 hover:border-purple-500/30 transition-all group">
                            <feature.icon className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pricing */}
            <section className="py-20 bg-navy-800/20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                        E-commerce Development Pricing
                    </h2>
                    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                        Transparent pricing for your online store project
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {pricing.map((plan, i) => (
                            <div key={i} className={`p-8 rounded-2xl border ${plan.popular ? 'bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-purple-500/50' : 'bg-navy-800/40 border-white/5'} relative`}>
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-bold">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="text-3xl font-bold text-white mb-4">{plan.price}</div>
                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-gray-300">
                                            <CheckCircle2 className="w-4 h-4 text-purple-400" />
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
                <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-white/10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Launch Your Online Store?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join 50+ successful e-commerce businesses we've helped launch. Get a free consultation today!
                    </p>
                    <button onClick={() => setShowFormPopup(true)} className="px-8 py-4 rounded-xl bg-white text-navy-900 font-bold text-lg hover:bg-gray-100 transition-colors">
                        Start Your Store
                    </button>
                </div>
            </section>

            <Contact />

            <ServiceFormPopup
                isOpen={showFormPopup}
                onClose={() => setShowFormPopup(false)}
                serviceName="E-commerce Development"
                subServiceName=""
            />
        </>
    );
};

export default EcommerceDevPage;
