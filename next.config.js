const path = require('path');

module.exports = {
  reactStrictMode: true,
  env: {
    KEY: process.env.KEY,
    PASSWORD: process.env.PASSWORD,
    CONVERT_API_KEY: process.env.CONVERT_API_KEY,
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
