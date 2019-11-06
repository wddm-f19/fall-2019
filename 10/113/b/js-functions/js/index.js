let greeting = `Goodbye, world!`; // Global version of greeting

// Receiving a value: parameter
function getHello(userName = `Humber`) {
  let greeting = `Hello, ${userName}!`;  // Local version of greeting
  return greeting;
  console.log(`This will never run because it comes AFTER a return!`)
}

function writeOutputToDocument( result, whichElementId = `output`) {
  document.getElementById(whichElementId).innerHTML += `<li>${result}</li>`;
}


// Sending a value: argument
writeOutputToDocument( getHello(`Kadeeeeeeem`), `transactions`);
writeOutputToDocument( getHello(`Cory`), `transactions`);
writeOutputToDocument( getHello(`Milorad`), `transactions`);
writeOutputToDocument( getHello(), `transactions`);




// DATE TYPES:
// Number
// String
// Object
// Arrays
// Boolean
// undefined
// null



/*
// TODAY'S PLAN: Functions and "scope"
    - Run a function
    - Pass an argument, take a parameter
    - Set default parameter values
      - null, undefined, NaN
      - passed by copy (not reference)
    - `return` values
    - Variable scope
// NEXT CLASS:
    - Storing functions
    - Fat-arrow notation
      
//  Review of types: Number, String, reference (Object), Boolean
*/

// window.alert()
// + - * / ** % =
// var, let, const
// console.log()
// document.getElementById()
//      innerHTML

