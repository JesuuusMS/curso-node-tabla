const fs = require('fs')
const colors = require('colors')

const crearArchivo = async(numero = 5, listar = false, hasta = 10) => {
    
    try {  
        let salida = '';
        let consola = '';
        
        for (let index = 1; index <= hasta; index++) {
            salida += `${numero} X ${index} = ${numero * index} \n`
            consola += `${numero} X ${index} = ${numero * index} \n`.rainbow
        }
        
        if (listar) {
            console.log('===================='.brightRed)
            console.log('   Tabla del:'.brightYellow, numero)
            console.log('===================='.brightRed)
            console.log(consola)
        }
        
        fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida)
    
        return `tabla-${numero}.txt `.blue + ' ARCHIVO CREADO '.bgGreen + ' ✔'

    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo
}

