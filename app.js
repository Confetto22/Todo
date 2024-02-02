// const inputButtonEl = document.querySelector("input");
const todoInputEl = document.querySelector("input");
const todoItemEl = document.querySelector(".todo__item");
const todoListEl = document.querySelector(".todo__list");
const todoTextEl = document.querySelector(".todo__text")
const doneButtonEl = document.querySelectorAll(".done__button")
const allTodoItems = document.querySelectorAll(".todo__item")

const header = document.querySelector("h1");



// function toggleUndo() {
//     doneButtonEl.forEach(single => {
//         single.addEventListener("click", function(undo){
//             single.textContent = ("Undo");
            
//         })

        
//     })
    
// }
// toggleUndo();





// function done() {
//     doneButtonEl.forEach(button => {
//         button.addEventListener("click", function () {
//             let spanElement = button.previousElementSibling
//             spanElement.classList.toggle("done");
//         })
//     });
    
// }


// function done() {
//     doneButtonEl.forEach(actual=> {
//         actual.addEventListener("click", function () {
//             let greyText = actual.previousElementSibling
//             greyText.classList.toggle("done")
//       })
//     })
// }

function done() {
    doneButtonEl.forEach(thing => {
        thing.addEventListener("click", function () {
            
            let textGrey = thing.previousElementSibling;
            textGrey.classList.toggle("done")  

            // thing.textContent = textGrey.classList.contains("done") ? "undo" : "Done";

            if (thing.textContent = textGrey.classList.contains("done")) {
                thing.textContent = "Undo"
            } else thing.textContent = "Done";

         
        })
    }) 
    
    }

done();




function createButton() {
    // let newButton = document.createElement("button");
    // newButton.setAttribute("class", "done__button")
    // newButton.innerHTML = "Done"

      let newButton = document.createElement("button");
  newButton.setAttribute("class", "done__button");
  newButton.textContent = "Done";
    return newButton;
}




function createListItem(text) {
  let newListItem = document.createElement("li");
  newListItem.setAttribute("class", "todo__item");
    
    let newSpan = document.createElement("span");
    newSpan.setAttribute("class", "todo__text");
    newSpan.textContent = todoInputEl.value;
    let newButton = createButton();
    newListItem.appendChild(newSpan);
    newListItem.appendChild(newButton);
    
    function newDone() {
    newButton.addEventListener("click", function () {
        newSpan.classList.toggle("done");

         if (newButton.textContent = newSpan.classList.contains("done")) {
                newButton.textContent = "Undo"
            } else newButton.textContent = "Done";
    })
}
newDone();

    return newListItem;
    
    
    
}




function addListItem() {
    todoInputEl.addEventListener("keypress", function (event) {
      
       

      if (event.keyCode === 13) {
        if (!todoInputEl.value) {
             alert("Enter something!")
             return
         }
        let newListItem = createListItem(todoInputEl.value );
        todoListEl.insertBefore(newListItem, todoListEl.childNodes[0]);
            // todoListEl.insertBefore(newListItem, todoListEl.childNodes[0])    
        
            
        todoInputEl.value = "";
      }
      
  });
    
}


addListItem();



