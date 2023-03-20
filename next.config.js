const path = require('path');

module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    ADDRESS_NFT_MARKET: process.env.ADDRESS_NFT_MARKET,
    ADDRESS_NFT_MARKET_POLYGON: process.env.ADDRESS_NFT_MARKET_POLYGON,
    ADDRESS_NFT_MARKET_ETH: process.env.ADDRESS_NFT_MARKET_ETH,
    METAHERO_NFT_ADDRESS_POLYGON: process.env.METAHERO_NFT_ADDRESS_POLYGON,
    METAHERO_NFT_ADDRESS_ETH: process.env.METAHERO_NFT_ADDRESS_ETH,

    ADDRESS_COLLECTION_MARKET_POLYGON:process.env.ADDRESS_COLLECTION_MARKET_POLYGON,
    ADDRESS_COLLECTION_MARKET_ETH:process.env.ADDRESS_COLLECTION_MARKET_ETH

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
