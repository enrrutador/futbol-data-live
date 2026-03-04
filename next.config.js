/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/futbol-data-live',
  assetPrefix: '.',
  images: {
    unoptimized: true,
  },
  // Forzar modo estático para GitHub Pages
  trailingSlash: true,
  // Desactivar SSR
  reactStrictMode: true,
  // Compatibilidad con Node 20
  experimental: {
    forceSwcTransforms: true,
  },
  // Variables de entorno para build
  env: {
    NEXT_PUBLIC_BUILD_MODE: 'static',
    NEXT_PUBLIC_SUPABASE_URL: 'https://mock.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: 'mock-key',
  }
}

module.exports = nextConfig
