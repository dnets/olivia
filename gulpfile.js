var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var wiredep = require('wiredep').stream;
var jslint = require('gulp-jslint');

var paths = {
  scripts: ['js/**/*.js'],
    index: ['./index.html'],
    dist: ['/.dist']
};

gulp.task('sass', function () {
      gulp.src('scss/style.scss')
                .pipe(sass({includePaths: ['scss']}))
                        .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {
      browserSync.init(['css/**/*.css', 'js/**/*.js', './**/*.html'], {
                server: {
                              baseDir: './'
                                        }
                            });
});

gulp.task('inject-vendor', function() {
  gulp.src(paths.index)
    .pipe(wiredep({}))
    .pipe(gulp.dest('./'));
});

gulp.task('jslint', function() {
  gulp.src(paths.scripts)
  .pipe(jslint( {
  reporter: 'default'
  }));
});

gulp.task('default', ['sass', 'inject-vendor', 'browser-sync'], function () {
      gulp.watch('scss/*.scss', ['sass']);
      gulp.watch('bower_components/**/*.js', ['inject-vendor']);
});
