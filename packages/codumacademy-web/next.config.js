const webpack = require("webpack");
const withOffline = require("next-offline");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const { IgnorePlugin } = webpack;
const Dotenv = require("dotenv-webpack");

const initExport = {
  dontAutoRegisterSw: true,
  webpack: (config, { dev }) => {
    config.node = { // eslint-disable-line
      fs: "empty"
    };
    config.plugins.push(new IgnorePlugin(/^\.\/locale$/, /moment$/));

    config.plugins.push(new Dotenv());

    config.plugins.push(
      new CopyWebpackPlugin([
        { from: "./utils/OneSignalSDKWorker.js", to: "./" },
        { from: "./utils/OneSignalSDKUpdaterWorker.js", to: "./" }
      ])
    );

    config.module.rules.push(
      {
        test: /\.(css)/,
        loader: "emit-file-loader",
        options: {
          name: "dist/[path][name].[ext]"
        }
      },
      {
        test: /\.css$/,
        use: ["babel-loader", "raw-loader", "postcss-loader"]
      },
      {
        test: /\.(ttf|eot|png|woff|svg)$/,
        loader: "file-loader"
      }
    );

    if (dev) {
      config.module.rules.push({
        test: /\.(jsx?|gql|graphql)$/,
        loader: "eslint-loader",
        exclude: ["/node_modules/", "/.next/"],
        enforce: "pre"
      });
    }

    return config;
  }
};

module.exports = withOffline(initExport);
