/* Markdown → blog Block[] for content/blog/*.md.
 *
 * Plain markdown covers most of a post; a few fenced blocks add the
 * site's own components. See content/blog/README.md for the full format.
 *
 *   ## Heading {#optional-id}     ### Sub-heading
 *   paragraphs, **bold**, [links](/path), `code`
 *   - bullets / 1. numbered  (a leading **Lead.** is shown in bold)
 *   > quote
 *   | pipe | tables |  (+ optional "Table: caption" line right after)
 *   ```cta / ```faq / ```links / ```metrics fenced blocks
 */

import type { Block, ListItem, Tone } from '@/data/blogTypes';

export interface FrontMatter {
  [key: string]: string | undefined;
}

/** `key: value` lines between --- fences. Values may be "JSON quoted". */
export function splitFrontMatter(src: string): { data: FrontMatter; body: string } {
  const text = src.replace(/\r\n?/g, '\n');
  const m = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { data: {}, body: text };
  const data: FrontMatter = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    if (v.startsWith('"') && v.endsWith('"')) {
      try {
        v = JSON.parse(v);
      } catch {
        v = v.slice(1, -1);
      }
    }
    data[kv[1]] = v;
  }
  return { data, body: text.slice(m[0].length) };
}

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);

function listItem(raw: string): ListItem {
  const m = raw.match(/^\*\*([^*]+)\*\*\s+([\s\S]*)$/);
  return m ? { lead: m[1], text: m[2] } : { text: raw };
}

const cells = (row: string) =>
  row
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((c) => c.trim());

function fenced(kind: string, lines: string[]): Block {
  const field = (k: string) => {
    const l = lines.find((x) => x.startsWith(`${k}:`));
    return l ? l.slice(k.length + 1).trim() : '';
  };
  switch (kind) {
    case 'cta':
      return { type: 'cta', heading: field('heading'), text: field('text'), label: field('label'), href: field('href') };
    case 'links':
      return {
        type: 'links',
        heading: field('heading'),
        items: lines
          .filter((l) => l.startsWith('- '))
          .map((l) => {
            const m = l.match(/^- \[([^\]]+)\]\(([^)]+)\)\s*(.*)$/);
            return m ? { label: m[1], href: m[2], text: m[3] } : { label: l.slice(2), href: '#', text: '' };
          }),
      };
    case 'faq': {
      const items: { q: string; a: string }[] = [];
      for (const l of lines) {
        if (l.startsWith('Q:')) items.push({ q: l.slice(2).trim(), a: '' });
        else if (l.startsWith('A:') && items.length) items[items.length - 1].a = l.slice(2).trim();
        else if (l.trim() && items.length && !l.startsWith('heading:')) items[items.length - 1].a += ` ${l.trim()}`;
      }
      return { type: 'faq', heading: field('heading') || 'Frequently asked questions', items };
    }
    case 'metrics':
      return {
        type: 'metrics',
        items: lines
          .filter((l) => l.includes('|'))
          .map((l) => {
            const [label, value, text, tone] = cells(l);
            return { label, value, text, tone: (tone || 'blue') as Tone };
          }),
      };
    default:
      return { type: 'p', text: lines.join(' ') };
  }
}

export function parseBlocks(body: string): Block[] {
  const lines = body.replace(/\r\n?/g, '\n').split('\n');
  const blocks: Block[] = [];
  let i = 0;
  const isBlank = (l?: string) => l === undefined || l.trim() === '';

  while (i < lines.length) {
    const line = lines[i];
    if (isBlank(line)) {
      i++;
      continue;
    }

    // fenced component
    const fence = line.match(/^```(\w+)\s*$/);
    if (fence) {
      const inner: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) inner.push(lines[i++]);
      i++;
      blocks.push(fenced(fence[1], inner));
      continue;
    }

    // headings
    const h = line.match(/^(#{2,3})\s+(.*?)(?:\s+\{#([\w-]+)\})?\s*$/);
    if (h) {
      if (h[1] === '##') blocks.push({ type: 'h2', id: h[3] || slugify(h[2]), text: h[2] });
      else blocks.push({ type: 'h3', text: h[2] });
      i++;
      continue;
    }

    // table
    if (line.trim().startsWith('|') && lines[i + 1]?.trim().match(/^\|?\s*:?-{3,}/)) {
      const head = cells(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) rows.push(cells(lines[i++]));
      let caption: string | undefined;
      if (lines[i]?.startsWith('Table:')) caption = lines[i++].slice(6).trim();
      blocks.push({ type: 'table', head, rows, ...(caption ? { caption } : {}) });
      continue;
    }

    // lists
    const bullet = /^[-*]\s+/;
    const num = /^\d+\.\s+/;
    if (bullet.test(line) || num.test(line)) {
      const re = bullet.test(line) ? bullet : num;
      const items: ListItem[] = [];
      while (i < lines.length && re.test(lines[i])) {
        let raw = lines[i].replace(re, '');
        i++;
        // continuation lines (indented)
        while (i < lines.length && /^\s{2,}\S/.test(lines[i])) raw += ` ${lines[i++].trim()}`;
        items.push(listItem(raw));
      }
      blocks.push({ type: re === bullet ? 'ul' : 'ol', items });
      continue;
    }

    // quote
    if (line.startsWith('>')) {
      const q: string[] = [];
      while (i < lines.length && lines[i].startsWith('>')) q.push(lines[i++].replace(/^>\s?/, ''));
      blocks.push({ type: 'quote', text: q.join(' ') });
      continue;
    }

    // paragraph
    const p: string[] = [];
    while (
      i < lines.length &&
      !isBlank(lines[i]) &&
      !/^(#{2,3}\s|```|[-*]\s|\d+\.\s|>|\|)/.test(lines[i])
    )
      p.push(lines[i++].trim());
    blocks.push({ type: 'p', text: p.join(' ') });
  }
  return blocks;
}

/** Plain-text word count of a post body (for read time). */
export function wordCount(blocks: Block[]): number {
  const text = blocks
    .map((b) => {
      switch (b.type) {
        case 'p':
        case 'h2':
        case 'h3':
        case 'quote':
          return b.text;
        case 'ul':
        case 'ol':
          return b.items.map((it) => `${it.lead ?? ''} ${it.text}`).join(' ');
        case 'table':
          return [...b.head, ...b.rows.flat()].join(' ');
        case 'faq':
          return b.items.map((f) => `${f.q} ${f.a}`).join(' ');
        case 'cta':
          return `${b.heading} ${b.text}`;
        default:
          return '';
      }
    })
    .join(' ');
  return text.split(/\s+/).filter(Boolean).length;
}
