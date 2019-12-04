/******* GLOABL VARIABLES/DATA ********/
// Define all of your variables here, including Object and Array references

const shoppingCart = [
  {courseid: 101, qty: 1}
];

const allCourses = [
  { // 0
    id: 101, 
    name: `Tools and Workflow`,
    code: `WDDM-115`,
    instructor: `Kadeem Best`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160,
    category: null,
    available: 6
  },{  // 1
    id: 102, 
    name: `Applied Web Development`,
    code: `WDDM-113`,
    instructor: `Rocco Panacci`,
    start: { term: `Winter`, year: 2020 },
    weeks: 12,
    breaks: true,
    duration: 160,
    category: `development`,
    available: 2
  },{ // 2
    id: 103, 
    name: `Applied Web Design`,
    code: `WDDM-114`,
    instructor: `Rocco Panacci`,
    start: { term: `Fall`, year: 2019 },
    weeks: 8,
    breaks: false,
    duration: 160,
    category: `design`,
    available: 12
  },{ // 3
    id: 104, 
    name: `Design Technique`,
    code: `WDDM-116`,
    instructor: `Milorad Eftoski`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160,
    category: `design`,
    available: 0
  },{ // 4
    id: 105, 
    name: `Prototyping`,
    code: `WDDM-117`,
    instructor: `Cory Coletta`,
    start: { term: `Fall`, year: 2019 },
    weeks: 3,
    breaks: true,
    duration: 160,
    category: `development`,
    available: 10
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

const addItemToCart = courseid => {
  /*
  if (this id already exist in the Array) {
    Update the quantity of the item
  } else if (it does not exist) {
    Add a new item to the shoppingCart
  }
  */
​
  // Is it important to return a value here? 
  //    Why would we? Why not?
  // What else might we need/want this function to do? 
  //    If anything, weigh the pros/cons of doing it here vs elsewhere
}
​

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

const handleClickOfCourses = event => {
  if (!event.target.matches('button.course-register')) {
    return;
  }

  const courseid = parseInt(event.target.dataset.courseid);
  
  addItemToCart(courseid);
}

// FUNCTIONS THAT BUILD OUR VIEW **************

// Function:
// Parameters: course:Object
// Return: String of HTML (<article>)
const getCourseAsHtmlString = course => {

  let callout = ``;
  let soldout = ``;
  let register = `<button type="button" class="course-register" data-courseid="${course.id}">Register</button>`;
  if (course.available <= 0) {
    callout = `<small class="callout">Sold out</small>`;
    soldout = `soldout`;
    register = ``;
  } else if (course.available < 5) {
    callout = `<small class="callout urgent">Limited seats remaining</small>`;
  }

  return `
    <article class="course ${(course.category) ? `cat-${course.category}` : ''} ${soldout}">
      <h3 id="name">${course.name} ${callout}</h3>
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
      ${register}
    </article>`;
}

const renderCoursesFromArray = arr => {
  document.getElementById('courses').innerHTML = arr.map(getCourseAsHtmlString).join('\n');

  let res = 'results';
  if (arr.length == 1) {
    res = 'result'
  }
  document.getElementById('numResults').innerHTML = `(${arr.length} ${res})`;

  // document.querySelectorAll('button.course-register').forEach(btn => {
  //   btn.addEventListener('click', event => {
  //     console.log(event);
  //   })
  // });
}



/************* EXECUTABLE *************/

window.addEventListener('load', () => {

  // Event listeners
  document.getElementById('courseView').addEventListener('click', toggleCourseView);
  document.getElementById('fallCourses').addEventListener('click', loadCoursesFromTerm);
  document.getElementById('courseName').addEventListener('input', loadCoursesByName);
  document.getElementById('sortOrder').addEventListener('change', loadCoursesByOrder);
  document.getElementById('courses').addEventListener('click', handleClickOfCourses);

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
