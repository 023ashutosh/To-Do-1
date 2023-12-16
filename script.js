
let enterTitle = document.getElementById("enterTitle")
let enterTodo = document.getElementById("enterTodo");
let addTodo = document.getElementById("addTodo");
let deleteTodo = document.getElementById("deleteTodo");
let deleteAllTodo = document.getElementById("deleteAllTodo")
let viewTodo = document.getElementById("viewTodo");
let todo = document.getElementById("todo");

let EnterTitle = ""
let EnterToDo = ""

addTodo.addEventListener("click", (e) => {
  e.preventDefault()
  EnterTitle = enterTitle.value
  EnterTodo = enterTodo.value
  localStorage.setItem(EnterTitle,JSON.stringify([EnterTodo]))
  console.log(`${EnterTitle} : ${EnterTodo}`)
  
  viewTodo.innerHTML = 
    `<h1>${ EnterTitle } </h1>
    <p> ${ EnterTodo } </p>
    `
})


deleteTodo.addEventListener("click", (e) => {
  localStorage.removeItem(EnterTitle)
  console.log(`Todo removed`)
})


  deleteAllTodo.addEventListener("click", (e) => {
  localStorage.clear()
  console.log(`All Todos removed`)
})
