import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add this 'images' object
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
      },
    ],
  },
};

export default nextConfig;