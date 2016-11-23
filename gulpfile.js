'use strict';

var gulp = require('gulp');
var Sass = require('gulp-Sass');

gulp.task('Sass', function () {
  return gulp.src('./Sass/**/*.scss')
    .pipe(Sass().on('error', Sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('Sass:watch', function () {
  gulp.watch('./Sass/**/*.scss', ['Sass']);
});
