const path = require('path');
var WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin;

module.exports = {
	// devtool: "cheap-eval-source-map",
	// devtool: "cheap-source-map",
	// devtool: "source-map",
	// devtool: "cheap-module-source-map",
	// devtool: "hidden-source-map",
	devtool: "nosources-source-map",

	entry : [
		'./src/app.js', 
		'./src/jq_script.js'
	],

	output : {
		filename: 'bundle.js',
		path : path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		}
		]
	},

	plugins: [
		new WebpackBundleSizeAnalyzerPlugin('./reports/plain-report.txt')
	]
	,
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000
	}

};