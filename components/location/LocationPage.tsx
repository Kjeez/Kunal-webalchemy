import Link from 'next/link';
import Faq from '@/components/site/Faq';
import { SITE_URL, whatsappHref } from '@/lib/site';
import {
  LOCAL_SERVICES,
  LOCATION_LINKS,
  localWorkFor,
  type LocationData,
} from '@/data/locations';
import LocationMap from './LocationMap';
import s from './LocationPage.module.css';
import FloatField from '@/components/site/motion/FloatField';

/**
 * Location landing page (Claude Design "Location"). Server component;
 * the only client island is the FAQ accordion. The design's city switcher
 * is a row of links between the location routes.
 */
export default function LocationPage({ data }: { data: LocationData }) {
  const breadcrumbLd = data.breadcrumbs && {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: data.breadcrumbs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.label,
      ...(b.href ? { item: `${SITE_URL}${b.href}` } : {}),
    })),
  };
  const jsonLd = breadcrumbLd ? [...data.jsonLd, breadcrumbLd] : data.jsonLd;

  return (
    <>
      {jsonLd.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}

      {/* ---------- hero ---------- */}
      <section className={`has-decor ${s.hero}`} aria-labelledby="loc-h1">
        <FloatField preset="soft" />
        <div className={s.heroCopy}>
          {data.breadcrumbs && (
            <nav aria-label="Breadcrumb" className={s.crumbs}>
              <ol>
                {data.breadcrumbs.map((b) => (
                  <li key={b.label}>
                    {b.href ? <Link href={b.href}>{b.label}</Link> : <span aria-current="page">{b.label}</span>}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <nav aria-label="Locations" className={s.pills}>
            {LOCATION_LINKS.map((l) => (
              <Link
                key={l.slug}
                href={l.href}
                className={s.pill}
                aria-current={l.slug === data.slug ? 'page' : undefined}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <h1 id="loc-h1" className={s.h1}>
            {data.h1Lead} <span className="serif">{data.city}</span>
          </h1>
          <p className="lede-lg" style={{ maxWidth: 540 }}>{data.intro}</p>
          <div className="btnrow">
            <Link href="/contact" className="btn btn-primary">Book a free call →</Link>
            <a href={whatsappHref(data.whatsappMessage)} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </a>
          </div>
          <div className={s.proof}>
            <span><span className="stars" aria-hidden="true">★★★★★</span> 5.0 on Google</span>
            <span>500+ projects delivered</span>
            <span>Based in New Delhi</span>
          </div>
        </div>
        <LocationMap map={data.map} />
      </section>

      {/* ---------- local work ---------- */}
      <section className="band-white" aria-labelledby="loc-work">
        <div className={`wrap section ${s.stack40}`}>
          <div className={s.headRow}>
            <div className={s.headCopy}>
              <div className="eyebrow">LOCAL WORK</div>
              <h2 id="loc-work" className="h2 rise">{data.localHeading}</h2>
            </div>
            <Link href="/portfolio" className="text-link">All projects →</Link>
          </div>
          <div className={s.workGrid}>
            {localWorkFor(data.slug).map((w) => (
              <Link key={w.name} href={w.href ?? '/portfolio'} {...(w.href ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={`${s.workCard} rise`} style={{ background: w.tint }}>
                <div className={s.shot}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={w.image} alt={`${w.name} website homepage`} width={1898} height={965} loading="lazy" />
                </div>
                <h3 className={s.workName}>{w.name}</h3>
                <div className={s.workArea} style={{ color: w.color }}>{w.area}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- about (long-form local copy) ---------- */}
      {data.about && (
        <section className="wrap section-top" aria-labelledby="loc-about">
          <div className="split-start">
            <div className={s.headCopy}>
              <div className="eyebrow">{data.about.eyebrow}</div>
              <h2 id="loc-about" className="h2 rise">{data.about.heading}</h2>
            </div>
            <div className={s.prose}>
              {data.about.paras.map((p) => <p key={p.slice(0, 32)}>{p}</p>)}
            </div>
          </div>
        </section>
      )}

      {/* ---------- NCR: city cards ---------- */}
      {data.cityCards && (
        <section className={`wrap section-top ${s.stack32}`} aria-labelledby="loc-cities">
          <h2 id="loc-cities" className={s.h2sm}>We serve all major cities in Delhi NCR</h2>
          <div className={s.cityGrid}>
            {data.cityCards.map((c) => (
              <Link key={c.name} href={c.href} className={`card ${s.cityCard}`}>
                <span className={s.cityDot} style={{ background: c.color }} aria-hidden="true" />
                <h3 className={s.cityName}>{c.name}</h3>
                <p className={s.cityAreas}>{c.areas}</p>
                <span className={s.cityGo} style={{ color: c.color }}>View {c.name} services <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ---------- areas ---------- */}
      <section className={`wrap section-top ${s.areas}`} aria-labelledby="loc-areas">
        <div className={s.headCopy}>
          <div className="eyebrow">AREAS WE SERVE</div>
          <h2 id="loc-areas" className="h2">Meet in person or work fully online</h2>
          <p className={s.areasLede}>{data.areasLede}</p>
        </div>
        <div className={s.areaWrap}>
          <ul className={s.chips}>
            {data.areas.map((a) => (
              <li key={a.name}>
                {a.href
                  ? <Link href={a.href} className={`${s.area} ${s.areaLink}`}>{a.name} <span aria-hidden="true">→</span></Link>
                  : <span className={s.area}>{a.name}</span>}
              </li>
            ))}
          </ul>
          {data.nearby && (
            <p className={s.nearby}>
              Also serving:{' '}
              {data.nearby.map((n, i) => (
                <span key={n.name}>
                  {n.href ? <Link href={n.href} className="link">{n.name}</Link> : n.name}
                  {i < data.nearby.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          )}
        </div>
      </section>

      {data.areaNotes && (
        <section className="wrap" aria-labelledby="loc-area-notes" style={{ paddingTop: 48 }}>
          <h3 id="loc-area-notes" className={s.notesHead}>Areas we serve across Delhi NCR</h3>
          <div className={`gridlines ${s.notes}`}>
            {data.areaNotes.map((n) => {
              const inner = (
                <>
                  <span className={s.noteName}>{n.name}{n.href && <span className={s.noteArrow} aria-hidden="true"> →</span>}</span>
                  <span className={s.noteText}>{n.description}</span>
                </>
              );
              return n.href
                ? <Link key={n.name} href={n.href} className={`${s.note} ${s.noteLink}`}>{inner}</Link>
                : <div key={n.name} className={s.note}>{inner}</div>;
            })}
          </div>
        </section>
      )}

      {/* ---------- services ---------- */}
      <section className={`wrap section-top ${s.stack32}`} aria-labelledby="loc-services">
        <h2 id="loc-services" className={s.h2sm}>What we build in {data.city}</h2>
        <div className={`gridlines ${s.svcGrid}`}>
          {LOCAL_SERVICES.map((sv, i) => (
            <Link key={sv.href} href={sv.href} className={s.svc}>
              <span className={s.svcTop}>
                <span className={s.svcNum}>0{i + 1}</span>
                <span className={s.svcArrow} aria-hidden="true">→</span>
              </span>
              <span className={s.svcTitle}>{sv.t}</span>
              <span className={s.svcDesc}>{sv.d}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- detailed offerings (Delhi) ---------- */}
      {data.offerings && (
        <section className={`wrap section-top ${s.stack32}`} aria-labelledby="loc-offer">
          <div className={s.headCopy}>
            <h2 id="loc-offer" className={s.h2sm}>{data.offerings.heading}</h2>
            <p className="lede" style={{ maxWidth: 640 }}>{data.offerings.lede}</p>
          </div>
          <div className={s.offerGrid}>
            {data.offerings.items.map((o) => (
              <Link key={o.title} href={o.href} className={`card ${s.offer} rise`}>
                <span className={s.offerSub}>{o.subtitle}</span>
                <h3 className={s.offerTitle}>{o.title}</h3>
                <p className={s.offerDesc}>{o.desc}</p>
                <span className={s.offerGo}>Learn more <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ---------- why us ---------- */}
      {data.reasons && (
        <section className={`wrap section-top ${s.stack32}`} aria-labelledby="loc-why">
          <div className={s.headCopy}>
            <div className="eyebrow">WHY WEBALCHEMY</div>
            <h2 id="loc-why" className={s.h2sm}>{data.reasons.heading}</h2>
            <p className="lede" style={{ maxWidth: 640 }}>{data.reasons.lede}</p>
          </div>
          <div className={`gridlines ${s.whyGrid}`}>
            {data.reasons.items.map((r, i) => (
              <div key={r.t} className={s.why}>
                <span className={s.whyNum}>0{i + 1}</span>
                <h3 className={s.whyTitle}>{r.t}</h3>
                <p className={s.whyText}>{r.d}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ---------- pricing (Delhi) ---------- */}
      {data.pricing && (
        <section className={`wrap section-top ${s.stack32}`} aria-labelledby="loc-price">
          <div className={s.headRow}>
            <div className={s.headCopy}>
              <div className="eyebrow">PRICING</div>
              <h2 id="loc-price" className={s.h2sm}>{data.pricing.heading}</h2>
              <p className="lede" style={{ maxWidth: 640 }}>{data.pricing.lede}</p>
            </div>
            <Link href="/#pricing" className="text-link">See all plans →</Link>
          </div>
          <div className={s.priceGrid}>
            {data.pricing.tiers.map((t) => (
              <div key={t.label} className={`card ${s.price} lift`}>
                <span className={s.priceLabel}>{t.label}</span>
                <span className={s.priceValue}>{t.price}</span>
                <p className={s.priceNote}>{t.note}</p>
              </div>
            ))}
          </div>
          <p className={s.smallNote}>{data.pricing.note}</p>
        </section>
      )}

      {/* ---------- process (Delhi) ---------- */}
      {data.process && (
        <section className={`wrap section-top ${s.stack32}`} aria-labelledby="loc-process">
          <div className={s.headCopy}>
            <div className="eyebrow">PROCESS</div>
            <h2 id="loc-process" className={s.h2sm}>{data.process.heading}</h2>
            <p className="lede">{data.process.lede}</p>
          </div>
          <ol className={s.steps}>
            {data.process.steps.map((st, i) => (
              <li key={st.t} className={`${s.step} rise`}>
                <span className={s.stepNum}>0{i + 1}</span>
                <h3 className={s.stepTitle}>{st.t}</h3>
                <p className={s.stepText}>{st.d}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* ---------- FAQ ---------- */}
      <section className={`section ${s.faqWrap}`} aria-labelledby="loc-faq">
        <h2 id="loc-faq" className={s.h2sm}>{data.faqHeading}</h2>
        <Faq items={data.faqs} jsonLd={data.faqJsonLd} />
      </section>
    </>
  );
}
