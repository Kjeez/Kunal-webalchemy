import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import AboutMe from '@/components/home/AboutMe';
import Problems from '@/components/home/Problems';
import { HowItWorks } from '@/components/home/StartHere';
import { Services, Work, WhyUs } from '@/components/home/Work';
import Toolbox from '@/components/home/Toolbox';
import { Bands, Testimonials } from '@/components/home/Social';
import { ContactSection, HomeFaq } from '@/components/home/Closing';
import Surprise from '@/components/home/Surprise';

// Title/description come from the root layout.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

/** Kunal's portfolio homepage. Header, footer and floating contact come from the (site) layout. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Problems />
      <Work />
      <Services />
      <Toolbox />
      <HowItWorks />
      <WhyUs />
      <Bands />
      <Testimonials />
      <HomeFaq />
      <ContactSection />
      <Surprise />
    </>
  );
}
