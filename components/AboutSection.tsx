'use client';

import React, { useState, useEffect, useRef } from 'react';

// Counter component for animated numbers
const AnimatedCounter: React.FC<{ value: string; isVisible: boolean }> = ({ value, isVisible }) => {
    const [count, setCount] = useState(0);

    // Parse the numeric part and suffix (like + or %)
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
    const suffix = value.replace(/[0-9]/g, '');

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        const duration = 2000; // 2 seconds

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * numericValue));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, numericValue]);

    return <>{count}{suffix}</>;
};

const AboutSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const stats = [
        { value: '5+', label: 'Years Experience' },
        { value: '100+', label: 'Projects Delivered' },
        { value: '12', label: 'Team Members' },
        { value: '98%', label: 'Client Satisfaction' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-24 bg-navy-900 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        {/* Who Are We */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Who Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">We?</span>
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                WebAlchemy is a digital Growth agency based in New Delhi, helping businesses and startups build a strong online presence through customized digital solutions. We specialize in website development, UI/UX design, SEO, social media marketing, branding, and performance-driven strategies, combining creativity, technology, and data to deliver impactful experiences that help brands grow, scale, and stand out in the digital world.
                            </p>
                        </div>

                        {/* What We Do */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Do?</span>
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Our pursuit of the perfect blend of data and creativity enables brands to unlock their true business potential.
                            </p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div ref={sectionRef} className="grid grid-cols-2 gap-6">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-navy-800/50 border border-white/5 rounded-2xl p-8 text-center hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10">
                                    <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2">
                                        <AnimatedCounter value={stat.value} isVisible={isVisible} />
                                    </div>
                                    <div className="text-sm text-gray-500 uppercase tracking-widest font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
