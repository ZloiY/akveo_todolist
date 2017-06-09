var gulp = require('gulp');
var csso = require('gulp-csso');
var composer = require('gulp-uglify/composer');
var uglify_es = require('uglify-es');
var minify = composer(uglify_es, console);
var concat = require('gulp-concat');
var connect = require('connect');
var livereload = require('gulp-livereload');
var pump = require('pump');
var lr = require('tiny-lr');
var server = lr();

gulp.task('css', function () {
  gulp.src('./style_gen/style.css')
    .pipe(csso())
    .pipe(gulp.dest('./gulp_gen/style/'))
    .pipe(livereload(server));
});

gulp.task('js', function() {
  gulp.src('./sources/*.js')
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./gulp_gen/sources/'))
    .pipe(livereload(server));
});

gulp.task('http-server', function() {
  connect()
    .use(require('connect-livereload')())
    .use(connect.static('./gulp_gen'))
    .listen('9000');
  console.log('Server listening on http://localhost:9000');
});

gulp.task('watch', function() {
  gulp.run('css');
  gulp.run('js');

  server.listen(35729, function(err) {
    if (err) return console.log(err);
    gulp.watch('style_gen/style.css', function() {
      gulp.run('css');
    });
    gulp.watch('sources/*.js', function() {
      gulp.run('js');
    });
  });
  //gulp.run('http-server');
});

gulp.task('build', function() {

  pump([
    gulp.src('./style_gen/style.css'),
    csso(),
    gulp.dest('./gulp_build/style/')
  ]);
  var options = {};
  pump([
    gulp.src('./sources/*.js'),
    concat('index.js'),
    gulp.dest('./gulp_gen/sources'),
    minify(options).on('error', function (e) {
      console.log(e);
    }),
    gulp.dest('./gulp_build/sources/')
  ]);
});