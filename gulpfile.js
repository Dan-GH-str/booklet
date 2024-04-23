const gulp = require('gulp')

require('./gulp/build.js')
require('./gulp/docs.js')

gulp.task('default', gulp.series(
    'clean:dev', 
    gulp.parallel('html:dev', 'sass:dev', 'images:dev', 'js:dev'),
    gulp.parallel('server:dev', 'watch:dev'),
))

gulp.task('docs', gulp.series(
    'clean:docs', 
    gulp.parallel('html:docs', 'sass:docs', 'images:docs', 'js:docs'),
    gulp.parallel('server:docs', 'watch:docs'),
))