let gulp = require( 'gulp' );
let sass         = require( 'gulp-sass' );         // 1
let autoprefixer = require( 'gulp-autoprefixer' ); // 1
let plumber      = require( 'gulp-plumber' );      // 1
let sourcemaps   = require( 'gulp-sourcemaps' );   // 1

// Sass
gulp.task('sass', function(){ // 2
    return gulp.src( './scss/**/*.scss' ) // 3
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
} );

let changed      = require( 'gulp-changed' );
let imagemin     = require( 'gulp-imagemin' );
let imageminJpg  = require( 'imagemin-jpeg-recompress' );
let imageminPng  = require( 'imagemin-pngquant' );
let imageminGif  = require( 'imagemin-gifsicle' );
let svgmin       = require( 'gulp-svgmin' );

gulp.task('imagemin', function() {
    // jpeg,png,gif
    return gulp.src( './img/**/*.+(png|jpg|jpeg|gif)' ) // 1
       .pipe( changed( './img' ) ) // 2
       .pipe( imagemin( [ // 3
           imageminPng(),
           imageminJpg(),
           imageminGif({
               interlaced: false,
               optimizationLevel: 3,
               colors: 180
           } )
       ] ) )
       .pipe( gulp.dest( './img/' ) );
   // svg
   return gulp.src( './img/**/*.+(svg)' ) // 4
       .pipe( changed( './img' ) )
       .pipe( svgmin() ) // 5
       .pipe( gulp.dest( './img/' ) );
} );

let concat       = require( 'gulp-concat' );
let jshint       = require( 'gulp-jshint' );
let rename       = require( 'gulp-rename' );
let uglify       = require( 'gulp-uglify' );

// concat js file(s)
gulp.task( 'js.concat', function() {
    return gulp.src( [
        './js/main.js' // 1
    ] )
        .pipe( plumber() )
        .pipe( jshint() ) // 2
        .pipe( jshint.reporter( 'default' ) ) // 2
        .pipe( concat( 'bundle.js' ) ) // 3
        .pipe( gulp.dest( './js' ) );
} );

// compress js file(s)
gulp.task( 'js.compress', function() {
    return gulp.src( './js/bundle.js' )
        .pipe( plumber() )
        .pipe( uglify() ) // 4
        .pipe( rename( 'bundle.min.js' ) ) // 5
        .pipe( gulp.dest( './js' ) );
} );

let browserSync  = require( 'browser-sync' );

// Browser Sync
gulp.task('bs', function() {
    browserSync({
        server: { // 1
            baseDir: "./",
            index: "index.html"
        }
    });
});

// Reload Browser
gulp.task( 'bs-reload', function() {
    browserSync.reload(); // 2
});

//
// Default task
//
gulp.task( 'default', [ 'bs', 'sass', 'js.concat', 'js.compress', 'imagemin' ], function() { // 1
    gulp.watch("./**/*.html", ['bs-reload']); // 2
    gulp.watch("./scss/**/*.scss", [ 'sass', 'bs-reload' ]); // 3
    gulp.watch("./js/*.js", [ 'js.concat', 'js.compress', 'bs-reload' ]); // 4
    gulp.watch("./img/*", [ 'imagemin', 'bs-reload' ]); // 5
});