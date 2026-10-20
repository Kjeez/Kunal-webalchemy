import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowNE } from '@/components/ui';
import { SITE_URL } from '@/lib/site';
import { BLOG_POSTS, CATEGORY_TONE, getPost, type Block } from '@/data/blogPosts';

/* Article page — implements the Claude Design "Article" mock
   (Article.dc.html) on the new design system. Design colours/fonts are
   mapped onto the site tokens; category tones live in na.css (.art-*). */

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
    title: `${post.seoTitle} | WebAlchemy`,
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
        <div key={i} className="art-metrics">
          {block.items.map((m) => (
            <div key={m.label} className="art-metric" data-tone={m.tone}>
              <span className="k">{m.label}</span>
              <span className="v">{m.value}</span>
              <span className="d">{m.text}</span>
            </div>
          ))}
        </div>
      );
    case 'cta':
      return (
        <aside key={i} className="art-cta">
          <p className="h">{block.heading}</p>
          <p className="t">{block.text}</p>
          <Link href={block.href} className="art-cta-btn">
            {block.label} <ArrowNE />
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
    publisher: { '@type': 'Organization', name: 'WebAlchemy', url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/blog/${post.id}`,
  };

  return (
    <div className="art" data-tone={CATEGORY_TONE[post.category] ?? 'blue'}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="art-progress" aria-hidden="true" />

      <header className="art-head">
        <nav aria-label="Breadcrumb" className="art-crumbs">
          <Link href="/blog">Blog</Link>
          <span aria-hidden="true">/</span>
          <span className="tone">{post.category}</span>
        </nav>
        <h1>{post.title}</h1>
        <p className="art-dek">{post.excerpt}</p>
        <div className="art-byline">
          <span className="art-avatar" aria-hidden="true">{initials(post.author)}</span>
          <span className="name">{post.author}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.isoDate}>{post.date}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      <div className="art-cover-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="art-cover"
          src={post.image}
          alt=""
          width={1600}
          height={686}
          fetchPriority="high"
        />
      </div>

      <section className="art-main">
        {toc.length > 1 && (
          <nav className="art-toc" aria-labelledby="art-toc-label">
            <div id="art-toc-label" className="lbl">In this article</div>
            {toc.map((h) => (
              <a key={h.id} href={`#${h.id}`}>{h.text}</a>
            ))}
          </nav>
        )}
        <article className="art-body">
          {post.body.map(renderBlock)}
          <div className="art-author">
            <span className="art-avatar lg" aria-hidden="true">{initials(post.author)}</span>
            <div>
              <div className="name">{post.author}</div>
              {post.authorBio && <div className="bio">{post.authorBio}</div>}
            </div>
          </div>
        </article>
      </section>

      <section className="art-more" aria-labelledby="art-more-h">
        <div className="art-more-head">
          <h2 id="art-more-h">Keep reading</h2>
          <Link href="/blog">All articles →</Link>
        </div>
        <div className="art-more-grid">
          {related.map((p) => (
            <Link
              key={p.id}
              href={`/blog/${p.id}`}
              className="art-card"
              data-tone={CATEGORY_TONE[p.category] ?? 'blue'}
            >
              <div className="thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image.replace('w=1600', 'w=800')} alt="" loading="lazy" width={800} height={500} />
              </div>
              <div className="meta">
                {p.category} · {p.readTime}
              </div>
              <div className="title">{p.title}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
