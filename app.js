//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event){
    // Prevents form from submitting
    event.preventDefault();

    // Create Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"><\i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // Trash mark button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"><\i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // Append to list
    todoList.appendChild(todoDiv);

    // Clear Todo Input value
    todoInput.value = '';
}

function deleteCheck(e){
    const item = e.target;

    // Delete todo item
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;

        // Fading animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    // Delete check marks
    if(item.classList[0] === 'complete-btn') {
        todo.classList.toggle('completed');
    }
}