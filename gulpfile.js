
// function tarea(callback){
//     console.log('mi primer tarea');

//     callback();
// }

// exports.tarea = tarea;

const { src, dest, watch, parallel } = require("gulp");

//* CSS
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');

function css(done) {
    src('src/scss/**/*.scss') // Identificar el archivo de SASS
        .pipe(plumber())
        .pipe(sass()) // Compilarlo
        .pipe(dest("build/css")); // Almacenarla en el disco duro

    done(); // Callback que avisa a gulp cuando llegamos al final
}

//* Imagenes
const webp = require('gulp-webp');

function versionWebp(done){
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
    .pipe(webp(opciones))
    .pipe(dest('build/img'))
    done();
}

function dev(done){
    watch('src/scss/**/*.scss', css) // Indica el archivo que observa y la función que se ejecuta cuando este cambie.
    done();
}

exports.css = css;
exports.versionWebp = versionWebp;
exports.dev = parallel(versionWebp, dev);


