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
  }, {  // 2
    type: 'Pear',
    price: 3,
    color: 'yellow'
  }, {  // 3
    type: 'Peach',
    price: 6,
    color: 'orange'
  }
]

// Function: getFruitAsHtml
// Parameters: fruit:Object (type:String, price:Number, color:String)
// Returns: String, formatted as HTML (<li>)
function getFruitAsHtml(fruit) {
  return `<li class="fruit">The ${fruit.color} ${fruit.type} is $${fruit.price}.</li>`
}


// Map fruits to an Array
// Join the new Array to a String
// Put the String into the document (#fruits)

const arrFruits = fruits.map(getFruitAsHtml);   // Array
const strFruits = arrFruits.join('');           // String
document.getElementById('fruits').innerHTML = strFruits;

// Solving by combining strings
// const htmlListItems = getFruitAsHtml(fruits[0]) + getFruitAsHtml(fruits[1]) + getFruitAsHtml(fruits[2])
// document.getElementById('fruits').innerHTML = htmlListItems;

// Solving by looping though all the Array's values
// document.getElementById('fruits').innerHTML += getFruitAsHtml(fruits[0]);
// document.getElementById('fruits').innerHTML += getFruitAsHtml(fruits[1]);
// document.getElementById('fruits').innerHTML += getFruitAsHtml(fruits[2]);
