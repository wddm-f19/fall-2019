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
  },{ 
    name: 'Something else',
    categories: ['work', 'home', 'school']
  },{ 
    name: 'More things',
    categories: ['school']
  },{ 
    name: 'Yet another',
    categories: ['home', 'work']
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

  /*
  If a arr Object (a task) has any of the whichTagsAreChecked 
  categories as part of its Array of categories, we should
  filter-in(true), otherwise, filter-out(false)
  */

  const radioButtons = document.querySelectorAll('[name="tags"]');
  
  // Comparing methods speed wise: http://jsben.ch/3jotw
  
  const itemsInTheDesiredCategories = [];
  radioButtons.forEach(tag => {
    if (tag.checked) {
      arr.forEach(task => {
        if ( task.categories.includes(tag.value) && !itemsInTheDesiredCategories.includes(task)) {
          itemsInTheDesiredCategories.push(task);
        }
      });
    }
  });
  arr = itemsInTheDesiredCategories;

/*   const whichTagsAreChecked = [];
  radioButtons.forEach(tag => {
    if (tag.checked) {
      whichTagsAreChecked.push(tag.value);
    }
  });
  arr = arr.filter(task => {
    let isPartOfFilter = false;
    whichTagsAreChecked.forEach(cat => {
      if (task.categories.includes(cat)) {
        isPartOfFilter = true;
        return;
      }
    });
    return isPartOfFilter;
  }); */


/*   arr = arr.reduce((acc, task) => {
    for (const cat of task.categories) {
      let isPartOfFilter = false;
      radioButtons.forEach(tag => {
        if (tag.checked && tag.value == cat) {
          isPartOfFilter = true;
          return;
        }
      });
      if (isPartOfFilter) {
        return [...acc, task];
      }
    }
    return acc;
  },[]);
 */






  // arr = arr.filter(task => task.categories.filter(cat => whichTagsAreChecked.includes(cat)));
  document.getElementById('allTasks').innerHTML = arr.map(getTaskAsHtml).join('')
}

renderAllTasks(tasks);