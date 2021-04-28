var gulp = require('gulp');
var del = require('del');
const execa = require('execa');

var paths = {
  styleguide: {
    src: ['src/styles/**'],
    dest: 'assets/styleguide/'
  }
};

 /* gulp tasks must return either a
 * Promise, a Stream or take a callback and call it.
 *
 * Due to some platform limitations, synchronous tasks aren't supported.
 */
function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  return del([ 'assets' ]);
}

/*
 * Define our tasks using plain functions
 */
function styleguide() {
  // TODO:IDEA: integrate kss-config.json here
  // maybe declare it here as object to use prior path definitions then
  // stringify and pass as argument?
  return execa.command('npx kss --config kss-config.json')
}


function watch() {
  gulp.watch(paths.styleguide.src, styleguide);
}

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
// var build = gulp.series(clean, gulp.parallel(styleguide, styles, scripts));

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.styleguide = styleguide;
exports.watch = watch;
/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = watch;
