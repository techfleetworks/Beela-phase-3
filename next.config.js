/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com"],
  },
  reactStrictMode: true,
}
const withCSS = require("@zeit/next-css")

module.exports = nextConfig
module.exports = withCSS({
  cssLoaderOptions: {
    url: false,
  },
})
