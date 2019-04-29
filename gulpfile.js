const gulp = require("gulp");
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const abspath = require('gulp-absolute-path');
const tsProj = ts.createProject("./tsconfig.json");
const change = require('gulp-cached');
const merge = require('merge2');

gulp.task('build', function () {
    return srcBuild();
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.ts*', { cwd: './' }, gulp.task('build'))
});

const srcBuild = function () {
    const proj = gulp.src(['src/**/*.ts*'])
        .pipe(change('build'))
        .pipe(sourcemaps.init())
        .pipe(abspath({ rootDir: './src' }))
        .pipe(tsProj());
    return merge([
        proj.dts.pipe(gulp.dest('build')),
        proj.js
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('build'))
    ]);
};

gulp.task('default', gulp.series('build'));
