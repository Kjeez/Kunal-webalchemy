import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { SERVICES } from '@/data/services';
import { JsonLd, PlanCards, StepCards } from '@/components/service/ServicePage';
import s from '@/components/service/service.module.css';
import FloatField from '@/components/site/motion/FloatField';
import { PeepCrew } from '@/components/site/motion/Peep';

/* /services index — no dedicated design; composed from the Service
   template + the Landing v5 numbered service list. */

export const metadata: Metadata = {
  title: 'Services — Web Development, Digital Marketing, Design & More | WebAlchemy',
  description:
    'Web development, digital marketing, UI/UX design & branding, content strategy, app development and PR & advertising from one Delhi NCR team. Get a free estimate.',
  alternates: { canonical: '/services' },
};

// Descriptions from the homepage service list; sub-services from the legacy
// /services index (its category item lists).
const LIST: { key: string; d: string; subs: string[]; popular?: boolean }[] = [
  {
    key: 'web-development',
    d: 'Custom websites that convert visitors into customers.',
    subs: ['One Page Website', 'Landing Page', 'Business Website', 'Product Showcase', 'E-commerce', 'Agency Website', 'WordPress', 'Shopify', 'Webflow', 'Wix', 'Framer', 'WooCommerce'],
    popular: true,
  },
  {
    key: 'digital-marketing',
    d: 'Data-driven campaigns that grow your business.',
    subs: ['Google Ads', 'SEO', 'Google Shopping Ads', 'Facebook Ads', 'Instagram Ads', 'Display Advertising', 'Google Mobile Ads', 'Influencer Marketing', 'Remarketing Ads'],
  },
  {
    key: 'design-branding',
    d: 'Visual identity that makes you memorable.',
    subs: ['UI/UX Design', 'Branding', 'Catalogue', 'Logos', 'Banners', 'Social Media Posts', 'Video Editing', 'Animations', '3D Modeling'],
  },
  {
    key: 'content-strategy',
    d: 'Words that rank on Google and sell to humans.',
    subs: ['Content Writing', 'Blog Writing', 'Data Entry'],
  },
  {
    key: 'app-development',
    d: 'iOS and Android apps that users love.',
    subs: ['iOS Development', 'Android Development', 'Native Development', 'Cross-Platform'],
  },
  {
    key: 'pr-advertising',
    d: 'Mass media reach for maximum brand awareness.',
    subs: ['Radio', 'TV', 'Outdoor', 'Metro', 'Auto & Bus', 'Bus Shelter', 'Newspaper', 'Airlines', 'Cinema', 'OTT', 'Railway', 'Airport'],
  },
];

const SPECIALIST = ['wordpress-development', 'ecommerce-website-development'].map((k) => SERVICES[k]);

const STEPS = [
  { when: 'FREE', t: 'Strategy call', d: '30 minutes on your goals and customers. You leave with a clear plan and a quote — no obligation.' },
  { when: 'SHARED PROGRESS', t: 'Design & build', d: 'We map the work, then design, build or launch it, sharing progress as we go so nothing drifts from what you approved.' },
  { when: 'ONGOING', t: 'Launch & grow', d: 'Go live with tracking in place, then we support, report and optimise so the work keeps paying off.' },
];

const TEASER_PLANS = SERVICES['web-development'].pricing.plans;

export default function Page() {
  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'WebAlchemy services',
    itemListElement: [...LIST.map((l) => SERVICES[l.key]), ...SPECIALIST].map((svc, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: svc.name,
      url: `${SITE_URL}${svc.path}`,
    })),
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Services' },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={itemListLd} />

      {/* ---- hero ---- */}
      <section className={`wrap has-decor ${s.idxHero}`}>
        <FloatField preset="hero" />
        <PeepCrew
          className="hero-crew"
          peeps={[
            { seed: 'Asha', bg: 'e8f4ec', pose: 'bob', size: 84 },
            { seed: 'Zara', bg: 'f3ecfb', pose: 'wave', size: 98, bubble: 'How can we help?' },
            { seed: 'Arjun', bg: 'fbf3e2', pose: 'jump', size: 76 },
          ]}
        />
        <div className="eyebrow">SERVICES</div>
        <h1 className={`h1 ${s.h1}`}>
          Comprehensive digital <span className="serif">solutions</span>
        </h1>
        <p className={`lede-lg ${s.lede}`} style={{ maxWidth: 620 }}>
          From pixel-perfect designs to mass media advertising, we cover every aspect of your brand&apos;s growth
          journey — websites, marketing, design, content, apps and advertising from one Delhi NCR team.
        </p>
        <div className="btnrow">
          <Link href="/contact" className="btn btn-primary">Get a free estimate →</Link>
          <Link href="/portfolio" className="btn btn-ghost">See our work</Link>
        </div>
      </section>

      {/* ---- numbered service list ---- */}
      <section className="band-white">
        <div className={`wrap section ${s.idxSplit}`}>
          <div className={s.idxSticky}>
            <div className="eyebrow">OUR EXPERTISE</div>
            <h2 className="h2 h2-lg rise">Digital solutions for modern businesses</h2>
            <p className="lede" style={{ maxWidth: 440 }}>
              We combine design, technology, and strategy to build products that win. Pick a service to see
              what&apos;s included, how it works and what it costs.
            </p>
            <div className={s.others}>
              <div className={`eyebrow-sm ${s.othersLabel}`}>SPECIALIST PAGES</div>
              <nav aria-label="Specialist services" className="chiprow">
                {SPECIALIST.map((o) => (
                  <Link key={o.key} href={o.path} className="chip">{o.chip}</Link>
                ))}
              </nav>
            </div>
          </div>
          <ul className={s.svcList}>
            {LIST.map((l) => {
              const svc = SERVICES[l.key];
              return (
                <li key={l.key}>
                  <Link href={svc.path} className={s.svcRow}>
                    <span className={s.svcNum}>{svc.num}</span>
                    <div className={s.svcBody}>
                      <div className={s.svcTitleRow}>
                        <h3 className={s.svcTitle}>{svc.name}</h3>
                        {l.popular && <span className="badge">Most popular</span>}
                      </div>
                      <span className={s.svcDesc}>{l.d}</span>
                      <span className={s.svcTags}>{l.subs.join(' · ')}</span>
                    </div>
                    <span className={s.svcGo}>Explore →</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ---- how it works ---- */}
      <section className={`wrap section-top ${s.stack40}`}>
        <div className={s.head}>
          <div className="eyebrow">HOW IT WORKS</div>
          <h2 className="h2 rise">One team, one simple process</h2>
        </div>
        <StepCards steps={STEPS} />
      </section>

      {/* ---- pricing teaser ---- */}
      <section className={`wrap section ${s.stack40}`}>
        <div className={s.plansHead}>
          <div className={s.head}>
            <div className="eyebrow">PRICING</div>
            <h2 className="h2 rise">Websites from ₹14,999</h2>
            <p className={s.headIntro}>
              Fixed prices for websites, no hidden fees. Marketing, design, content, app and advertising work is
              quoted on scope — each service page lists typical ranges.
            </p>
          </div>
          <Link href="/#pricing" className="text-link">Compare all features →</Link>
        </div>
        <PlanCards plans={TEASER_PLANS} />
        <p className={s.planNote}>
          Not sure what it will cost? <Link href="/#estimate" className="link">Build your estimate</Link>.
        </p>
      </section>
    </>
  );
}
