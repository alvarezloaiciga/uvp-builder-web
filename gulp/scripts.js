'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var gulpNgConfig = require('gulp-ng-config');

var $ = require('gulp-load-plugins')();

module.exports = function(options) {
  gulp.task('scripts', function () {
    gulp.src('configFile.json')
      .pipe(gulpNgConfig('uvpBuilderWeb.config', {
        environment: 'local'
      }))
      .pipe(gulp.dest('src/app'));
    return gulp.src(options.src + '/{app,components}/**/*.js')
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-stylish'))
      .pipe(browserSync.reload({ stream: true }))
      .pipe($.size());
  });
};
