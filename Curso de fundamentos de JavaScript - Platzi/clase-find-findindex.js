// metodos que iteran sobre un array
// metodos que no modifican el array original (inmutabilidad)


const multipleOf5 = [5, 10, 15, 20]
const firstNumberGreaterThan10 = multipleOf5.find(number => number > 10)

console.log(multipleOf5)
console.log(firstNumberGreaterThan10)

// findIndex()

const randomNumber = [6, 14, 27, 56, 40]

const indexNumber = randomNumber.findIndex(number => number > 50)

console.log(randomNumber)
console.log(indexNumber)