const countries = [
  'Canada', 
  'Japan', 
  'South Africa', 
  'Argentina', 
  'Haiti'
];

const newCountry = prompt('Name a country that you have visited.');
countries.push(newCountry)

// Function: formatCountriesAsHtml
// Parameters: cntry:String
// Return: String of HTML (<li>)
function getStringAsListItem(cntry) {
  return `<li>I have visited ${cntry}.</li>`;
}

// The map() function loops through EACH value in an array, 
// works with it, returns a new Array (1 for 1)
const newCntry = countries.map(getStringAsListItem); // map() returns Array

// The join() function takes each value in an Array combining
// it together to create a String, separating by a newline (\n)
const cntryStr = newCntry.join('\n'); // join() returns String

// Take our new string, put into the document
document.getElementById('myFavCountries').innerHTML = cntryStr;



// countries.push('Japan');
// countries.push('South Africa');
// countries.push('Argentina');
// countries.push('Haiti');

// countries:Array, length = 5




// document.getElementById('myFavCountries').innerHTML = newCntry.join('\n');