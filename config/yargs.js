const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true, //Para que si o si haya que agregar el argumento
                    describe: 'Es la base de la tabla multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Multiplica la base hasta el'
                })
                .check( (argv, options) => {
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero';
                    }
                    return true;
                })
                .argv;

module.exports = argv;