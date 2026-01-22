import React from 'react';
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

const Home: React.FC = () => {
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
      <Pricing />
      <FAQ />
      <Contact />
      <Blogs />
    </>
  );
};

export default Home;