// SELECT A SINGLE ELEMENT
const btnHello = document.getElementById('hello');
const btnWorld = document.querySelector('#world');

// SELECT MULTIPLE ELEMENTS


//! OPTION 1
// FUNCTIONS
/* const addClickToBtn = element => {

  const sayHelloWorld = () => {
    element.innerHTML = 'Hello world!';
  }

  element.addEventListener('click', sayHelloWorld)
}

// EXECUTION
const domBtns = document.querySelectorAll('.btn');
domBtns.forEach(addClickToBtn); */




//! OPTION 2
// FUNCTIONS

/* const sayHelloWorld = event => {
  event.target.innerHTML = 'Hello world!';
}
const addClickToBtn = element => {
  element.addEventListener('click', sayHelloWorld)
}

// EXECUTION
const domBtns = document.querySelectorAll('.btn');
domBtns.forEach(addClickToBtn); */



//! OPTION 3
// FUNCTIONS

// EXECUTION
const domBtns = document.querySelectorAll('.btn');
domBtns.forEach(element => {
  element.addEventListener('click', event => {
    console.log(event.target);
    event.target.innerHTML = 'Hello world!';
  })
});


//! OPTION 3+
// FUNCTIONS

// EXECUTION
// document.querySelectorAll('.btn').forEach(element => element.addEventListener('click', event => event.target.innerHTML = 'Hello world!'));