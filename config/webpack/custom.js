const path = require("path")

const isDev = process.env.NODE_ENV === 'development'

const optimization = {
  splitChunks: {
    chunks: 'async',
    cacheGroups: {
      vendor: {
        chunks: 'async',
        name: 'vendor',
        test: 'vendor',
        enforce: true,
      },
    },
  },
};
module.exports = {
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "../../app/javascript/")
    }
  },
 optimization 
}
