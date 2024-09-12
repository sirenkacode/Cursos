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

// const persona = {
//     nombre: 'John',
//     edad: 30,
//     direccion: {
//         calle: 'Avenida Insurgentes 187',
//         ciudad: 'cdmx',
//     },

//     saludar() {
//         console.log(`hola, mi nombre es ${persona.nombre}`)
//     }
// }


// que es una clase ?

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar () {
        console.log(`hola, mi nombre es ${this.nombre} y tengo ${this.edad}`)
    }
}

const persona1 = new Persona('mariana', '25');

persona1.saludar();