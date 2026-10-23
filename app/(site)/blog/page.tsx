import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_CATEGORIES, BLOG_POSTS, categoryColors, thumb } from '@/data/blogPosts';
import BlogGrid from './BlogGrid';
import Newsletter from './Newsletter';
import s from './blog.module.css';
import FloatField from '@/components/site/motion/FloatField';
import { PeepCrew } from '@/components/site/motion/Peep';

/* Blog index — Claude Design "Blog" (Blog.dc.html). */

export const metadata: Metadata = {
  title: 'Blog | Web Design, SEO & Marketing Insights | WebAlchemy',
  description:
    'Deep dives into design, technology, and marketing strategies to fuel your growth. Practical guides from the WebAlchemy team in New Delhi.',
  alternates: { canonical: '/blog' },
};

const initials = (name: string) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);

export default function BlogIndexPage() {
  // Newest post leads the page.
  const byDate = [...BLOG_POSTS].sort((a, b) => b.isoDate.localeCompare(a.isoDate));
  const featured = byDate[0];
  const [ink] = categoryColors(featured.category);
  const posts = byDate.map((p) => ({
    id: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    readTime: p.readTime,
    image: thumb(p.image),
    colors: categoryColors(p.category),
  }));

  return (
    <>
      <section className={`wrap has-decor ${s.hero}`}>
        <FloatField preset="soft" />
        <PeepCrew
          className="hero-crew hero-crew-top"
          peeps={[
            { seed: 'Ishita', bg: 'f3ecfb', pose: 'float', size: 88, bubble: 'New post!' },
            { seed: 'Kabir', bg: 'eef1ff', pose: 'sway', size: 74 },
          ]}
        />
        <div className="stack" style={{ gap: 16 }}>
          <div className="eyebrow">KNOWLEDGE BASE</div>
          <h1 className="h1-xl">
            Latest <span className="serif">insights</span>
          </h1>
        </div>
        <p className="lede" style={{ maxWidth: 480 }}>
          Strategies, case studies, and technical deep-dives to keep you ahead of the curve.
        </p>
      </section>

      <section className={`wrap ${s.featuredWrap}`} aria-label="Featured article">
        <Link href={`/blog/${featured.slug}`} className={s.featured}>
          <div className={s.featuredCover}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={featured.image} alt="" width={1600} height={1000} fetchPriority="high" />
          </div>
          <div className={s.featuredBody}>
            <div className="eyebrow-sm" style={{ color: ink }}>
              Featured · {featured.category} · {featured.readTime}
            </div>
            <h2 className={s.featuredTitle}>{featured.title}</h2>
            <p className={s.featuredDek}>{featured.excerpt}</p>
            <div className={s.byline}>
              <span className={s.avatar} aria-hidden="true">{initials(featured.author)}</span>
              {featured.author} · <time dateTime={featured.isoDate}>{featured.date}</time>
            </div>
          </div>
        </Link>
      </section>

      <section className={`wrap ${s.posts}`} aria-labelledby="posts-h">
        <h2 id="posts-h" className={s.srOnly}>All articles</h2>
        <BlogGrid categories={['All', ...BLOG_CATEGORIES]} posts={posts} />
      </section>

      <section className={`wrap ${s.newsWrap}`} aria-labelledby="news-h">
        <div className={s.news}>
          <div className="stack" style={{ gap: 10 }}>
            <h2 id="news-h" className="h3">Stay updated</h2>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--muted)' }}>
              Subscribe to our newsletter for the latest design trends and tech insights.
            </p>
          </div>
          <Newsletter />
        </div>
      </section>
    </>
  );
}
