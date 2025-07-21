var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/react-image-zooom.tsx",
  output: {
    path: path.resolve("lib"),
    filename: "react-image-zooom.js",
    library: "ReactImageZooom", 
    libraryTarget: "umd", 
    globalObject: "this",
  },
  optimization: {
    minimize: false,
    usedExports: false,
    sideEffects: false,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
              plugins: [
                "@babel/plugin-transform-react-jsx",
              ],
            },
          },
          {
            loader: "ts-loader",
          },
        ],
        exclude: /(node_modules)/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
};
