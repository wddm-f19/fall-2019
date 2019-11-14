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
  }, { // 3
    type:'Peach', 
    price:6, 
    color:'orange'
  }
];

// Function: getFruitAsHtml
// Parameters: fruit:Object(type:String, price:Number, color:String)
// Return: String of formatted HTML
function getFruitAsHtml(fruit) {
  return `<li class="fruit">The ${fruit.color} ${fruit.type} is $${fruit.price}.</li>`;
}

// map() the Array to a new array of String, formatted as HTMl
// join() the NEW Arary to a String of HTML instructions
// Assign the String to the document

const arrFruitsHtml = fruits.map(getFruitAsHtml);
const strFruitsHtml = arrFruitsHtml.join('');
document.getElementById('fruits').innerHTML = strFruitsHtml;

// Chaining functions together
// document.getElementById('fruits').innerHTML = fruits.map(getFruitAsHtml).join('');

// Replace this...
// document.getElementById('fruits').innerHTML += getFruitAsHtml(fruits[0])
// document.getElementById('fruits').innerHTML += getFruitAsHtml(fruits[1])
// document.getElementById('fruits').innerHTML += getFruitAsHtml(fruits[2])
// document.getElementById('fruits').innerHTML += getFruitAsHtml(fruits[3])
