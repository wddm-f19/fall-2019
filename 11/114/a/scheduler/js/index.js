/******* GLOABL VARIABLES/DATA ********/
// Define all of your variables here, including Object and Array references

const allCourses = [
  {
    name: `Tools and Workflow`,
    code: `WDDM-115`,
    instructor: `Kadeem Best`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160
  },{
    name: `Applied Web Development`,
    code: `WDDM-113`,
    instructor: `Rocco Panacci`,
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
// Execute functions that will access data


// LAB:
// map() the Array to a new array of Strings (formatted as HTML)
// join() the NEW Array to a new String of HTML instructions (<article>)
// Assign the String to the document
// Test by adding a new Object to allCourses
