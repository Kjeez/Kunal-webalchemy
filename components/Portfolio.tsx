import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Zap, ExternalLink } from 'lucide-react';

import { projectsData } from '../data/projectsData';

const Portfolio: React.FC = () => {
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Select top 15 projects for the marquee (3 rows x 5 items)
  // We'll mix categories for variety
  const featuredProjects = [
    ...projectsData.filter(p => p.category === 'Educational').slice(0, 3),
    ...projectsData.filter(p => p.category === 'E-commerce').slice(0, 3),
    ...projectsData.filter(p => p.category === 'Corporate').slice(0, 3),
    ...projectsData.filter(p => p.category === 'Travel').slice(0, 3),
    ...projectsData.filter(p => p.category === 'Creative').slice(0, 3),
  ];

  // Split into rows
  const row1 = featuredProjects.slice(0, 5);
  const row2 = featuredProjects.slice(5, 10);
  const row3 = featuredProjects.slice(10, 15);

  return (
    <section id="results" className="relative w-full py-24 bg-navy-900 z-10 overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Header Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">Global Impact</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Scale</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore our recent work. We build digital experiences that drive real business growth.
        </p>
      </div>

      {/* Marquee Rows Container */}
      <div className="flex flex-col gap-6 md:gap-8">

        {/* Row 1: Left to Right (reverses on scroll up) */}
        <MarqueeRow items={row1} direction="left-to-right" speed="slow" scrollDirection={scrollDirection} />

        {/* Row 2: Right to Left (reverses on scroll up) */}
        <MarqueeRow items={row2} direction="right-to-left" speed="normal" scrollDirection={scrollDirection} />

        {/* Row 3: Left to Right (reverses on scroll up) */}
        <MarqueeRow items={row3} direction="left-to-right" speed="slow" scrollDirection={scrollDirection} />

      </div>

      {/* Footer Stats / CTA */}
      <div className="max-w-7xl mx-auto px-4 mt-20 text-center">
        <a href="/portfolio" className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-navy-900 font-bold hover:bg-cyan-50 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          View all Projects
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>

    </section>
  );
};

// --- Helper Components ---

interface MarqueeRowProps {
  items: typeof projectsData;
  direction: 'left-to-right' | 'right-to-left';
  speed?: 'slow' | 'normal' | 'fast';
  scrollDirection: 'down' | 'up';
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, direction, speed = 'normal', scrollDirection }) => {
  // Determine animation class based on direction and scroll direction
  // When scrolling up, reverse the animation
  let animationClass: string;

  if (scrollDirection === 'down') {
    animationClass = direction === 'left-to-right'
      ? 'animate-marquee-reverse' // Moves negative to 0 (visually left to right)
      : 'animate-marquee';        // Moves 0 to negative (visually right to left)
  } else {
    // Scrolling up - reverse the animations
    animationClass = direction === 'left-to-right'
      ? 'animate-marquee'         // Reversed
      : 'animate-marquee-reverse'; // Reversed
  }

  // Determine duration
  const durationStyle = {
    animationDuration: speed === 'slow' ? '60s' : speed === 'fast' ? '30s' : '45s'
  };

  return (
    <div className="relative w-full overflow-hidden group">
      {/* Gradient Masks for edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-navy-900 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-navy-900 to-transparent pointer-events-none"></div>

      {/* Animated Track - Contains 2 sets of items for seamless loop */}
      <div
        className={`flex w-max gap-6 md:gap-8 ${animationClass} group-hover:[animation-play-state:paused]`}
        style={durationStyle}
      >
        {/* Set 1 */}
        {items.map((item) => (
          <PortfolioCard key={`a-${item.id}`} project={item} />
        ))}
        {/* Set 2 (Duplicate) */}
        {items.map((item) => (
          <PortfolioCard key={`b-${item.id}`} project={item} />
        ))}
        {/* Set 3 (Triple Buffer for wide screens) */}
        {items.map((item) => (
          <PortfolioCard key={`c-${item.id}`} project={item} />
        ))}
      </div>
    </div>
  );
};

const PortfolioCard: React.FC<{ project: typeof projectsData[0] }> = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-[300px] sm:w-[400px] h-[220px] sm:h-[260px] rounded-2xl overflow-hidden cursor-pointer shrink-0 transition-transform duration-300 hover:scale-[1.02] hover:z-20 border border-white/5 group/card block"
    >
      {/* Background Image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 grayscale-[30%] group-hover/card:grayscale-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity"></div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">

        {/* Top Tag */}
        <div className="flex justify-between items-start opacity-100 transition-opacity">
          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-white border border-white/10">
            {project.category}
          </span>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/card:translate-y-0">
            <ExternalLink className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Bottom Info */}
        <div className="transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold text-white mb-1 group-hover/card:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-gray-200">{project.metric}</span>
          </div>
        </div>
      </div>

      {/* Hover Glass Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover/card:border-cyan-500/30 rounded-2xl pointer-events-none transition-colors"></div>
    </a>
  );
};

export default Portfolio;