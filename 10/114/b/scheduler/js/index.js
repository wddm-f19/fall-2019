// const courseName = `Tools & Workflow`;
// const courseCode = `WDDM-115`;
// const courseInstructor = `Kadeem Best`;
// const courseStart = `Fall 2019`;
// const courseWeeks = 15;
// const courseBreak = true; // Boolean
// const courseDuration = 160;

// const start = { 
//   term: `Fall`, // String for now
//   year: 2019 
// }

// OBJECT
const course = {
  name: `Tools & Workflow`,
  code: `WDDM-115`,
  instructor: `Kadeem Best`,
  start: { term: `Fall`, year: 2019 },
  weeks: 15,
  break: true,
  duration: 160
};




// LAB:
// Write a function that takes a number of minutes
// and returns a string formatted as hours:minutes
// Example: 160 would return `2 hrs, 40 mins`
// Reminder: 
//      divide = /
//      remainder: %

// Standard Rounding:
//      Math.round( 4.15 )     // 4 (standard rounding)
//      Math.round( 4.85 )     // 5 (standard rounding)

// Round in one direction (up or down)
//      Math.floor( 4.85 )     // 4 (ALWAYS round down)
//      Math.ceil( 4.15 )      // 5 (ALWAYS round up)



// Receives a Number of minutes, returns a String in the format: H hrs, M mins
// Example:     getDurationFromMinutes(160) // 2 hrs, 40 mins
function getDurationFromMinutes (minutes) {

  let hrs = Math.floor(minutes / 60);
  let mins = minutes % 60;
  
  return `${hrs} hr, ${mins} min`;
}





// HTML Elements are Objects
// Object (technically, it's a reference to an object)
document.getElementById(`name`).innerHTML = course.name;
document.getElementById(`code`).innerHTML = course.code;
document.getElementById(`instructor`).innerHTML = course.instructor;
document.getElementById(`start`).innerHTML = `${course.start.term} ${course.start.year}`;
document.getElementById(`weeks`).innerHTML = course.weeks;
document.getElementById(`break`).innerHTML = course.break;
document.getElementById(`duration`).innerHTML = getDurationFromMinutes(course.duration);

document.getElementById(`name`).style.color = `#f00`;