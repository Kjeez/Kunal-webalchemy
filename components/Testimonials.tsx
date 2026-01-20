import React from 'react';
import { Star, Quote, TrendingUp, Activity, DollarSign, ArrowRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  // Limited to exactly 3 testimonials as requested
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CMO",
      company: "TechFlow Systems",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      content: "WebAlchemy didn't just build a website; they built a sales engine. Our lead quality improved overnight, and the design perfectly captures our brand's future vision.",
      metric: "+240%",
      metricLabel: "Inbound Leads",
      metricIcon: TrendingUp,
      color: "text-green-400",
      bgColor: "bg-green-400/10"
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "Nexus AI",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
      content: "The level of technical detail is unmatched. They handled our complex 3D WebGL integrations seamlessly. Truly a partner, not just a vendor.",
      metric: "99/100",
      metricLabel: "Performance Score",
      metricIcon: Activity,
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10"
    },
    {
      name: "Elena Rodriguez",
      role: "Director of Sales",
      company: "Global Logistics",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
      content: "We were losing customers to mobile usability issues. The new responsive platform WebAlchemy launched helped us recover significant market share in Q4.",
      metric: "$2.1M",
      metricLabel: "Revenue Added",
      metricIcon: DollarSign,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10"
    }
  ];

  return (
    <section className="relative w-full py-24 bg-navy-950 z-10 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900 to-transparent opacity-50"></div>
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute left-0 bottom-1/3 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-gray-300 text-xs font-bold uppercase tracking-widest border-l border-white/10 pl-2 ml-1">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Don't Just Take <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Our Word For It
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            We partner with ambitious brands to create digital experiences that deliver measurable business results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col bg-navy-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-500">
                <Quote size={80} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow relative z-10">
                "{testimonial.content}"
              </blockquote>

              {/* Author & Metric Footer */}
              <div className="flex items-end justify-between mt-auto relative z-10 pt-6 border-t border-white/5">
                
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{testimonial.name}</div>
                    <div className="text-cyan-400/70 text-xs">{testimonial.company}</div>
                  </div>
                </div>

                {/* Metric Badge */}
                <div className={`flex flex-col items-end ${testimonial.color}`}>
                  <div className={`flex items-center gap-1.5 px-2 py-1 rounded-md ${testimonial.bgColor} border border-current/20 mb-1`}>
                    <testimonial.metricIcon size={12} strokeWidth={3} />
                    <span className="text-xs font-bold">{testimonial.metric}</span>
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{testimonial.metricLabel}</span>
                </div>

              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-16 text-center">
            <button className="group relative px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                    View More Reviews
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
            </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;