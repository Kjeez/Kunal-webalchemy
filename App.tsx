import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ServicesPage from './components/ServicesPage';
import BlogPage from './components/BlogPage';
import BlogPostPage from './components/BlogPostPage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';
import LocationLandingPage from './components/LocationLandingPage';
import WebDevDelhiNCRPage from './components/WebDevDelhiNCRPage';
import EcommerceDevPage from './components/EcommerceDevPage';
import WordpressDevPage from './components/WordpressDevPage';
import Footer from './components/Footer';
import PromoPopup from './components/PromoPopup';
import { BackgroundBeams } from './components/Visuals';
import ScrollProgress from './components/ScrollProgress';

// Scroll to top component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-navy-900 text-white relative overflow-x-hidden selection:bg-cyan-400/30 selection:text-cyan-100">
        <ScrollProgress />
        <BackgroundBeams />
        <PromoPopup />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/web-development" element={<ServicesPage category="web" />} />
              <Route path="/services/digital-marketing" element={<ServicesPage category="marketing" />} />
              <Route path="/services/design-branding" element={<ServicesPage category="design" />} />
              <Route path="/services/content-strategy" element={<ServicesPage category="content" />} />
              <Route path="/services/app-development" element={<ServicesPage category="app" />} />
              <Route path="/services/pr-advertising" element={<ServicesPage category="pr" />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPostPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/website-developer-delhi" element={<LocationLandingPage city="Delhi" />} />
              <Route path="/website-developer-gurgaon" element={<LocationLandingPage city="Gurgaon" />} />
              <Route path="/website-developer-noida" element={<LocationLandingPage city="Noida" />} />
              <Route path="/web-development-company-delhi-ncr" element={<WebDevDelhiNCRPage />} />
              <Route path="/ecommerce-website-development" element={<EcommerceDevPage />} />
              <Route path="/wordpress-development" element={<WordpressDevPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;