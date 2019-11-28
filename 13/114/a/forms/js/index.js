const byForms = document.forms.exampleForm;
const byId = document.getElementById('exFrm');

byForms.addEventListener('submit', event => {
  event.preventDefault();  // Required to stay on the page

  // event.target refers to the element from which this event was triggered

  // The form has been submit!
  console.log('Submit');

  console.log(event.target.elements.onOrOff.value);
  console.log(event.target.elements.sort.value);
});


//* Select 
document.getElementById('sortOrder').addEventListener('change', event => {
  console.log(event.target.value)
})


//*  Select all elements with name="onOrOff" 
//*  in <form> with name="exampleForm" in the document
const radios = document.forms.exampleForm.elements.onOrOff;
radios.forEach(element => {

  element.addEventListener('change', event => {
    console.log(event.target.value)
  })

})



