/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  trailingSlash: true,
  output: 'export',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["placeholder.svg"],
    unoptimized: true,
  },

}



module.exports = nextConfig
