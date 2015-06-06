var gulp = require('gulp');

var babel = require('gulp-babel');

gulp.task('recompile', function(){
	return gulp.src('js/*.js*')
		.pipe(babel({stage: 1, optional: ['runtime']}))
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
	gulp.watch('js/*.js*', ['recompile']);
});

gulp.task('default', ['recompile']);
