import React from 'react';
import Link from 'next/link';
import { Check } from './icons';

export interface PricingPlan {
  name: string;
  /** Display price, e.g. "₹11,999" — string so currency/format stays verbatim. */
  price: string;
  /** Suffix rendered small after the price, e.g. "/mo" or "+ GST". */
  priceSuffix?: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  /** Highlighted plan (dark card). */
  featured?: boolean;
  /** Small tag on the plan name, e.g. "Most picked". */
  tag?: string;
}

export interface PricingTableProps {
  plans: PricingPlan[];
}

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
          {plan.features.map((f) => (
            <li key={f}>
              <Check />
              {f}
            </li>
          ))}
        </ul>
        <Link href={plan.cta.href} className={`btn ${plan.featured ? 'btn-dark' : 'btn-out'}`}>
          {plan.cta.label}
        </Link>
      </div>
    ))}
  </div>
);

export default PricingTable;
