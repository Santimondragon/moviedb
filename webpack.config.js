/* jslint esversion: 6*/

const ErrorOverlayPlugin = require('error-overlay-webpack-plugin'),
  history = require('connect-history-api-fallback'),
  convert = require('koa-connect');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./app.ts",
  output: {
    filename: "bundle.js"
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx"]
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [{
        loader: "ts-loader"
      }]
    }, ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
      "react": "React",
      "react-dom": "ReactDOM"
    }
  }
};

module.exports.serve = {
  content: ['public'],
  add: (app, middleware, options) => {
    app.use(convert(history()));
  },
  open: true,
  dev: {
    publicPath: "/assets/dist/"
  }
};