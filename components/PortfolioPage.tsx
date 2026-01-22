import React, { useState } from 'react';
import { ArrowUpRight, Zap, ExternalLink, Filter } from 'lucide-react';
import { projectsData, Project } from '../data/projectsData';

const PortfolioPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Educational', 'E-commerce', 'Corporate', 'Travel', 'Creative'];

    const filteredProjects = activeCategory === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory);

    return (
        <section className="relative w-full min-h-screen pt-32 pb-24 bg-navy-900 z-10 overflow-hidden text-white">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Masterpieces</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        A curated selection of meaningful digital experiences.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${activeCategory === cat
                                    ? 'bg-cyan-500 text-navy-900 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                                    : 'bg-navy-800/50 text-gray-400 border-white/5 hover:border-cyan-500/50 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <PortfolioCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-20 text-center">
                    <p className="text-gray-400 mb-6">Ready to start your journey?</p>
                    <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-navy-900 font-bold hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] hover:scale-105 transition-all duration-300">
                        Start Your Project
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>

        </section>
    );
};

// --- Helper Components ---

const PortfolioCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-navy-800/30 block"
        >
            {/* Background Image */}
            <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">{project.category}</span>
                        <ExternalLink className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                    </h3>
                    {project.metric && (
                        <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            <span className="text-xs font-semibold text-gray-300">{project.metric}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Hover Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/30 rounded-2xl pointer-events-none transition-colors"></div>
        </a>
    );
};

export default PortfolioPage;
