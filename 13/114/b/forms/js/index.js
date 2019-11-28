// Text change/input event
const domTxt = document.getElementById('textName');

domTxt.addEventListener('input', event => {
  console.log(event.target.value);
})


// Dropdown change event
const domSelect = document.getElementById('selectLights');

domSelect.addEventListener('change', event => {
  console.log(event.target.value);
})


// Radio or checkbox change event
const domRadios = document.querySelectorAll('[name="radioOnOrOff"]')

domRadios.forEach(radioBtn => {
  radioBtn.addEventListener('change', event => {
    console.log(event.target.value);
    if (event.target.value == "0") {
      document.querySelector('body').style.backgroundColor = '#111';
    } else {
      document.querySelector('body').style.backgroundColor = '#fff';
    }
  })
})


// Select a form by "forms" and by "id"
const formByForms = document.forms.exampleForm;
const formById = document.getElementById('exFrm');

// Submit event

formById.addEventListener('submit', event => {
  event.preventDefault();

  console.log(event.target.elements.myName.value)
  console.log(event.target.elements.selectOnOrOff.value)
  console.log(event.target.elements.radioOnOrOff.value)
})

