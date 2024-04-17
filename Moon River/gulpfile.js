const gulp = require('gulp');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'))
// const liveServer = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs')
const sourceMaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const changed = require('gulp-changed');
const sassGlob = require('gulp-sass-glob')



const fileIncludeSettings = {
    prefix: '@@',
    basepath: '@file'
}
const startServerSettings = {
    livereload: true,
    open: true
}

const plumberNotify = title => {
    return {
        errorHandler: notify.onError({
            title: title,
            message: 'Error <%= error.message %>',
            sound: false
        })
    }
}


gulp.task('html', function() {
    return gulp.src(['./src/html/**/*.html', '!./src/html/blocksHTML/*.html'])
    // .pipe(changed('./dist/'))
    .pipe(plumber(plumberNotify('HTML')))
    .pipe(fileInclude(fileIncludeSettings))
    .pipe(gulp.dest('./dist/'));

})

gulp.task('scss', function(){
    return gulp.src('./src/scss/*.scss')
    .pipe(changed('./dist/css/'))
    .pipe(plumber(plumberNotify('Styles')))
    .pipe(sourceMaps.init())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('./dist/css/'))
})

gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
    .pipe(changed('./dist/js'))
    .pipe(plumber(plumberNotify('JS')))
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist/js'))

})

gulp.task('images', function(){
    return gulp.src('./src/img/**/*',{encoding: false})
    .pipe(changed('./dist/img/'))
    .pipe(gulp.dest('./dist/img/'))
})

gulp.task('fonts', function (done) {
    gulp.src('./src/fonts/*')
    .pipe(changed('./dist/fonts/'))
    .pipe(gulp.dest('./dist/fonts/'));
    done();
})

gulp.task('server', function(){
    return gulp.src('./dist/')
    .pipe(liveServer(startServerSettings))
})

gulp.task('clean', function(done) {
    if (fs.existsSync('./dist/')) {
        return gulp.src('./dist/', {read: false})
        .pipe(clean());
    }
    done();
})

gulp.task('watch', function() {
    gulp.watch('./src/scss/**/*.scss',gulp.series('scss'));
    gulp.watch('./src/**/*.html',gulp.series('html'));
    gulp.watch('./src/img/**/*',gulp.series('images'));
    gulp.watch('./src/js/**/*.js',gulp.series('js'));
})

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('html','scss','images','fonts','js'),
    gulp.parallel('watch')
))