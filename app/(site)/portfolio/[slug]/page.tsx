import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projectsData';
import { CASE_STUDIES, getCaseStudy, type CaseStudyImage } from '@/data/caseStudies';
import { TONES, type Tone } from '@/lib/site';
import { hostname, industryOf, industryTone } from '../work';
import styles from './case.module.css';

/* Case study template — Claude Design "Case Study" (Case Study.dc.html).
   Driven entirely by data/caseStudies.ts; every section renders only when
   its data exists. With no entries, no pages are generated. */

export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

const projectFor = (projectId: string) => projectsData.find((p) => p.id === projectId);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  const project = cs && projectFor(cs.projectId);
  if (!cs || !project) return {};
  return {
    title: `${project.title} — Case Study | WebAlchemy`,
    description: cs.summary,
    alternates: { canonical: `/portfolio/${slug}` },
    openGraph: { title: `${project.title} — Case Study`, description: cs.summary, images: [cs.heroImage?.src ?? project.image] },
  };
}

const RESULT_TONES: Tone[] = ['blue', 'green', 'amber'];

function GalleryItem({ img }: { img: CaseStudyImage }) {
  const layout = img.layout ?? 'standard';
  return (
    <figure className={`${styles.galleryItem} ${styles[layout]}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" decoding="async" />
    </figure>
  );
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  const project = cs && projectFor(cs.projectId);
  if (!cs || !project) notFound();

  const industry = industryOf(project);
  const hero = cs.heroImage ?? { src: project.image, width: 1898, height: 965 };
  const next = cs.nextSlug ? getCaseStudy(cs.nextSlug) : undefined;
  const nextProject = next && projectFor(next.projectId);
  const nextIndustry = nextProject ? industryOf(nextProject) : undefined;

  return (
    <>
      <section className={`wrap ${styles.hero}`}>
        <nav aria-label="Breadcrumb" className={styles.crumbs}>
          <Link href="/portfolio">Work</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" style={{ color: 'var(--ink)' }}>{project.title}</span>
        </nav>
        <div className={styles.heroGrid}>
          <div className="stack" style={{ gap: 16 }}>
            <p className="eyebrow">CASE STUDY · {industry.toUpperCase()}</p>
            <h1 className="h1-xl">{project.title}</h1>
            <p className={styles.summary}>{cs.summary}</p>
          </div>
          {cs.meta?.length > 0 && (
            <dl className={styles.meta}>
              {cs.meta.map((m) => (
                <div key={m.label}>
                  <dt>{m.label.toUpperCase()}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      <section className="wrap">
        <div className={styles.frame}>
          <div className={styles.frameBar}>
            <span style={{ background: 'var(--coral)' }} />
            <span style={{ background: 'var(--gold)' }} />
            <span style={{ background: 'var(--mint)' }} />
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.frameUrl}>
              {hostname(project.link)} ↗
            </a>
          </div>
          <div className={styles.frameShot}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={hero.src} alt={`${project.title} website homepage`} width={hero.width} height={hero.height} />
          </div>
        </div>
      </section>

      {cs.results?.length > 0 && (
        <section className={`wrap ${styles.results}`} aria-label="Results">
          <div className="gridlines stats">
            {cs.results.map((r, i) => {
              const c = TONES[r.tone ?? RESULT_TONES[i % RESULT_TONES.length]][0];
              return (
                <div key={r.label} className="stat">
                  <span className="k" style={{ color: c }}>{r.label.toUpperCase()}</span>
                  <span className="v" style={{ color: c }}>{r.value}</span>
                  <span className="l">{r.note}</span>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {cs.story?.length > 0 && (
        <section className={`wrap ${styles.story}`}>
          {cs.story.map((s, i) => (
            <div key={s.title} className={`rise ${styles.chapter}`}>
              <div className={styles.chapterHead}>
                <p className="eyebrow">{String(i + 1).padStart(2, '0')}</p>
                <h2 className="h3">{s.title}</h2>
              </div>
              <div className={styles.chapterBody}>
                <p>{s.body}</p>
                {s.tags?.length > 0 && (
                  <ul className={styles.tags}>
                    {s.tags.map((t) => (
                      <li key={t} className="tag">{t}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </section>
      )}

      {cs.gallery?.length > 0 && (
        <section
          className={`wrap ${styles.gallery}`}
          aria-label="Gallery"
          style={cs.story?.length > 0 ? undefined : { paddingTop: 'clamp(64px, 8vw, 104px)' }}
        >
          {cs.gallery.map((img) => (
            <GalleryItem key={img.src} img={img} />
          ))}
        </section>
      )}

      {cs.quote && (
        <section className={styles.quote}>
          {cs.quote.rating > 0 && (
            <div className="stars" style={{ fontSize: 40, letterSpacing: 4 }} role="img" aria-label={`${cs.quote.rating} out of 5 stars`}>
              {'★'.repeat(Math.min(5, Math.round(cs.quote.rating)))}
            </div>
          )}
          <blockquote className={styles.quoteText}>&ldquo;{cs.quote.text}&rdquo;</blockquote>
          <div className={styles.quoteBy}>
            {cs.quote.photo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={cs.quote.photo} alt="" width={48} height={48} loading="lazy" />
            )}
            <div>
              <div style={{ fontWeight: 600 }}>{cs.quote.name}</div>
              <div className={styles.quoteRole}>
                {cs.quote.role.toUpperCase()}, {project.title.toUpperCase()}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className={`wrap ${styles.nextWrap}`} style={cs.quote ? undefined : { paddingTop: 'clamp(72px, 9vw, 120px)' }}>
        {next && nextProject ? (
          <Link href={`/portfolio/${next.slug}`} className={styles.next} style={{ background: industryTone(nextIndustry)[1] }}>
            <div className="stack" style={{ gap: 8 }}>
              <span className="eyebrow-sm" style={{ color: industryTone(nextIndustry)[0] }}>
                NEXT PROJECT · {nextIndustry.toUpperCase()}
              </span>
              <span className={styles.nextTitle}>{nextProject.title}</span>
            </div>
            <span className={styles.nextGo} aria-hidden="true">→</span>
          </Link>
        ) : (
          <Link href="/portfolio" className={styles.next} style={{ background: TONES.amber[1] }}>
            <div className="stack" style={{ gap: 8 }}>
              <span className="eyebrow-sm" style={{ color: TONES.amber[0] }}>MORE WORK</span>
              <span className={styles.nextTitle}>See all projects</span>
            </div>
            <span className={styles.nextGo} aria-hidden="true">→</span>
          </Link>
        )}
      </section>
    </>
  );
}
