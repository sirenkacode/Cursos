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

// class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }
//     saludar () {
//         console.log(`hola, mi nombre es ${this.nombre} y tengo ${this.edad}`)
//     }
// }

// const persona1 = new Persona('mariana', '25');

// persona1.saludar();

// herencia en la practica 

// class Animal {
//     constructor(nombre, tipo) {
//         this.nombre = nombre;
//         this.tipo = tipo;
//     }
//     emitirSonido() {
//         console.log('El animal emite un sonido');
//     }
// }

// class Perro extends Animal {
//     constructor(nombre, tipo, raza) {
//         super(nombre, tipo);
//         this.raza = raza;
//     }
//     emitirSonido() {
//         console.log('el perro ladra');
//     }
//     correr() {
//         console.log(`${this.nombre} corre alegremente`);
//     }
// }

// const perro1 = new Perro('bobby', 'perro', 'pug');

// console.log(perro1);
// perro1.correr();
// perro1.emitirSonido();

// perro1.nuevoMetodo = function() {
//     console.log('este es un nuevo metodo');
// };

// perro1.prototype.segundoMetodo = function () {
//     console.log('es otro nuevo metodo');
// };


// this en javascript

/* 
this --- class

this ---- class ---- class

*/

// class Persona {
//     constuctor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }
// }

// const persona1 = new Persona('alice', '25')

// console.log(persona1); 

// Persona.nuevoMetodo = function() {
//     console.log(`Mi nombre es ${this.nombre}`);
// }