'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require('./webpack.config.js');

gulp.task('recompile', function() {
	return gulp.src('server-js/*.js*')
		.pipe(babel({
			stage: 1,
			optional: ['runtime']
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	gulp.watch('server-js/*.js*', ['recompile']);
});

gulp.task('webpack', function() {

});

gulp.task('default', ['recompile', 'watch', 'webpack']);

gulp.task('webpack', function() {

	var server = new WebpackDevServer(webpack(config), {
		// webpack-dev-server options
		// or: contentBase: "http://localhost/",

		hot: true,
		// Enable special support for Hot Module Replacement
		// Page is no longer updated, but a "webpackHotUpdate" message is send to the content
		// Use "webpack/hot/dev-server" as additional module in your entry point
		// Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.

		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		},
		stats: {
			colors: true
		}
	});
	server.listen(12346, "localhost", function() {});
});
