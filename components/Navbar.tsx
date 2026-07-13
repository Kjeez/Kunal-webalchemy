import React, { useState } from 'react';
import { Menu, X, Rocket, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ServiceFormPopup from './ServiceFormPopup';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [openMobileSubCategory, setOpenMobileSubCategory] = useState<string | null>(null);
  const [showEstimatePopup, setShowEstimatePopup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems: { name: string; path?: string; type: 'link' | 'scroll'; id?: string }[] = [
    { name: 'Services', path: '/services', type: 'link' },
    { name: 'Blog', path: '/blog', type: 'link' },
    { name: 'Portfolio', path: '/portfolio', type: 'link' },
    { name: 'Contact', path: '/contact', type: 'link' },
  ];

  const megaMenuData = {
    col1: [
      {
        title: "Web Development",
        color: "text-cyan-400",
        categoryId: "web",
        items: ['One Page Website', 'Landing Page', 'Business Website', 'Product Showcase', 'E-commerce', 'Agency Website', 'WordPress', 'Shopify', 'Webflow', 'Wix', 'Framer', 'WooCommerce']
      },
      {
        title: "App Development",
        color: "text-blue-400",
        categoryId: "app",
        items: ['iOS Development', 'Android Development', 'Native Development']
      }
    ],
    col2: [
      {
        title: "Marketing",
        color: "text-purple-400",
        categoryId: "marketing",
        items: ['Google Ads', 'SEO', 'Google Shopping Ads', 'Facebook Ads', 'Instagram Ads', 'Display Advertising', 'Google Mobile Ads', 'Influencer Marketing', 'Remarketing Ads']
      }
    ],
    col3: [
      {
        title: "Design",
        color: "text-pink-400",
        categoryId: "design",
        items: ['UI/UX Design', 'Branding', 'Catalogue', 'Logos', 'Banners', 'Social Media Posts', 'Video Editing', 'Animations', '3D Modeling']
      },
      {
        title: "Content",
        color: "text-emerald-400",
        categoryId: "content",
        items: ['Content Writing', 'Blog Writing', 'Data Entry']
      }
    ],
    col4: [
      {
        title: "PR & Advertising",
        color: "text-orange-400",
        categoryId: "pr",
        items: ['Radio Advertising', 'TV Advertising', 'Outdoor Advertising', 'Metro Advertising', 'Auto & Bus Ads', 'Bus Shelter Ads', 'Newspaper Ads', 'Airlines Ads', 'Cinema Ads', 'OTT Advertising', 'Railway Ads', 'Airport Ads']
      }
    ]
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6">
      <div className="glass-panel rounded-full px-6 py-3 sm:px-8 sm:py-3 flex items-center justify-between w-full max-w-7xl shadow-2xl shadow-cyan-900/10 transition-all duration-300 relative">

        {/* Logo */}
        <div
          onClick={() => {
            if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
            else navigate('/');
          }}
          className="flex items-center gap-2 group cursor-pointer z-50"
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg transform group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-bold text-lg sm:text-xl">W</span>
          </div>
          <span className="font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            WebAlchemy
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.name === 'Services' ? (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
              >
                <Link
                  to={item.path!}
                  className={`text-sm font-medium transition-all duration-300 flex items-center gap-1 py-4 ${location.pathname === item.path ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
                >
                  {item.name}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesHovered ? 'rotate-180 text-cyan-400' : ''}`} />
                </Link>

                {/* Mega Menu Dropdown */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[900px] bg-[#0a0e27]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 p-8 grid grid-cols-4 gap-8 transition-all duration-300 origin-top z-[60] cursor-default
                    ${isServicesHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4 pointer-events-none'}
                  `}
                >
                  {/* Column 1 */}
                  <div className="space-y-6">
                    {megaMenuData.col1.map((section, idx) => (
                      <div key={idx}>
                        <h4 className={`${section.color} font-bold mb-3 uppercase text-xs tracking-wider border-b border-white/10 pb-2`}>{section.title}</h4>
                        <ul className="space-y-2">
                          {section.items.map(sub => (
                            <li key={sub}>
                              <Link to={`/services/${({web:'web-development',marketing:'digital-marketing',design:'design-branding',content:'content-strategy',app:'app-development',pr:'pr-advertising'} as Record<string,string>)[section.categoryId]}`} className="text-gray-400 text-sm hover:text-white transition-colors block hover:translate-x-1 duration-200 outline-none focus:outline-none" onClick={() => setIsServicesHovered(false)}>
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-6">
                    {megaMenuData.col2.map((section, idx) => (
                      <div key={idx}>
                        <h4 className={`${section.color} font-bold mb-3 uppercase text-xs tracking-wider border-b border-white/10 pb-2`}>{section.title}</h4>
                        <ul className="space-y-2">
                          {section.items.map(sub => (
                            <li key={sub}>
                              <Link to={`/services/${({web:'web-development',marketing:'digital-marketing',design:'design-branding',content:'content-strategy',app:'app-development',pr:'pr-advertising'} as Record<string,string>)[section.categoryId]}`} className="text-gray-400 text-sm hover:text-white transition-colors block hover:translate-x-1 duration-200 outline-none focus:outline-none" onClick={() => setIsServicesHovered(false)}>
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Column 3 */}
                  <div className="space-y-6">
                    {megaMenuData.col3.map((section, idx) => (
                      <div key={idx}>
                        <h4 className={`${section.color} font-bold mb-3 uppercase text-xs tracking-wider border-b border-white/10 pb-2`}>{section.title}</h4>
                        <ul className="space-y-2">
                          {section.items.map(sub => (
                            <li key={sub}>
                              <Link to={`/services/${({web:'web-development',marketing:'digital-marketing',design:'design-branding',content:'content-strategy',app:'app-development',pr:'pr-advertising'} as Record<string,string>)[section.categoryId]}`} className="text-gray-400 text-sm hover:text-white transition-colors block hover:translate-x-1 duration-200 outline-none focus:outline-none" onClick={() => setIsServicesHovered(false)}>
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Column 4 */}
                  <div className="space-y-6">
                    {megaMenuData.col4.map((section, idx) => (
                      <div key={idx}>
                        <h4 className={`${section.color} font-bold mb-3 uppercase text-xs tracking-wider border-b border-white/10 pb-2`}>{section.title}</h4>
                        <ul className="space-y-2">
                          {section.items.map(sub => (
                            <li key={sub}>
                              <Link to={`/services/${({web:'web-development',marketing:'digital-marketing',design:'design-branding',content:'content-strategy',app:'app-development',pr:'pr-advertising'} as Record<string,string>)[section.categoryId]}`} className="text-gray-400 text-sm hover:text-white transition-colors block hover:translate-x-1 duration-200 outline-none focus:outline-none" onClick={() => setIsServicesHovered(false)}>
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : item.type === 'link' ? (
              <Link
                key={item.name}
                to={item.path!}
                className={`text-sm font-medium transition-all duration-300 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 ${location.pathname === item.path ? 'text-cyan-400' : 'text-gray-300 hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.5)]'}`}
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => handleScroll(item.id!)}
                className="text-sm font-medium text-gray-300 hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
              >
                {item.name}
              </button>
            )
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => setShowEstimatePopup(true)}
            className="group relative px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-navy-900 font-bold text-sm hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Get Free Estimate
              <Rocket className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-24 left-4 right-4 glass-card rounded-2xl p-6 flex flex-col gap-4 md:hidden animate-fade-in-down origin-top z-50">
          {navItems.map((item) => (
            item.name === 'Services' ? (
              <div key={item.name} className="flex flex-col border-b border-white/5">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between text-lg font-medium text-gray-200 py-2 hover:text-cyan-400 transition-all text-left w-full"
                >
                  {item.name}
                  <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-3 py-2 flex flex-col gap-2 mb-2 animate-fade-in-down border-l-2 border-cyan-500/20 ml-1 overflow-y-auto max-h-[50vh]">
                    {[...megaMenuData.col1, ...megaMenuData.col2, ...megaMenuData.col3, ...megaMenuData.col4].map((section, idx) => (
                      <div key={idx} className="flex flex-col border-b border-white/5 last:border-0 pb-1">
                        <button
                          onClick={() => setOpenMobileSubCategory(openMobileSubCategory === section.title ? null : section.title)}
                          className="flex items-center justify-between w-full py-2 text-left outline-none focus:outline-none"
                        >
                          <span className={`${section.color} font-bold text-sm uppercase tracking-wider`}>{section.title}</span>
                          <ChevronDown size={16} className={`${section.color} transition-transform duration-300 ${openMobileSubCategory === section.title ? 'rotate-180' : ''}`} />
                        </button>
                        {openMobileSubCategory === section.title && (
                          <div className="flex flex-col gap-3 pl-3 py-2 animate-fade-in-down">
                            {section.items.map(sub => (
                              <Link
                                key={sub}
                                to={`/services/${({web:'web-development',marketing:'digital-marketing',design:'design-branding',content:'content-strategy',app:'app-development',pr:'pr-advertising'} as Record<string,string>)[section.categoryId]}`}
                                className="text-base text-gray-300 hover:text-white transition-all py-1"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {sub}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : item.type === 'link' ? (
              <Link
                key={item.name}
                to={item.path!}
                className="text-lg font-medium text-gray-200 py-2 border-b border-white/5 hover:text-cyan-400 hover:pl-2 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => handleScroll(item.id!)}
                className="text-lg font-medium text-gray-200 py-2 border-b border-white/5 hover:text-cyan-400 hover:pl-2 transition-all text-left"
              >
                {item.name}
              </button>
            )
          ))}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              setShowEstimatePopup(true);
            }}
            className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-navy-900 font-bold hover:opacity-90 transition-opacity"
          >
            Get Free Estimate
          </button>
        </div>
      )}

      {/* Estimate Form Popup */}
      <ServiceFormPopup
        isOpen={showEstimatePopup}
        onClose={() => setShowEstimatePopup(false)}
        serviceName=""
        subServiceName=""
      />
    </nav>
  );
};

export default Navbar;