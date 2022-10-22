const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoUl = document.querySelector(".todo-list");

todoButton.addEventListener('click', addTodo);

function addTodo(e) {
    e.preventDefault();
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    console.log(todoInput.value);
    todoUl.appendChild(newTodo);
}