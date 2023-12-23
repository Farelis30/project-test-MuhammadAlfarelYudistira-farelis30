/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "suitmedia.static-assets.id",
      },
    ],
  },
};

module.exports = nextConfig;
