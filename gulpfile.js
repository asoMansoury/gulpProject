//gulpfile.js
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourceMaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename');


var sourceCss = ['src/css/agency.css','src/style.css'];

var sourceJs = ['src/js/agency.min.js','src/js/jqBootstrapValidation.js','src/js/contact_me.js'];
//****************************** */




gulp.task('hello',function(){
    console.log("hello Aso");
});

gulp.task('concat-css',function(){
    return gulp.src(sourceCss)
    .pipe(sourceMaps.init())
    .pipe(concat('mystyles.css',{newLine:'\n \n \n /*!-------------------Next File--------------*/ \n \n'}))
    .pipe(sourceMaps.write("../maps"))
    .pipe(gulp.dest('dist/css'))
    .pipe(cssmin({level:2}))
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('concat-js',function(){
    return gulp.src(sourceJs)
           .pipe(sourceMaps.init())
           .pipe(concat('scripts.js',{newLine:'\n \n \n /*!-------------------Next File--------------*/ \n \n'}))
           .pipe(sourceMaps.write('../maps'))
           .pipe(gulp.dest('dist/js'))
});


gulp.task('minifyCss',function(){
    return gulp.src('dist/css/*.css')
           .pipe(cssmin({level:2}))
           .pipe(rename({suffix:'.min'}))
           .pipe(gulp.dest('dist/css'))
});