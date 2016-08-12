var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');

gulp.task('sass', function(){
  return gulp.src('client/styles/scss/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('client/styles/css'))
});

// Watch task
gulp.task('watch',function() {
    gulp.watch('client/styles/scss/*.scss',['sass']);
});

// concatCss
gulp.task('build', function () {
  return gulp.src('client/styles/css/*.css')
    .pipe(concatCss("_output/bundle.css"))
    .pipe(gulp.dest('client/styles'));
});

// currently have to to run these tasks individually
// gulp sass
// gulp watch
// gulp build

// sudo mongod
// nodemon - listening on port 300
