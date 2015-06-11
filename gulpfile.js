'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var _ = require('lodash');
var wrench = require('wrench');
var gulpNgConfig = require('gulp-ng-config');

var options = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e',
  errorHandler: function(title) {
    return function(err) {
      gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
      this.emit('end');
    };
  }
};

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file)(options);
});

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

gulp.task('local', function() {
  gulp.src('configFile.json')
    .pipe(gulpNgConfig('uvpBuilderWeb.config', {
      environment: 'local'
    }))
    .pipe(gulp.dest('src/app'));
});

gulp.task('staging', function() {
  gulp.src('configFile.json')
    .pipe(gulpNgConfig('uvpBuilderWeb.config', {
      environment: 'staging'
    }))
    .pipe(gulp.dest('src/app'));
});

gulp.task('production', function() {
  gulp.src('configFile.json')
    .pipe(gulpNgConfig('uvpBuilderWeb.config', {
      environment: 'production'
    }))
    .pipe(gulp.dest('src/app'));
});
