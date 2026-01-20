import React from 'react';
import { ArrowRight, Calendar, User, Clock, ArrowUpRight } from 'lucide-react';

const Blogs: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "The Psychology of Color in Web Design",
      excerpt: "How choosing the right color palette can increase your conversion rates by up to 24%.",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
      date: "Mar 15, 2024",
      author: "Alex Morgan",
      readTime: "5 min read",
      category: "Design",
      color: "text-purple-400",
      tagBg: "bg-purple-400/10 border-purple-400/20"
    },
    {
      id: 2,
      title: "Why Speed is the New SEO King",
      excerpt: "Google's Core Web Vitals update changed everything. Here is how to optimize for 100/100 scores.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      date: "Mar 10, 2024",
      author: "Sarah Jenkins",
      readTime: "8 min read",
      category: "Technical",
      color: "text-cyan-400",
      tagBg: "bg-cyan-400/10 border-cyan-400/20"
    },
    {
      id: 3,
      title: "From Visitor to Customer: CRO Basics",
      excerpt: "5 actionable tweaks you can make to your landing page today to double your leads.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      date: "Mar 05, 2024",
      author: "Michael Chen",
      readTime: "6 min read",
      category: "Marketing",
      color: "text-emerald-400",
      tagBg: "bg-emerald-400/10 border-emerald-400/20"
    }
  ];

  return (
    <section id="blog" className="relative w-full py-24 bg-navy-950 border-t border-white/5 z-10 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
               <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">Knowledge Base</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Insights</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Strategies, case studies, and technical deep-dives to keep you ahead of the curve.
            </p>
          </div>
          <button className="group px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 text-white font-medium flex items-center gap-2 transition-all duration-300">
             View All Articles 
             <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
               key={post.id} 
               className="group relative flex flex-col h-full bg-navy-900 border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,0,0,0.3)] hover:-translate-y-2"
            >
               {/* Image Container */}
               <div className="relative h-64 overflow-hidden">
                  {/* Category Tag */}
                  <div className={`absolute top-4 left-4 z-20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border ${post.tagBg} ${post.color}`}>
                     {post.category}
                  </div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent z-10 opacity-80"></div>
                  
                  {/* Image */}
                  <img 
                     src={post.image} 
                     alt={post.title} 
                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
               </div>

               {/* Content */}
               <div className="flex-1 p-8 pt-2 flex flex-col relative z-20 bg-navy-900">
                  
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-4 border-b border-white/5 pb-4">
                     <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                     <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-cyan-400 transition-colors duration-300">
                     {post.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                     {post.excerpt}
                  </p>

                  {/* Author & Read More */}
                  <div className="mt-auto pt-4 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
                           <User size={14} className="text-gray-300" />
                        </div>
                        <span className="text-xs text-gray-300 font-medium">{post.author}</span>
                     </div>
                     
                     <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-navy-900 transition-all duration-300">
                        <ArrowUpRight size={16} className="transform group-hover:rotate-45 transition-transform duration-300" />
                     </div>
                  </div>
               </div>
               
               {/* Hover Glow */}
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyan-500/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blogs;