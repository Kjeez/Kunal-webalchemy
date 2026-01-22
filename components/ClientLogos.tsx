import React, { useState, useEffect, useRef } from 'react';
import { projectsData } from '../data/projectsData';

const LogoPlaceholder: React.FC<{ name: string }> = ({ name }) => (
  <div className="flex items-center gap-3 px-8 opacity-30 hover:opacity-100 transition-opacity duration-300 cursor-default select-none grayscale hover:grayscale-0">
    {/* Geometric Icon Placeholder */}
    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/5">
      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
    </div>
    <span className="text-xl font-bold font-sans tracking-tight text-gray-300 hover:text-white transition-colors">{name}</span>
  </div>
);

const ClientLogos: React.FC = () => {
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

  // Get client names from portfolio projects
  const clients = projectsData.map(project => project.title);

  // Quadruple the list to ensure we have enough content to scroll seamlessly
  const allClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <div className="w-full overflow-hidden relative group">

      {/* Side Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-navy-900 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-navy-900 to-transparent pointer-events-none"></div>

      {/* Marquee Track - Direction based on scroll */}
      <div
        className={`flex w-max group-hover:[animation-play-state:paused] ${scrollDirection === 'down' ? 'animate-marquee-reverse' : 'animate-marquee'
          }`}
        style={{ animationDuration: '80s' }}
      >
        {allClients.map((client, index) => (
          <LogoPlaceholder key={`${client}-${index}`} name={client} />
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
