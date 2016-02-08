var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

gulp.task('dependencies', function() {
    gulp.src('bower_components/normalize-scss/_normalize.scss')
        .pipe(gulp.dest('./scss/libs/'));
});

gulp.task('styles', function() {
    gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch',function() {
    gulp.watch('scss/**/*.scss',['styles']);
});

gulp.task('sync', function() {
    browserSync.init({
        server: ""
    });
    gulp.watch("scss/*.scss", ['styles']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("css/*.css").on('change', browserSync.reload);
});
