import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, whatsappHref, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/site';
import { SERVICES, SERVICE_ORDER } from '@/data/services';
import { JsonLd, StepCards } from '@/components/service/ServicePage';
import s from '@/components/service/service.module.css';
import FloatField from '@/components/site/motion/FloatField';
import Peep, { PeepCrew } from '@/components/site/motion/Peep';

/* /services index — Kunal's four services, composed from the Service
   template + the Landing v5 numbered service list. */

export const metadata: Metadata = {
  title: 'Services | Kunal — Website Developer & UI/UX Designer',
  description:
    'Web design & development, UI/UX and brand design, WordPress & CMS websites and Shopify / WooCommerce stores. Designed in Figma, built by Kunal, with a direct line to him.',
  alternates: { canonical: '/services' },
};

// One line + the things each service covers (mirrors the homepage Expertise list).
const LIST: Record<(typeof SERVICE_ORDER)[number], { d: string; subs: string[]; popular?: boolean }> = {
  'web-development': {
    d: 'Custom, fast websites that turn visitors into customers.',
    subs: ['Business websites', 'Landing pages', 'Redesigns', 'Speed & SEO fixes', 'React / Next.js builds'],
    popular: true,
  },
  'design-branding': {
    d: 'Research-led interfaces and a brand look people remember.',
    subs: ['User flows', 'Wireframes', 'Figma prototypes', 'Design systems', 'Logos & brand kits', 'Photoshop & Illustrator visuals'],
  },
  'wordpress-development': {
    d: 'Sites you can update yourself, on the platform that fits.',
    subs: ['WordPress', 'Elementor', 'Custom themes', 'Webflow', 'Wix', 'Framer', 'Squarespace'],
  },
  'ecommerce-website-development': {
    d: 'Online stores that make buying feel easy.',
    subs: ['Shopify', 'WooCommerce', 'Payments', 'Shipping', 'Product setup'],
  },
};

const STEPS = [
  { when: 'FREE · 30 MIN', t: 'Discovery call', d: 'Your goals, your customers and what is not working today. You leave with a clear plan and a fixed quote, with no obligation.' },
  { when: 'FIGMA → CODE', t: 'Design & build', d: 'I design the key pages in Figma, refine them with your feedback, then build on a staging link you can check anytime.' },
  { when: 'GO LIVE', t: 'Launch & grow', d: 'Live on your domain with analytics and SEO basics in place, and I stay on hand for fixes and updates afterwards.' },
];

const PLATFORMS = ['Figma', 'Photoshop', 'Illustrator', 'WordPress', 'Elementor', 'WooCommerce', 'Shopify', 'Webflow', 'Wix', 'Framer', 'Squarespace', 'React', 'Next.js'];

export default function Page() {
  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Services by Kunal',
    itemListElement: SERVICE_ORDER.map((k, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: SERVICES[k].name,
      url: `${SITE_URL}${SERVICES[k].path}`,
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
            { seed: 'Kunal', bg: 'eef1ff', pose: 'wave', size: 98, bubble: 'What are we building?' },
            { seed: 'Arjun', bg: 'fbf3e2', pose: 'jump', size: 76 },
          ]}
        />
        <div className="eyebrow">SERVICES</div>
        <h1 className={`h1 ${s.h1}`}>
          Design <span className="serif">and</span> code, under one roof
        </h1>
        <p className={`lede-lg ${s.lede}`} style={{ maxWidth: 620 }}>
          I&apos;m Kunal, a website developer and UI/UX designer. I design in Figma, Photoshop and Illustrator, then
          build on WordPress, Shopify, Webflow, Wix or Next.js. One person from first sketch to launch, and a direct
          line to me the whole way.
        </p>
        <div className="btnrow">
          <Link href="/contact" className="btn btn-primary">Get a free quote →</Link>
          <Link href="/portfolio" className="btn btn-ghost">See my work</Link>
        </div>
      </section>

      {/* ---- numbered service list ---- */}
      <section className="band-white">
        <div className={`wrap section ${s.idxSplit}`}>
          <div className={s.idxSticky}>
            <div className="eyebrow">EXPERTISE</div>
            <h2 className="h2 h2-lg rise">Four ways I can help</h2>
            <p className="lede" style={{ maxWidth: 440 }}>
              Pick one to see what&apos;s included, how I work and the questions clients usually ask. Not sure which
              you need? Message me and I&apos;ll tell you honestly.
            </p>
            <div className={s.others}>
              <div className={`eyebrow-sm ${s.othersLabel}`}>TOOLS & PLATFORMS</div>
              <div className="chiprow">
                {PLATFORMS.map((p) => <span key={p} className="tag">{p}</span>)}
              </div>
            </div>
          </div>
          <ul className={s.svcList}>
            {SERVICE_ORDER.map((k) => {
              const svc = SERVICES[k];
              const l = LIST[k];
              return (
                <li key={k}>
                  <Link href={svc.path} className={s.svcRow}>
                    <span className={s.svcNum}>{svc.num}</span>
                    <div className={s.svcBody}>
                      <div className={s.svcTitleRow}>
                        <h3 className={s.svcTitle}>{svc.name}</h3>
                        {l.popular && <span className="badge">Most requested</span>}
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

      {/* ---- how I work ---- */}
      <section className={`wrap section-top ${s.stack40}`}>
        <div className={s.head}>
          <div className="eyebrow">HOW I WORK</div>
          <h2 className="h2 rise">One person, one simple process</h2>
        </div>
        <StepCards steps={STEPS} />
      </section>

      {/* ---- working with me ---- */}
      <section className="wrap section">
        <div className={`has-decor ${s.quote}`}>
          <FloatField preset="dark" />
          <div className={s.quoteCopy}>
            <div className="eyebrow" style={{ color: 'var(--blue-soft)' }}>WORKING WITH ME</div>
            <h2 className="h2 rise">A fixed quote after one call</h2>
            <p className={s.quoteIntro}>
              I quote every project on its scope rather than selling packages, so you get one clear price and timeline
              before any work starts.
            </p>
            <div className="btnrow">
              <Link href="/contact" className="btn btn-primary">Get a free quote →</Link>
              <a href={whatsappHref(WHATSAPP_DEFAULT_MESSAGE)} className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
                WhatsApp me
              </a>
            </div>
          </div>
          <ul className={s.quoteList}>
            {['Fixed price, agreed upfront', 'Usually 50% to start, 50% at launch', 'Design in Figma before any build', 'No account managers, just me'].map((pt) => (
              <li key={pt} className="rise">{pt}</li>
            ))}
          </ul>
          <span className={s.quotePeep} data-motion>
            <Peep seed="Kunal" bg="9fb0ff" pose="wave" size={84} bubble="Let's talk!" />
          </span>
        </div>
      </section>
    </>
  );
}
