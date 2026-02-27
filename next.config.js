const path = require("path");
const ghPages = process.env.DEPLOY_TARGET === "gh-pages";

const withPlugins = require("next-compose-plugins");
const MDX = require("@next/mdx");

// next.js configuration
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    config.resolve.alias.images = path.join(__dirname, "images");
    return config;
  },
  pageExtensions: ["js", "jsx", "md", "mdx"],
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
    };
  },
  basePath: ghPages ? "/santhalakshminarayana.github.io/" : "",
  assetPrefix: ghPages ? "/santhalakshminarayana.github.io/" : "",
  output: "export",
};

module.exports = withPlugins(
  [
    [
      MDX,
      {
        extension: /\.mdx?$/,
      },
    ],
  ],
  nextConfig
);

/* Next Optimized Images configuration

const optimizedImages = require('next-optimized-images');

// next.js configuration
const nextConfig = {
  webpack: (config, { isServer }) => {
      if (!isServer) {
          config.node = {
          fs: 'empty'
          }
      }
      config.resolve.alias.images = path.join(__dirname, "images");
      return config
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  target: 'serverless',
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    }
  },
  basePath: ghPages? '/santhalakshminarayana.github.io/' : '',
  assetPrefix: ghPages ? '/santhalakshminarayana.github.io/' : '',
}

module.exports = withPlugins([
  [optimizedImages, {
    removeOriginalExtension: true,
    responsive: {
      adapter: require('responsive-loader/sharp'),
      sizes: [480, 720, 960],
    },
  }],

  [MDX, {
    extension: /\.mdx?$/,
  }]
], nextConfig)

*/
