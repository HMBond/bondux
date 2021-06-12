module.exports = {
  target: "serverless",
  distDir: "_next",
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    return "build1";
  },
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
