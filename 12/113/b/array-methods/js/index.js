// Countries that I have visited
const countries = [
  'Canada', 
  'Japan',
  'Mexico',
  'Haiti',
  'France'
];


function addToCountries(country) {
  countries.push(country);
  renderCountries();
}

function renderCountries() {
  document.getElementById('visited').innerHTML = countries
    .map(c => `<li>I have been to ${c}</li>`)
    .join('\n');
}

// Run this the first time.
renderCountries()






// function getCountyAsHtml(country) {
//   return `<li>I have been to ${country}</li>`;
// }

// const getCountyAsHtml = function(country) {
//   return `<li>I have been to ${country}</li>`;
// }

// const getCountyAsHtml = (country) => {
//   return `<li>I have been to ${country}</li>`;
// }



// let strOfCountries = '';
// strOfCountries += getCountyAsHtml(countries[0]);
// strOfCountries += getCountyAsHtml(countries[1]);
// strOfCountries += getCountyAsHtml(countries[2]);
// strOfCountries += getCountyAsHtml(countries[3]);
// strOfCountries += getCountyAsHtml(countries[4]);
// document.getElementById('visited').innerHTML = strOfCountries;