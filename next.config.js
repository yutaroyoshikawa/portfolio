const withTypescript = require("@zeit/next-typescript")
const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = withTypescript({
  target: 'serverless',
  poweredByHeader: false,
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

    return config
  }
})