const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  pageExtensions: ["ts", "tsx", "mdx"],
};

module.exports = withMDX(nextConfig);
