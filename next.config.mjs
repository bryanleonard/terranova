/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  output: "export", // Ensures the app is fully static
  images: {
    unoptimized: true, // Required for exporting images statically
  },
  basePath: "/terranove", // Replace with your actual repository name
  assetPrefix: "/terranova/", // Required for assets to load correctly
  // sassOptions: {
  //   implementation: 'sass-embedded'
  // },
};

export default nextConfig;
