let gulp         = require( 'gulp' );              // 1
let sass         = require( 'gulp-sass' );         // 1
let autoprefixer = require( 'gulp-autoprefixer' ); // 1
let plumber      = require( 'gulp-plumber' );      // 1
let sourcemaps   = require( 'gulp-sourcemaps' );   // 1

// Sass
gulp.task( 'sass', function(){ // 2
    gulp.src( './src/assets/sass/**/*.scss' ) // 3
        .pipe( plumber() ) // 4
        .pipe( progeny() ) // 4
        .pipe( sourcemaps.init() ) // 5
        .pipe( sass( { // 6
            outputStyle: 'expanded'
        } ) )
        .pipe( autoprefixer( { // 7
            browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
            cascade: false
        } ) )
        .pipe( sourcemaps.write() ) // 5
        .pipe( gulp.dest( './css/')) // 8
} );F