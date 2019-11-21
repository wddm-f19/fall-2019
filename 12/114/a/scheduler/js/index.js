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
    duration: 160
  },{  // 1
    name: `Applied Web Development`,
    code: `WDDM-113`,
    instructor: `Rocco Panacci`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160
  },{ // 2
    name: `Applied Web Design`,
    code: `WDDM-114`,
    instructor: `Rocco Panacci`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160
  },{ // 3
    name: `Design Technique`,
    code: `WDDM-116`,
    instructor: `Milorad Eftoski`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160
  }
];


/************* FUNCTIONS *************/
// Now store all the functions that will manipulate the data

function getDurationFromMinutes(minutes) {
  
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  // const mins = minutes - hrs * 60; // Could also use this

  return `${hrs} hr, ${mins} min`;
}

// Function:
// Parameters: course:Object
// Return: String of HTML (<article>)
function getCourseAsHtmlString(course) {
  return `
    <article class="course">
      <h3 id="name">${course.name}</h3>
      <ul>
        <li>Course Code: <strong>${course.code}</strong></li>
        <li>Instructor: <strong>${course.instructor}</strong></li>
        <li>Start: <strong>${course.start.term} ${course.start.year}</strong></li>
        <li>
          Weeks: <strong>${course.weeks}</strong>
          <ul>
            <li>Includes Break: <strong>${course.breaks}</strong></li>
          </ul>
        </li>
        <li>Duration: <strong>${getDurationFromMinutes(course.duration)}</strong></li>
      </ul>
    </article>`;
}

/************* EXECUTABLE *************/


window.addEventListener('load', () => {

  const printThreeCourses = (arr) => {
    document.getElementById('courses').innerHTML = arr.slice(0, 3).map(getCourseAsHtmlString).join('\n')
  }
  
  document.getElementById('loadCourses').addEventListener('click', () => {
    printThreeCourses(allCourses)
  });
  
});

