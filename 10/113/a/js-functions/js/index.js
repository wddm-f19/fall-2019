// VARIABLES
let bankBalance;
let activeUser;

// FUNCTIONS
function openAnAccount(userName, initialDeposit = 0) {
  activeUser = userName;
  bankBalance = initialDeposit;
  document.getElementById(`transactions`).innerHTML += `<li>Welcome, ${activeUser}.</li>`;
  printBalance();
}

function printBalance() {
  document.getElementById(`transactions`).innerHTML += `<li>Your balance is: $ ${bankBalance}</li>`;
}

function makeDeposit(tempBalance, amount = 0) {
  tempBalance += amount;
  printBalance();
  return tempBalance;
}

// --------------------------

// APPLICATION START
openAnAccount(`Johnny Moneybags`, 500);
bankBalance = makeDeposit(bankBalance, 45);
bankBalance = makeDeposit(bankBalance, 67);
bankBalance = makeDeposit(bankBalance);


// Data types:
// Number   int, decimal, +/-
// String   '' "" ``
// Object   {}
// Arrays   []
// Booleans true / false
// undefined, null




function greetTheUser(name) {
  return `Hello, ${name}.`;
}

let greeting = greetTheUser(`Mary Moneybags`);








