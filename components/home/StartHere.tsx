/* eslint-disable @next/next/no-img-element */
import { STEPS, peep } from './data';
import s from './home.module.css';
import Peep from '@/components/site/motion/Peep';

/** "How it works" — sticky intro + three steps on a scroll-filled progress line. */
export function HowItWorks() {
  return (
    <section id="how" className={`wrap section-top ${s.anchor} ${s.sideGrid}`} aria-labelledby="how-h">
      <div className={s.stickyCol}>
        <p className="eyebrow">HOW I WORK</p>
        <h2 id="how-h" className="h2 h2-lg rise">From first call to live site in three steps</h2>
        <p className="lede" style={{ maxWidth: 440 }}>
          No long contracts and no runaround. You talk to me, the person building your site, at every step.
        </p>
        <a href="#contact" className="btn btn-primary" data-magnetic="" style={{ alignSelf: 'start', marginTop: 6 }}>
          Book your free call →
        </a>
      </div>
      <ol className={s.steps} style={{ listStyle: 'none', margin: 0 }}>
        <li aria-hidden="true" className={s.lineBase} />
        <li aria-hidden="true" className={s.lineFill} />
        {/* a character that rides down the progress line as you scroll */}
        <li aria-hidden="true" className="travel-track" data-motion>
          <span className="traveller"><Peep seed="Asha" bg="eef1ff" pose="still" size={46} /></span>
        </li>
        {STEPS.map((st) => (
          <li key={st.n} className={s.step}>
            <span className={s.stepDot} aria-hidden="true">{st.n}</span>
            <div className={s.stepWhen}>{st.when}</div>
            <div className={s.stepTitleRow}>
              <img src={peep(st.seed, st.bg)} alt="" width={60} height={60} loading="lazy" className={s.stepAvatar} style={{ background: `#${st.bg}` }} />
              <h3 className={s.stepT}>{st.t}</h3>
            </div>
            <p className={s.stepD}>{st.d}</p>
            <div className={s.tags}>
              {st.items.map((it) => <span key={it} className="tag">{it}</span>)}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
