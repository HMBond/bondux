/**
 * @type {import('next').NextConfig}
 */
const config = {
  output: 'export',
  images: { unoptimized: true },
  compiler: {
    styledComponents: true,
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

module.exports = config;
