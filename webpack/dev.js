const webpack = require("webpack");
const merge = require("webpack-merge");
const { createConfig, APP_PATH } = require("./common");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = (env, argv) =>
  merge(createConfig(env, argv), {
    mode: "development",
    devtool: "inline-source-map",

    plugins: [new ReactRefreshWebpackPlugin({ disableRefreshCheck: true })],

    optimization: {
      minimize: false
    },

    devServer: {
      contentBase: APP_PATH,
      openPage: "",
      inline: true,
      stats: "minimal",
      open: false,
      hot: true,
      historyApiFallback: true,
      disableHostCheck: true
    }
  });
