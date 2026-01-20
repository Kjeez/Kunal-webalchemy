import React, { useEffect, useState, useRef } from 'react';
import { Trophy, TrendingUp, Users, Globe2, ArrowUpRight } from 'lucide-react';

interface StatItemProps {
  icon: React.ElementType;
  value: string; // "150M+", "98%", etc.
  label: string;
  sublabel: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon: Icon, value, label, sublabel, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  
  // Extract number for animation if possible (basic logic)
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || isNaN(numericValue)) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  // If we couldn't parse a number (e.g. complex string), just show static value
  const displayValue = isNaN(numericValue) ? value : Math.floor(count) + suffix;

  return (
    <div 
      ref={elementRef}
      className={`relative p-8 group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Hover Background */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon Header */}
        <div className="mb-4 p-3 rounded-full bg-navy-800/50 border border-white/5 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-all duration-300 transform group-hover:scale-110 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
          <Icon className="w-6 h-6" />
        </div>

        {/* Number with Gradient */}
        <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-400 group-hover:from-cyan-300 group-hover:to-teal-400 transition-all duration-300">
            {displayValue}
          </span>
        </div>

        {/* Labels */}
        <h3 className="text-lg font-bold text-white mb-1">{label}</h3>
        <p className="text-sm text-gray-500 font-medium group-hover:text-cyan-200/70 transition-colors">{sublabel}</p>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
         <ArrowUpRight className="w-4 h-4 text-white/20" />
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "150M+",
      label: "Revenue Generated",
      sublabel: "For our partner clients",
      delay: 0
    },
    {
      icon: Users,
      value: "98%",
      label: "Client Retention",
      sublabel: "Long-term partnerships",
      delay: 100
    },
    {
      icon: Trophy,
      value: "300+",
      label: "Projects Launched",
      sublabel: "Across 12 industries",
      delay: 200
    },
    {
      icon: Globe2,
      value: "24/7",
      label: "Global Support",
      sublabel: "Always-on monitoring",
      delay: 300
    }
  ];

  return (
    <section className="relative w-full z-20 -mt-10 mb-10">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
         {/* Glass Container */}
         <div className="relative rounded-[2.5rem] overflow-hidden backdrop-blur-xl bg-navy-900/80 border border-white/10 shadow-2xl shadow-black/50">
           
           {/* Background Grid Pattern */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
           
           {/* Background Glows */}
           <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
           <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

           {/* Stats Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5 relative z-10">
             {stats.map((stat, index) => (
               <StatItem 
                 key={index}
                 icon={stat.icon}
                 value={stat.value}
                 label={stat.label}
                 sublabel={stat.sublabel}
                 delay={stat.delay}
               />
             ))}
           </div>

           {/* Bottom Bar Gradient Line */}
           <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50"></div>
         </div>
       </div>
    </section>
  );
};

export default Stats;