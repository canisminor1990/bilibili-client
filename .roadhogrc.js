import cssnano from 'cssnano';
import pxtorem from 'postcss-pxtorem';

export default {
	entry              : './src/renderer/index.js',
	outputPath         : './app/pages',
	publicPath: '/',
	define             : {
		'$dirname': '__dirname'
	},
	disableCSSModules  : false,
	sass               : {
		sourceMap   : process.env.NODE_ENV === 'development',
		includePaths: ['node_modules', 'src/style']
	},
	extraPostCSSPlugins: [
		pxtorem({
			        rootValue    : 16,
			        propWhiteList: []
		        })
	],
	extraBabelPlugins  : [
		'transform-runtime',
		[
			'import',
			[
				{
					libraryName: 'antd',
					style      : true
				}
			]
		]
	],
	autoprefixer       : {
		browsers: ['iOS >= 8', 'Android >= 4']
	},
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
	}
};
