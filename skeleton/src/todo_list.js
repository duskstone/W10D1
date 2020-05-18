let todos = [];

const ul = document.querySelector('.todos');
const form = document.querySelector('.add-todo-form');

function addTodo(e){
    e.preventDefault();
    // debugger
    let input = document.querySelector('[name=add-todo]');
    let value = input.value;
    let toDo = {done: false, value};
    todos.push(toDo);
    populateList(todos) 
    localStorage.setItem('todos', JSON.stringify(todos));
    e.currentTarget.reset();
}

function populateList(todos) {
    todos.forEach(toDo => {
        // debugger
        const input = document.createElement('input');
        input.setAttribute('type','checkbox');
        const li = document.createElement('li');
        // debugger
        li.innerHTML = input.outerHTML + toDo.value;
        ul.append(li);
        todos.shift();
    })
}

form.addEventListener("submit", addTodo);