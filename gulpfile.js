(function() {
  "use strict";

  const gulp = require("gulp");
  const sass = require("gulp-sass");
  const sassLint = require("gulp-sass-lint");

  gulp.task("sass", function() {
    return gulp
      .src("./src/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest("./build"));
  });

  gulp.task("sass-lint", function() {
    return gulp
      .src("./src/**/*.s+(a|c)ss")
      .pipe(
        sassLint({
          rules: {
            "leading-zero": 0,
            "nesting-depth": 0,
            "no-important": 0,
            "no-url-domains": 0,
            "no-url-protocols": 0,
            indentation: 0,
            quotes: 0
          }
        })
      )
      .pipe(sassLint.format());
  });

  gulp.task("watch", function() {
    gulp.watch("./src/**/*.scss", gulp.parallel("sass", "sass-lint"));
  });

  gulp.task("default", gulp.series(["watch"]));
})();
