var gulp = require('gulp'),
      compass = require('gulp-compass'),
      gutil = require('gulp-util'),
      browserify = require('gulp-browserify'),
      gulpif = require('gulp-if'),
      uglify = require('gulp-uglify'),
      concat = require('gulp-concat'),
      livereload = require('gulp-livereload');

var env = process.env.NODE_ENV || "development";

gulp.task('js',function(){
    gulp.src('app/index.js')
      .pipe(concat('bundle.js'))
      .pipe(browserify())
      .pipe(gulpif(env === 'production', uglify()))
      .pipe(gulp.dest('dist'))
      .pipe(livereload())
})

gulp.task('watch',function(){
    livereload.listen();
    gulp.watch('app/*.js',['js']);
})

gulp.task('default',['js', 'watch'])
