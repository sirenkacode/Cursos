/* 
estructura de dato

key / value

objeto {
    propiedad: valor,
    proipiedad: valor,
    propiedad: valor,

    metodos()
}
*/

const persona = {
    nombre: 'John',
    edad: 30,
    direccion: {
        calle: 'avenida insurgentes 187',
        ciudad: 'cdmx',
    },
    saludar () {
        console.log(`hola, mi nombre es ${persona.nombre}`)
    }
}


console.log(persona);
persona.saludar()


persona.telefono = "555-555-555";
console.log(persona.telefono)

persona.despedir = () => {
    console.log('adios')
}

persona.despedir()

delete persona.despedir;