// operadores de comparacion
// const a = 10
// const b = 20
// const c ='10'

// // igualdad, Compara dos valores para ver si son iguales y del mismo tipo de datos.
// a == b 
// // igualdad estricta, Compara dos valores para ver si son diferentes, pero sin tener en cuenta el tipo de datos.
// a === b
// // desigualdad, Compara dos valores para ver si son diferentes, pero sin tener en cuenta el tipo de datos.
// a != b
// // desigualdad estricta, Compara dos valores para ver si son diferentes o de diferentes tipos de datos.
// a !==b
// // Mayo / menor que, Verifica si el valor de la izquierda es mayor que el valor de la derecha.
// a > b
// a < b
// // mayor / menor o igual que,  Verifica si el valor de la izquierda es mayor o igual que el valor de la derecha.
// a >= b
// a <= b

// Conversión de tipos implícita: Los operadores == y != realizan conversiones de tipo implícitas antes de la comparación. 
//Por ejemplo, 5 == "5" es true porque JavaScript convierte la cadena "5" en el número 5 antes de compararlos.

/*----------------------------------------------------------------------*/

// ejecucion condicional : if


// let nombre = "Diego"

// if (nombre == "Diego") {
//     console.log("Hola Diego")
// } else if(nombre === "nico") {
//     console.log("hola nico")
// } else {
//     console.log("nombre no encontrado");
// }

/*----------------------------------------------------------------------*/

// ejecucion condicional: switch

// switch(expresion) {
//     case valor1:
//         //codigo a ejecutar
//         break;
//         case valor2:
//         // codigo a ejecutar
//         break;
//         default:
//         // codigo 
// } 

// let expr = "papayas"

// switch(expr) {
//     case "naranjas":
//     console.log("las naranjas cuestas 10 pesos el kilo")
//     break;
//     case "manzanas":
//     console.log("las manzanas cuestan 45 pesos el kilo")
//     break;
//     case "platanos":
//         console.log("el platano esta a 30 pesos el kilo")
//     break;
//     case "mangos":
//     case "papayas":
//     console.log("los mangos y las papayas cuestan 25 pesos el kilo")
//     break;
//     default:
//     console.log("lo siento, no contamos con ${expr}");
// }

// console.log("hay algo mas que desees?")

/*----------------------------------------------------------------------*/

// loop for
// for (variable; condicion; incremento) {
//     codigoAEjecutar
// }

// let list = ["eat", "sleep", "code", "repeat"];

// for (let i = 0; i < list.length; i++) {
//     console.log(list[i])
// }

/*----------------------------------------------------------------------*/

/* loop for of
 for  of arrays, strings, [algo]

 for (variable of objeto) {
 codigo
 }
*/

// let canasta = ["manzana", "pera", "naranja", "uva"];

// for (fruta of canasta) {
//     console.log(fruta)
// }

/*----------------------------------------------------------------------*/

// loop for in : objetos
/*
propiedades = valor
array string
item
for (variable in objeto) {
codigo 
}
*/

// const listaDeCompras = {
//     manzana: 5,
//     pera: 3,
//     naranja: 2,
//     uva: 1
// }

// for (fruta in listaDeCompras) {
//     console.log(fruta);
// }

// for (fruta in listaDeCompras) {
//     console.log (`${fruta}: ${listaDeCompras[fruta]}`)
// }

// loop while
/*
while(condicion) {
codigo
}
*/

// let contador = 0;

// while (contador , 10) {
//     console.log(contador)
//     contador ++;
// }

/* loop do while
 do {
 codigo
 while (condicion)
 }

*/

let contador = 0

do {
    console.log(contador)
    contador++;
} while(contador < 10);