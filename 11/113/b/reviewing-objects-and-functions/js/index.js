/****** GLOBAL VARIABLES/DATA ******/
// const name = 'Grace Hopper';
// const age = 123;
// let output = '';

/*********** FUNCTIONS **********/ 
// function displayUserInfo() {
//   output = `Hello, ${name}. You are ${age} years old`;
// }

/************ EXECUTION *********/
// displayUserInfo();
// document.getElementById('greet').innerHTML = output;



/****** GLOBAL VARIABLES/DATA ******/
// const name = 'Alan Turing';
// const age = 123;

/*********** FUNCTIONS **********/ 
// function getUserInfo(nameIn, ageIn) {
//   return `Hello, ${nameIn}. You are ${ageIn} years old`;
// }

/************ EXECUTION *********/
// document.getElementById('greet').innerHTML = getUserInfo(name, age);




/****** GLOBAL VARIABLES/DATA ******/
// const programmer = {
//   name: 'Alan Turing',
//   age: 321
// };

/*********** FUNCTIONS **********/ 
// function getUserInfo(programmerIn) {
//   return `Hello, ${programmerIn.name}. You are ${programmerIn.age} years old`;
// }

/************ EXECUTION *********/
// document.getElementById('greet').innerHTML = getUserInfo(programmer);




/****** GLOBAL VARIABLES/DATA ******/
const programmer1 = {
  name: 'Grace Hopper',
  age: 123
};

/*********** FUNCTIONS **********/ 
function getUserInfo(programmerIn) {
  return `Hello, ${programmerIn.name}. You are ${programmerIn.age} years old`;
}

/************ EXECUTION *********/
document.getElementById('greet').innerHTML = getUserInfo(programmer1);


const programmer2 = programmer1;
programmer2.name = 'Alan Turing';

