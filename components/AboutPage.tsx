import React from 'react';
import { Rocket, Target, Users, Zap, Award, Heart, Linkedin, Twitter } from 'lucide-react';

/* ... previous code ... */


import ClientLogos from './ClientLogos';

const AboutPage: React.FC = () => {
    const stats = [
        { label: 'Years Experience', value: '5+' },
        { label: 'Projects Delivered', value: '100+' },
        { label: 'Team Members', value: '12' },
        { label: 'Client Satisfaction', value: '98%' },
    ];

    const values = [
        {
            title: 'Innovation First',
            desc: 'We don’t just follow trends; we set them. Constantly exploring new tech to give you the edge.',
            icon: Zap,
            color: 'text-yellow-400',
            bg: 'bg-yellow-400/10'
        },
        {
            title: 'Radical Transparency',
            desc: 'No hidden fees, no jargon. Just honest communication and clear results from day one.',
            icon: Users,
            color: 'text-cyan-400',
            bg: 'bg-cyan-400/10'
        },
        {
            title: 'Speed & Precision',
            desc: 'We move fast without breaking things. Rapid deployment meets military-grade testing.',
            icon: Rocket,
            color: 'text-purple-400',
            bg: 'bg-purple-400/10'
        }
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen bg-navy-900">

            {/* Hero Section */}
            <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24 text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[25rem] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                    Architects of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                        Digital Reality
                    </span>
                </h1>
                <p className="relative z-10 text-xl text-gray-400 max-w-2xl mx-auto">
                    We are not just a digital agency. We are a collective of dreamers, doers, and creators obsessed with building the future.
                </p>
            </div>

            {/* Our Story */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Who Are We?</h2>
                        <div className="space-y-4 text-gray-400 leading-relaxed">
                            <p>
                                Webkik Services is a digital marketing agency based in New Delhi, helping businesses and startups build a strong online presence through customized digital solutions. We specialize in website development, UI/UX design, SEO, social media marketing, branding, and performance-driven strategies, combining creativity, technology, and data to deliver impactful experiences that help brands grow, scale, and stand out in the digital world.
                            </p>
                            <h2 className="text-3xl font-bold text-white pt-4">What We do?</h2>
                            <p>
                                Our pursuit of the perfect blend of data and creativity enables brands to unlock their true business potential.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="text-center md:text-left">
                                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                        <div className="relative bg-navy-800 border border-white/5 rounded-2xl p-2 aspect-video overflow-hidden">
                            {/* Placeholder for Office/Team Image */}
                            <div className="w-full h-full bg-navy-900 flex items-center justify-center text-gray-600">
                                <Award size={64} className="opacity-20" />
                                <span className="ml-4 opacity-50 font-mono">Image: Office / Team</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Founder Profile */}
            <div className="bg-navy-800/20 border-y border-white/5 py-24 mb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white">Meet the Founder</h2>
                    </div>
                    <div className="max-w-4xl mx-auto bg-navy-900 border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">

                        {/* Glow Effect */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none"></div>

                        {/* Image */}
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-navy-800 shadow-2xl overflow-hidden shrink-0 relative z-10">
                            <img src="/founder.jpg" alt="Kunal - Founder" className="w-full h-full object-cover" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-2">Kunal</h3>
                            <p className="text-cyan-400 font-medium mb-6">Founder & Lead Strategist</p>
                            <div className="space-y-4 text-gray-400 leading-relaxed italic border-l-4 border-cyan-500/20 pl-6">
                                <p>
                                    "I founded WebAlchemy with a solitary goal: to stop the internet from being boring. Every pixel should have a purpose, every interaction should spark joy."
                                </p>
                                <p>
                                    "We don't just build websites; we build engines for growth. My promise to you is simple: we care about your business as much as you do."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
                        <Users size={12} />
                        Dream Team
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Minds Behind the Magic</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">A collective of creative visionaries and technical wizards.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { name: 'Sarah Jenkins', role: 'Head of Design', img: '1', greeting: 'Bonjour!' },
                        { name: 'David Chen', role: 'Tech Lead', img: '2', greeting: 'Hello!' },
                        { name: 'Elena Rodriguez', role: 'Marketing Director', img: '3', greeting: 'Hola!' },
                        { name: 'Michael Chang', role: 'Strategy Lead', img: '4', greeting: 'Namaste!' }
                    ].map((member, idx) => (
                        <div key={idx} className="group relative aspect-[3/4] overflow-hidden border border-cyan-500/50 bg-navy-900 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,255,0.2)]">

                            {/* Greeting (Hover Only) */}
                            <div className="absolute top-6 left-6 z-20 -rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-2">
                                <span className="text-cyan-400 text-2xl font-serif italic font-bold tracking-wider drop-shadow-lg">{member.greeting}</span>
                            </div>

                            {/* Image */}
                            <img
                                src={`https://i.pravatar.cc/800?img=${member.img}`}
                                alt={member.name}
                                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

                            {/* Text Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                <div className="h-0.5 w-0 group-hover:w-8 bg-cyan-400 mb-2 transition-all duration-300"></div>
                                <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Core Values */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Our DNA</h2>
                    <p className="text-gray-400">The principles that guide every decision we make.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((val, idx) => (
                        <div key={idx} className="bg-navy-800/30 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1">
                            <div className={`w-12 h-12 rounded-lg ${val.bg} ${val.color} flex items-center justify-center mb-6`}>
                                <val.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Clients Section reused */}
            <div className="border-t border-white/5 pt-20">
                <div className="text-center mb-12">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Trusted by Innovators</p>
                </div>
                <ClientLogos />
            </div>

        </div>
    );
};

export default AboutPage;
