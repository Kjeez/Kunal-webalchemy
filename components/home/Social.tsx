/* eslint-disable @next/next/no-img-element */
import Marquee from '@/components/site/Marquee';
import { BAND_A, BAND_B, REVIEWS, peep } from './data';
import s from './home.module.css';
import Peep from '@/components/site/motion/Peep';

const BAND_ITEM = { fontSize: 22, fontWeight: 600, color: 'inherit' } as const;

/** The two crossed diagonal marquee bands. */
export function Bands() {
  return (
    <div className={s.bands} aria-hidden="true">
      <span className="band-rider" data-motion>
        <Peep seed="Kabir" bg="ffffff" pose="bob" size={58} />
      </span>
      <div className={s.bandA}>
        <Marquee items={BAND_A} duration={30} seps={['#ffd25e', '#fff', '#ff8a6b']} itemStyle={BAND_ITEM} />
      </div>
      <div className={s.bandB}>
        <Marquee items={BAND_B} duration={34} reverse seps={['#9fb0ff', '#7fd6a0', '#e3a008']} itemStyle={BAND_ITEM} />
      </div>
    </div>
  );
}

/** "Don't just take our word for it" — featured review + two more. */
export function Testimonials() {
  const [featured, ...others] = REVIEWS;
  return (
    <section className="band-white" aria-labelledby="reviews-h">
      <div className={`wrap section ${s.tSec}`}>
        <div className={s.headRow}>
          <h2 id="reviews-h" className={`h2 h2-lg rise ${s.tH}`}>
            Don&apos;t just take <span className="serif">our word for it</span>
          </h2>
          <p className={s.tRating}><span className="stars" aria-hidden="true">★★★★★</span> Rated 4.9/5 by our clients</p>
        </div>

        <div className={s.tFeature}>
          <div className={s.tCard} aria-hidden="true">
            <div className={s.tCardTop}><span>WEBALCHEMY</span><span>CLIENT PROJECT</span></div>
            <div className={s.tCardArt}>
              {featured.shot ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img className={s.tCardShot} src={featured.shot} alt="" width={1280} height={651} loading="lazy" />
              ) : (
                <>
                  <span className={s.tCardMark}>&ldquo;</span>
                  <span className="stars">★★★★★</span>
                </>
              )}
            </div>
            <div className={s.tCo}>{featured.co}</div>
            <div className={s.tMetric}>
              <span className={s.tMetricV}>5.0</span>
              <span className={s.tMetricL}>CLIENT RATING</span>
            </div>
          </div>
          <figure className={s.tQuoteCol}>
            <blockquote className={s.tQuote}>&ldquo;{featured.q}&rdquo;</blockquote>
            <figcaption className={s.tWho}>
              <img src={peep(featured.name)} alt="" width={48} height={48} loading="lazy" />
              <div className={s.tWhoText}>
                <div className={s.tWhoName}>{featured.name}</div>
                <div className={s.tWhoCo}>{featured.co.toUpperCase()}</div>
              </div>
            </figcaption>
          </figure>
        </div>

        <div className={s.tOthers}>
          {others.map((r) => (
            <figure key={r.name} className={s.tFig}>
              <div>
                <div className={s.tFigV}>5.0</div>
                <div className={s.tFigL}>CLIENT RATING</div>
              </div>
              <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
              <blockquote className={s.tFigQ}>&ldquo;{r.q}&rdquo;</blockquote>
              <figcaption className={s.tFigCap}>
                <img src={peep(r.name, 'eef1ff')} alt="" width={44} height={44} loading="lazy" />
                <div className={s.tFigWho}>
                  <div style={{ fontWeight: 600 }}>{r.name}</div>
                  <div style={{ color: 'var(--muted-2)' }}>{r.co}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
