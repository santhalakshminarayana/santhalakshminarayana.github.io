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