'use strict';
var gulp = require('gulp');
var jade = require('gulp-jade');
var uglify = require('gulp-uglify');
var karma = require('gulp-karma');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('uglify', function() {
  return gulp.src('./app/scripts/*')
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

gulp.task('default', function(){
	console.log('siema');
});