import React from 'react';
import Link from 'next/link';
import { Check } from './icons';

export type PlanFeature =
  | string
  | {
      text: string;
      /** false renders a muted ✕ row (legacy "not included" items). */
      included?: boolean;
      /** Bold emphasis (e.g. "Everything in Starter"). */
      bold?: boolean;
    };

export interface PricingPlan {
  name: string;
  /** Display price, e.g. "₹11,999" — string so currency/format stays verbatim. */
  price: string;
  /** Suffix rendered small after the price, e.g. "/mo" or "One-time payment". */
  priceSuffix?: string;
  description: string;
  features: PlanFeature[];
  /** Link CTA… */
  cta?: { label: string; href: string };
  /** …or any node (e.g. a PopupCta client button). Wins over `cta`. */
  ctaNode?: React.ReactNode;
  /** Highlighted plan (dark card). */
  featured?: boolean;
  /** Small tag on the plan name, e.g. "Most picked". */
  tag?: string;
  /** Small italic line under the CTA (legacy "Best for: …"). */
  footnote?: string;
}

export interface PricingTableProps {
  plans: PricingPlan[];
}

const Cross: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

/**
 * The template's "Clear scope, clear price" plan grid.
 * Server component — all copy arrives via `plans`.
 */
const PricingTable: React.FC<PricingTableProps> = ({ plans }) => (
  <div className="price-grid">
    {plans.map((plan) => (
      <div className={`plan r${plan.featured ? ' feat' : ''}`} key={plan.name}>
        <div className="p-name">
          {plan.name}
          {plan.tag && <span className="p-tag">{plan.tag}</span>}
        </div>
        <div className="p-price">
          {plan.price}
          {plan.priceSuffix && <span> {plan.priceSuffix}</span>}
        </div>
        <p className="p-desc">{plan.description}</p>
        <ul>
          {plan.features.map((f) => {
            const feat = typeof f === 'string' ? { text: f, included: true } : { included: true, ...f };
            return (
              <li key={feat.text} className={feat.included ? undefined : 'off'}>
                {feat.included ? <Check /> : <Cross />}
                {feat.bold ? <b>{feat.text}</b> : feat.text}
              </li>
            );
          })}
        </ul>
        {plan.ctaNode ??
          (plan.cta && (
            <Link href={plan.cta.href} className={`btn ${plan.featured ? 'btn-dark' : 'btn-out'}`}>
              {plan.cta.label}
            </Link>
          ))}
        {plan.footnote && <div className="footnote">{plan.footnote}</div>}
      </div>
    ))}
  </div>
);

export default PricingTable;
