/*eslint-env node*/

var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack/hot/only-dev-server',
		__dirname + '/client-js/index.js' // Your appʼs entry point
	],
	output: {
		path: __dirname + '/client-dist/',
		publicPath: "/assets/",
		filename: 'bundle.js',
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules\//,
			loaders: ['react-hot', 'babel-loader']
		}]
	},
	devtool: 'source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};
