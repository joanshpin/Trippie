var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('task-name', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    });


gulp.task('sass', function() {
    return gulp.src('sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded',
      sourceComments: 'map'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
});


gulp.task('watch', function(){
  gulp.watch('sass/**/*.scss', ['sass']); //tu nazwa funkcji z powyższego
})
