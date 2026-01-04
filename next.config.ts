const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

const nextConfig = {
  // output: "export",
  basePath: "/lavish-clinic",
  assetPrefix: "/lavish-clinic/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
