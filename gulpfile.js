var gulp = require('gulp');
var csso = require('gulp-csso');
var sass = require('gulp-ruby-sass');
var composer = require('gulp-uglify/composer');
var uglify = require('uglify-es');
var rigger = require('gulp-rigger');
var concat = require('gulp-concat');
var pump = require('pump');
var watch = require('gulp-watch');
var sourceMaps = require('gulp-sourcemaps');
var rimraf = require('rimraf');
var browserSync = require('browser-sync');
var minify = composer(uglify, console);
var reload = browserSync.reload;

var path = {
  build: {
    js: './dist/src/js',
    scss: './dist/src/style',
    html: './dist/src',
  },
  src: {
    js: './assets/src/js/*.js',
    scss: './assets/src/style/*.scss',
    html: './assets/src/index.html',
  },
  watch: {
    js: './assets/src/js/**/*.js',
    scss: './assets/src/style/*.scss',
    html: './assets/src/index.html',
  },
  clean: './dist',
};

var config = {
  server: {
    baseDir: './dist',
    directory: true,
  },
  tunnel: true,
  host: 'localhost',
  port: 9000,
  logPrefix: "Frontend_Master"
};

gulp.task('scss:build',()  => {
  sass(path.src.scss, {sourcemap: true})
    .on('error', sass.logError)
    .pipe(csso())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest(path.build.scss))
    .pipe(reload({stream: true}));
});

gulp.task('clean', (cb) => {
  rimraf(path.clean, cb);
});

gulp.task('js:build', (cb) => {
  var options = {};
 pump([
   gulp.src(path.src.js),
   rigger(),
   sourceMaps.init(),
   minify(options),
   sourceMaps.write(),
   gulp.dest(path.build.js),
   reload({stream: true}),
 ], cb);
});

gulp.task('html:build', (cb) => {
  return gulp.src(path.src.html)
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({stream: true}));
});

gulp.task('build', [
  'js:build',
  'scss:build',
  'html:build',
]);

gulp.task('watch', () => {
  watch([path.watch.js], (event, cb) => {
    gulp.start('js:build');
  });
  watch([path.watch.scss], (event, cb) => {
    gulp.start('scss:build');
  });
  watch([path.watch.html], (event, cb) => {
    gulp.start('html:build');
  });
});

gulp.task('webserver', () => {
  browserSync(config);
});

gulp.task('default', ['build', 'webserver', 'watch']);