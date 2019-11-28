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
    weeks: 8,
    breaks: true,
    duration: 160,
    category: `development`
  },{ // 2
    name: `Applied Web Design`,
    code: `WDDM-114`,
    instructor: `Rocco Panacci`,
    start: { term: `Fall`, year: 2019 },
    weeks: 12,
    breaks: false,
    duration: 160,
    category: `design`
  },{ // 3
    name: `Design Technique`,
    code: `WDDM-116`,
    instructor: `Milorad Eftoski`,
    start: { term: `Fall`, year: 2019 },
    weeks: 3,
    breaks: true,
    duration: 160,
    category: `design`
  },{ // 4
    name: `Prototyping`,
    code: `WDDM-117`,
    instructor: `Cory Coletta`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160,
    category: `development`
  }
];


/************* FUNCTIONS *************/
// Now store all the functions that will manipulate the data

const getDurationFromMinutes = (minutes) => {
  
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  // const mins = minutes - hrs * 60; // Could also use this

  return `${hrs} hr, ${mins} min`;
}


const toggleCourseView = () => {
  document.getElementById('courses').classList.toggle('grid-view');
}


const checkForCourseName = () => {

  const whatToSearch = document.getElementById('courseName').value;
  console.log(whatToSearch)
  const cleanVersion = whatToSearch.trim().toLowerCase();

  const resultsFromSearch = allCourses.filter(c => c.name.toLowerCase().includes(cleanVersion)  );
  renderCoursesFromArray(resultsFromSearch)
  // String methods:  trim(), toUpperCase() or toLowerCase(), then includes()
}


const isCourseInTerm = (course) => {
  // start: { term: `Fall`, year: 2019 },
  if (course.start.term == `Winter` && course.start.year == 2020) {
    return true;
  }
  return false;
}

const loadCoursesFromTerm = () => {
    
  const justFall2019 = allCourses.filter(isCourseInTerm);
  renderCoursesFromArray(justFall2019);
}

const sortCourseWeeks = (arrToSort) => {
  return arrToSort.slice().sort((a, b) => a.weeks - b.weeks);
}
const sortCourseName = (arrToSort, dir='asc') => {
  if (dir == 'asc') {
    return arrToSort.slice().sort((a, b) => (b.name < a.name) ? 1 : -1);
  } else if (dir == 'desc') {
    return arrToSort.slice().sort((a, b) => (b.name < a.name) ? -1 : 1);
  } else {
    return arrToSort.slice();
  }
}

const sortSelectHasChanged = event => {
  const sort = event.target.value

  if (sort == 'weeks') {
    renderCoursesFromArray(sortCourseWeeks(allCourses))
  } else if (sort == 'nameAsc') {
    renderCoursesFromArray(sortCourseName(allCourses, 'asc'))
  } else if (sort == 'nameDesc') {
    renderCoursesFromArray(sortCourseName(allCourses, 'desc'))    
  }

}

// Function:
// Parameters: course:Object
// Return: String of HTML (<article>)
const getCourseAsHtmlString = (course) => {

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

const renderCoursesFromArray = (arr) => {
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
  document.getElementById('fallCourses').addEventListener('click', loadCoursesFromTerm);
  document.getElementById('courseView').addEventListener('click', toggleCourseView);
  document.getElementById('courseName').addEventListener('input', checkForCourseName);
  document.getElementById('sortOrder').addEventListener('change', sortSelectHasChanged)

  // Start
  renderCoursesFromArray(allCourses);
});



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