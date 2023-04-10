/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: false,
  swcMinify: true,
  output: 'standalone',
  images: {
    domains: ['github.githubassets.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.txt$/,
      use: 'raw-loader',
    })

    return config
  },
  headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          }
        ],
      },
    ]
  },
};

module.exports = nextConfig;
