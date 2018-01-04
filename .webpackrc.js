import cssnano from 'cssnano';
import pxtorem from 'postcss-pxtorem';

export default {
	entry              : './src/renderer/index.js',
	outputPath         : './app/pages',
	define             : {
		'$dirname': __dirname
	},
	disableCSSModules  : false,
	html               : {
		template: './src/renderer/index.ejs'
	},
	sass               : {
		includePaths: ['node_modules', 'src/renderer/style']
	},
	theme              : {
		'primary-color': '#f25d8e'
	},
	extraPostCSSPlugins: [
		pxtorem({rootValue: 16})
	],
	extraBabelPlugins  : [
		'transform-decorators-legacy',
		'lodash',
		['import', {libraryName: 'antd', libraryDirectory: 'es', style: true}]
	],
	externals          : [
		function (context, request, callback) {
			let isExternal = false;
			const load     = [
				'electron'
			];
			if (load.includes(request)) {
				isExternal = `require("${request}")`;
			}
			callback(null, isExternal);
		}
	],
	env                : {
		development: {
			extraBabelPlugins: [
				'dva-hmr'
			]
		},
		production : {
			extraPostCSSPlugins: [
				cssnano(
					{safe: true},
					{preset: ['default', {discardComments: {removeAll: true}}]})
			]
		}
	},
	ignoreMomentLocale : true
};
