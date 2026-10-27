// Blog posts, loaded at build time from content/blog/*.md.
//
// To publish a post: copy content/blog/_TEMPLATE.md to
// content/blog/<your-slug>.md, fill it in and push. The file name is the
// URL (/blog/<your-slug>). See content/blog/README.md for the format.
//
// Server-only (reads the file system). Client components import types
// and categories from ./blogTypes instead.

import fs from 'node:fs';
import path from 'node:path';
import { AUTHOR } from '@/lib/site';
import { parseBlocks, splitFrontMatter, wordCount } from '@/lib/blogMarkdown';
import { CATEGORIES, type BlogPost } from './blogTypes';

export * from './blogTypes';

const DIR = path.join(process.cwd(), 'content', 'blog');

const displayDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });

// Today's date in India (builds run in UTC, which is 5h30m behind IST).
const today = () => new Date(Date.now() + 330 * 60_000).toISOString().slice(0, 10);

function loadPost(file: string): BlogPost & { featured: boolean; draft: boolean } {
  const slug = file.replace(/\.md$/, '');
  const { data, body } = splitFrontMatter(fs.readFileSync(path.join(DIR, file), 'utf8'));
  const need = (k: string) => {
    const v = data[k];
    if (!v) throw new Error(`content/blog/${file}: missing "${k}" in the front matter`);
    return v;
  };
  const category = need('category');
  if (!CATEGORIES.some((c) => c.name === category)) {
    throw new Error(
      `content/blog/${file}: unknown category "${category}". Use one of: ${CATEGORIES.map((c) => c.name).join(', ')}`,
    );
  }
  const isoDate = need('date');
  const blocks = parseBlocks(body);
  const minutes = Math.max(2, Math.round(wordCount(blocks) / 200));
  const author = data.author || AUTHOR.name;

  return {
    id: data.legacyId || slug,
    slug,
    title: need('title'),
    seoTitle: data.seoTitle || need('title'),
    excerpt: need('excerpt'),
    category,
    date: displayDate(isoDate),
    isoDate,
    ...(data.updated ? { updated: { date: displayDate(data.updated), iso: data.updated } } : {}),
    author,
    ...(author === AUTHOR.name ? { authorBio: AUTHOR.bio } : data.authorBio ? { authorBio: data.authorBio } : {}),
    readTime: data.readTime || `${minutes} min read`,
    image: data.image || 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600',
    body: blocks,
    featured: data.featured === 'true',
    draft: data.draft === 'true',
  };
}

function loadAll(): BlogPost[] {
  if (!fs.existsSync(DIR)) return [];
  const now = today();
  const posts = fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.md') && !f.startsWith('_') && f !== 'README.md')
    .map(loadPost)
    // Drafts and future-dated posts stay off the live site.
    .filter((p) => !p.draft && p.isoDate <= now)
    .sort((a, b) => b.isoDate.localeCompare(a.isoDate) || Number(b.featured) - Number(a.featured) || a.slug.localeCompare(b.slug));
  const featured = posts.find((p) => p.featured) ?? posts[0];
  return featured ? [featured, ...posts.filter((p) => p !== featured)] : posts;
}

/** All published posts: the featured post first, then newest first. */
export const BLOG_POSTS: BlogPost[] = loadAll();

export const getPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);

/** Categories that have at least one post, in CATEGORIES order. */
export const BLOG_CATEGORIES = CATEGORIES.filter((c) => BLOG_POSTS.some((p) => p.category === c.name)).map((c) => c.name);

export const postsIn = (category: string) => BLOG_POSTS.filter((p) => p.category === category);

/** Posts per page on /blog and /blog/page/<n>. */
export const PAGE_SIZE = 12;
