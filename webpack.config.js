//  Configuration file of webpack
var path = require("path");
var webpack = require("webpack");
var pkg = require(path.join(__dirname, "package.json"));
var dirs = pkg.configs.directories;
var version = process.env.VERSION || pkg.version;
var banner = pkg.name + " v" + version + "\n" +
  "(c) " + new Date().getFullYear() +
  " " + pkg.author.name + "\n" +
  "Released under the " + pkg.license + " License.";

module.exports = {
  entry: {
    "iview-country-select": path.join(__dirname, dirs.src, "iview-country-select.js")
  },
  resolve: {
    root: [__dirname],
    modulesDirectories: []
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.BannerPlugin(banner)
  ],
  output: {
    path: path.join(__dirname, dirs.dist),
    filename: "[name].js",
    sourceMapFilename: "[file].map"
  }
};