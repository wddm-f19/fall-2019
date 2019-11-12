// const favFruit1 = 'apple'
// const favFruit2 = 'strawberry'
// const favFruit3 = 'mango'

// const favFruits = {
//   first: 'apple',
//   second: 'strawberry',
//   third: 'mango',
// }

const favFruits = [
  {
    type: 'apple',
    price: 3,
    colour: 'green'
  }, {
    type: 'strawberry',
    price: 5,
    colour: null
  }, {
    type: 'mango',
    price: 9,
    colour: null
  }
];

function printOneFruit(fruit) {
  console.log( `A ${fruit.type} of colour ${fruit.colour} is $${fruit.price}.` );
}


// favFruits "at index" 0
printOneFruit(favFruits[0]) // passes a reference to a global Object
printOneFruit(favFruits[1]) // passes a reference to a global Object
printOneFruit(favFruits[2]) // passes a reference to a global Object
