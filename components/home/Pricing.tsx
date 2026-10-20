import { GUARANTEES, TIERS } from './data';
import Estimator from './Estimator';
import s from './home.module.css';

/** "06 — Investment": plan tiers, price estimator (#estimate) and the written guarantee. */
export default function Pricing() {
  return (
    <section id="pricing" className={`wrap section ${s.anchor} ${s.priceSec}`} aria-labelledby="pricing-h">
      <div className={s.priceHead}>
        <p className="eyebrow">06 — INVESTMENT</p>
        <h2 id="pricing-h" className="h2 h2-lg rise">Transparent pricing. No hidden fees.</h2>
        <p className="lede">Choose the package that fits your current stage. We scale with you.</p>
      </div>

      <div className={s.tiers}>
        {TIERS.map((t) => (
          <div key={t.name} className={`rise ${s.tier}${t.dark ? ` ${s.tierDark}` : ''}`}>
            <div className={s.tierTop}>
              <h3 className={s.tierName}>{t.name}</h3>
              {t.badge && <span className={s.tierBadge}>{t.badge}</span>}
            </div>
            <p className={`${s.tierTag} ${s.tierMuted}`}>{t.tag}</p>
            <div className={s.tierPrice}>
              <span className={s.tierPriceV}>{t.price}</span>
              <span className={`${s.tierNote} ${s.tierMuted}`}>{t.note}</span>
            </div>
            <a href="#contact" className={s.tierCta}>{t.cta} →</a>
            <ul className={s.tierList}>
              {t.features.map((f) => (
                <li key={f.t} className={`${f.on ? '' : s.off}${f.b ? ` ${s.strong}` : ''}`}>
                  <span aria-hidden="true">{f.on ? '✓' : '–'}</span>
                  <span>{!f.on && <span className={s.srOnly}>Not included: </span>}{f.t}</span>
                </li>
              ))}
            </ul>
            <p className={`${s.tierBest} ${s.tierMuted}`}>Best for: {t.best}</p>
          </div>
        ))}
      </div>

      <Estimator />

      <div className="stack" style={{ gap: 20 }}>
        <div className={s.guarHead}>
          <h3 className={s.guarH}>Our guarantee, in writing</h3>
          <p className={s.guarNote}>Included with every plan. <a className="link" href="#contact">Schedule a free consultation.</a></p>
        </div>
        <div className={s.guarGrid}>
          {GUARANTEES.map((g) => (
            <div key={g.t} className={`card rise ${s.guar}`}>
              <div className={s.guarShape} aria-hidden="true" style={{ borderRadius: g.radius, background: g.c, transform: `rotate(${g.rot})` }} />
              <h4 className={s.guarT}>{g.t}</h4>
              <p className={s.guarD}>{g.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
