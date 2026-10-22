import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const routerCompat = path.join(__dirname, 'lib', 'router-compat.tsx');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Legacy components still import from 'react-router-dom'; both bundlers
  // resolve it to the compat shim until the per-page migration replaces it.
  webpack: (config) => {
    config.resolve.alias['react-router-dom'] = routerCompat;
    return config;
  },
  // Portfolio build: agency-only pages (marketing, PR, apps, local SEO
  // landers, the starter-offer promo) send visitors to the closest section.
  async redirects() {
    const to = (source, destination) => ({ source, destination, permanent: false });
    return [
      to('/services/digital-marketing', '/#expertise'),
      to('/services/content-strategy', '/#expertise'),
      to('/services/pr-advertising', '/#expertise'),
      to('/services/app-development', '/#expertise'),
      to('/website-developer-delhi', '/'),
      to('/website-developer-gurgaon', '/'),
      to('/website-developer-noida', '/'),
      to('/web-development-company-delhi-ncr', '/'),
      to('/starter-offer', '/#contact'),
    ];
  },
  turbopack: {
    resolveAlias: {
      'react-router-dom': './lib/router-compat.tsx',
    },
  },
};

export default nextConfig;
