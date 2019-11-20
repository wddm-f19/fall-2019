// DATA
const todoList = [
  'Finish this lesson'
];


// FUNCTIONS
const addNewItem = () => {
  const newItemTodo = window.prompt('What do you want to do?');
  todoList.push(newItemTodo);
  renderTaskList();
}

const renderTaskList = () => {
  const eleTodo = document.getElementById('todo');
  eleTodo.innerHTML = todoList.map(t => `<li>${t}</li>`).join('\n');
}


// EXECUTION

window.addEventListener('load', () => {
// Now that the page has been loaded....

  // Event Listener
  // - What are we waiting for?
  // - What should I do when it happens?
  document.getElementById('addItem').addEventListener('click', addNewItem)

  // Render whatever was in the list to start
  renderTaskList();

});
