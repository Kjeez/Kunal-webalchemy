import React from 'react';
import { Activity, BarChart2, Globe, Layout, Code2, Cpu } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

// Dummy data for the small chart inside the mockup
const chartData = [
  { value: 20 }, { value: 45 }, { value: 30 }, { value: 60 }, { value: 55 }, { value: 85 }, { value: 70 }, { value: 95 }
];

export const BackgroundBeams: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      
      {/* 1. Base Gradient Background */}
      <div className="absolute inset-0 bg-navy-900"></div>

      {/* NEW: Animated Abstract Blobs */}
      <div className="absolute -top-[10%] -left-[10%] w-[40rem] h-[40rem] bg-purple-600/20 rounded-full blur-[100px] animate-float-delayed mix-blend-screen opacity-60"></div>
      <div className="absolute top-[20%] -right-[10%] w-[35rem] h-[35rem] bg-cyan-500/20 rounded-full blur-[120px] animate-float mix-blend-screen opacity-50"></div>
      <div className="absolute -bottom-[10%] left-[20%] w-[45rem] h-[45rem] bg-purple-500/10 rounded-full blur-[140px] animate-pulse-slow mix-blend-screen opacity-40"></div>

      {/* 2. The "Aura" - Large centralized glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[40rem] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen animate-float"></div>
      
      {/* 3. The Grid Pattern with Mask */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
      
      {/* 4. Animated "Beams" (SVG Paths) */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]">
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Defs for gradients */}
          <defs>
            <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#00d9ff" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="beam-gradient-purple" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {/* Curved Paths with Stroke Animation */}
          {/* Beam 1 - Cyan */}
          <path 
            d="M0,50 Q25,40 50,50 T100,50" 
            fill="none" 
            stroke="url(#beam-gradient)" 
            strokeWidth="0.2"
            strokeDasharray="10 90"
            className="animate-beam"
            style={{ opacity: 0.7 }}
          />
           {/* Beam 2 - Cyan Delayed */}
           <path 
            d="M0,60 Q30,70 60,60 T100,60" 
            fill="none" 
            stroke="url(#beam-gradient)" 
            strokeWidth="0.15"
            strokeDasharray="15 85"
            className="animate-beam-delayed"
            style={{ opacity: 0.5 }}
          />
           {/* Beam 3 - Purple Crossing */}
           <path 
            d="M100,30 Q75,40 50,30 T0,30" 
            fill="none" 
            stroke="url(#beam-gradient-purple)" 
            strokeWidth="0.2"
            strokeDasharray="10 90"
            className="animate-beam"
            style={{ animationDirection: 'reverse', animationDuration: '12s', opacity: 0.6 }}
          />
        </svg>
      </div>

      {/* 5. Central Spotlight/Highlight to enhance the hero text area */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 blur-[80px] opacity-50"></div>
    </div>
  );
};

export const MockupInterface: React.FC = () => {
  return (
    <div className="relative w-full max-w-[600px] aspect-[4/3] group perspective-1000">
      
      {/* Floating decorative elements behind */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl animate-float-delayed"></div>
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-float"></div>

      {/* Main Glass Panel (Laptop Screen Metaphor) */}
      <div className="relative w-full h-full glass-card rounded-2xl overflow-hidden transform transition-all duration-700 hover:rotate-y-2 hover:scale-[1.02] shadow-2xl shadow-cyan-900/20 flex flex-col border-t border-l border-white/20">
        
        {/* Window Header */}
        <div className="h-10 border-b border-white/5 bg-white/5 flex items-center justify-between px-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
          </div>
          <div className="h-4 w-40 rounded-full bg-white/5"></div>
          <div className="w-4"></div> {/* Spacer */}
        </div>

        {/* Window Body */}
        <div className="flex-1 p-6 relative flex flex-col gap-6 overflow-hidden">
          
          {/* Dashboard Header */}
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">Total Conversions</p>
              <h3 className="text-3xl font-bold text-white">+127.4%</h3>
            </div>
            <div className="px-3 py-1 rounded-lg bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold flex items-center gap-1">
              <Activity size={12} />
              Verified
            </div>
          </div>

          {/* Chart Section using Recharts */}
          <div className="h-32 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent rounded-xl"></div>
             <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00d9ff" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00d9ff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip cursor={false} contentStyle={{ display: 'none' }} />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#00d9ff" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Bottom Widgets Grid */}
          <div className="grid grid-cols-2 gap-4 mt-auto">
            <div className="glass-panel p-4 rounded-xl border border-white/5 hover:bg-white/5 transition-colors group/card">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3 group-hover/card:scale-110 transition-transform">
                <Globe className="text-blue-400 w-4 h-4" />
              </div>
              <p className="text-xs text-gray-400">Global Reach</p>
              <p className="text-lg font-bold text-white">24 Countries</p>
            </div>

            <div className="glass-panel p-4 rounded-xl border border-white/5 hover:bg-white/5 transition-colors group/card">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mb-3 group-hover/card:scale-110 transition-transform">
                <Layout className="text-purple-400 w-4 h-4" />
              </div>
              <p className="text-xs text-gray-400">Layout Engine</p>
              <p className="text-lg font-bold text-white">v2.4.0 <span className="text-xs font-normal text-green-400 ml-1">Stable</span></p>
            </div>
          </div>

        </div>

        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent h-[200%] w-full animate-scan pointer-events-none"></div>
      </div>

      {/* Floating Widget 1 (Code Snippet) */}
      <div className="absolute -left-12 bottom-20 w-48 glass-card rounded-xl p-4 border border-white/10 shadow-xl hidden md:block animate-float">
         <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2">
            <Code2 size={14} className="text-cyan-400" />
            <span className="text-xs text-gray-400 font-mono">protocol.tsx</span>
         </div>
         <div className="space-y-1.5">
           <div className="h-1.5 w-full bg-gray-700/50 rounded-full"></div>
           <div className="h-1.5 w-3/4 bg-gray-700/50 rounded-full"></div>
           <div className="h-1.5 w-5/6 bg-cyan-500/30 rounded-full"></div>
         </div>
      </div>

       {/* Floating Widget 2 (Processing) */}
       <div className="absolute -right-8 top-20 w-40 glass-card rounded-xl p-3 border border-white/10 shadow-xl hidden md:flex items-center gap-3 animate-float-delayed">
         <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center relative">
            <Cpu size={20} className="text-teal-400" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-pulse"></div>
         </div>
         <div>
            <p className="text-[10px] text-gray-400 uppercase">Status</p>
            <p className="text-xs font-bold text-white">Processing...</p>
         </div>
      </div>

    </div>
  );
};