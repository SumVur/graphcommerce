/* eslint-disable @typescript-eslint/no-var-requires */
const withTranspile = require('next-transpile-modules')(['@reachdigital/graphql-mesh'], {
  unstable_webpack5: false,
})

const nextConfig = {}

module.exports = withTranspile(nextConfig)
