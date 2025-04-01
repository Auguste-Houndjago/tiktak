import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
        { hostname: "lh3.googleusercontent.com" }
    ]
},
output: 'standalone', 
};

export default nextConfig;
