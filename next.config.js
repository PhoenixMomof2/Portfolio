/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: [], // Add the domain(s) from which you are fetching images, e.g., ["example.com"]
    loader: 'default', // Use "default" loader for regular images or add other loaders like "imgix" or "cloudinary"
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;