// Countries that I have visited
const countries = [
  'Canada',   
  'Japan',
  'Mexico',
  'Haiti',
  'France'
];

function promptForCountry() {
  const newCountry = window.prompt(`Name a country you have visited`)
  countries.push(newCountry);
  displayAllCountries()
}

function displayAllCountries() {
  document.getElementById('visited').innerHTML = countries
  .map(c => `<li>I have been to: ${c}</li>`)
  .join('\n');          
}

// When the document is loaded
displayAllCountries();