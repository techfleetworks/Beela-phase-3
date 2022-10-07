/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["via.placeholder.com"],
  // },
  images: {
    loader: 'akamai',
    path: '',
    domains: ["via.placeholder.com"],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
