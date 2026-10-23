import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Faq from '@/components/site/Faq';
import { JsonLd, PlanCards, StepCards } from '@/components/service/ServicePage';
import { SITE_URL, TONES, whatsappHref } from '@/lib/site';
import { INDUSTRIES, industryProjects, type IndustryData } from '@/data/industries';
import { industryOf, industryTone } from '@/app/(site)/portfolio/work';
import s from '@/components/service/service.module.css';
import loc from '@/components/location/LocationPage.module.css';
import FloatField from '@/components/site/motion/FloatField';
import { PeekOver } from '@/components/site/motion/Peep';

/* Industry landing page. Same building blocks as the service template
   (components/service) plus the location page's work grid, fed by the
   real client sites in data/projectsData. Server component; the only
   client island is the FAQ accordion. */

type Vars = CSSProperties & Record<`--${string}`, string | number>;

const SHAPES = [
  { c: 'var(--blue)', r: '50%', rot: '0deg' },
  { c: 'var(--green)', r: '6px', rot: '45deg' },
  { c: 'var(--gold)', r: '6px', rot: '12deg' },
  { c: 'var(--coral)', r: '50%', rot: '0deg' },
  { c: 'var(--violet)', r: '6px', rot: '0deg' },
  { c: 'var(--rust)', r: '6px', rot: '45deg' },
];

export function industryMetadata(i: IndustryData): Metadata {
  return {
    title: i.meta.title,
    description: i.meta.description,
    alternates: { canonical: i.path },
    openGraph: { title: i.meta.title, description: i.meta.description, url: `${SITE_URL}${i.path}` },
  };
}

export default function IndustryPage({ industry: ind }: { industry: IndustryData }) {
  const projects = industryProjects(ind);
  const shown = projects.slice(0, 8);
  const [ink] = TONES[ind.tone];
  const others = INDUSTRIES.filter((o) => o.slug !== ind.slug);
  const glance = [{ k: 'Sites built in this industry', v: String(projects.length) }, ...ind.glance];

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: `Websites for ${ind.name.toLowerCase()}` },
    ],
  };
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Website design and development',
    name: ind.meta.title.replace(/ \| WebAlchemy$/, ''),
    description: ind.meta.description,
    provider: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'WebAlchemy', url: SITE_URL },
    areaServed: { '@type': 'Country', name: 'India' },
    url: `${SITE_URL}${ind.path}`,
    offers: { '@type': 'Offer', price: '14999', priceCurrency: 'INR', description: 'Starter website, one-time' },
  };

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={serviceLd} />

      {/* ---- hero ---- */}
      <section className={`wrap has-decor ${s.hero}`} aria-labelledby="ind-title">
        <FloatField preset="hero" />
        <div className={s.heroCopy}>
          <nav aria-label="Breadcrumb">
            <ol className={s.crumbs}>
              <li><Link href="/services">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className={s.crumbCurrent} aria-current="page">{ind.name}</li>
            </ol>
          </nav>
          <h1 id="ind-title" className={`h1 ${s.h1}`}>
            {ind.h1[0]}
            <span className="serif">{ind.h1[1]}</span>
            {ind.h1[2]}
          </h1>
          <p className={`lede-lg ${s.lede}`}>{ind.lede}</p>
          <div className="btnrow">
            <Link href="/contact" className="btn btn-primary">Get a free estimate →</Link>
            <a href={whatsappHref(ind.whatsappMessage)} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </a>
          </div>
        </div>
        <aside className={`has-peek ${s.glance}`} aria-label="At a glance">
          <PeekOver seed="Neha" side="left" bubble="Fixed price!" />
          <div className={s.glanceLabel}>AT A GLANCE</div>
          <dl className={s.glanceList}>
            {glance.map((g) => (
              <div key={g.k} className={s.glanceRow}>
                <dt>{g.k}</dt>
                <dd className={g.v.length > 14 ? s.small : undefined}>{g.v}</dd>
              </div>
            ))}
          </dl>
          <Link href="/#pricing" className={s.glanceCta}>See all plans →</Link>
        </aside>
      </section>

      {/* ---- real client work ---- */}
      <section className="band-white" aria-labelledby="ind-work">
        <div className={`wrap section ${s.stack40}`}>
          <div className={s.plansHead}>
            <div className={s.head}>
              <div className="eyebrow">OUR WORK</div>
              <h2 id="ind-work" className="h2 rise">{ind.work.heading}</h2>
              <p className={s.headIntro}>{ind.work.intro}</p>
            </div>
            <Link href="/portfolio" className="text-link">All {projects.length} projects →</Link>
          </div>
          <div className={loc.workGrid}>
            {shown.map((p) => {
              const [color, tint] = industryTone(industryOf(p));
              return (
                <a
                  key={p.id}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${loc.workCard} rise`}
                  style={{ background: tint }}
                >
                  <div className={loc.shot}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt={`${p.title} website homepage`} width={1898} height={965} loading="lazy" />
                  </div>
                  <h3 className={loc.workName}>{p.title}</h3>
                  <div className={loc.workArea} style={{ color }}>
                    {[p.area, p.metric].filter(Boolean).join(' · ').toUpperCase()}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- problems ---- */}
      <section className={`wrap section-top ${s.stack40}`} aria-labelledby="ind-problems">
        <div className={s.head}>
          <div className="eyebrow" style={{ color: ink }}>THE PROBLEM</div>
          <h2 id="ind-problems" className="h2 rise">{ind.problems.heading}</h2>
          <p className={s.headIntro}>{ind.problems.intro}</p>
        </div>
        <div className={`gridlines ${s.included}`} style={{ '--cols': 2, '--cols-md': 2 } as Vars}>
          {ind.problems.items.map((it) => (
            <div key={it.t} className={s.incItem}>
              <h3 className={s.incTitle} style={{ paddingTop: 0 }}>{it.t}</h3>
              <p className={s.incText}>{it.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- included ---- */}
      <section className={`wrap section-top ${s.stack40}`} aria-labelledby="ind-included">
        <div className={s.head}>
          <div className="eyebrow">WHAT&apos;S INCLUDED</div>
          <h2 id="ind-included" className="h2 rise">{ind.included.heading}</h2>
          <p className={s.headIntro}>{ind.included.intro}</p>
        </div>
        <div className={`gridlines ${s.gridlinesHover} ${s.included}`} style={{ '--cols': 3, '--cols-md': 2 } as Vars}>
          {ind.included.items.map((it, i) => {
            const sh = SHAPES[i % SHAPES.length];
            return (
              <div key={it.t} className={s.incItem}>
                <div className={s.shape} aria-hidden="true" style={{ background: sh.c, borderRadius: sh.r, transform: `rotate(${sh.rot})` }} />
                <h3 className={s.incTitle}>{it.t}</h3>
                <p className={s.incText}>{it.d}</p>
                {it.bullets && (
                  <ul className={s.bullets}>
                    {it.bullets.map((b) => <li key={b}>✓ {b}</li>)}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ---- site map ---- */}
      <section className="wrap section-top split-start" aria-labelledby="ind-pages">
        <div className={s.head}>
          <div className="eyebrow">SITE STRUCTURE</div>
          <h2 id="ind-pages" className="h2 rise">{ind.pages.heading}</h2>
          <p className={s.headIntro}>{ind.pages.intro}</p>
        </div>
        <ul className={s.rows}>
          {ind.pages.items.map((row) => (
            <li key={row.t}>
              <div className={s.row}>
                <span className={s.dot} style={{ background: ink }} aria-hidden="true" />
                <span className={s.rowText}>
                  <span className={s.rowTitle}>{row.t}</span>
                  <span className={s.rowDesc}>{row.d}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ---- process ---- */}
      <section className={`wrap section-top ${s.stack40}`} aria-labelledby="ind-process">
        <div className={s.head}>
          <div className="eyebrow">HOW IT WORKS</div>
          <h2 id="ind-process" className="h2 rise">{ind.process.heading}</h2>
        </div>
        <StepCards steps={ind.process.steps} />
      </section>

      {/* ---- pricing ---- */}
      <section className={`wrap section-top ${s.stack40}`} aria-labelledby="ind-pricing">
        <div className={s.plansHead}>
          <div className={s.head}>
            <div className="eyebrow">PRICING</div>
            <h2 id="ind-pricing" className="h2 rise">{ind.pricing.heading}</h2>
            <p className={s.headIntro}>{ind.pricing.intro}</p>
          </div>
          <Link href="/blog/website-development-cost-india" className="text-link">What a website costs in India →</Link>
        </div>
        <PlanCards plans={ind.pricing.plans} />
        <p className={s.planNote}>{ind.pricing.note}</p>
      </section>

      {/* ---- faq ---- */}
      <section className="wrap section split-start" aria-labelledby="ind-faq">
        <div className={s.faqAside}>
          <h2 id="ind-faq" className="h2">{ind.faq.heading}</h2>
          <div className={s.others}>
            <div className={`eyebrow-sm ${s.othersLabel}`}>OTHER INDUSTRIES</div>
            <nav aria-label="Other industries" className="chiprow">
              {others.map((o) => (
                <Link key={o.slug} href={o.path} className="chip">{o.name}</Link>
              ))}
            </nav>
          </div>
        </div>
        <Faq items={ind.faq.items} jsonLd />
      </section>
    </>
  );
}
