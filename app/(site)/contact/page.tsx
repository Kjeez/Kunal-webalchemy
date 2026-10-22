import type { Metadata } from 'next';
import LeadForm from '@/components/site/LeadForm';
import Faq, { type FaqItem } from '@/components/site/Faq';
import { EMAIL, PHONE_DISPLAY, SITE_URL, TEL_HREF, WHATSAPP_DEFAULT_MESSAGE, whatsappHref } from '@/lib/site';
import styles from './contact.module.css';
import FloatField from '@/components/site/motion/FloatField';
import { PeekOver } from '@/components/site/motion/Peep';

/* Contact — Kunal's contact page (design system "Contact" layout). The
   "sent" state lives at /thank-you. */

export const metadata: Metadata = {
  title: 'Contact Kunal | Hire a Website Developer & UI/UX Designer',
  description: 'Tell me about your website, redesign or design project. I’m Kunal, a website developer and UI/UX designer in New Delhi, and I reply within 24 hours with a plan and a fixed quote.',
  alternates: { canonical: '/contact' },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Kunal',
  description: 'Get in touch with Kunal for website design and development, UI/UX and CMS projects.',
  url: `${SITE_URL}/contact`,
  mainEntity: {
    '@type': 'Person',
    name: 'Kunal',
    jobTitle: 'Website Developer & UI/UX Designer',
    telephone: '+91-78385-83051',
    email: EMAIL,
    address: { '@type': 'PostalAddress', addressLocality: 'New Delhi', addressRegion: 'DL', addressCountry: 'IN' },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Contact' },
  ],
};

const FAQ: FaqItem[] = [
  {
    q: 'How do I get a quote for my project?',
    a: 'The quickest way is to WhatsApp me at +91 78385 83051 with a short description of what you need: a new website, a redesign, a store or UI/UX design. I reply within 24 hours with a few questions, then we have a short discovery call. After that you get a clear, itemised quote within 2 business days. No cost and no obligation at any stage.',
  },
  {
    q: 'Will you sign an NDA before we discuss details?',
    a: 'Yes. Send over your NDA and I will review and sign it, or I can share a standard mutual NDA. Your ideas, data and plans are never shared with anyone outside the project.',
  },
  {
    q: 'What are your payment terms?',
    a: 'Usually 50% upfront to book the slot and 50% at launch. Larger projects can be split into milestones, for example at design approval. I accept bank transfer (NEFT/IMPS), UPI and international wire transfers.',
  },
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes. Time zones are handled with async updates on WhatsApp, email and short screen recordings, plus calls at a time that suits both of us. International payments work via wire transfer or Wise.',
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className={`wrap has-decor ${styles.contact}`}>
        <FloatField preset="hero" />
        <div className="stack" style={{ gap: 24 }}>
          <p className={styles.accepting}>
            <span className="live-dot" aria-hidden="true" />
            Accepting new projects
          </p>
          <h1 className="h1" style={{ fontSize: 'clamp(44px, 6.4vw, 84px)' }}>
            Let&apos;s build something <span className="serif">extraordinary</span>
          </h1>
          <p className="lede" style={{ maxWidth: 480 }}>
            Tell me about your business and I&apos;ll come back within 24 hours with a plan and a fixed quote. No
            obligation.
          </p>
          <div className={styles.rows}>
            <a href={whatsappHref(WHATSAPP_DEFAULT_MESSAGE)} target="_blank" rel="noopener noreferrer" className={styles.row}>
              <span className={styles.k}>WhatsApp</span>
              <span className={styles.v}>{PHONE_DISPLAY} →</span>
            </a>
            <a href={TEL_HREF} className={styles.row}>
              <span className={styles.k}>Call</span>
              <span className={styles.v}>{PHONE_DISPLAY}</span>
            </a>
            <a href={`mailto:${EMAIL}`} className={styles.row}>
              <span className={styles.k}>Email</span>
              <span className={styles.v}>{EMAIL}</span>
            </a>
            <div className={styles.row}>
              <span className={styles.k}>Based in</span>
              <span className={styles.v}>New Delhi, India</span>
            </div>
            <div className={styles.row}>
              <span className={styles.k}>Response time</span>
              <span className={styles.v} style={{ fontWeight: 600, color: 'var(--green)' }}>Under 24 hours</span>
            </div>
          </div>
        </div>

        <div className={`card has-peek ${styles.formCard}`}>
          <PeekOver seed="Kunal" bubble="I reply in 24h!" />
          <LeadForm source="Contact page" serviceInput="chips" showBudget />
        </div>
      </section>

      <section className="band-white">
        <div className={`wrap section-top ${styles.faq}`}>
          <div className="stack" style={{ gap: 16 }}>
            <p className="eyebrow">FAQ</p>
            <h2 className="h2">Questions about working with me</h2>
            <p className="lede">How engagements work, payment terms, and more.</p>
          </div>
          <Faq items={FAQ} jsonLd />
        </div>
      </section>
    </>
  );
}
