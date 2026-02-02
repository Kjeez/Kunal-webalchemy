import React, { useState, useEffect } from 'react';
import {
    CheckCircle2, Phone, MessageCircle, ArrowRight, Star, Shield, Clock,
    Globe, Lock, Smartphone, Search, BarChart3, Zap, Users, ChevronDown
} from 'lucide-react';
import ServiceFormPopup from './ServiceFormPopup';

const StarterOfferPage: React.FC = () => {
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 30 });
    const [slotsLeft] = useState(3);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const phoneNumber = "919625429686";
    const whatsappMessage = encodeURIComponent("Hi! I'm interested in the ₹11,999 Starter Website Package. Please share more details.");

    const features = [
        { icon: Globe, text: "5-Page Professional Website" },
        { icon: Globe, text: "Free Domain (.com/.in)" },
        { icon: BarChart3, text: "Free Hosting (1 Year)" },
        { icon: Lock, text: "Free SSL Certificate" },
        { icon: Smartphone, text: "Mobile Responsive Design" },
        { icon: Search, text: "SEO Ready Structure" },
        { icon: MessageCircle, text: "Contact Form Integration" },
        { icon: BarChart3, text: "Google Analytics Setup" },
        { icon: Clock, text: "7-Day Delivery" },
        { icon: Shield, text: "1 Month Free Support" },
    ];

    const testimonials = [
        {
            name: "Rahul Sharma",
            city: "Delhi",
            business: "Sharma Electronics",
            text: "Got my website delivered in just 5 days! Very professional team. Highly recommended for small businesses.",
            rating: 5
        },
        {
            name: "Priya Patel",
            city: "Mumbai",
            business: "Priya's Boutique",
            text: "Best investment for my boutique. Customers can now see my collection online. Thank you WebAlchemy!",
            rating: 5
        },
        {
            name: "Amit Kumar",
            city: "Bangalore",
            business: "Kumar Consulting",
            text: "Affordable and quality work. My website looks premium but cost me very less. Very happy!",
            rating: 5
        }
    ];

    const faqs = [
        {
            q: "Is this a one-time payment?",
            a: "Yes! ₹11,999 is a one-time payment. No hidden charges, no monthly fees for the first year. Hosting renewal after 1 year is just ₹2,999/year."
        },
        {
            q: "What if I'm not satisfied with the design?",
            a: "We offer unlimited revisions until you're 100% happy. If we can't satisfy you, we'll refund your money. No questions asked."
        },
        {
            q: "How long does it take to build my website?",
            a: "We deliver within 7 working days. For urgent requirements, we can deliver in 3-4 days at no extra cost (subject to availability)."
        },
        {
            q: "Do you provide after-sales support?",
            a: "Absolutely! You get 1 month of free support. After that, we offer affordable maintenance plans starting at ₹999/month."
        },
        {
            q: "Can I upgrade to more pages later?",
            a: "Yes! You can add more pages anytime at ₹1,500 per page. You can also upgrade to our Growth package when your business grows."
        }
    ];

    return (
        <>
            {/* Minimal Header - Logo Only */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                    <a href="/" className="text-2xl font-black">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Web</span>
                        <span className="text-white">Alchemy</span>
                    </a>
                    <a
                        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-full text-white font-bold text-sm transition-all"
                    >
                        <MessageCircle size={16} />
                        <span className="hidden sm:inline">WhatsApp Us</span>
                    </a>
                </div>
            </div>

            <div className="min-h-screen bg-navy-900 pt-16">

                {/* HERO SECTION */}
                <section className="relative py-12 lg:py-20 overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-transparent to-transparent"></div>
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]"></div>

                    <div className="relative max-w-5xl mx-auto px-4">

                        {/* Urgency Banner */}
                        <div className="flex justify-center mb-8">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/50 animate-pulse">
                                <span className="flex h-3 w-3 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                                <span className="text-red-300 font-bold text-sm sm:text-base">
                                    🔥 Only {slotsLeft} Slots Left Today!
                                </span>
                            </div>
                        </div>

                        {/* Main Headline */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                                Get Your Professional Website
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                                    at Just ₹11,999
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                                Includes <span className="text-cyan-400 font-semibold">Free Domain</span>,
                                <span className="text-cyan-400 font-semibold"> Free Hosting</span>,
                                <span className="text-cyan-400 font-semibold"> Free SSL</span> &
                                <span className="text-cyan-400 font-semibold"> SEO Setup</span>
                            </p>
                        </div>

                        {/* Price Display */}
                        <div className="flex flex-col items-center mb-8">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-2xl sm:text-3xl text-gray-500 line-through">₹25,000</span>
                                <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-white">₹11,999</span>
                                <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-white font-bold text-sm animate-bounce">
                                    52% OFF
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm">One-time payment • No hidden charges</p>
                        </div>

                        {/* Countdown Timer */}
                        <div className="flex justify-center mb-8">
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-navy-800/80 border border-white/10 rounded-2xl">
                                <Clock className="text-yellow-400" size={20} />
                                <span className="text-gray-300 text-sm pr-2">Offer ends in:</span>
                                <div className="flex items-center gap-1">
                                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-lg font-mono font-bold text-xl">
                                        {String(timeLeft.hours).padStart(2, '0')}
                                    </span>
                                    <span className="text-yellow-400 font-bold">:</span>
                                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-lg font-mono font-bold text-xl">
                                        {String(timeLeft.minutes).padStart(2, '0')}
                                    </span>
                                    <span className="text-yellow-400 font-bold">:</span>
                                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-lg font-mono font-bold text-xl">
                                        {String(timeLeft.seconds).padStart(2, '0')}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <a
                                href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl text-white font-bold text-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all hover:scale-[1.02]"
                            >
                                <MessageCircle size={24} />
                                WhatsApp Now
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </a>
                            <a
                                href="tel:+919625429686"
                                className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-bold text-lg transition-all"
                            >
                                <Phone size={24} />
                                Call: +91 96254 29686
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <Shield className="text-green-400" size={16} />
                                <span>100% Satisfaction Guarantee</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="text-cyan-400" size={16} />
                                <span>50+ Happy Clients</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="text-yellow-400" size={16} />
                                <span>7-Day Delivery</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHAT YOU GET SECTION */}
                <section className="py-16 bg-navy-800/50">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Everything Included at
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> ₹11,999</span>
                            </h2>
                            <p className="text-gray-400">No hidden charges. What you see is what you pay.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-4 bg-navy-900/50 border border-white/10 rounded-xl hover:border-cyan-400/30 transition-all"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                                        <CheckCircle2 className="text-cyan-400" size={20} />
                                    </div>
                                    <span className="text-white font-medium">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SOCIAL PROOF - TESTIMONIALS */}
                <section className="py-16">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-4">
                                <Star className="text-yellow-400 fill-yellow-400" size={14} />
                                <span className="text-yellow-400 text-sm font-semibold">Trusted by 50+ Businesses</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">
                                What Our Clients Say
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-navy-800/50 border border-white/10 rounded-2xl"
                                >
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                                        ))}
                                    </div>
                                    <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                                    <div className="border-t border-white/10 pt-4">
                                        <p className="text-white font-semibold">{testimonial.name}</p>
                                        <p className="text-gray-400 text-sm">{testimonial.business}, {testimonial.city}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS SECTION */}
                <section className="py-16 bg-navy-800/50">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Simple 3-Step Process
                            </h2>
                            <p className="text-gray-400">From idea to live website in just 7 days</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { step: 1, title: "Book a Call", desc: "Share your requirements with our team", icon: Phone },
                                { step: 2, title: "We Design", desc: "Get designs within 3 days for approval", icon: Zap },
                                { step: 3, title: "Go Live!", desc: "Your website is ready in 7 days", icon: Globe }
                            ].map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className="relative inline-flex mb-4">
                                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-black text-2xl">
                                            {item.step}
                                        </div>
                                        {index < 2 && (
                                            <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent -translate-y-1/2"></div>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="py-16">
                    <div className="max-w-3xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-white/10 rounded-xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                        className="w-full flex items-center justify-between p-5 bg-navy-800/50 hover:bg-navy-800 transition-colors text-left"
                                    >
                                        <span className="text-white font-medium pr-4">{faq.q}</span>
                                        <ChevronDown
                                            className={`text-cyan-400 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                                            size={20}
                                        />
                                    </button>
                                    {expandedFaq === index && (
                                        <div className="p-5 bg-navy-900/50 border-t border-white/10">
                                            <p className="text-gray-300">{faq.a}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA SECTION */}
                <section className="py-16 bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-purple-900/30">
                    <div className="max-w-4xl mx-auto px-4 text-center">

                        {/* Urgency Reminder */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/50 mb-6">
                            <span className="text-red-300 font-bold">🔥 Only {slotsLeft} Slots Left Today!</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                            Ready to Get Your Website?
                        </h2>

                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="text-2xl text-gray-500 line-through">₹25,000</span>
                            <span className="text-5xl font-black text-white">₹11,999</span>
                            <span className="px-3 py-1 bg-green-500 rounded-full text-white font-bold text-sm">52% OFF</span>
                        </div>

                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Free Domain + Free Hosting + Free SSL + SEO Ready + Mobile Responsive + 7-Day Delivery
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <a
                                href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl text-white font-bold text-xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all hover:scale-[1.02]"
                            >
                                <MessageCircle size={28} />
                                WhatsApp Now
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                            </a>
                            <a
                                href="tel:+919625429686"
                                className="flex items-center justify-center gap-3 px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-bold text-xl transition-all"
                            >
                                <Phone size={28} />
                                Call Now
                            </a>
                        </div>

                        <p className="text-gray-500 text-sm">
                            ✓ No credit card required &nbsp; ✓ 100% Satisfaction Guarantee &nbsp; ✓ Cancel anytime
                        </p>
                    </div>
                </section>

                {/* Sticky Bottom CTA (Mobile) */}
                <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-navy-900/95 backdrop-blur-md border-t border-white/10 sm:hidden">
                    <a
                        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white font-bold text-lg"
                    >
                        <MessageCircle size={20} />
                        WhatsApp Now - Get Started
                    </a>
                </div>

                {/* Minimal Footer */}
                <footer className="py-8 border-t border-white/10 pb-24 sm:pb-8">
                    <div className="max-w-5xl mx-auto px-4 text-center">
                        <p className="text-gray-500 text-sm">
                            © 2024 WebAlchemy. All rights reserved. | Made with ❤️ in India
                        </p>
                    </div>
                </footer>

            </div>

            {/* Service Form Popup */}
            <ServiceFormPopup
                isOpen={showServiceForm}
                onClose={() => setShowServiceForm(false)}
                serviceName="Starter Package"
                subServiceName=""
            />
        </>
    );
};

export default StarterOfferPage;
