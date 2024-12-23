import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.placeholders.dev',
      },
      {
        hostname: 'avatar.iran.liara.run',
      },
    ],
  },
};

export default nextConfig;
