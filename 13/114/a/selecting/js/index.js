// SELECT A SINGLE ELEMENT
const eleById = document.getElementById('doSomething');
const eleByQs = document.querySelector('body');
eleByQs.style.backgroundColor = 'tomato';   // Affects only the first one



// SELECT MULTIPLE ELEMENTS

// Select all matching elements, store as a NodeList (which is basically an Array)
const allBtns = document.querySelectorAll('.product .btn');

// For each of the buttons that I found, I want to change their innerHTML
allBtns.forEach(element => {

  element.addEventListener('click', event => {

    element.innerHTML = 'SELECTED!!';
  
  });

});