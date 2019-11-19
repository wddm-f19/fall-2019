//!       VARIABLES/DATA
// Countries that I have visited
const tasksTodo = ['Starting task'];
const workTodo = [];


//!       FUNCTIONS
function promptForTask(listToUpdate, whichElement) {
  const newTask = window.prompt(`What do you need to get done?`);
  listToUpdate.push(newTask);
  displayAllTasks(listToUpdate, whichElement)
}

// Function: displayAllTasks
// Parameters:
//    whichList:Array (the list we want to print)
//    whichElement:String (id of the element to write into)

function displayAllTasks(whichList, whichElement) {
  document.getElementById(whichElement).innerHTML = whichList
    .map(t => `<li>${t}</li>`)
    .join('\n');          
}



//!       APPLICATION (EXECUTION)


window.addEventListener('load', function() {
// The HTML page (window) has now loaded completely

  // Event: What are we waiting for? 'click'
  // Handler: What do we do when we hear it? promptForTask
  document.getElementById('newTask').addEventListener('click', function() {
    promptForTask(tasksTodo, 'todo');
  });

  document.getElementById('newWorkTask').addEventListener('click', function() {
    promptForTask(workTodo, 'work');
  });

  // When the document is loaded
  displayAllTasks(tasksTodo, 'todo');
  displayAllTasks(workTodo, 'work');


})

