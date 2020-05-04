const { series, parallel, src, dest, lastRun, watch } = require('gulp'),
      rigger = require('gulp-rigger'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      babel = require('gulp-babel'),
      sass = require('gulp-sass'),
      cleancss = require('gulp-clean-css'),
      rename = require('gulp-rename'),
      autoprefixer = require('gulp-autoprefixer'),
      notify = require('gulp-notify'),
      del = require('del'),
      browserSync = require('browser-sync'),
      svgSprite = require('gulp-svg-sprite'),
      svgmin = require('gulp-svgmin'),
      cheerio = require('gulp-cheerio'),
      replace = require('gulp-replace');


// =============================================================== path
const path = {
  dist: {
    html: 'dist/',
    font: 'dist/design/font/',
    img: 'dist/design/img/',
    style: 'dist/design/css/',
    script: 'dist/design/js/',
  },

  src: {
    html: [
      'src/html/*.html'
    ],
    htmlWatch: 'src/html/**/*.html',
    font: [
      'src/design/font/**/*'
    ],
    img: [
      'src/design/img/**/*.{png,jpg,jpeg,gif,svg}',
      '!src/design/img/sprite/**'
    ],
    sprite: 'src/design/img/sprite/*.svg',
    styleLib: 'src/design/style/libs.scss',
    style: 'src/design/style/main.scss',
    styleWatch: [
      'src/design/style/**/*',
      '!src/design/style/libs.scss' // todo не срабатывает исключение
    ],
    scriptLib: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/svg4everybody/dist/svg4everybody.min.js',
      'node_modules/slick-carousel/slick/slick.min.js',
      'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
      // 'node_modules/selectric/public/jquery.selectric.min.js',
    ],
    script: 'src/design/script/**',
    scriptWatch: 'src/design/script/**'
  },
};


// =============================================================== server
function server() {
  browserSync({
    server: 'dist',
    notify: true,
    // open: false,
    // online: false, // Work Offline Without Internet Connection
    // tunnel: true
  })
}


// =============================================================== clean global
function clean() {
  return del(path.dist.html);
}

// =============================================================== html
function html() {
  return src(path.src.html)
    .pipe(rigger())
    .pipe(dest(path.dist.html))
    .pipe(browserSync.stream())
}


// =============================================================== fonts
function font() {
  return src(path.src.font)
    .pipe(dest(path.dist.font))
}

// =============================================================== img
function img() {
  return src(path.src.img, { since: lastRun(img) })
    .pipe(dest(path.dist.img))
    .pipe(browserSync.stream())
}

// =============================================================== sprite
function sprite() {
  return src(path.src.sprite)
    // minify svg
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    // remove all fill, style and stroke declarations in out shapes
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: {
        xmlMode: true
      }
    }))
    // cheerio plugin create unnecessary string '&gt;', so replace it.
    .pipe(replace('&gt;', '>'))
    // build svg sprite
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: "sprite.svg",
        }
      }
    }))
    .pipe(dest(path.dist.img))
    .pipe(browserSync.stream())
}


// =============================================================== css
function cssLib() {
  return src(path.src.styleLib)
    .pipe(sass())
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest(path.dist.style))
    .pipe(browserSync.stream())
}

function css() {
  return src(path.src.style, { sourcemaps: true })
    .pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
    .pipe(rename({ suffix: '.min' }))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(dest(path.dist.style, { sourcemaps: true }))
    .pipe(browserSync.stream())
}

function cssBuild() {
  return src(path.src.style)
    .pipe(sass())
    .pipe(cleancss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(dest(path.dist.style,))
}

function cssHost() {
  return src(path.src.style)
    .pipe(sass())
    .pipe(cleancss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(dest('x:/htdocs/design/css'))
}


// =============================================================== js
function jsLib() {
  return src(path.src.scriptLib)
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(dest(path.dist.script))
}

function js() {
  return src(path.src.script, { sourcemaps: true })
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest(path.dist.script), { sourcemaps: true })
    .pipe(browserSync.stream())
}

function jsBuild() {
  return src(path.src.script)
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest(path.dist.script))
}

function jsHost() {
  return src(path.src.script)
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('x:/htdocs/design/js'))
}


// =============================================================== watcher
function watcher() {
  watch(path.src.htmlWatch, html);
  watch(path.src.font, font)
  watch(path.src.img, img);
  watch(path.src.sprite, sprite);
  watch(path.src.styleLib, cssLib)
  watch(path.src.styleWatch, css);
  watch(path.src.styleWatch, cssHost);
  watch(path.src.script, js);
  watch(path.src.script, jsHost);
}


// =============================================================== task
exports.default = series(
  clean,
  parallel(
    html,
    font,
    img,
    sprite,
    cssLib,
    css,
    cssHost,
    jsLib,
    js,
    jsHost,
  ),
  parallel(
    watcher,
    server
  )
);

exports.build = series(
  clean,
  parallel(
    html,
    font,
    img,
    sprite,
    cssLib,
    cssBuild,
    jsLib,
    jsBuild,
  )
)
