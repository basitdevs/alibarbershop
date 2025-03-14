import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "alibarbershop.at",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
