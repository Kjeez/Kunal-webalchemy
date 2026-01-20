import React from 'react';
import { MonitorX, Smartphone, Timer, TrendingDown, MousePointerClick, AlertTriangle, ArrowRight } from 'lucide-react';

const PainPoints: React.FC = () => {
  const problems = [
    {
      icon: MonitorX,
      color: "text-red-400",
      shadow: "shadow-red-900/20",
      title: "Outdated Design",
      desc: "Visitors leave immediately. If it looks like 2010, they assume you're out of business."
    },
    {
      icon: Smartphone,
      color: "text-orange-400",
      shadow: "shadow-orange-900/20",
      title: "No Mobile Optimization",
      desc: "Losing 60% of traffic. Mobile users abandon pinch-and-zoom sites instantly."
    },
    {
      icon: Timer,
      color: "text-yellow-400",
      shadow: "shadow-yellow-900/20",
      title: "Slow Loading Speed",
      desc: "5-second load = 90% bounce rate. Every second of delay kills your conversions."
    },
    {
      icon: TrendingDown,
      color: "text-red-400",
      shadow: "shadow-red-900/20",
      title: "Poor SEO Ranking",
      desc: "Not found on Google searches. Your competitors are getting the leads you deserve."
    },
    {
      icon: MousePointerClick,
      color: "text-orange-400",
      shadow: "shadow-orange-900/20",
      title: "No Clear Call-to-Action",
      desc: "Visitors don't know what to do next. Confusion is the enemy of conversion."
    },
    {
      icon: AlertTriangle,
      color: "text-yellow-400",
      shadow: "shadow-yellow-900/20",
      title: "DIY Website Mistakes",
      desc: "Wasting time and money. Templates break, plugins conflict, and you lose sanity."
    }
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 bg-navy-950 z-10">
      {/* Technical Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block mb-4 px-3 py-1 border border-red-500/30 rounded text-xs font-mono text-red-400 tracking-widest uppercase bg-red-500/5">
            System Diagnostics
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Is Your Website <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Bleeding Revenue?
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Identified critical errors preventing your business from scaling.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-navy-900 border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              {/* Corner Accents for Technical Look */}
              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20 group-hover:border-white/50 transition-colors"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/20 group-hover:border-white/50 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/20 group-hover:border-white/50 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 group-hover:border-white/50 transition-colors"></div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded bg-navy-800 border border-white/10 flex items-center justify-center mb-6 ${problem.shadow} shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                <problem.icon className={`w-6 h-6 ${problem.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                {problem.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                {problem.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wider transition-all group cursor-pointer border-b border-transparent hover:border-red-500 pb-1">
            <span>Initiate Repair Protocol</span>
            <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default PainPoints;