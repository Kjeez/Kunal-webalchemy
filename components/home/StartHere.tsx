/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from 'react';
import { START_ROWS, STEPS, peep } from './data';
import PrefillButton from './PrefillButton';
import s from './home.module.css';

/** "01 — Start here" problem → first-step table. Rows prefill the contact form. */
export function StartHere() {
  return (
    <section id="start" className={`wrap section-top ${s.anchor} ${s.startSec}`} aria-labelledby="start-h">
      <div className="split" style={{ gap: '20px 56px' }}>
        <div className={s.headStack}>
          <p className="eyebrow">01 — START HERE</p>
          <h2 id="start-h" className="h2 h2-lg rise">Pick the one that sounds like you</h2>
        </div>
        <p className={`lede ${s.maxLede}`}>
          Six ways in, sorted by the problem you have today. Each one starts small and commits you to nothing.
        </p>
      </div>
      <div className={s.startTable}>
        <div className={s.startHead} aria-hidden="true">
          <span>YOU HAVE</span>
          <span>START WITH</span>
          <span>LEADS TO</span>
          <span />
        </div>
        {START_ROWS.map((r) => (
          <PrefillButton key={r.have} service={r.service} className={`rise ${s.startRow}`}>
            <span
              style={{ display: 'contents', '--c': r.c, '--tint': r.tint } as CSSProperties}
            >
              <span className={`${s.cell} ${s.cellHave}`}>
                {r.have}
                <span className={s.haveArrow} aria-hidden="true">→</span>
              </span>
              <span className={`${s.cell} ${s.cellStart}`}>
                <span className={s.cellStartT}>{r.start}</span>
                <span className={s.cellDetail}>{r.detail}</span>
              </span>
              <span className={`${s.cell} ${s.cellLeads}`}>
                <span className={s.cellLeadsT}><span className={s.srOnly}>Leads to: </span>{r.leads}</span>
                <span className={s.cellPrice}>{r.price}</span>
              </span>
              <span className={`${s.cell} ${s.cellArrow}`} aria-hidden="true">→</span>
            </span>
          </PrefillButton>
        ))}
      </div>
    </section>
  );
}

/** "How it works" — sticky intro + three steps on a scroll-filled progress line. */
export function HowItWorks() {
  return (
    <section id="how" className={`wrap section-top ${s.anchor} ${s.sideGrid}`} aria-labelledby="how-h">
      <div className={s.stickyCol}>
        <p className="eyebrow">HOW IT WORKS</p>
        <h2 id="how-h" className="h2 h2-lg rise">From first call to live site in three steps</h2>
        <p className="lede" style={{ maxWidth: 440 }}>
          No long contracts and no runaround. You talk to the people building your site at every step.
        </p>
        <a href="#contact" className="btn btn-primary" data-magnetic="" style={{ alignSelf: 'start', marginTop: 6 }}>
          Book your free call →
        </a>
      </div>
      <ol className={s.steps} style={{ listStyle: 'none', margin: 0 }}>
        <li aria-hidden="true" className={s.lineBase} />
        <li aria-hidden="true" className={s.lineFill} />
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
