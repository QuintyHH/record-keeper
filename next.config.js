/** @type {import('next').NextConfig} */

const assets = []

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'geolocation=()',
  },
]

const getHeader = (asset) => ({
  source: asset,
  headers: [
    {
      key: 'Cache-control',
      value: 'public, immutable, max-age=63072000',
    },
  ],
})

const nextConfig = {
  swcMinify: true,
  optimizeFonts: true,
  pageExtensions: ['page.tsx', 'page.ts', 'api.ts', 'xml.tsx'],
  poweredByHeader: false,
  publicRuntimeConfig: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    appUrl: process.env.NEXT_PUBLIC_WEBAPP_BASE_URL,
  },
  reactStrictMode: false,
  serverRuntimeConfig: {
    contentful: {
      space: process.env.CONTENTFUL_SPACE_ID,
      key: process.env.CONTENTFUL_ACCESS_TOKEN,
      environment: process.env.CONTENTFUL_ENVIRONMENT,
      preview: process.env.CONTENTFUL_PREVIEW_TOKEN,
    },
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: false,
    domains: ['images.ctfassets.net'],
    deviceSizes: [768, 1440],
    imageSizes: [360, 480, 720],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 600,
  },

  headers: async () => {
    return [
      ...assets.map((asset) => getHeader(asset)),
      { source: '/:path*', headers: securityHeaders },
    ]
  },
}

module.exports = nextConfig
