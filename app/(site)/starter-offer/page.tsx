import type { Metadata } from 'next';
import Link from 'next/link';
import Faq from '@/components/site/Faq';
import LeadForm from '@/components/site/LeadForm';
import { EMAIL, PHONE_DISPLAY, TEL_HREF, whatsappHref } from '@/lib/site';
import s from './starter.module.css';
import FloatField from '@/components/site/motion/FloatField';
import { PeekOver } from '@/components/site/motion/Peep';

export const metadata: Metadata = {
  title: '₹14,999 Starter Website Package | WebAlchemy',
  description:
    'A professional 5-page website for ₹14,999, one-time. Free domain, 1-year hosting, SSL, mobile-responsive, SEO-ready and delivered in 7 days.',
  alternates: { canonical: '/starter-offer' },
};

const WA_MESSAGE = "Hi! I'm interested in the ₹14,999 Starter Website Package. Please share more details.";

const FEATURES = [
  '5-Page Professional Website',
  'Free Domain (.com/.in)',
  'Free Hosting (1 Year)',
  'Free SSL Certificate',
  'Mobile Responsive Design',
  'SEO Ready Structure',
  'Contact Form Integration',
  'Google Analytics Setup',
  '7-Day Delivery',
  '1 Month Free Support',
];

const GLANCE = [
  ['Pages', 'Up to 5'],
  ['Domain', 'Free .com / .in'],
  ['Hosting & SSL', 'Free for 1 year'],
  ['Delivery', '7 working days'],
  ['Support', '1 month free'],
];

const STEPS = [
  { t: 'Book a Call', d: 'Share your requirements with our team.' },
  { t: 'We Design', d: 'Get designs within 3 days for approval.' },
  { t: 'Go Live!', d: 'Your website is ready in 7 days.' },
];

const WORK = [
  { name: 'BBPS Dwarka', image: '/portfolio-screenshots/balbharti.jpg', url: 'bbpsdwarka.balbharati.org' },
  { name: 'Hardik Dental Clinic', image: '/portfolio-screenshots/hardikdentalclinic.jpg', url: 'hardikdentalclinic.com' },
  { name: 'KR Mangalam Vikaspuri', image: '/portfolio-screenshots/krmangalam.jpg', url: 'krmangalamvikaspuri.com' },
];

const FAQS = [
  {
    q: 'Is this a one-time payment?',
    a: 'Yes! ₹14,999 is a one-time payment. No hidden charges, no monthly fees for the first year. Hosting renewal after 1 year is just ₹2,999/year.',
  },
  {
    q: "What if I'm not satisfied with the design?",
    a: "We offer unlimited revisions until you're 100% happy. If we can't satisfy you, we'll refund your money. No questions asked.",
  },
  {
    q: 'How long does it take to build my website?',
    a: 'We deliver within 7 working days. For urgent requirements, we can deliver in 3-4 days at no extra cost (subject to availability).',
  },
  {
    q: 'Do you provide after-sales support?',
    a: 'Absolutely! You get 1 month of free support. After that, we offer affordable maintenance plans starting at ₹999/month.',
  },
  {
    q: 'Can I upgrade to more pages later?',
    a: 'Yes! You can add more pages anytime at ₹1,500 per page. You can also upgrade to our Growth package when your business grows.',
  },
];

export default function Page() {
  const wa = whatsappHref(WA_MESSAGE);

  return (
    <>
      {/* ---------- hero ---------- */}
      <section className={`wrap has-decor ${s.hero}`} aria-labelledby="so-h1">
        <FloatField preset="hero" />
        <div className={s.heroCopy}>
          <div className={s.badges}>
            <span className={s.status}><span className="live-dot pulse" aria-hidden="true" /> Available for new projects</span>
            <span className="badge">Websites from ₹14,999 · Free Domain &amp; Hosting</span>
          </div>
          <h1 id="so-h1" className="h1">
            Need more <span className="serif">customers?</span>
          </h1>
          <p className={s.sub}>
            We build websites that <span className="serif">actually sell.</span>
          </p>
          <p className="lede-lg" style={{ maxWidth: 540 }}>
            Stop losing leads to outdated design. Get a professional website at just <strong>₹14,999</strong> with
            free domain, hosting &amp; SSL.
          </p>
          <div className="btnrow">
            <a href={wa} className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">Get started now →</a>
            <a href={TEL_HREF} className="btn btn-ghost btn-lg">Call now</a>
          </div>
          <div className={s.proof}>
            <span>500+ happy clients</span>
            <span>Money-back guarantee</span>
            <span>7-day delivery</span>
          </div>
        </div>

        <aside className={`card has-peek ${s.glance}`} aria-labelledby="so-glance">
          <PeekOver seed="Kabir" bubble="Live in 7 days!" />
          <div className={s.glanceTop}>
            <h2 id="so-glance" className="eyebrow-sm" style={{ color: 'var(--blue)', fontWeight: 500 }}>The Starter package</h2>
            <span className="badge">7-day delivery</span>
          </div>
          <div className={s.priceRow}>
            <span className={s.price}>₹14,999</span>
            <span className={s.priceNote}>One-time payment</span>
          </div>
          <dl className={s.glanceList}>
            {GLANCE.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <a href="#starter-form" className="btn btn-primary btn-block">Claim the offer →</a>
          <p className={s.glanceFoot}>Best for landing pages, portfolios and small business websites. Hosting renewal after year one: ₹2,999/year.</p>
        </aside>
      </section>

      {/* ---------- included ---------- */}
      <section className="band-white" aria-labelledby="so-incl">
        <div className={`wrap section ${s.stack}`}>
          <div className={s.headRow}>
            <div className={s.headCopy}>
              <div className="eyebrow">WHAT YOU GET</div>
              <h2 id="so-incl" className="h2 rise">
                Everything included at <span className="serif">₹14,999</span>
              </h2>
            </div>
            <p className="lede" style={{ maxWidth: 380 }}>No hidden charges. What you see is what you pay.</p>
          </div>
          <ul className={`gridlines ${s.features}`}>
            {FEATURES.map((f, i) => (
              <li key={f} className={s.feature}>
                <span className={s.check} aria-hidden="true">✓</span>
                <span className={s.featureText}>{f}</span>
                <span className={s.featureNum} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              </li>
            ))}
          </ul>
          <div className="btnrow">
            <a href={wa} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">Get started on WhatsApp →</a>
            <a href="#starter-form" className="btn btn-ghost">Send us your details</a>
          </div>
        </div>
      </section>

      {/* ---------- recent work ---------- */}
      <section className={`wrap section-top ${s.stack}`} aria-labelledby="so-work">
        <div className={s.headRow}>
          <div className={s.headCopy}>
            <div className="eyebrow">RECENT WORK</div>
            <h2 id="so-work" className="h2 rise">Sites we&apos;ve shipped</h2>
          </div>
          <Link href="/portfolio" className="text-link">All projects →</Link>
        </div>
        <div className={s.workGrid}>
          {WORK.map((w) => (
            <Link key={w.name} href="/portfolio" className={`${s.work} rise`}>
              <div className="browser">
                <div className="browser-bar" aria-hidden="true"><i /><i /><i /><span className="url">{w.url}</span></div>
                <div className="browser-shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={w.image} alt={`${w.name} website homepage`} width={1898} height={965} loading="lazy" />
                </div>
              </div>
              <h3 className={s.workName}>{w.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- process ---------- */}
      <section className={`wrap section-top ${s.stack}`} aria-labelledby="so-steps">
        <div className={s.headCopy}>
          <div className="eyebrow">PROCESS</div>
          <h2 id="so-steps" className="h2 rise">Simple 3-step process</h2>
          <p className="lede">From idea to live website in just 7 days.</p>
        </div>
        <ol className={s.steps}>
          {STEPS.map((st, i) => (
            <li key={st.t} className={`card ${s.step} lift`}>
              <span className={s.stepNum}>{i + 1}</span>
              <h3 className={s.stepTitle}>{st.t}</h3>
              <p className={s.stepText}>{st.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={`section ${s.faqWrap}`} aria-labelledby="so-faq">
        <h2 id="so-faq" className={s.h2sm}>Frequently asked questions</h2>
        <Faq items={FAQS} />
      </section>

      {/* ---------- contact ---------- */}
      <section id="starter-form" className="band-white" aria-labelledby="so-contact" style={{ scrollMarginTop: 64 }}>
        <div className={`wrap section ${s.contact}`}>
          <div className={s.headCopy}>
            <div className="eyebrow">GET IN TOUCH</div>
            <h2 id="so-contact" className="h2">Ready to get your <span className="serif">website?</span></h2>
            <p className="lede">
              Free Domain + Free Hosting + Free SSL + SEO Ready + Mobile Responsive + 7-Day Delivery. We&apos;re here to
              help you get started.
            </p>
            <ul className={s.channels}>
              <li>
                <a href={TEL_HREF} className={s.channel}>
                  <span className={s.channelK}>Phone</span>
                  <span className={s.channelV}>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href={wa} className={s.channel} target="_blank" rel="noopener noreferrer">
                  <span className={s.channelK}>WhatsApp</span>
                  <span className={s.channelV} style={{ color: 'var(--whatsapp)' }}>Chat with us →</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className={s.channel}>
                  <span className={s.channelK}>Email</span>
                  <span className={s.channelV}>{EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={`card ${s.formCard}`}>
            <LeadForm source="Starter offer" defaultService="Website Development" />
          </div>
        </div>
      </section>
    </>
  );
}
