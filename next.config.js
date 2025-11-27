const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  script-src-elem 'self';
  connect-src 'self' *.zijieapi.com;
  frame-src 'self';
  style-src 'self' 'unsafe-inline';
  img-src *;
  font-src 'self' data:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  block-all-mixed-content;
  upgrade-insecure-requests;
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.githubassets.com'
      },
      {
        protocol: 'https',
        hostname: '*.music.126.net'
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org'
      },
      {
        protocol: 'https',
        hostname: 'www.themoviedb.org'
      },
      {
        hostname: 'mmbiz.qpic.cn'
      }
    ],
  },
  turbopack: {
    rules: {
      '*.txt': [
        {
          loaders: ['raw-loader'],
          as: '*.js',
        },
      ],
    },
  },
  headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ]
  },
};

module.exports = nextConfig;
