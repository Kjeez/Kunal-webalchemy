'use client';

import { useState } from 'react';
import Link from 'next/link';
import s from './blog.module.css';

export interface GridPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  /** [ink, tint] */
  colors: readonly [string, string];
}

/** Category chips + post grid (the only interactive part of the blog index). */
export default function BlogGrid({ categories, posts }: { categories: string[]; posts: GridPost[] }) {
  const [cat, setCat] = useState('All');
  const shown = cat === 'All' ? posts : posts.filter((p) => p.category === cat);

  return (
    <>
      <div className="chiprow" role="group" aria-label="Filter articles by category">
        {categories.map((c) => (
          <button key={c} type="button" className="chip" aria-pressed={c === cat} onClick={() => setCat(c)}>
            {c}
          </button>
        ))}
      </div>
      <p className={s.srOnly} aria-live="polite">
        {shown.length} {shown.length === 1 ? 'article' : 'articles'}
        {cat !== 'All' && ` in ${cat}`}
      </p>
      <ul className={s.grid}>
        {shown.map((p) => (
          <li key={p.id}>
            <Link href={`/blog/${p.id}`} className={`rise ${s.post}`}>
              <div className={s.cover} style={{ background: p.colors[1] }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt="" width={800} height={500} loading="lazy" />
              </div>
              <div className={s.meta} style={{ color: p.colors[0] }}>
                {p.category} · {p.readTime}
              </div>
              <h3 className={s.postTitle}>{p.title}</h3>
              <p className={s.postDek}>{p.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
