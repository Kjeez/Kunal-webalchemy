'use client';

import React, { useState, useEffect, useRef } from 'react';
import { projectsData } from '../data/projectsData';

const LogoPlaceholder: React.FC<{ name: string }> = ({ name }) => (
  <div className="flex items-center gap-3 px-8 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default select-none">
    {/* Simple dot indicator */}
    <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
    <span className="text-lg font-semibold font-sans tracking-tight text-gray-400 hover:text-white transition-colors whitespace-nowrap">{name}</span>
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
    <div
      className="w-full overflow-hidden relative group"
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
      }}
    >
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
