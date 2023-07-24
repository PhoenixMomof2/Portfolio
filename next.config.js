/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: 'default', // Use "default" loader for regular images 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;