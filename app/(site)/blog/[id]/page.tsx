import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL } from '@/lib/site';
import type { CSSProperties } from 'react';
import { BLOG_POSTS, TONE_COLORS, categoryColors, getPost, thumb, type Block } from '@/data/blogPosts';
import s from './article.module.css';

/* Article page — implements the Claude Design "Article" mock
   (Article.dc.html) on the 2026 design system (app/site.css tokens).
   Styles: ./article.module.css; category colours come from
   data/blogPosts (TONE_COLORS) as inline --tone / --tint. */

const toneVars = ([tone, tint]: readonly [string, string]) =>
  ({ '--tone': tone, '--tint': tint }) as CSSProperties;

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = getPost(id);
  if (!post) return {};
  return {
    title: `${post.seoTitle} | Kunal`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${id}` },
    openGraph: {
      type: 'article',
      title: post.seoTitle,
      description: post.excerpt,
      publishedTime: post.isoDate,
      authors: [post.author],
      images: [post.image],
    },
  };
}

/** Renders `code` spans inside plain copy. */
function inline(text: string) {
  return text.split(/`([^`]+)`/).map((part, i) => (i % 2 ? <code key={i}>{part}</code> : part));
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case 'p':
      return <p key={i}>{inline(block.text)}</p>;
    case 'h2':
      return <h2 key={i} id={block.id}>{block.text}</h2>;
    case 'h3':
      return <h3 key={i}>{block.text}</h3>;
    case 'ul':
    case 'ol': {
      const List = block.type;
      return (
        <List key={i}>
          {block.items.map((item, j) => (
            <li key={j}>
              {item.lead && <strong>{item.lead}</strong>} {inline(item.text)}
            </li>
          ))}
        </List>
      );
    }
    case 'quote':
      return <blockquote key={i}>{block.text}</blockquote>;
    case 'metrics':
      return (
        <div key={i} className={s.metrics}>
          {block.items.map((m) => (
            <div key={m.label} className={s.metric} style={toneVars(TONE_COLORS[m.tone])}>
              <span className={s.k}>{m.label}</span>
              <span className={s.v}>{m.value}</span>
              <span className={s.d}>{m.text}</span>
            </div>
          ))}
        </div>
      );
    case 'cta':
      return (
        <aside key={i} className={s.cta}>
          <p className={s.h}>{block.heading}</p>
          <p className={s.t}>{block.text}</p>
          <Link href={block.href} className={s.ctaBtn}>
            {block.label} <span aria-hidden="true">→</span>
          </Link>
        </aside>
      );
  }
}

const initials = (name: string) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = getPost(id);
  if (!post) notFound();

  const toc = post.body.filter((b): b is Extract<Block, { type: 'h2' }> => b.type === 'h2');
  const related = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.seoTitle,
    description: post.excerpt,
    image: post.image,
    datePublished: post.isoDate,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Person', name: 'Kunal', url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/blog/${post.id}`,
  };

  return (
    <div className={s.art} style={toneVars(categoryColors(post.category))}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className={s.progress} aria-hidden="true" />

      <header className={s.head}>
        <nav aria-label="Breadcrumb" className={s.crumbs}>
          <Link href="/blog">Blog</Link>
          <span aria-hidden="true">/</span>
          <span className={s.tone}>{post.category}</span>
        </nav>
        <h1>{post.title}</h1>
        <p className={s.dek}>{post.excerpt}</p>
        <div className={s.byline}>
          <span className={s.avatar} aria-hidden="true">{initials(post.author)}</span>
          <span className={s.name}>{post.author}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.isoDate}>{post.date}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      <div className={s.coverWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={s.cover}
          src={post.image}
          alt=""
          width={1600}
          height={686}
          fetchPriority="high"
        />
      </div>

      <section className={s.main}>
        {toc.length > 1 && (
          <nav className={s.toc} aria-labelledby="art-toc-label">
            <div id="art-toc-label" className={s.lbl}>In this article</div>
            {toc.map((h) => (
              <a key={h.id} href={`#${h.id}`}>{h.text}</a>
            ))}
          </nav>
        )}
        <article className={s.body}>
          {post.body.map(renderBlock)}
          <div className={s.author}>
            <span className={`${s.avatar} ${s.avatarLg}`} aria-hidden="true">{initials(post.author)}</span>
            <div>
              <div className={s.name}>{post.author}</div>
              {post.authorBio && <div className={s.bio}>{post.authorBio}</div>}
              <Link href="/#contact" className={s.hire}>Need a website that does this? Work with me →</Link>
            </div>
          </div>
        </article>
      </section>

      <section className={s.more} aria-labelledby="art-more-h">
        <div className={s.moreHead}>
          <h2 id="art-more-h">Keep reading</h2>
          <Link href="/blog">All articles →</Link>
        </div>
        <div className={s.moreGrid}>
          {related.map((p) => (
            <Link
              key={p.id}
              href={`/blog/${p.id}`}
              className={s.card}
              style={toneVars(categoryColors(p.category))}
            >
              <div className={s.thumb}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={thumb(p.image)} alt="" loading="lazy" width={800} height={500} />
              </div>
              <div className={s.meta}>
                {p.category} · {p.readTime}
              </div>
              <div className={s.cardTitle}>{p.title}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
