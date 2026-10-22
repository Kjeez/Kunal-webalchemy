import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_CATEGORIES, BLOG_POSTS, categoryColors, getPost, thumb } from '@/data/blogPosts';
import BlogGrid from './BlogGrid';
import Newsletter from './Newsletter';
import s from './blog.module.css';
import FloatField from '@/components/site/motion/FloatField';
import { PeepCrew } from '@/components/site/motion/Peep';

/* Kunal's blog index — Claude Design "Blog" (Blog.dc.html). */

export const metadata: Metadata = {
  title: 'Blog — Notes on Web Design & Development | Kunal',
  description:
    'Practical notes on web design, UI/UX, speed and SEO from Kunal, a website developer & UI/UX designer in New Delhi.',
  alternates: { canonical: '/blog' },
};

const initials = (name: string) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);

export default function BlogIndexPage() {
  const featured = getPost('2') ?? BLOG_POSTS[0];
  const [ink] = categoryColors(featured.category);
  const posts = BLOG_POSTS.map((p) => ({
    id: p.id,
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
            { seed: 'Kunal', bg: 'eef1ff', pose: 'float', size: 88, bubble: 'Fresh notes!' },
            { seed: 'Kabir', bg: 'eef1ff', pose: 'sway', size: 74 },
          ]}
        />
        <div className="stack" style={{ gap: 16 }}>
          <div className="eyebrow">BLOG · BY KUNAL</div>
          <h1 className="h1-xl">
            Notes on <span className="serif">web design</span> &amp; development
          </h1>
        </div>
        <p className="lede" style={{ maxWidth: 480 }}>
          What I&apos;ve learned designing and building 200+ websites: UI/UX, speed, SEO and the platforms behind
          them.
        </p>
      </section>

      <section className={`wrap ${s.featuredWrap}`} aria-label="Featured article">
        <Link href={`/blog/${featured.id}`} className={s.featured}>
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
              Get my latest notes on design, speed and SEO in your inbox. No spam, just the good stuff.
            </p>
          </div>
          <Newsletter />
        </div>
      </section>
    </>
  );
}
