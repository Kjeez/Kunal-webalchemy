import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin, Star, Users, Clock, Phone, Code2, Palette, Target, ShieldCheck, Zap, TrendingUp } from 'lucide-react';
import { MockupInterface } from './Visuals';
import ClientLogos from './ClientLogos';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Contact from './Contact';
import ServiceFormPopup from './ServiceFormPopup';

interface LocationLandingPageProps {
    city: string;
}

// City-specific data
const cityData: Record<string, {
    areas: string[];
    metaTitle: string;
    metaDescription: string;
    headline: string;
    subheadline: string;
    localClients: string[];
    nearbyAreas: string[];
}> = {
    Delhi: {
        areas: ['Connaught Place', 'Nehru Place', 'Saket', 'Dwarka', 'Rohini', 'Lajpat Nagar', 'Karol Bagh', 'Rajouri Garden', 'South Delhi', 'North Delhi'],
        metaTitle: 'Best Website Developer in Delhi | WebAlchemy - 100+ Clients',
        metaDescription: 'Top-rated website developer in Delhi. We build high-converting websites for Delhi businesses. 100+ happy clients. Free consultation. Call now!',
        headline: 'Best Website Developer in Delhi',
        subheadline: 'Transforming Delhi Businesses With Premium Web Solutions',
        localClients: ['Delhi Metro', 'DTC', 'NDMC', 'Delhi University', 'IIT Delhi'],
        nearbyAreas: ['Gurgaon', 'Noida', 'Faridabad', 'Ghaziabad', 'Greater Noida']
    },
    Gurgaon: {
        areas: ['Cyber City', 'DLF Phase 1-5', 'Golf Course Road', 'Udyog Vihar', 'Sohna Road', 'MG Road', 'Sector 29', 'Sector 14', 'Old Gurgaon', 'Manesar'],
        metaTitle: 'Best Website Developer in Gurgaon | WebAlchemy - 100+ Clients',
        metaDescription: 'Leading website developer in Gurgaon. We create stunning websites for Gurgaon startups & corporates. Premium quality. Fast delivery. Get quote!',
        headline: 'Best Website Developer in Gurgaon',
        subheadline: 'Empowering Gurgaon Startups & Corporates With Digital Excellence',
        localClients: ['Cyber Hub Companies', 'DLF', 'Hero MotoCorp', 'Maruti Suzuki', 'American Express'],
        nearbyAreas: ['Delhi', 'Noida', 'Faridabad', 'Manesar', 'Sohna']
    },
    Noida: {
        areas: ['Sector 62', 'Sector 18', 'Sector 125', 'Noida Expressway', 'Film City', 'Sector 63', 'Sector 16', 'Greater Noida', 'Knowledge Park', 'Tech Zone'],
        metaTitle: 'Best Website Developer in Noida | WebAlchemy - 100+ Clients',
        metaDescription: 'Expert website developer in Noida & Greater Noida. Building high-performance websites for IT companies & startups. Free consultation!',
        headline: 'Best Website Developer in Noida',
        subheadline: 'Building Digital Solutions for Noida\'s Tech Ecosystem',
        localClients: ['HCL Technologies', 'Infosys', 'TCS', 'Adobe', 'Samsung'],
        nearbyAreas: ['Delhi', 'Gurgaon', 'Greater Noida', 'Ghaziabad', 'Faridabad']
    }
};

const LocationLandingPage: React.FC<LocationLandingPageProps> = ({ city }) => {
    const [showFormPopup, setShowFormPopup] = useState(false);
    const data = cityData[city] || cityData.Delhi;

    // Set page title and meta tags
    useEffect(() => {
        document.title = data.metaTitle;

        // Update meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', data.metaDescription);
        } else {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            metaDesc.setAttribute('content', data.metaDescription);
            document.head.appendChild(metaDesc);
        }

        // Add canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', `https://webalchemy.in/website-developer-${city.toLowerCase()}`);

        // Add LocalBusiness Schema
        const schema = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `WebAlchemy - Website Developer in ${city}`,
            "description": data.metaDescription,
            "url": `https://webalchemy.in/website-developer-${city.toLowerCase()}`,
            "telephone": "+91-9625429686",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": city,
                "addressRegion": "Delhi NCR",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": city === 'Delhi' ? 28.6139 : city === 'Gurgaon' ? 28.4595 : 28.5355,
                "longitude": city === 'Delhi' ? 77.2090 : city === 'Gurgaon' ? 77.0266 : 77.3910
            },
            "openingHours": "Mo-Sa 09:00-18:00",
            "priceRange": "₹₹₹",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127"
            }
        };

        let schemaScript = document.getElementById('local-business-schema') as HTMLScriptElement | null;
        if (!schemaScript) {
            schemaScript = document.createElement('script');
            schemaScript.id = 'local-business-schema';
            schemaScript.type = 'application/ld+json';
            document.head.appendChild(schemaScript);
        }
        schemaScript.textContent = JSON.stringify(schema);

        return () => {
            // Cleanup on unmount
            const existingSchema = document.getElementById('local-business-schema');
            if (existingSchema) existingSchema.remove();
        };
    }, [city, data]);

    const services = [
        { icon: Code2, title: 'Custom Website Development', desc: `Tailored websites for ${city} businesses` },
        { icon: Palette, title: 'UI/UX Design', desc: 'Beautiful, conversion-focused designs' },
        { icon: Target, title: 'Digital Marketing', desc: `Dominate ${city} search results` },
        { icon: ShieldCheck, title: 'Website Maintenance', desc: '24/7 support and updates' },
    ];

    const stats = [
        { value: '100+', label: `${city} Clients Served` },
        { value: '4.9', label: 'Google Rating' },
        { value: '7', label: 'Days Average Delivery' },
        { value: '200%', label: 'Avg. Traffic Increase' },
    ];

    const faqs = [
        {
            q: `What is the cost of website development in ${city}?`,
            a: `Website development costs in ${city} vary based on complexity. A basic website starts from ₹15,000, while e-commerce and custom web applications range from ₹50,000 to ₹5,00,000. Contact us for a free quote tailored to your ${city} business needs.`
        },
        {
            q: `How long does it take to build a website in ${city}?`,
            a: `Typically, a standard business website takes 2-3 weeks. E-commerce websites take 4-6 weeks. Complex web applications can take 2-3 months. As a local ${city} agency, we ensure faster communication and delivery.`
        },
        {
            q: `Do you provide website maintenance services in ${city}?`,
            a: `Yes! We offer comprehensive website maintenance packages for ${city} businesses including daily backups, security updates, content updates, and 24/7 support. Our local presence in ${city} means faster response times.`
        },
        {
            q: `Can you help my ${city} business rank on Google?`,
            a: `Absolutely! We specialize in local SEO for ${city} businesses. We optimize your website for location-based keywords like "best [service] in ${city}" to help you dominate local search results.`
        },
        {
            q: `Do you offer free consultations in ${city}?`,
            a: `Yes, we offer free 30-minute strategy consultations for ${city} businesses. We can meet at your office in ${data.areas[0]} or any convenient location, or have a video call.`
        },
        {
            q: `What technologies do you use for website development?`,
            a: `We use modern technologies including React, Next.js, Node.js, WordPress, and Shopify. Our ${city} team stays updated with the latest trends to deliver cutting-edge solutions.`
        },
        {
            q: `Can you redesign my existing ${city} business website?`,
            a: `Yes! We specialize in website redesigns. We'll analyze your current site, understand your ${city} target audience, and create a modern, high-converting design that outperforms your competition.`
        },
        {
            q: `Do you work with startups and small businesses in ${city}?`,
            a: `Absolutely! We love working with ${city} startups and SMEs. We offer flexible packages and payment plans to help growing businesses establish a strong online presence without breaking the bank.`
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 lg:pt-40 lg:pb-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="flex flex-col items-start text-left space-y-8 z-10">
                        {/* Location Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-900/20 border border-teal-500/30 backdrop-blur-sm animate-fade-in">
                            <MapPin className="w-4 h-4 text-teal-400" />
                            <span className="text-xs sm:text-sm font-medium text-teal-300 tracking-wide">
                                Serving {city} & NCR Region
                            </span>
                        </div>

                        {/* H1 - Primary Keyword */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white">
                            {data.headline.split(' ').slice(0, 2).join(' ')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-glow">
                                {data.headline.split(' ').slice(2).join(' ')}
                            </span>
                        </h1>

                        {/* H2 - Secondary Keywords */}
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-200">
                            {data.subheadline}
                        </h2>

                        {/* Description with Keywords */}
                        <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
                            Looking for a <strong>professional website developer in {city}</strong>? WebAlchemy is the <strong>best web development company in {city}</strong> specializing in custom websites, e-commerce solutions, and digital marketing. We've helped 100+ {city} businesses grow online.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
                            <button
                                onClick={() => setShowFormPopup(true)}
                                className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg shadow-lg shadow-cyan-900/20 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group overflow-hidden"
                            >
                                <span className="relative flex items-center justify-center gap-2">
                                    Get Free Quote
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                            <a href="tel:+919625429686" className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                <Phone className="w-5 h-5" />
                                Call Now
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 text-sm font-medium text-gray-400">
                            {['100+ Happy Clients', '4.9★ Google Rating', '7-Day Delivery'].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-teal-400" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center lg:justify-end">
                        <MockupInterface />
                    </div>
                </div>

                {/* Client Logos */}
                <div className="mt-20 lg:mt-32 border-t border-white/5 pt-8">
                    <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-widest">Trusted by {city}'s Top Businesses</p>
                    <ClientLogos />
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-navy-800/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">{stat.value}</div>
                                <div className="text-gray-400 mt-2">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                    Our Web Development Services in {city}
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                    As the leading <strong>website development company in {city}</strong>, we offer comprehensive digital solutions tailored for local businesses.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-navy-800/40 border border-white/5 hover:border-cyan-500/30 transition-all group">
                            <service.icon className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-400">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Areas We Serve */}
            <section className="py-20 bg-navy-800/20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                        Areas We Serve in {city}
                    </h2>
                    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                        Our {city} web development team provides services across all major areas. We're your local partner for digital success.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {data.areas.map((area, i) => (
                            <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-500/50 hover:text-white transition-colors">
                                <MapPin className="w-4 h-4 inline mr-2 text-cyan-400" />
                                {area}
                            </span>
                        ))}
                    </div>
                    <p className="text-center text-gray-500 mt-8">
                        Also serving: {data.nearbyAreas.join(', ')}
                    </p>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                    Why Choose WebAlchemy in {city}?
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                    As a {city}-based web development agency, we understand local businesses and deliver results that matter.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: MapPin, title: 'Local Expertise', desc: `Deep understanding of ${city} market and customer behavior` },
                        { icon: Clock, title: 'Fast Turnaround', desc: 'Average 7-day delivery with local support' },
                        { icon: TrendingUp, title: 'Proven Results', desc: '200% average traffic increase for clients' },
                        { icon: Users, title: '100+ {city} Clients', desc: 'Trusted by businesses across all industries' },
                        { icon: Star, title: '4.9★ Rating', desc: 'Highest-rated web developer in {city}' },
                        { icon: Zap, title: 'Modern Technology', desc: 'React, Next.js, WordPress & more' },
                    ].map((item, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-navy-800/60 to-navy-900/60 border border-white/5">
                            <item.icon className="w-8 h-8 text-cyan-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{item.title.replace('{city}', city)}</h3>
                            <p className="text-gray-400">{item.desc.replace('{city}', city)}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Portfolio */}
            <Portfolio />

            {/* Testimonials */}
            <Testimonials />

            {/* FAQ Section with Schema */}
            <section className="py-20 bg-navy-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                        Frequently Asked Questions About Website Development in {city}
                    </h2>
                    <p className="text-gray-400 text-center mb-12">
                        Common questions from {city} businesses about our web development services
                    </p>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group rounded-2xl bg-navy-800/40 border border-white/5 overflow-hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                    <span className="font-semibold text-white">{faq.q}</span>
                                    <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="px-6 pb-6 text-gray-400">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 max-w-7xl mx-auto px-4">
                <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-white/10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Build Your {city} Business Website?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join 100+ successful {city} businesses who trust WebAlchemy for their digital presence. Get a free consultation today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setShowFormPopup(true)}
                            className="px-8 py-4 rounded-xl bg-white text-navy-900 font-bold text-lg hover:bg-gray-100 transition-colors"
                        >
                            Get Free Quote
                        </button>
                        <a href="tel:+919625429686" className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
                            <Phone className="w-5 h-5" />
                            +91 96254 29686
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <Contact />

            {/* Service Form Popup */}
            <ServiceFormPopup
                isOpen={showFormPopup}
                onClose={() => setShowFormPopup(false)}
                serviceName={`Website Development - ${city}`}
                subServiceName=""
            />

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.a
                            }
                        }))
                    })
                }}
            />
        </>
    );
};

export default LocationLandingPage;
