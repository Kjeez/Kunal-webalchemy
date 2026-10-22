import type { Metadata } from 'next';
import Link from 'next/link';
import { Marquee } from '@/components/site';
import { whatsappHref, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/site';
import s from './about.module.css';
import FloatField from '@/components/site/motion/FloatField';
import RotatingWord from '@/components/home/RotatingWord';
import ToolBadge from '@/components/home/ToolBadge';
import { CMS_TOOLS, CODE_TOOLS, DESIGN_TOOLS } from '@/components/home/data';
import { PeekOver, PeepCrew } from '@/components/site/motion/Peep';

/* About — Kunal's story on the "About" layout from the WebAlchemy design
   system: hero, recent builds, numbers, story, how I work, toolbox, photo. */

export const metadata: Metadata = {
  title: 'About Kunal | Website Developer & UI/UX Designer in New Delhi',
  description:
    'I’m Kunal, a website developer and UI/UX designer in New Delhi. 5+ years and 200+ websites designed in Figma and Photoshop and built on WordPress, Shopify, Webflow, Wix and Next.js.',
  alternates: { canonical: '/about' },
};

const SHOTS = [
  { src: '/portfolio-screenshots/krmangalam.jpg', url: 'krmangalamvikaspuri.com', alt: 'KR Mangalam Vikaspuri school website', w: 1896, h: 966 },
  { src: '/portfolio-screenshots/hamta.jpg', url: 'hamtaorchardandresort.in', alt: 'Hamta Orchard Resort website', w: 1896, h: 965 },
  { src: '/portfolio-screenshots/giholding.jpg', url: 'gigroupholding.com', alt: 'GI Group Holding website', w: 1897, h: 964 },
];

const STATS = [
  { k: 'YEARS', v: '5+', l: 'Designing & building', c: 'var(--ink)' },
  { k: 'PROJECTS', v: '200+', l: 'Websites & apps delivered', c: 'var(--blue)' },
  { k: 'TOOLBOX', v: '20+', l: 'Design tools, CMSs & frameworks', c: 'var(--green)' },
  { k: 'SATISFACTION', v: '98%', l: 'Clients who would refer me', c: 'var(--rust)' },
];

const VALUES = [
  { t: 'Direct access', d: 'No account managers playing "telephone". You message me on WhatsApp and talk to the person designing and building your site.', c: 'var(--blue-soft)', r: '50%', rot: '0deg' },
  { t: 'Fixed quotes', d: 'You get a fixed quote before I start. No hidden fees and no surprise invoices.', c: 'var(--gold)', r: '6px', rot: '45deg' },
  { t: 'Speed matters', d: 'Starter sites can go live in about 7 days, and every site is built for 90+ on Google PageSpeed.', c: 'var(--mint)', r: '6px', rot: '12deg' },
  { t: 'Built to convert', d: 'Every page is designed to turn visitors into calls, WhatsApps and enquiries, not just to look nice.', c: 'var(--coral)', r: '50%', rot: '0deg' },
];

const TOOL_GROUPS = [
  { k: 'DESIGN', c: 'var(--violet)', tools: DESIGN_TOOLS },
  { k: 'CMS & NO-CODE', c: 'var(--green)', tools: CMS_TOOLS },
  { k: 'CODE', c: 'var(--blue)', tools: CODE_TOOLS },
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
            { seed: 'Kunal', bg: 'eef1ff', pose: 'wave', size: 96, bubble: 'Namaste!' },
            { seed: 'Arjun', bg: 'fbf3e2', pose: 'bob', size: 84 },
            { seed: 'Tara', bg: 'e8f4ec', pose: 'jump', size: 76 },
          ]}
        />
        <div className="eyebrow">ABOUT ME</div>
        <h1 className={s.title}>
          Hi, I&apos;m Kunal. I design &amp; build websites that{' '}
          <RotatingWord inline words={['sell', 'get found', 'win trust', 'feel alive']} />
        </h1>
        <p className={s.intro}>
          I&apos;m a website developer and UI/UX designer based in New Delhi. I take businesses from a blank Figma
          file to a fast, live website, and I&apos;m the one you talk to at every step.
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
            <span>A few recent builds</span>
            <Link href="/portfolio" className="text-link">See all work →</Link>
          </figcaption>
        </figure>
      </section>

      <section className={`wrap ${s.statsWrap}`} aria-label="Kunal in numbers">
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
          <div className="eyebrow">MY STORY</div>
          <h2 id="story-h" className="h2 rise">Part designer, part developer, fully hands-on</h2>
        </div>
        <div className={s.storyText}>
          <p>
            For more than five years I&apos;ve been designing and building websites for schools, clinics, resorts,
            manufacturers and growing brands, more than 200 of them so far, many through my studio, WebAlchemy.
          </p>
          <p>
            Every project starts the same way: understanding who your customers are and what should make them
            pick up the phone. Then I design the pages in Figma, prepare visuals in Photoshop and Illustrator,
            and build on whatever fits best: WordPress, Shopify, Webflow, Wix, Framer or a custom Next.js site.
          </p>
          <p>
            Because I do both the design and the code, nothing gets lost in a hand-off, and the site you approve
            is the site that goes live.
          </p>
        </div>
      </section>

      <section className="band-dark" aria-labelledby="values-h">
        <div className={`wrap section ${s.values}`}>
          <h2 id="values-h" className="h2" style={{ maxWidth: 720 }}>How I work</h2>
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

      <section className={`wrap section ${s.toolsSec}`} aria-labelledby="tools-h">
        <div className="stack" style={{ gap: 14, maxWidth: 640 }}>
          <div className="eyebrow">TOOLBOX</div>
          <h2 id="tools-h" className="h2 rise">The tools I reach for</h2>
          <p className="lede">Strong UI/UX instincts, pixel-level design skills and every major CMS.</p>
        </div>
        <div className={s.toolCols}>
          {TOOL_GROUPS.map((g) => (
            <div key={g.k} className={`rise ${s.toolCol}`}>
              <div className={s.toolK} style={{ color: g.c }}>{g.k}</div>
              <ul className={s.toolList}>
                {g.tools.map((t) => (
                  <li key={t[0]}><ToolBadge tool={t} size={28} decorative />{t[0]}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={`wrap section ${s.team}`} aria-labelledby="team-h">
        <div className={s.teamText}>
          <div className="eyebrow">THE PERSON BEHIND THE PIXELS</div>
          <h2 id="team-h" className="h2">One person. One WhatsApp chat with you.</h2>
          <p className="lede">
            No account managers in between: you talk directly to me, the person designing and building your
            site, from the first call to launch day and after.
          </p>
          <div className={s.teamLinks}>
            <a
              href={whatsappHref(WHATSAPP_DEFAULT_MESSAGE)}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message me on WhatsApp →
            </a>
            <Link href="/contact" className="text-link">Start a project →</Link>
          </div>
        </div>
        <figure className={`rise has-peek ${s.founder}`}>
          <PeekOver seed="Meera" size={84} side="right" bubble="That's Kunal!" />
          <div className={s.founderPhoto}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/founder.jpg" alt="Kunal, website developer and UI/UX designer" width={821} height={1024} loading="lazy" />
          </div>
        </figure>
      </section>

      <section className={`band-white ${s.clients}`} aria-label="Some of my clients">
        <Marquee items={CLIENTS} />
      </section>
    </>
  );
}
