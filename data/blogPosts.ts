// Blog posts for the new-design article page (app/(new)/blog/[id]).
// Post 2 carries the rewritten copy from the Claude Design "Article"
// mock; the others are the legacy BlogPostPage copy, restructured into
// blocks. Inline `code` in strings is rendered as <code>.

export type Tone = 'green' | 'blue' | 'amber' | 'violet' | 'orange';

export interface ListItem {
  /** Bold lead-in rendered before the text. */
  lead?: string;
  text: string;
}

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; id: string; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul' | 'ol'; items: ListItem[] }
  | { type: 'quote'; text: string }
  | { type: 'metrics'; items: { label: string; value: string; text: string; tone: Tone }[] }
  | { type: 'cta'; heading: string; text: string; label: string; href: string };

export interface BlogPost {
  id: string;
  title: string;
  /** Longer keyword title (the legacy page's H1), used for <title>. */
  seoTitle: string;
  excerpt: string;
  category: string;
  date: string;
  /** ISO date for metadata / JSON-LD. */
  isoDate: string;
  author: string;
  /** TODO: needs content — author role + one-line bio (shown under the byline when set). */
  authorBio?: string;
  readTime: string;
  image: string;
  body: Block[];
}

export const CATEGORY_TONE: Record<string, Tone> = {
  Technical: 'green',
  Design: 'violet',
  Marketing: 'amber',
  Strategy: 'blue',
  Development: 'orange',
};

const unsplash = (photo: string) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&q=80&w=1600`;

const DEFAULT_CTA: Block = {
  type: 'cta',
  heading: 'Ready to transform your digital presence?',
  text: "Let's apply these strategies to your business. Get a free consultation today.",
  label: 'Start your project',
  href: '/contact',
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Psychology of Color in Web Design',
    seoTitle: 'The Psychology of Color in Web Design: How to Increase Conversions',
    excerpt: 'How choosing the right color palette can increase your conversion rates by up to 24%.',
    category: 'Design',
    date: 'Mar 15, 2024',
    isoDate: '2024-03-15',
    author: 'Alex Morgan',
    readTime: '5 min read',
    image: unsplash('photo-1550684848-fac1c5b4e853'),
    body: [
      { type: 'h2', id: 'introduction', text: 'Introduction to color psychology' },
      { type: 'p', text: "In the digital landscape, color is not merely a decoration—it is a powerful communication tool that influences perception, emotion, and behavior. Understanding the psychology of color in web design is crucial for creating user experiences that not only look aesthetically pleasing but also drive specific actions. Whether it's the trustworthiness of blue or the urgency of red, every hue you choose tells a story to your users' subconscious minds." },
      { type: 'h2', id: 'why-color-matters', text: 'Why color matters' },
      { type: 'p', text: "Research shows that users form an opinion about a website within 50 milliseconds, and color accounts for up to 90% of that initial assessment. Color can aid brand recognition by up to 80%. When used strategically, it guides the user's eye, establishes hierarchy, and significantly impacts conversion rates (CRO)." },
      { type: 'h3', text: 'The emotional spectrum' },
      {
        type: 'ul',
        items: [
          { lead: 'Blue:', text: 'Trust, security, and stability (e.g., PayPal, Facebook, Banks).' },
          { lead: 'Red:', text: 'Urgency, excitement, and passion (e.g., Netflix, Clearance Sales).' },
          { lead: 'Green:', text: 'Growth, health, and money (e.g., Whole Foods, Android).' },
          { lead: 'Black:', text: 'Luxury, sophistication, and power (e.g., Apple, Luxury Brands).' },
        ],
      },
      { type: 'h2', id: 'designing-for-conversion', text: 'Designing for conversion' },
      { type: 'p', text: 'To optimize for conversions, use the "Isolation Effect" (Von Restorff Effect). This principle states that items that stand out from their surroundings are more likely to be remembered. For a CTA button to be effective, its color must contrast sharply with the background and surrounding elements.' },
      DEFAULT_CTA,
    ],
  },
  {
    id: '2',
    title: 'Why Speed is the New SEO King',
    seoTitle: 'Why Speed is the New SEO King: Core Web Vitals Guide 2024',
    excerpt: "Google's Core Web Vitals update changed everything. Here is how to optimize for 100/100 scores.",
    category: 'Technical',
    date: 'Mar 10, 2024',
    isoDate: '2024-03-10',
    author: 'Sarah Jenkins',
    readTime: '8 min read',
    image: unsplash('photo-1460925895917-afdab827c52f'),
    body: [
      { type: 'p', text: "A slow website doesn't just annoy visitors. It quietly pushes you down Google's results and sends the people who do find you straight back to your competitors. Since Google made page experience part of how it ranks pages, speed has become one of the few SEO factors you fully control." },
      { type: 'h2', id: 'vitals', text: 'What Google measures' },
      { type: 'p', text: "Google's Core Web Vitals are three numbers that describe how a page feels to a real visitor:" },
      {
        type: 'metrics',
        items: [
          { label: 'LCP · Loading', value: '≤ 2.5s', text: 'Time until the main content appears.', tone: 'green' },
          { label: 'INP · Responsiveness', value: '≤ 200ms', text: 'How quickly the page reacts to taps and clicks.', tone: 'blue' },
          { label: 'CLS · Stability', value: '≤ 0.1', text: 'How much the layout jumps while loading.', tone: 'amber' },
        ],
      },
      { type: 'h2', id: 'cost', text: 'What slowness costs you' },
      { type: 'p', text: "Most of your visitors are on a phone, often on mobile data. Every extra second they wait is a chance for them to hit back and tap the next result. For a school, that's a parent who never sees your admissions page. For a clinic, it's a patient who books somewhere else." },
      { type: 'quote', text: "Speed is the first impression. Visitors judge your business before they've read a single word." },
      { type: 'h2', id: 'fix', text: 'Five fixes that matter most' },
      {
        type: 'ol',
        items: [
          { lead: 'Compress and resize images.', text: "Serve modern formats like WebP at the size they're displayed." },
          { lead: 'Cut unused plugins and scripts.', text: 'Each one adds weight, and many load on every page.' },
          { lead: 'Use good hosting and a CDN.', text: "Your server's response time sets the floor for everything else." },
          { lead: 'Reserve space for images and embeds.', text: "Set dimensions so the layout doesn't jump." },
          { lead: "Load what's below the fold later.", text: 'Lazy-load images and defer non-essential code.' },
        ],
      },
      {
        type: 'cta',
        heading: 'Is your website slowing you down?',
        text: "We'll review your site for free and send a written list of fixes within 48 hours.",
        label: 'Get a free audit',
        href: '/contact',
      },
      { type: 'h2', id: 'check', text: 'Check your own site' },
      { type: 'p', text: 'Run your homepage through Google PageSpeed Insights and look at the mobile score first. If any of the three Core Web Vitals are amber or red, start with the fixes above. They usually make the biggest difference for the least effort.' },
    ],
  },
  {
    id: '3',
    title: 'From Visitor to Customer: CRO Basics',
    seoTitle: 'From Visitor to Customer: CRO Basics That Double Leads',
    excerpt: '5 actionable tweaks you can make to your landing page today to double your leads.',
    category: 'Marketing',
    date: 'Mar 05, 2024',
    isoDate: '2024-03-05',
    author: 'Michael Chen',
    readTime: '6 min read',
    image: unsplash('photo-1552664730-d307ca884978'),
    body: [
      { type: 'h2', id: 'the-art-of-conversion', text: 'The art of conversion' },
      { type: 'p', text: "Traffic is vanity; conversion is sanity. Conversion Rate Optimization (CRO) is the systematic process of increasing the percentage of website visitors who take a desired action. It's not about guessing—it's about data-driven decisions." },
      { type: 'h2', id: 'quick-wins', text: '5 quick wins for CRO' },
      { type: 'p', text: 'Implementing these changes can yield immediate results:' },
      {
        type: 'ul',
        items: [
          { lead: 'Clear Value Proposition:', text: 'State clearly what you do and typically "above the fold."' },
          { lead: 'Reduced Form Fields:', text: 'Remove unnecessary fields. Each field removed can increase conversions by 10%.' },
          { lead: 'Social Proof:', text: 'Add testimonials, logos, and case studies to build trust.' },
        ],
      },
      DEFAULT_CTA,
    ],
  },
  {
    id: '4',
    title: 'The Future of AI in Digital Agencies',
    seoTitle: 'The Future of AI in Digital Agencies: Adapt or Die',
    excerpt: 'How artificial intelligence is reshaping the landscape of design and development.',
    category: 'Strategy',
    date: 'Feb 28, 2024',
    isoDate: '2024-02-28',
    author: 'David Kim',
    readTime: '7 min read',
    image: unsplash('photo-1677442136019-21780ecad995'),
    body: [
      { type: 'h2', id: 'the-ai-revolution', text: 'The AI revolution' },
      { type: 'p', text: 'Artificial Intelligence is not coming; it is here. For digital agencies, AI represents the biggest paradigm shift since the mobile internet. From generative design to automated code writing, AI is touching every facet of the digital workflow.' },
      { type: 'h2', id: 'enhancing-creativity', text: 'Enhancing creativity, not replacing it' },
      { type: 'p', text: 'The fear that AI will replace human creativity is misplaced. Instead, AI serves as a powerful amplifier. Tools like Midjourney and ChatGPT allow designers and copywriters to iterate faster, explore more concepts, and focus on high-level strategy rather than execution.' },
      DEFAULT_CTA,
    ],
  },
  {
    id: '5',
    title: 'Mastering Tailwind CSS Grid',
    seoTitle: 'Mastering Tailwind CSS Grid: Complex Layouts Made Easy',
    excerpt: 'A deep dive into creating complex, responsive layouts with utility classes.',
    category: 'Development',
    date: 'Feb 22, 2024',
    isoDate: '2024-02-22',
    author: 'Sarah Jenkins',
    readTime: '10 min read',
    image: unsplash('photo-1587620962725-abab7fe55159'),
    body: [
      { type: 'h2', id: 'why-grid-matters', text: 'Why Grid matters' },
      { type: 'p', text: 'CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows, unlike Flexbox which is largely 1-dimensional. Tailwind CSS makes using Grid intuitive and rapid.' },
      { type: 'h2', id: 'bento-box-layout', text: 'Building a bento box layout' },
      { type: 'p', text: 'The "Bento" layout, popularized by Apple, features a grid of boxes of varying sizes. With Tailwind, this is achieved using `grid-cols-4`, `col-span-2`, and `row-span-2` utilities.' },
      DEFAULT_CTA,
    ],
  },
  {
    id: '6',
    title: 'Brand Storytelling in 2024',
    seoTitle: 'Brand Storytelling in 2024: Connecting with Gen Z',
    excerpt: 'Why narrative is more important than ever for connecting with Gen Z audiences.',
    category: 'Marketing',
    date: 'Feb 15, 2024',
    isoDate: '2024-02-15',
    author: 'Alex Morgan',
    readTime: '4 min read',
    image: unsplash('photo-1519389950473-47ba0277781c'),
    body: [
      { type: 'h2', id: 'death-of-traditional-ads', text: 'The death of traditional ads' },
      { type: 'p', text: 'Gen Z has a sophisticated bullshit detector. Traditional, interruption-based advertising no longer works. To connect with this demographic, brands must pivot to authentic storytelling that aligns with values and culture.' },
      { type: 'h2', id: 'authenticity-is-key', text: 'Authenticity is key' },
      { type: 'p', text: "It's not about selling a product; it's about inviting the customer into a narrative. User Generated Content (UGC) and behind-the-scenes content perform exceptionally well because they feel unpolished and real." },
      DEFAULT_CTA,
    ],
  },
];

export const getPost = (id: string) => BLOG_POSTS.find((p) => p.id === id);
