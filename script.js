//selectors

const inputField = document.getElementById("input-field");
const addTodoButton = document.getElementById("addtodo-btn");
const todoContainer = document.getElementById("todo-list");
const clearTodoButton = document.getElementById("clearTodo-btn");

// event listeners
addTodoButton.addEventListener("click", addTodo);
clearTodoButton.addEventListener("click", clearTodo);

// functions

function addTodo() {
  const newTodo = document.createElement("p");
  newTodo.innerText = inputField.value;
  todoContainer.appendChild(newTodo);
  inputField.value = "";
  newTodo.addEventListener("click", function () {
    newTodo.classList.toggle("done-todo");
  });
  newTodo.addEventListener("dblclick", function () {
    todoContainer.removeChild(newTodo);
  });
}

function clearTodo() {
  todoContainer.innerHTML = "";
}
