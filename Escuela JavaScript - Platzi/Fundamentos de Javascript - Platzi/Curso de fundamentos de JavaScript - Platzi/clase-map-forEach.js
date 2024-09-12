// metodos que iteran sobre un array
// metodos que no modifican el array original (inmutabilidad)

// map()

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squaredNumbers)

// forEach()

const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)

// excercise : Fahrenheit to celsius convertion

const temperaturasEnFahrenheit = [32, 68, 95, 104, 212]

const temperaturasEnCelsius = temperaturasEnFahrenheit.map(Fahrenheit => (5/9)*(Fahrenheit - 32))
console.log('Temperature in Fahrenheit', temperaturasEnFahrenheit)
console.log('Temperature in celsius', temperaturasEnCelsius)

// exercise : sum of elements in an array

const newNumbers = [1, 2, 3, 4, 5]

let sum = 0

newNumbers.forEach( number => {
    sum += number
})

console.log('array of numbers:', newNumbers)
console.log('Sum of numbers:', sum)