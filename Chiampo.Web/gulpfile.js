const { src, series, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const imagemin = require('gulp-imagemin');

// SASS Task
const sassPath = './wwwroot/sass/*.sass';
function sassTask() {
  return src(sassPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./wwwroot/css/'));
}

// CSS Minify Task
const cssPath = './wwwroot/css/*.css';
function cssTask() {
  return src(cssPath)
    .pipe(
      uglifycss({
        uglyComments: true,
      })
    )
    .pipe(dest('./wwwroot/dist/css'));
}

// IMG Task
function imgTask() {
  return src('./wwwroot/images/*')
    .pipe(imagemin())
    .pipe(dest('./wwwroot/dist/images'));
}

// Watch Task
function watchTask() {
  watch([sassPath, cssPath], { interval: 1000 }, series(sassTask, cssTask));
}

exports.sassTask = sassTask;
exports.cssTask = cssTask;
exports.imgTask = imgTask;
exports.default = series(imgTask, watchTask);
