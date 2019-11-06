/*
//TODAY'S PLAN:
//  Functions and "scope"
      - Run a function
      - Pass an argument, take a parameter
      - Set default parameter values
        - null, undefined, NaN
        - passed by copy (not reference)
      - `return` values
      - Variable scope
    NEXT CLASS:
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



// Defining the function
function sayHello() {
  console.log(`hello`);
}

// Call the function
sayHello();


// Defining the function
function saySomething( something ) {
  console.log(something);
}

// Call the function
saySomething( `Something unique` );
