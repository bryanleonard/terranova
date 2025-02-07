/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: isProd, // Disable optimization only in production
  },
  assetPrefix: isProd ? '/terranova/' : '', // Only set for production
  basePath: isProd ? '/terranova' : '', // Only set for production
  ...(isProd && { output: 'export' }) // Only apply static export in production
};


export default nextConfig;
