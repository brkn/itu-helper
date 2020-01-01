const path = require("path");

module.exports = {
  entry: {
    content: "./src/content.ts",
    background: "./src/background.ts",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/"),
  },
};
