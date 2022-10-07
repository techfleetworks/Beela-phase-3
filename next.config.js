/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["via.placeholder.com"],
  // },
  images: {
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
}

module.exports = nextConfig
