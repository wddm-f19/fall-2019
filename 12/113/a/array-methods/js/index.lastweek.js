// Countries that I have visited
const countries = [
  'Canada', 
  'Japan',
  'Mexico',
  'Haiti',
  'France'
];



function collectCountryFromUser(theList) {
  const responseCountry = window.prompt('Name a country you have visited');

  // Add something to the Array
  theList.push(responseCountry);
}


// Function: getCountriesAsHtml
// Paramaters: cntry(String)
// Returns: String of HTML (<li>)
function getCountriesAsHtml(cntry) {
  return `<li>I have been to ${cntry}</li>`;
}


// A map() takes each value from an Array, runs it through
// a formatting function, then returns a brand new Array (1:1)
const arrCountries = countries.map(getCountriesAsHtml);

// A join() takes each value from an Array, combines
// them all togehter as a String with a separater
const strCountries = arrCountries.join('\n');

// Ask the browser to create some new elements from
// a String of HTML instructions
const objVisited = document.getElementById('visited');
objVisited.innerHTML = strCountries;



//document.getElementById('visitied').innerHTML = countries.map(getCountriesAsHtml).join('\n');








// Function: getCountryAsListItem
// Parameters: country:String
// Returns: String of HTML (<li>)


// function getCountryAsListItem(country) {
//   return `<li>I have been to: ${country}</li>`;
// }


// const getCountryAsListItem = function(country) {
//   return `<li>I have been to: ${country}</li>`;
// }


// const getCountryAsListItem = (country) => {
//   return `<li>I have been to: ${country}</li>`;
// }


// const getCountryAsListItem = (country) => `<li>I have been to: ${country}</li>`;






// const htmlCountries = [];
// htmlCountries.push( getCountryAsListItem(countries[0]) )
// htmlCountries.push( getCountryAsListItem(countries[1]) )
// htmlCountries.push( getCountryAsListItem(countries[2]) )
// htmlCountries.push( getCountryAsListItem(countries[3]) )
// htmlCountries.push( getCountryAsListItem(countries[4]) )


// const htmlCountries = countries.map(c => `<li>I have been to: ${c}</li>`);

// const strCountries = htmlCountries.join('\n')

// document.getElementById('visited').innerHTML = strCountries;

// Make a new array that hold all the countries structured as HTML

