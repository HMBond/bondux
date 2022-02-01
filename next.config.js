const withPWA = require('next-pwa');

/**
 * @type {import('next').NextConfig}
 */
const config = {
  experimental: {
    styledComponents: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    swSrc: 'service-worker.js',
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader',
    });
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = withPWA(config);
