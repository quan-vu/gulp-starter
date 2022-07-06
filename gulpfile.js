/**
 * Build Css, js with Gulp
 */
 'use strict';

 const gulp = require('gulp');
 const sass = require('gulp-sass')(require('sass'));
 const DEST_CSS = 'dist/css';
 
 const buildCss = () => {
   return gulp.src('./src/scss/**/*.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(gulp.dest(DEST_CSS));
 };
 
 // Run watch
 gulp.task('watch', function(){
   gulp.watch('./src/scss/**/*.scss', gulp.series(buildCss));
 });
 