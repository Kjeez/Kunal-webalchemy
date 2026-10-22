/* eslint-disable @next/next/no-img-element */
import Faq from '@/components/site/Faq';
import LeadForm from '@/components/site/LeadForm';
import { EMAIL, PHONE_DISPLAY, TEL_HREF, whatsappHref, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/site';
import { FAQS, peep } from './data';
import s from './home.module.css';
import Peep from '@/components/site/motion/Peep';

/** FAQ: intro + shared accordion. (Old homepage emitted no FAQPage JSON-LD; unchanged.) */
export function HomeFaq() {
  return (
    <section id="faq" className={`band-white ${s.anchor}`} aria-labelledby="faq-h">
      <div className={`wrap section ${s.sideGrid}`} style={{ gap: '40px 72px' }}>
        <div className={s.faqIntro}>
          <h2 id="faq-h" className="h2 rise">Frequently asked questions</h2>
          <p className="lede">Everything you need to know about working with me.</p>
          <a
            href={whatsappHref(WHATSAPP_DEFAULT_MESSAGE)}
            className="btn btn-round"
            target="_blank"
            rel="noopener noreferrer"
            style={{ alignSelf: 'start', marginTop: 8, whiteSpace: 'normal' }}
          >
            Still have questions? Chat with me
          </a>
          <span className="faq-peep" data-motion>
            <Peep seed="Ishita" bg="fbf3e2" pose="float" size={92} bubble="Ask Kunal anything!" />
          </span>
        </div>
        <Faq items={FAQS} />
      </div>
    </section>
  );
}

/** Dark contact band (#contact) with the shared lead form. */
export function ContactSection() {
  const wa = whatsappHref(WHATSAPP_DEFAULT_MESSAGE);
  return (
    <section id="contact" className={`band-dark ${s.anchor}`} aria-labelledby="contact-h">
      <div className={`wrap section ${s.contactGrid}`}>
        <div className="stack" style={{ gap: 24 }}>
          <h2 id="contact-h" className={`rise ${s.contactH}`}>
            Let&apos;s build something <span className="serif" style={{ color: 'var(--blue-soft)' }}>extraordinary</span>
            <span className={s.spinStar} aria-hidden="true" />
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--dark-muted)', maxWidth: 460 }}>
            Ready to transform your digital presence? I&apos;m currently taking on new projects. Tell me about your vision.
          </p>
          <div className={s.contactRows}>
            <a href={`mailto:${EMAIL}`} className={s.cRow}><span className={s.cLabel}>Email</span><span className={s.cVal}>{EMAIL}</span></a>
            <a href={TEL_HREF} className={s.cRow}><span className={s.cLabel}>Call</span><span className={s.cVal}>{PHONE_DISPLAY}</span></a>
            <a href={wa} className={s.cRow} target="_blank" rel="noopener noreferrer"><span className={s.cLabel}>WhatsApp</span><span className={s.cVal}>{PHONE_DISPLAY}</span></a>
            <div className={s.cRow}><span className={s.cLabel}>Based in</span><span className={s.cVal}>New Delhi, India</span></div>
            <div className={s.cRow}><span className={s.cLabel}>Response time</span><span className={`${s.cVal} ${s.cGood}`}>Under 24 hours</span></div>
          </div>
        </div>

        <div className={s.contactCard}>
          <img src={peep('Rohan')} alt="" width={112} height={112} className={s.peep} />
          <LeadForm source="Home · contact" />
        </div>
      </div>
    </section>
  );
}
