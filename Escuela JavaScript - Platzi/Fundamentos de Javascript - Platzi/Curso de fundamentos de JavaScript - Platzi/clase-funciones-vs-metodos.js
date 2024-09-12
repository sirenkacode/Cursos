// capacidades que tienen las funcionales al igual que otros objetos

// 1 pasar funciones como argumentos -> callback
function a() {}
function b (a) {}
b(a)

// retornar funciones

function a() {
    function b (){}
    return b
}

// 2 asignar funciones a variables -> expresion de funcion

const a = function() {}

// 3 tener propiedades y metodos

function a () {}
const obj = {}
a.call (obj)

// anidar funciones -> nested functions

function a () {
    function b () {
        function c () {
        
        }
        c()
    }
    b()
}
a()

// es posible almacenar funciones en objetos?

const rocket = {
    name: 'falcon 9',
    launchMessage: function launchMessage () {
        console.log('🚀')
    }
}

// esto es lo que se conoce como metodo
rocket.launchMessage()