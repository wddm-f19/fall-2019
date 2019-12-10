const tasks = [
  { 
    name: 'Pickup groceries',
    categories: ['home'] 
  },{ 
    name: 'Complete homework',
    categories: ['home', 'school'] 
  }
];

document.querySelectorAll('[name="tags"]').forEach(tag => {
  tag.addEventListener('change', event => {
    console.log(event.target.value);
  })
});


const getTaskAsHtml = (t) => {
  return `<li>${t.name}</li>`;
}


const renderAllTasks = (arr) => {

  const whichTagsAreChecked = [];
  
  document.querySelectorAll('[name="tags"]').forEach(tag => {
    if (tag.checked) {
      whichTagsAreChecked.push(tag.value);
    }
  });

  console.log(whichTagsAreChecked);

  document.getElementById('allTasks').innerHTML = arr.map(getTaskAsHtml).join('')
}

renderAllTasks(tasks);