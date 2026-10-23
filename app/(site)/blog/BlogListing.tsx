import Link from 'next/link';
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  PAGE_SIZE,
  categoryColors,
  getCategory,
  postsIn,
  type BlogPost,
} from '@/data/blogPosts';
import Newsletter from './Newsletter';
import { CategoryNav, Pagination, PostGrid } from './BlogParts';
import s from './blog.module.css';
import FloatField from '@/components/site/motion/FloatField';
import { PeepCrew } from '@/components/site/motion/Peep';

/* One listing layout for the blog index, its numbered pages and the
   category pages. Page 1 of the index also shows the featured post. */

const initials = (name: string) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);

export const pageCount = (n: number) => Math.max(1, Math.ceil(n / PAGE_SIZE));

/** Posts listed in the grid of the blog index (everything but the featured post). */
export const indexPosts = () => BLOG_POSTS.slice(1);

function Featured({ post }: { post: BlogPost }) {
  const [ink] = categoryColors(post.category);
  return (
    <section className={`wrap ${s.featuredWrap}`} aria-label="Featured article">
      <Link href={`/blog/${post.slug}`} className={s.featured}>
        <div className={s.featuredCover}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt="" width={1600} height={1000} fetchPriority="high" />
        </div>
        <div className={s.featuredBody}>
          <div className="eyebrow-sm" style={{ color: ink }}>
            Featured · {post.category} · {post.readTime}
          </div>
          <h2 className={s.featuredTitle}>{post.title}</h2>
          <p className={s.featuredDek}>{post.excerpt}</p>
          <div className={s.byline}>
            <span className={s.avatar} aria-hidden="true">{initials(post.author)}</span>
            {post.author} · <time dateTime={post.isoDate}>{post.date}</time>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default function BlogListing({ page = 1, category }: { page?: number; category?: string }) {
  const cat = category ? getCategory(category) : undefined;
  const all = cat ? postsIn(cat.name) : indexPosts();
  const pages = pageCount(all.length);
  const shown = all.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const base = cat ? `/blog/category/${cat.slug}` : '/blog';
  const showFeatured = !cat && page === 1 && BLOG_POSTS.length > 0;

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
          {cat ? (
            <nav aria-label="Breadcrumb" className="eyebrow">
              <Link href="/blog">BLOG</Link> / {cat.name.toUpperCase()}
            </nav>
          ) : (
            <div className="eyebrow">KNOWLEDGE BASE</div>
          )}
          <h1 className="h1-xl">
            {cat ? (
              cat.title
            ) : (
              <>
                Latest <span className="serif">insights</span>
              </>
            )}
            {page > 1 && <span className={s.pageNo}> · page {page}</span>}
          </h1>
        </div>
        <p className="lede" style={{ maxWidth: 560 }}>
          {cat
            ? cat.description
            : 'Practical guides on website costs, planning, design and getting more enquiries from Google, written for business owners in India.'}
        </p>
      </section>

      {showFeatured && <Featured post={BLOG_POSTS[0]} />}

      <section className={`wrap ${s.posts}`} aria-labelledby="posts-h">
        <h2 id="posts-h" className={s.srOnly}>
          {cat ? `${cat.name} articles` : 'All articles'}
        </h2>
        <CategoryNav categories={BLOG_CATEGORIES} current={cat?.name} />
        <p className={s.count}>
          {all.length} {all.length === 1 ? 'article' : 'articles'}
          {pages > 1 && ` · page ${page} of ${pages}`}
        </p>
        <PostGrid posts={shown} />
        <Pagination page={page} pages={pages} base={base} />
      </section>

      <section className={`wrap ${s.newsWrap}`} aria-labelledby="news-h">
        <div className={s.news}>
          <div className="stack" style={{ gap: 10 }}>
            <h2 id="news-h" className="h3">Stay updated</h2>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--muted)' }}>
              New guides on websites, pricing and local SEO, about once a week.
            </p>
          </div>
          <Newsletter />
        </div>
      </section>
    </>
  );
}
