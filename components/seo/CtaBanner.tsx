'use client';

import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface CtaBannerProps {
  heading: string;
  sub: string;
  /**
   * WhatsApp number in international format WITHOUT '+' or spaces.
   * E.g. "919625429686" for +91 96254 29686
   */
  whatsappNumber: string;
  /**
   * Phone number used for the tel: link.
   * E.g. "+917838583051"
   */
  phone: string;
  /**
   * Pre-filled WhatsApp message text.
   * Defaults to a standard enquiry message.
   */
  whatsappMessage?: string;
  /** Label shown on the WhatsApp CTA button */
  whatsappLabel?: string;
  /** Label shown on the call CTA button */
  callLabel?: string;
  id?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const CtaBanner: React.FC<CtaBannerProps> = ({
  heading,
  sub,
  whatsappNumber,
  phone,
  whatsappMessage = "Hi! I'm interested in your web development services. Please share more details.",
  whatsappLabel = 'Chat on WhatsApp',
  callLabel = 'Call Now',
  id = 'cta-banner',
}) => {
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const telHref = `tel:${phone.replace(/\s/g, '')}`;

  return (
    <section
      id={id}
      className="relative w-full py-16 sm:py-20"
      aria-labelledby={`${id}-heading`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Gradient background */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-navy-800/60 to-blue-900/40 border border-white/10"
          />

          {/* Decorative glow blobs */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
          </div>

          {/* Shimmer line */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent"
          />

          <div className="relative z-10 px-8 py-14 sm:px-14 text-center">
            {/* Heading */}
            <h2
              id={`${id}-heading`}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
            >
              {heading}
            </h2>

            {/* Sub text */}
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              {sub}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* WhatsApp CTA — deep link */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 text-white font-bold text-base shadow-lg shadow-green-900/30 hover:shadow-green-500/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto"
                aria-label={`${whatsappLabel} — opens WhatsApp`}
              >
                <MessageCircle size={20} strokeWidth={2} />
                {whatsappLabel}
                <ArrowRight
                  size={16}
                  className="opacity-70 group-hover:translate-x-0.5 transition-transform"
                />
              </a>

              {/* Phone CTA — tel: link */}
              <a
                href={telHref}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                aria-label={`${callLabel} — ${phone}`}
              >
                <Phone size={18} strokeWidth={2} />
                <span>{callLabel}</span>
                <span className="text-gray-400 text-sm font-normal ml-1">{phone}</span>
              </a>
            </div>

            {/* Trust signals */}
            <p className="mt-8 text-gray-500 text-xs tracking-wider">
              Free consultation · No obligation · Response within 30 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
