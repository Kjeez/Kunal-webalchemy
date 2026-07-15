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
  turbopack: {
    resolveAlias: {
      'react-router-dom': './lib/router-compat.tsx',
    },
  },
};

export default nextConfig;
