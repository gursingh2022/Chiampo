"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var uglifycss = require("gulp-uglifycss");

sass.compiler = require("node-sass");

gulp.task("sass", function () {
  return gulp
    .src("./wwwroot/sass/*.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("css", function () {
  gulp
    .src("./wwwroot/css/*.css")
    .pipe(
      uglifycss({
        uglyComments: true,
      })
    )
    .pipe(gulp.dest("./wwwroot/dist/"));
});

gulp.task("run", ["sass", "css"]);

gulp.task("watch", function () {
  gulp.watch("./wwwroot/sass/*.sass", ["sass"]);
  gulp.watch("./wwwroot/css/*.css", ["css"]);
});

gulp.task("default", ["run", "watch"]);
