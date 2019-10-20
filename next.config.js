const webpack = require("webpack");

module.exports = {
  devIndicators: {
    autoPrerender: false
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader"
    });

    return config;
  }
};
