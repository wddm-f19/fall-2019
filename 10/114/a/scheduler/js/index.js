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

function minutesToDuration (mins) { 
  let duration = ``;
  
  // How do we get from mins to duration?

  return duration;
}



// HTML Elements are Objects
// Object (technically, it's a reference to an object)
document.getElementById(`name`).innerHTML = course.name;
document.getElementById(`code`).innerHTML = course.code;
document.getElementById(`instructor`).innerHTML = course.instructor;
document.getElementById(`start`).innerHTML = `${course.start.term} ${course.start.year}`;
document.getElementById(`weeks`).innerHTML = course.weeks;
document.getElementById(`break`).innerHTML = course.break;
document.getElementById(`duration`).innerHTML = course.duration;
