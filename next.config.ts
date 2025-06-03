import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enables static exports
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/univen-mobile' : '',
};

export default nextConfig;
