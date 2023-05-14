// https://vanilla-extract.style/documentation/integrations/next/

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "standalone",
  reactStrictMode: true,
};

module.exports = withVanillaExtract(nextConfig);
