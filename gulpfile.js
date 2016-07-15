// Required variables
var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var express = require('express');
var jshint = require('gulp-jshint');
var gulpif = require('gulp-if');
var browserify = require('gulp-browserify');
var livereload = require('gulp-livereload');

// Environment
var env = process.env.NODE_ENV || "development";

// Lint all JS files in the app folder and this file
gulp.task('lint', function () {
    return gulp.src(['app/*.js', 'gulpfile.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// JS files get combined into dist/bundle.js, uglified, and trigger a page refresh
gulp.task('js', function () {
    gulp.src('app/index.js')
        .pipe(concat('bundle.js'))
        .pipe(browserify())
        .pipe(gulpif(env === 'production', uglify()))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

// Sass files get processed into dist/bundle.css, compress, and trigger a page refresh
gulp.task('sass', function () {
    gulp.src('src/sass/bundle.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .on('error', sass.logError)
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

// HTML files trigger a page refresh
gulp.task('html', function () {
    gulp.src('*.html')
        .pipe(livereload());
});

// Watch all relavent files, trigger re-processing them and then reloading the page
gulp.task('watch', function () {
    gulp.watch('app/*.js',   ['lint']);
    gulp.watch('app/*.js',   ['js']);
    gulp.watch('src/sass/*', ['sass']);
    gulp.watch('*.html',     ['html']);

    livereload.listen();
});

// Starts a local server on port 8000 to allow for live reloads
gulp.task('serve', function (done) {
    var app = express();
    //path to the folder that will be served. __dirname is project root
    var path = __dirname;
    app.use(express.static(path));
    app.listen(8000, function () {
         done();
    });
});

// Auto launches the page in your default browser
gulp.task('open', function () {
    var url = 'http://localhost:8000';
    var OS = process.platform;
    var exectuable = '';

    //OS Specific values for opening files.
    if (OS == 'darwin') { executable = 'open ';     }
    if (OS == 'linux')  { executable = 'xdg-open '; }
    if (OS == 'win32')  { exectuable = 'explorer '; }

    //Run the OS specific command to open the url in the default browser
    require("child_process").exec( exectuable + url );
});

gulp.task('default', ['sass', 'lint', 'js', 'watch', 'serve', 'open']);
