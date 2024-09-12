/* 

estructura de datos que me ayuda a guardar datos de una forma particular

key / value

objeto {
    propiedad: valor,
    propiedad: valor,
    propiedad: valor,
    metodos

}

*/

const persona = {
    nombre: 'John',
    edad: 30,
    direccion: {
        calle: 'Avenida Insurgentes 187',
        ciudad: 'cdmx',
    },

    saludar() {
        console.log(`hola, mi nombre es ${persona.nombre}`)
    }
}