/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://spacemart.infura-ipfs.io'],
  },
};

module.exports = nextConfig;