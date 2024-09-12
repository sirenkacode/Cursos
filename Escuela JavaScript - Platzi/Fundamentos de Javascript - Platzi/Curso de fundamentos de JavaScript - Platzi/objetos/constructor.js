// const persona = {
//     nombre: 'diego',
//     apellido: ' de granda'
// }

// funcion constructora

function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const Persona1 = new Persona('Juan', 'Perez', '30');

console.log(Persona1);

const Persona2 = new Persona ('Diego', 'De granda', '35')

console.log(Persona2);

// Persona2.prototype.telefono = '555-555-555';

Persona1.nacionalidad = 'mexicano';

Persona.prototype.saludar = function () {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}