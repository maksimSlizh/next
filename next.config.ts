import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true
  },

  typescript: {
    ignoreBuildErrors: false
  },

  images: {
    domains: ['archive.smashing.media', 'blog.pixelfreestudio.com', 'tsh.io']
  }
}

export default nextConfig
