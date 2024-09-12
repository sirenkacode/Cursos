// funciones puras

// side effects
// 1 modificar varibales globales
// 2 modificar parametros
// 3 solicitudes http
// 4 imprimir mensajes en pantalla o consola
// 5 manipulacion del DOM
// 6 obtener la hora actual

function sum (a, b) {
     return a + b
}

// funcion impura
function sum (a, b) {
    console.log('a', a)
    return a + b
}

let total = 0

function sumWithSideEffect () {
    total += a
}

function square(x) {
    return x * x
}

function addTen (y) {
    return y + 10
}

// la suma de dos funciones puras sigue siendo pura

const number = 5
const finalResult = addTen(square(numebr))
console.log(finalResult)