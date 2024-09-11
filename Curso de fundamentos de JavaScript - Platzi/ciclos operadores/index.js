// operadores de comparacion
const a = 10
const b = 20
const c ='10'

// igualdad, Compara dos valores para ver si son iguales y del mismo tipo de datos.
a == b 
// igualdad estricta, Compara dos valores para ver si son diferentes, pero sin tener en cuenta el tipo de datos.
a === b
// desigualdad, Compara dos valores para ver si son diferentes, pero sin tener en cuenta el tipo de datos.
a != b
// desigualdad estricta, Compara dos valores para ver si son diferentes o de diferentes tipos de datos.
a !==b
// Mayo / menor que, Verifica si el valor de la izquierda es mayor que el valor de la derecha.
a > b
a < b
// mayor / menor o igual que,  Verifica si el valor de la izquierda es mayor o igual que el valor de la derecha.
a >= b
a <= b

// Conversión de tipos implícita: Los operadores == y != realizan conversiones de tipo implícitas antes de la comparación. 
//Por ejemplo, 5 == "5" es true porque JavaScript convierte la cadena "5" en el número 5 antes de compararlos.

// ejecucion condicional : if


let nombre = "Diego"

if (nombre == "Diego") {
    console.log("Hola Diego")
} else if(nombre === "nico") {
    console.log("hola nico")
} else {
    console.log("nombre no encontrado");
}