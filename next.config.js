const path = require('path');

module.exports = {
  reactStrictMode: true,
  env: {
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    SEND_IN_BLUE_URL: process.env.SEND_IN_BLUE_URL,
  },
  sassOptions: {
    fiber: false,
    includePaths: [path.join(__dirname, 'src')],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    localeDetection: false,
    locales: ['jp'],
    defaultLocale: 'jp',
  },
};
