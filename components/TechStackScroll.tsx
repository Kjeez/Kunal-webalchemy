import React, { useEffect, useState, useRef } from 'react';

// Tech stack logos using simple SVG icons and brand colors
const techStack = [
    { name: 'React', color: '#61DAFB', icon: '⚛️' },
    { name: 'Next.js', color: '#ffffff', icon: '▲' },
    { name: 'HTML5', color: '#E34F26', icon: '🌐' },
    { name: 'CSS3', color: '#1572B6', icon: '🎨' },
    { name: 'JavaScript', color: '#F7DF1E', icon: 'JS' },
    { name: 'TypeScript', color: '#3178C6', icon: 'TS' },
    { name: 'Strapi', color: '#8E75FF', icon: '🚀' },
    { name: 'Three.js', color: '#ffffff', icon: '3D' },
    { name: 'Shopify', color: '#96BF48', icon: '🛒' },
    { name: 'WordPress', color: '#21759B', icon: 'WP' },
    { name: 'Wix', color: '#FAAD4D', icon: 'Wix' },
    { name: 'Framer', color: '#0055FF', icon: '◈' },
    { name: 'Webflow', color: '#4353FF', icon: '⬡' },
    { name: 'Tailwind', color: '#06B6D4', icon: '🌊' },
    { name: 'PHP', color: '#777BB4', icon: 'PHP' },
    { name: 'Liquid', color: '#95BF47', icon: '💧' },
    { name: 'Git', color: '#F05032', icon: '⎇' },
    { name: 'jQuery', color: '#0769AD', icon: '$' },
    { name: 'AWS', color: '#FF9900', icon: '☁️' },
    { name: 'Node.js', color: '#339933', icon: '⬢' },
];

const TechStackScroll: React.FC = () => {
    const [scrollDirection, setScrollDirection] = useState<'left' | 'right'>('right');
    const lastScrollY = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) {
                // Scrolling down - logos go left to right
                setScrollDirection('right');
            } else {
                // Scrolling up - logos go right to left
                setScrollDirection('left');
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Duplicate the array for seamless infinite scroll
    const duplicatedStack = [...techStack, ...techStack, ...techStack];

    return (
        <section className="relative py-16 bg-navy-900 overflow-hidden">
            {/* Top gradient fade */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* Title */}
            <div className="text-center mb-10">
                <h3 className="text-lg font-semibold text-gray-400 tracking-wider uppercase">
                    Technologies We Master
                </h3>
            </div>

            {/* Scrolling container */}
            <div
                ref={containerRef}
                className="relative w-full overflow-hidden"
                style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
            >
                <div
                    className={`flex gap-12 items-center ${scrollDirection === 'right'
                            ? 'animate-scroll-left'
                            : 'animate-scroll-right'
                        }`}
                    style={{
                        width: 'fit-content',
                    }}
                >
                    {duplicatedStack.map((tech, index) => (
                        <div
                            key={`${tech.name}-${index}`}
                            className="flex flex-col items-center gap-3 group cursor-pointer"
                        >
                            <div
                                className="w-16 h-16 rounded-2xl bg-navy-800/80 border border-white/10 flex items-center justify-center text-2xl hover:border-white/30 hover:scale-110 transition-all duration-300 hover:shadow-lg"
                                style={{
                                    boxShadow: `0 0 20px ${tech.color}20`,
                                }}
                            >
                                <span
                                    className="font-bold"
                                    style={{ color: tech.color }}
                                >
                                    {tech.icon}
                                </span>
                            </div>
                            <span
                                className="text-xs font-medium text-gray-500 group-hover:text-white transition-colors whitespace-nowrap"
                            >
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>
    );
};

export default TechStackScroll;
