import type { Metadata } from 'next';
import Link from 'next/link';
import { projectsData } from '@/data/projectsData';
import { SITE_URL } from '@/lib/site';
import WorkFilter, { type FilterTile } from './WorkFilter';
import { INDUSTRIES, hostname, industryKey, industryOf, industryTone } from './work';
import styles from './portfolio.module.css';
import FloatField from '@/components/site/motion/FloatField';
import { PeepCrew } from '@/components/site/motion/Peep';

/* Kunal's work index (on the "Work" mock, Work.dc.html). Cards link to
   the live sites until real case studies exist (data/caseStudies.ts). */

export const metadata: Metadata = {
  title: 'Work — Websites I\'ve Designed & Built | Kunal',
  description: 'Portfolio of Kunal, website developer & UI/UX designer in New Delhi: school, clinic, resort, retail and corporate websites, designed in Figma and built to load fast on a phone.',
  alternates: { canonical: '/portfolio' },
};

// BreadcrumbList JSON-LD carried over from the legacy PortfolioPage.
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Portfolio' },
  ],
};

// Real screenshots for the CTA mosaic (decorative).
const MOSAIC_IDS = ['edu-2', 'dental-1', 'comm-1', 'travel-2'];

export default function Page() {
  const total = projectsData.length;
  const industries = INDUSTRIES.filter((i) => projectsData.some((p) => industryOf(p) === i));

  const tiles: FilterTile[] = [
    { key: '', label: 'All', count: total, color: 'var(--ink)' },
    ...industries.map((i) => ({
      key: industryKey(i),
      label: i,
      count: projectsData.filter((p) => industryOf(p) === i).length,
      color: industryTone(i)[0],
    })),
  ];

  const mosaic = MOSAIC_IDS.map((id) => projectsData.find((p) => p.id === id)).filter(Boolean);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className={`wrap has-decor ${styles.hero}`}>
        <FloatField preset="soft" />
        <PeepCrew
          className="hero-crew hero-crew-top"
          peeps={[
            { seed: 'Meera', bg: 'fbf3e2', pose: 'jump', size: 80 },
            { seed: 'Kunal', bg: 'eef1ff', pose: 'wave', size: 94, bubble: 'My recent work!' },
          ]}
        />
        <div className="stack" style={{ gap: 18 }}>
          <p className="eyebrow">
            WORK — {total} PROJECTS · {industries.length} INDUSTRIES
          </p>
          <h1 className="h1-xl">
            Work I&apos;ve <span className="serif">designed &amp; built</span>
          </h1>
        </div>
        <p className="lede" style={{ maxWidth: 480 }}>
          A slice of 200+ projects for schools, clinics, resorts and retailers across Delhi NCR and beyond. Each one
          designed in Figma and built to load fast on a phone. Pick an industry, then open a project to visit the live
          site.
        </p>
      </section>

      <WorkFilter tiles={tiles} total={total}>
        {projectsData.map((p, i) => {
          const industry = industryOf(p);
          const [c, tint] = industryTone(industry);
          return (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`rise ${styles.card}`}
              data-cat={industryKey(industry)}
              style={{ background: tint }}
            >
              <div className={styles.cardTop}>
                <span>{String(i + 1).padStart(3, '0')}</span>
                <span style={{ color: c }}>{industry.toUpperCase()}</span>
              </div>
              <div className="browser">
                <div className="browser-bar" aria-hidden="true">
                  <i /><i /><i />
                  <span className="url">{hostname(p.link)}</span>
                </div>
                <div className={styles.shot}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={`${p.title} website homepage`}
                    width={1898}
                    height={965}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="stack" style={{ gap: 6 }}>
                <h2 className={styles.name}>{p.title}</h2>
                {p.metric && (
                  <span className={styles.type} style={{ color: c }}>
                    {p.metric}
                    {p.area && <span className={styles.area}> · {p.area}</span>}
                  </span>
                )}
              </div>
              <div className={styles.cardFoot}>
                <span>
                  Visit site<span className={styles.srOnly}> (opens in a new tab)</span>
                </span>
                <span aria-hidden="true">↗</span>
              </div>
            </a>
          );
        })}
      </WorkFilter>

      <section className={`wrap ${styles.featureWrap}`}>
        <Link href="/#contact" className={styles.feature}>
          <div className={styles.mosaic} aria-hidden="true">
            {mosaic.map((p) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={p.id} src={p.image} alt="" width={1898} height={965} loading="lazy" decoding="async" />
            ))}
          </div>
          <div className={styles.featureText}>
            <p className="eyebrow-sm" style={{ color: 'var(--blue)' }}>YOUR PROJECT · FREE ESTIMATE</p>
            <h2 className={styles.featureTitle}>Want a website like these? Let&apos;s build yours next.</h2>
            <p className={styles.featureLede}>
              Tell me about your business and I&apos;ll come back within 24 hours with a plan and a fixed quote. No
              obligation, and you talk to me directly.
            </p>
            <span className={styles.featureGo}>Start a project with me →</span>
          </div>
        </Link>
      </section>
    </>
  );
}
