const todoButtons = document.querySelectorAll(".todo-button");
const todoInputs = document.querySelectorAll(".todo-input");
const todoResult = document.querySelector(".todo-result");

todoButtons[0].addEventListener("click", eventAll);
todoButtons[1].addEventListener("click", eventAll);
todoButtons[2].addEventListener("click", eventAll);
todoButtons[3].addEventListener("click", eventAll);
todoButtons[4].addEventListener("click", eventAll);

function eventAll(event) {
    console.log({
        type: event.type,
        id: event.target.id,
        name: event.target.name,
        value: event.target.value,
    });
    if(event.target.id == "btn-1"){
        todoResult.innerHTML = todoInputs[0].value;
    }
    else if(event.target.id == "btn-2"){
        todoResult.innerHTML = todoInputs[1].value;
    }
    else if(event.target.id == "btn-3"){
        todoResult.innerHTML = todoInputs[2].value;
    }
    else if(event.target.id == "btn-4"){
        todoResult.innerHTML = todoInputs[3].value;
     }   
     else{
        todoResult.innerHTML = "";
        todoInputs.forEach(v => {
        todoResult.innerHTML += v.value + " ";
   });
     }
    }