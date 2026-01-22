import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { BackgroundBeams } from './Visuals';

const BlogPostPage: React.FC = () => {
  const { id } = useParams();

  // SEO-Rich Content Data
  const blogPosts: any = {
    1: {
      title: "The Psychology of Color in Web Design: How to Increase Conversions",
      date: "Mar 15, 2024",
      author: "Alex Morgan",
      readTime: "12 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200",
      content: `
        <h2 class="text-3xl font-bold text-white mb-6">Introduction to Color Psychology</h2>
        <p class="text-gray-300 text-lg mb-8 leading-relaxed">
          In the digital landscape, color is not merely a decoration—it is a powerful communication tool that influences perception, emotion, and behavior. Understanding the psychology of color in web design is crucial for creating user experiences that not only look aesthetically pleasing but also drive specific actions. Whether it's the trustworthiness of blue or the urgency of red, every hue you choose tells a story to your users' subconscious minds.
        </p>

        <h2 class="text-3xl font-bold text-white mb-6">Why Color Matters</h2>
        <p class="text-gray-300 text-lg mb-8 leading-relaxed">
          Research shows that users form an opinion about a website within 50 milliseconds, and color accounts for up to 90% of that initial assessment. Color can aid brand recognition by up to 80%. When used strategically, it guides the user's eye, establishes hierarchy, and significantly impacts conversion rates (CRO).
        </p>

        <h3 class="text-2xl font-bold text-cyan-400 mb-4">The Emotional Spectrum</h3>
        <ul class="list-disc pl-6 text-gray-300 space-y-4 mb-8">
          <li><strong>Blue:</strong> Trust, security, and stability (e.g., PayPal, Facebook, Banks).</li>
          <li><strong>Red:</strong> Urgency, excitement, and passion (e.g., Netflix, Clearance Sales).</li>
          <li><strong>Green:</strong> Growth, health, and money (e.g., Whole Foods, Android).</li>
          <li><strong>Black:</strong> Luxury, sophistication, and power (e.g., Apple, Luxury Brands).</li>
        </ul>

        <h2 class="text-3xl font-bold text-white mb-6">Designing for Conversion</h2>
        <p class="text-gray-300 text-lg mb-8 leading-relaxed">
          To optimize for conversions, use the "Isolation Effect" (Von Restorff Effect). This principle states that items that stand out from their surroundings are more likely to be remembered. For a CTA button to be effective, its color must contrast sharply with the background and surrounding elements.
        </p>
      `
    },
    2: {
      title: "Why Speed is the New SEO King: Core Web Vitals Guide 2024",
      date: "Mar 10, 2024",
      author: "Sarah Jenkins",
      readTime: "15 min read",
      category: "Technical",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      content: `
        <h2 class="text-3xl font-bold text-white mb-6">The Need for Speed</h2>
        <p class="text-gray-300 text-lg mb-8 leading-relaxed">
          In 2024, page speed is no longer just a technical metric—it is a fundamental component of User Experience (UX) and a critical ranking factor for Google. With the introduction of Core Web Vitals, Google has made it clear: if your site is slow, you will lose traffic.
        </p>

        <h2 class="text-3xl font-bold text-white mb-6">Understanding Core Web Vitals</h2>
        <p class="text-gray-300 text-lg mb-8 leading-relaxed">
          Core Web Vitals are a set of metrics that measure real-world user experience for loading performance, interactivity, and visual stability.
        </p>

        <h3 class="text-2xl font-bold text-cyan-400 mb-4">The Three Pillars</h3>
        <ul class="list-disc pl-6 text-gray-300 space-y-4 mb-8">
          <li><strong>LCP (Largest Contentful Paint):</strong> Measures loading performance. Ideal score: < 2.5s.</li>
          <li><strong>INP (Interaction to Next Paint):</strong> Measures responsiveness. Ideal score: < 200ms.</li>
          <li><strong>CLS (Cumulative Layout Shift):</strong> Measures visual stability. Ideal score: < 0.1.</li>
        </ul>

         <h2 class="text-3xl font-bold text-white mb-6">Optimization Strategies</h2>
        <p class="text-gray-300 text-lg mb-8 leading-relaxed">
          To achieve a perfect 100/100 Lighthouse score, focus on minimizing main-thread work, deferring offscreen images, eliminating render-blocking resources, and using modern formats like WebP and AVIF.
        </p>
      `
    },
    3: {
      title: "From Visitor to Customer: CRO Basics That Double Leads",
      date: "Mar 05, 2024",
      author: "Michael Chen",
      readTime: "10 min read",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      content: `
        <h2 class="text-3xl font-bold text-white mb-6">The Art of Conversion</h2>
        <p class="text-gray-300 text-lg mb-8 leading-relaxed">
          Traffic is vanity; conversion is sanity. Conversion Rate Optimization (CRO) is the systematic process of increasing the percentage of website visitors who take a desired action. It's not about guessing—it's about data-driven decisions.
        </p>
        
        <h2 class="text-3xl font-bold text-white mb-6">5 Quick Wins for CRO</h2>
        <p class="text-gray-300 text-lg mb-8 leading-relaxed">
          Implementing these changes can yield immediate results:
        </p>
        <ul class="list-disc pl-6 text-gray-300 space-y-4 mb-8">
            <li><strong>Clear Value Proposition:</strong> State clearly what you do and typically "above the fold."</li>
            <li><strong>Reduced Form Fields:</strong> Remove unnecessary fields. Each field removed can increase conversions by 10%.</li>
             <li><strong>Social Proof:</strong> Add testimonials, logos, and case studies to build trust.</li>
        </ul>
      `
    },
    4: {
      title: "The Future of AI in Digital Agencies: Adapt or Die",
      date: "Feb 28, 2024",
      author: "David Kim",
      readTime: "14 min read",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      content: `
        <h2 class="text-3xl font-bold text-white mb-6">The AI Revolution</h2>
        <p class="text-gray-300 text-lg mb-8 leading-relaxed">
          Artificial Intelligence is not coming; it is here. For digital agencies, AI represents the biggest paradigm shift since the mobile internet. From generative design to automated code writing, AI is touching every facet of the digital workflow.
        </p>

        <h2 class="text-3xl font-bold text-white mb-6">Enhancing Creativity, Not Replacing It</h2>
        <p class="text-gray-300 text-lg mb-8 leading-relaxed">
          The fear that AI will replace human creativity is misplaced. Instead, AI serves as a powerful amplifier. Tools like Midjourney and ChatGPT allow designers and copywriters to iterate faster, explore more concepts, and focus on high-level strategy rather than execution.
        </p>
      `
    },
    5: {
      title: "Mastering Tailwind CSS Grid: Complex Layouts Made Easy",
      date: "Feb 22, 2024",
      author: "Sarah Jenkins",
      readTime: "18 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1200",
      content: `
        <h2 class="text-3xl font-bold text-white mb-6">Why Grid Matters</h2>
        <p class="text-gray-300 text-lg mb-8 leading-relaxed">
          CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows, unlike Flexbox which is largely 1-dimensional. Tailwind CSS makes using Grid intuitive and rapid.
        </p>

        <h2 class="text-3xl font-bold text-white mb-6">Building a Bento Box Layout</h2>
        <p class="text-gray-300 text-lg mb-8 leading-relaxed">
          The "Bento" layout, popularized by Apple, features a grid of boxes of varying sizes. With Tailwind, this is achieved using \`grid-cols-4\`, \`col-span-2\`, and \`row-span-2\` utilities.
        </p>
      `
    },
    6: {
      title: "Brand Storytelling in 2024: Connecting with Gen Z",
      date: "Feb 15, 2024",
      author: "Alex Morgan",
      readTime: "9 min read",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
      content: `
        <h2 class="text-3xl font-bold text-white mb-6">The Death of Traditional Ads</h2>
        <p class="text-gray-300 text-lg mb-8 leading-relaxed">
           Gen Z has a sophisticated bullshit detector. Traditional, interruption-based advertising no longer works. To connect with this demographic, brands must pivot to authentic storytelling that aligns with values and culture.
        </p>
         <h2 class="text-3xl font-bold text-white mb-6">Authenticity is Key</h2>
        <p class="text-gray-300 text-lg mb-8 leading-relaxed">
           It's not about selling a product; it's about inviting the customer into a narrative. User Generated Content (UGC) and behind-the-scenes content perform exceptionally well because they feel unpolished and real.
        </p>
      `
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Post not found</h1>
        <Link to="/blog" className="ml-4 text-cyan-400 hover:underline">Go Back</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-900 pt-32 pb-20 relative overflow-hidden">



      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Back Link */}
        <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors mb-8 group">
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Articles
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm flex items-center gap-1">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex items-center justify-between border-y border-white/10 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-white font-medium">{post.author}</p>
                <p className="text-gray-500 text-sm">{post.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-cyan-400 transition-colors">
                <Share2 size={18} />
              </button>
              <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={18} />
              </button>
              <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-cyan-900/20 border border-white/5">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div
          className="prose prose-lg prose-invert max-w-none text-gray-300 [&>h2]:text-white [&>h3]:text-cyan-400 [&>strong]:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 border border-cyan-500/20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"></div>
          <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Ready to transform your digital presence?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
            Let's apply these strategies to your business. Get a free consultation today.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all relative z-10">
            Start Your Project
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BlogPostPage;
