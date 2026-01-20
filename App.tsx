import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ServicesPage from './components/ServicesPage';
import Footer from './components/Footer';
import PromoPopup from './components/PromoPopup';
import { BackgroundBeams } from './components/Visuals';
import ScrollProgress from './components/ScrollProgress';

const App: React.FC = () => {
  return (
    <Router>
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
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;