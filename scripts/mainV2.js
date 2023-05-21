function updateEmptyState() {
    const ul = document.querySelector('.li-container ul');
    const emptyMessage = document.querySelector('.empty');
    
    if (ul.childElementCount === 0) {
      emptyMessage.style.display = 'inline';
    } 
    else {
      emptyMessage.style.display = 'none';
    }
}
  
function addTask(event) {
    event.preventDefault();
  
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const listItem = document.createElement('li');
      listItem.classList.add('task-item');
  
      const taskTextSpan = document.createElement('p');
      taskTextSpan.textContent = taskText;
  
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('btn-delete');
      deleteButton.textContent = 'X';
  
      deleteButton.addEventListener('click', function () {
        const listItem = deleteButton.parentNode;
        listItem.parentNode.removeChild(listItem);
        updateEmptyState();
      });
  
      listItem.appendChild(taskTextSpan);
      listItem.appendChild(deleteButton);
  
      const taskList = document.querySelector('.li-container ul');
      taskList.appendChild(listItem);
  
      taskInput.value = '';
      updateEmptyState();
    }
  }
  
  const addButton = document.querySelector('.btn-add');
  addButton.addEventListener('click', addTask);
  