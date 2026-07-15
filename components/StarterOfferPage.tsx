'use client';

import React, { useState, useEffect } from 'react';
import {
    CheckCircle2, Phone, MessageCircle, ArrowRight, Star, Shield, Clock,
    Globe, Lock, Smartphone, Search, BarChart3, Zap, Users, ChevronDown,
    Mail, MapPin, Activity, Layout, Code2, Cpu
} from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import ClientLogos from './ClientLogos';
import Portfolio from './Portfolio';
import ServiceFormPopup from './ServiceFormPopup';

// Chart data for mockup
const chartData = [
    { value: 20 }, { value: 45 }, { value: 30 }, { value: 60 }, { value: 55 }, { value: 85 }, { value: 70 }, { value: 95 }
];

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

    const phoneNumber = "917838583051";
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
            {/* Background Effects (from Hero) */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 bg-navy-900"></div>
                <div className="absolute -top-[10%] -left-[10%] w-[40rem] h-[40rem] bg-purple-600/20 rounded-full blur-[100px] animate-float-delayed mix-blend-screen opacity-60"></div>
                <div className="absolute top-[20%] -right-[10%] w-[35rem] h-[35rem] bg-cyan-500/20 rounded-full blur-[120px] animate-float mix-blend-screen opacity-50"></div>
                <div className="absolute -bottom-[10%] left-[20%] w-[45rem] h-[45rem] bg-purple-500/10 rounded-full blur-[140px] animate-pulse-slow mix-blend-screen opacity-40"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
            </div>

            <div className="relative min-h-screen z-10 pt-24">

                {/* HERO SECTION - Homepage Style */}
                <section className="relative py-8 lg:py-16 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                            {/* Left Content Column */}
                            <div className="flex flex-col items-start text-left space-y-6 z-10">

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
                                <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 border border-cyan-400/40 backdrop-blur-sm animate-fade-in">
                                    <span className="text-sm sm:text-base font-bold">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">🚀 Websites from ₹11,999</span>
                                        <span className="text-gray-400 font-normal mx-2">•</span>
                                        <span className="text-teal-300">Free Domain & Hosting</span>
                                    </span>
                                </div>

                                {/* Headline */}
                                <div className="space-y-4">
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white">
                                        Need More <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-glow">
                                            Customers?
                                        </span>
                                    </h1>
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-200">
                                        We Build Websites <br />
                                        That <span className="italic font-serif text-teal-300">Actually Sell</span>.
                                    </h2>
                                </div>

                                {/* Subheadline */}
                                <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
                                    Stop losing leads to outdated design. Get a professional website at just <span className="text-cyan-400 font-bold">₹11,999</span> with free domain, hosting & SSL.
                                </p>

                                {/* Price Display */}
                                <div className="flex items-center gap-4">
                                    <span className="text-xl text-gray-500 line-through">₹25,000</span>
                                    <span className="text-4xl sm:text-5xl font-black text-white">₹11,999</span>
                                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-white font-bold text-sm animate-bounce">
                                        52% OFF
                                    </span>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
                                    <a
                                        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group overflow-hidden flex items-center justify-center gap-2"
                                    >
                                        <MessageCircle className="w-6 h-6" />
                                        Get Started Now
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </a>

                                    <a
                                        href="tel:+917838583051"
                                        className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call Now
                                    </a>
                                </div>

                                {/* Trust Indicators */}
                                <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 text-sm font-medium text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <Users className="w-5 h-5 text-cyan-400" />
                                        <span>100+ Happy Clients</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Shield className="w-5 h-5 text-green-400" />
                                        <span>Money Back Guarantee</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-yellow-400" />
                                        <span>7-Day Delivery</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Visual Column - Mockup Interface */}
                            <div className="relative z-10 w-full h-full flex items-center justify-center lg:justify-end perspective-1000">
                                <div className="relative w-full max-w-[550px] aspect-[4/3] group perspective-1000">

                                    {/* Floating decorative elements */}
                                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl animate-float-delayed"></div>
                                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-float"></div>

                                    {/* Main Glass Panel */}
                                    <div className="relative w-full h-full glass-card rounded-2xl overflow-hidden transform transition-all duration-700 hover:rotate-y-2 hover:scale-[1.02] shadow-2xl shadow-cyan-900/20 flex flex-col border-t border-l border-white/20">

                                        {/* Window Header */}
                                        <div className="h-10 border-b border-white/5 bg-white/5 flex items-center justify-between px-4">
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                                                <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                                            </div>
                                            <div className="h-4 w-40 rounded-full bg-white/5"></div>
                                            <div className="w-4"></div>
                                        </div>

                                        {/* Window Body */}
                                        <div className="flex-1 p-6 relative flex flex-col gap-4 overflow-hidden">

                                            {/* Dashboard Header */}
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">Total Conversions</p>
                                                    <h3 className="text-3xl font-bold text-white">+127.4%</h3>
                                                </div>
                                                <div className="px-3 py-1 rounded-lg bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold flex items-center gap-1">
                                                    <Activity size={12} />
                                                    Processing...
                                                </div>
                                            </div>

                                            {/* Chart Section */}
                                            <div className="h-28 w-full relative">
                                                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent rounded-xl"></div>
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <AreaChart data={chartData}>
                                                        <defs>
                                                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                                <stop offset="5%" stopColor="#00d9ff" stopOpacity={0.3} />
                                                                <stop offset="95%" stopColor="#00d9ff" stopOpacity={0} />
                                                            </linearGradient>
                                                        </defs>
                                                        <Tooltip cursor={false} contentStyle={{ display: 'none' }} />
                                                        <Area
                                                            type="monotone"
                                                            dataKey="value"
                                                            stroke="#00d9ff"
                                                            strokeWidth={3}
                                                            fillOpacity={1}
                                                            fill="url(#colorValue)"
                                                        />
                                                    </AreaChart>
                                                </ResponsiveContainer>
                                            </div>

                                            {/* Bottom Widgets */}
                                            <div className="grid grid-cols-2 gap-3 mt-auto">
                                                <div className="glass-panel p-3 rounded-xl border border-white/5">
                                                    <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center mb-2">
                                                        <Globe className="text-blue-400 w-4 h-4" />
                                                    </div>
                                                    <p className="text-[10px] text-gray-400">Global Reach</p>
                                                    <p className="text-sm font-bold text-white">24 Countries</p>
                                                </div>
                                                <div className="glass-panel p-3 rounded-xl border border-white/5">
                                                    <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center mb-2">
                                                        <Layout className="text-purple-400 w-4 h-4" />
                                                    </div>
                                                    <p className="text-[10px] text-gray-400">Layout Engine</p>
                                                    <p className="text-sm font-bold text-white">v2.4.0 <span className="text-[10px] font-normal text-green-400 ml-1">Stable</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Scanline Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent h-[200%] w-full animate-scan pointer-events-none"></div>
                                    </div>

                                    {/* Floating Widget - Code Snippet */}
                                    <div className="absolute -left-8 bottom-16 w-44 glass-card rounded-xl p-3 border border-white/10 shadow-xl hidden md:block animate-float">
                                        <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2">
                                            <Code2 size={12} className="text-cyan-400" />
                                            <span className="text-[10px] text-gray-400 font-mono">protocol.tsx</span>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="h-1.5 w-full bg-gray-700/50 rounded-full"></div>
                                            <div className="h-1.5 w-3/4 bg-gray-700/50 rounded-full"></div>
                                            <div className="h-1.5 w-5/6 bg-cyan-500/30 rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Floating Widget - Processing */}
                                    <div className="absolute -right-4 top-16 w-36 glass-card rounded-xl p-2 border border-white/10 shadow-xl hidden md:flex items-center gap-2 animate-float-delayed">
                                        <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center relative">
                                            <Cpu size={16} className="text-teal-400" />
                                            <div className="absolute top-0 right-0 w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-pulse"></div>
                                        </div>
                                        <div>
                                            <p className="text-[8px] text-gray-400 uppercase">Status</p>
                                            <p className="text-[10px] font-bold text-white">Processing...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Countdown Timer Banner */}
                <div className="relative z-10 py-4 bg-gradient-to-r from-red-900/30 via-orange-900/30 to-red-900/30 border-y border-red-500/20">
                    <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="flex h-3 w-3 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            <span className="text-red-300 font-bold text-sm sm:text-base">
                                🔥 Only {slotsLeft} Slots Left Today!
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="text-yellow-400" size={18} />
                            <span className="text-gray-300 text-sm">Offer ends in:</span>
                            <div className="flex items-center gap-1">
                                <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded font-mono font-bold text-lg">
                                    {String(timeLeft.hours).padStart(2, '0')}
                                </span>
                                <span className="text-yellow-400 font-bold">:</span>
                                <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded font-mono font-bold text-lg">
                                    {String(timeLeft.minutes).padStart(2, '0')}
                                </span>
                                <span className="text-yellow-400 font-bold">:</span>
                                <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded font-mono font-bold text-lg">
                                    {String(timeLeft.seconds).padStart(2, '0')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CLIENT LOGOS SECTION */}
                <section className="relative z-10 py-12 border-b border-white/5">
                    <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-widest">Trusted by Industry Leaders</p>
                    <ClientLogos />
                </section>

                {/* WHAT YOU GET SECTION */}
                <section className="relative z-10 py-16 bg-navy-800/30">
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

                        {/* Big CTA */}
                        <div className="mt-12 text-center">
                            <a
                                href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl text-white font-bold text-xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all hover:scale-[1.02]"
                            >
                                <MessageCircle size={28} />
                                Get Started Now
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                            </a>
                        </div>
                    </div>
                </section>

                {/* PORTFOLIO SECTION */}
                <Portfolio />

                {/* SOCIAL PROOF - TESTIMONIALS */}
                <section className="relative z-10 py-16">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-4">
                                <Star className="text-yellow-400 fill-yellow-400" size={14} />
                                <span className="text-yellow-400 text-sm font-semibold">Trusted by 100+ Businesses</span>
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

                {/* TRUST SIGNALS */}
                <section className="relative z-10 py-12 bg-navy-800/30">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                            <div className="p-6 bg-navy-900/50 border border-white/10 rounded-2xl">
                                <div className="w-14 h-14 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="text-cyan-400" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">100+</h3>
                                <p className="text-gray-400">Happy Clients</p>
                            </div>
                            <div className="p-6 bg-navy-900/50 border border-white/10 rounded-2xl">
                                <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="text-green-400" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
                                <p className="text-gray-400">Money Back Guarantee</p>
                            </div>
                            <div className="p-6 bg-navy-900/50 border border-white/10 rounded-2xl">
                                <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Zap className="text-yellow-400" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">7 Days</h3>
                                <p className="text-gray-400">Delivery Time</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROCESS SECTION */}
                <section className="relative z-10 py-16">
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
                <section className="relative z-10 py-16 bg-navy-800/30">
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

                {/* CONTACT SECTION */}
                <section className="relative z-10 py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Get in Touch
                            </h2>
                            <p className="text-gray-400">We're here to help you get started</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <a
                                href="tel:+917838583051"
                                className="p-6 bg-navy-800/50 border border-white/10 rounded-2xl hover:border-cyan-400/30 transition-all text-center group"
                            >
                                <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <Phone className="text-blue-400" size={24} />
                                </div>
                                <h3 className="text-white font-semibold mb-2">Phone</h3>
                                <p className="text-cyan-400">+91 78385 83051</p>
                            </a>

                            <a
                                href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-6 bg-navy-800/50 border border-white/10 rounded-2xl hover:border-green-400/30 transition-all text-center group"
                            >
                                <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <MessageCircle className="text-green-400" size={24} />
                                </div>
                                <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                                <p className="text-green-400">Chat with us</p>
                            </a>

                            <a
                                href="mailto:hello@webalchemy.in"
                                className="p-6 bg-navy-800/50 border border-white/10 rounded-2xl hover:border-purple-400/30 transition-all text-center group"
                            >
                                <div className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <Mail className="text-purple-400" size={24} />
                                </div>
                                <h3 className="text-white font-semibold mb-2">Email</h3>
                                <p className="text-purple-400">hello@webalchemy.in</p>
                            </a>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA SECTION */}
                <section className="relative z-10 py-16 bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-purple-900/30">
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
                                Get Started Now
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                            </a>
                            <a
                                href="tel:+917838583051"
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
                        Get Started Now - ₹11,999
                    </a>
                </div>

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
