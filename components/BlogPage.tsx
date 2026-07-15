'use client';

import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowUpRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', 'Design', 'Development', 'Marketing', 'Strategy', 'Technical'];

    const allPosts = [
        {
            id: 1,
            title: "The Psychology of Color in Web Design",
            excerpt: "How choosing the right color palette can increase your conversion rates by up to 24%.",
            image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
            date: "Mar 15, 2024",
            author: "Alex Morgan",
            readTime: "5 min read",
            category: "Design",
            color: "text-purple-400",
            tagBg: "bg-purple-400/10 border-purple-400/20"
        },
        {
            id: 2,
            title: "Why Speed is the New SEO King",
            excerpt: "Google's Core Web Vitals update changed everything. Here is how to optimize for 100/100 scores.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            date: "Mar 10, 2024",
            author: "Sarah Jenkins",
            readTime: "8 min read",
            category: "Technical",
            color: "text-cyan-400",
            tagBg: "bg-cyan-400/10 border-cyan-400/20"
        },
        {
            id: 3,
            title: "From Visitor to Customer: CRO Basics",
            excerpt: "5 actionable tweaks you can make to your landing page today to double your leads.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
            date: "Mar 05, 2024",
            author: "Michael Chen",
            readTime: "6 min read",
            category: "Marketing",
            color: "text-emerald-400",
            tagBg: "bg-emerald-400/10 border-emerald-400/20"
        },
        {
            id: 4,
            title: "The Future of AI in Digital Agencies",
            excerpt: "How artificial intelligence is reshaping the landscape of design and development.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
            date: "Feb 28, 2024",
            author: "David Kim",
            readTime: "7 min read",
            category: "Strategy",
            color: "text-blue-400",
            tagBg: "bg-blue-400/10 border-blue-400/20"
        },
        {
            id: 5,
            title: "Mastering Tailwind CSS Grid",
            excerpt: "A deep dive into creating complex, responsive layouts with utility classes.",
            image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
            date: "Feb 22, 2024",
            author: "Sarah Jenkins",
            readTime: "10 min read",
            category: "Development",
            color: "text-indigo-400",
            tagBg: "bg-indigo-400/10 border-indigo-400/20"
        },
        {
            id: 6,
            title: "Brand Storytelling in 2024",
            excerpt: "Why narrative is more important than ever for connecting with Gen Z audiences.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
            date: "Feb 15, 2024",
            author: "Alex Morgan",
            readTime: "4 min read",
            category: "Marketing",
            color: "text-pink-400",
            tagBg: "bg-pink-400/10 border-pink-400/20"
        }
    ];

    const filteredPosts = allPosts.filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="pt-32 pb-20 min-h-screen bg-navy-900">

            {/* Header Section */}
            <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12 text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                    Insights & <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                        Digital Wisdom
                    </span>
                </h1>
                <p className="relative z-10 text-xl text-gray-400 max-w-2xl mx-auto">
                    Deep dives into design, technology, and marketing strategies to fuel your growth.
                </p>

                {/* Search & Filter Bar */}
                <div className="mt-12 relative z-10 max-w-3xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-4 items-center bg-navy-800/50 backdrop-blur-xl p-2 rounded-2xl border border-white/10">
                        <div className="relative flex-grow w-full md:w-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search articles..."
                                className="w-full bg-transparent border-none text-white placeholder-gray-500 pl-12 pr-4 py-3 focus:outline-none focus:ring-0"
                            />
                        </div>
                        <div className="flex gap-2 flex-wrap justify-center w-full md:w-auto px-2 md:px-0">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${activeCategory === cat
                                        ? 'bg-cyan-500 text-navy-900 font-bold'
                                        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <Link
                            to={`/blog/${post.id}`}
                            key={post.id}
                            className="group relative flex flex-col h-full bg-navy-900 border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,0,0,0.3)] hover:-translate-y-2 cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <div className={`absolute top-4 left-4 z-20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border ${post.tagBg} ${post.color}`}>
                                    {post.category}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent z-10 opacity-80"></div>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-8 pt-2 flex flex-col relative z-20 bg-navy-900">
                                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-4 border-b border-white/5 pb-4">
                                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                                    <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-cyan-400 transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto pt-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
                                            <User size={14} className="text-gray-300" />
                                        </div>
                                        <span className="text-xs text-gray-300 font-medium">{post.author}</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-navy-900 transition-all duration-300">
                                        <ArrowUpRight size={16} className="transform group-hover:rotate-45 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyan-500/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
