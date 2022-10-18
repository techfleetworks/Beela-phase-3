/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
    domains: ["via.placeholder.com"],
  },
  cssModules: true,
  sass: true,
  reactStrictMode: true,
}

module.exports = nextConfig
