const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/lavish-clinic",
  trailingSlash: true,
  pageExtensions: ["ts", "tsx", "mdx"],
};

module.exports = withMDX(nextConfig);
