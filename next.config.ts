import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  onError: (error) => {
    console.error("Unhandled exception:", error);
  },
  experimental: {
    outputStandalone: true,
  },
};

export default nextConfig;