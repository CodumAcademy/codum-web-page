const nested = require("postcss-nested");
const atImport = require("postcss-import");
const clean = require("postcss-clean");

module.exports = {
  plugins: [nested(), atImport(), clean()]
};
