const { environment } = require("@rails/webpacker")
const { ProvidePlugin, EnvironmentPlugin } = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const dotenv = require("dotenv")
const path = require('path')
const customConfig = require("./custom")
const rules = environment.loaders

const cssLoader = rules.get("css")
const sassLoader = rules.get("sass")
const babelLoader = rules.get("babel")
const ManifestPlugin = environment.plugins.get("Manifest")

const devMode = process.env.NODE_ENV === "development"
const dotenvFiles = [`.env.${process.env.NODE_ENV}`, ".env"]
const sassResources = [path.resolve(__dirname, "../../app/assets/stylesheets/_resources.scss")];
const styleLoader = devMode ? "style-loader" : MiniCssExtractPlugin.loader



const resourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: sassResources,
  },
}
sassLoader.use.splice(-1, 0, {
  loader: 'resolve-url-loader'
});

sassLoader.use.push(resourcesLoader);



const CSSModuleLoader = {
  loader: "css-loader",
  options: {
    modules: true,
    importLoaders: 2,
    sourceMap: devMode
  }
}
dotenvFiles.forEach(dotenvFile => {
  dotenv.config({ path: dotenvFile, silent: true })
})

environment.loaders.insert("babel", babelLoader, { before: "css" })
environment.config.merge(customConfig)
cssLoader.use[1].options.modules = true
sassLoader.use[1].options.modules = true

environment.plugins.prepend(
  "Provide",
  new ProvidePlugin({
    React: "react"
  })
)

environment.plugins.prepend(
  "Environment",
  new EnvironmentPlugin(JSON.parse(JSON.stringify(process.env)))
)

environment.config.set(
  "devtool",
  devMode ? "source-map" : "cheap-module-source-map"
)

environment.loaders.insert("scssModule", {
  test: /\.module\.(sa|sc|c)ss$/,
  use: [styleLoader, CSSModuleLoader,"sass-loader",resourcesLoader]
})




rules.delete("nodeModules")
rules.delete("moduleCss")
rules.delete("moduleSass")

ManifestPlugin.options.writeToFileEmit = true

module.exports = environment
