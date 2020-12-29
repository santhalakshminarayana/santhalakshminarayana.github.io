const path = require("path");
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const MDX = require('@next/mdx');

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
      sizes: [320, 640, 960, 1200, 1800, 2400],
    },
	}],

	[MDX, {
		extension: /\.mdx?$/,
	}]
], nextConfig)


/*
const path = require("path");

const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

const withOptimizedImages = require('next-optimized-images');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});


module.exports = withOptimizedImages(
	withMDX({
		webpack: (config, { isServer }) => {
		    if (!isServer) {
		      	config.node = {
		        fs: 'empty'
		     	}
		    }
		    config.resolve.alias.images = path.join(__dirname, "images");
		    return config
		},
		module: {
			rules: [
		    {
		      test: /\.(jpe?g|png|webp)$/i,
		      use: {
		        loader: "responsive-loader",
		        options: {
		          adapter: require("responsive-loader/sharp"),
		          sizes: [320, 640, 960, 1200, 1800, 2400],
		        },
		      },
		    },
		  ],
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
	})
)
*/