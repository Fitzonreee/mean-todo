var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('client/styles/scss/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('client/styles/css'))
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('client/styles/scss/*.scss',['sass']);
});
