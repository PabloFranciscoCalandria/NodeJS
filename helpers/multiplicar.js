const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listado, hasta) => {

    try{
        
        let salida = '';
        let consola = '';
        
        for(let i = 1; i <= hasta; i++){
            consola += `${base} ${'x'.red} ${i} ${'='.grey} ${base * i}\n`; //\n salto de linea
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if(listado){
            console.log('================================'.green);
            console.log('          Tabla del: '.blue, base);
            console.log('================================'.green);
            console.log(salida);
            console.log(consola);
        }else{
            console.log('No se permite listado de tabla');
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    }catch(error){
        throw error;
    }
}

module.exports = {
    crearArchivo
}