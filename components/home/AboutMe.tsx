'use client';
/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import FloatField from '@/components/site/motion/FloatField';
import { PeekOver, peepSrc } from '@/components/site/motion/Peep';
import { whatsappHref, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/site';
import { confetti } from './motion';
import s from './home.module.css';

const FACTS: [string, string, string][] = [
  ['5+', 'years designing & building', 'var(--ink)'],
  ['200+', 'websites shipped', 'var(--blue)'],
  ['4.9★', 'average client rating', 'var(--amber)'],
];

const CARTOON_FACTS = [
  'Sketches every layout in Figma first',
  'Retouches visuals in Photoshop & Illustrator',
  'Ships on WordPress, Shopify, Webflow, Wix or Next.js',
  'Gets twitchy below PageSpeed 90',
];

/**
 * "About me" (replaces the agency's team section): story on the left, a
 * photo card on the right that flips to a cartoon version of Kunal with a
 * confetti pop — the page's little surprise.
 */
export default function AboutMe() {
  const [flipped, setFlipped] = useState(false);

  const flip = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next = !flipped;
    setFlipped(next);
    if (next) {
      const r = e.currentTarget.getBoundingClientRect();
      confetti(r.left + r.width / 2, r.top + r.height / 2);
    }
  };

  return (
    <section id="about" className={`wrap section has-decor ${s.anchor} ${s.about}`} aria-labelledby="about-h">
      <FloatField preset="soft" />
      <div className={s.aboutText}>
        <p className="eyebrow">ABOUT ME</p>
        <h2 id="about-h" className="h2 h2-lg rise">
          One person. <span className="serif">Zero middlemen.</span>
        </h2>
        <p className="lede">
          I&apos;m Kunal, a website developer and UI/UX designer based in New Delhi. For over five years I&apos;ve
          taken businesses from a blank Figma file to a fast, live website: research, wireframes, visual design in
          Figma, Photoshop and Illustrator, then a clean build on the CMS or framework that fits.
        </p>
        <p className="lede">
          No account managers in between. You talk directly to the person designing and building your site, on
          WhatsApp or a call, from first sketch to launch day.
        </p>
        <div className={s.facts}>
          {FACTS.map(([v, l, c]) => (
            <div key={l} className={`rise ${s.fact}`}>
              <span className={s.factV} style={{ color: c }}>{v}</span>
              <span className={s.factL}>{l}</span>
            </div>
          ))}
        </div>
        <div className={s.aboutLinks}>
          <a href={whatsappHref(WHATSAPP_DEFAULT_MESSAGE)} className="text-link" target="_blank" rel="noopener noreferrer">
            Message me on WhatsApp →
          </a>
          <a href="#work" className="text-link">See my work →</a>
        </div>
      </div>

      <div className={s.flipCol}>
        <div className={`has-peek ${s.flipWrap}`}>
          <PeekOver seed="Meera" size={88} side="left" bubble="Psst… flip it!" />
          <div className={`${s.flip}${flipped ? ` ${s.flipped}` : ''}`}>
            <figure className={s.flipFront} aria-hidden={flipped}>
              <img src="/founder.jpg" alt="Kunal smiling, sitting on a sofa in front of a bookshelf" width={821} height={1024} loading="lazy" />
              <figcaption className={s.flipCap}>That&apos;s me 👋</figcaption>
            </figure>
            <div className={s.flipBack} aria-hidden={!flipped}>
              <img src={peepSrc('Kunal', 'eef1ff')} alt="" width={150} height={150} className={s.cartoon} />
              <p className={s.flipBackK}>SURPRISE! THE CARTOON ME</p>
              <ul className={s.flipList}>
                {CARTOON_FACTS.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
          </div>
        </div>
        <button type="button" className={s.flipBtn} onClick={flip} aria-pressed={flipped}>
          {flipped ? 'Back to the real me ↺' : 'Flip the card ↻'}
        </button>
      </div>
    </section>
  );
}
