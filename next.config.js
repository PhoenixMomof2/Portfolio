/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    path: '/_next/image',
    loader: 'default', // Use "default" loader for regular images 
    disableStaticImages: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;