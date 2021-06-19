const path = require("path");
// @ts-check

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["apod.nasa.gov", "epic.gsfc.nasa.gov"],
  },
};

module.exports = nextConfig;
