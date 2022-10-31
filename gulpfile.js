// Initialize modules
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const browsersync = require('browser-sync').create();

// Sass Task
function scssDistTask() {
  return src('src/scss/style.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('frontend/dist/css', { sourcemaps: '.' }));
}

function scssVendorTask() {
  return src('src/scss/vendor/*.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('frontend/vendor/css', { sourcemaps: '.' }));
}

// Browsersync
function browserSyncServe(cb) {
  browsersync.init({
    server: { baseDir: '.' },
    notify: {
      styles: { top: 'auto', bottom: '0' },
    },
  });
  cb();
}

function browserSyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch('*.html', browserSyncReload);
  watch(['src/scss/**/*.scss', 'frontend/vendor/**/*.js', 'frontend/dist/**/*.js'], series(scssDistTask, scssVendorTask, browserSyncReload));
}

// Default Gulp Task
exports.default = series(scssDistTask, scssVendorTask, browserSyncServe, watchTask);
