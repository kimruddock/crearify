'use strict';

const gulp = require('gulp');
const util = require('gulp-util');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const babel = require('babelify');

// js task
gulp.task('js', function() {
  browserify('./src/app.js')
    .transform(babel, {
      presets: ['es2015']
    })
    .bundle()
    .on('error', function(e) {
      util.log(e);
    })
    .pipe(source('app.min.js'))
    .pipe(gulp.dest('./dist'));
});

// Watch assets for changes and lunch relevant task
gulp.task('watch', function() {
  gulp.watch('src/*.js', ['js']);
});

// default task
gulp.task('default', ['watch']);
