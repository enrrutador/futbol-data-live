/**
 * @type { import('next').NextConfig }
 */

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/futbol-data-live',
  assetPrefix: '.',
  images: {{
    unoptimized: true,
  },
};

module.exports = nextConfig;