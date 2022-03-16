// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV == "production";
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



let b = path.resolve("node_modules","import-me","node_modules","buffer")
console.log(b)

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        include: path.resolve("node_modules","import-me","node_modules","buffer","index.js"),
        sideEffects: false
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      }

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: { encoding: false, memcpy: false, zlib: false, path: false, querystring: false, os: false, http: false,  stream: false, https: false, crypto: false, electron: false, fs: false, net: false, tls: false }
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new webpack.IgnorePlugin({
      checkResource(resource, context) {
          // const isLocaleFromMomentImport =
          //         /^\.\/locale$/.test(resource) && /moment$/.test(context);
          // const isReactTooltipIndexFile = /^\.\/index\.es\.js$/.test(resource) && /react-tooltip\/dist$/.test(context);
 
          // const isBuffer = /^buffer$/.test(resource)
          // console.log(resource)
          // console.log(isBuffer)
          // console.log(context)
          // console.log("----")
          // Do some test here on the name of the module you want to exclude 
          return (
            false
          );
      },
  }),
  ]
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
    config.optimization =  {
      usedExports: true,
      innerGraph: true,
      sideEffects: true,
    };
    config.devtool = false;
    config.plugins.push(new BundleAnalyzerPlugin());
  }
  return config;
};
