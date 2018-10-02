//gulpfile.js
var gulp = require('gulp');


//****************************** */


gulp.task('task-name',function(){
    return gulp.src('src')
        .pipe(AGulpPligin())
        .pipe(gulp.dest('dist'))
});

gulp.task('hello',function(){
    console.log("hello Aso");
});

