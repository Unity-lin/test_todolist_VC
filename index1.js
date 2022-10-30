const todoButtons = document.querySelectorAll(".todo-button");
const todoInputs = document.querySelectorAll(".todo-input");
const todoResult = document.querySelector(".todo-result");

todoButtons[0].addEventListener("click", submitTodoHandler);

 function submitTodoHandler(event) {
    console.log({
        type: event.type,
        id: event.target.id,
        name: event.target.name,
        value: event.target.value,
    });
    if(event.target.id == "btn1"){
        todoResult.innerHTML = todoInputs.value;
    }
   }
function inputtextHandler() {
    alert("inputtextHander")
   }
   function statusHandler() {
    alert("statusHanlder")
   }
   function deleteHandler() {
    alert("deleteHandler")
   }
   function completeHandler() {
    alert("completeHandler")    
   }
   function filterHandler() {
    alert("completeHandler")    
   }
   function saveLocalTodolist() {
    alert("completeHandler")    
   }



