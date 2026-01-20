import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollHeight > 0) {
        setScrollProgress((currentScroll / scrollHeight) * 100);
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    // Initial call to set state correctly on mount
    updateScrollProgress();
    
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-navy-900/0 pointer-events-none">
      {/* Optional faint track background */}
      <div className="absolute inset-0 bg-white/5 opacity-0 sm:opacity-100 transition-opacity"></div>
      
      {/* Progress Fill */}
      <div 
        className="h-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(45,212,191,0.6)] relative"
        style={{ 
          width: `${scrollProgress}%`,
          transition: 'width 0.1s ease-out'
        }}
      >
        {/* Leading glow effect at the tip of the progress bar */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-white rounded-full blur-[2px] shadow-[0_0_10px_white]"></div>
      </div>
    </div>
  );
};

export default ScrollProgress;