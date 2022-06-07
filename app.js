//const { argv } = require('process');
//const { option } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

// NO HACER DE ESTA MANERA!
// console.log(process.argv); //argumentos de consola 
// const [,,arg3] = process.argv;
// const [, base = 5 ] = arg3.split('=');


//const base = 3;
// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));


// console.log(process.argv); // En los procesos
// console.log(argv); // Es mucho mas sencillos de acceder
// console.log('base: yargs', argv.b); 

console.log(argv);
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.yellow, 'creado'))
    .catch(err => console.log(err));


// TAREA!
// option('l');
// listar() : boolean - falso default por defecto
// argv.l 
// impirmimos la salida si esta en true
// node app -b 8 -l -> sale el listado sino no imprime en consola