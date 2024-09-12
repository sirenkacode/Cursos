// como crear un array?
// 1 new array() o array()

const fruits = Array('apple', 'banana', 'orange')
console.log(fruits)

const justOneNumber = Array(12)
console.log(justOneNumber)

const number = Array(1, 2, 3, 4, 5)
console.log(number)

// 2 array literal syntax

const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports)

const recipeIngredients = [
    'flour',
    true,
    2,
    {
        ingridient: 'milk', quantity: '1 cup'
    },
    false
]

console.log(recipeIngredients)

//Accessing array elements

const firstFruit = fruits [0]
console.log(firstFruit)

// length property

const numberOfFruits = fruits.length