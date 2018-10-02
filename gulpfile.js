//gulpfile.js
var gulp = require('gulp'),
    concat = require('gulp-concat');

var sourceCss = ['src/css/agency.css','src/style.css'];

//****************************** */

gulp.task('concat-css',function(){
    return gulp.src(sourceCss)
           .pipe(concat('mystyles.css',{newLine:'\n \n \n /*!-------------------Next File--------------*/ \n \n'}))
           .pipe(gulp.dest('dist/css'));
});

gulp.task('hello',function(){
    console.log("hello Aso");
});

