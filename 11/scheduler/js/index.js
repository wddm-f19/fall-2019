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
document.getElementById(`start`).innerHTML = `${course.start.term} ${course.start.year}`;
document.getElementById(`weeks`).innerHTML = course.weeks;
document.getElementById(`duration`).innerHTML = getDurationFromMinutes(course.duration);

// LAB: ARRAYS, PART 1
// 1. Create a 2nd course Object
// 2. Store both course Objects in an array whose reference is stored as: allCourses
//      allCourses is an [] (reference) that hold two identically structured Objects
// 3. Modify the lines above (11-16) to put the values from the first course into the document
// 4. (Later) Move the HTML for course into a Javascript function that returns a formatted HTML string

function getDurationFromMinutes(minutes) {
  
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  // const mins = minutes - hrs * 60; // Could also use this

  return `${hrs} hr, ${mins} min`;
}

getDurationFromMinutes(160);  // 2 hr, 40 min
