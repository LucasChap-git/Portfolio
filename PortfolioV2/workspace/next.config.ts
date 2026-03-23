import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const basePath = isProd && repoName ? `/${repoName}` : '';

const nextConfig: NextConfig = {
  // Only export as static in production builds. During development we
  // want the normal Next.js dev server with HMR.
  ...(isProd ? { output: 'export' } : {}),
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Help Turbopack infer the correct root when running in this workspace.
  // turbopack: { root: __dirname },
  // Ensure module resolution prefers this workspace's node_modules
  // webpack(config) {
  //   config.resolve = config.resolve || {};
  //   config.resolve.modules = [path.resolve(__dirname, 'node_modules'), ...(config.resolve.modules || [])];
  //   return config;
  // },
};

export default nextConfig;
