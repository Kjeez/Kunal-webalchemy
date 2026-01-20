import React from 'react';
import Hero from './Hero';
import PainPoints from './PainPoints';
import Stats from './Stats';
import Services from './Services';
import Portfolio from './Portfolio';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Contact from './Contact';
import Blogs from './Blogs';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <PainPoints />
      <Services />
      <Portfolio />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Blogs />
    </>
  );
};

export default Home;