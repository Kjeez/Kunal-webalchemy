import type { Metadata } from 'next';
import LeadForm from '@/components/site/LeadForm';
import Faq, { type FaqItem } from '@/components/site/Faq';
import { EMAIL, PHONE_DISPLAY, TEL_HREF, WHATSAPP_DEFAULT_MESSAGE, whatsappHref } from '@/lib/site';
import styles from './contact.module.css';
import FloatField from '@/components/site/motion/FloatField';
import { PeekOver } from '@/components/site/motion/Peep';

/* Contact — Claude Design "Contact" (Contact.dc.html), form state. The
   design's "sent" state lives at /thank-you (the conversion URL). */

export const metadata: Metadata = {
  title: 'Contact WebAlchemy — Get a Free Quote | Delhi NCR',
  description: 'Get in touch with WebAlchemy for web development, design, or marketing. Based in Uttam Nagar, Delhi. Free consultation — reply within 24 hours.',
  alternates: { canonical: '/contact' },
};

// ContactPage JSON-LD carried over unchanged from the legacy ContactPage.
const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact WebAlchemy',
  description: 'Get in touch with WebAlchemy for web development, design, or digital marketing services in Delhi NCR.',
  url: 'https://www.webalchemy.in/contact',
  mainEntity: {
    '@type': 'ProfessionalService',
    name: 'WebAlchemy',
    telephone: '+91-78385-83051',
    email: 'contact@webalchemy.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Uttam Nagar',
      addressLocality: 'New Delhi',
      addressRegion: 'DL',
      postalCode: '110059',
      addressCountry: 'IN',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.webalchemy.in/' },
    { '@type': 'ListItem', position: 2, name: 'Contact' },
  ],
};

// FAQ carried over verbatim from the legacy ContactPage (also emits its FAQPage JSON-LD).
const FAQ: FaqItem[] = [
  {
    q: 'How do I get a quote for my project?',
    a: 'The quickest way is to WhatsApp us at +91 78385 83051 with a brief description of what you need — business website, e-commerce store, app, or marketing campaign. We will reply within 24 hours with initial questions, then schedule a 20-minute discovery call to understand your scope. After that call, you receive a detailed, itemised quote within 2 business days. No cost, no obligation at any stage.',
  },
  {
    q: 'Do you sign NDAs before discussing project details?',
    a: 'Yes, we are happy to sign a Non-Disclosure Agreement before you share any sensitive information. If you have your own NDA template, send it over and we will review and sign. If you need us to provide one, we have a standard mutual NDA ready to go. We take client confidentiality seriously — your business ideas, data, and strategy are never shared with anyone outside the project team.',
  },
  {
    q: 'What are your payment terms?',
    a: 'We work on a milestone-based payment model. Typical structure: 50% advance to kick off the project, 25% at design approval, and 25% before final delivery and deployment. For ongoing retainers (marketing, maintenance, content), we bill monthly in advance. We accept bank transfers (NEFT/IMPS), UPI, and international wire transfers for overseas clients. GST invoices are provided for all payments.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes, we actively work with clients in Canada, Tanzania, the UAE, and the UK. Time zone differences are managed through async communication (WhatsApp, email, Loom videos) and scheduled calls that work for both sides. International payments are accepted via wire transfer or Wise (TransferWise). The process, deliverables, and quality are identical — the only difference is we meet over video instead of in person.',
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
            Tell us about your business and we&apos;ll come back within 24 hours with a plan and a fixed quote. No
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
          <PeekOver seed="Rohan" bubble="We reply in 24h!" />
          <LeadForm source="Contact page" serviceInput="chips" showBudget />
        </div>
      </section>

      <section className="band-white">
        <div className={`wrap section-top ${styles.faq}`}>
          <div className="stack" style={{ gap: 16 }}>
            <p className="eyebrow">FAQ</p>
            <h2 className="h2">Questions about working with us</h2>
            <p className="lede">How engagements work, payment terms, and more.</p>
          </div>
          <Faq items={FAQ} jsonLd />
        </div>
      </section>
    </>
  );
}
