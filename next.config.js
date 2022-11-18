const path = require('path');
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
// @ts-check

/** @type {import('next').NextConfig} */

module.exports = {
  /* config options here */
  experimental: {
    appDir: true,
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/", query: { __nextDefaultLocale: 'en' } },
      "/apod": { page: "/apod", query: { __nextDefaultLocale: 'en' } },
      "/rover": { page: "/rover", query: { __nextDefaultLocale: 'en' } },
      "/epic": { page: "/epic", query: { __nextDefaultLocale: 'en' } },
      "/landsat": { page: "/landsat", query: { __nextDefaultLocale: 'en' } },
    };
  },
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
  },
  // domains allowed to send json
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "apod.nasa.gov",
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: "epic.gsfc.nasa.gov",
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: "mars.nasa.gov",
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: "earthengine.googleapis.com",
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.youtube.com',
        pathname: '/embed/**',
      },
      {
        protocol: 'https',
        hostname: 'player.vimeo.com',
        pathname: '/video/**',
      },
    ],
  },
};
