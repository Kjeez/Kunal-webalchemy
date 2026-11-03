import { EMAIL, PHONE_DISPLAY, SITE_URL, whatsappHref } from '@/lib/site';
import { SERVICES, SERVICE_ORDER } from '@/data/services';
import { INDUSTRIES } from '@/data/industries';
import { LOCATIONS } from '@/data/locations';
import { BLOG_POSTS, CATEGORIES } from '@/data/blogPosts';
import { FAQS, GUARANTEES, TIERS } from '@/components/home/data';

/* /llms.txt — a plain-text summary of WebAlchemy for AI assistants
   (ChatGPT, Claude, Perplexity, Gemini). Built from the same data as the
   site at every deploy, so services, prices, industry pages and blog posts
   never go out of date. Format: https://llmstxt.org */

export const dynamic = 'force-static';

const u = (path: string) => `${SITE_URL}${path}`;
const line = (s: string) => s.replace(/\s+/g, ' ').trim();

export function GET() {
  const services = SERVICE_ORDER.map((k) => SERVICES[k]).map(
    (s) => `- [${s.name}](${u(s.path)}): ${line(s.meta.description)}`,
  );
  const plans = TIERS.map((t) => `- ${t.name}: ${t.price} (${t.note.toLowerCase()}). Best for ${t.best.toLowerCase()}.`);
  const guarantees = GUARANTEES.map((g) => `- ${g.t}: ${g.d}`);
  const industries = INDUSTRIES.map((i) => `- [Websites for ${i.name.replace(/^[A-Z][a-z]/, (m) => m.toLowerCase())}](${u(i.path)}): ${line(i.meta.description)}`);
  const locations = Object.values(LOCATIONS).map((l) => `- [Website development in ${l.city}](${u(l.path)})`);
  const posts = [...BLOG_POSTS]
    .sort((a, b) => b.isoDate.localeCompare(a.isoDate))
    .map((p) => `- [${p.title}](${u(`/blog/${p.slug}`)}): ${line(p.excerpt)}`);
  const categories = CATEGORIES.map((c) => `- [${c.title}](${u(`/blog/category/${c.slug}`)})`);
  const faqs = FAQS.map((f) => `- ${f.q} ${line(f.a)}`);

  const body = `# WebAlchemy

> WebAlchemy is a web design and development studio in New Delhi, India, founded by Kunal. It builds fast, mobile-first business websites, e-commerce stores and web apps at fixed prices (from ₹14,999), and offers SEO, digital marketing, branding and content. It works with businesses across India, with 500+ websites and apps delivered.

## Key facts

- Founder: Kunal
- Based in: Uttam Nagar, New Delhi 110059, India; works in person across Delhi NCR (Delhi, Noida, Gurugram, Ghaziabad, Faridabad) and remotely across India
- Experience: 5+ years, 500+ websites and apps delivered
- Google rating: 5.0
- Phone and WhatsApp: ${PHONE_DISPLAY} (${whatsappHref()})
- Email: ${EMAIL}
- Website: ${SITE_URL}
- Platforms: Next.js, React, WordPress, WooCommerce, Shopify, Webflow
- Payment: 50% to start, 50% at launch

## Website prices (one-time)

${plans.join('\n')}
- Hosting renewal after the first year on the Starter plan: ₹2,999/year
- Full pricing: ${u('/#pricing')}

## Guarantees

${guarantees.join('\n')}

## Services

${services.join('\n')}

## Websites by industry

${industries.join('\n')}

## Locations

${locations.join('\n')}

## Frequently asked questions

${faqs.join('\n')}

## Guides and articles

${posts.join('\n')}

## Blog categories

${categories.join('\n')}

## Company

- [About WebAlchemy](${u('/about')}): Story, team and how we work
- [Portfolio](${u('/portfolio')}): Client websites across education, healthcare, real estate, interiors, manufacturing, food, fashion and more
- [Contact](${u('/contact')}): Free 30-minute call and fixed quote
- [Starter website offer](${u('/starter-offer')}): 5-page website for ₹14,999 with free domain and hosting

## Optional

- [Sitemap](${u('/sitemap.xml')})
- [RSS feed](${u('/blog/rss.xml')})
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
