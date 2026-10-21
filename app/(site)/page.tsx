import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import Problems from '@/components/home/Problems';
import { HowItWorks, StartHere } from '@/components/home/StartHere';
import { Services, Work, WhyUs } from '@/components/home/Work';
import { Bands, Testimonials } from '@/components/home/Social';
import Pricing from '@/components/home/Pricing';
import { ContactSection, HomeFaq, Insights } from '@/components/home/Closing';

// Title/description come from the root layout (unchanged from the old homepage).
export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

/** Homepage — Claude Design "WebAlchemy Landing v5". Header, footer and floating contact come from the (site) layout. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <StartHere />
      <HowItWorks />
      <Work />
      <Services />
      <WhyUs />
      <Bands />
      <Testimonials />
      <Pricing />
      <HomeFaq />
      <ContactSection />
      <Insights />
    </>
  );
}
