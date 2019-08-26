const gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    beautify = require('gulp-jsbeautifier'),
    pug = require('gulp-pug');;
sass.compiler = require('node-sass');


const SITE_DEST = './dist';
const SASS_SRC = './src/sass/**/*.scss';
const PUG_SRC = './src/pug/**/*.pug';
const CSS_DEST = SITE_DEST + '/css';
const HTML_DEST = SITE_DEST + '/';

function startServer() {
    return connect.server({
        port: 1337,
        livereload: true,
        root: SITE_DEST
    });
}

function reloadServer() {
    return gulp.src(SITE_DEST)
        .pipe(connect.reload());
}

function compileSass() {
    return gulp.src(SASS_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(CSS_DEST));
}

function compilePug() {
    return gulp.src(PUG_SRC)
        .pipe(pug({
            filename: "**.pug",
            basedir: "./src/pug",
            compileDebug: true,
        }))
        .pipe(beautify())
        .pipe(beautify.reporter())
        .pipe(gulp.dest(SITE_DEST));
}

function watch() {
    gulp.watch(PUG_SRC, gulp.series(compilePug))
    gulp.watch(SASS_SRC, gulp.series(compileSass))
    gulp.watch(SITE_DEST, gulp.series(reloadServer));
}

exports.default = gulp.parallel(
    gulp.series(compileSass, compilePug, startServer), 
    watch
);

