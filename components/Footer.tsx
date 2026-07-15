'use client';

import React from 'react';
import { Twitter, Linkedin, Instagram, Github, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#05081c] border-t border-white/5 pt-20 pb-10 text-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="font-bold text-xl text-white">WebAlchemy</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Crafting digital experiences that merge psychology with technology. We build websites that don't just look good—they sell.
            </p>
            <div className="flex items-center gap-4">
              <SocialIcon Icon={Twitter} href="#" />
              <SocialIcon Icon={Linkedin} href="#" />
              <SocialIcon Icon={Instagram} href="#" />
              <SocialIcon Icon={Github} href="#" />
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/services/web-development" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center relative group">
                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/design-branding" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center relative group">
                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center relative group">
                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/content-strategy" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center relative group">
                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  SEO & Content
                </Link>
              </li>
              <li>
                <Link to="/services/app-development" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center relative group">
                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  App Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center relative group">
                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center relative group">
                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center relative group">
                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center relative group">
                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center relative group">
                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Delhi NCR Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Web Development in Delhi NCR</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/website-developer-delhi" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center relative group">
                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Website Developer Delhi
                </Link>
              </li>
              <li>
                <Link to="/website-developer-gurgaon" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center relative group">
                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Website Developer Gurgaon
                </Link>
              </li>
              <li>
                <Link to="/website-developer-noida" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center relative group">
                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Website Developer Noida
                </Link>
              </li>
              <li>
                <Link to="/web-development-company-delhi-ncr" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center relative group">
                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Web Dev Company Delhi NCR
                </Link>
              </li>
              <li>
                <Link to="/wordpress-development" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center relative group">
                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  WordPress Development
                </Link>
              </li>
              <li>
                <Link to="/ecommerce-website-development" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center relative group">
                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  E-commerce Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest design trends and tech insights.</p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
              <button className="px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white font-medium hover:bg-cyan-500 hover:text-cyan-950 hover:border-cyan-500 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500">
            &copy; {currentYear} WebAlchemy Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Sitemap</a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="flex items-center justify-center gap-2 text-gray-600 text-xs">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> in India
          </p>
        </div>

      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ Icon: React.ElementType, href: string }> = ({ Icon, href }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-navy-900 transition-all duration-300"
  >
    <Icon size={18} />
  </a>
);

const FooterLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center relative group">
      <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      {children}
    </a>
  </li>
);

export default Footer;
