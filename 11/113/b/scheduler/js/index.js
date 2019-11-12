/******* GLOABL VARIABLES/DATA ********/
// Define all of your variables here, including Object and Array references

const course = {
  name: `Tools and Workflow`,
  code: `WDDM-115`,
  instructor: `Kadeem Best`,
  start: { term: `Fall`, year: 2019 },
  weeks: 15,
  breaks: true,
  duration: 160
};


/************* FUNCTIONS *************/
// Now store all the functions that will manipulate the data

function getDurationFromMinutes(minutes) {
  
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  // const mins = minutes - hrs * 60; // Could also use this

  return `${hrs} hr, ${mins} min`;
}



/************* EXECUTABLE *************/
// Execute functions that will access data

document.getElementById(`name`).innerHTML = course.name;
document.getElementById(`code`).innerHTML = course.code;
document.getElementById(`instructor`).innerHTML = course.instructor;
document.getElementById(`start`).innerHTML = `${course.start.term} ${course.start.year}`;
document.getElementById(`weeks`).innerHTML = course.weeks;
document.getElementById(`duration`).innerHTML = getDurationFromMinutes(course.duration);




// LAB: ARRAYS, PART 1
// 1. Create a 2nd course Object
// 2. Store both course Objects in an array whose reference is stored as: allCourses
//      allCourses is an [] (reference) that hold two identically structured Objects
// 3. Modify the lines above (32-37) to put the values from the first course into the document
// 4. Wrap the output code (lines 32-37) in a function called setCourseHtml()
//      It should take a single Object as a parameter and update the document to match the argument passed
//      For example:
//          setCourseHtml( allCourses[0] );   // Will set data from the first course to the document
//          setCourseHtml( allCourses[1] );   // Will set data from the second course to the document
//
// 5. (LATER) Write a function called getCourseAsHtmlString() (it will replace #4, just comment that function)
//      It should take a single course object as a parameter and return an HTML template string with the course data in it
//      Ie, Move the HTML for a course (<article>) from index.html to the function in Javascript
//      Fill it with the parameter Object's data, then return it
//      At the point it was called, get the return string and append it to <main> (which should be set with id="courses")

