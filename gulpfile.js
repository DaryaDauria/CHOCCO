// const { src, dest, task, series, watch } = require("gulp");
// const rm = require("gulp-rm");
// const sass = require("gulp-sass");
// const concat = require("gulp-concat");
// const browserSync = require("browser-sync").create();
// const reload = browserSync.reload;
// const sassGlob = require("gulp-sass-glob");
// const autoprefixer = require("gulp-autoprefixer");
// const cleanCSS = require('gulp-clean-css');
// sass.compiler = require("node-sass");

// task("clean", () => {
//   return src("dist/**/*", { read: false }).pipe(rm());
// });

// task("copy:html", () => {
//   return src("src/*.html")
//     .pipe(dest("dist"))
//     .pipe(reload({ stream: true }));
// });

// const styles = [
//   "node_modules/normalize.css/normalize.css",
//   "src/styles/css-components/main.scss",
// ];

// task("styles", () => {
//   return src(styles)
//   .pipe(sourcemaps.init())
//     .pipe(concat("main.scss"))
//     .pipe(sassGlob())
//     .pipe(sass().on("error", sass.logError))
//     .pipe(
//       autoprefixer({
//         browsers: ["last 2 versions"],
//         cascade: false,
//       })
//     )
//     .pipe(cleanCss())
//     .pipe(sourcemaps.write())
//     .pipe(dest("dist"));
// });

// task("scripts", () => {
//   return src("src/scripts/*.js")
//     .pipe(sourcemaps.init())
//     .pipe(concat("main.js", { newLine: ";" }))
//     .pipe(sourcemaps.write())
//     .pipe(dest("dist"));
// });

// task("server", () => {
//   browserSync.init({
//     server: {
//       baseDir: "./dist",
//     },
//     open: false,
//   });
// });
// watch("src/styles/css-components/*css", series("styles"));
// watch("./src/*.html", series("copy:html"));
// task("default", series("clean", "copy:html", "scripts", "styles", "server"));


const { src, dest, task, series } = require("gulp");
const rm = require("gulp-rm");
const sass = require("gulp-sass");

sass.compiler = require("node-sass");


task( "clean", () => {
  return src( "dist/**/*", { read: false })
    .pipe( rm() )
});
task('copy', () => {
  return src("src/styles/**/*.scss").pipe(dest("dist"));
});

task("styles", () => {
  return src("src/styles/**/main.scss")
  .pipe(sass().on("error", sass.logError))
   .pipe(dest("dist"));
});

task("default", series("clean", "copy"));