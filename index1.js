const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", submitTodoHandler);
todoList.addEventListener("click", checkedOne);


   function submitTodoHandler(event) {

        const todoUl = document.createElement("ul");
	    todoUl.classList.add("todo");
        
        console.log(todoInput.value);
        const newTodo =  document.createElement("li");
        newTodo.innerText = todoInput.value;

        newTodo.classList.add("todo-item");
        todoUl.appendChild(newTodo);
        todoInput.value = "";

        //Create Completed Button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = `DONE`;
        completedButton.classList.add("complete-btn");
        todoUl.appendChild(completedButton);

        const trashButton = document.createElement("button");
        trashButton.innerHTML = 'DELETE';
        trashButton.classList.add("trash-btn");
        todoUl.appendChild(trashButton);

        todoList.appendChild(todoUl);

   }
   function checkedOne(event) {

    
    const item = event.target;
    console.log(item);
    console.log(item.classList[0]);

    if(item.classList[0] === "trash-btn"){
        const todoDelete = item.parentElement;
        todoDelete.remove();
    }

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
		todo.classList.toggle("completed");
    }


   }
   function completeHandler(event) {
    
   }




   function inputtextHandler() {
    alert("inputtextHander")
   }
   function statusHandler() {
    alert("statusHanlder")
   }
   function filterHandler() {
    alert("completeHandler")    
   }
   function saveLocalTodolist() {
    alert("completeHandler")    
   }




