/******* GLOABL VARIABLES/DATA ********/
// Define all of your variables here, including Object and Array references

const allCourses = [
  { // 0
    name: `Tools and Workflow`,
    code: `WDDM-115`,
    instructor: `Kadeem Best`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160,
    category: null
  },{  // 1
    name: `Applied Web Development`,
    code: `WDDM-113`,
    instructor: `Rocco Panacci`,
    start: { term: `Winter`, year: 2020 },
    weeks: 12,
    breaks: true,
    duration: 160,
    category: `development`
  },{ // 2
    name: `Applied Web Design`,
    code: `WDDM-114`,
    instructor: `Rocco Panacci`,
    start: { term: `Fall`, year: 2019 },
    weeks: 8,
    breaks: false,
    duration: 160,
    category: `design`
  },{ // 3
    name: `Design Technique`,
    code: `WDDM-116`,
    instructor: `Milorad Eftoski`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160,
    category: `design`
  },{ // 4
    name: `Prototyping`,
    code: `WDDM-117`,
    instructor: `Cory Coletta`,
    start: { term: `Fall`, year: 2019 },
    weeks: 3,
    breaks: true,
    duration: 160,
    category: `development`
  }
];


/************* FUNCTIONS *************/
// Now store all the functions that will manipulate the data


// UTILITY FUNCTIONS **************
const getDurationFromMinutes = minutes => {
  
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  // const mins = minutes - hrs * 60; // Could also use this

  return `${hrs} hr, ${mins} min`;
}

const isCourseInTerm = course => {
  // start: { term: `Fall`, year: 2019 },
  if (course.start.term == `Winter` && course.start.year == 2020) {
    return true;
  }
  return false;
}


// EVENT HANDLER FUNCTIONS **************
const toggleCourseView = event => {
  document.getElementById('courses').classList.toggle('grid-view');
}

const loadCoursesFromTerm = event => {
    
  const justFall2019 = allCourses.filter(isCourseInTerm);
  renderCoursesFromArray(justFall2019);
}

const loadCoursesByName = event => {

  const whatToSearch = document.getElementById('courseName').value;
  console.log(whatToSearch)
  const cleanVersion = whatToSearch.trim().toLowerCase();

  const resultsFromSearch = allCourses.filter(c => c.name.toLowerCase().includes(cleanVersion)  );
  renderCoursesFromArray(resultsFromSearch)
  // String methods:  trim(), toUpperCase() or toLowerCase(), then includes()
}

const loadCoursesByOrder = event => {
  console.log(event.target.value)

  if (event.target.value == 'weeksAsc') {
    // Smallest to largest
    const sortedCourses = allCourses.slice().sort((a, b) => a.weeks - b.weeks);
    renderCoursesFromArray(sortedCourses);
  } else if (event.target.value == 'weeksDesc') {
    // Largest to smallest
    const sortedCourses = allCourses.slice().sort((a, b) => b.weeks - a.weeks);
    renderCoursesFromArray(sortedCourses);
  } else if (event.target.value == 'nameAsc') {
    // Largest to smallest
    const sortedCourses = allCourses.slice().sort((a, b) => a.name.localeCompare(b.name));
    renderCoursesFromArray(sortedCourses);
  } else if (event.target.value == 'nameDesc') {
    // Largest to smallest
    const sortedCourses = allCourses.slice().sort((a, b) => b.name.localeCompare(a.name));
    renderCoursesFromArray(sortedCourses);
  }
}


// FUNCTIONS THAT BUILD OUR VIEW **************

// Function:
// Parameters: course:Object
// Return: String of HTML (<article>)
const getCourseAsHtmlString = course => {

  return `
    <article class="course ${(course.category) ? `cat-${course.category}` : ''}">
      <h3 id="name">${course.name}</h3>
      <ul class="course-info">
        <li>Course Code: <strong>${course.code}</strong></li>
        <li>Instructor: <strong>${course.instructor}</strong></li>
        <li>Start: <strong>${course.start.term} ${course.start.year}</strong></li>
        <li>
          Weeks: <strong>${course.weeks}</strong>
          <ul>
            <li>Includes Break: <strong>${(course.breaks) ? 'Yes' : 'No'}</strong></li>
          </ul>
        </li>
        <li>Duration: <strong>${getDurationFromMinutes(course.duration)}</strong></li>
      </ul>
    </article>`;
}

const renderCoursesFromArray = arr => {
  document.getElementById('courses').innerHTML = arr.map(getCourseAsHtmlString).join('\n');

  let res = 'results';
  if (arr.length == 1) {
    res = 'result'
  }
  //let res = (arr.length > 1) ? 'results' : 'result';

  document.getElementById('numResults').innerHTML = `(${arr.length} ${res})`;
}



/************* EXECUTABLE *************/

window.addEventListener('load', () => {

  // Event listeners
  document.getElementById('courseView').addEventListener('click', toggleCourseView);
  document.getElementById('fallCourses').addEventListener('click', loadCoursesFromTerm);
  document.getElementById('courseName').addEventListener('input', loadCoursesByName);
  document.getElementById('sortOrder').addEventListener('change', loadCoursesByOrder);

  // Start
  renderCoursesFromArray(allCourses);
});




/* 
- function with filter()
- Dynamic content
- Cleanup if statements
- Event delegation comparison
*/



/* 
? Today:
  * Selecting document elements in other ways
  * Iterating over multiple selections
  * Styling form elements (and states)
  * Events for <form>, <select>, type="radio", type="checkbox"
  * Sorting Arrays by number and string
  * Filtering examples

? Next class:
  * Pagination
    * Or autoload on scroll
    * Describe in words and drawings how this works
  * Touch on: insertAdjacentHTML, createElement, appendChild, insertAdjacentElement
    * Attach listeners easier
  * Talk about:
    * Assigning ids
    * Event delegation
*/


/* const sortByLetter = (a, b) => {
  if (a < b) {
    return -1;
  }
  return 1;
}

const words = ['a', 'd', 'b', 'A']
words.sort((a, b) => a.localeCompare(b));
console.log(words)

const unsorted = [100, 6, 30, 9, 7];
const sorted = unsorted.slice().sort((a, b) => a - b);  // make a copy

console.log(unsorted, sorted) */
