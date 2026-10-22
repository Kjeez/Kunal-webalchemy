import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Faq from '@/components/site/Faq';
import { SITE_URL, TONES, whatsappHref, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/site';
import { projectsData } from '@/data/projectsData';
import {
  SERVICES,
  SERVICE_ORDER,
  type ServiceData,
  type ServiceItem,
  type ServicePlan,
} from '@/data/services';
import s from './service.module.css';
import FloatField from '@/components/site/motion/FloatField';
import Peep, { PeekOver } from '@/components/site/motion/Peep';

/* Service page template — implements the Claude Design "Service" mock
   (Service.dc.html) for Kunal's service routes. Content lives in
   data/services.ts; the only client island is the shared Faq accordion. */

// Little rotated shapes on the "What's included" cards (design order).
const SHAPES: { c: string; r: string; rot: string }[] = [
  { c: 'var(--blue)', r: '50%', rot: '0deg' },
  { c: 'var(--green)', r: '6px', rot: '45deg' },
  { c: 'var(--gold)', r: '6px', rot: '12deg' },
  { c: 'var(--coral)', r: '50%', rot: '0deg' },
  { c: 'var(--violet)', r: '6px', rot: '0deg' },
  { c: 'var(--rust)', r: '6px', rot: '45deg' },
];

// Step card tints: [background, accent].
const STEP_TINTS: [string, string][] = [
  ['var(--blue-tint)', 'var(--blue)'],
  ['var(--amber-tint)', 'var(--amber)'],
  ['var(--green-tint)', 'var(--green)'],
  ['var(--violet-tint)', 'var(--violet)'],
];

type Vars = CSSProperties & Record<`--${string}`, string | number>;

const colsFor = (n: number) => (n % 3 === 0 ? 3 : 2);

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function serviceMetadata(svc: ServiceData): Metadata {
  return {
    title: svc.meta.title,
    description: svc.meta.description,
    ...(svc.meta.keywords ? { keywords: svc.meta.keywords } : {}),
    alternates: { canonical: svc.path },
  };
}

/** HOW IT WORKS tinted step cards (also used on /services). */
export function StepCards({ steps }: { steps: { when: string; t: string; d: string }[] }) {
  return (
    <ol className={s.steps} style={{ '--cols': steps.length >= 4 ? 4 : 3, listStyle: 'none', margin: 0, padding: 0 } as Vars}>
      {steps.map((st, i) => {
        const [tint, accent] = STEP_TINTS[i % STEP_TINTS.length];
        return (
          <li key={st.t} className={`${s.step} rise`} style={{ background: tint }}>
            <div className={s.stepTop}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ color: accent, textAlign: 'right' }}>{st.when}</span>
            </div>
            <h3 className={s.stepTitle}>{st.t}</h3>
            <p className={s.stepText}>{st.d}</p>
          </li>
        );
      })}
    </ol>
  );
}

/** PRICING plan cards (also used on /services). */
export function PlanCards({ plans }: { plans: ServicePlan[] }) {
  return (
    <div className={s.plans}>
      {plans.map((p) => (
        <div key={p.name} className={`${s.plan} ${p.featured ? s.planDark : ''}`}>
          <h3 className={s.planName}>
            <span>{p.name}</span>
            {p.badge && <span className={s.planBadge}>{p.badge}</span>}
          </h3>
          <div className={`${s.planPrice} ${p.price.length > 9 ? s.planPriceSm : ''}`}>
            {p.price}
            {p.unit && <span className={s.planUnit}>{p.unit}</span>}
          </div>
          <ul className={s.planList}>
            {p.features.map((f) => (
              <li key={f}>✓ {f}</li>
            ))}
          </ul>
          <Link href="/contact" className={s.planCta}>
            {p.cta} →
          </Link>
        </div>
      ))}
    </div>
  );
}

function ItemGrid({ items, shapes }: { items: ServiceItem[]; shapes: boolean }) {
  const cols = colsFor(items.length);
  return (
    <div
      className={`gridlines ${s.gridlinesHover} ${s.included}`}
      style={{ '--cols': cols, '--cols-md': items.length % 2 === 0 ? 2 : 1 } as Vars}
    >
      {items.map((it, i) => {
        const sh = SHAPES[i % SHAPES.length];
        return (
          <div key={it.t} className={s.incItem}>
            {shapes && (
              <div
                className={s.shape}
                aria-hidden="true"
                style={{ background: sh.c, borderRadius: sh.r, transform: `rotate(${sh.rot})` }}
              />
            )}
            <h3 className={s.incTitle} style={shapes ? undefined : { paddingTop: 0 }}>{it.t}</h3>
            <p className={s.incText}>{it.d}</p>
            {it.bullets && (
              <ul className={s.bullets}>
                {it.bullets.map((b) => (
                  <li key={b}>✓ {b}</li>
                ))}
              </ul>
            )}
            {it.link && (
              <Link href={it.link.href} className={s.incLink}>
                {it.link.label} →
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function ServicePage({ service: svc }: { service: ServiceData }) {
  const others = SERVICE_ORDER.filter((k) => k !== svc.key).map((k) => SERVICES[k]);

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: svc.crumb },
    ],
  };
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.schema.name,
    provider: { '@type': 'Person', name: 'Kunal', jobTitle: 'Website Developer & UI/UX Designer', url: SITE_URL },
    ...(svc.schema.areaServed ? { areaServed: svc.schema.areaServed } : {}),
    description: svc.schema.description,
    url: `${SITE_URL}${svc.path}`,
  };

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={serviceLd} />

      {/* ---- hero ---- */}
      <section className={`wrap has-decor ${s.hero}`} aria-labelledby="svc-title">
        <FloatField preset="hero" />
        <div className={s.heroCopy}>
          <nav aria-label="Breadcrumb">
            <ol className={s.crumbs}>
              <li><Link href="/services">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className={s.crumbCurrent} aria-current="page">{svc.num} {svc.name}</li>
            </ol>
          </nav>
          <h1 id="svc-title" className={`h1 ${s.h1}`}>
            {svc.h1[0]}
            <span className="serif">{svc.h1[1]}</span>
            {svc.h1[2]}
          </h1>
          <p className={`lede-lg ${s.lede}`}>{svc.lede}</p>
          <div className="btnrow">
            <Link href="/contact" className="btn btn-primary">Get a free quote →</Link>
            <Link href="/portfolio" className="btn btn-ghost">See my work</Link>
          </div>
        </div>
        <aside className={`has-peek ${s.glance}`} aria-label="At a glance">
          <PeekOver seed="Neha" side="left" bubble="Talk to Kunal directly!" />
          <div className={s.glanceLabel}>AT A GLANCE</div>
          <dl className={s.glanceList}>
            {svc.glance.map((g) => (
              <div key={g.k} className={s.glanceRow}>
                <dt>{g.k}</dt>
                <dd className={g.v.length > 14 ? s.small : undefined}>{g.v}</dd>
              </div>
            ))}
          </dl>
          <Link href={svc.glanceCta.href} className={s.glanceCta}>{svc.glanceCta.label}</Link>
        </aside>
      </section>

      {/* ---- what's included ---- */}
      <section className="band-white">
        <div className={`wrap section ${s.stack40}`}>
          <div className={s.head}>
            <div className="eyebrow">WHAT&apos;S INCLUDED</div>
            <h2 className="h2 rise">{svc.included.heading}</h2>
            {svc.included.intro && <p className={s.headIntro}>{svc.included.intro}</p>}
          </div>
          <ItemGrid items={svc.included.items} shapes />
        </div>
      </section>

      {/* ---- details (what I build / platforms) ---- */}
      {svc.details && (
        <section className={`wrap section-top ${s.stack40}`}>
          <div className={s.head}>
            <div className="eyebrow">{svc.details.eyebrow}</div>
            <h2 className="h2 rise">{svc.details.heading}</h2>
            {svc.details.intro && <p className={s.headIntro}>{svc.details.intro}</p>}
          </div>
          <ItemGrid items={svc.details.items} shapes={false} />
        </section>
      )}

      {/* ---- who it's for ---- */}
      <section className="wrap section-top split-start">
        <div className={s.head}>
          <div className="eyebrow">WHO IT&apos;S FOR</div>
          <h2 className="h2 rise">{svc.audience.heading}</h2>
          {svc.audience.intro && <p className={s.headIntro}>{svc.audience.intro}</p>}
        </div>
        <ul className={s.rows}>
          {svc.audience.rows.map((row) => {
            const color = TONES[row.tone][0];
            const n = row.categories
              ? projectsData.filter((p) => row.categories!.includes(p.category)).length
              : 0;
            const counted = !!row.categories && n > 0;
            return (
              <li key={row.t}>
                <Link href={counted ? '/portfolio' : '/contact'} className={s.row}>
                  <span className={s.dot} style={{ background: color }} aria-hidden="true" />
                  <span className={s.rowText}>
                    <span className={s.rowTitle}>{row.t}</span>
                    <span className={s.rowDesc}>{row.d}</span>
                  </span>
                  <span className={s.rowMeta} style={{ color }}>
                    {counted ? `${n} project${n === 1 ? '' : 's'} →` : 'Enquire →'}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ---- recent projects (legacy case studies) ---- */}
      {svc.projects && (
        <section className={`wrap section-top ${s.stack40}`}>
          <div className={s.plansHead}>
            <div className={s.head}>
              <div className="eyebrow">RECENT PROJECTS</div>
              <h2 className="h2 rise">{svc.projects.heading}</h2>
              {svc.projects.intro && <p className={s.headIntro}>{svc.projects.intro}</p>}
            </div>
            <Link href="/portfolio" className="text-link">View all projects →</Link>
          </div>
          <div className={`gridlines ${s.cases}`}>
            {svc.projects.items.map((c) => (
              <article key={c.title} className={s.case}>
                <div className={s.caseMeta}>{c.industry} · {c.location}</div>
                <h3 className={s.caseTitle}>{c.title}</h3>
                <p className={s.caseClient}>{c.client}</p>
                <ul className={s.caseResults}>
                  {c.results.map((r) => <li key={r}>{r}</li>)}
                </ul>
                <div className={s.caseTags}>
                  {c.stack.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ---- how it works ---- */}
      <section className={`wrap section-top ${s.stack40}`}>
        <div className={s.head}>
          <div className="eyebrow">HOW IT WORKS</div>
          <h2 className="h2 rise">{svc.process.heading}</h2>
          {svc.process.intro && <p className={s.headIntro}>{svc.process.intro}</p>}
        </div>
        <StepCards steps={svc.process.steps} />
      </section>

      {/* ---- working with me (replaces the old price list) ---- */}
      {svc.quote && (
        <section className="wrap section-top">
          <div className={`has-decor ${s.quote}`}>
            <FloatField preset="dark" />
            <div className={s.quoteCopy}>
              <div className="eyebrow" style={{ color: 'var(--blue-soft)' }}>WORKING WITH ME</div>
              <h2 className="h2 rise">{svc.quote.heading}</h2>
              <p className={s.quoteIntro}>{svc.quote.intro}</p>
              <div className="btnrow">
                <Link href="/contact" className="btn btn-primary">Get a free quote →</Link>
                <a href={whatsappHref(WHATSAPP_DEFAULT_MESSAGE)} className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
                  WhatsApp me
                </a>
              </div>
            </div>
            <ul className={s.quoteList}>
              {svc.quote.points.map((pt) => <li key={pt} className="rise">{pt}</li>)}
            </ul>
            <span className={s.quotePeep} data-motion>
              <Peep seed="Kunal" bg="9fb0ff" pose="wave" size={84} bubble="Let's talk!" />
            </span>
          </div>
        </section>
      )}

      {/* ---- legacy price list (only the redirected agency services have one) ---- */}
      {!svc.quote && svc.pricing && (
        <section className={`wrap section-top ${s.stack40}`}>
          <div className={s.head}>
            <div className="eyebrow">PRICING</div>
            <h2 className="h2 rise">{svc.pricing.heading}</h2>
            {svc.pricing.intro && <p className={s.headIntro}>{svc.pricing.intro}</p>}
          </div>
          <PlanCards plans={svc.pricing.plans} />
          {svc.pricing.note && <p className={s.planNote}>{svc.pricing.note}</p>}
        </section>
      )}

      {/* ---- faq ---- */}
      <section className="wrap section split-start">
        <div className={s.faqAside}>
          <h2 className="h2">{svc.faq.heading}</h2>
          <div className={s.others}>
            <div className={`eyebrow-sm ${s.othersLabel}`}>OTHER SERVICES</div>
            <nav aria-label="Other services" className="chiprow">
              {others.map((o) => (
                <Link key={o.key} href={o.path} className="chip">{o.chip}</Link>
              ))}
            </nav>
          </div>
        </div>
        <Faq items={svc.faq.items} jsonLd />
      </section>
    </>
  );
}
