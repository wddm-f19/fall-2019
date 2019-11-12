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



// Combinging Arrays and Objects together to create a data set.

// Everything stored in an Array should (MUST) be identical
// The stricture of each fruit is identical (Object)
const fruits = [
  {
    type: 'Strawberry',
    price: 12,
    color: 'red'
  }, {
    type: 'Apples',
    price: 5,
    color: null
  }
]



