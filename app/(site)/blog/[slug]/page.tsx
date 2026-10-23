import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL } from '@/lib/site';
import Faq from '@/components/site/Faq';
import type { CSSProperties } from 'react';
import { BLOG_POSTS, TONE_COLORS, categoryColors, categoryHref, getPost, thumb, type Block } from '@/data/blogPosts';
import BackLink from '../BackLink';
import s from './article.module.css';

/* Article page — implements the Claude Design "Article" mock
   (Article.dc.html) on the 2026 design system (app/site.css tokens).
   Styles: ./article.module.css; category colours come from
   data/blogPosts (TONE_COLORS) as inline --tone / --tint. */

const toneVars = ([tone, tint]: readonly [string, string]) =>
  ({ '--tone': tone, '--tint': tint }) as CSSProperties;

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.seoTitle} | WebAlchemy`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: post.seoTitle,
      description: post.excerpt,
      publishedTime: post.isoDate,
      ...(post.updated ? { modifiedTime: post.updated.iso } : {}),
      authors: [post.author],
      images: [post.image],
    },
  };
}

/** Inline markup in copy: `code`, **bold** and [text](/internal-link). */
function inline(text: string) {
  return text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/).map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) return <code key={i}>{part.slice(1, -1)}</code>;
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <Link key={i} href={link[2]} className={s.inlineLink}>{link[1]}</Link>;
    return part;
  });
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
    case 'table':
      return (
        <div key={i} className={s.tableWrap}>
          <table className={s.table}>
            {block.caption && <caption>{block.caption}</caption>}
            <thead>
              <tr>{block.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) =>
                    c === 0 ? <th key={c} scope="row">{inline(cell)}</th> : <td key={c}>{inline(cell)}</td>,
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'faq':
      return (
        <div key={i} className={s.faqBlock}>
          <h2 id={`faq-${i}`}>{block.heading}</h2>
          <Faq items={block.items} jsonLd />
        </div>
      );
    case 'links':
      return (
        <aside key={i} className={s.links}>
          <p className={s.linksH}>{block.heading}</p>
          <ul>
            {block.items.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link> <span>{l.text}</span>
              </li>
            ))}
          </ul>
        </aside>
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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const toc = post.body.filter((b): b is Extract<Block, { type: 'h2' }> => b.type === 'h2');
  // Same-category posts first, then the newest of the rest.
  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug);
  const related = [
    ...others.filter((p) => p.category === post.category),
    ...others.filter((p) => p.category !== post.category).sort((a, b) => b.isoDate.localeCompare(a.isoDate)),
  ].slice(0, 3);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.seoTitle,
    description: post.excerpt,
    image: post.image,
    datePublished: post.isoDate,
    dateModified: post.updated?.iso ?? post.isoDate,
    author: { '@type': 'Person', name: post.author, url: `${SITE_URL}/about`, ...(post.authorBio ? { description: post.authorBio } : {}) },
    publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'WebAlchemy', url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <div className={s.art} style={toneVars(categoryColors(post.category))}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Blog', item: `${SITE_URL}/blog` },
              { '@type': 'ListItem', position: 2, name: post.category, item: `${SITE_URL}${categoryHref(post.category)}` },
              { '@type': 'ListItem', position: 3, name: post.title },
            ],
          }),
        }}
      />
      <div className={s.progress} aria-hidden="true" />

      <header className={s.head}>
        <div className={s.topRow}>
          <BackLink href="/blog" className={s.back}>
            <span aria-hidden="true">←</span> Back
          </BackLink>
          <nav aria-label="Breadcrumb" className={s.crumbs}>
            <Link href="/blog">Blog</Link>
            <span aria-hidden="true">/</span>
            <Link href={categoryHref(post.category)} className={s.tone}>{post.category}</Link>
          </nav>
        </div>
        <h1>{post.title}</h1>
        <p className={s.dek}>{post.excerpt}</p>
        <div className={s.byline}>
          <span className={s.avatar} aria-hidden="true">{initials(post.author)}</span>
          <span className={s.name}>{post.author}</span>
          <span aria-hidden="true">·</span>
          {post.updated ? (
            <time dateTime={post.updated.iso}>Updated {post.updated.date}</time>
          ) : (
            <time dateTime={post.isoDate}>{post.date}</time>
          )}
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
            </div>
          </div>
        </article>
      </section>

      <section className={s.more} aria-labelledby="art-more-h">
        <div className={s.moreHead}>
          <h2 id="art-more-h">Keep reading</h2>
          <Link href={categoryHref(post.category)}>More in {post.category} →</Link>
        </div>
        <div className={s.moreGrid}>
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
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
        <div className={s.endNav}>
          <Link href="/blog" className={s.back}>
            <span aria-hidden="true">←</span> All articles
          </Link>
          <Link href={categoryHref(post.category)} className={s.back}>
            {post.category} guides <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
