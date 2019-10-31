module.exports = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader"
    });
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };
    return config;
  }
};
