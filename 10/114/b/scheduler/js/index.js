const courseName = `Tools and Workflow`;
const courseCode = `WDDM-115`;
const courseInstructor = `Kadeem Best`;
const courseStart = `Fall 2019`;
const courseWeeks = 15; // 1 class per week (assumed)
const courseBreaks = true; // Boolean
const courseDuration = 160; // Minutes per class


const course = {
  name: `Tools and Workflow`,
  code: `WDDM-115`,
  instructor: `Kadeem Best`,
  start: { term: `Fall`, year: 2019 },
  weeks: 15,
  breaks: true,
  duration: 160
};

document.getElementById(`name`).innerHTML = course.name;
document.getElementById(`code`).innerHTML = course.code;
document.getElementById(`instructor`).innerHTML = course.instructor;
document.getElementById(`start`).innerHTML = course.start;
document.getElementById(`weeks`).innerHTML = course.weeks;
document.getElementById(`duration`).innerHTML = course.duration;
