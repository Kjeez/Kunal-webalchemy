# How to publish a blog post

Every file in this folder is one post. The file name is the URL:
`content/blog/website-cost-in-noida.md` → `www.webalchemy.in/blog/website-cost-in-noida`.

1. Copy `_TEMPLATE.md` and rename it to your slug (lowercase, words joined by `-`, no dates).
2. Fill in the front matter between the `---` lines and write the post below it.
3. Remove `draft: true` when it's ready (or set a future `date` to schedule it).
4. Commit and push to `main`. Vercel publishes it in about a minute, and it is
   added to the blog, its category page, the sitemap and the RSS feed automatically.

You can also edit posts on GitHub in the browser (open the file → pencil icon → Commit),
including from your phone.

## Front matter

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | The H1. Use the words people search. |
| `excerpt` | yes | 1–2 sentences for cards and Google. |
| `category` | yes | One of: `Pricing`, `Strategy`, `Marketing`, `Design`, `Development`, `Technical`. |
| `date` | yes | `YYYY-MM-DD`. Future dates stay hidden until that day's next deploy. |
| `seoTitle` | no | Longer `<title>` for Google. Defaults to `title`. |
| `updated` | no | `YYYY-MM-DD` when you refresh a post; shows "Updated …". |
| `image` | no | Cover image URL or `/blog/your-image.jpg` (put the file in `public/blog/`). |
| `draft` | no | `true` keeps it off the live site. |
| `featured` | no | `true` pins it at the top of /blog. Use on one post only. |
| `author` | no | Defaults to Kunal. |

Wrap a value in "double quotes" if it contains a colon.

## Writing format

- `## Heading` and `### Sub-heading` (a `## Heading {#custom-id}` sets the anchor).
- Paragraphs, `**bold**`, `[links](/path)` and `` `code` ``.
- `- bullets` and `1. numbered` lists. Start an item with `**Lead.**` to bold its first words.
- `> quote`
- Pipe tables, with an optional `Table: caption` line right after.
- Fenced blocks for site components: ` ```cta `, ` ```links `, ` ```faq `, ` ```metrics `
  (see `_TEMPLATE.md` for each one's format). An `faq` block also adds FAQ structured data.

Read time, the table of contents, related posts and structured data are generated for you.

## Checklist before publishing

- The first paragraph answers the question directly.
- At least two links to money pages (pricing guide, industry page or service page).
- One `cta` block and an `faq` block with 4–6 real questions.
- Only real prices, client names and results. Never invented numbers.
