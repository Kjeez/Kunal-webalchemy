import type { Metadata } from 'next';
import {
  Hero,
  Section,
  StatsStrip,
  ProjectCard,
  ProjectGrid,
  ServiceAccordion,
  FaqAccordion,
  PricingTable,
  CtaBanner,
  Breadcrumbs,
} from '@/components/ui';

/**
 * TEMPORARY component-library styleguide — NOT a real page.
 * noindex + absent from the sitemap; uses newdesign.html placeholder
 * copy purely to exercise every component. DELETE before the migration
 * is declared done. Real pages must never source copy from here.
 */
export const metadata: Metadata = {
  title: 'Design preview (internal) | WebAlchemy',
  robots: { index: false, follow: false },
};

export default function DesignPreviewPage() {
  return (
    <>
      <Hero
        eyebrow="Component library preview"
        title={[
          'Design, build',
          <>
            <span className="amp">&amp;</span> grow brands
          </>,
          <>
            worth remembering<span className="reg">®</span>
          </>,
        ]}
        sub={
          <>
            One studio for the whole journey — brand, websites, development, SEO,
            content &amp; marketing. <span className="soft">Joined-up, not bolted-on.</span>
          </>
        }
        primaryCta={{ label: 'Start a project', href: '/contact' }}
        secondaryCta={{ label: 'View work', href: '/portfolio' }}
        floats={[
          { kind: 'star', style: { top: '15%', left: '5%', width: 32, height: 32 }, color: 'var(--orange)', d: 4 },
          { kind: 'pill', text: 'Est. 2016', style: { top: '14%', right: '5%' }, rot: '5deg', d: 1 },
          { kind: 'pill', text: 'Design & dev & growth', style: { top: '73%', left: '3%' }, rot: '-5deg', color: 'var(--green)', d: 2 },
          { kind: 'pill', text: 'Remote & worldwide', style: { top: '71%', right: '4%' }, rot: '4deg', dark: true, d: 3 },
          { kind: 'star', style: { top: '87%', left: '13%', width: 24, height: 24 }, color: 'var(--violet)', d: 5 },
        ]}
      />

      <StatsStrip
        stats={[
          { value: 120, suffix: '+', label: 'Projects shipped' },
          { value: 180, suffix: '%', label: 'Avg. organic growth' },
          { value: 9, label: 'Years in business' },
          { value: 40, suffix: '+', label: 'Brands partnered' },
        ]}
      />

      <Section
        index="01"
        kicker="Selected work"
        heading="Recent projects."
        aside="A few partnerships where design, build and growth pulled in the same direction — and the numbers followed."
        accent="orange"
      >
        <ProjectGrid>
          <ProjectCard title="Meridian Bank" category="Brand & Website" metric="+212% sign-ups" />
          <ProjectCard title="Verdant" category="E-commerce & Dev" metric="+38% AOV" />
          <ProjectCard title="Cadence Music" category="Brand & Campaign" metric="4.1M reach" />
          <ProjectCard title="Habitat" category="SEO & Content" metric="+180% organic" />
        </ProjectGrid>
      </Section>

      <Section
        index="02"
        kicker="Capabilities"
        heading={
          <>
            Five things, <span className="mk b">one</span> team.
          </>
        }
        aside="Take the whole stack or a single stretch of it — the pieces are built to fit together either way."
        accent="blue"
      >
        <ServiceAccordion
          items={[
            {
              title: 'Design',
              body: "Brand identity, art direction and interface design that make people stop, look and trust. We design for taste and for conversion — the two aren't enemies.",
              tags: ['Branding', 'UI / UX', 'Design systems', 'Art direction'],
            },
            {
              title: 'Development',
              body: 'Fast, accessible, hand-built websites and web apps on modern, maintainable foundations. Search-ready and performant from the first commit.',
              tags: ['Web apps', 'Headless CMS', 'E-commerce', 'Performance'],
            },
            {
              title: 'SEO',
              body: 'Technical foundations, content strategy and authority-building that compound over time. Beautiful means nothing if nobody can find it.',
              tags: ['Technical SEO', 'Content strategy', 'Analytics'],
            },
          ]}
        />
      </Section>

      <Section
        index="03"
        kicker="The studio"
        heading={
          <>
            An ambitious team
            <br />
            for your vision.
          </>
        }
        aside="A compact, senior crew — strategists, designers, engineers and marketers who like sitting at the same table."
        variant="dark"
        accent="yellow"
      >
        {/* TODO: needs content — team photos / names (left blank per decision) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <span className="pill">Curiosity first</span>
          <span className="pill">Craft obsessed</span>
          <span className="pill">Radically honest</span>
          <span className="pill">Deadline serious</span>
        </div>
      </Section>

      <Section
        index="04"
        kicker="Pricing"
        heading={
          <>
            Clear scope, <span className="mk v">clear</span> price.
          </>
        }
        aside="Fixed-scope engagements to start. Bigger builds are quoted after a short discovery call — no surprise invoices."
        accent="violet"
      >
        <PricingTable
          plans={[
            {
              name: 'Launch',
              price: '$2,990',
              description: 'A sharp one-page site to get a new idea live, fast.',
              features: ['Single-page design & build', 'Copywriting included', 'Basic on-page SEO', '2-week turnaround'],
              cta: { label: 'Choose Launch', href: '/contact' },
            },
            {
              name: 'Growth',
              tag: 'Most picked',
              price: '$4,990',
              description: 'A full multi-page site built to be found, felt and to convert.',
              features: ['Up to 8 pages, custom design', 'CMS & content system', 'Technical SEO + analytics', '30 days post-launch support'],
              cta: { label: 'Choose Growth', href: '/contact' },
              featured: true,
            },
            {
              name: 'Partner',
              price: '$8,990',
              priceSuffix: '/mo',
              description: 'An embedded team for brands that never stop shipping.',
              features: ['Ongoing design & dev', 'Content & campaign calendar', 'Monthly growth reporting', 'Priority Slack channel'],
              cta: { label: 'Choose Partner', href: '/contact' },
            },
          ]}
        />
      </Section>

      <Section
        index="05"
        kicker="FAQ"
        heading="Before we start."
        aside="The questions we get most. Anything else — just ask."
        accent="pink"
        className="pt-0"
      >
        <FaqAccordion
          emitJsonLd={false /* preview only — never emit schema for placeholder copy */}
          items={[
            {
              question: 'How long does a typical project take?',
              answer:
                "A one-page Launch site is about two weeks. A full Growth build runs four to eight weeks depending on scope and how quickly we get content and feedback. We'll give you a firm timeline after discovery.",
            },
            {
              question: 'Do we work directly with your team?',
              answer:
                'Always. No account-manager telephone game — you work directly with the designers, engineers and marketers making the thing, from first sketch to launch day.',
            },
            {
              question: 'Can you take just one service, like SEO?',
              answer:
                'Yes. The five capabilities are designed to fit together, but each stands on its own. Plenty of clients start with one and grow the engagement from there.',
            },
          ]}
        />
      </Section>

      <div className="wrap" style={{ paddingBottom: 24 }}>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Web Development' },
          ]}
        />
      </div>

      <CtaBanner
        heading={
          <>
            Let&apos;s build something <span className="mk o strong">great.</span>
          </>
        }
        text="Tell us what you're building — we'll design, build & grow it with you."
        proof={
          <>
            <b>100+ clients</b> scaled with us
          </>
        }
      />
    </>
  );
}
