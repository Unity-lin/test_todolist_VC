const todoButtons = document.querySelectorAll(".todo-button");
const todoInputs = document.querySelectorAll(".todo-input");
const todoResult = document.querySelector(".todo-result");

todoButtons[0].addEventListener("click", submitTodoHandler);
todoButtons[1].addEventListener("click", completeHandler);
todoButtons[2].addEventListener("click", deleteHandler);

/* function submitTodoHandler(event) {
    console.log({
        type: event.type,
        id: event.target.id,
        name: event.target.name,
        value: event.target.value,
    });
    if(event.target.id == "btn1"){                  //submit 버튼 아이디
        
    }
   }
   */
   function submitTodoHandler(event) {
    if(event.target.id == "btn1"){
        const h2 = document.createElement('h2');
        const h2Text = document.createTextNode(todoInputs[0].value);
        const button1 = document.createElement('button');
        const button1Text = document.createTextNode('Done');
        const button2 = document.createElement('button');
        const button2Text = document.createTextNode('Delete');

        todoResult.appendChild(h2);
        todoResult.appendChild(button1);
        todoResult.appendChild(button2);
        h2.appendChild(h2Text);
        button1.appendChild(button1Text);
        button2.appendChild(button2Text);
    }
    
   }
   function deleteHandler(event) {
    if(event.target.id == "btn3"){          //delete 버튼 아이디    
                                            //list로 작업해야하나 
    } 
   }
   function completeHandler(event) {
    if(event.target.id == "btn2"){          //Done 버튼 아이디
        if(event.target.id == "H2S"){       //h2 아이디
                                            //todoResult 안에있는 h2글씨를 text-decoration : line-through을 해야하는데 막힘
            
        }
    }   
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


  /* var itemList = document.querySelector('.itemList');

var li = document.createElement('li');
var input = document.createElement('input');
var label = document.createElement('label');
var labelText = document.createTextNode('이벤트 위임 학습');

input.setAttribute('type', 'checkbox');
input.setAttribute('id', 'item3');
label.setAttribute('for', 'item3');
label.appendChild(labelText);
li.appendChild(input);
li.appendChild(label);
itemList.appendChild(li);

*/

