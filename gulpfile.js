'use strict';
var gulp = require('gulp');
var jade = require('gulp-jade');
var uglify = require('gulp-uglify');
var karma = require('gulp-karma');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();

gulp.task('uglify', function() {
  return gulp.src('./app/scripts/**/*')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts/'));
});

 gulp.task('sass', function () {
 gulp.src('./app/styles/*.scss')
   .pipe(sass({outputStyle: 'compressed'}))
   .pipe(gulp.dest('./dist/styles'));
});

gulp.task('templates', function() {
  gulp.src('./app/templates/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist/templates'))
});

var testFiles = [
	'./app/scripts/js/*.js',
  './app/scripts/tests/*'
];
 
gulp.task('test', function() {
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      throw err;
    });
});
gulp.task('watch', function(){
	gulp.watch('./app/scripts/**/*', ['uglify']);
	gulp.watch('./app/templates/*', ['templates']);
	gulp.watch('./app/styles/*', ['sass']);
	gulp.watch('./app/scripts/**/*', ['test']);
});
gulp.task('default', ['watch']);