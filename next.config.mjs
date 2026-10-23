import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const routerCompat = path.join(__dirname, 'lib', 'router-compat.tsx');

/** @type {import('next').NextConfig} */
// Old numeric blog URLs → keyword slugs (keep in sync with data/blogPosts.ts).
const BLOG_SLUGS = {
  1: 'psychology-of-color-in-web-design',
  2: 'website-speed-core-web-vitals',
  3: 'conversion-rate-optimization-basics',
  4: 'ai-in-digital-agencies',
  5: 'tailwind-css-grid-layouts',
  6: 'brand-storytelling',
};

const nextConfig = {
  async redirects() {
    return [
      ...Object.entries(BLOG_SLUGS).map(([id, slug]) => ({
        source: `/blog/${id}`,
        destination: `/blog/${slug}`,
        permanent: true,
      })),
    ];
  },
  // Legacy components still import from 'react-router-dom'; both bundlers
  // resolve it to the compat shim until the per-page migration replaces it.
  webpack: (config) => {
    config.resolve.alias['react-router-dom'] = routerCompat;
    return config;
  },
  turbopack: {
    resolveAlias: {
      'react-router-dom': './lib/router-compat.tsx',
    },
  },
};

export default nextConfig;
