import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
          { key: "Cross-Origin-Embedder-Policy", value: "unsafe-none" }
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
        { hostname: "lh3.googleusercontent.com" }
    ]
},
output: 'standalone', 
};

export default nextConfig;

