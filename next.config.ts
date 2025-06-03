import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/univen-mobile' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/univen-mobile' : '',
};

export default nextConfig;
