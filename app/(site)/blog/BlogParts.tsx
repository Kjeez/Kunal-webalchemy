import Link from 'next/link';
import { categoryColors, categoryHref, getCategory, thumb, type BlogPost } from '@/data/blogTypes';
import s from './blog.module.css';

/* Server-rendered pieces shared by /blog, /blog/page/<n> and
   /blog/category/<slug>: category links, the post grid and pagination.
   Real links (not client-side filters) so Google can crawl every
   category and page. */

export function CategoryNav({ categories, current }: { categories: string[]; current?: string }) {
  return (
    <nav className="chiprow" aria-label="Blog categories">
      <Link href="/blog" className="chip" aria-current={current ? undefined : 'page'}>
        All
      </Link>
      {categories.map((c) => (
        <Link key={c} href={categoryHref(c)} className="chip" aria-current={c === current ? 'page' : undefined}>
          {c}
        </Link>
      ))}
    </nav>
  );
}

export function PostGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <ul className={s.grid}>
      {posts.map((p) => {
        const [ink, tint] = categoryColors(p.category);
        return (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className={`rise ${s.post}`}>
              <div className={s.cover} style={{ background: tint }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={thumb(p.image)} alt="" width={800} height={500} loading="lazy" />
              </div>
              <div className={s.meta} style={{ color: ink }}>
                {p.category} · {p.readTime}
              </div>
              <h3 className={s.postTitle}>{p.title}</h3>
              <p className={s.postDek}>{p.excerpt}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/** Older / newer links plus page numbers. `base` is /blog or a category URL. */
export function Pagination({ page, pages, base }: { page: number; pages: number; base: string }) {
  if (pages <= 1) return null;
  const href = (n: number) => (n === 1 ? base : `${base}/page/${n}`);
  return (
    <nav className={s.pager} aria-label="Blog pages">
      {page > 1 ? (
        <Link href={href(page - 1)} className="chip" rel="prev">← Newer</Link>
      ) : (
        <span />
      )}
      <span className={s.pagerNums}>
        {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
          <Link key={n} href={href(n)} className="chip" aria-current={n === page ? 'page' : undefined}>
            {n}
          </Link>
        ))}
      </span>
      {page < pages ? (
        <Link href={href(page + 1)} className="chip" rel="next">Older →</Link>
      ) : (
        <span />
      )}
    </nav>
  );
}

export const categoryTitle = (name: string) => getCategory(name)?.title ?? name;
