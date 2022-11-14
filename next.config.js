const path = require('path');
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
// @ts-check

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const nextConfig = {
  exportPathMap: async function(
  ) {
    return {
      "/": { page: "/" },
      "/apod": { page: "/apod" },
      "/rover": { page: "/rover" },
      "/epic": { page: "/epic" },
      "/landsat": { page: "/landsat" },
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
  // domains allowed to send json
  images: {
    domains: [
      "apod.nasa.gov",
      "epic.gsfc.nasa.gov",
      "mars.nasa.gov",
      "earthengine.googleapis.com",
    ],
  },
};

module.exports = withPlugins([[optimizedImages, {}], nextConfig]);
