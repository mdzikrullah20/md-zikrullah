/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        port: '',
        pathname: '/api/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Optimize images for better performance
    formats: ['image/webp', 'image/avif'],
    // Enable image optimization
    unoptimized: false,
  },
  // Ensure static files are properly handled
  trailingSlash: false,
}

module.exports = nextConfig