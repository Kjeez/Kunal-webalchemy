'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import ServiceFormPopup from './ServiceFormPopup';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showEstimateForm, setShowEstimateForm] = useState(false);

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "A standard high-conversion landing page typically takes 2-3 weeks. A full 5-10 page corporate website usually takes 4-6 weeks. Complex web applications with custom backends can take 2-3 months. We provide a detailed timeline during our initial strategy call."
    },
    {
      question: "Do you offer hosting and maintenance?",
      answer: "Yes, we offer premium managed hosting on high-performance cloud servers. Our maintenance packages include daily backups, security updates, uptime monitoring, and content updates so you never have to worry about your site going down."
    },
    {
      question: "Will I be able to update the website myself?",
      answer: "Absolutely. We build most of our sites using user-friendly CMS platforms (like Webflow or Next.js with Sanity/Strapi). We provide a training session and video tutorials upon handover so your marketing team can easily change text, images, and blog posts."
    },
    {
      question: "What is your payment structure?",
      answer: "We typically require a 50% deposit to secure your slot in our production schedule. The remaining 50% is due upon project completion and launch. For larger enterprise projects, we can discuss milestone-based payments."
    },
    {
      question: "Do you handle SEO and content writing?",
      answer: "All our builds include technical SEO (site structure, speed, meta tags) by default. For copywriting and ongoing content strategy/blogging, we have an add-on service or we can work with your existing content team."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section id="faq" className="relative w-full py-24 bg-navy-950 z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-12 h-12 mx-auto bg-navy-800 rounded-xl flex items-center justify-center mb-4 border border-white/5 shadow-inner">
              <HelpCircle className="text-cyan-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400">
              Everything you need to know about working with WebAlchemy.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden
                  ${openIndex === index
                    ? 'bg-navy-800/50 border-cyan-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.2)]'
                    : 'bg-navy-900/30 border-white/5 hover:border-white/10'
                  }
                `}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-semibold text-lg transition-colors ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-cyan-500 text-navy-900 rotate-180' : 'bg-white/5 text-gray-400'}`}>
                    {openIndex === index ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center p-8 rounded-3xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-white/5">
            <p className="text-gray-300 mb-4">Still have questions?</p>
            <button
              onClick={() => setShowEstimateForm(true)}
              className="px-6 py-3 rounded-xl bg-white text-navy-900 font-bold hover:bg-gray-100 transition-colors"
            >
              Chat with an Expert
            </button>
          </div>

        </div>
      </section>

      {/* Estimate Form Popup - Outside section for proper z-index */}
      <ServiceFormPopup
        isOpen={showEstimateForm}
        onClose={() => setShowEstimateForm(false)}
        serviceName="Expert Consultation"
        subServiceName=""
      />
    </>
  );
};

export default FAQ;