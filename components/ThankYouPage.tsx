import React, { useEffect } from 'react';
import { CheckCircle, ArrowRight, Phone, MessageCircle, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYouPage: React.FC = () => {
    const phoneNumber = "919625429686";
    const whatsappMessage = encodeURIComponent("Hi! I just submitted a form on your website. Looking forward to hearing from you!");

    // Optional: Fire Google Ads conversion on page load
    useEffect(() => {
        // Google Ads conversion tracking (if gtag is available)
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'conversion', {
                'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL', // Replace with your actual conversion ID
            });
        }
    }, []);

    return (
        <section className="relative min-h-[80vh] flex items-center justify-center py-20">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px]"></div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">

                {/* Success Icon */}
                <div className="mb-8 inline-flex">
                    <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center animate-bounce-slow">
                            <CheckCircle className="w-12 h-12 text-white" />
                        </div>
                        {/* Pulse ring */}
                        <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping"></div>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
                    Thank You! 🎉
                </h1>

                <p className="text-xl text-gray-300 mb-2">
                    Your request has been submitted successfully.
                </p>

                <p className="text-gray-400 mb-8">
                    Our team will get back to you within <span className="text-cyan-400 font-semibold">24 hours</span>.
                </p>

                {/* What's Next Card */}
                <div className="bg-navy-800/50 border border-white/10 rounded-2xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">What happens next?</h2>
                    <div className="space-y-4 text-left">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-cyan-400 font-bold text-sm">1</span>
                            </div>
                            <div>
                                <p className="text-white font-medium">We review your requirements</p>
                                <p className="text-gray-400 text-sm">Our team analyzes your project needs</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-cyan-400 font-bold text-sm">2</span>
                            </div>
                            <div>
                                <p className="text-white font-medium">We'll call or WhatsApp you</p>
                                <p className="text-gray-400 text-sm">To discuss your project in detail</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-cyan-400 font-bold text-sm">3</span>
                            </div>
                            <div>
                                <p className="text-white font-medium">Get a free quote</p>
                                <p className="text-gray-400 text-sm">Custom proposal based on your needs</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Need Faster Response? */}
                <div className="mb-8">
                    <p className="text-gray-400 mb-4">Need a faster response?</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl text-white font-bold transition-all hover:scale-[1.02]"
                        >
                            <MessageCircle size={20} />
                            WhatsApp Us
                        </a>
                        <a
                            href="tel:+919625429686"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-bold transition-all"
                        >
                            <Phone size={20} />
                            Call Now
                        </a>
                    </div>
                </div>

                {/* Back to Home */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                    <Home size={18} />
                    Back to Homepage
                    <ArrowRight size={16} />
                </Link>

            </div>
        </section>
    );
};

export default ThankYouPage;
