const greeting = function (name) {
    return `Hi, ${name}`
}

// una misma expresion de funcion pero con una flecha
// arrow function - explicit return
const newGreeting = (name) => {
    return `Hi, ${name}`
}

// arrow function - implicit return

const newGreetingImplicit = (name) => `Hi, ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, ${name} ${lastName}`

// lexical binding

const fictionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunciton: function (message) {
        console.log( `${this.name} says ${message}`)
    },
    messageWithArrowFunciton: (message) => {
        console.log( `${this.name} says ${message}`)
    }
}

fictionalCharacter.messageWithTraditionalFunciton('With great power comes great responsability')
fictionalCharacter.messageWithArrowFunciton('Beware of doctor octopus')