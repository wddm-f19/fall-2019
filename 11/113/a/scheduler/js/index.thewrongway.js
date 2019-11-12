const course1 = {
  name: `Tools and Workflow`,
  code: `WDDM-115`,
  instructor: `Kadeem Best`,
  start: { term: `Fall`, year: 2019 },
  weeks: 15,
  breaks: true,
  duration: 160
};

document.getElementById(`name1`).innerHTML = course1.name;
document.getElementById(`code1`).innerHTML = course1.code;
document.getElementById(`instructor1`).innerHTML = course1.instructor;
document.getElementById(`start1`).innerHTML = `${course1.start.term} ${course1.start.year}`;
document.getElementById(`weeks1`).innerHTML = course1.weeks;
document.getElementById(`duration1`).innerHTML = getDurationFromMinutes(course1.duration);



const course2 = {
  name: `Design & Something`,
  code: `WDDM-117`,
  instructor: `Cory Coletta`,
  start: { term: `Fall`, year: 2019 },
  weeks: 15,
  breaks: true,
  duration: 160
};

document.getElementById(`name2`).innerHTML = course2.name;
document.getElementById(`code2`).innerHTML = course2.code;
document.getElementById(`instructor2`).innerHTML = course2.instructor;
document.getElementById(`start2`).innerHTML = `${course2.start.term} ${course2.start.year}`;
document.getElementById(`weeks2`).innerHTML = course2.weeks;
document.getElementById(`duration2`).innerHTML = getDurationFromMinutes(course2.duration);








function getDurationFromMinutes(minutes) {
  
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  // const mins = minutes - hrs * 60; // Could also use this

  return `${hrs} hr, ${mins} min`;
}

getDurationFromMinutes(160);  // 2 hr, 40 min
