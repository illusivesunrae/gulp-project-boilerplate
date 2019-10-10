const { dest, series, src, watch } = require('gulp');
const babel = require('rollup-plugin-babel');
const browserSync = require('browser-sync').create();
const rollup = require('rollup');

function reload() {
  browserSync.reload();
}

function server() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  watch('src/**.js', { ignoreInitial: false }, bundleJS);
  watch('dist/*.html', reload);
}

function bundleJS() {
  return rollup.rollup({
    input: './src/index.js',
    plugins: [babel({ runtimeHelpers: true })]
  }).then(bundle => {
    return bundle.write({
      file: './dist/main.js',
      format: 'iife',
      name: 'Component'
    });
  });
}

exports.default = server;