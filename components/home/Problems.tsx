import { DARK_SHAPES, PROBLEMS } from './data';
import FloatShapes from './FloatShapes';
import SpeedRace from './SpeedRace';
import s from './home.module.css';

/** Dark "Is your website bleeding revenue?" band: six problems + speed race + audit CTA. */
export default function Problems() {
  return (
    <section className={`band-dark ${s.dark}`} aria-labelledby="problems-h">
      <FloatShapes list={DARK_SHAPES} />
      <div className={`wrap section ${s.darkIn}`}>
        <div className="split">
          <h2 id="problems-h" className="h2 h2-lg rise">
            Is your website <span className={`serif ${s.coral}`} style={{ color: 'var(--coral)' }}>bleeding revenue?</span>
          </h2>
          <p className={s.darkLede}>
            Six problems I fix on almost every site I audit. If two or more sound familiar, you&apos;re losing leads every day.
          </p>
        </div>
        <div className={s.probGrid}>
          {PROBLEMS.map(([t, d], i) => (
            <div key={t} className={`rise ${s.prob}`}>
              <div className={s.probN}>0{i + 1}</div>
              <h3 className={s.probT}>{t}</h3>
              <p className={s.probD}>{d}</p>
            </div>
          ))}
        </div>
        <SpeedRace />
        <div className={s.ctaRow}>
          <a href="#contact" className="btn btn-light" data-magnetic="">Get a free website audit →</a>
          <span className={s.ctaNote}>I&apos;ll personally review your current site and send fixes within 48 hours.</span>
        </div>
      </div>
    </section>
  );
}
