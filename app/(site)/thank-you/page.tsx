import type { Metadata } from 'next';
import Link from 'next/link';
import { TONES, whatsappHref } from '@/lib/site';
import { ConversionPing, LeadFirstName, LeadService } from './LeadThanks';
import styles from './thank-you.module.css';
import FloatField from '@/components/site/motion/FloatField';
import { PeepCrew } from '@/components/site/motion/Peep';

/* Thank-you / conversion page — the "sent" state of Claude Design
   "Contact" (Contact.dc.html). Every lead form lands here. */

// Post-form conversion page: keep it out of search results.
export const metadata: Metadata = {
  title: 'Thank you | WebAlchemy',
  alternates: { canonical: '/thank-you' },
  robots: { index: false, follow: true },
};

const WHATSAPP_MESSAGE = 'Hi! I just submitted a form on your website. Looking forward to hearing from you!';

const NEXT_STEPS = [
  { when: 'WITHIN 24 HOURS', title: 'We call or WhatsApp you', text: 'A quick chat to understand your business, your customers and what you need.', tone: TONES.blue },
  { when: 'DAY 1–2', title: 'Free strategy call', text: '30 minutes on your goals. You leave with a clear plan and a fixed quote.', tone: TONES.amber },
  { when: 'WHEN YOU SAY GO', title: 'We start building', text: 'Starter sites go live in 7 days. Larger builds get a fixed timeline on day one.', tone: TONES.green },
];

export default function Page() {
  return (
    <section className={`has-decor ${styles.thanks}`}>
      <FloatField preset="party" />
      <PeepCrew
        className="hero-crew hero-crew-top"
        peeps={[
          { seed: 'Mia', bg: 'e8f4ec', pose: 'jump', size: 84, bubble: 'Yay!' },
          { seed: 'Rohan', bg: 'eef1ff', pose: 'jump', size: 96 },
          { seed: 'Zara', bg: 'f3ecfb', pose: 'jump', size: 80 },
        ]}
      />
      <ConversionPing />
      <div className={styles.head}>
        <div className={styles.check} aria-hidden="true">✓</div>
        <h1 className="h1" style={{ fontSize: 'clamp(44px, 6.4vw, 84px)' }}>
          Thanks<LeadFirstName />. <span className="serif">We&apos;re on it.</span>
        </h1>
        <p className="lede" style={{ maxWidth: 560 }}>
          We&apos;ve received your message about <LeadService />. Here&apos;s what happens next.
        </p>
      </div>

      <ol className={styles.steps}>
        {NEXT_STEPS.map((s, i) => (
          <li key={s.title} className={`rise ${styles.step}`} style={{ background: s.tone[1] }}>
            <div className={styles.stepTop}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ color: s.tone[0] }}>{s.when}</span>
            </div>
            <h2 className={styles.stepTitle}>{s.title}</h2>
            <p className={styles.stepText}>{s.text}</p>
          </li>
        ))}
      </ol>

      <div className="btnrow">
        <a href={whatsappHref(WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className={`btn btn-whatsapp ${styles.spring}`}>
          Can&apos;t wait? WhatsApp us now
        </a>
        <Link href="/portfolio" className={`btn btn-ghost ${styles.spring}`}>
          See our work while you wait
        </Link>
        <Link href="/" className={styles.home}>
          Back to home
        </Link>
      </div>
    </section>
  );
}
