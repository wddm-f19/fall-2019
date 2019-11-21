// BOOLEAN
let classHasStarted = true;

// CONDITIONS (IF-ELSE)
if (classHasStarted) {
  console.log(`Class has begun, please take your seat.`);
}


// OPERATORS
// They ALL return a Boolean (true or false)
/* 
- !
- > >= < <= 
- == != 
- === !==
*/

const yourAge = 18;

// Minimum age is 19
if (yourAge >= 19) {
  console.log(`You CAN buy this beer`);
} else {
  console.log(`You can NOT buy this beer`);
}


// FALSY
if (!false) {
  console.log('false is false');
}
if (!0) {
  console.log('0 is false');
}
if (!'') {
  console.log('\'\' is false');
}
if (!null) {
  console.log('null is false');
}
if (!undefined) {
  console.log('undefined is false');
}
if (!NaN) {
  console.log('NaN is false');
}


console.log(`------------------`);

// IF-ELSE-ELSEIF (Control Statements)
let myNum = 5;
let guess = 6;

if (guess < myNum) {
  console.log(`Too low`);
} else if (guess > myNum) {
  console.log(`Too high`);
} else if (guess == myNum) {
  console.log(`You got it!`);
} else {
  console.log(`You must choose a number`);
}



let newNum = 3
if (newNum == 1) {
  console.log(`You picked 1`);
} else if (newNum == 2) {
  console.log(`You picked 2`);
} else if (newNum == 3) {
  console.log(`You picked 3`);
} else {
  console.log(`Must be 1, 2 or 3 only`);
}


// Can also be written with a switch/case statement
/* switch (newNum) {
  case 1:
    console.log(`You picked 1`);
    break;
  case 2:
    console.log(`You picked 2`);
    break;
  case 3:
  case 4:
    console.log(`You picked 3 or 4`);
    break;
  default:
    console.log(`Must be 1, 2 or 3 only`);
    break;
} */







// PRACTICE 1:
// Write a condition to product the following result
// 20+:         It's hot
// 5 -> 19:     It's warm
// -4 -> 4:     It's comfortable
// -5 -> -19:   It's cold
// -20:         It's freeeeeeeeezing
// (Assume integers only)

const temp = -60;

let bgCol;
document.querySelector('body').style.backgroundColor = setBackgroundByTemp(temp);

function setBackgroundByTemp(temp) {
  if (temp >= 20) {
    console.log(`It's hot`);
    return 'red';
  } 
  else if (temp >= 5) {
    console.log(`It's warm`);
    return  'tomato';
  } 
  else if (temp >= -4) {
    console.log(`It's comfortable`);
    return  'white';
  } 
  else if (temp >= -19) {
    console.log(`It's cold`);
    return  'lightblue';
  } 
  else {
    console.log(`It's freeeeeeeeezing`);
    return  'blue';
  }
}



// LOGICAL GATES: OR/AND
/* 
AND &&
OR  ||
*/


const age = 18;
const money = 20;
const name = `Walter`;

// Minimum age is 19
// Minimum $$ is 12
if (name == `Walter` && (age >= 19 || money >= 12) ) {
  console.log(`You CAN buy this beer`);
} else {
  console.log(`You can NOT buy this beer`);
}


// PRACTICE 2:
// Solve Practice 1 using logical gates



// VARIABLE SCOPE
// let msg;
// if (classHasStarted) {
//   msg = `Class has begun, please take your seat.`;
// } else {
//   msg = `Class has not started yet.`;
// }


// TERNARY
let msg = (classHasStarted) ? `Class has begun, please take your seat.` : `Class has not started yet.`







// FILTER() ARRAYS

function formatNums(n) {
  return `You have ${n} in the array`;
}
// Longest
// function greaterThanFive(n) {
//   if (n > 5) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Slightly shorter
/* const greaterThanFive = (n) => {
  if (n > 5) {
    return true;
  } 
  return false;
}
 */

// Even shorter
/* const greaterThanFive = (n) => {
  return (n > 5) ? true : false;
} */

/* const greaterThanFive = (n) => {
  return n > 5;
} */



const nums = [2, 7, 3, 4, 21];

const arrMsgs = nums.filter(n => n > 5).map(formatNums);