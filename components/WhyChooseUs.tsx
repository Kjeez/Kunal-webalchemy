'use client';

import React from 'react';
import { Zap, Shield, Layout, MessageSquare, Cpu, TrendingUp } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
   return (
      <section id="process" className="relative w-full py-24 lg:py-32 bg-navy-900 z-10">

         {/* Ambient Background Glow */}
         <div className="absolute top-1/2 left-0 w-[30rem] h-[30rem] bg-cyan-500/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
         <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
               <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">The WebAlchemy Advantage</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                  Why Visionaries <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                     Partner With Us
                  </span>
               </h2>
               <p className="text-gray-400 text-lg leading-relaxed">
                  We don't just build websites; we engineer digital ecosystems designed for dominance.
                  Here is what sets our agency apart from the crowd.
               </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

               {/* Card 1: Speed (Large - Spans 2 cols) */}
               <div className="md:col-span-2 group relative bg-navy-800/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center h-full">
                     <div className="flex-1 space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-2">
                           <Zap className="w-6 h-6 text-cyan-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Lightning Fast Performance</h3>
                        <p className="text-gray-400">
                           We optimize every line of code. Our sites consistently score 98+ on Google PageSpeed, ensuring better SEO and lower bounce rates.
                        </p>
                     </div>
                     {/* Visual: Speedometer / Score */}
                     <div className="w-full md:w-auto flex-shrink-0">
                        <div className="relative w-40 h-40 flex items-center justify-center bg-navy-900 rounded-full border-4 border-navy-800 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                           <svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                              <circle cx="50" cy="50" r="45" fill="none" stroke="#1f2937" strokeWidth="8" />
                              <circle
                                 cx="50" cy="50" r="45" fill="none" stroke="#00d9ff" strokeWidth="8"
                                 strokeDasharray="283" strokeDashoffset="20"
                                 className="drop-shadow-[0_0_10px_rgba(0,217,255,0.5)]"
                              />
                           </svg>
                           <div className="text-center">
                              <span className="block text-4xl font-black text-white">99</span>
                              <span className="text-xs text-gray-500 font-bold uppercase">Score</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Card 2: Security (Square) */}
               <div className="group relative bg-navy-800/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-emerald-500/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 h-full flex flex-col">
                     <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                        <Shield className="w-6 h-6 text-emerald-400" />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                     <p className="text-gray-400 text-sm mb-6 flex-grow">
                        Bank-grade encryption and automated threat detection to keep your data safe.
                     </p>
                     <div className="mt-auto flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-2 rounded-lg border border-emerald-500/20 w-max">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        System Secure
                     </div>
                  </div>
               </div>

               {/* Card 3: Design (Square) */}
               <div className="group relative bg-navy-800/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-purple-500/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 h-full flex flex-col">
                     <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                        <Layout className="w-6 h-6 text-purple-400" />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2">Award Winning UX</h3>
                     <p className="text-gray-400 text-sm flex-grow">
                        Interfaces so intuitive, your grandmother could use them. Designed to convert.
                     </p>
                     {/* Micro Visual */}
                     <div className="mt-6 flex gap-2">
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                           <div className="h-full w-3/4 bg-purple-400 rounded-full"></div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Card 4: Tech Stack (Large - Spans 2 cols) */}
               <div className="md:col-span-2 group relative bg-navy-800/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-blue-500/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center h-full">

                     {/* Visual: Code Snippet */}
                     <div className="w-full md:w-1/2 bg-navy-950 rounded-xl border border-white/10 p-4 font-mono text-xs text-gray-400 shadow-xl group-hover:-translate-y-1 transition-transform duration-500">
                        <div className="flex gap-1.5 mb-3">
                           <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                        </div>
                        <p><span className="text-purple-400">const</span> <span className="text-blue-400">stack</span> = [</p>
                        <p className="pl-4 text-green-400">"React", "Next.js", "TypeScript"</p>
                        <p className="pl-4 text-green-400">"Tailwind", "Node.js", "Three.js"</p>
                        <p>];</p>
                        <p className="mt-2"><span className="text-purple-400">const</span> <span className="text-blue-400">cms</span> = [</p>
                        <p className="pl-4 text-cyan-400">"WordPress", "Shopify", "Webflow"</p>
                        <p className="pl-4 text-cyan-400">"Wix", "Framer", "WooCommerce"</p>
                        <p>];</p>
                     </div>

                     <div className="flex-1 space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-2">
                           <Cpu className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Modern Tech Stack</h3>
                        <p className="text-gray-400">
                           We don't use outdated templates. We build with the same scalable technologies used by Netflix, Uber, and Airbnb.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Card 5: Communication (Square - Tall on mobile) */}
               <div className="md:col-span-1 group relative bg-navy-800/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-orange-500/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 h-full flex flex-col">
                     <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                        <MessageSquare className="w-6 h-6 text-orange-400" />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2">Direct Access</h3>
                     <p className="text-gray-400 text-sm mb-4">
                        No account managers playing "telephone". You get a direct Slack channel with your design & dev team.
                     </p>
                     <div className="mt-auto flex -space-x-2">
                        {[1, 2, 3].map(i => (
                           <div key={i} className="w-8 h-8 rounded-full border-2 border-navy-800 bg-gray-600"></div>
                        ))}
                        <div className="w-8 h-8 rounded-full border-2 border-navy-800 bg-navy-700 flex items-center justify-center text-[10px] text-white font-bold">
                           +4
                        </div>
                     </div>
                  </div>
               </div>

               {/* Card 6: ROI (Wide - Spans 2 cols on desktop) */}
               <div className="md:col-span-2 group relative bg-navy-800/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-teal-500/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 h-full">
                     <div className="flex-1">
                        <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4">
                           <TrendingUp className="w-6 h-6 text-teal-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">ROI Focused</h3>
                        <p className="text-gray-400">
                           We don't care about "pretty". We care about profit. Every pixel is placed with the intention to convert.
                        </p>
                     </div>
                     <div className="flex items-center gap-4 bg-navy-950/50 rounded-2xl p-4 border border-white/5">
                        <div className="text-right">
                           <p className="text-xs text-gray-500 uppercase">Avg. Lift</p>
                           <p className="text-2xl font-black text-teal-400">+154%</p>
                        </div>
                        <div className="h-10 w-px bg-white/10"></div>
                        <div className="text-left">
                           <p className="text-xs text-gray-500 uppercase">Conversion</p>
                           <p className="text-2xl font-black text-white">3.8x</p>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};

export default WhyChooseUs;