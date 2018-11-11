'use strict';
var gulp = require('gulp-v4');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var htmlreplace = require('gulp-html-replace');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var browserify = require('gulp-browserify');
var csso = require('gulp-csso');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');

var prod = 0;
var fileName = prod ? 'main.min' : 'main';
var buildPath = 'dist/';

var src = {
  html: 'app/*.html',
  js: 'app/js/**/*.js',
  scss: 'app/scss/**/*.scss',
  img: 'app/img/**',
  file: ['app/**', 'app/**/.*', '!app/packages/**','!app/packages/**/.*', '!app/img/**', '!app/**/*.scss', '!app/**/*.js', '!app/**/*.html'],
};

gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: './' + buildPath
    }
  });
});

gulp.task('js', function () {
  return gulp.src(src.js)
    .pipe(plumber())
    .pipe(concat(fileName + '.js'))
    .pipe(browserify())
    .pipe(gulpif(prod, uglify()))
    .pipe(gulp.dest(buildPath + '/js'))
    .on('end', browserSync.reload)
});

gulp.task('css', function () {
  return gulp.src(src.scss)
    .pipe(plumber())
    .pipe(sass())
    .pipe(concat(fileName + '.css'))
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    .on('error', notify.onError({
      message: 'Error: <%= error.message %>',
      title: 'Error running something'
    }))
    .pipe(gulpif(prod, csso()))
    .pipe(gulp.dest(buildPath + '/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('html', function () {
  return gulp.src(src.html)
    .pipe(plumber())
    .pipe(htmlreplace({
      'css': 'css/' + fileName + '.css',
      'js': 'js/' + fileName + '.js'
    }))
    .pipe(gulp.dest(buildPath))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('clean', function () {
  return gulp.src(buildPath, {
      read: false,
      allowEmpty: true
    })
    .pipe(clean());
});

gulp.task('file', function () {
  return gulp.src(src.file, {
      nodir: true
    })
    .pipe(gulp.dest(buildPath))
    .on('end', browserSync.reload)
});

gulp.task('img', function () {
  return gulp.src(src.img)
    .pipe(gulpif(prod, imagemin()))
    .pipe(gulp.dest(buildPath + '/img'))
    .on('end', browserSync.reload)
});

gulp.task('watch', function () {
  gulp.watch(src.html, gulp.series('html'));
  gulp.watch(src.js, gulp.series('js'));
  gulp.watch(src.scss, gulp.series('css'));
  gulp.watch(src.file, gulp.series('file'));
  gulp.watch(src.img, gulp.series('img'));
});

gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('js', 'css', 'html', 'file', 'img'),
  gulp.parallel('watch', 'server')

));