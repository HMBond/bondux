const withPWA = require('next-pwa');

module.exports = withPWA({
  experimental: {
    modern: false,
  },
  swcMinify: true,
  reactStrictMode: true,
  optimizeFonts: false,
  pwa: {
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
});
