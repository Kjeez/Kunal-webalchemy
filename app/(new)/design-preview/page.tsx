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
  Reel,
} from '@/components/ui';

/* SVG project-thumb mockups, verbatim from newdesign.html */
const thumbMeridian = (
  <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="150" fill="#fff" /><rect width="200" height="24" fill="#FBF5EE" />
    <circle cx="13" cy="12" r="3" fill="#FF6A2C" /><circle cx="23" cy="12" r="3" fill="#E9E6DC" /><circle cx="33" cy="12" r="3" fill="#E9E6DC" />
    <rect x="14" y="38" width="126" height="46" rx="8" fill="#FF6A2C" />
    <rect x="24" y="50" width="46" height="6" rx="3" fill="#fff" opacity=".85" /><rect x="24" y="64" width="78" height="10" rx="4" fill="#fff" />
    <rect x="14" y="96" width="60" height="38" rx="6" fill="#F1EEE4" /><rect x="80" y="96" width="60" height="38" rx="6" fill="#F1EEE4" />
    <rect x="150" y="38" width="36" height="96" rx="6" fill="#FFE1CE" />
  </svg>
);
const thumbVerdant = (
  <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="150" fill="#fff" /><rect width="200" height="24" fill="#F1F8F4" />
    <circle cx="13" cy="12" r="3" fill="#1F9E6F" /><circle cx="23" cy="12" r="3" fill="#E9E6DC" /><circle cx="33" cy="12" r="3" fill="#E9E6DC" />
    <rect x="14" y="36" width="82" height="50" rx="6" fill="#E4F3EB" /><rect x="104" y="36" width="82" height="50" rx="6" fill="#1F9E6F" />
    <rect x="14" y="94" width="82" height="42" rx="6" fill="#1F9E6F" opacity=".45" /><rect x="104" y="94" width="82" height="42" rx="6" fill="#E4F3EB" />
  </svg>
);
const thumbCadence = (
  <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="150" fill="#fff" /><rect width="200" height="24" fill="#EEF2FF" />
    <circle cx="13" cy="12" r="3" fill="#3D63FF" /><circle cx="23" cy="12" r="3" fill="#E9E6DC" /><circle cx="33" cy="12" r="3" fill="#E9E6DC" />
    <rect x="14" y="36" width="66" height="66" rx="10" fill="#3D63FF" />
    <rect x="92" y="42" width="80" height="9" rx="4" fill="#1B1B18" /><rect x="92" y="58" width="54" height="7" rx="3" fill="#C9CEDA" />
    <circle cx="100" cy="86" r="10" fill="#3D63FF" /><rect x="116" y="83" width="56" height="6" rx="3" fill="#DCE2F2" />
    <rect x="14" y="114" width="6" height="20" rx="2" fill="#3D63FF" /><rect x="26" y="108" width="6" height="26" rx="2" fill="#3D63FF" /><rect x="38" y="118" width="6" height="16" rx="2" fill="#9DB0F2" /><rect x="50" y="104" width="6" height="30" rx="2" fill="#3D63FF" /><rect x="62" y="120" width="6" height="14" rx="2" fill="#9DB0F2" /><rect x="74" y="110" width="6" height="24" rx="2" fill="#3D63FF" /><rect x="86" y="116" width="6" height="18" rx="2" fill="#9DB0F2" />
  </svg>
);
const thumbHabitat = (
  <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="150" fill="#fff" /><rect width="200" height="24" fill="#F3F0FF" />
    <circle cx="13" cy="12" r="3" fill="#7A5CFF" /><circle cx="23" cy="12" r="3" fill="#E9E6DC" /><circle cx="33" cy="12" r="3" fill="#E9E6DC" />
    <rect x="14" y="36" width="172" height="44" rx="8" fill="#EDE9FF" /><rect x="14" y="36" width="60" height="44" rx="8" fill="#7A5CFF" />
    <rect x="14" y="92" width="150" height="9" rx="4" fill="#1B1B18" />
    <rect x="14" y="108" width="172" height="6" rx="3" fill="#E1DDCF" /><rect x="14" y="120" width="172" height="6" rx="3" fill="#E1DDCF" /><rect x="14" y="132" width="120" height="6" rx="3" fill="#E1DDCF" />
  </svg>
);

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

      <Reel
        eyebrow="Our world in motion"
        caption={<>Design &amp; build &amp; grow.</>}
        /* TODO: needs content — studio reel video + carousel images */
        faces={[
          { video: true, alt: 'Studio showreel', placeholder: 'studio-reel.mp4' },
          { placeholder: 'carousel-2.jpg' },
          { placeholder: 'gallery-1.jpg' },
          { placeholder: 'carousel-1.jpg' },
          { placeholder: 'gallery-2.jpg' },
          { placeholder: 'hero-megaphone.jpg' },
          { placeholder: 'carousel-3.jpg' },
          { placeholder: 'gallery-3.jpg' },
          { placeholder: 'team-1.jpg' },
          { placeholder: 'gallery-4.jpg' },
          { placeholder: 'team-2.jpg' },
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
          <ProjectCard title="Meridian Bank" category="Brand & Website" metric="+212% sign-ups" thumb={thumbMeridian} />
          <ProjectCard title="Verdant" category="E-commerce & Dev" metric="+38% AOV" thumb={thumbVerdant} />
          <ProjectCard title="Cadence Music" category="Brand & Campaign" metric="4.1M reach" thumb={thumbCadence} />
          <ProjectCard title="Habitat" category="SEO & Content" metric="+180% organic" thumb={thumbHabitat} />
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
            {
              title: 'Content',
              body: 'Words, photography and editorial systems that give a brand a voice worth listening to — and a library it can keep publishing from.',
              tags: ['Copywriting', 'Photography', 'Editorial', 'Video'],
            },
            {
              title: 'Marketing',
              body: 'Paid, social and lifecycle campaigns that turn attention into measurable, repeatable growth — with the reporting to prove it.',
              tags: ['Paid media', 'Social', 'Lifecycle', 'Campaigns'],
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
