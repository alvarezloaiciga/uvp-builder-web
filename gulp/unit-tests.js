'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();
var karma = require('karma').server;

module.exports = function() {
  gulp.task('test', ['scripts'], function() {
    karma.start({
      configFile: __dirname + '/../karma.conf.js'
    });
  });
};
