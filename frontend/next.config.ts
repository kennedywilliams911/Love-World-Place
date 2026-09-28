import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year for static images
  },
  compress: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "@tiptap/react"],
  },
};

export default nextConfig;
