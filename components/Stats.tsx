import React, { useEffect, useState, useRef } from 'react';

interface StatItemProps {
  value: string;
  label: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

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

    const duration = 2000;
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

  const displayValue = isNaN(numericValue) ? value : Math.floor(count) + suffix;

  return (
    <div
      ref={elementRef}
      className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-2">
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
          {displayValue}
        </span>
      </div>
      <p className="text-sm md:text-base text-gray-500 font-medium tracking-wide">{label}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    { value: "150M+", label: "Revenue Generated", delay: 0 },
    { value: "98%", label: "Client Retention", delay: 100 },
    { value: "300+", label: "Projects Delivered", delay: 200 },
    { value: "24/7", label: "Global Support", delay: 300 }
  ];

  return (
    <section className="relative w-full py-20 bg-navy-900">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default Stats;