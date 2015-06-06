var gulp = require('gulp');

var babel = require('gulp-babel');

var exec = require('promised-exec');

gulp.task('recompile', function(){
	return gulp.src('js/*.js*')
		.pipe(babel({stage: 1, optional: ['runtime']}))
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
	gulp.watch('js/*.js*', ['recompile']);
});

gulp.task('default', ['recompile']);

gulp.task('ungit', function(){
	exec('mv * ..').then(function(){
		return exec('mv .[!.]* ..');
	}).then(function(){
		exec('cd ..; rm -r jb-base-project; rm -r -f .git; npm install;');
	})
});
