import React, { useState } from 'react';
import Hero from './Hero';
import AboutSection from './AboutSection';
import PainPoints from './PainPoints';
import Services from './Services';
import Portfolio from './Portfolio';
import WhyChooseUs from './WhyChooseUs';
import TechStackScroll from './TechStackScroll';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Contact from './Contact';
import Blogs from './Blogs';
import ServiceFormPopup from './ServiceFormPopup';

const Home: React.FC = () => {
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setShowServiceForm(true);
  };

  return (
    <>
      <Hero />
      <AboutSection />
      <PainPoints />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <TechStackScroll />
      <Testimonials />
      <Pricing onSelectPlan={handleSelectPlan} />
      <FAQ />
      <Contact />
      <Blogs />

      <ServiceFormPopup
        isOpen={showServiceForm}
        onClose={() => setShowServiceForm(false)}
        serviceName={selectedPlan}
        subServiceName=""
      />
    </>
  );
};

export default Home;