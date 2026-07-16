import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Hero,
  Section,
  StatsStrip,
  ServiceAccordion,
  FaqAccordion,
  PricingTable,
  LogoMarquee,
  PopupCta,
  ContactPanel,
  Reel,
} from '@/components/ui';
import { projectsData } from '@/data/projectsData';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

/* Featured projects for the 3D reel — two per category, 12 faces. */
const reelProjects = [
  ...projectsData.filter((p) => p.category === 'Educational').slice(0, 2),
  ...projectsData.filter((p) => p.category === 'E-commerce').slice(0, 2),
  ...projectsData.filter((p) => p.category === 'Dental').slice(0, 2),
  ...projectsData.filter((p) => p.category === 'Corporate').slice(0, 2),
  ...projectsData.filter((p) => p.category === 'Travel').slice(0, 2),
  ...projectsData.filter((p) => p.category === 'Creative').slice(0, 2),
];

const clientNames = projectsData.map((p) => p.title);

const services = [
  {
    title: 'Website Development',
    description: 'Custom websites that convert visitors into customers.',
    features: ['Responsive Design', 'Fast Performance', 'SEO Optimized', '7-Day Delivery'],
    link: '/services/web-development',
    popular: true,
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that grow your business.',
    features: ['Google Ads', 'Meta Ads', 'SEO Strategy', 'Analytics & Reporting'],
    link: '/services/digital-marketing',
  },
  {
    title: 'Design & Branding',
    description: 'Visual identity that makes you memorable.',
    features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'UI/UX Design'],
    link: '/services/design-branding',
  },
  {
    title: 'Content Strategy',
    description: 'Words that rank on Google and sell to humans.',
    features: ['SEO Blog Writing', 'Website Copy', 'Keyword Strategy', 'Content Calendar'],
    link: '/services/content-strategy',
  },
  {
    title: 'App Development',
    description: 'iOS and Android apps that users love.',
    features: ['Native Development', 'Cross-Platform', 'App Store Launch', 'Ongoing Support'],
    link: '/services/app-development',
  },
  {
    title: 'PR & Advertising',
    description: 'Get featured in top publications and build your brand.',
    features: ['Media Placements', 'Press Releases', 'Brand Positioning', 'Reputation Management'],
    link: '/services/pr-advertising',
  },
];

const techStack = [
  'React', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Strapi', 'Three.js',
  'Shopify', 'WordPress', 'Wix', 'Framer', 'Webflow', 'Tailwind', 'PHP', 'Liquid',
  'Git', 'jQuery', 'AWS', 'Node.js',
];

const testimonials = [
  {
    name: 'Sarah Jenkins',
    company: 'TechFlow Systems',
    content: "WebAlchemy didn't just build a website; they built a sales engine. Our lead quality improved overnight, and the design perfectly captures our brand's future vision.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    metric: '+240%',
    metricLabel: 'Inbound Leads',
  },
  {
    name: 'Michael Chen',
    company: 'Nexus AI',
    content: 'The level of technical detail is unmatched. They handled our complex 3D WebGL integrations seamlessly. Truly a partner, not just a vendor.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    metric: '99/100',
    metricLabel: 'Performance Score',
  },
  {
    name: 'Elena Rodriguez',
    company: 'Global Logistics',
    content: 'We were losing customers to mobile usability issues. The new responsive platform WebAlchemy launched helped us recover significant market share in Q4.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
    metric: '$2.1M',
    metricLabel: 'Revenue Added',
  },
];

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'A standard high-conversion landing page typically takes 2-3 weeks. A full 5-10 page corporate website usually takes 4-6 weeks. Complex web applications with custom backends can take 2-3 months. We provide a detailed timeline during our initial strategy call.',
  },
  {
    question: 'Do you offer hosting and maintenance?',
    answer: 'Yes, we offer premium managed hosting on high-performance cloud servers. Our maintenance packages include daily backups, security updates, uptime monitoring, and content updates so you never have to worry about your site going down.',
  },
  {
    question: 'Will I be able to update the website myself?',
    answer: 'Absolutely. We build most of our sites using user-friendly CMS platforms (like Webflow or Next.js with Sanity/Strapi). We provide a training session and video tutorials upon handover so your marketing team can easily change text, images, and blog posts.',
  },
  {
    question: 'What is your payment structure?',
    answer: 'We typically require a 50% deposit to secure your slot in our production schedule. The remaining 50% is due upon project completion and launch. For larger enterprise projects, we can discuss milestone-based payments.',
  },
  {
    question: 'Do you handle SEO and content writing?',
    answer: 'All our builds include technical SEO (site structure, speed, meta tags) by default. For copywriting and ongoing content strategy/blogging, we have an add-on service or we can work with your existing content team.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <Hero
        eyebrow="Available for New Projects"
        title={['Need More', 'Customers?']}
        subHeading={
          <>
            We Build Websites That <em>Actually Sell</em>.
          </>
        }
        sub="Stop losing leads to outdated design. We craft high-performance digital protocols merged with intuitive psychology. Guaranteed to 2x your conversion rate in 90 days."
        secondaryCta={{ label: 'View Ecosystem', href: '#results' }}
        floats={[
          { kind: 'star', style: { top: '15%', left: '5%', width: 32, height: 32 }, color: 'var(--orange)', d: 4 },
          { kind: 'pill', text: 'Websites from ₹11,999', style: { top: '14%', right: '5%' }, rot: '5deg', color: 'var(--yellow)', d: 1 },
          { kind: 'pill', text: 'Free Domain & Hosting', style: { top: '73%', left: '3%' }, rot: '-5deg', color: 'var(--green)', d: 2 },
          { kind: 'pill', text: 'Results Guaranteed', style: { top: '71%', right: '4%' }, rot: '4deg', dark: true, d: 3 },
          { kind: 'star', style: { top: '87%', left: '13%', width: 24, height: 24 }, color: 'var(--violet)', d: 5 },
        ]}
      >
        <div className="hero-actions">
          <PopupCta label="Book Strategy Call" serviceName="Strategy Call" size="lg" />
          <a href="#results" className="btn btn-out btn-lg">View Ecosystem</a>
        </div>
        <div className="pillrow" style={{ justifyContent: 'center', marginTop: 26 }}>
          <a href="#pricing" className="pill">🚀 Websites from ₹11,999 • Free Domain &amp; Hosting →</a>
        </div>
        <div className="pillrow" style={{ justifyContent: 'center', marginTop: 12 }}>
          <span className="pill">Conversion Focused</span>
          <span className="pill">Cancel Anytime</span>
          <span className="pill">Results Guaranteed</span>
        </div>
      </Hero>

      {/* Trusted-by client marquee (from legacy hero) */}
      <div style={{ paddingBottom: 'clamp(40px,6vw,72px)' }}>
        <LogoMarquee label="Trusted by Industry Leaders" items={clientNames} duration={80} />
      </div>

      {/* Stats strip */}
      <StatsStrip
        stats={[
          { value: 5, suffix: '+', label: 'Years Experience' },
          { value: 100, suffix: '+', label: 'Projects Delivered' },
          { value: 12, label: 'Team Members' },
          { value: 98, suffix: '%', label: 'Client Satisfaction' },
        ]}
      />

      {/* ============ SERVICES ============ */}
      <Section
        id="services"
        index="01"
        kicker="Our Expertise"
        heading={
          <>
            Digital Solutions for <span className="mk b">Modern</span> Businesses
          </>
        }
        aside={
          <>
            We combine design, technology, and strategy to build products that win. If you&apos;re in Delhi NCR, check out our <Link href="/website-developer-delhi">Website Developer Delhi</Link> services. You can also explore our <Link href="/portfolio">Portfolio</Link> of recent work.
          </>
        }
        accent="blue"
      >
        <ServiceAccordion
          items={services.map((s) => ({
            title: s.title,
            body: (
              <div>
                <p>{s.description}</p>
                <div className="btnrow" style={{ marginTop: 20 }}>
                  <PopupCta label="Get Started" serviceName={s.title} />
                  <Link href={s.link} className="btn btn-out">Explore</Link>
                </div>
              </div>
            ),
            tags: s.popular ? [...s.features, 'Most Popular'] : s.features,
          }))}
        />
        {/* legacy trust bar */}
        <div className="team-credits" style={{ marginTop: 'clamp(28px,4vw,44px)' }}>
          <div className="prose">
            <p><b style={{ color: 'var(--ink)' }}>200+ Happy Clients</b> · Rated 4.9/5 stars</p>
          </div>
          <div className="pillrow">
            <span className="pill">Fast Turnaround</span>
            <span className="pill">100% Secure</span>
            <span className="pill">Dedicated Support</span>
          </div>
        </div>
      </Section>

      {/* ============ PORTFOLIO (3D reel) ============ */}
      <Section
        id="results"
        index="02"
        kicker="Global Impact"
        heading={
          <>
            Built for <span className="mk g">Scale</span>
          </>
        }
        aside="Explore our recent work. We build digital experiences that drive real business growth."
        accent="green"
        className="pt0"
      >
        {/* header only — the reel below pins full-viewport while it spins */}
      </Section>
      <Reel
        ariaLabel="Recent projects showreel"
        faces={reelProjects.map((p) => ({ src: p.image, alt: p.title }))}
      />
      <div className="center" style={{ padding: '28px 0 clamp(48px,7vw,90px)' }}>
        <Link href="/portfolio" className="btn btn-dark">View all Projects</Link>
      </div>

      {/* ============ TECH STACK ============ */}
      <div style={{ paddingBottom: 'clamp(48px,7vw,90px)' }}>
        <LogoMarquee label="Technologies We Master" labelAs="h3" items={techStack} duration={45} />
      </div>

      {/* ============ TESTIMONIALS ============ */}
      <Section
        index="03"
        kicker="Client Success Stories"
        heading={
          <>
            Don&apos;t Just Take <span className="mk y">Our Word</span> For It
          </>
        }
        aside="We partner with ambitious brands to create digital experiences that deliver measurable business results."
        accent="yellow"
      >
        <div className="cardgrid">
          {testimonials.map((t) => (
            <div className="card tstl r" key={t.name}>
              <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>&ldquo;{t.content}&rdquo;</blockquote>
              <div className="who">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.image} alt={t.name} loading="lazy" />
                <div>
                  <b>{t.name}</b>
                  <span className="co">{t.company}</span>
                </div>
                <div className="stat">
                  <div className="v">{t.metric}</div>
                  <div className="l">{t.metricLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="center" style={{ marginTop: 36 }}>
          {/* Carried over from legacy (button had no action there either) */}
          <button type="button" className="btn btn-out">View More Reviews</button>
        </div>
      </Section>

      {/* ============ PRICING ============ */}
      <Section
        id="pricing"
        index="04"
        kicker="Investment"
        heading={
          <>
            Transparent Pricing <span className="mk g">No Hidden</span> Fees
          </>
        }
        aside="Choose the package that fits your current stage. We scale with you."
        accent="green"
      >
        <PricingTable
          plans={[
            {
              name: 'Starter',
              price: '₹11,999',
              priceSuffix: 'One-time payment',
              description: 'Perfect for getting started online',
              features: [
                'Up to 5 pages',
                'Mobile-responsive design',
                'SEO-ready structure',
                'Free Domain & SSL Certificate',
                'Contact form integration',
                'Google Analytics setup',
                '1 month of support',
                'Free Hosting',
                '7-day delivery',
                { text: 'E-commerce functionality', included: false },
                { text: 'Blog/CMS', included: false },
                { text: 'Advanced integrations', included: false },
                { text: 'Ongoing maintenance', included: false },
              ],
              ctaNode: <PopupCta label="Get Started" serviceName="Starter Package" variant="out" arrow={false} style={{ marginTop: 'auto', width: '100%' }} />,
              footnote: 'Best for: Landing pages, portfolios, small business websites',
            },
            {
              name: 'Growth',
              tag: 'Most Popular',
              price: '₹24,999',
              priceSuffix: 'One-time payment',
              description: 'Everything you need to scale',
              features: [
                { text: 'Everything in Starter', bold: true },
                'Up to 10 pages',
                'Blog/CMS integration',
                'E-commerce ready (50 products)',
                'Advanced SEO optimization',
                'Email marketing integration',
                'Social media integration',
                '3 months of support',
                'Priority development',
                'Custom animations',
                'Performance optimization',
              ],
              ctaNode: <PopupCta label="Start Growing" serviceName="Growth Package" variant="dark" arrow={false} style={{ marginTop: 'auto', width: '100%' }} />,
              featured: true,
              footnote: 'Best for: E-commerce stores, content-driven sites, growing brands',
            },
            {
              name: 'Enterprise',
              tag: 'For Teams',
              price: 'Custom',
              priceSuffix: 'Tailored to your needs',
              description: 'Unlimited possibilities for your business',
              features: [
                { text: 'Everything in Growth', bold: true },
                'Unlimited pages',
                'Custom functionality',
                'Dedicated project manager',
                'Priority support (24/7)',
                'Advanced integrations (CRM, ERP)',
                'Multi-language support',
                'Custom training sessions',
                'White-glove service',
                'Ongoing consulting',
                'Performance SLAs',
              ],
              ctaNode: <PopupCta label="Contact Sales" serviceName="Enterprise Package" variant="out" arrow={false} style={{ marginTop: 'auto', width: '100%' }} />,
              footnote: 'Best for: Large businesses, agencies, complex requirements',
            },
          ]}
        />
        <p className="center form-note" style={{ marginTop: 36 }}>
          Not sure which plan is right for you? <a href="#contact" style={{ textDecoration: 'underline', textUnderlineOffset: 3 }}>Schedule a free consultation</a>.
        </p>
      </Section>

      {/* ============ FAQ ============ */}
      <Section
        id="faq"
        index="05"
        kicker="FAQ"
        heading="Frequently Asked Questions"
        aside="Everything you need to know about working with WebAlchemy."
        accent="pink"
        className="pt0"
      >
        {/* emitJsonLd=false: the legacy homepage FAQ emitted no FAQPage schema —
            flip to true only as a deliberate SEO change. */}
        <FaqAccordion items={faqs} emitJsonLd={false} />
        <div className="center" style={{ marginTop: 40 }}>
          <p className="form-note" style={{ marginBottom: 14 }}>Still have questions?</p>
          <PopupCta label="Chat with an Expert" serviceName="Expert Consultation" />
        </div>
      </Section>

      {/* ============ CONTACT ============ */}
      <Section
        id="contact"
        index="06"
        kicker="Contact Us"
        heading={
          <>
            Let&apos;s Build Something <span className="mk o strong">Extraordinary</span>
          </>
        }
        aside="Ready to transform your digital presence? We are currently accepting new projects. Tell us about your vision."
        accent="orange"
      >
        <div className="two-col" style={{ alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="chan r">
              <span className="ic" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="3" /><path d="m3 6 9 7 9-7" /></svg>
              </span>
              <div>
                <b>Email Us</b>
                <a href="mailto:contact@webalchemy.in">contact@webalchemy.in</a>
              </div>
            </div>
            <div className="chan r">
              <span className="ic" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </span>
              <div>
                <b>Call Us</b>
                <a href="tel:+917838583051">+91 78385 83051</a>
              </div>
            </div>
            <div className="chan r">
              <span className="ic" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
              </span>
              <div>
                <b>WhatsApp</b>
                <a href="https://wa.me/917838583051" target="_blank" rel="noopener noreferrer">+91 78385 83051</a>
              </div>
            </div>
          </div>
          <div className="r">
            <ContactPanel />
          </div>
        </div>
      </Section>

    </>
  );
}
