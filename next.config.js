const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer({
  runtime: "edge",
  poweredByHeader: false,
  trailingSlash: true,
  basePath: "",
  env: {
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
  reactStrictMode: true,
})
