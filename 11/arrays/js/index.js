/*
const anObject = {};
const anArray = [];


// OBJECTS
const programmer = {
  name: 'Grace Hopper',
  age: 123
};

console.log( programmer.name );
programmer.name = 'Alan Turing';
console.log( programmer.name );



// ARRAYS
const arrOfFruit = [
  'Apple', 
  'Banana', 
  'Strawberry',
];

console.log( arrOfFruit[0] ) // arrOfFruit "at index" 0
arrOfFruit[0] = 'Pear';
console.log( arrOfFruit[0] )
*/


// Combinging Arrays and Objects together to create a data set.

// Everything stored in an Array should (MUST) be identical
// The stricture of each fruit is identical (Object)
const fruits = [
  {     // 0
    type: 'Strawberry',
    price: 12,
    color: 'red'
  }, {  // 1
    type: 'Apple',
    price: 5,
    color: 'green'
  }
]

function getFruitAsHtml(fruit) {
  return `<li class="fruit">The ${fruit.color} ${fruit.type} is $${fruit.price}.</li>`
}


document.getElementById('fruits').innerHTML += getFruitAsHtml(fruits[0])
document.getElementById('fruits').innerHTML += getFruitAsHtml(fruits[1])