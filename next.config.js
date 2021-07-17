const path = require("path");
// @ts-check

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const nextConfig = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/apods": { page: "/apods" },
      "/rover": { page: "/rover" },
      "/epic": { page: "/epic" },
      "/earth": { page: "/earth" },
    };
  },
  /* config options here */
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "apod.nasa.gov",
      "epic.gsfc.nasa.gov",
      "mars.nasa.gov",
      "earthengine.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
