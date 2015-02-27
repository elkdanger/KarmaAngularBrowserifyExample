var gulp = require('gulp');
var watch = require('gulp-watch');
var browserify = require('gulp-browserify');

gulp.task('default', ['bundle']);

gulp.task('bundle', function() {

	return gulp.src('./app/app.js')
		.pipe(browserify())
		.pipe(gulp.dest('./bundle'));

});

gulp.task('watch', function() {

	watch('./bundle/*.js', ['bundle']);

});