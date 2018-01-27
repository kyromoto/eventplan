var gulp = require('gulp'),
    gutil = require('gulp-util'),
    livereload = require('gulp-livereload'),
    supervisor = require('gulp-supervisor');


gulp.task('supervisor', function() {
	supervisor('./app.js');
});

gulp.task('default', function() {
	livereload.listen();
	gulp.start('supervisor');
	return gutil.log('Gulp is running');
});
