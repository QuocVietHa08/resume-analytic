const path = require('path');

module.exports = {
  reactStrictMode: true,
  env: {
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    SEND_IN_BLUE_URL: process.env.SEND_IN_BLUE_URL,
    BASE_URL: process.env.BASE_URL,
  },
  sassOptions: {
    fiber: false,
    includePaths: [path.join(__dirname, 'src')],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },  
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/sitemap-generator');
    }

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
};
