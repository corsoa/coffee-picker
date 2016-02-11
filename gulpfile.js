const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () =>
  gulp.src('src/app.js')
      .pipe(babel({
        presets: ['']
      }))
      .pipe(gulp.dest('dist'))

);

const testing22 = 'test';
