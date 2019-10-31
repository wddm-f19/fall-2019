console.log(`Hello world!`);
console.log('Hello world!');
console.log("Hello world!");



console.log('2' + '3'); // concat
console.log(2 + 3);     // add
console.log(2 - 3);
console.log(2 * 3);
console.log(2 / 3);
console.log(2 ** 3);
console.log(2 % 3);


console.log( (2 + 5) * 3 );  // 17 or 21?

let myBalance = 0;
console.log(`Your balance is: ${myBalance}.`);

myBalance = myBalance + 100;
console.log(`Your balance is: ${myBalance}.`);

myBalance = myBalance + 100;
console.log(`Your balance is: ${myBalance}.`);



console.log(`------------------`);

// var, let, const
let cartItems = 0;

cartItems = cartItems + 1;
cartItems += 1;
cartItems++;
++cartItems;

console.log(`------------------`);

/*
let theOutput = document.getElementById(`output`);
let theClass = `highlight`;

theOutput.innerHTML += '' +
  ' <li class="' + theClass + '">' +
  '   Single\'s Quote' +
  '</li>';

theOutput.innerHTML += "<li class=\"" + theClass + "\">Double Quote</li>";

theOutput.innerHTML += `
  <li class="${theClass}">
    Backtick Quote
  </li>`;
*/

// Search and store the location of the output element
const theOutput = document.getElementById(`output`);  // ul

// Modify a variable ("property") of that element
theOutput.innerHTML += `<li class="highlight">Hello world!</li>`;
theOutput.innerHTML += `<li class="highlight">Goodbye world!</li>`


document.getElementById(`output`).innerHTML += `<li class="highlight">Goodbye world!</li>`








