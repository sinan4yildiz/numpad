const gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyJS = require('gulp-minify'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass');

function js() {

    return gulp.src(['src/index.js'])
               .pipe(concat('index.js'))
               .pipe(minifyJS({
                   ext: {min: '.min.js'},
                   noSource: true
               }))
               .pipe(gulp.dest('dist'));

}

function scss(done) {
    gulp.src('src/*.scss')
        .pipe(sass())
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist'));

    done();
}


function watch(done) {
    gulp.watch('src/*.scss', scss);
    gulp.watch('src/*.js', js);

    done();
}

exports.js = js;
exports.scss = scss;
exports.watch = watch;