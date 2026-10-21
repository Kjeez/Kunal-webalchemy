import type { Metadata } from 'next';
import Link from 'next/link';
import { Marquee } from '@/components/site';
import { whatsappHref, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/site';
import s from './about.module.css';
import FloatField from '@/components/site/motion/FloatField';
import RotatingWord from '@/components/home/RotatingWord';
import { PeepCrew } from '@/components/site/motion/Peep';

/* About — Claude Design "About" (About.dc.html). Placeholder content in
   the mock (team-photo hero, founding-story paragraph, named team grid)
   is replaced with real assets/copy or dropped; see the slice report. */

export const metadata: Metadata = {
  title: 'About WebAlchemy | Web Design & Development Agency in New Delhi',
  description:
    'WebAlchemy is a digital growth agency in New Delhi. A 12-person team of designers and developers building fast, conversion-focused websites for schools, clinics, brands and businesses.',
  alternates: { canonical: '/about' },
};

const SHOTS = [
  { src: '/portfolio-screenshots/krmangalam.jpg', url: 'krmangalamvikaspuri.com', alt: 'KR Mangalam Vikaspuri school website', w: 1896, h: 966 },
  { src: '/portfolio-screenshots/hamta.jpg', url: 'hamtaorchardandresort.in', alt: 'Hamta Orchard Resort website', w: 1896, h: 965 },
  { src: '/portfolio-screenshots/giholding.jpg', url: 'gigroupholding.com', alt: 'GI Group Holding website', w: 1897, h: 964 },
];

const STATS = [
  { k: 'YEARS', v: '5+', l: 'In operation', c: 'var(--ink)' },
  { k: 'PROJECTS', v: '500+', l: 'Websites & apps delivered', c: 'var(--blue)' },
  { k: 'TEAM', v: '12', l: 'Designers & developers', c: 'var(--green)' },
  { k: 'SATISFACTION', v: '98%', l: 'Client satisfaction', c: 'var(--rust)' },
];

const VALUES = [
  { t: 'Direct access', d: 'No account managers playing "telephone". You get a direct Slack channel with your design & dev team.', c: 'var(--blue-soft)', r: '50%', rot: '0deg' },
  { t: 'Fixed prices', d: 'You get a fixed quote before we start. No hidden fees and no surprise invoices.', c: 'var(--gold)', r: '6px', rot: '45deg' },
  { t: 'Speed matters', d: 'Starter sites go live in 7 days, and every site is built to score 98+ on PageSpeed.', c: 'var(--mint)', r: '6px', rot: '12deg' },
  { t: 'Built to convert', d: 'Every page is designed to turn visitors into calls, WhatsApps and enquiries.', c: 'var(--coral)', r: '50%', rot: '0deg' },
];

const CLIENTS = [
  'KR Mangalam Vikaspuri', 'BBPS Dwarka', 'Vandana International', 'St. Thomas Dwarka', 'Paramount School',
  'BBIS Dwarka', 'Hardik Dental Clinic', 'Hamta Orchard Resort', 'Sam Travels', 'GI Group Holding',
];

export default function AboutPage() {
  return (
    <>
      <section className={`wrap has-decor ${s.hero}`}>
        <FloatField preset="soft" />
        <PeepCrew
          className="hero-crew"
          peeps={[
            { seed: 'Neha', bg: 'eef1ff', pose: 'wave', size: 96, bubble: 'Namaste!' },
            { seed: 'Arjun', bg: 'fbf3e2', pose: 'bob', size: 84 },
            { seed: 'Tara', bg: 'e8f4ec', pose: 'jump', size: 76 },
          ]}
        />
        <div className="eyebrow">ABOUT WEBALCHEMY</div>
        <h1 className={s.title}>
          A small Delhi team that builds websites that{' '}
          <RotatingWord inline words={['sell', 'get found', 'win trust', 'bring leads']} />
        </h1>
        <p className={s.intro}>
          WebAlchemy is a digital growth agency based in New Delhi, helping businesses and startups
          build a strong online presence through customized digital solutions.
        </p>
      </section>

      <section className="wrap">
        <figure className={s.shots}>
          <div className={s.shotsGrid}>
            {SHOTS.map((p) => (
              <div key={p.src} className={`browser ${s.shot}`}>
                <div className="browser-bar" aria-hidden="true">
                  <i /><i /><i />
                  <span className="url">{p.url}</span>
                </div>
                <div className="browser-shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt} width={p.w} height={p.h} />
                </div>
              </div>
            ))}
          </div>
          <figcaption className={s.shotsCap}>
            <span>Recent builds from our Delhi studio</span>
            <Link href="/portfolio" className="text-link">See all work →</Link>
          </figcaption>
        </figure>
      </section>

      <section className={`wrap ${s.statsWrap}`} aria-label="WebAlchemy in numbers">
        <div className="gridlines stats">
          {STATS.map((st) => (
            <div key={st.k} className="stat">
              <div className="k" style={{ color: st.c }}>{st.k}</div>
              <div className="v" style={{ color: st.c }}>{st.v}</div>
              <div className="l">{st.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={`wrap section ${s.story}`} aria-labelledby="story-h">
        <div className="stack" style={{ gap: 14 }}>
          <div className="eyebrow">OUR STORY</div>
          <h2 id="story-h" className="h2 rise">The perfect blend of data and creativity</h2>
        </div>
        <div className={s.storyText}>
          <p>
            We specialize in website development, UI/UX design, SEO, social media marketing,
            branding, and performance-driven strategies, combining creativity, technology, and data
            to deliver impactful experiences that help brands grow, scale, and stand out in the
            digital world.
          </p>
        </div>
      </section>

      <section className="band-dark" aria-labelledby="values-h">
        <div className={`wrap section ${s.values}`}>
          <h2 id="values-h" className="h2" style={{ maxWidth: 720 }}>How we work</h2>
          <div className={s.valueGrid}>
            {VALUES.map((v) => (
              <div key={v.t} className={`rise ${s.value}`}>
                <div
                  aria-hidden="true"
                  className={s.shape}
                  style={{ background: v.c, borderRadius: v.r, transform: `rotate(${v.rot})` }}
                />
                <h3 className={s.valueT}>{v.t}</h3>
                <p className={s.valueD}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`wrap section ${s.team}`} aria-labelledby="team-h">
        <div className={s.teamText}>
          <div className="eyebrow">THE TEAM</div>
          <h2 id="team-h" className="h2">12 people. One Slack channel with you.</h2>
          <p className="lede">
            Designers, developers and SEO specialists on one team. No account managers in between:
            you talk directly to the people building your site, on Slack or WhatsApp.
          </p>
          <div>
            <a
              href={whatsappHref(WHATSAPP_DEFAULT_MESSAGE)}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message the team on WhatsApp →
            </a>
          </div>
        </div>
        <figure className={`rise ${s.founder}`}>
          <div className={s.founderPhoto}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/founder.jpg" alt="WebAlchemy founder" width={821} height={1024} loading="lazy" />
          </div>
        </figure>
      </section>

      <section className={`band-white ${s.clients}`} aria-label="Some of our clients">
        <Marquee items={CLIENTS} />
      </section>
    </>
  );
}
