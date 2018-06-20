const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../src/**/*")
      },
      {
        test: /\.[j|t]sx?$/,
        loader: require.resolve("ts-loader"),
        include: path.resolve(__dirname, "../src/**/*"),
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true
        }
      }
    ]
  }
};
