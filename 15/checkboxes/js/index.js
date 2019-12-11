const tasks = [
  { 
    name: 'Pickup groceries',
    categories: ['home'] 
  },{ 
    name: 'Complete homework',
    categories: ['home', 'school'] 
  },{ 
    name: 'Submit hours',
    categories: ['work']
  }
];

document.querySelectorAll('[name="tags"]').forEach(tag => {
  tag.addEventListener('change', event => {
    // console.log(event.target.value);
    renderAllTasks(tasks);
  })
});


const getCategoryAsHtml = (c) => {
  return `<span class="category ${c}">${c}</span>`
}

const getTaskAsHtml = (t) => {
  return `
    <li>
      ${t.name} 
      ${t.categories.map(getCategoryAsHtml).join('\n')}
    </li>`;
}

// One time call
const renderAllTasks = (arr) => {

  const whichTagsAreChecked = [];
  
  document.querySelectorAll('[name="tags"]').forEach(tag => {
    if (tag.checked) {
      whichTagsAreChecked.push(tag.value);
    }
  });

  // console.log('Only showing: ' + whichTagsAreChecked.join(', '));
  // console.log(arr.map(t => t.categories.join(', ')));


  arr = arr.filter(task => {

    let isPartOfFilter = false;
    whichTagsAreChecked.forEach(cat => {
      if (task.categories.includes(cat))
        isPartOfFilter = true;
    });

    console.log(task.name, isPartOfFilter);

    if (isPartOfFilter) {
      return true;
    }
    return false;
  })



  

  /*
  If a arr Object (a task) has any of the whichTagsAreChecked 
  categories as part of its Array of categories, we should
  filter-in(true), otherwise, filter-out(false)
  */




  // arr = arr.filter(task => task.categories.filter(cat => whichTagsAreChecked.includes(cat)));
  document.getElementById('allTasks').innerHTML = arr.map(getTaskAsHtml).join('')
}

renderAllTasks(tasks);