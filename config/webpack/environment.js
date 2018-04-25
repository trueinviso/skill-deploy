const { environment } = require('@rails/webpacker')
const { ProvidePlugin } = require("webpack")

environment.plugins.prepend(
  "Provide",
  new ProvidePlugin({
    React: "react",
    fetch:
      "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch",
  })
)

module.exports = environment
