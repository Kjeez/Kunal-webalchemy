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
            <p className="eyebrow">02 — RECENT WORK</p>
            <h2 id="work-h" className="h2 h2-lg rise">Built for scale</h2>
            <p className="lede">Explore our recent work. We build digital experiences that drive real business growth.</p>
          </div>
        }
      />
      <div className={s.center}>
        <Link href="/portfolio" className="btn btn-round">View all projects ↗</Link>
      </div>
    </section>
  );
}

/** "03 — Our expertise": sticky intro + service rows that prefill the contact form. */
export function Services() {
  return (
    <section id="services" className={`band-white ${s.anchor}`} aria-labelledby="services-h">
      <div className={`wrap section ${s.sideGrid}`}>
        <div className={s.stickyCol}>
          <p className="eyebrow">03 — OUR EXPERTISE</p>
          <h2 id="services-h" className="h2 h2-lg rise">Digital solutions for modern businesses</h2>
          <p className="lede" style={{ maxWidth: 440 }}>
            We combine design, technology, and strategy to build products that win. Pick a service to get a tailored quote.
          </p>
          <p style={{ fontSize: 15, color: 'var(--muted-2)' }}>
            In Delhi NCR? See our <Link className="link" href="/website-developer-delhi">website developer in Delhi</Link> page, or browse <Link className="link" href="/services">all services</Link>.
          </p>
        </div>
        <div className={s.svcList}>
          {SERVICES_LIST.map((sv, i) => (
            <PrefillButton key={sv.t} service={sv.t} className={s.svcRow}>
              <span className={s.svcN}>0{i + 1}</span>
              <span className={s.svcBody}>
                <span className={s.svcTitle}>
                  <span className={s.svcT}>{sv.t}</span>
                  {sv.popular && <span className="badge">Most popular</span>}
                </span>
                <span className={s.svcD}>{sv.d}</span>
                <span className={s.svcTags}>{sv.tags}</span>
              </span>
              <span className={s.svcGo}>Get quote <span aria-hidden="true">→</span></span>
            </PrefillButton>
          ))}
        </div>
      </div>
    </section>
  );
}

/** "04 — The WebAlchemy advantage" cards. */
export function WhyUs() {
  return (
    <section className={`wrap section ${s.whySec}`} aria-labelledby="why-h">
      <div className={s.headStack} style={{ maxWidth: 720 }}>
        <p className="eyebrow">04 — THE WEBALCHEMY ADVANTAGE</p>
        <h2 id="why-h" className="h2 h2-lg rise">Why visionaries partner with us</h2>
      </div>
      <div className={s.whyGrid}>
        <div className={`rise ${s.why}`}>
          <div className={s.whyBig} style={{ color: 'var(--green)' }}>99</div>
          <h3 className={s.whyT}>Lightning fast performance</h3>
          <p className={s.whyD}>Our sites consistently score 98+ on Google PageSpeed, ensuring better SEO and lower bounce rates.</p>
        </div>
        <div className={`rise ${s.why}`}>
          <div className={s.whyBig} style={{ color: 'var(--blue)' }}>7 days</div>
          <h3 className={s.whyT}>Live in a week</h3>
          <p className={s.whyD}>Starter sites go from brief to live in 7 days. Larger builds get a fixed timeline on day one.</p>
        </div>
        <div className={`rise ${s.why}`}>
          <div className={s.whyBig}>1:1</div>
          <h3 className={s.whyT}>Direct access</h3>
          <p className={s.whyD}>No account managers playing &ldquo;telephone&rdquo;. You get a direct Slack channel with your design and dev team.</p>
        </div>
        <div className={`rise ${s.why}`}>
          <h3 className={s.whyT}>Modern tech stack</h3>
          <p className={s.whyD}>No outdated templates. We build on the platform that fits your business.</p>
          <div className={s.stackTags}>
            {STACK.map((t) => <span key={t} className={s.stackTag}>{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
