import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images:{
  domains:["images.unsplash.com"]
 },
 reactStrictMode: true,
 webpack: (config) => {
   config.resolve.fallback = { fs: false, path: false };
   return config;
 },
};

export default nextConfig;
