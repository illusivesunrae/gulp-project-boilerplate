const { dest, series, src, watch } = require('gulp');
const browserSync = require('browser-sync').create();

function reload() {
  browserSync.reload();
}

function server() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  // watch('src/**.js', { ignoreInitial: false }, compileJS);
  watch('dist/*.html', reload);
}

exports.default = server;