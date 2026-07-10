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
import WebsiteDeveloperDelhiPage from './components/WebsiteDeveloperDelhiPage';
import WebDevDelhiNCRPage from './components/WebDevDelhiNCRPage';
import EcommerceDevPage from './components/EcommerceDevPage';
import WordpressDevPage from './components/WordpressDevPage';
import StarterOfferPage from './components/StarterOfferPage';
import ThankYouPage from './components/ThankYouPage';
import Footer from './components/Footer';
import PromoPopup from './components/PromoPopup';
import { BackgroundBeams } from './components/Visuals';
import useCanonical from './components/useCanonical';
import LocalBusinessSchema from './components/LocalBusinessSchema';
import ScrollProgress from './components/ScrollProgress';

// Scroll to top component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Layout wrapper to conditionally hide elements for landing pages
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  // Landing pages that should be distraction-free (no navbar/footer/popup)
  // Set to false for /starter-offer to use homepage navbar
  const isLandingPage = false; // pathname === '/starter-offer';

  const phoneNumber = "917838583051";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in your web development services. Please share more details.");

  // Set self-referencing canonical URL on every route change
  useCanonical();

  return (
    <>
      <LocalBusinessSchema />
      <ScrollProgress />
      <BackgroundBeams />
      {!isLandingPage && <PromoPopup />}

      <div className="relative z-10 flex flex-col min-h-screen">
        {!isLandingPage && <Navbar />}
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        {!isLandingPage && <Footer />}
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-7 h-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>
      </a>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-navy-900 text-white relative overflow-x-hidden selection:bg-cyan-400/30 selection:text-cyan-100">
        <Layout>
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
            <Route path="/website-developer-delhi" element={<WebsiteDeveloperDelhiPage />} />
            <Route path="/website-developer-gurgaon" element={<LocationLandingPage city="Gurgaon" />} />
            <Route path="/website-developer-noida" element={<LocationLandingPage city="Noida" />} />
            <Route path="/web-development-company-delhi-ncr" element={<WebDevDelhiNCRPage />} />
            <Route path="/ecommerce-website-development" element={<EcommerceDevPage />} />
            <Route path="/wordpress-development" element={<WordpressDevPage />} />
            <Route path="/starter-offer" element={<StarterOfferPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
};

export default App;