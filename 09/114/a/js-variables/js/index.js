console.log(`Hello world!`);
console.log('Hello world!');
console.log("Hello world!");

console.log( 2 + 3 );
console.log( 2 - 3 );
console.log( 2 * 3 );
console.log( 2 / 3 );
console.log( 2 ** 3 );
console.log( 2 % 3 );
console.log( (2 + 5) * 3 );  // 17 or 21?

// var --> let
// const

let myBalance = 0;
console.log(`Your balance is: ${myBalance}.`);

myBalance = myBalance + 100;
myBalance += 100;
console.log(`Your balance is: ${myBalance}.`);

myBalance = myBalance + 100;
console.log(`Your balance is: ${myBalance}.`);



/*
// Store a reference to a DOM object
const theOutput = document.getElementById(`output`);

const theClass = "hello";

theOutput.innerHTML += `
  <li class="${theClass}">
    Backticks
  </li>`;

theOutput.innerHTML += '' +
  '<li class="' + theClass + '">' +
  '  Single\'s quote' +
  '</li>';

theOutput.innerHTML += "<li class=\"" + theClass + "\">Double quote</li>";
*/


// Search for an element in the document, store it
const theOutput = document.getElementById(`output`);
// Change it's innerHTML property (variable) to create a new element
theOutput.innerHTML = `<li>Hello world</li>`;

// The same as above, but without storing the reference
document.getElementById(`output`).innerHTML += `<li>Hello world</li>`;

// Some okay names for DOM references
let eleHeading;
let eHeading;
let $heading;
let _heading;
let theHeading;
let heading;





