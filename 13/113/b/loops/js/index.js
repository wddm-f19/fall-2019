const nums = [7, 6, 2, 16, 1, -5];  // length: 6


// Initialize a counter
let i = 0;  // i: index, or iterator
while (i < nums.length) {
  if (nums[i] > 5) {
    console.log(`The number ${nums[i]} is greater than 5`);
  } else {
    console.log(`The number ${nums[i]} is NOT greater than 5`);
  }
  i++;
}


for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 5) {
    console.log(`The number ${nums[i]} is greater than 5`);
  } else {
    console.log(`The number ${nums[i]} is NOT greater than 5`);
  }
}


nums.forEach(n => {
  if (n > 5) {
    console.log(`The number ${n} is greater than 5`);
  } else {
    console.log(`The number ${n} is NOT greater than 5`);
  }
})


for (const n of nums) {
  if (n > 5) {
    console.log(`The number ${n} is greater than 5`);
  } else {
    console.log(`The number ${n} is NOT greater than 5`);
  }
}


//const nums = [7, 6, 2, 16, 1, -5];  // length: 6


//* Recreate both filter and map functionality for the array "nums"
//*   - For filter(), only include numbers greater than 5
//*   - For map(), convert each value to a string that says: I ❤ n
//? Write each of your new executions in a function block
//?   - newFilter(), takes an Array returns a new Array
//?   - newMap(), takes an Array returns a new Array
//! Try the above, but for slice, where the function takes three parameters:
//!   - The Array to iterate
//!   - The starting index (optional)
//!   - The ending index   (optional)

const arrFromFilter = []; // [7, 6, 16]

// What does filter() do?




const arrFromMap = []; // ['I ❤ 7', 'I ❤ 6', ... ]

// What does map() do?









// if (nums[1] > 5) {
//   console.log(`The number ${nums[1]} is greater than 5`);
// } else {
//   console.log(`The number ${nums[1]} is NOT greater than 5`);
// }




// if (nums[2] > 5) {
//   console.log(`The number ${nums[2]} is greater than 5`);
// } else {
//   console.log(`The number ${nums[2]} is NOT greater than 5`);
// }




//const arrMsgs = nums.filter(n => n > 5).map(formatNums);