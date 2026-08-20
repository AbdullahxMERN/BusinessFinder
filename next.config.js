/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'ui-avatars.com', 'source.unsplash.com'],
    unoptimized: true
  }
}

module.exports = nextConfig
