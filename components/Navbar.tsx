import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const navItems = [
    { name: 'Results', id: 'results', type: 'scroll' },
    { name: 'Services', path: '/services', type: 'link' },
    { name: 'Process', id: 'process', type: 'scroll' },
    { name: 'Contact', id: 'contact', type: 'scroll' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6">
      <div className="glass-panel rounded-full px-6 py-3 sm:px-8 sm:py-4 flex items-center justify-between w-full max-w-6xl shadow-2xl shadow-cyan-900/10 transition-all duration-300">
        
        {/* Logo */}
        <div 
          onClick={() => {
            if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
            else navigate('/');
          }}
          className="flex items-center gap-2 group cursor-pointer"
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
            item.type === 'link' ? (
              <Link 
                key={item.name}
                to={item.path!}
                className={`text-sm font-medium transition-all duration-300 ${location.pathname === item.path ? 'text-cyan-400' : 'text-gray-300 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'}`}
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name} 
                onClick={() => handleScroll(item.id!)}
                className="text-sm font-medium text-gray-300 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                {item.name}
              </button>
            )
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button 
            onClick={() => handleScroll('contact')}
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
             item.type === 'link' ? (
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
            onClick={() => handleScroll('contact')}
            className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-navy-900 font-bold hover:opacity-90 transition-opacity"
          >
            Get Free Estimate
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;