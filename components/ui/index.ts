// Barrel export for the new-design component library.
// Server components unless noted; Nav/Effects/AccordionGroup are client.

export { default as Nav } from './Nav';
export type { NavProps } from './Nav';

export { default as Hero } from './Hero';
export type { HeroProps, HeroCta, HeroFloat } from './Hero';

export { default as Section } from './Section';
export type { SectionProps, SectionAccent } from './Section';

export { default as StatsStrip } from './StatsStrip';
export type { StatsStripProps, Stat } from './StatsStrip';

export { ProjectCard, ProjectGrid } from './ProjectCard';
export type { ProjectCardProps, ProjectGridProps } from './ProjectCard';

export { default as ServiceAccordion } from './ServiceAccordion';
export type { ServiceAccordionProps, ServiceAccordionItem } from './ServiceAccordion';

export { default as FaqAccordion } from './FaqAccordion';
export type { FaqAccordionProps, FaqAccordionItem } from './FaqAccordion';

export { default as PricingTable } from './PricingTable';
export type { PricingTableProps, PricingPlan } from './PricingTable';

export { default as CtaBanner } from './CtaBanner';
export type { CtaBannerProps } from './CtaBanner';

export { default as Footer } from './Footer';
export type { FooterProps } from './Footer';

export { default as Breadcrumbs } from './Breadcrumbs';
export type { BreadcrumbsProps, BreadcrumbItem } from './Breadcrumbs';

export { default as AccordionGroup } from './AccordionGroup';
export { default as Effects } from './Effects';
export { default as CursorFx } from './CursorFx';
export { ArrowNE, Check, Star } from './icons';
