'use client';
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from 'react';
import { prefillLead } from '@/lib/leads';
import { peep, prefersReducedMotion } from './motion';
import s from './home.module.css';

/** [key, label, tier] — g = Growth, p = Premium, e = Enterprise feature. */
const OPTS: [string, string, 'g' | 'p' | 'e'][] = [
  ['ecom', 'E-commerce store', 'g'], ['blog', 'Blog / CMS', 'g'], ['seo', 'Advanced SEO', 'g'],
  ['email', 'Email marketing', 'g'], ['anim', 'Custom animations', 'g'], ['lang', 'Multi-language', 'p'],
  ['crm', 'CRM / ERP integration', 'e'], ['custom', 'Custom functionality', 'e'],
];
const PEEPS = {
  Starter: ['Mia', 'e8f4ec'],
  Growth: ['Kabir', 'eef1ff'],
  Premium: ['Arjun', 'fbf3e2'],
  Enterprise: ['Zara', 'f3ecfb'],
} as const;

/** ₹ with Indian digit grouping (deterministic on server and client). */
const inr = (n: number) => {
  const str = String(Math.round(n));
  const last3 = str.slice(-3);
  const rest = str.slice(0, -3);
  return `₹${rest ? `${rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',')},` : ''}${last3}`;
};

function calc(pages: number, opts: Record<string, boolean>) {
  const sel = OPTS.filter((o) => opts[o[0]]);
  const ent = pages > 20 || sel.some((o) => o[2] === 'e');
  const pre = !ent && (pages > 10 || sel.some((o) => o[2] === 'p'));
  const gro = !ent && !pre && (pages > 5 || sel.length > 0);
  const plan = (ent ? 'Enterprise' : pre ? 'Premium' : gro ? 'Growth' : 'Starter') as keyof typeof PEEPS;
  return { sel, plan, target: ent ? null : pre ? 49999 : gro ? 29999 : 14999 };
}

/** "Price estimator": pages + options → recommended plan, tweened price, prefilled quote. */
export default function Estimator() {
  const [pages, setPages] = useState(5);
  const [opts, setOpts] = useState<Record<string, boolean>>({});
  const [shown, setShown] = useState(14999);
  const shownRef = useRef(14999);
  const { sel, plan, target } = calc(pages, opts);

  useEffect(() => {
    if (target == null) return;
    if (prefersReducedMotion()) { shownRef.current = target; setShown(target); return; }
    const from = shownRef.current;
    const t0 = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / 650);
      const v = from + (target - from) * (1 - Math.pow(1 - p, 3));
      shownRef.current = v;
      setShown(v);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  const gSel = sel.filter((o) => o[2] === 'g').map((o) => o[1]);
  const pSel = sel.filter((o) => o[2] === 'p').map((o) => o[1]);
  const eSel = sel.filter((o) => o[2] === 'e').map((o) => o[1]);
  const incl = plan === 'Starter'
    ? ['Up to 5 pages', 'Mobile-responsive design', 'Free Domain & SSL Certificate', 'Free Hosting', '7-day delivery', '1 month of support']
    : plan === 'Growth'
      ? ['Everything in Starter', 'Up to 10 pages', ...gSel, '3 months of support']
      : plan === 'Premium'
        ? ['Everything in Growth', 'Up to 20 pages', 'Custom UI/UX design', ...gSel, ...pSel, '6 months of support']
        : ['Everything in Premium', ...(pages > 20 ? ['Unlimited pages'] : []), ...gSel, ...pSel, ...eSel, 'Dedicated project manager'];

  const go = (e: React.MouseEvent) => {
    e.preventDefault();
    const extras = sel.length ? `, ${sel.map((o) => o[1]).join(', ')}` : '';
    const details = `Estimate: ${plan} plan (${target ? inr(target) : 'custom quote'}), ${pages} pages${extras}.`;
    prefillLead({ service: 'Website Development', details });
  };

  const [seed, bg] = PEEPS[plan];
  const pagesLabel = `${pages} ${pages === 1 ? 'page' : 'pages'}`;

  return (
    <div id="estimate" className={`rise ${s.anchor} ${s.est}`}>
      <div className={s.estL}>
        <div className="stack" style={{ gap: 12 }}>
          <div className={s.estK}>PRICE ESTIMATOR</div>
          <h3 className={`h3 ${s.estH}`}>Not sure which plan? Build your site and see the price.</h3>
        </div>
        <div className="stack" style={{ gap: 12 }}>
          <div className={s.estRow}>
            <label htmlFor="est-pages">How many pages?</label>
            <output htmlFor="est-pages" className={s.estVal}>{pagesLabel}</output>
          </div>
          <input
            id="est-pages"
            className={s.range}
            type="range"
            min={1}
            max={30}
            value={pages}
            aria-valuetext={pagesLabel}
            onChange={(e) => setPages(+e.target.value)}
          />
        </div>
        <fieldset className="stack" style={{ gap: 12, border: 0, padding: 0, margin: 0, minWidth: 0 }}>
          <legend style={{ fontSize: 15, padding: 0, marginBottom: 12 }}>What do you need?</legend>
          <div className="chiprow">
            {OPTS.map(([k, label]) => {
              const on = !!opts[k];
              return (
                <button
                  key={k}
                  type="button"
                  className={s.estOpt}
                  aria-pressed={on}
                  onClick={() => setOpts((o) => ({ ...o, [k]: !on }))}
                >
                  <span aria-hidden="true">{on ? '✓' : '+'}</span> {label}
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>

      <div className={s.estCard}>
        <div className={s.estCardK}>RECOMMENDED PLAN</div>
        <div className={s.estPlanRow} aria-live="polite">
          <div className={s.estPlan}>{plan} plan</div>
          <img key={plan} src={peep(seed, bg)} alt="" width={60} height={60} className={s.estPeep} />
        </div>
        <div className={s.estPrice}>
          {target ? (
            <>
              <span className={s.srOnly}>{inr(target)}</span>
              <span aria-hidden="true">{inr(shown)}</span>
            </>
          ) : 'Custom'}
        </div>
        <div className={s.estNote}>
          {target ? 'One-time payment. Free domain & hosting included.' : 'Tailored to your needs. We quote after a free call.'}
        </div>
        <ul className={s.estIncl}>
          {incl.map((it) => (
            <li key={it}><span className={s.check} aria-hidden="true">✓</span><span>{it}</span></li>
          ))}
        </ul>
        <a href="#contact" className={s.estGo} data-magnetic="" onClick={go}>Get this quote →</a>
      </div>
    </div>
  );
}
