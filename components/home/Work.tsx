import Link from 'next/link';
import { projectsData, type Project } from '@/data/projectsData';
import { TONES } from '@/lib/site';
import PrefillButton from './PrefillButton';
import { SERVICES_LIST, STACK } from './data';
import WorkGrid, { type WorkItem } from './WorkGrid';
import s from './home.module.css';

/* Homepage filter buckets (design categories) for projectsData categories. */
const CAT: Record<Project['category'], string> = {
  Educational: 'Education',
  Dental: 'Healthcare',
  Healthcare: 'Healthcare',
  Wellness: 'Healthcare',
  Interiors: 'Interiors',
  Professional: 'Professional',
  'E-commerce': 'Retail',
  Fashion: 'Retail',
  Food: 'Retail',
  Travel: 'Corporate',
  Events: 'Corporate',
  Manufacturing: 'Corporate',
  Corporate: 'Corporate',
  Creative: 'Corporate',
};
const CAT_TONE: Record<string, readonly [string, string]> = {
  Education: TONES.blue,
  Healthcare: TONES.green,
  Interiors: TONES.violet,
  Professional: TONES.ink,
  Retail: TONES.rust,
  Corporate: TONES.amber,
};
const CATS = ['All', 'Education', 'Healthcare', 'Interiors', 'Professional', 'Retail', 'Corporate'];
/* "All" = the design's first eight + Hamta Orchard, for a 3×3 grid. */
const FEATURED = ['edu-1', 'edu-2', 'edu-3', 'comm-1', 'dental-1', 'dental-2', 'dental-3', 'corp-1', 'travel-2'];
const PER_FILTER = 9;

const host = (url: string) => {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return ''; }
};

function toItem(p: Project): WorkItem {
  const cat = CAT[p.category];
  const [c, tint] = CAT_TONE[cat];
  return { id: p.id, title: p.title, type: p.metric || p.category, cat, image: p.image, host: host(p.link), c, tint };
}

function groups(): Record<string, WorkItem[]> {
  // travel-4 (Earthen Pods): domain no longer resolves, kept off the homepage.
  const live = projectsData.filter((p) => p.id !== 'travel-4');
  const out: Record<string, WorkItem[]> = {
    All: FEATURED.map((id) => live.find((p) => p.id === id)).filter(Boolean).map(toItem),
  };
  for (const c of CATS.slice(1)) {
    out[c] = live.filter((p) => CAT[p.category] === c).slice(0, PER_FILTER).map(toItem);
  }
  return out;
}

/** "02 — Recent work" filterable grid. */
export function Work() {
  return (
    <section id="work" className={`wrap section ${s.anchor} ${s.workSec}`} aria-labelledby="work-h">
      <WorkGrid
        cats={CATS}
        groups={groups()}
        intro={
          <div key="intro" className={`${s.headStack} ${s.workIntro}`}>
            <p className="eyebrow">SELECTED WORK</p>
            <h2 id="work-h" className="h2 h2-lg rise">Things I&apos;ve <span className="serif">designed &amp; built</span></h2>
            <p className="lede">A slice of 200+ projects: schools, clinics, stores and brands. Every one designed in Figma and built to load fast on a phone.</p>
          </div>
        }
      />
      <div className={s.center}>
        <Link href="/portfolio" className="btn btn-round">View all projects ↗</Link>
      </div>
    </section>
  );
}

/** Looping "design → code" card: a Figma frame, then the same layout as code. */
function DesignToCode() {
  return (
    <div className={s.d2c} aria-hidden="true">
      <div className={s.d2cBar}>
        <span className={s.d2cTab}>Design</span>
        <span className={s.d2cTab}>Code</span>
        <i className={s.d2cPill} />
      </div>
      <div className={s.d2cBody}>
        <div className={s.d2cDesign}>
          <i className={s.dNav} /><i className={s.dH1} /><i className={s.dH2} /><i className={s.dBtn} /><i className={s.dImg} />
          <span className={s.dSel}><b /><b /><b /><b /><em>Hero · 1440</em></span>
        </div>
        <div className={s.d2cCode}>
          <span><em>&lt;section</em> class=<q>hero</q><em>&gt;</em></span>
          <span>&nbsp;&nbsp;<em>&lt;h1&gt;</em>Websites that sell<em>&lt;/h1&gt;</em></span>
          <span>&nbsp;&nbsp;<em>&lt;a</em> class=<q>btn</q><em>&gt;</em>Book now<em>&lt;/a&gt;</em></span>
          <span><em>&lt;/section&gt;</em></span>
          <span className={s.d2cOk}>✓ PageSpeed 98 · mobile</span>
        </div>
      </div>
    </div>
  );
}

/** "Expertise": sticky intro + service rows that prefill the contact form. */
export function Services() {
  return (
    <section id="expertise" className={`band-white ${s.anchor}`} aria-labelledby="services-h">
      <div className={`wrap section ${s.sideGrid}`}>
        <div className={s.stickyCol}>
          <p className="eyebrow">EXPERTISE</p>
          <h2 id="services-h" className="h2 h2-lg rise">Design <span className="serif">and</span> code, under one roof</h2>
          <p className="lede" style={{ maxWidth: 440 }}>
            Strong UI/UX thinking, pixel-perfect visuals in Figma, Photoshop and Illustrator, built on every major CMS.
            Pick one to get a tailored quote.
          </p>
          <DesignToCode />
        </div>
        <div className={s.svcList}>
          {SERVICES_LIST.map((sv, i) => (
            <PrefillButton key={sv.t} service={sv.service} className={s.svcRow}>
              <span className={s.svcN} style={{ color: sv.c }}>0{i + 1}</span>
              <span className={s.svcBody}>
                <span className={s.svcTitle}>
                  <span className={s.svcDot} style={{ background: sv.c }} aria-hidden="true" />
                  <span className={s.svcT}>{sv.t}</span>
                  {sv.popular && <span className="badge">Most requested</span>}
                </span>
                <span className={s.svcD}>{sv.d}</span>
                <span className={s.svcTags}>{sv.tags}</span>
              </span>
              <span className={s.svcGo}>Get quote <span className={s.svcArrow} aria-hidden="true">→</span></span>
            </PrefillButton>
          ))}
        </div>
      </div>
    </section>
  );
}

/** "Why work with me" cards. */
export function WhyUs() {
  return (
    <section className={`wrap section ${s.whySec}`} aria-labelledby="why-h">
      <div className={s.headStack} style={{ maxWidth: 720 }}>
        <p className="eyebrow">WHY WORK WITH ME</p>
        <h2 id="why-h" className="h2 h2-lg rise">What you get when you hire me</h2>
      </div>
      <div className={s.whyGrid}>
        <div className={`rise ${s.why}`}>
          <div className={s.whyBig} style={{ color: 'var(--green)' }}>90+</div>
          <h3 className={s.whyT}>Lightning fast performance</h3>
          <p className={s.whyD}>I build for a 90+ Google PageSpeed score on mobile, for better SEO and lower bounce rates.</p>
        </div>
        <div className={`rise ${s.why}`}>
          <div className={s.whyBig} style={{ color: 'var(--blue)' }}>7 days</div>
          <h3 className={s.whyT}>Live in a week</h3>
          <p className={s.whyD}>Starter sites go from brief to live in about 7 days. Larger builds get a fixed timeline on day one.</p>
        </div>
        <div className={`rise ${s.why}`}>
          <div className={s.whyBig}>1:1</div>
          <h3 className={s.whyT}>Direct access to me</h3>
          <p className={s.whyD}>No account managers playing &ldquo;telephone&rdquo;. The person you talk to on WhatsApp is the one designing and building your site.</p>
        </div>
        <div className={`rise ${s.why}`}>
          <h3 className={s.whyT}>Designer + developer</h3>
          <p className={s.whyD}>No outdated templates and no hand-off gaps. I design it and build it, on the platform that fits your business.</p>
          <div className={s.stackTags}>
            {STACK.map((t) => <span key={t} className={s.stackTag}>{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
