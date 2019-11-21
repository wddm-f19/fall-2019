// BOOLEAN
let classHasStarted = true;

/* OPERATORS
- !    not
- > >= 
- < <= 
- == != 
- === !==
*/

// CONDITIONS
// Do one thing, or the other
if (classHasStarted) {
  console.log('Class has started! Get here immediately.');
} else {
  console.log('Class has NOT started yet.');
}


// Check if I have enough credits (I need at least 5)
// if (creditAvailable >= amountNeeded) {
//   console.log('You may purchase');
// } else {
//   console.log('You may NOT purchase');
// }


// FALSY
/* if (!false) {
  console.log('false is false')
}

if (!0) {
  console.log('0 is false')
}

if (!-1) {
  console.log('-1 is false')  // Negative numbers are true!
  // All numbers other than 0 are "true"
}

if (!null) {
  console.log('null is false')
}

if (!undefined) {
  console.log('undefined is false')
}

if (!NaN) {
  console.log('NaN is false')
}

if (!'') {
  console.log('\'\' is false')
}
 */

// Control Statements ("Case statements")

// IF-ELSE-ELSEIF
// let creditAvailable = 4;
// let amountNeeded = 5;

// if (creditAvailable > amountNeeded) {
//   console.log('You may purchase');
// } else if (creditAvailable == amountNeeded) {
//   console.log('You have EXACTLY enough');
// } else {
//   console.log('You may NOT purchase');
// }


// OR/AND

//  AND &&
//  OR  ||

let temp = 25;
let dayOfWeek = 'Tues'
// Assume integers only
// 20+:         It's hot
// 5 -> 19:     It's warm
// -4 -> 4:     It's comfortableå
// -5 -> -19:   It's cold
// -20:         It's freeeeeeeeezing

// Write the condition
// if (temp >= 20) {
//   console.log(`It's hot!`)
// } else 

if (dayOfWeek == 'Tues' && temp <= 19 || temp >= 5  ) {
  console.log(`It's warm.`)
}


// SCOPE

let msg1;
if (classHasStarted) {
  msg1 = 'Class has started! Get here immediately.';
} else {
  msg1 = 'Class has NOT started yet.';
}

// TERNARY
// Returns a value in two cases, true or false
let msg2 = (classHasStarted) ? 'Class has started! Get here immediately.' : 'Class has NOT started yet.';

console.log(msg1, msg2)

